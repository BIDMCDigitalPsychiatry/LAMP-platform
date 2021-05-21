# Using Cortex

## Setting up Cortex

You will need Python 3.4+ and `pip` installed in order to use Cortex. 
  - You may need root permissions, using `sudo`.
  - Alternatively, to install locally, use `pip --user`.
  - If `pip` is not recognized as a command, use `python3 -m pip`.

If you meet the prerequisites, install Cortex:

```sh
pip install lamp-cortex
```

If you do not have your environment variables set up (see Advanced section below), you will need to perform the initial server credentials configuraton below:


```python
import os
os.environ['LAMP_ACCESS_KEY'] = 'YOUR_EMAIL_ADDRESS'
os.environ['LAMP_SECRET_KEY'] = 'YOUR_PASSWORD'
os.environ['LAMP_SERVER_ADDRESS'] = 'YOUR_SERVER_ADDRESS'
```

## Retrieving data from Cortex

To invoke `cortex.run`, you must provide a specific ID or a `list` of IDs (only `Researcher`, `Study`, or `Participant` IDs are supported). Then, you specify the behavioral features to generate and extract. Once Cortex finishes running, you will be provided a `dict` where each key is the behavioral feature name, and the value is a dataframe. You can use this dataframe to save your output to a CSV file, for example, or continue data processing and visualization. 

```python
import cortex
cortex.run('YOUR_RESEARCHER_ID', ['survey'], start=0, end=cortex.now())['survey'].to_csv('~/export.csv', index=False)
```

For example, running the `survey` feature (which is not a behavioral feature, but rather a convenience around raw survey data) yields the following CSV output: 

```csv
id,timestamp,survey,item,value,type,duration,level
U123456789,2020-01-16 20:57:01,RA,RA Initials,test,,0,
U123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire, I feel better about myself,Neither agree nor disagree,,0,
U123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire,I feel able to take chances in life,Agree Strongly,,0,
U123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire,I am able to develop positive relationships with other people ,Agree,,0,
U123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire, I feel part of society rather than isolated,Neither agree nor disagree,,0,
U123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire,I am able to assert myself,Disagree ,,0,
U123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire,I feel that my life has a purpose ,Agree Strongly,,0,
U123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire,My experiences have changed me for the better,Agree,,0,
U123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire, I have been able to come to terms with things that  have happened to me in the past and move on with  my life,Disagree,,0,
```

You can then load this CSV file into Microsoft Excel (or Apple Numbers on macOS). Additionally, you can add Categories to group the data by ID, survey, and the specific time that the survey was taken. 

![](assets/cortex_excel_survey_group.png)

## Advanced Usage

### Configuration

Ensure your `server_address` is set correctly. If using the default server, it will be `api.lamp.digital`. Keep your `access_key` (sometimes an email address) and `secret_key` (sometimes a password) private and do not share them with others. While you are able to set these parameters as arguments to the `cortex` executable, it is preferred to set them as session-wide environment variables. You can also run the script from the command line:

```bash
LAMP_SERVER_ADDRESS=api.lamp.digital LAMP_ACCESS_KEY=XXX LAMP_SECRET_KEY=XXX python3 -m \
  cortex significant_locations \
    --id=U26468383 \
    --start=1583532346000 \
    --end=1583618746000 \
    --k_max=9
```

Or another example using the CLI arguments instead of environment variables (and outputting to a file):

```bash
python3 -m \
  cortex --format=csv --server-address=api.lamp.digital --access-key=XXX --secret-key=XXX \
    survey --id=U26468383 --start=1583532346000 --end=1583618746000 \
    2>/dev/null 1>./my_cortex_output.csv
```

### Example

```python
# environment variables must already contain LAMP configuration info
from pprint import pprint
from cortex import all_features, significant_locations, trips
pprint(all_features())
for i in range(1583532346000, 1585363115000, 86400000):
    pprint(significant_locations(id="U26468383", start=i, end=i + 86400000))
```