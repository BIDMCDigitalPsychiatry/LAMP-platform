# Modifying a the frequency of a sensor's data collection

Sensors collect at default frequencies unless otherwise specified. Modifying the frequency can either increase density (higher Hz) or decrease data burden and storage costs (lower Hz).

1. Navigate to the corresponding API command: https://docs.lamp.digital/api/update-a-sensor
2. Authorize the API tool using your credentials
3. Change the server address to your domain
4. In the body, replace the value of the "id" key with the ID of the sensor you want to update
5. Change the "frequency" field value to the desired frequency (in Hz)
