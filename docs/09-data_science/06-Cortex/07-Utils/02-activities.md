# propogate activity, get activity names

# Activity functions

## `utils.useful_functions.propagate_activity`
Propagate activity takes an activity from a "base user" and copies the information to all other users in the list. 

#### Args

- `base_user`: (string) the participant id to copy the activity from.
- `base_user`: (string) the participant id to copy the activity from.
- `base_user`: (string) the participant id to copy the activity from.
- `base_user`: (string) the participant id to copy the activity from.

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

- `curr_time`: (int) the current time (or time that should be shifted) in ms.
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

