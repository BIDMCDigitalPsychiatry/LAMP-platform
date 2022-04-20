# Database functions

## `utils.db.get_survey_names`
Get the survey names and specs for all ActivityEvents for a participant. Use the database to get deleted survey ids as well.

#### Args

- `participant_id`: (string) the participant id.
- `db`: (string, default: 'LAMP') the database.
- `client_url`: (string) a valid mongodb URL with login info.
- `client`: (object) a valid pymongo client

#### Example

```markdown
YOUR_MONGO_URL = "mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]"
utils.db.get_survey_names("U1234567890", client_url=YOUR_MONGO_URL)
```
