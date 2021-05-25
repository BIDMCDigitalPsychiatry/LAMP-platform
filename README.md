# LAMP Platform

| Frontend | Backend | Native Core | Data Science | Programming Libraries |
|-|-|-|-|-|
| [Dashboard](https://github.com/BIDMCDigitalPsychiatry/LAMP-dashboard) | [API Server](https://github.com/BIDMCDigitalPsychiatry/LAMP-server) | [iOS](https://github.com/BIDMCDigitalPsychiatry/LAMP-core-ios) | [Cortex](https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex) | [R](https://github.com/BIDMCDigitalPsychiatry/LAMP-r) |
| [Activities](https://github.com/BIDMCDigitalPsychiatry/LAMP-activities) | [App Gateway](https://github.com/BIDMCDigitalPsychiatry/LAMP-app-gateway) | [Android](https://github.com/BIDMCDigitalPsychiatry/LAMP-core-android) | [CollegeStudy](https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study) | [JS](https://github.com/BIDMCDigitalPsychiatry/LAMP-js) |
| | | | | [Python](https://github.com/BIDMCDigitalPsychiatry/LAMP-py) |
| | | | | [Swift](https://github.com/BIDMCDigitalPsychiatry/LAMP-swift) |
| | | | | [Kotlin](https://github.com/BIDMCDigitalPsychiatry/LAMP-kotlin) |


### Editing Documentation

To edit and test documentation locally after cloning the repository, run `npm start`. 

### Updating OpenAPI documentation

The `LAMP-protocol` repository houses the OpenAPI specification for the LAMP Protocol. To update the interactive documentation, you need to update the git submodule:

```shell
git checkout https://github.com/BIDMCDigitalPsychiatry/LAMP-platform.git
git pull --recurse-submodules
git submodule update --remote --recursive
git commit -am 'Fast-forward LAMP-protocol submodule'
```
