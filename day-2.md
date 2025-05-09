
## Types of Databases

While there are many ways to categorize databases, some common types include:

* **Relational Databases:** Organize data into tables with defined schemas, using SQL for querying (e.g., MySQL, PostgreSQL, Oracle, SQL Server).
* **NoSQL Databases:** Offer flexible schemas for various data models beyond the relational structure. This category includes:
    * **Key-Value Stores:** Store data as key-value pairs (e.g., Redis, Memcached).
    * **Document Databases:** Store data as JSON-like documents (e.g., MongoDB, Couchbase).
    * **Column-Family Databases:** Store data in column families rather than rows (e.g., Cassandra, HBase).
    * **Graph Databases:** Model relationships between data points as nodes and edges (e.g., Neo4j, Amazon Neptune).
* **Data Warehouses:** Designed for analytical processing and business intelligence, often involving large datasets (e.g., Amazon Redshift, Snowflake).

## Why Use a Database?

Databases are fundamental for modern applications due to several key benefits:

* **Data Persistence:** Databases provide a reliable and durable way to store data, ensuring it's not lost when an application closes or a server restarts.
* **Data Organization:** They offer structured ways to organize and manage large volumes of data, making it easier to access, update, and analyze.
* **Data Integrity:** Databases often enforce constraints and relationships to maintain the accuracy and consistency of the data.
* **Efficient Retrieval:** They provide efficient mechanisms for querying and retrieving specific data based on defined criteria.
* **Concurrency Control:** Databases manage simultaneous access by multiple users or applications, preventing data corruption.
* **Scalability:** Many database systems are designed to scale horizontally or vertically to handle increasing data volumes and user traffic.

### <ins>Amazon RDS</ins>

AWS RDS is a managed **relational database** service supporting various engines like MySQL, PostgreSQL, MariaDB, Oracle BYOL, and SQL Server. It simplifies database setup, operation, and scaling in the cloud.

🎁 **12 MONTHS FREE TIER**

* **Compute:** 750 hours per month of `db.t2.micro`, `db.t3.micro`, and `db.t4g.micro` Single-AZ instance usage (applicable database engines)
* **Storage:** 20 GB of General Purpose SSD (gp2) storage
* **Backups:** 20 GB of storage for database backups and database snapshots

---

### <ins>DynamoDB</ins>

DynamoDB is a fully managed, serverless **NoSQL database** designed for applications requiring high performance and scalability at any level. It's a key-value and document database.

✨ **ALWAYS FREE TIER**

* **Storage:** 25 GB of storage
* **Write Capacity:** 25 units of write capacity per month
* **Read Capacity:** 25 units of read capacity per month
* **Requests:** Enough capacity to handle up to 200 million requests per month

---

### <ins>Redshift</ins>

Redshift is a fast, simple, and cost-effective **data warehousing** service for analyzing large datasets using SQL.

⏱️ **2-MONTH FREE TRIAL**

* **Compute:** 750 DC2.Large node hours per month

---

### <ins>Database Migration Service</ins>

AWS Database Migration Service (DMS) enables you to migrate databases to AWS easily and securely with minimal downtime.

🆓 **ALWAYS FREE TIER**

* **Instance Usage:** 750 hours of Amazon DMS single Availability Zone `dms.t2.micro` instance usage per month
* **Storage:** 50 GB of included general purpose (SSD) storage
