# Testing the LAMP Platform

Once you've deployed the `LAMP-server` and `LAMP-database`, you'll be able to use the mindLAMP app (either on your mobile device or [in a desktop browser](https://dashboard.lamp.digital/)) to connect to your instance. 

All data is encrypted before communication between your browser or the app to and from your newly deployed server. No data will be communicated with any other server, including the default API server at [api.lamp.digital](http://api.lamp.digital) or other third party services.

1. Verify the status of the CouchDB database.

    ```bash
    curl -k https://admin:DB_PASSSWORD_HERE@db.example.com/
    ```

2. Verify the status of the LAMP Platform API Server.

    ```bash
    curl -k https://api.example.com/
    ```

    - Generate your server administrator password.

        ```bash
        curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:admin'
        ```

    - Check the Docker service logs for `LAMP_server` to locate your generated server administrator password.

        ```bash
        docker service logs LAMP_server
        ```

    - Verify that the newly generated password (`GENERATED_PASSWORD_HERE`) works.

        ```bash
        curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:GENERATED_PASSWORD_HERE'
        ```

Create a `Researcher` and a `Participant` using the browser management user interface to verify the setup works as expected. To jumpstart your instance of the LAMP Platform and test surveys or other activities, follow the instructions in **Create Surveys** and import the file below into the `Researcher` you just created. 

[lamp_example_survey_battery_export.json](Testing the LAMP Platform/export.json)

If any of the above steps fails to complete successfully you will not be able to reach this step.
