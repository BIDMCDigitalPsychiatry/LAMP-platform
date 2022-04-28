# Miscellaneous

## `utils.useful_functions_misc.get_os_version`
Attempts to parse the lamp.analytics data to get the phone OS, version and device type information.

#### Args

- `participant_id`: (string) the participant id.

#### Returns
A dictionary comtaining "device_type", "os_version", and "phone_type". Each parameter will be None if it cannot be parsed or if there is no lamp.analytics data.

Please note that the lamp.analytics 'user_agent' information was updated in Spring 2022. This code will not work with older data.

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
