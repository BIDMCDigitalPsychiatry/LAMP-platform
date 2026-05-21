import React, { useState, useMemo, useEffect } from 'react';
import styles from './ProjectGallery.module.css';

interface Tag {
  id: string;
  tagID: string;
  name: string;
}

interface Publication {
  id: string;
  doi: string;
  title: string;
  year: number | null;
  url: string;
}

interface Project {
  id: string;
  projectID: string;
  name: string;
  shortDescription: string;
  mindLAMPFeatures: string;
  institutions: string;
  countries: string[];
  status: string;
  start: number | null;
  end: number | null;
  participants: number | null;
  studyDuration: string;
  projectDuration: string;
  population: string;
  ageRange: string;
  irb: string;
  funding: string;
  tags: Tag[];
  publications: Publication[];
}

type SortOption = 'start-desc' | 'start-asc' | 'name-asc' | 'participants';

// Import projects data
let projectsData: Project[] = [];
try {
  projectsData = require('@site/static/data/projects.json');
} catch {
  projectsData = [];
}

// Status colors (keys match Notion Stage values) - using mindLAMP brand colors
const STATUS_COLORS: Record<string, string> = {
  Active: '#64cebf',     // mindlamp-teal
  Complete: '#86b6ff',   // mindlamp-blue
};

const ProjectGallery: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<Set<string>>(new Set());
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [selectedCountries, setSelectedCountries] = useState<Set<string>>(new Set());
  const [sortOption, setSortOption] = useState<SortOption>('start-desc');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [expandedTags, setExpandedTags] = useState<Set<string>>(new Set());
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [highlightedCard, setHighlightedCard] = useState<string | null>(null);

  const projects = projectsData as Project[];

  // Extract unique values for filters
  const { uniqueStatuses, uniqueTags, uniqueCountries } = useMemo(() => {
    const statuses = [...new Set(projects.map(p => p.status).filter(Boolean))].sort();

    const tagMap = new Map<string, Tag>();
    projects.forEach(proj => {
      proj.tags?.forEach(tag => {
        if (!tagMap.has(tag.id)) {
          tagMap.set(tag.id, tag);
        }
      });
    });
    const tags = Array.from(tagMap.values()).sort((a, b) => a.name.localeCompare(b.name));

    const countries = [...new Set(projects.flatMap(p => p.countries || []))].sort();

    return { uniqueStatuses: statuses, uniqueTags: tags, uniqueCountries: countries };
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase();

    let filtered = projects.filter(p => {
      const statusOk = selectedStatus.size === 0 || selectedStatus.has(p.status);
      const tagOk = selectedTags.size === 0 || (p.tags && p.tags.some(tag => selectedTags.has(tag.id)));
      const countryOk = selectedCountries.size === 0 || (p.countries && p.countries.some(c => selectedCountries.has(c)));

      const searchFields = [
        p.name,
        p.shortDescription,
        p.institutions,
        p.population,
        p.mindLAMPFeatures,
        ...(p.tags?.map(t => t.name) || []),
        ...(p.countries || []),
        ...(p.publications?.map(pub => pub.title) || [])
      ].join(' ').toLowerCase();
      const searchOk = !q || searchFields.includes(q);

      return statusOk && tagOk && countryOk && searchOk;
    });

    filtered.sort((a, b) => {
      switch (sortOption) {
        case 'start-desc':
          return (b.start || 0) - (a.start || 0);
        case 'start-asc':
          return (a.start || 0) - (b.start || 0);
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'participants':
          return (b.participants || 0) - (a.participants || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, selectedStatus, selectedTags, selectedCountries, searchQuery, sortOption]);

  // Stats
  const stats = useMemo(() => {
    const activeCount = filteredProjects.filter(p => p.status === 'Active').length;
    const totalParticipants = filteredProjects.reduce((sum, p) => sum + (p.participants || 0), 0);
    const uniqueCountriesCount = new Set(filteredProjects.flatMap(p => p.countries || [])).size;
    const totalPubs = filteredProjects.reduce((sum, p) => sum + (p.publications?.length || 0), 0);

    return {
      total: filteredProjects.length,
      active: activeCount,
      participants: totalParticipants,
      countries: uniqueCountriesCount,
      publications: totalPubs,
      isFiltered: filteredProjects.length !== projects.length,
      fullTotal: projects.length
    };
  }, [projects, filteredProjects]);

  // Toggle functions
  const toggleStatus = (status: string) => {
    setSelectedStatus(prev => {
      const next = new Set(prev);
      next.has(status) ? next.delete(status) : next.add(status);
      return next;
    });
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev => {
      const next = new Set(prev);
      next.has(tagId) ? next.delete(tagId) : next.add(tagId);
      return next;
    });
  };

  const toggleCountry = (country: string) => {
    setSelectedCountries(prev => {
      const next = new Set(prev);
      next.has(country) ? next.delete(country) : next.add(country);
      return next;
    });
  };

  const toggleCard = (projectID: string) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      next.has(projectID) ? next.delete(projectID) : next.add(projectID);
      return next;
    });
  };

  const toggleTagsExpanded = (projectID: string) => {
    setExpandedTags(prev => {
      const next = new Set(prev);
      next.has(projectID) ? next.delete(projectID) : next.add(projectID);
      return next;
    });
  };

  const handleReset = () => {
    setSelectedStatus(new Set());
    setSelectedTags(new Set());
    setSelectedCountries(new Set());
    setSortOption('start-desc');
    setSearchQuery('');
  };

  const hasFilters = selectedStatus.size > 0 || selectedTags.size > 0 || selectedCountries.size > 0 || searchQuery;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.dropdown}`)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Deep link support
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.substring(1));
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setHighlightedCard(targetId);
        }
      }, 300);
    }
  }, []);

  // Clear highlight on click anywhere
  useEffect(() => {
    if (!highlightedCard) return;
    const handleClick = () => setHighlightedCard(null);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [highlightedCard]);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  if (projects.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Project Gallery</h1>
            <p className={styles.heroSubtitle}>
              No projects loaded. Please ensure the Notion sync has been run.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>mindLAMP in Action</div>
          <h1 className={styles.heroTitle}>Project Gallery</h1>
          <p className={styles.heroSubtitle}>
            Explore real-world deployments of mindLAMP across diverse populations and institutions worldwide.
          </p>

          {/* Stats Badges */}
          <div className={styles.statsBadges}>
            <div className={styles.statBadge}>
              <span className={styles.statNumber}>{formatNumber(stats.participants)}</span>
              <span className={styles.statLabel}>Participants</span>
            </div>
            <div className={styles.statBadge}>
              <span className={styles.statNumber}>
                {stats.total}
                {stats.isFiltered && <span className={styles.statTotal}>/{stats.fullTotal}</span>}
              </span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statBadge}>
              <span className={styles.statNumber}>{stats.active}</span>
              <span className={styles.statLabel}>Active</span>
            </div>
            <div className={styles.statBadge}>
              <span className={styles.statNumber}>{stats.countries}</span>
              <span className={styles.statLabel}>Countries</span>
            </div>
          </div>
        </div>
      </header>

      {/* Filters Section */}
      <section className={styles.filtersSection}>
        <div className={styles.filtersContainer}>
          {/* Sort */}
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownTrigger}
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown(activeDropdown === 'sort' ? null : 'sort');
              }}
            >
              Sort
              <span className={styles.dropdownIcon}>{activeDropdown === 'sort' ? '\u25B2' : '\u25BC'}</span>
            </button>
            {activeDropdown === 'sort' && (
              <div className={styles.dropdownMenu}>
                {[
                  { value: 'start-desc', label: 'Newest First' },
                  { value: 'start-asc', label: 'Oldest First' },
                  { value: 'name-asc', label: 'Name (A-Z)' },
                  { value: 'participants', label: 'Most Participants' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    className={`${styles.sortItem} ${sortOption === opt.value ? styles.sortItemActive : ''}`}
                    onClick={() => {
                      setSortOption(opt.value as SortOption);
                      setActiveDropdown(null);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          {/* Status Filter */}
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownTrigger}
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown(activeDropdown === 'status' ? null : 'status');
              }}
            >
              {selectedStatus.size > 0 ? `Status (${selectedStatus.size})` : 'Status'}
              <span className={styles.dropdownIcon}>{activeDropdown === 'status' ? '\u25B2' : '\u25BC'}</span>
            </button>
            {activeDropdown === 'status' && (
              <div className={styles.dropdownMenu}>
                {uniqueStatuses.map(status => (
                  <label key={status} className={styles.checkboxItem}>
                    <input
                      type="checkbox"
                      checked={selectedStatus.has(status)}
                      onChange={() => toggleStatus(status)}
                    />
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        className={styles.statusDot}
                        style={{ backgroundColor: STATUS_COLORS[status] || '#999' }}
                      />
                      {status}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Tags Filter */}
          {uniqueTags.length > 0 && (
            <div className={styles.dropdown}>
              <button
                className={styles.dropdownTrigger}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === 'tags' ? null : 'tags');
                }}
              >
                {selectedTags.size > 0 ? `Tags (${selectedTags.size})` : 'Tags'}
                <span className={styles.dropdownIcon}>{activeDropdown === 'tags' ? '\u25B2' : '\u25BC'}</span>
              </button>
              {activeDropdown === 'tags' && (
                <div className={styles.dropdownMenu}>
                  {uniqueTags.map(tag => (
                    <label key={tag.id} className={styles.checkboxItem}>
                      <input
                        type="checkbox"
                        checked={selectedTags.has(tag.id)}
                        onChange={() => toggleTag(tag.id)}
                      />
                      <span>{tag.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Country Filter */}
          {uniqueCountries.length > 0 && (
            <div className={styles.dropdown}>
              <button
                className={styles.dropdownTrigger}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(activeDropdown === 'country' ? null : 'country');
                }}
              >
                {selectedCountries.size > 0 ? `Country (${selectedCountries.size})` : 'Country'}
                <span className={styles.dropdownIcon}>{activeDropdown === 'country' ? '\u25B2' : '\u25BC'}</span>
              </button>
              {activeDropdown === 'country' && (
                <div className={styles.dropdownMenu}>
                  {uniqueCountries.map(country => (
                    <label key={country} className={styles.checkboxItem}>
                      <input
                        type="checkbox"
                        checked={selectedCountries.has(country)}
                        onChange={() => toggleCountry(country)}
                      />
                      <span>{country}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Reset */}
          {hasFilters && (
            <button className={styles.resetBtn} onClick={handleReset}>
              Clear Filters
            </button>
          )}
        </div>

        {/* Results count */}
        {hasFilters && (
          <div className={styles.resultsInfo}>
            Showing {stats.total} of {stats.fullTotal} projects
          </div>
        )}
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsGrid}>
        {filteredProjects.map((project) => {
          const isExpanded = expandedCards.has(project.projectID);
          const statusColor = STATUS_COLORS[project.status] || '#999';
          const isHighlighted = highlightedCard === project.projectID;

          return (
            <article
              key={project.projectID}
              className={`${styles.projectCard} ${isHighlighted ? styles.highlighted : ''}`}
              id={project.projectID}
              style={{ borderLeftColor: statusColor }}
            >
              {/* Header with status and dates */}
              <div className={styles.cardHeader}>
                <span
                  className={styles.statusPill}
                  style={{ backgroundColor: statusColor }}
                >
                  {project.status || 'Unknown'}
                </span>
                {(project.start || project.end) && (
                  <span className={styles.dateRange}>
                    {project.start || '?'} - {project.end || 'ongoing'}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className={styles.cardTitle}>{project.name}</h3>

              {/* Short description */}
              <p className={styles.description}>
                {project.shortDescription?.slice(0, 200)}
                {(project.shortDescription?.length || 0) > 200 ? '...' : ''}
              </p>

              {/* Quick stats */}
              <div className={styles.quickStats}>
                {project.participants && (
                  <span className={styles.quickStat}>
                    <strong>{formatNumber(project.participants)}</strong> participants
                  </span>
                )}
                {project.countries && project.countries.length > 0 && (
                  <span className={styles.quickStat}>
                    {project.countries.length === 1
                      ? project.countries[0]
                      : `${project.countries.length} countries`}
                  </span>
                )}
                {project.publications && project.publications.length > 0 && (
                  <span className={styles.quickStat}>
                    <strong>{project.publications.length}</strong> publication{project.publications.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className={styles.tagsList}>
                  {(expandedTags.has(project.projectID) ? project.tags : project.tags.slice(0, 4)).map((tag) => (
                    <span
                      key={tag.id}
                      className={styles.tag}
                    >
                      {tag.name}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <button
                      className={styles.tagMore}
                      onClick={() => toggleTagsExpanded(project.projectID)}
                    >
                      {expandedTags.has(project.projectID) ? 'Show less' : `+${project.tags.length - 4}`}
                    </button>
                  )}
                </div>
              )}

              {/* Expand/Collapse */}
              <button
                className={styles.expandBtn}
                onClick={() => toggleCard(project.projectID)}
              >
                {isExpanded ? 'Show Less' : 'Show Details'}
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className={styles.expandedContent}>
                  {project.institutions && (
                    <div className={styles.detailSection}>
                      <h4>Institutions</h4>
                      <p>{project.institutions}</p>
                    </div>
                  )}

                  {project.population && (
                    <div className={styles.detailSection}>
                      <h4>Population</h4>
                      <p>{project.population}</p>
                    </div>
                  )}

                  {project.ageRange && (
                    <div className={styles.detailSection}>
                      <h4>Age Range</h4>
                      <p>{project.ageRange}</p>
                    </div>
                  )}

                  {project.mindLAMPFeatures && (
                    <div className={styles.detailSection}>
                      <h4>mindLAMP Features Used</h4>
                      <p>{project.mindLAMPFeatures}</p>
                    </div>
                  )}

                  {project.projectID === 'PRJ-0033' && (
                    <div className={styles.detailSection}>
                      <h4>Feature Showcase</h4>
                      <p>
                        <a href="/projects/safeguard">
                          View Safeguard feature showcase &rarr;
                        </a>
                      </p>
                    </div>
                  )}

                  {project.studyDuration && (
                    <div className={styles.detailSection}>
                      <h4>Participant Duration</h4>
                      <p>{project.studyDuration}</p>
                    </div>
                  )}

                  {project.projectDuration && (
                    <div className={styles.detailSection}>
                      <h4>Project Timeline</h4>
                      <p>{project.projectDuration}</p>
                    </div>
                  )}

                  {project.publications && project.publications.length > 0 && (
                    <div className={styles.detailSection}>
                      <h4>Related Publications</h4>
                      <div className={styles.publicationsList}>
                        {project.publications.map((pub) => (
                          <a
                            key={pub.id}
                            href={`/publications#${encodeURIComponent(pub.doi)}`}
                            className={styles.publicationChip}
                          >
                            {pub.title} {pub.year && `(${pub.year})`}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.countries && project.countries.length > 1 && (
                    <div className={styles.detailSection}>
                      <h4>Countries</h4>
                      <p>{project.countries.join(', ')}</p>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className={styles.emptyState}>
          <h3>No projects found</h3>
          <p>Try adjusting your filters or search query.</p>
          <button className={styles.resetBtnLarge} onClick={handleReset}>
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
