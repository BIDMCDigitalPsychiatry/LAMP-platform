# General functions

## `utils.useful_functions.generate_ids`
Takes in a list of researcher / study / participant ids and expands it down to the participant level. 

#### Args

- `id_set`: (list of strings) a list of researcher, study, and participant ids.

#### Returns
A list of all of the participants belonging to the researchers and studies in `id_set` as well as the participants in `id_set`.

#### Example

```markdown
utils.useful_functions.generate_ids(id_set=["U1234567890", "rdfgkd12345"])
```
Output:
```markdown
["U1234567890", "U11111111", "U22222222"]
```
Where "U11111111" and "U22222222" are the participants of "rdfgkd12345" who is a researcher (or a study).


## `utils.useful_functions.shift_time`
Take a timestamp and shift it to a certain time that same day.

#### Args

- `curr_time`: (int, unit: ms) the current time (or time that should be shifted) in ms.
- `shift`: (int, default: 18 (ie 6pm)) the time to shift to in military time.

#### Returns
The shifted time.

#### Example

```markdown
utils.useful_functions.shift_time(1649680020000, shift=20)
```
Output:
```markdown
1649721600000
```
1649680020000 is 4/11/22 at 8:27am. We set shift=20 (8pm in military time) so the output is 1649721600000 (4/11/22 at 8pm).

## `utils.useful_functions.get_part_id_from_name`
Tries to find the participant with the attachment "lamp.name" set to a certain value.

#### Args

- `name`: (string) the name to look for.
- `parts`: (list of strings) the list of participant IDs.

#### Returns
The participant ID if it was found, else -1. 

#### Example

```markdown
utils.useful_functions.get_part_id_from_name(name="patient 27", parts=["U1234567890", "U2222222222"])
```
Output:
```markdown
"U1234567890"
```
