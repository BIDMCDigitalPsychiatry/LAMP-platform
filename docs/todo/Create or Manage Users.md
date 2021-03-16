# Create or Manage Users

### Creating a New Patient or Participant

![](../assets/Untitled 70.jpeg)

1. Log into the app and click on the "Users" tab.
2. Tap the profile icon at top right and select the Manage Credentials option from the drop-down list. 
3. Tap the `[+]` button at the top right of the list; you will be prompted with a counter for the number of patients/participants to add, as you may want to create more than one at a time.
4. Once you create a patient, you will have the opportunity to input an email address and password. This does **not** need to be a real email. You can make the email anything you'd like (e.g. patient@xyz.com).

![](../assets/Untitled 71.jpeg)

![](../assets/Untitled M.png)

When created initially, these patients/participants won’t have an associated de-identification alias or an account to login to mindLAMP with themselves. To allow patients to access mindLAMP themselves on a desktop or mobile device, **see** [Log In Information, Tips, and Tricks](Log In Information, Tips, and Tricks.md)

### Rename a Patient

For each patient/participant in the list on this screen, you’ll see an outlined text box containing their de-identified patient identifier, typically beginning with a `U`, followed by a random number of random digits. 

It is not recommended to use full names or other identifying text when referring to patients instead of their patient identifier as this increases your liability and and risk when **complying with HIPAA, COPPA, GDPR, or other federal regulations.**

1. Log into the app and click on the "Users" tab.
2. Tap **Rename** to add, edit, or remove the de-identification alias. 
3. Tap outside of the text box or press the check mark icon at the right side of the text box. You will now see the patient/participant’s identifier as mini hovering text above the text box.

![](../assets/Untitled 72.jpeg)

![](../assets/Untitled 73.jpeg)

![](../assets/Untitled 74.jpeg)

Though it appears that the patient has been “renamed,” this new alias is only visible to you, as a clinician or researcher, and not to the user, or anywhere in the data when saved or exported. 

### Delete Existing Patients or Participants

1. Log into the app and click on the "Users" tab.
2. Select one or more patients/participants by tapping the checkboxes at the left of their row. 
3. Tap the delete icon and confirm your selection. 

![](../assets/Untitled 75.jpeg)

**All data associated with the patients/participants being deleted are irrecoverable and will be lost.** Please exercise caution when deleting patients and confirm your selection to avoid permanent data loss. 

### Access the Patient Profile

![](../assets/Untitled 76.jpeg)

1. Log into the app and click on the "Users" tab.
2. Select one or more patients/participants by tapping the checkboxes at the left of their row. 
3. Click the gear icon.
4. Rename, reset password, modify activities or sensors, or send a message to the patient.
5. Click "Save."

![](../assets/Untitled 77.jpeg)

### Export Data for Multiple Patients/Participants

1. Log into the app and click on the "Users" tab.
2. Select one or more patients/participants by tapping the checkboxes at the left of their row. 
3. Tap the Export icon at the top right of the list. You’ll be prompted with a menu to select `CSV` or `JSON`, a file will be downloaded. 

![](../assets/Untitled 78.jpeg)

Please note the following: 

- `CSV` is a two-dimensional tabular file format that is supported by many common spreadsheet applications such as Microsoft Excel, as well as most data analysis programming environments, including R, Python, MATLAB, and SPSS.
- `JSON` is a multidimensional structured file format that is typically only supported by application programming environments such as `R`, `Python`, or `Javascript`.

We recommend the structured `JSON` export option wherever possible, as the LAMP Platform processes and harmonizes your data automatically for you. Selecting `CSV` will disable these optimizations and may require you to manually process your data yourself.

To learn more about sending patients or participants surveys check out [Create Surveys](Activities Tips, Surveys, and Cognitive Tests/Create Surveys.md).

---

**Was there something we didn't cover, or need more help?**
Let us know by making a post in the [LAMP Community](https://community.lamp.digital/), or [contact us directly](mailto:team@digitalpsych.org). Thank you for your contribution! 🌟
*Page last updated on February 26th, 2021.*