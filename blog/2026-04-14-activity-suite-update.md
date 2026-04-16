---
slug: activity-suite-update-april-2026
title: "Activity Suite Update: Enriched Data Output, Bug Fixes, and New Assessments in Development"
authors: [edenrozenblit, mattflathers]
tags: [updates, announcements]
draft: true
---

mindLAMP's cognitive assessment suite has been updated with enriched data output, bug fixes, and improved mobile responsiveness. All changes to existing games are **backward-compatible** — existing data fields are preserved and continue to mean the same thing. New fields have been added alongside the old ones to support richer analysis. Additionally, 14 new cognitive assessments are in development and will be available in a future release.

<!-- truncate -->

## What's Changed Now

The following changes are live in the current version of mindLAMP.

### Enriched Data Output (Additive Only)

Several existing games now produce additional fields in `static_data` and `temporal_slices`. **All previously existing fields are preserved and unchanged.** If your analysis pipelines already work with these games, they will continue to work without modification. The new fields are available if you want to take advantage of richer data going forward.

| Game | New Fields | What You Can Do With Them | Documentation |
|------|-----------|--------------------------|---------------|
| **Digit Span** | `forward_span`, `backward_span`, `total_raw_score`, `forward_trials_correct`, `backward_trials_correct` | Compute standard WAIS-IV span scores directly. The forward-backward span difference indexes executive contribution to working memory. All legacy fields (`score`, `correct_answers`, `bestForwardDigitSpan`, etc.) are retained and computed the same way. | [Digit Span docs](/activities/reference/digit-span) |
| **Spatial Span** | `max_span`, `total_score`, `mode`, `level_results`, `levels_completed`, `starting_span`, `total_levels` | Standard Corsi block-tapping scoring. `max_span` is the primary visuospatial memory measure. `level_results` provides per-trial span, accuracy, and response time for error-pattern analysis. All legacy fields (`correct_answers`, `score`, `StartTime`, `EndTime`, etc.) are retained. | [Spatial Span docs](/activities/reference/spatial-span) |
| **Pop the Bubbles** | `levels` array (with `go_correct`, `go_total`, `go_missed`, `nogo_correct`, `nogo_total`, `nogo_wrong`), `score`, `correct_answers`, `wrong_answers` | Compute commission error rate (`nogo_wrong / nogo_total`) for inhibitory control and omission error rate (`go_missed / go_total`) for sustained attention — the core clinical distinction in go/no-go tasks. Previously, go and no-go performance were lumped together. | [Pop the Bubbles docs](/activities/reference/pop-the-bubbles) |
| **Spin the Wheel** | `risk_taking_rate`, `net_earnings`, `mean_reaction_time`, `total_high_risk_choices`, `total_low_risk_choices`, `final_balance`, `starting_balance` | `risk_taking_rate` is the primary risk preference measure (0.5 = no preference). Per-spin `temporal_slices` now include `risk_level`, `win_amount`, `loss_amount`, and `balance_after`, enabling analysis of post-outcome risk adjustment. Previously `static_data` was empty. | [Spin the Wheel docs](/activities/reference/spin-the-wheel) |
| **Trails B** | `level_summaries` (per-level `duration_ms`, `correct_taps`, `wrong_taps`), `end_reason`, `total_taps`, `total_items` | Per-level completion time (the standard TMT-B metric) and error classification. `end_reason` enables filtering out incomplete administrations. All legacy fields (`correct_answers`, `score`, `percentageCorrectOverall`, etc.) are retained. | [Trails B docs](/activities/reference/trails-b) |
| **D-Cog** | No new data fields. | Dog visibility increased from 1 to 2 seconds. No-response rounds are no longer counted as successes. | [D-Cog docs](/activities/reference/d-cog) |

**Data collected before this update is not affected.** These changes apply only to new activity completions going forward. Your existing data remains valid and usable.

### Rewritten Activities

The following activities have been substantially rewritten with new data schemas. If you have existing analysis pipelines for these games, review the updated documentation.

| Game | What Changed | Documentation |
|------|-------------|---------------|
| **Balloon Risk (BART)** | Rewritten with standard BART metrics. `avg_pumps_collected` is the primary risk-taking index (pumps on non-popped balloons only). `balloon_results` provides per-balloon pump counts and outcomes for learning-curve analysis. `breakpoints` echoes the hidden pop thresholds, enabling risk calibration analysis. The previous `static_data.points` field (total pumps from collected balloons) is now `total_earnings` — same value, same calculation. | [Balloon Risk docs](/activities/reference/balloon-risk) |
| **Scratch Card** | Rewritten with per-card results and structured data. `avg_scratch_time_ms` measures psychomotor speed. Per-card `scratch_path` (sampled pointer trajectory with timestamps) and scene element bounding boxes enable spatial analysis of visual attention and motor control. The previous version had minimal data output. | [Scratch Card docs](/activities/reference/scratch-card) |

### Post-Game Questionnaire

All modernized games now include a brief post-game questionnaire with two ratings (instruction clarity and willingness to repeat, each on a 1-5 scale). This data appears in the `questionnaire` field within `static_data`. Participants will see two emoji-based rating screens after completing each game.

### Bug Fixes

| Game | Fix |
|------|-----|
| **Jewels A and B** | Selecting "No" on the continue prompt was incorrectly advancing to the next level instead of ending the game. Now correctly ends the session. |
| **Pop the Bubbles** | Score screen now displays after the final round before the questionnaire. Improved tap responsiveness on mobile devices. |
| **D-Cog** | No-response rounds are no longer counted as successes. Audio feedback replaced with subtle chimes. |
| **Symbol-Digit Substitution** | Fixed an issue where the previous guess button stayed highlighted in the next round. |
| **All games** | Post-game questionnaire emoji faces now display in consistent left-to-right order (sad to happy). |

## What's Coming: 14 New Cognitive Assessments

Fourteen new standardized cognitive assessments have been developed and are currently in testing. These will be available in a future release once dashboard integration and broader platform updates are complete.

| Game | Cognitive Domain |
|------|-----------------|
| [Tower of London](/activities/reference/tower-of-london) | Planning and problem-solving |
| [Wisconsin Card Sorting Test](/activities/reference/wcst) | Cognitive flexibility and set-shifting |
| [Water Sort](/activities/reference/water-sort) | Planning and executive function |
| [Stroop](/activities/reference/stroop) | Selective attention and interference suppression |
| [Flanker](/activities/reference/flanker) | Attentional control and conflict resolution |
| [N-Back](/activities/reference/nback) | Working memory updating |
| [Simple RT](/activities/reference/simple-rt) | Processing speed and reaction time |
| [Nonogram](/activities/reference/nonogram) | Logic and deductive reasoning |
| [Sliding Puzzle](/activities/reference/sliding-puzzle) | Spatial planning |
| [Memory Match](/activities/reference/memory-match) | Visual-spatial recognition memory |
| [Mental Rotation](/activities/reference/mental-rotation) | Spatial visualization |
| [Lexical Decision](/activities/reference/lexical-decision) | Word recognition and language processing |
| [Letter Logic](/activities/reference/letter-logic) | Vocabulary and constraint satisfaction |
| [Delay Discounting](/activities/reference/delay-discounting) | Temporal impulsivity and reward valuation |

Each new game includes configurable difficulty levels, comprehensive data dictionaries with per-field documentation, and support for 10 languages. Full documentation for all 14 games is already available at the links above so you can review the assessments, data schemas, and configuration options in advance.

We'll publish a follow-up post when these games are available for use.

## What This Means for You

**Researchers with active studies:** If you use Balloon Risk or Scratch Card, review the updated documentation as those data schemas have changed. For all other games, your existing analysis code will continue to work — all legacy fields are preserved. New fields are available if you want richer data going forward.

**Digital navigators and coordinators:** The participant experience for existing games is largely unchanged. The most noticeable difference is the post-game questionnaire (two quick ratings after each game). No action is needed on your part.

**Participants:** Existing games look and feel the same. No action needed.

## Reporting Issues

If you encounter any problems with the updated games, please [submit a bug report](https://digitalpsychiatry.notion.site/33033133d8a280c3851cf122683616d1?pvs=105) or [file an issue on GitHub](https://github.com/BIDMCDigitalPsychiatry/LAMP-activities/issues).

## Documentation

All activity documentation has been updated:

- [Activity Reference](/activities/reference) — Complete list of all activities
- [Capabilities: Collect](/capabilities/collect) — Updated showcase with game icons and cognitive domains
