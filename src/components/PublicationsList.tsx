import React, { useState, useMemo, useEffect } from 'react';
import styles from './PublicationsList.module.css';

interface Tag {
  id: string;
  tagID: string;
  name: string;
}

interface Project {
  id: string;
  projectID: string;
  name: string;
}

interface Publication {
  id: string;
  doi: string;
  title: string;
  citation: string;
  year: number | null;
  url: string;
  abstract: string;
  mindlampRelevance: string;
  projects: Project[];
  tags: Tag[];
}

type SortOption = 'year-desc' | 'year-asc' | 'title-asc' | 'title-desc';

// Import publications data
let publicationsData: Publication[] = [];
try {
  publicationsData = require('@site/static/data/publications.json');
} catch {
  publicationsData = [];
}

// Color palette for cards (cycling through these)
const CARD_COLORS = [
  '#5b9bfc', // primary blue
  '#3dbf8f', // mint
  '#9C27B0', // purple
  '#FF9800', // orange
  '#E91E63', // pink
  '#607D8B', // blue-grey
];

const PublicationsList: React.FC = () => {
  const [selectedYears, setSelectedYears] = useState<Set<number>>(new Set());
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [sortOption, setSortOption] = useState<SortOption>('year-desc');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const publications = publicationsData as Publication[];

  // Extract unique years and tags
  const { uniqueYears, uniqueTags } = useMemo(() => {
    const years = [...new Set(publications.map(p => p.year).filter(Boolean))]
      .sort((a, b) => (b as number) - (a as number));

    const tagMap = new Map<string, Tag>();
    publications.forEach(pub => {
      pub.tags?.forEach(tag => {
        if (!tagMap.has(tag.id)) {
          tagMap.set(tag.id, tag);
        }
      });
    });
    const tags = Array.from(tagMap.values()).sort((a, b) => a.name.localeCompare(b.name));

    return { uniqueYears: years as number[], uniqueTags: tags };
  }, [publications]);

  // Filter and sort publications
  const filteredPublications = useMemo(() => {
    const q = searchQuery.toLowerCase();

    let filtered = publications.filter(p => {
      const yearOk = selectedYears.size === 0 || (p.year && selectedYears.has(p.year));
      const tagOk = selectedTags.size === 0 || (p.tags && p.tags.some(tag => selectedTags.has(tag.id)));

      const searchFields = [
        p.title,
        p.citation,
        p.abstract,
        p.doi,
        p.mindlampRelevance,
        ...(p.tags?.map(t => t.name) || []),
        ...(p.projects?.map(pr => pr.name) || [])
      ].join(' ').toLowerCase();
      const searchOk = !q || searchFields.includes(q);

      return yearOk && tagOk && searchOk;
    });

    filtered.sort((a, b) => {
      switch (sortOption) {
        case 'year-desc':
          return (b.year || 0) - (a.year || 0);
        case 'year-asc':
          return (a.year || 0) - (b.year || 0);
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [publications, selectedYears, selectedTags, searchQuery, sortOption]);

  // Stats - based on currently displayed (filtered) publications
  const stats = useMemo(() => {
    const displayedYears = new Set(filteredPublications.map(p => p.year).filter(Boolean));

    // Count unique tags (domains) from displayed publications
    const displayedTags = new Set<string>();
    filteredPublications.forEach(pub => {
      pub.tags?.forEach(tag => displayedTags.add(tag.id));
    });

    return {
      publications: filteredPublications.length,
      years: displayedYears.size,
      domains: displayedTags.size,
      isFiltered: filteredPublications.length !== publications.length,
      total: publications.length,
    };
  }, [publications, filteredPublications]);

  // Toggle functions
  const toggleYear = (year: number) => {
    setSelectedYears(prev => {
      const next = new Set(prev);
      next.has(year) ? next.delete(year) : next.add(year);
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

  const toggleCard = (doi: string) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      next.has(doi) ? next.delete(doi) : next.add(doi);
      return next;
    });
  };

  const handleReset = () => {
    setSelectedYears(new Set());
    setSelectedTags(new Set());
    setSortOption('year-desc');
    setSearchQuery('');
  };

  const hasFilters = selectedYears.size > 0 || selectedTags.size > 0 || searchQuery;

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
          // Auto-expand the card
          setExpandedCards(prev => new Set(prev).add(targetId));
        }
      }, 300);
    }
  }, []);

  const getSafeId = (pub: Publication) => {
    return pub.doi ? encodeURIComponent(pub.doi) : pub.title.toLowerCase().replace(/\s+/g, '-');
  };

  if (publications.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Publications</h1>
            <p className={styles.heroSubtitle}>
              No publications loaded. Please ensure the Notion sync has been run.
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
          <div className={styles.heroTagline}>Peer-Reviewed Research</div>
          <h1 className={styles.heroTitle}>MindLAMP Publications</h1>
          <p className={styles.heroSubtitle}>
            Explore the growing body of research using mindLAMP across diverse populations and clinical domains.
          </p>

          {/* Stats Badges */}
          <div className={styles.statsBadges}>
            <div className={styles.statBadge}>
              <span className={styles.statNumber}>
                {stats.publications}
                {stats.isFiltered && <span className={styles.statTotal}>/{stats.total}</span>}
              </span>
              <span className={styles.statLabel}>Publications</span>
            </div>
            <div className={styles.statBadge}>
              <span className={styles.statNumber}>{stats.years}</span>
              <span className={styles.statLabel}>Years</span>
            </div>
            <div className={styles.statBadge}>
              <span className={styles.statNumber}>{stats.domains}</span>
              <span className={styles.statLabel}>Domains</span>
            </div>
          </div>
        </div>
      </header>

      {/* Filters Section */}
      <section className={styles.filtersSection}>
        <div className={styles.filtersContainer}>
          {/* Search */}
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          {/* Year Filter */}
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownTrigger}
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown(activeDropdown === 'year' ? null : 'year');
              }}
            >
              {selectedYears.size > 0 ? `Year (${selectedYears.size})` : 'Year'}
              <span className={styles.dropdownIcon}>{activeDropdown === 'year' ? '\u25B2' : '\u25BC'}</span>
            </button>
            {activeDropdown === 'year' && (
              <div className={styles.dropdownMenu}>
                {uniqueYears.map(year => (
                  <label key={year} className={styles.checkboxItem}>
                    <input
                      type="checkbox"
                      checked={selectedYears.has(year)}
                      onChange={() => toggleYear(year)}
                    />
                    <span>{year}</span>
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
                  { value: 'year-desc', label: 'Newest First' },
                  { value: 'year-asc', label: 'Oldest First' },
                  { value: 'title-asc', label: 'Title (A-Z)' },
                  { value: 'title-desc', label: 'Title (Z-A)' },
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
            Showing {stats.publications} of {stats.total} publications
          </div>
        )}
      </section>

      {/* Publications Grid */}
      <section className={styles.publicationsGrid}>
        {filteredPublications.map((pub, index) => {
          const safeId = getSafeId(pub);
          const isExpanded = expandedCards.has(pub.doi || safeId);
          const cardColor = CARD_COLORS[index % CARD_COLORS.length];

          return (
            <article
              key={pub.doi || pub.title}
              className={styles.pubCard}
              id={safeId}
              style={{ borderLeftColor: cardColor }}
            >
              {/* Header with year and link */}
              <div className={styles.cardHeader}>
                {pub.year && (
                  <span className={styles.yearPill} style={{ backgroundColor: cardColor }}>
                    {pub.year}
                  </span>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                    title="View publication"
                  >
                    View Paper &#8599;
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className={styles.cardTitle}>{pub.title || 'Untitled'}</h3>

              {/* Citation preview */}
              <p className={styles.citationPreview}>
                {pub.citation?.slice(0, 150)}{pub.citation?.length > 150 ? '...' : ''}
              </p>

              {/* Tags */}
              {pub.tags && pub.tags.length > 0 && (
                <div className={styles.tagsList}>
                  {pub.tags.slice(0, 3).map((tag) => (
                    <span key={tag.id} className={styles.tag}>
                      {tag.name}
                    </span>
                  ))}
                  {pub.tags.length > 3 && (
                    <span className={styles.tagMore}>+{pub.tags.length - 3}</span>
                  )}
                </div>
              )}

              {/* Expand/Collapse */}
              <button
                className={styles.expandBtn}
                onClick={() => toggleCard(pub.doi || safeId)}
              >
                {isExpanded ? 'Show Less' : 'Show Details'}
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className={styles.expandedContent}>
                  {pub.mindlampRelevance && (
                    <div className={styles.detailSection}>
                      <h4>MindLAMP Relevance</h4>
                      <p>{pub.mindlampRelevance}</p>
                    </div>
                  )}

                  {pub.projects && pub.projects.length > 0 && (
                    <div className={styles.detailSection}>
                      <h4>Related Projects</h4>
                      <div className={styles.projectsList}>
                        {pub.projects.map((project) => (
                          <span key={project.id} className={styles.projectChip}>
                            {project.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {pub.citation && (
                    <div className={styles.detailSection}>
                      <h4>Full Citation</h4>
                      <p>{pub.citation}</p>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* Empty state */}
      {filteredPublications.length === 0 && (
        <div className={styles.emptyState}>
          <h3>No publications found</h3>
          <p>Try adjusting your filters or search query.</p>
          <button className={styles.resetBtnLarge} onClick={handleReset}>
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default PublicationsList;
