# AWS Virtual Private Cloud (VPC)

## ✨ Overview

Amazon Virtual Private Cloud (VPC) allows you to create a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that **you define**. With VPC, you can configure subnets, route tables, security groups, network access control lists, internet gateways, and more.


---

## 📏 Architecture Diagram (Text Representation)

```
                                        AWS REGION
                                           |
                                   -------------------
                                   |    Custom VPC    |
                                   |   10.0.0.0/16    |
                                   -------------------
                                       |           |
                              ----------       ----------
                              | Subnet A|       | Subnet B|
                              | Public  |       | Private |
                              ----------       ----------
                                  |                  |
                        -----------------   ------------------
                        | EC2 Web Server |   | EC2 App Server  |
                        -----------------   ------------------
                                  |                  |
                         ----------------     -------------------
                         | Internet GW   |     | NAT Gateway     |
                         ----------------     -------------------
```

---

## 📆 Steps

### 1. CIDR Blocks and IP Planning

* **CIDR (Classless Inter-Domain Routing)** block defines the range of IP addresses for your VPC.
* Example: `10.0.0.0/16` allows for 65,536 IPs. You can create subnets like:

  * `10.0.1.0/24` for Public Subnet
  * `10.0.2.0/24` for Private Subnet

### 2. Creating a Custom VPC

* Go to VPC dashboard > Create VPC
* Choose "VPC Only" or "VPC with Subnets"
* Assign CIDR block: `10.0.0.0/16`
* Name your VPC
* Enable DNS Hostnames if you need DNS resolution

### 3. Subnets

* **Subnets** are segments of a VPC that reside in specific AZs.
* Public Subnet: Associated with a route table containing a route to the IGW
* Private Subnet: Routes traffic via NAT to access the internet (not directly)

### 4. Route Tables & Association

* Each subnet must be associated with a route table.
* **Public Route Table**:

  * Destination: `0.0.0.0/0` → Target: IGW
* **Private Route Table**:

  * Destination: `0.0.0.0/0` → Target: NAT Gateway

### 5. Internet Gateway (IGW)

* A gateway attached to a VPC to enable communication between resources in your VPC and the internet.
* Steps:

  * VPC Dashboard > IGW > Create IGW
  * Attach IGW to your VPC
  * Update route table for public subnets

### 6. Connecting to Instances in Public Subnet

* Ensure:

  * IGW is attached to the VPC
  * Route table has route to IGW
  * EC2 instance has Public IP or Elastic IP
  * Security Group allows SSH (port 22) or HTTP (80/443)

### 7. NAT Gateway & NAT Instance

* **NAT Gateway**:

  * Used for outbound internet access from private subnets
  * Created in public subnet and associated with Elastic IP
* **NAT Instance**:

  * EC2-based alternative to NAT Gateway
  * Needs proper configuration and routing

| Feature      | NAT Gateway   | NAT Instance       |
| ------------ | ------------- | ------------------ |
| Scalable     | Yes           | No (manual)        |
| Managed      | Fully managed | Manual maintenance |
| Availability | High          | Single AZ          |
| Cost         | Higher        | Lower (test only)  |

### 8. NACLs (Network Access Control Lists)

* **Subnet-level firewall**
* Stateless: Rules apply in both directions
* Use cases: Block specific IP ranges, deny traffic types
* Default NACL: Allows all traffic in and out

| Rule # | Type | Protocol | Port Range | Source    | Allow/Deny |
| ------ | ---- | -------- | ---------- | --------- | ---------- |
| 100    | HTTP | TCP      | 80         | 0.0.0.0/0 | ALLOW      |
| 200    | All  | All      | All        | 0.0.0.0/0 | DENY       |

### 9. Security Groups

* **Instance-level firewall**
* Stateful: Response traffic is automatically allowed
* Common rules:

  * Allow SSH: port 22
  * Allow HTTP/HTTPS: ports 80/443
  * Restrict DB access to specific security groups

### 10. DHCP Options Sets & DNS

* Customize DNS settings using DHCP options
* Default: AmazonProvidedDNS
* Can configure:

  * Domain Name
  * DNS Servers (e.g., internal or Route 53)

### 11. VPC Peering

* Private connection between two VPCs
* Steps:

  1. Create VPC Peering Connection
  2. Accept Peering Request
  3. Update Route Tables in both VPCs
  4. Modify SG/NACL to allow inter-VPC traffic

Use Cases:

* Communication between microservices in separate VPCs
* Shared services (logging, monitoring)

---

## 🚀 Real-world Use Case

**Architecture**: 3-tier Web App

* Web Layer (public subnet): EC2/ALB
* App Layer (private subnet): EC2/ECS
* DB Layer (private subnet): RDS
* Internet Access: IGW (Web Layer), NAT GW (App Layer)
* Security:

  * SG Web: HTTP/HTTPS
  * SG App: Only from Web SG
  * SG DB: Only from App SG

---

## ✅ Best Practices

* Always create subnets in multiple AZs for HA
* Use NAT Gateways over NAT Instances for production
* Monitor with **VPC Flow Logs**
* Apply least privilege to Security Groups
* Use **Terraform/CloudFormation** for reproducibility
* Enable VPC endpoints to avoid traffic over internet

