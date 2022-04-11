# Miscellaneous

## `utils.useful_functions_misc.get_os_version`
Tries to parse the lamp.analytics data to get the phone OS, version and device type information.

#### Args

- `participant_id`: (string) the participant id.

#### Returns
A dictionary comtaining "device_type", "os_version", and "phone_type" if they are found. Each parameter will be None if it cannot be parsed. None if there is no analytics data. 

#### Example

```markdown
utils.useful_functions_misc.get_os_version("U1234567890")
```
Output:
```markdown
{
  "device_type": "iOS",
  "os_version": "14.7.1",
  "phone_type": "iPhone12,1"
}
```
