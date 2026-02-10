# Tag Restructure Log

## Task Overview
Restructure the Notion Tags database for mindLAMP projects with a new standardized tag schema.

---

## Final Tag Schema (21 tags)

| Tag ID | Description |
|--------|-------------|
| personality | Personality traits/disorders (borderline, narcissistic, etc.) - No current projects |
| psychotic | Schizophrenia, CHR-p, FEP, hallucinations, schizoaffective |
| neurocognitive | Alzheimer's, Parkinson's, MCI, dementia + cognitive games/training studies |
| neurodevelopmental | Autism, ADHD, learning disorders, intellectual disabilities, Tourette's |
| bipolar | Bipolar I, II, cyclothymia |
| depressive | MDD, persistent depressive, postpartum, treatment-resistant depression |
| obsessive-compulsive | OCD, body dysmorphia, trichotillomania - No current projects |
| stress-trauma | PTSD, acute stress, adjustment disorders, elevated PSS |
| eating | Anorexia, bulimia, binge eating - No current projects |
| sleep | Sleep disorders, insomnia, circadian issues - No current projects |
| addictive | Substance use disorders + problematic internet/social media/phone use |
| anxiety | GAD, social anxiety, phobias, panic disorder |
| sex-gender-sexuality | LGBTQ+, OBGYN, menstrual, pregnancy/perinatal, gendered anatomy |
| family | Child-parent, spouse relationships - No current projects |
| race-ethnicity-language | Racial/ethnic/linguistic focus + international/global mental health |
| low-income | Underserved, low-income, rural, limited healthcare access |
| military-veteran | Veterans, active military, homeless veterans |
| child | Ages 0-11 - No current projects |
| adolescent | Ages 12-17, clinical adolescents |
| young-adult | Ages 18-25, college students |
| older-adult | Ages 60+, cognitive aging, seniors |

---

## Changes Made

### Tags Merged/Archived (7 tags removed)
| Old Tag | Action | Target |
|---------|--------|--------|
| religion | Archived | (no projects) |
| infant | Archived | (no projects) |
| race-ethnicity-&-language | Merged | race-ethnicity-language |
| stress-&-trauma | Merged | stress-trauma |
| military-&-veteran | Merged | military-veteran |
| obgyn | Merged | sex-gender-sexuality |
| addiction | Merged | addictive |

### Projects Updated with Merged Tags
- PRJ-0005, PRJ-0006, PRJ-0009, PRJ-0010, PRJ-0013, PRJ-0014, PRJ-0015, PRJ-0016, PRJ-0018, PRJ-0020, PRJ-0025, PRJ-0026, PRJ-0027, PRJ-0031

### Additional Tag Assignments
| Project | Tags Added | Reason |
|---------|-----------|--------|
| PRJ-0001 | race-ethnicity-language | International consortium (43 sites, 13 countries) |
| PRJ-0002 | neurocognitive, race-ethnicity-language | Cognitive games + India sites |
| PRJ-0004 | neurocognitive | Trails-B, N-Back cognitive assessments |
| PRJ-0010 | neurocognitive | Cognitive games intervention |
| PRJ-0011 | neurocognitive | Jewels, Spatial Span assessments |
| PRJ-0017 | neurocognitive | SMART cognitive training app |
| PRJ-0020 | race-ethnicity-language | Bulgaria study |
| PRJ-0029 | neurocognitive | Jewels cognitive game |

### Tag Descriptions Updated
All 21 active tags received comprehensive descriptions based on project analysis.

---

## Tags With No Current Projects (6)
These tags exist for future studies:
- personality
- obsessive-compulsive
- eating
- sleep
- family
- child

---

## Final Statistics
- **Active Tags**: 21
- **Archived Tags**: 7
- **Active Projects**: 31
- **Projects Updated**: 22

---

## Completed: 2026-02-05

---

## Phase 2: Publication Tagging (Completed)

### Task
Analyze 49 publications without project links and assign appropriate tags directly.

### Changes Made

1. **Added `directTagIDs` relation field** to Publications database
   - Allows publications to have direct tags independent of project links
   - Complements existing `tags` rollup from projects

2. **Tagged 30 publications** based on title/content analysis:

| Category | Count | Tags Applied |
|----------|-------|--------------|
| Schizophrenia/Psychosis | 11 | psychotic, neurocognitive |
| Depression | 7 | depressive, neurocognitive |
| Anxiety | 1 | anxiety |
| Cognitive/Aging | 1 | neurocognitive, older-adult |
| Stress/Trauma | 1 | stress-trauma |
| Addictive behaviors | 2 | addictive, young-adult, adolescent |
| International | 3 | race-ethnicity-language |
| Mixed conditions | 4 | various combinations |

3. **19 methodology/platform papers** remain untagged:
   - mindLAMP platform papers (7)
   - Digital phenotyping methodology papers (6)
   - AI/ML review papers (3)
   - Ethics papers (2)
   - General mental health app reviews (1)

   These don't fit clinical condition-based tags and serve as general methodology references.

### Final Statistics (after initial tagging)
- **Publications with project links**: 71 (inherit tags from projects)
- **Publications with direct tags**: 30 (condition-specific research)
- **Methodology papers (no clinical tags)**: 19

### Tag Migration (Phase 2b)
Copied tags from project rollup into `directTagIDs` field so tags are directly connected to publications.

**Results:**
- **101 publications** now have direct tags in `directTagIDs`
- **19 publications** remain without tags (methodology/platform papers)

**Tag distribution:**
| Tags per publication | Count |
|---------------------|-------|
| 1 tag | 19 |
| 2 tags | 21 |
| 3 tags | 30 |
| 4 tags | 18 |
| 5 tags | 8 |
| 6 tags | 4 |
| 7 tags | 1 |

The `tags` rollup field can now be safely deleted if desired (not deleted per user request).

### Completed: 2026-02-05
