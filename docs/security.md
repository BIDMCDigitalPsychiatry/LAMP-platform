# Security & Privacy

The LAMP Platform is free and open source software currently developed by Beth Israel Deaconess Medical Center but does not have any licensing restrictions for intellectual property. LAMP is safe, secure, and easy to use. Though it has broad potential, we will be using it as an interface that patients and clinicians can use together to track data and generate visual reports. It’s important to note that LAMP is not an electronic health record system. Below is an outline of the technical specifications that back privacy and security in the LAMP Platform.

## Login and Authentication

Credentials are required to access the LAMP Platform. By default, a clinician can see the data of their patient, but any other access must be explicitly granted. The clinicians are able to view aggregate reports that contain no identifying information about the patients in the site.

## Technical Safeguards

As data is transferred between the device and server, it is encrypted in flight using the TLS v1.3 protocol atop the HTTP/2.0 transmission format. As data is accepted by the server, it is stored in the data lake encrypted at rest using AES-256 encryption through a secret key unique to each site. Any requests made to the server to create, update, delete, or even read data, will cause the incremental addition of the request to an audit log, along with the credentials used to make the request so it is possible for a site to monitor all requests for data.

## Personal Health Information (PHI)

There are 18 identifiers that make health information PHI. The one PHI type that LAMP will collect are dates as information is timestamped. LAMP will not collect patient names and uses codes instead. Thus, linking any information collected by LAMP to a unique patient is not easy without a key which will be kept by each site and not shared.

## HIPAA

LAMP offers physical and technical safeguards that are in line with the HIPAA Security Privacy Rule. Specifically, the rule “requires covered entities to maintain reasonable and appropriate administrative, technical, and physical safeguards for protecting e-PHI including:

1. Ensure the confidentiality, integrity, and availability of all e-PHI they create, receive, maintain or transmit;
2. Identify and protect against reasonably anticipated threats to the security or integrity of the information;
3. Protect against reasonably anticipated, impermissible uses or disclosures; and
4. Ensure compliance by their workforce.

**LAMP meets this through the offering the follow features:**

1. Limited facility access and control with authorized access procedures in place
2. Restrictions for transferring, removing, disposing, and re-using PHI
3. Access control allowing only for authorized personnel to access PHI.
4. Audit reports / tracking logs that record activity
5. Integrity controls in the database that ensure data is not altered or destroyed unless by an authorized user with the appropriate permissions
6. Encrypted network transmissions

## Breach Policy

In the event of a suspected data breach, a site lead may immediately revoke all credentials and immediately disable access to the data. As both a public and private key are required to decrypt exported data, and separate private keys are maintained per site and per patient, a data breach of one sub-section of the data cannot and will not affect other sub-sections or the entire platform Furthermore, devices are identified by a unique per-device token and data integrity in flight can be ensured when reviewing the audit trail by cross-referencing this device-specific token. As noted above, LAMP does not record name but identifies users by codes so even with a breach, it will be hard to connect a person to their data.

## Risk Analysis and Management

Our team performs frequent risk analysis as part of our security management processes.
