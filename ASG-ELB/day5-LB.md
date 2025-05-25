## How to Create a Load Balancer

To create a load balancer in AWS:
- Open the EC2 or Elastic Load Balancing console.
- Choose the type of load balancer (Application, Network, or Classic).
- Specify the scheme (internet-facing or internal).
- Configure listeners (protocol and port).
- Select subnets and Availability Zones.
- Assign security groups.
- Configure health checks.
- Register target instances or target groups.
- Review and create the load balancer[3].

---

## What is Internal & External Load Balancer

**Internal Load Balancer:**
- Assigned to a private subnet, has only private IP addresses.
- DNS name resolves to private IPs.
- Accessible only within the VPC or via VPC peering.
- Used for routing traffic between application tiers (e.g., web to app servers).

**External (Internet-facing) Load Balancer:**
- Nodes have public IP addresses.
- DNS name resolves to public IPs.
- Accessible from the internet.
- Used to route external client requests to backend resources.

---

## Load Balancing Protocols

Load balancers support various protocols, including:
- HTTP/HTTPS (Application Layer)
- TCP/UDP (Transport Layer)
- SSL/TLS (for encrypted connections)
The supported protocols depend on the load balancer type (e.g., ALB supports HTTP/HTTPS, NLB supports TCP/UDP).

---

## Creating Security Groups for the Load Balancer

- Security groups control inbound and outbound traffic to the load balancer.
- For frontend (client-facing), allow inbound traffic on listener ports (e.g., 80, 443).
- For backend (target-facing), allow traffic from the load balancer’s security group to the instances on the required ports.
- You can create and assign security groups during or after load balancer creation.

---

## Configuring Health Check for the Load Balancer

- Health checks determine the availability of registered targets.
- Configure protocol (HTTP, HTTPS, TCP), port, and path (for HTTP/HTTPS).
- Set thresholds for healthy/unhealthy status, response timeout, and interval.
- If a target fails health checks, the load balancer stops routing traffic to it until it passes again.

---

## Adding Multiple Instances to the Load Balancer

- Register multiple EC2 instances or targets with the load balancer.
- This can be done during creation or later by modifying the target group.
- The load balancer will distribute incoming traffic across all healthy registered targets.

---

## What are Custom Domain Names & Cross-Zone Load Balancing

**Custom Domain Names:**
- You can map your load balancer’s DNS name (e.g., `my-alb-123456.region.elb.amazonaws.com`) to a custom domain (e.g., `www.example.com`) using Route 53 or another DNS provider.

**Cross-Zone Load Balancing:**
- Distributes incoming traffic evenly across all registered targets in all enabled Availability Zones.
- Ensures even load distribution, regardless of the number of targets in each zone.

---

## Explain DNS Failover

- DNS failover uses Route 53 health checks and routing policies.
- If the primary load balancer becomes unhealthy, Route 53 can route traffic to a secondary resource (e.g., another load balancer or region).
- This enhances application availability and disaster recovery.

---

## What are Sticky Sessions

- Sticky sessions (session affinity) bind a client’s session to a specific target.
- Ensures that all requests from a user during a session are sent to the same backend instance.
- Useful for stateful applications where session data is stored locally.

---

## Perform Monitoring and Logging

- AWS provides monitoring via CloudWatch metrics (e.g., request count, latency, healthy host count).
- Access logs can be enabled to capture detailed request and response data.
- Monitoring helps track performance, troubleshoot issues, and ensure compliance.

---
