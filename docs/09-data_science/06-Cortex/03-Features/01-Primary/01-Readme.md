## README: Primary Features

Primary features in cortex are derived from raw data and typically contain multiple bouts / periods. All primary features will return a `has_raw_data` along with the `data` which is whether any raw datapoints exists.
Some features can return the same result if there is / is not raw data, so this flag reduces ambiguity. For example, if there is no device_state data, `screen_active` will return the following:

However, if there is device_state data, but only "screen_off" events the following will be returned:
