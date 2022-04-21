# Scheduling Tasks with Cron Jobs in LAMP

While using LAMP, you may wish to schedule events or scripts to run on a regular basis - for example, analysis scripts or scripts that schedule study participants for different studies based on different criteria.

If you are using Portainer to support LAMP, you can use the following method and the [swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) project to schedule these scripts to run regularly.

#### 1. Create a manager service
To create a manager service, add the following service to a stack (if you do not have a dedicated cron stack, you may wish to create one).It should look something like this:

```
  manager:
    image: crazymax/swarm-cronjob
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
    environment:
      TZ: "America/New_York"
```

- Image should be `crazymax/swarm-cronjob`
- Volume should be `/var/run/docker.sock:/var/run/docker.sock:ro`
- The TZ env variable should be set to your local timezone - this will affect the times your scripts run if you specify an hour for them to run.

Only do this step __ONCE__, regardless of how many services you plan to create.


#### 2. Create the script service.
Second, create the service that will run your script. It should look similar to this:

```
  my_analysis:
    image: python:3.8
    command: ['python','/script/my_cool_script.py']
    environment:
      TZ: "America/New_York"
      ANALYSIS_NAME: "My Analysis"
    volumes:
      - /usr/bin:/script
      - /var/run/docker.sock:/var/run/docker.sock:ro
    deploy:
      mode: replicated
      replicas: 0
      restart_policy:
        condition: none
      labels:
        swarm.cronjob.enable: "true"
        swarm.cronjob.schedule: "0 3 * * *"
        swarm.cronjob.skip-running: "false"
```

N.B.
- To install additional modules not included with the standard python3.8 image (for example), you may wish to run pip install commands through a shell script.
- Use swarm.cronjob.schedule to enter your [cron string](https://crontab.guru/)

After you update the stack, the script should begin running as scheduled. The service above, for instance, will run at daily at 3 AM.

