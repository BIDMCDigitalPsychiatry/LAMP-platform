Specification,vCPU,RAM (GB),SSD (TB),EBS,EC2,S3,Data Transfer,Total Monthly,Total Yearly
"10 participants, active only",2 (t3.small),2,0.5,50,13.72,0,0.48,64.2,770.4
"100 participants, active only",2 (t3.small),2,0.5,50,13.72,0,2.06,65.78,789.36
"1000 participants, active only",2 (t3.small),2,1,102.4,13.72,0,2.06,118.18,1418.16
"10 participants, active + passive",4 (c5.large),8,1,102.4,124.1,23.56,5.12,255.18,3062.16
"100 participants, active + passive",4 (c5d.large),16,2,204.8,186.4,23.56,10.24,425,5100.000000000001
1000 participants active + passive,8 (c5d.2xlarge),32,4,409.6,248.2,23.56,20.48,701.84,8422.079999999998



# 1000 participants, active only

Data Transfer: 2.06
EBS: 102.4
EC2: 13.72
RAM (GB): 2
S3: 0
SSD (TB): 1
Total Monthly: 118.18
Total Yearly: 1418.16
vCPU: 2 (t3.small)

# 1000 participants active + passive

Data Transfer: 20.48
EBS: 409.6
EC2: 248.2
RAM (GB): 32
S3: 23.56
SSD (TB): 4
Total Monthly: 701.84
Total Yearly: 8422.079999999998
vCPU: 8 (c5d.2xlarge)

# 100 participants, active + passive

Data Transfer: 10.24
EBS: 204.8
EC2: 186.4
RAM (GB): 16
S3: 23.56
SSD (TB): 2
Total Monthly: 425
Total Yearly: 5100.000000000001
vCPU: 4 (c5d.large)

# 100 participants, active only

Data Transfer: 2.06
EBS: 50
EC2: 13.72
RAM (GB): 2
S3: 0
SSD (TB): 0.5
Total Monthly: 65.78
Total Yearly: 789.36
vCPU: 2 (t3.small)

# 10 participants, active + passive

Data Transfer: 5.12
EBS: 102.4
EC2: 124.1
RAM (GB): 8
S3: 23.56
SSD (TB): 1
Total Monthly: 255.18
Total Yearly: 3062.16
vCPU: 4 (c5.large)

# 10 participants, active only

Data Transfer: 0.48
EBS: 50
EC2: 13.72
RAM (GB): 2
S3: 0
SSD (TB): 0.5
Total Monthly: 64.2
Total Yearly: 770.4
vCPU: 2 (t3.small)