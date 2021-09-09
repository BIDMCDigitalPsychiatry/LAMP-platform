# Deploying via CloudFormation

[![](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?#/stacks/new?stackName=LAMP&templateURL=https://s3.us-east-2.amazonaws.com/lamp.cloudformation/cloudformation.yml)

## Validate

```bash
aws cloudformation validate-template \
	--region us-east-2 \
	--template-body file://cloudformation.yaml
```

## Create

```bash
aws cloudformation create-stack \
	--region us-east-2 \
	--stack-name LAMP \
	--template-body file://cloudformation.yaml \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameters HostedZoneId=YOUR_HOSTED_ZONE_HERE,DomainName=YOUR_DOMAIN_NAME_HERE,InstanceType=t3.medium,ImageId=ami-0f57b4cec24530068,VpcCidrBlock=10.0.0.0/16,SubnetCidrBlock=10.0.0.0/24,KeyName=YOUR_KEY_NAME_HERE,SecurityGroupName=mindLAMP-platform-ec2-sg,SshCidrBlock=52.95.4.0/24,Ec2Instance01Name=mindLAMP-platform-ec2-01,Ec2Instance02Name=mindLAMP-platform-ec2-02
```

## Update

```bash
aws cloudformation update-stack \
	--region us-east-2 \
	--stack-name LAMP \
	--template-body file://cloudformation.yaml \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameters HostedZoneId=YOUR_HOSTED_ZONE_HERE,DomainName=YOUR_DOMAIN_NAME_HERE,InstanceType=t3.medium,ImageId=ami-0f57b4cec24530068,VpcCidrBlock=10.0.0.0/16,SubnetCidrBlock=10.0.0.0/24,KeyName=YOUR_KEY_NAME_HERE,SecurityGroupName=mindLAMP-platform-ec2-sg,SshCidrBlock=52.95.4.0/24,Ec2Instance01Name=mindLAMP-platform-ec2-01,Ec2Instance02Name=mindLAMP-platform-ec2-02
```

## Delete

```bash
aws cloudformation delete-stack \
	--region us-east-2 \
	--stack-name LAMP
```
