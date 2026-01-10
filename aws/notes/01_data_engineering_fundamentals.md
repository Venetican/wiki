# AWS Certified Data Engineer – Course Overview Notes

## Exam Context
- **Certification:** AWS Certified Data Engineer – Associate (DEA-C01)
- **Difficulty:** Very broad and deep; harder than Data Analytics Specialty (per instructors)
- **Recommended background:**
  - AWS basics (EC2, networking, Cloud Practitioner level)
  - Data engineering fundamentals (databases, SQL, pipelines)
- **Prep advice:** Long preparation, do not rush exam scheduling

---

# AWS Services Covered (Grouped + Quick Summary)

## Analytics & Data Processing
- **Amazon EMR** – Distributed big data processing (Spark, Hadoop).
- **AWS Lake Formation** – Data lake setup, governance, and security.
- **Amazon Redshift** – Data warehouse for analytics & engineering workloads.
- **Amazon Kinesis** – Real-time data streaming ingestion.
- **Amazon MSK (Kafka)** – Managed Apache Kafka for streaming pipelines.
- **AWS Glue** – Core ETL service for transforming and moving data.
- **Amazon Athena** – Serverless SQL queries on data in S3.
- **Amazon OpenSearch Service** – Search & log analytics.
- **Amazon QuickSight** – Data visualization and BI dashboards.

## Application Integration / Orchestration
- **Amazon EventBridge** – Event-driven integration.
- **AWS Step Functions** – Workflow orchestration.
- **Amazon AppFlow** – SaaS data ingestion.
- **Amazon SNS** – Pub/Sub messaging.
- **Amazon SQS** – Message queues.
- **Amazon MWAA (Airflow)** – Managed workflow orchestration.

## Compute
- **Amazon EC2** – Virtual servers (assumed prior knowledge).
- **AWS Lambda** – Serverless compute for glue logic & transforms.
- **AWS Batch** – Batch processing jobs.
- **AWS Serverless Application Repository** – Reusable serverless apps.

## Containers
- **Amazon ECR** – Container image registry.
- **Amazon ECS** – Container orchestration (AWS-native).
- **Amazon EKS** – Managed Kubernetes.

## Databases
- **Amazon RDS** – Relational databases.
- **Amazon DynamoDB** – NoSQL key-value store.
- **Amazon Keyspaces** – Cassandra-compatible NoSQL.
- **Amazon MemoryDB** – Redis-compatible in-memory DB.
- **Amazon Neptune** – Graph database.
- **Amazon DocumentDB** – MongoDB-compatible document DB.

## Developer Tools
- **AWS CLI** – Command-line management.
- **AWS Cloud9** – Cloud IDE.
- **AWS CDK** – Infrastructure as code (high-level).
- **CodeCommit** – Git repositories.
- **CodeBuild** – Build automation.
- **CodeDeploy** – Deployment automation.
- **CodePipeline** – CI/CD orchestration.

## API & Frontend Integration
- **Amazon API Gateway** – External API access, throttling, control.

## Machine Learning (Data Engineering Scope Only)
- **Amazon SageMaker Data Wrangler** – Data preparation.
- **SageMaker Feature Store** – Feature management for ML pipelines.

## Management & Governance
- **AWS CloudFormation** – Infrastructure as code.
- **AWS CloudTrail** – API auditing.
- **Amazon CloudWatch** – Monitoring & logs.
- **AWS Config** – Resource compliance tracking.
- **Amazon Managed Grafana** – Metrics visualization.
- **AWS Systems Manager** – Ops & automation.
- **AWS Well-Architected Tool** – Architecture best practices.

## Migration & Transfer
- **Application Discovery Service** – Dependency discovery.
- **Application Migration Service** – Lift-and-shift migration.
- **Database Migration Service (DMS)** – Database migration.
- **AWS DataSync** – Large-scale data transfers.
- **AWS Transfer Family** – SFTP/FTPS/FTP to AWS.
- **AWS Snow Family** – Offline data transfer.

## Networking & Content Delivery
- **Amazon CloudFront** – Content delivery (CDN).
- **Amazon Route 53** – DNS & routing.
- **Amazon VPC** – Network isolation.
- **AWS PrivateLink** – Private service connectivity.

## Security, Identity & Compliance
- **AWS IAM** – Identity & access management.
- **AWS KMS** – Encryption key management.
- **Amazon Macie** – PII discovery.
- **AWS Secrets Manager** – Secure credential storage.
- **AWS WAF** – Web application firewall.
- **AWS Shield** – DDoS protection.

## Storage
- **Amazon S3** – Core data lake storage.
- **Amazon EFS** – Shared file system.
- **Amazon EBS** – Block storage.
- **AWS Backup** – Backup management.

---

# Summary Table

| Category | Key Services | Purpose |
|-------|-------------|--------|
| Analytics | EMR, Glue, Redshift, Athena, Kinesis | Data processing & analytics |
| Integration | EventBridge, Step Functions, SNS, SQS | Pipeline orchestration |
| Compute | EC2, Lambda, Batch | Data processing execution |
| Containers | ECR, ECS, EKS | Containerized workloads |
| Databases | RDS, DynamoDB, Keyspaces | Data storage & access |
| Dev Tools | CDK, CodePipeline, CLI | Build & deploy data systems |
| ML (DE scope) | SageMaker Wrangler, Feature Store | Data prep for ML |
| Governance | CloudWatch, CloudTrail, Config | Monitoring & compliance |
| Migration | DMS, DataSync, Snow | Data movement |
| Networking | VPC, CloudFront, Route 53 | Secure & scalable access |
| Security | IAM, KMS, Macie | Identity & data protection |
| Storage | S3, EFS, EBS | Raw & processed data storage |


# Data Engineering Fundamentals – Types of Data

## Scope
- Exam tests **data engineering fundamentals**, not only AWS services.
- Focus on concepts explicitly mentioned in the **exam guide**.

---

## Structured Data
**Definition**
- Data organized in a **fixed schema** (rows & columns, defined data types).
- Commonly stored in **relational databases**.

**Characteristics**
- Easily queryable with **SQL**.
- Consistent structure, predictable columns.
- Cleaned and well-organized.

**Examples**
- Relational DB tables (Oracle, Redshift, MySQL, PostgreSQL).
- Well-formed **CSV** files (consistent columns).
- Structured **Excel spreadsheets**.

---

## Unstructured Data
**Definition**
- Data with **no predefined schema or structure**.
- Cannot be queried directly without preprocessing.

**Characteristics**
- Requires **parsing, indexing, or metadata extraction** first.
- Highly variable formats.

**Examples**
- Raw text (books, Wikipedia, Reddit).
- **Images, audio, video** files.
- Emails and word processing documents (raw content).

**Key Requirement**
- Must extract meaning (metadata, transcripts, topics) before querying.

---

## Semi-Structured Data
**Definition**
- Data with **some structure**, but not rigid or consistent.
- Uses tags, hierarchies, or patterns.

**Characteristics**
- More flexible than structured data.
- Less chaotic than unstructured data.
- Schema may vary within the same dataset.

**Examples**
- **JSON** and **XML** files.
- Email headers (structured metadata + unstructured body).
- **Log files** (most common in data engineering).

**Log Files (Important)**
- Varying formats and missing fields.
- Structure exists but is **inconsistent per line**.
- Requires parsing to extract usable structure.

---

## Key Exam Takeaway
- **Structured:** fixed, consistent schema → easy querying.
- **Unstructured:** no schema → preprocessing required.
- **Semi-structured:** partial/inconsistent schema → parsing needed.
- Log files are the **most critical semi-structured example** for data engineering.


# Data Engineering Fundamentals – The Three Vs of Data

## Scope
- Exam focuses on **three Vs**: **Volume, Velocity, Variety**.
- Ignore **Veracity** (not required by exam guide).

---

## Volume
**Definition**
- Amount or size of data being stored and processed.

**Why it matters**
- Influences storage, processing, and transfer strategies.
- Drives architecture choices (single DB vs distributed systems).

**Examples**
- Social media platforms generating **terabytes per day** (posts, images, videos).
- Retailers storing **petabytes** of historical transaction data.

**Implications**
- Large volumes → distributed processing.
- Data transfer decisions (internet upload vs **AWS Snow Family**).
- Pipeline design depends on scale.

---

## Velocity
**Definition**
- Speed at which data is generated, ingested, and processed.

**Key question**
- **Batch vs real-time / near real-time** processing?

**Why it matters**
- High velocity requires continuous ingestion and processing.
- Exam often tests nuances between real-time vs near real-time.

**Examples**
- Streaming sensor data (IoT-style use cases).
- High-frequency trading systems (millisecond-level latency).

**Implications**
- Technology choice depends on ingestion speed.
- Common exam context: choosing appropriate **streaming vs batch** solutions.

---

## Variety
**Definition**
- Diversity of data **types, formats, and sources**.

**Connection**
- Directly tied to **structured, semi-structured, unstructured** data.

**Examples**
- Structured: relational databases.
- Semi-structured: JSON log files.
- Unstructured: emails, documents.
- Mixed-source systems (e.g. healthcare data from records, devices, forms).

**Implications**
- May require **multiple storage systems**.
- Need unified querying and integration across heterogeneous data sources.

---

## Exam Takeaways
- **Volume** → scale of data, storage & processing architecture.
- **Velocity** → batch vs streaming decisions.
- **Variety** → handling multiple data formats and sources.
- All three directly influence **data pipeline design** and **service selection**.


# Data Warehouses vs Data Lakes vs Data Lakehouse

## Data Warehouse
**Definition**
- Centralized repository for **structured data**.
- Optimized for **analytics and complex queries**.

**Key Characteristics**
- Data is **cleaned, transformed, and loaded (ETL)**.
- **Schema-on-write** (schema known before storage).
- Typically uses **star or snowflake schema**.
- Optimized for **read-heavy workloads**.
- Less flexible, higher operational cost.

**AWS Example**
- **Amazon Redshift**

**Typical Use Cases**
- Business Intelligence (BI)
- Reporting and analytics
- Integrated data from multiple structured sources
- Data marts for specific teams (finance, ML, analytics)

---

## Data Lake
**Definition**
- Large-scale storage for **raw data in native format**.
- Supports **structured, semi-structured, and unstructured data**.

**Key Characteristics**
- Data loaded **as-is** with minimal preprocessing.
- **Schema-on-read** (schema defined at query time).
- Uses **ELT** (Extract, Load, Transform).
- Highly flexible and scalable.
- Lower storage cost, higher downstream processing flexibility.

**AWS Example**
- **Amazon S3** (with Glue + Athena for querying)

**Typical Use Cases**
- Log storage
- Exploratory analytics
- Machine learning feature extraction
- Unknown or evolving data use cases

---

## Data Warehouse vs Data Lake (Core Differences)

| Aspect | Data Warehouse | Data Lake |
|-----|---------------|----------|
| Data Type | Structured | Structured, semi-, unstructured |
| Schema | Schema-on-write | Schema-on-read |
| Pipeline | ETL | ELT |
| Flexibility | Low | High |
| Cost | Higher | Lower (storage) |
| Query Performance | Optimized | Depends on processing layer |
| Typical Storage | Database | Object storage |

---

## When to Choose Which

### Use a Data Warehouse when:
- Data is **structured**.
- Schema is known upfront.
- Need **fast, complex queries**.
- Primary use is **BI and analytics**.
- Data integration from multiple sources is required.

### Use a Data Lake when:
- Data formats are **mixed or unknown**.
- You need **scalability and flexibility**.
- Data volume is very large.
- Use cases may evolve over time.
- Supporting **advanced analytics or ML**.

---

## Using Both Together
- Common pattern:
  - Store **raw data** in a data lake.
  - Load **processed subsets** into a data warehouse.
- Same data may exist in both for different purposes.
- Focus: **right tool for the right job**.

---

## Data Lakehouse
**Definition**
- Hybrid architecture combining **data lake flexibility** with **data warehouse performance**.

**Key Features**
- Supports **structured and unstructured data**.
- Enables both **schema-on-write and schema-on-read**.
- Suitable for analytics and machine learning.
- Built on distributed cloud architectures.
- Often supports **ACID transactions** (e.g. Delta Lake).

**AWS Example**
- **S3 + AWS Lake Formation + Redshift Spectrum**
  - Raw data stored in S3.
  - Queried like a warehouse via Redshift Spectrum.

**Industry Direction**
- Increasingly popular architecture.
- Aims to unify storage, analytics, and ML on one platform.

---

## Exam Takeaways
- **Warehouse:** structured, ETL, performance-focused.
- **Lake:** raw data, ELT, flexible and scalable.
- **Lakehouse:** hybrid of both.
- AWS-relevant focus: **S3, Lake Formation, Redshift, Redshift Spectrum**.


# Data Engineering Fundamentals – Data Mesh

## What is a Data Mesh?
- **Organizational & governance paradigm**, not a specific technology.
- Focuses on **data ownership, access, and management** at scale.
- Decentralized approach to data responsibility.

---

## Core Principles
- **Domain-based ownership**
  - Individual teams (domains) own their data.
  - Teams are responsible for data quality, security, and maintenance.
- **Data as a product**
  - Each domain exposes its data as well-defined **data products**.
  - Other teams consume these products instead of raw data.
- **Decentralization with standards**
  - Ownership is decentralized.
  - Governance is **federated** with shared, central standards.

---

## How It Works
- Domains publish data products.
- Cross-team use cases consume multiple data products.
- Consumers do not access raw source systems directly.
- Encourages scalability in large organizations.

---

## Governance & Infrastructure
- Requires **federated governance**:
  - Central standards for security, access control, and compliance.
  - Domains enforce these standards locally.
- Requires **self-service infrastructure**:
  - Shared tooling and platforms provided centrally.
  - Domains build on top of common infrastructure.

---

## AWS Alignment
- AWS fits naturally with the data mesh concept.
- Common AWS components:
  - **Amazon S3** – data storage.
  - **AWS Lake Formation** – permissions, governance.
  - **AWS Glue** – centralized data catalog.
  - **Data lakes / warehouses** – implementation building blocks.
- AWS supports the model but **does not define it**.

---

# Data Engineering Fundamentals – ETL & ELT Pipelines

## ETL vs ELT
- **ETL (Extract, Transform, Load)**: Typical for **data warehouses**.
- **ELT (Extract, Load, Transform)**: Typical for **data lakes**.
- Letters mean the same steps; **order differs** based on architecture.

---

## Extract (E)
**Purpose**
- Retrieve raw data from source systems.

**Common Sources**
- Databases
- CRM systems (e.g., Salesforce)
- Flat files (logs)
- APIs
- External data repositories

**Key Considerations**
- **Data integrity** (no loss or corruption).
- Retry logic for failures (e.g., API errors).
- **Velocity-aware** extraction:
  - Batch (daily/weekly)
  - Near real-time
  - Real-time streaming
- Extraction strategy depends on data generation & query requirements.

---

## Transform (T)
**Purpose**
- Convert raw data into a usable format.

**Common Transformations**
- **Data cleansing**: fix errors, remove duplicates.
- **Handling missing data**: drop rows, impute values, reject records.
- **Enrichment**: merge data from multiple sources.
- **Format changes**:
  - Strings → dates/timestamps
  - Text → integers/binary
- **Aggregations**: totals, averages, derived metrics.
- **Encoding / decoding**:
  - Decompression
  - Encryption / decryption
  - Row-based ↔ columnar formats

**Context**
- Done **before load** in ETL.
- Done **on demand after load** in ELT.

---

## Load (L)
**Purpose**
- Move data into the target system.

**Targets**
- Data warehouse
- Data lake repository

**Loading Patterns**
- Batch loads
- Streaming / continuous loads

**Key Considerations**
- Maintain **data integrity** during writes.
- Handle failures (disk errors, backpressure).
- Avoid silent data loss.
- Influenced by **volume & velocity** requirements.

---

## Pipeline Orchestration
**Why Needed**
- ETL/ELT involves many dependent steps.
- Must run in correct order and on schedule.
- Requires automation and monitoring.

**AWS Services for Orchestration**
- **AWS Glue** – Managed ETL / ELT.
- **Amazon EventBridge** – Event-driven triggers.
- **Amazon MWAA (Airflow)** – Workflow orchestration.
- **AWS Step Functions** – State-based workflows.
- **AWS Lambda** – Lightweight processing steps.
- **Glue Workflows** – Native ETL orchestration.

---

## Exam Takeaways
- ETL = transform before storage (warehouse).
- ELT = transform after storage (lake).
- Extraction & loading must ensure **data integrity**.
- Pipeline orchestration is critical.
- AWS provides multiple services to automate ETL/ELT workflows.

# Data Engineering Fundamentals – Data Sources & Data Formats

## Data Sources

### JDBC (Java Database Connectivity)
- Interface for accessing relational databases.
- **Platform independent** (Java-based).
- **Language dependent** (requires Java).
- Common for Java-based extraction tools.

### ODBC (Open Database Connectivity)
- **Platform dependent** (requires specific drivers).
- **Language independent**.
- Used when not working in Java.
- Most ETL tools support both JDBC and ODBC internally.

### Other Data Sources
- **Raw log files** (e.g., logs written to S3).
- **APIs** (application programming interfaces).
- **Streaming sources**:
  - Apache Kafka
  - Amazon Kinesis
- Data may arrive in **real time** or batch form.

---

## Data Formats

## CSV (Comma-Separated Values)
**Type**
- Text-based, human-readable, structured.

**Characteristics**
- Rows = records, columns = fields.
- Delimiter may vary (comma, tab, pipe).
- Simple, widely supported.

**Use Cases**
- Small to medium datasets.
- Data exchange between systems.
- Import/export from databases and spreadsheets.

**Pros / Cons**
- Easy to read and edit manually.
- Inefficient for large datasets.
- Requires escaping rules for delimiters in data.

---

## JSON (JavaScript Object Notation)
**Type**
- Text-based, human-readable.
- **Structured or semi-structured**.

**Characteristics**
- Key-value pairs.
- Flexible schema.
- Supports nested structures.

**Use Cases**
- Web APIs (backend ↔ frontend).
- Configuration files.
- NoSQL databases (e.g., MongoDB).
- Semi-structured data storage.

**Ecosystem**
- Supported by JavaScript, Python, Java.
- Common in REST APIs.

---

## Avro
**Type**
- **Binary** format.

**Characteristics**
- Stores **data + schema together**.
- Compact and efficient.
- Schema evolution supported.

**Use Cases**
- Big data pipelines.
- Real-time streaming.
- Efficient serialization between systems.

**Trade-offs**
- Not human-readable.
- Schema included increases size if schema is static.

**Common Systems**
- Apache Kafka
- Apache Spark
- Apache Flink
- Hadoop

---

## Parquet
**Type**
- **Columnar storage** (column-oriented).

**Characteristics**
- Optimized for analytics.
- Efficient compression and encoding.
- Reads only required columns.

**Use Cases**
- Large analytical workloads.
- Queries on subsets of columns.
- Distributed analytics systems.

**Advantages**
- Reduced I/O.
- Faster analytical queries.
- Efficient storage for wide tables.

**Common Systems**
- Apache Hadoop
- Apache Spark
- Apache Hive
- Apache Impala
- **Amazon Redshift Spectrum**

---

## Exam Takeaways
- JDBC vs ODBC: Java-based vs driver-based access.
- CSV & JSON: human-readable, flexible exchange formats.
- Avro: binary + schema, ideal for streaming & evolving schemas.
- Parquet: columnar, analytics-optimized, critical for big data workloads.
- Format choice depends on **volume, velocity, and query patterns**.

# Data Engineering Fundamentals – Data Modeling, Lineage & Schema Evolution

## Data Modeling (High-Level)
- Exam requires **conceptual understanding**, not deep modeling theory.
- Focus on **facts, dimensions, and relationships**.

### Star Schema (Concept)
- **Fact table** at the center:
  - Contains measurable events (e.g., enrollments, transactions).
  - Stores foreign keys (course_id, student_id, payment_id, timestamp).
- **Dimension tables** around the fact:
  - Course (name, price, instructor)
  - Student (name, address, email)
  - Payment (type, tax, authorization code)
- Linked via **primary & foreign keys**.
- Reduces data duplication and optimizes analytics.
- Visualized as an **Entity Relationship Diagram (ERD)**.

---

## Data Lineage
**Definition**
- Visual record of **data flow and transformations** from source to destination.

**Why It Matters**
- Troubleshooting data errors.
- Compliance and auditing.
- Documentation and onboarding.
- Understanding pipeline behavior end-to-end.

**AWS-Oriented Example**
- Data ingested from **S3** via **AWS Glue**.
- Glue catalogs and transforms data (ETL).
- **Spline Agent** captures transformation metadata.
- Lineage data exposed via Lineage API.
- Stored in **Amazon Neptune** (graph database).
- Queried and visualized externally.
- Alternative AWS-native option: **SageMaker Lineage**.

---

## Schema Evolution
**Definition**
- Ability to **change data schema over time** without breaking existing systems.

**Key Benefits**
- Adapt to changing business requirements.
- Avoid costly data migrations.
- Maintain **backward compatibility**.
- Add, remove, or modify fields safely.

**Typical Context**
- Common in **data lakes** (schema-on-read).
- Less flexible in strict data warehouse models.

**AWS Example**
- **AWS Glue Schema Registry**
  - Schema discovery
  - Versioning
  - Compatibility checks
  - Validation across schema versions

---

## Exam Takeaways
- Data modeling: facts + dimensions + keys.
- Data lineage: trace transformations and data flow.
- Schema evolution: safe schema changes over time.
- Know **concepts**, not implementation details.

# Data Engineering Fundamentals – Database Performance Optimization

## Goal
- Improve **query performance**, **resource usage**, and **scalability**.

---

## Indexing
**Purpose**
- Avoid **full table scans**.
- Enable fast data lookup.

**Key Points**
- Indexes should match **query access patterns**.
- Poor indexing = scanning every row → slow queries.
- Can enforce **uniqueness and data integrity**.
- Index conflicts may reveal hidden data quality issues.

---

## Partitioning
**Purpose**
- Reduce the amount of data scanned.
- Improve performance on large datasets.

**Common Strategies**
- Partition by **time** (day, month, year).
- Partition by frequently queried fields.

**Benefits**
- Faster queries (scan only relevant partitions).
- Easier **data lifecycle management**:
  - Archive old partitions.
  - Delete expired data.
- Enables **parallel processing** across partitions.

---

## Compression
**Purpose**
- Reduce storage size.
- Minimize disk I/O and data transfer time.

**Why It Matters**
- Many databases are **I/O bound**.
- Compression can significantly improve performance.

**Common Compression Formats**
- GZIP
- LZOP
- BZIP2
- Zstandard

**Trade-offs**
- Higher compression → more CPU usage.
- Avoid shifting bottleneck from I/O to CPU.

---

## Columnar Compression
**Context**
- Especially effective with **columnar formats** (e.g., Parquet).

**Advantages**
- Columns contain uniform data types.
- Better compression ratios.
- Faster analytical queries.

---

## Exam Takeaways
- **Indexing** → fast lookups, avoid full scans.
- **Partitioning** → limit scanned data, enable parallelism.
- **Compression** → reduce I/O and storage costs.
- These are the **primary database optimization techniques**.


# Data Engineering Fundamentals – Data Sampling

## Purpose of Sampling
- Create a **smaller, representative dataset** from a large one.
- Reduce **cost, processing time**, and complexity.
- Enable experimentation and analysis without full-scale data.

---

## Random Sampling
**Definition**
- Each record has an **equal chance** of being selected.

**When to Use**
- Data is fairly uniform.
- No important subgroups need guaranteed representation.

**Pros / Cons**
- Simple to implement.
- Risk of **missing important categories** in heterogeneous datasets.

---

## Stratified Sampling
**Definition**
- Population divided into **homogeneous subgroups (strata)**.
- Random samples taken **within each stratum**.

**When to Use**
- Dataset contains important categories.
- Need guaranteed representation of each subgroup.

**Example**
- Sampling purchases by category:
  - Books
  - Music
  - Home & Garden
  - Apparel
- Sample equal counts from each category, regardless of actual proportions.

**Key Benefit**
- Ensures **coverage of all important categories**.

---

## Systematic Sampling
**Definition**
- Select data using a **fixed interval rule**.
- Example: every 3rd record.

**Characteristics**
- Deterministic pattern.
- Simpler than stratified sampling.

**Risk**
- Can introduce bias if data has hidden ordering patterns.

---

## Other Sampling Types (Low Exam Focus)
- Cluster sampling
- Convenience sampling
- Judgmental sampling

---

## Exam Takeaways
- **Random** → equal probability, simple, risk of imbalance.
- **Stratified** → subgroup-aware, balanced representation.
- **Systematic** → rule-based intervals.
- Understand **when and why** to use each method.


# Data Engineering Fundamentals – Data Skew

## What is Data Skew?
- **Uneven distribution of data or workload** across partitions or nodes.
- Common in **distributed systems**.
- Breaks assumptions made during partitioning.
- Leads to **performance bottlenecks** and poor parallelism.

---

## Why It Happens
- **Non-uniform data access patterns**
- **Poor partitioning strategy**
- **Temporal skew** (newer data much larger than older data)
- Traffic distribution does not match data distribution

---

## Celebrity Problem (Classic Example)
- One key receives disproportionate traffic.
- Example:
  - IMDb partitioned by `actor_id`
  - Popular actor (e.g. Brad Pitt) overloads one partition
- Result:
  - One hot partition
  - Others underutilized

---

## Common Causes
- Hashing on keys with **uneven popularity**
- Time-based partitions with rapid data growth
- Static partitioning assumptions that no longer hold

---

## Detection & Monitoring
- Monitor **partition sizes** and **access patterns**
- Use alerts when imbalance grows
- Early detection prevents cascading performance issues

---

## Mitigation Strategies (Conceptual)
> Not required to memorize in detail for the exam

- **Adaptive partitioning**
  - Dynamically adjust partitions based on usage.
- **Salting**
  - Add randomness to partition keys to spread load.
- **Repartitioning**
  - Redistribute data (expensive, disruptive).
- **Sampling**
  - Analyze distribution before processing.
- **Custom partitioning**
  - Domain-aware rules (e.g., special handling for hot keys).

---

## Exam Takeaways
- Data skew = **uneven access or distribution**.
- Breaks parallelism and performance.
- Often caused by **bad assumptions during partitioning**.
- Focus on understanding the **problem**, not implementation details.


# Data Engineering Fundamentals – Data Validation & Data Profiling

## Purpose
- Ensure **data quality, reliability, and trustworthiness**.
- Explicitly mentioned in the exam guide.

---

## Data Completeness
**Definition**
- Check whether **all expected data is present**.

**Key Checks**
- Null counts per column.
- Percentage of missing values.
- Missing critical fields.

**Why It Matters**
- Missing data can skew analysis.
- Example: missing salaries (zeros/nulls) distort averages.

**Common Strategies**
- Drop rows with missing values.
- Impute placeholder or estimated values.
- Flag or reject incomplete records.

---

## Data Consistency
**Definition**
- Ensure data is represented **uniformly across sources**.

**Common Issues**
- Different value ranges (e.g. 1–5 vs 1–10 ratings).
- Mismatched units or formats.

**Validation Technique**
- Cross-field and cross-source comparisons.

**Risk**
- Inconsistent data leads to misleading joins and incorrect conclusions.

---

## Data Accuracy
**Definition**
- Data correctly represents **real-world values**.

**Challenges**
- Often no single source of ground truth.
- Requires sanity checks and distribution analysis.

**Why It Matters**
- Inaccurate data → incorrect insights and decisions.

---

## Data Integrity
**Definition**
- Maintain **valid relationships** between data elements over time.

**Common Checks**
- Foreign key constraints.
- Referential consistency between tables.

**Risk**
- Broken relationships reduce trust and usability of data.

---

## Exam Takeaways
- Key dimensions:
  - **Completeness**
  - **Consistency**
  - **Accuracy**
  - **Integrity**
- Data validation and profiling are essential for **reliable analytics**.
- Missing or inconsistent data can silently break analyses.


# Data Engineering Fundamentals – SQL Review (Exam-Focused)

## Scope
- Assumes **basic SQL knowledge**.
- Exam tests **core concepts**, not advanced syntax.
- Focus: aggregation, filtering, grouping, ordering, pivoting.

---

## Aggregation Functions
- **COUNT(*)** – number of rows.
- **SUM(column)** – total value.
- **AVG(column)** – average value.
- **MAX(column)** / **MIN(column)** – highest / lowest value.
- `AS` used to **alias result columns**.

**Use Case**
- Basic analytical summaries on tables.

---

## Filtering Aggregations
### WHERE Clause
- Applies **before aggregation**.
- Used for simple, single-condition filters.

**Example Logic**
- Count only rows where salary > 70,000.

---

## CASE Statements (Conditional Aggregation)
**Purpose**
- Apply **multiple conditions** within a single aggregation.

**Why Use It**
- WHERE can only filter one condition at a time.
- CASE enables multiple filtered counts in one query.

**Typical Pattern**
- Count high / medium / low salary groups in one query.
- CASE returns a value (e.g., `1`) only when condition matches.

**Key Benefit**
- Multiple metrics from a single table scan.

---

## GROUP BY
**Purpose**
- Aggregate data **by category**.

**Behavior**
- Creates one result row per unique group.
- Every non-aggregated SELECT column must appear in GROUP BY.

**Example Use**
- Count employees per department.
- Apply filters before grouping.

---

## Nested GROUP BY
**Definition**
- Grouping by **multiple columns**.

**Use Case**
- Analyze metrics across multiple dimensions.
- Example:
  - Total sales per product per year.

---

## ORDER BY
**Purpose**
- Sort query results.
- Can sort by:
  - One or more columns.
  - Ascending or descending order.

**Common Pattern**
- ORDER BY year, metric DESC.

---

## Pivoting
**Concept**
- Convert **row-based data into columns**.
- Change table orientation.

**Key Point**
- Syntax varies by database.
- Exam focuses on **concept**, not syntax.

### Pivot Approaches
1. **PIVOT operation**
   - Database-specific support.
2. **Conditional aggregation**
   - Use CASE + SUM.
   - More portable across databases.

**Example Use Case**
- Sales per salesperson by month.
- Months become columns (Jan_sales, Feb_sales).

---

## Exam Takeaways
- Know aggregation functions and GROUP BY.
- Understand CASE for conditional aggregation.
- Nested grouping enables multi-dimensional analysis.
- Pivoting = turning rows into columns.
- Focus on **what**, not exact SQL syntax.

# Data Engineering Fundamentals – SQL Joins

## Why Joins Matter
- SQL exams frequently test **join behavior**.
- Core skill for combining data across tables.
- Focus on **result sets**, not syntax memorization.

---

## INNER JOIN (Default)
**Behavior**
- Returns rows where **matching keys exist in both tables**.
- Intersection of Table A and Table B.

**Use Case**
- Retrieve related data that must exist in both tables.

**Key Point**
- `JOIN` without a keyword = `INNER JOIN`.

---

## LEFT OUTER JOIN
**Behavior**
- Returns **all rows from the left table**.
- Matching rows from the right table.
- Non-matching rows → **NULLs** on right-side columns.

**Use Case**
- Keep all primary records, even if related data is missing.

---

## RIGHT OUTER JOIN
**Behavior**
- Returns **all rows from the right table**.
- Matching rows from the left table.
- Non-matching rows → **NULLs** on left-side columns.

**Use Case**
- Same as LEFT JOIN but reversed perspective.

---

## FULL OUTER JOIN
**Behavior**
- Returns **all rows from both tables**.
- Matching rows joined.
- Non-matching rows → NULLs on missing side.

**Use Case**
- **Debugging / data quality checks**
- Identify missing or mismatched keys.

---

## CROSS JOIN
**Behavior**
- Returns **every possible combination** of rows.
- Cartesian product: `rows(A) × rows(B)`.

**Use Case**
- Rare.
- Mostly theoretical or specialized analytical scenarios.

**Risk**
- Explodes in size very quickly.

---

## Exam Takeaways
- INNER → only matching rows.
- LEFT → everything from left, NULLs if no match.
- RIGHT → everything from right, NULLs if no match.
- FULL → everything from both.
- CROSS → all combinations.
- Understand **result behavior**, not syntax details.


# Data Engineering Fundamentals – Regular Expressions in SQL

## What Are Regular Expressions?
- **Pattern-matching language** for searching within strings.
- Used to find substrings or parse text (e.g., log files).
- More powerful than the `LIKE` operator.
- Often used for **fuzzy or complex matching**.

---

## Regex Operators in SQL
- `~` → Case-sensitive regex match.
- `~*` → Case-insensitive regex match.
- `!~` → Case-sensitive NOT match.
- `!~*` → Case-insensitive NOT match.

---

## Basic Regex Syntax (Exam-Relevant)

### Anchors
- `^` → Match **start** of string.
- `$` → Match **end** of string.

**Examples**
- `^boo` → matches `boo`, `book`
- `boo$` → matches `boo` only

---

### OR Operator
- `|` → Logical OR.

**Example**
- `sit|sat` → matches `sit` or `sat`

---

### Character Ranges
- `[a-z]` → any lowercase letter.
- `[A-Z]` → any uppercase letter.
- `[0-9]` → any digit.
- Can be combined: `[a-zA-Z0-9]`.

---

### Quantifiers
- `{n}` → match exactly `n` occurrences.

**Example**
- `[a-z]{4}` → any 4-letter lowercase word.

---

### Common Meta Characters
- `\d` → any digit (0–9).
- `\w` → letter, digit, or underscore.
- `\s` → whitespace.
- `\t` → tab.

---

## SQL Regex Example

**Goal**
- Match names that start with `fire` or `ice`, case-insensitive.

**Conceptual Query**
- WHERE column matches regex:
  - Start of string (`^`)
  - Either `fire` or `ice`

**Regex Pattern**
- `^(fire|ice)`

---

## Exam Takeaways
- Regex = advanced string pattern matching.
- `~` vs `~*` → case-sensitive vs insensitive.
- Anchors (`^`, `$`) define position.
- `|` enables OR logic.
- Focus on **concepts**, not deep regex mastery.

# Data Engineering Fundamentals – Git (Exam Review)

## What is Git?
- **Distributed version control system**.
- Enables multiple developers to work in parallel.
- Manages code history, collaboration, and change tracking.

---

## Git Architecture
- **Remote repository**: Central repo (e.g., GitHub).
- **Local repository**: Developer’s local copy.
- **Working directory** → **Staging area** → **Commits**.
- **Branches** allow isolated development (features, bug fixes).

---

## Core Workflow
1. Clone or pull from remote.
2. Make changes locally.
3. Stage changes.
4. Commit changes.
5. Push to remote.
6. Merge branches as needed.

---

## Repository Setup
- `git init` – Initialize a new repository.
- `git config` – Configure user name, email, settings.

---

## Common Git Commands

### Working with Repositories
- `git clone <url>` – Clone remote repository.
- `git status` – Show working directory status.
- `git log` – View commit history.
- `git diff` – Show changes between commits or files.

---

### Staging & Committing
- `git add <file>` – Add file to staging area.
- `git add *` – Stage all changes.
- `git commit -m "message"` – Commit staged changes.

---

### Branching
- `git branch` – List branches.
- `git branch <name>` – Create new branch.
- `git checkout <branch>` – Switch branch.
- `git checkout -b <branch>` – Create + switch branch.
- `git merge <branch>` – Merge branch into current branch.
- `git branch -d <branch>` – Delete branch.

---

### Remote Repositories
- `git remote add <name> <url>` – Add remote repo.
- `git remote` – List remotes.
- `git push` – Push local commits to remote.
- `git pull` – Fetch + merge remote changes.
- `git fetch` – Fetch changes without merging.

---

## Undo & Recovery
- `git reset` – Reset staging area to last commit.
- `git reset --hard` – Reset staging + working directory.
- `git revert <commit>` – Undo changes from a commit.
- `git reflog` – Track reference updates (recover lost commits).

---

## Advanced Commands
- `git stash` – Temporarily save uncommitted changes.
- `git stash pop` – Restore stashed changes.
- `git rebase` – Reapply commits on another branch.
- `git cherry-pick <commit>` – Apply specific commit.
- `git blame <file>` – Show line-by-line commit history.

---

## Maintenance
- `git fsck` – Check repository integrity.
- `git gc` – Cleanup and optimize repository.

---

## Exam Takeaways
- Understand **local vs remote repos**.
- Know **branching, merging, pulling, pushing**.
- Recognize basic commands and their purpose.
- Git knowledge is **conceptual**, not command-line mastery.
