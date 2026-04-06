# Troubleshooting Deployment

This page contains fixes for potential issues you may encounter when using LAMP. However, it is not comprehensive. If you encounter an issue you are unable to resolve with the help of this page, please help us improve by posting your issue at [community.lamp.digital](https://community.lamp.digital) 

## Large Logs

LAMP-server is designed for long uptimes and detailed logging. An unfortunate side-effect of this is that, especially over a long period of time, logging files can grow large and affect available disk space, negatively impacting docker performance.

Check your disk space usage in the terminal of your `lamp-server` node with:
    ```bash
    df
    ```
If it is 100%, navigate to your docker directory (try `cd /var/lib/docker`) and run 
```bash
   du -h --max-depth=1 containers/
```
This command will list your containers space usage. If LAMP-server is very large (in excess of 10gb), you can attempt to clean the logs by running 
```bash
    docker stop YOUR_SERVER_ONTAINER_ID_HERE && docker rm YOUR_CONTAINER_ID_HERE
    
```
This will stop and remove your container, at which point docker swarm should spin up a new one.



To prevent this issue from happening in the future, add the following to your docker compose file. The docs YAML file has this added as of September 2nd, so this bug should not occur if you began using LAMP after this date.

```yaml
    logging:
      options:
        max-size: "10m"
        max-file: "3"
```
