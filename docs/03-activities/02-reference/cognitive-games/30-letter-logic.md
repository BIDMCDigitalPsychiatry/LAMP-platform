---
slug: "/activities/reference/letter-logic"
sidebar_position: 30
sidebar_label: Letter Logic
title: "Letter Logic"
---

# Letter Logic

Letter Logic is a constrained word-guessing task that measures vocabulary breadth, hypothesis testing, constraint satisfaction, and working memory updating. Participants guess a secret 5-letter word, receiving color-coded feedback after each attempt: green for correct position, yellow for correct letter in wrong position, and gray for letters not in the word. The task combines linguistic knowledge with logical deduction.

**ActivitySpec:** `lamp.letter_logic`

**Cognitive domain:** Vocabulary, hypothesis testing, constraint satisfaction, working memory

## Configuration

| Setting | Description |
|---------|-------------|
| **Difficulty** | Controls number of rounds and guesses per round |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Difficulty | `difficulty` | string | "medium" |

</details>

### Sample Instructions

*"Guess the secret 5-letter word in 6 tries. After each guess, tiles change color: green means the letter is correct and in the right spot, yellow means the letter is in the word but in the wrong spot, and gray means the letter is not in the word."*

## Usage

Target words are drawn from a pool of 2,003 common 5-letter words (SUBTLEX-US Zipf frequency ≥ 3.5), and valid guesses come from a broader list of 5,567 words (Zipf ≥ 2.0). Letter evaluation uses a two-pass system: exact position matches (green) are identified first, then wrong-position matches (yellow).

An on-screen QWERTY keyboard displays color-coded keys tracking letter status across guesses, helping the participant track which letters have been confirmed, relocated, or eliminated.

Difficulty levels control the structure: Easy (3 rounds, 8 guesses each), Medium (5 rounds, 6 guesses each), and Hard (7 rounds, 5 guesses each).

### Scoring

Primary metrics are rounds solved, mean guesses to solve, and guess efficiency (proportion of guess budget used). The guess distribution shows frequency of solving in 1, 2, 3, etc. guesses.

<details>
<summary>References</summary>

1. Berger, J. (2023). Wordle and constraint satisfaction: cognitive mechanisms underlying word-guessing games. Cognitive Science, 47(3), e13281.

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `rounds_solved` | number | Rounds where the word was found |
| `rounds_failed` | number | Rounds where guesses ran out |
| `rounds_total` | number | Total rounds played |
| `mean_guesses_to_solve` | number | Average guesses needed on solved rounds |
| `mean_guess_efficiency` | number | Proportion of guess budget used |
| `mean_solve_time_ms` | number | Average time to solve a round (ms) |
| `guess_distribution` | number[] | Frequency of solving in 1, 2, 3... guesses |
| `difficulty` | string | Difficulty level used |
| `max_guesses` | number | Guess budget per round |
| `score` | number | Overall score |
| `correct_answers` | number | Rounds solved |
| `total_questions` | number | Total rounds |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per round.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Round index |
| `type` | string | Round type |
| `round_number` | number | Round sequence number |
| `target_word` | string | The secret word |
| `solved` | boolean | Whether the word was found |
| `guesses_used` | number | Number of guesses made |
| `max_guesses` | number | Guess budget for this round |
| `guesses` | string[] | All guesses in order |
| `rt_ms` | number | Total round time (ms) |
| `duration` | number | Total round duration (ms) |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
