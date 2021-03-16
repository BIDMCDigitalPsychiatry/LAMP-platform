# Calls

SensorSpec: lamp.calls

### Description

The calls sensor measures information on phone calls made and received by the user. Each event is a single phone call, with information on its type (incoming, outgoing, missed, etc), duration, and trace (the other device which the user connected with during the call). 

Call type options differ between Android and iOS devices.

### Data

- `call_trace: string`: the SHA-1-encrypted source/target of the call. A device will have a consistent trace.
- `call_type: number`: integer label for the call type
    - Android
        - `1`: incoming; the call was received by the user
        - `2`: outgoing; the call was made by the user
        - `3`: missed; the call was meant to be received by the user, but missed it
        - `4`: busy; the user's phone was busy
- `call_duration`: (units: seconds) the length of the call session