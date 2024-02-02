# Testing the LAMP Platform

Once you've deployed the `LAMP-server` and `LAMP-database`, you'll be able to use the mindLAMP app (either on your mobile device or [in a desktop browser](https://dashboard.lamp.digital/)) to connect to your instance. 

All data is encrypted before communication between your browser or the app to and from your newly deployed server. No data will be communicated with any other server, including the default API server at [api.lamp.digital](http://api.lamp.digital) or other third party services.

1. Verify the status of the database.

    ```bash
    curl -k https://admin:DB_PASSSWORD_HERE@db.example.com/
    ```
    or 
    ```bash
    mongo 'mongodb://username:password@databaselocation:port/databasename'
    ```
    If the `mongo` command cannot be found, you can also try `mongosh`

2. Verify the status of the LAMP Platform API Server.

    ```bash
    curl -k https://api.example.com/
    ```

    - Check the Docker service logs for `LAMP_server` to locate your generated server administrator password.

        ```bash
        docker service logs LAMP_server
        ```

      :::caution
      The logs will only print the administrator password once. Restarting the service will not reveal the password again. If you did not save the password when you initialized the database, you can find the password by decrypting the secret key found in the `credential` collection using your root key. See the decryption script below this page.
      :::

    - Verify that the newly generated password (`GENERATED_PASSWORD_HERE`) works.

        ```bash
        curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:GENERATED_PASSWORD_HERE'
        ```

Create a `Researcher` and a `Participant` using the browser management user interface to verify the setup works as expected. To jumpstart your instance of the LAMP Platform and test surveys or other activities, follow the instructions in **Create Surveys** and import the file below into the `Researcher` you just created. 

[lamp_example_survey_battery_export.json](Testing the LAMP Platform/export.json)

If any of the above steps fails to complete successfully you will not be able to reach this step.

### Password encrypt/decryption script

If you need to manually encrypt/decrypt your secret key, see the below script. You can execute this script via terminal with `node <script_name> <encrypt:decrypt> <secret_key>`. Please replace `<ROOT_KEY>` with the root key used in your lamp-server service.

```bash
#!/usr/bin/env node
const PRIVATE_KEY = <ROOT_KEY> // DO NOT SHARE!

const crypto = require('crypto')
const mode = (process.argv[2] || '')
const input = (process.argv[3] || '')
let output = 'Usage: passcrypt.js <encrypt | decrypt> <string to encrypt or decrypt>'

try {
	if (mode === 'encrypt') {
		let ivl = crypto.randomBytes(16)
		let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(PRIVATE_KEY, 'hex'), ivl)
		output = Buffer.concat([
			ivl,
			cipher.update(Buffer.from(input, 'utf16le')), 
			cipher.final()
		]).toString('base64')
	} else if (mode === 'decrypt') {
		let dat = Buffer.from(input, 'base64')
		let cipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(PRIVATE_KEY, 'hex'), dat.slice(0, 16))
		output = Buffer.concat([
			cipher.update(dat.slice(16)),
			cipher.final()
		]).toString('utf16le')
	}
	console.dir(output)
} catch(e) { 
	console.log('*** ERROR: Could not ' + mode + ' the string. ***')
	process.exit(1) 
}
```
