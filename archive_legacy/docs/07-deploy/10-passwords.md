# Complex Password Requirements

### How it Works 

A new Tag `lamp.dashboard.security_preferences` must be set by the system administrator to add support to control certain user account creation settings. Currently, we support password rules specified as valid regular expressions ([use RegExR or a similar tool to test these](https://regexr.com/)). For example, an expression such as `^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$` matches:

- `^.* ... .*$` = The entire string must match the expression, and cannot contain line breaks (\n).
- `(?=.{8,})` = Minimum of 8 characters.
- `(?=.*[a-z])` = Must contain lowercase letters.
- `(?=.*[A-Z])` = Must contain uppercase letters.
- `(?=.*[0-9])` = Must contain numeric digits.

Additional parameters (such as required special characters, etc.) can also be added to the regular expression. When setting a password on any user account across LAMP, this system-level Tag is referenced first to confirm the complexity of the password. 

1. If no such Tag exists, any password of any complexity with any characters is permitted.
2. If such a Tag exists, but the `password_rule` is missing or not a valid regular expression, any password of any complexity with any characters is permitted.
3. If such a Tag exists, and the `password_rule` is a valid regular expression, the password text field in the UI validates the text input by the user against the regular expression.
     i. If the text matches the regular expression, the password is accepted and the dialog is allowed to proceed.
     ii. If the text does NOT match the regular expression, the password is not accepted, and the dialog (and its continue button) is disabled until the text is modified to match the regular expression. (An error message is displayed under the text field to inform the user.)

### Usage

You can enable this feature from the command line once your server is configured.
```bash
curl -u admin -L -X PUT 'https://<your server address>/type/null/tag/lamp.dashboard.security_preferences/me' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
--data-raw '{
    "password_rule": "^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$"
}'
```

You can also use the Python `lamp-core` library to set the password rule.
```python
rule = {
    "password_rule": "^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$"
}
LAMP.Type.set_attachment("null", 'me', 'lamp.dashboard.security_preferences', rule)
```

:::caution 

If the version of the dashboard you use does not respect complex passwords (version 2022.4.x and newer) then users will be allowed to create insecure passwords. Please ensure your organization uses the latest versions of both server AND dashboard. **Notably, simple passwords written prior to implementing complex password protocols will still work.**

:::

:::caution

Upon initially creating a user account, user password will be automatically generated in the default format, regardless of password rules. I.e. a user given the account `U1338759043@lamp.com` will automatically be given the password `U1338759043` regardless of password complexity settings. 

:::
