Load balancer is a device or cloud based service or software application that distributes network traffic across multiple servers. It acts as a central point of contact for users, ensuring that all servers in a pool are utilized effectively and that no single server gets overloaded. By spreading the workload, load balancers improve application performance, reliability, and availability. 

Flow of LB:

1--> A user sends a request to the load balancer. 
2--> The load balancer determines which server is best suited to handle the request based on various factors, such as server health, load, and geographic location. 
3--> The load balancer forwards the request to the chosen server. 
4--> The server processes the request and sends a response back to the user through the load balancer. 

## What is ELB (Elastic Load Balancing)?

Elastic Load Balancing (ELB) is a cloud-based service provided by AWS that automatically distributes incoming application or network traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions, within one or more Availability Zones. ELB is designed to improve the availability, scalability, and fault tolerance of your applications by ensuring that no single resource becomes overwhelmed with traffic.

## Introduction to ELB

ELB replaces traditional hardware load balancers with a scalable, virtual solution in the cloud. It offers several types of load balancers to suit different needs:

- **Application Load Balancer (ALB):** Best for HTTP/HTTPS traffic and advanced routing, operating at Layer 7 of the OSI model.
- **Network Load Balancer (NLB):** Optimized for TCP/TLS traffic requiring high performance and ultra-low latency, operating at Layer 4.
- **Classic Load Balancer (CLB):** Provides basic load balancing for applications built within the EC2-Classic network, supporting both Layer 4 and Layer 7.

Each type offers high availability, automatic scaling, and robust security features, including SSL/TLS termination and integrated certificate management.

## How ELB Works

**1. Traffic Distribution:**  
ELB acts as the entry point for all incoming application traffic. It receives requests from clients and distributes them across its registered targets (e.g., EC2 instances) in multiple Availability Zones. This prevents any single instance from becoming a bottleneck and helps maintain consistent application performance.

**2. Health Checks:**  
ELB continuously monitors the health of registered targets using configurable health checks. If a target becomes unhealthy, ELB automatically stops sending traffic to it and resumes routing traffic once it is healthy again. This ensures that only healthy resources serve requests, improving reliability.

**3. Listeners and Routing:**  
A listener is configured with a protocol and port to check for connection requests from clients. Based on the rules and routing configuration, ELB forwards the traffic to the appropriate targets. For example, an ALB can route requests based on URL path or host headers, while an NLB routes based on IP and port.

**4. Cross-Zone Load Balancing:**  
When enabled, cross-zone load balancing allows ELB to distribute traffic evenly across all registered targets in all enabled Availability Zones, further enhancing fault tolerance and resource utilization.

**5. Security and Monitoring:**  
ELB integrates with AWS security features, such as VPC, access control lists, and SSL/TLS encryption. It also provides monitoring and logging capabilities through Amazon CloudWatch, enabling real-time performance tracking and alerting.

**Summary Table: ELB Key Features**

| Feature                | Description                                                                                 |
|------------------------|---------------------------------------------------------------------------------------------|
| Traffic Distribution   | Distributes incoming requests across multiple targets and zones                             |
| Health Checks          | Monitors target health, routes only to healthy resources                                    |
| Scalability            | Automatically scales to handle changes in incoming traffic                                  |
| Security               | Supports SSL/TLS, integrated with AWS security tools                                        |
| Monitoring             | Real-time metrics and logging via CloudWatch                                                |
| Types                  | Application, Network, and Classic Load Balancers                                            |

In essence, ELB is a foundational AWS service for building scalable, resilient, and secure cloud applications by intelligently managing and distributing traffic.
