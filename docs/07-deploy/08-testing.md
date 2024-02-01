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
      The logs will only print the administrator password once. Restarting the service will not reveal the password again. If you did not save the password when you initialized the database, you can find the password by decrypting the secret key found in the `credential` collection using your root key.
      :::

    - Verify that the newly generated password (`GENERATED_PASSWORD_HERE`) works.

        ```bash
        curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:GENERATED_PASSWORD_HERE'
        ```

Create a `Researcher` and a `Participant` using the browser management user interface to verify the setup works as expected. To jumpstart your instance of the LAMP Platform and test surveys or other activities, follow the instructions in **Create Surveys** and import the file below into the `Researcher` you just created. 

[lamp_example_survey_battery_export.json](Testing the LAMP Platform/export.json)

If any of the above steps fails to complete successfully you will not be able to reach this step.
