---
title: Costs of Deploying the LAMP Platform
slug: costs
---

The components of the LAMP Platform rely on IT infrastructure that can be self-hosted by your organization (sometimes called "on-prem") or hosted by a cloud provider such as Amazon or Google. 

If you'd like to deploy your organization's instance of the LAMP Platform on a cloud provider, please consult with your legal and IT departments first, and **always ensure that you have signed a Business Associate Agreement** (BAA) with the cloud provider to **comply with HIPAA**.

## Factors that Influence Provisioning of Compute and Storage Resources.

There are a few factors that need to be accounted when determining how to deploy the components explained above, as well as how high your monthly costs may be.

1. **Computing:** The components of the LAMP Platform are highly efficient and won't need much computing power; however, at minimum they require **a single dual-core node with at least 2 gigabytes of memory.**
2. **Storage:** The data collection rate for the LAMP Platform varies significantly depending on usage needs, spanning from a minimum of **250 gigabytes of low-throughput (HDD) storage** to a recommended **4 terabytes of high-throughput (SSD) storage.**

    If you are collecting digital phenotyping data, using the integrated development environments, or scheduling intervention delivery/data analysis scripts, the minimum requirements **WILL NOT** be sufficient.

3. **Network:** The network bandwidth of the LAMP Platform varies significantly depending on your organization's size and study/clinic requirements; at minimum you must have single virtual private endpoint (i.e. firewall) with a bandwidth of **at least 1 Gbps**, to a recommended **10 Gbps** to adequately handle sustained multi-user loads.

In all cases, the most costly and intensive part of deploying and maintaining the LAMP Platform will be storing the data.

## Example Use-Cases and Their Associated Cloud Computing Costs.

When hosting the LAMP Platform with a cloud provider, your monthly costs may vary significantly based on the requirements explained previously. [Here are two example configurations with the Amazon Web Services (AWS) cloud provider:](https://calculator.aws/#/estimate?id=f27215a7bb211d98cdfc0b2250888241299c41a9) 

1. **"I run a digital clinic with about ~15 patients and don't intend to use advanced features such as digital phenotyping (sensor data) collection or Automations."**
    1. **Computing:** 1 node, 2 vCPU, 2 GB RAM
    2. **Storage:** 250 GB, no snapshots
    3. **Network:** Up to 10 Gbps
    4. **Total Cost: ~$35.00/mo**
2. **"I run multiple research studies with 200+ patients and intend to collect digital phenotyping data at a high frequency, develop and use machine learning algorithms through the Automations framework, and more advanced features."**
    1. **Computing:** 2 nodes, 16 vCPU, 32 GB RAM
    2. **Storage:** 8.0 TB, automated monthly snapshots
    3. **Network:** 25 Gbps
    4. **Total Cost: ~$1,500.00/mo**

Please note that it is currently not yet possible to configure specific sensors to operate at specific frequencies. **This feature is coming soon but not available today.**

| Specification                        | vCPU            | RAM (GB) | SSD (TB) | EBS   | EC2   | S3    | Data Transfer | Total Monthly | Total Yearly      | 
|--------------------------------------|-----------------|----------|----------|-------|-------|-------|---------------|---------------|-------------------| 
| "10 participants, active only"       | 2 (t3.small)    | 2        | 0.5      | 50    | 13.72 | 0     | 0.48          | 64.2          | 770.4             | 
| "100 participants, active only"      | 2 (t3.small)    | 2        | 0.5      | 50    | 13.72 | 0     | 2.06          | 65.78         | 789.36            | 
| "1000 participants, active only"     | 2 (t3.small)    | 2        | 1        | 102.4 | 13.72 | 0     | 2.06          | 118.18        | 1418.16           | 
| "10 participants, active + passive"  | 4 (c5.large)    | 8        | 1        | 102.4 | 124.1 | 23.56 | 5.12          | 255.18        | 3062.16           | 
| "100 participants, active + passive" | 4 (c5d.large)   | 16       | 2        | 204.8 | 186.4 | 23.56 | 10.24         | 425           | 5100.000000000001 | 
| 1000 participants active + passive   | 8 (c5d.2xlarge) | 32       | 4        | 409.6 | 248.2 | 23.56 | 20.48         | 701.84        | 8422.079999999998 | 

When self-hosting the LAMP Platform (that is, "on-prem"), it's difficult to determine the monthly costs and maintenance needs. [Please reach out to us for a consultation](mailto:team@digitalpsych.org) if you or your organization would like assistance with self-hosting.

Though self-hosting may appear to be cheaper, the "hidden costs" should not be neglected in: ensuring redundant storage, no system down-time, regular storage backups, HIPAA-compatible encryption during flight and at rest, preventing network bottlenecks, regular system maintenance, and more. 

**We do not recommend self-hosting** unless your organization already has the infrastructure to correctly do so.
