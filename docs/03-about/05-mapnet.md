# MAPNET

### Current MAPNET Specific Features and Information

1. When requested, it can be configured so that patients are unable to view some or all results on the prevent screen. If this is not a current feature for your site and you would like to implement it, please reach out to [team@digitalpsych.org](mailto:team@digitalpsych.org).
2. If viewing LAMP export files in Excel, please ensure to replace the "activity" column with the proper survey name, and add a new "timestamp_txt" column with the formula: `=((A1/1000)-14400)/86400 + 25569` and set the formatting of the column to date-time. (Replace `A1` in the formula with the actual column.)
3. McLean and the other MAPNET sites are now all hosted on the same server. Each MAPNET site functions separately as a researcher on this server. To add more sites, please reach out to [team@digitalpsych.org](mailto:team@digitalpsych.org).

- **MAPNET Sites Currently Using LAMP**
    - McLEAN LEAP Center
    - PREP East
    - PREP West
    - Cambridge Health Alliance
    - JRI Salem
    - Edinburg

- **Resources for Clinicians**
    - [General MAPNET Clinician Guide](assets/LAMP_Clinician_Guide_MAPNET.pptx)
    - [CHA MAPNET Clinician Guide](assets/Start_Here_LAMP_w__Pics.docx)
    - [LAMP Training Edinburg](https://vimeo.com/499774666)

# MAPNET Feature Requests

| Name                                                                                                     | Status    | Submitted by                            | 
|----------------------------------------------------------------------------------------------------------|-----------|-----------------------------------------| 
| Include Activity Names in CSV Export                                                                     | Submitted | Alyssa Williamson, Molly Stettenbauer | 
| Specify between baseline and follow up assessments                                                       | Submitted | Alyssa Williamson                       | 
| Ability to export all patients from all clinics to csv from the dashboard                                | Submitted | Alyssa Williamson                       | 
| Add ability to change the date field from the dashboard retroactively                                    | Submitted | Alyssa Williamson                       | 
| Change data responses to be numerical values                                                             | Submitted | Molly Stettenbauer                      | 
| Self report versus clinician administered scales being available to only patients versus only clinicians | Submitted |                                         | 
| Being able to save clinical notes somewhere while doing clinician administered surveys for patients      | Submitted |                                         | 
| Reverse coding survey questions                                                                          | Submitted |                                         | 
| Specifically marking questions is required versus optional                                               | Submitted | Emily He                                | 
| Add a BMI auto calculator to it so when you plug in weight and height it fills in the BMI                | Submitted |                                         | 
| Conditional Logic                                                                                        | Submitted |                                         | 
| Editing Survey Questions                                                                                 | Submitted | Alyssa Williamson                       | 
| Sum scores from the MOAS                                                                                 | Submitted | Molly Stettenbauer                      | 
| Hide prevent graphs from patients                                                                        | Completed |                                         | 
