(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{261:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return m}));var a=n(3),t=n(7),l=(n(0),n(362)),o={},s={unversionedId:"aws_resources",id:"aws_resources",isDocsHomePage:!1,title:"Preparing Resources on AWS",description:"The following instructions will result in a Docker Swarm setup prepared to deploy LAMP. You will need to continue following the instructions after this phase to successfully configure LAMP.",source:"@site/docs/aws_resources.md",sourceDirName:".",slug:"/aws_resources",permalink:"/aws_resources",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/aws_resources.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1619127166,formattedLastUpdatedAt:"4/22/2021",frontMatter:{},sidebar:"Main",previous:{title:"Provisioning the LAMP Platform",permalink:"/provisioning_lamp"},next:{title:"Deploying the LAMP Platform",permalink:"/deploying_lamp"}},i=[{value:"For EC2 Instances Only:",id:"for-ec2-instances-only",children:[]},{value:"AWS SSM Instructions",id:"aws-ssm-instructions",children:[]}],c={toc:i};function m(e){var r=e.components,o=Object(t.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,o,{components:r,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The following instructions will result in a Docker Swarm setup prepared to deploy LAMP. You will need to continue following the instructions after this phase to successfully configure LAMP."),Object(l.b)("p",null,Object(l.b)("img",{src:n(7240).default})),Object(l.b)("p",null,"Digital Psychiatry's AWS Network Diagram for the LAMP Platform"),Object(l.b)("h3",{id:"for-ec2-instances-only"},"For EC2 Instances Only:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"You must replace the value of ",Object(l.b)("inlineCode",{parentName:"strong"},"MY_DNS_NAME")," in the commands below.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-markdown"},' 1. Create an EC2 instance.\n                -> AMI: AWS Linux 2\n                -> Instance Type: [MINIMUM] t2.medium\n                -> Create a new IAM role with the `AmazonSSMManagedInstanceCore` policy.\n                -> Enable termination protection.\n                -> Create a [RECOMMENDED] 1TB EBS volume WITH encryption enabled.\n                -> Configure security group:\n                        -> HTTP: TCP 80 from anywhere\n                        -> HTTPS: TCP 443 from anywhere\n                        -> Docker Daemon: TCP 2375 from this Security Group\n                        -> Docker Machine: TCP 2376 from this Security Group\n                        -> Docker Swarm: TCP 2377 from this Security Group\n                        -> Docker Swarm: TCP 7946 from this Security Group\n                        -> Docker Swarm: UDP 7946 from this Security Group\n                        -> Docker Overlay: UDP 4789 from this Security Group\n                -> Create a new key pair and keep it private.\n                -> Allocate and assign an elastic IP to the instance.\n 2. Run the following commands in the instance.\n                sudo yum -y update && sudo yum -y install docker -y\n                sudo usermod -a -G docker ec2-user\n                sudo hostnamectl set-hostname <MY_DNS_NAME>\n                sudo printf "[Service]\\nExecStart=\\nExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H fd:// --containerd=/run/containerd/containerd.sock\\n" | sudo tee /etc/systemd/system/docker.service.d/override.conf\n                sudo systemctl daemon-reload && sudo service docker restart\n                sudo docker swarm init\n 3. Create your DNS binding in Route53.\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"CloudFormation Stack")),Object(l.b)("p",{parentName:"li"},"  ",Object(l.b)("strong",{parentName:"p"},"This stack is a work-in-progress and should NOT be used for production needs.")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'AWSTemplateFormatVersion: 2010-09-09\nDescription: stuff\nParameters:\n  DomainName:\n    Description: Domain name\n    Type: String\n  InstanceType:\n    Description: EC2 instance type\n    Type: String\n    Default: t2.nano\n    AllowedValues: [a1.2xlarge, a1.4xlarge, a1.large, a1.medium, a1.metal, \n    a1.xlarge, c1.medium, c1.xlarge, c3.2xlarge, c3.4xlarge, c3.8xlarge, \n    c3.large, c3.xlarge, c4.2xlarge, c4.4xlarge, c4.8xlarge, c4.large, c4.xlarge, \n    c5.12xlarge, c5.18xlarge, c5.24xlarge, c5.2xlarge, c5.4xlarge, c5.9xlarge, \n    c5.large, c5.metal, c5.xlarge, c5d.12xlarge, c5d.18xlarge, c5d.24xlarge, \n    c5d.2xlarge, c5d.4xlarge, c5d.9xlarge, c5d.large, c5d.metal, c5d.xlarge, \n    c5n.18xlarge, c5n.2xlarge, c5n.4xlarge, c5n.9xlarge, c5n.large, c5n.xlarge, \n    cc1.4xlarge, cc2.8xlarge, cg1.4xlarge, cr1.8xlarge, d2.2xlarge, d2.4xlarge, \n    d2.8xlarge, d2.xlarge, f1.16xlarge, f1.2xlarge, f1.4xlarge, g2.2xlarge, \n    g2.8xlarge, g3.16xlarge, g3.4xlarge, g3.8xlarge, g3s.xlarge, g4dn.12xlarge, \n    g4dn.16xlarge, g4dn.2xlarge, g4dn.4xlarge, g4dn.8xlarge, g4dn.xlarge, \n    h1.16xlarge, h1.2xlarge, h1.4xlarge, h1.8xlarge, hi1.4xlarge, hs1.8xlarge, \n    i2.2xlarge, i2.4xlarge, i2.8xlarge, i2.xlarge, i3.16xlarge, i3.2xlarge, \n    i3.4xlarge, i3.8xlarge, i3.large, i3.metal, i3.xlarge, i3en.12xlarge, \n    i3en.24xlarge, i3en.2xlarge, i3en.3xlarge, i3en.6xlarge, i3en.large, \n    i3en.metal, i3en.xlarge, inf1.24xlarge, inf1.2xlarge, inf1.6xlarge, inf1.xlarge, \n    m1.large, m1.medium, m1.small, m1.xlarge, m2.2xlarge, m2.4xlarge, m2.xlarge, \n    m3.2xlarge, m3.large, m3.medium, m3.xlarge, m4.10xlarge, m4.16xlarge, \n    m4.2xlarge, m4.4xlarge, m4.large, m4.xlarge, m5.12xlarge, m5.16xlarge, \n    m5.24xlarge, m5.2xlarge, m5.4xlarge, m5.8xlarge, m5.large, m5.metal, m5.xlarge, \n    m5a.12xlarge, m5a.16xlarge, m5a.24xlarge, m5a.2xlarge, m5a.4xlarge, \n    m5a.8xlarge, m5a.large, m5a.xlarge, m5ad.12xlarge, m5ad.16xlarge, m5ad.24xlarge, \n    m5ad.2xlarge, m5ad.4xlarge, m5ad.8xlarge, m5ad.large, m5ad.xlarge, m5d.12xlarge, \n    m5d.16xlarge, m5d.24xlarge, m5d.2xlarge, m5d.4xlarge, m5d.8xlarge, m5d.large, \n    m5d.metal, m5d.xlarge, m5dn.12xlarge, m5dn.16xlarge, m5dn.24xlarge, m5dn.2xlarge, \n    m5dn.4xlarge, m5dn.8xlarge, m5dn.large, m5dn.xlarge, m5n.12xlarge, m5n.16xlarge, \n    m5n.24xlarge, m5n.2xlarge, m5n.4xlarge, m5n.8xlarge, m5n.large, m5n.xlarge, \n    p2.16xlarge, p2.8xlarge, p2.xlarge, p3.16xlarge, p3.2xlarge, p3.8xlarge, \n    p3dn.24xlarge, r3.2xlarge, r3.4xlarge, r3.8xlarge, r3.large, r3.xlarge, \n    r4.16xlarge, r4.2xlarge, r4.4xlarge, r4.8xlarge, r4.large, r4.xlarge, r5.12xlarge, \n    r5.16xlarge, r5.24xlarge, r5.2xlarge, r5.4xlarge, r5.8xlarge, r5.large, \n    r5.metal, r5.xlarge, r5a.12xlarge, r5a.16xlarge, r5a.24xlarge, r5a.2xlarge, \n    r5a.4xlarge, r5a.8xlarge, r5a.large, r5a.xlarge, r5ad.12xlarge, r5ad.16xlarge, \n    r5ad.24xlarge, r5ad.2xlarge, r5ad.4xlarge, r5ad.8xlarge, r5ad.large, \n    r5ad.xlarge, r5d.12xlarge, r5d.16xlarge, r5d.24xlarge, r5d.2xlarge, r5d.4xlarge, \n    r5d.8xlarge, r5d.large, r5d.metal, r5d.xlarge, r5dn.12xlarge, r5dn.16xlarge, \n    r5dn.24xlarge, r5dn.2xlarge, r5dn.4xlarge, r5dn.8xlarge, r5dn.large, r5dn.xlarge, \n    r5n.12xlarge, r5n.16xlarge, r5n.24xlarge, r5n.2xlarge, r5n.4xlarge, r5n.8xlarge, \n    r5n.large, r5n.xlarge, t1.micro, t2.2xlarge, t2.large, t2.medium, t2.micro, \n    t2.nano, t2.small, t2.xlarge, t3.2xlarge, t3.large, t3.medium, t3.micro, t3.nano, \n    t3.small, t3.xlarge, t3a.2xlarge, t3a.large, t3a.medium, t3a.micro, t3a.nano, \n    t3a.small, t3a.xlarge, u-12tb1.metal, u-18tb1.metal, u-24tb1.metal, u-6tb1.metal, \n    u-9tb1.metal, x1.16xlarge, x1.32xlarge, x1e.16xlarge, x1e.2xlarge, x1e.32xlarge, \n    x1e.4xlarge, x1e.8xlarge, x1e.xlarge, z1d.12xlarge, z1d.2xlarge, z1d.3xlarge, \n    z1d.6xlarge, z1d.large, z1d.metal, z1d.xlarge]\n    ConstraintDescription: must be a valid EC2 instance type.\n  LatestAmiId:\n    Type: AWS::SSM::Parameter::Value<AWS::EC2::Image::Id>\n    Default: /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2\nResources:\n  EC2SecurityGroup:\n    Type: AWS::EC2::SecurityGroup\n    Properties:\n      GroupDescription: default\n      SecurityGroupIngress: \n        - IpProtocol: tcp\n          CidrIp: 0.0.0.0/0\n          FromPort: 80\n          ToPort: 80\n        - IpProtocol: tcp\n          CidrIpv6: ::/0\n          FromPort: 80\n          ToPort: 80\n        - IpProtocol: tcp\n          CidrIp: 0.0.0.0/0\n          FromPort: 443\n          ToPort: 443\n        - IpProtocol: tcp\n          CidrIpv6: ::/0\n          FromPort: 443\n          ToPort: 443\n      SecurityGroupEgress: \n        - IpProtocol: "-1"\n          CidrIp: 0.0.0.0/0\n  EC2SecurityGroupIngress:\n    Type: AWS::EC2::SecurityGroupIngress\n    DependsOn: !Ref EC2SecurityGroup\n    Properties:\n      GroupName: !Ref EC2SecurityGroup\n      IpProtocol: "-1"\n      SourceSecurityGroupName: !Ref EC2SecurityGroup\n  EC2Instance01:\n    Type: AWS::EC2::Instance\n    Properties:\n      InstanceType: !Ref InstanceType\n      ImageId: !Ref LatestAmiId\n      EbsOptimized: true\n      SecurityGroupIds: [!Ref EC2SecurityGroup]\n      SourceDestCheck: true\n      IamInstanceProfile: AmazonSSMRoleForInstancesQuickSetup\n      BlockDeviceMappings: \n        - DeviceName: /dev/xvda\n          Ebs: \n            Encrypted: false\n            VolumeSize: 30\n            VolumeType: gp2\n            DeleteOnTermination: true\n        - DeviceName: /dev/sdf\n          Ebs: \n            Encrypted: true\n            VolumeSize: 4096\n            VolumeType: gp2\n            DeleteOnTermination: false\n      NetworkInterfaces:\n        - NetworkInterfaceId: !Ref ENI01\n          DeviceIndex: 0\n          DeleteOnTermination: false\n  EC2Instance02:\n    Type: AWS::EC2::Instance\n    Properties:\n      InstanceType: !Ref InstanceType\n      ImageId: !Ref LatestAmiId\n      EbsOptimized: true\n      SecurityGroupIds: [!Ref EC2SecurityGroup]\n      SourceDestCheck: true\n      IamInstanceProfile: AmazonSSMRoleForInstancesQuickSetup\n      BlockDeviceMappings: \n        - DeviceName: /dev/xvda\n          Ebs: \n            Encrypted: false\n            VolumeSize: 30\n            VolumeType: gp2\n            DeleteOnTermination: true\n        - DeviceName: /dev/sdf\n          VirtualName: ephemeral0\n      NetworkInterfaces:\n        - NetworkInterfaceId: !Ref ENI02\n          DeviceIndex: 0\n          DeleteOnTermination: false\n  ENI01:\n    Type: AWS::EC2::NetworkInterface\n    Properties:\n      PrivateIpAddress: !GetAtt EC2Instance01.PrivateIp\n      PrivateIpAddresses: \n        - PrivateIpAddress: !GetAtt EC2Instance01.PrivateIp\n          Primary: true\n      SubnetId: !GetAtt EC2Instance02.SubnetId\n      SourceDestCheck: true\n      GroupSet: \n        - !Ref EC2SecurityGroup\n  ENI02:\n    Type: AWS::EC2::NetworkInterface\n    Properties:\n      PrivateIpAddress: !GetAtt EC2Instance02.PrivateIp\n      PrivateIpAddresses: \n        - PrivateIpAddress: !GetAtt EC2Instance02.PrivateIp\n          Primary: true\n      SubnetId: !GetAtt EC2Instance02.SubnetId\n      SourceDestCheck: true\n      GroupSet: \n        - !Ref EC2SecurityGroup\n  EIP01:\n    Type: AWS::EC2::EIP\n    Properties:\n      InstanceId: !Ref EC2Instance01\n  EIP02:\n    Type: AWS::EC2::EIP\n    Properties:\n      InstanceId: !Ref EC2Instance02\n  DNSZone:\n    Type: AWS::Route53::HostedZone\n    Properties:\n      Name: !Ref DomainName\n  DNSEntries:\n    Type: AWS::Route53::RecordSetGroup\n    Properties:\n      HostedZoneId: !Ref DNSZone\n      RecordSets:\n        - Name: !Ref DomainName\n          Type: A\n          TTL: 300\n          MultiValueAnswer: true\n          SetIdentifier: node-01\n          ResourceRecords: \n            - !Ref EIP01\n        - Name: !Ref DomainName\n          Type: A\n          TTL: 300\n          MultiValueAnswer: true\n          SetIdentifier: node-02\n          ResourceRecords: \n            - !Ref EIP02\n        - Name: !Sub "*.${DomainName}"\n          Type: A\n          TTL: 300\n          MultiValueAnswer: true\n          SetIdentifier: node-01\n          ResourceRecords: \n            - !Ref EIP01\n        - Name: !Sub "*.${DomainName}"\n          Type: A\n          TTL: 300\n          MultiValueAnswer: true\n          SetIdentifier: node-02\n          ResourceRecords: \n            - !Ref EIP02\n        - Name: !Sub "node-01.${DomainName}"\n          Type: A\n          TTL: 300\n          MultiValueAnswer: true\n          SetIdentifier: node-01\n          ResourceRecords: \n            - !Ref EIP01\n        - Name: !Sub "node-02.${DomainName}"\n          Type: A\n          TTL: 300\n          MultiValueAnswer: true\n          SetIdentifier: node-02\n          ResourceRecords: \n            - !Ref EIP02\n'))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"EC2 Commands"),Object(l.b)("p",{parentName:"li"},"  The following is a set of bash commands to be used from within AWS Systems Manager once a new EC2 instance and EBS volume are created with the AWS SSM IAM role."),Object(l.b)("p",{parentName:"li"},"  ",Object(l.b)("strong",{parentName:"p"},"DO NOT USE THIS AS A SCRIPT!\nTHOROUGHLY READ IT AND RUN EACH COMMAND INDIVIDUALLY!\nSUBSTITUTE ALL VARIABLES BEFORE CONTINUING!")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# Assumes nvme1n1 is the name of the EBS volume. \n# Use lsblk to confirm this before running the script.\n\n# Attach EBS volume and configure auto-reattach on restart.\nmkfs -t xfs /dev/nvme1n1\nmkdir /data && mount /dev/nvme1n1 /data\nprintf "\\nUUID=$(blkid -s UUID -o value /dev/nvme1n1)     /data       xfs    defaults,nofail   0   2" >> /etc/fstab\numount /data && mount -a\n\n# Install Docker and move Docker root to EBS volume.\nyum install docker\nmkdir -p /data/var/lib/docker && ln -s /data/var/lib/docker /var/lib/docker\n\n# Set hostname before starting Docker and join the Swarm.\nhostnamectl set-hostname node-01.example.com\nservice docker start\ndocker swarm join --token SWARM_TOKEN IP_ADDR:2377\n')),Object(l.b)("p",{parentName:"li"},"  ",Object(l.b)("strong",{parentName:"p"},"In case your EBS volume runs out of storage space, follow the instructions below:")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# expand the EBS volume using the AWS management console first\nlsblk\ngrowpart /dev/nvme1n1 1\nxfs_growfs -d /data\n")))),Object(l.b)("h3",{id:"aws-ssm-instructions"},"AWS SSM Instructions"),Object(l.b)("p",null,"We recommend disabling all SSH (port 22) or remote access to any EC2 instances you configure. ",Object(l.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html#start-ec2-console"},"Use AWS Systems Session Manager (AWS SSM) to access your node.")," Additionally, follow the instructions below on your local computer to securely communicate with the instance(s)."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html"},"Install the AWS CLI SSM plugin."))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-getting-started-enable-ssh-connections.html"},"Configure SSH to support AWS SSM tunneling."))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Alternatively, manually open a port forwarding tunnel."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},'aws ssm start-session \\\n    --target $(aws ec2 describe-instances \\\n        --filter "Name=tag:Name,Values=node-01" \\\n        --query "Reservations[].Instances[?State.Name == \'running\'].InstanceId[]" \\\n        --output text) \\\n    --document-name AWS-StartPortForwardingSession \\\n    --parameters \'{ "portNumber": ["22"], "localPortNumber": ["9999"] }\'\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Alternatively, manually open a secure SSH tunnel session."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"aws ssm start-session \\\n    --target $(aws ec2 describe-instances \\\n        --filter \"Name=tag:Name,Values=node-01\" \\\n        --query \"Reservations[].Instances[?State.Name == 'running'].InstanceId[]\" \\\n        --output text) \\\n    --document-name AWS-StartSSHSession \\\n    --parameters 'portNumber=%p'\n")))))}m.isMDXComponent=!0},362:function(e,r,n){"use strict";n.d(r,"a",(function(){return g})),n.d(r,"b",(function(){return p}));var a=n(0),t=n.n(a);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=t.a.createContext({}),m=function(e){var r=t.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},g=function(e){var r=m(e.components);return t.a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},d=t.a.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=m(n),d=a,p=g["".concat(o,".").concat(d)]||g[d]||u[d]||l;return n?t.a.createElement(p,s(s({ref:r},c),{},{components:n})):t.a.createElement(p,s({ref:r},c))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7240:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/Untitled_AWS-254a3f4cb9e9716d707ff407b7ca3969.png"}}]);