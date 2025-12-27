# DBT (Data Build Tool) Course - Complete Table of Contents

## **1. DATA ARCHITECTURE FOUNDATIONS**
- **1.1** [Data Hierarchy of Needs](#data-hierarchy-of-needs--applied-to-analytics-engineering--dbt) – Maslow-style pyramid for data maturity
- **1.2** [ETL vs ELT](#etl-and-the-base-of-the-data-pyramid) - Evolution of data processing paradigms
- **1.3** [Data Warehouses](#data-warehouses--overview--evolution) - Overview and evolution from legacy to cloud
- **1.4** [Data Lakes and Lakehouse](#data-lakes-handling-unstructured-and-semi-structured-data) - Handling unstructured data
- **1.5** [Modern Data Stack](#evolution-toward-the-modern-data-stack-and-the-rise-of-dbt) - Horizontal integration and cloud-native architecture

## **2. SLOWLY CHANGING DIMENSIONS (SCD)**
- **2.1** [Introduction to SCD](#slowly-changing-dimensions-scd) - Types of dimensional data changes
- **2.2** [SCD Type 0](#scd-type-0--fixed-dimensions) - Fixed dimensions (no changes allowed)
- **2.3** [SCD Type 1](#scd-type-1--overwrite-changes) - Overwrite changes (no historical tracking)
- **2.4** [SCD Type 2](#scd-type-2--historical-tracking) - Historical tracking (create new row per change)
- **2.5** [SCD Type 3](#scd-type-3--partial-history-with-columns) - Partial history with columns (limited previous values)

## **3. INTRODUCTION TO DBT**
- **3.1** [What is DBT](#introduction-to-dbt--the-t-in-elt) - The "T" in ELT transformation
- **3.2** [DBT metaphor](#dbt-metaphor-from-candle-to-spotlight) - From candle to spotlight
- **3.3** [Why use DBT](#why-use-dbt) - Software engineering best practices for analytics
- **3.4** [Jinja in DBT](#jinja-in-dbt--summary-notes) - Template engine for dynamic SQL
- **3.5** [YAML in DBT](#yaml-in-dbt--summary-notes) - Configuration and metadata management
- **3.6** [DAGs in DBT](#dags-in-dbt--summary-notes) - Directed Acyclic Graphs for data lineage

## **4. ENVIRONMENT SETUP**
- **4.1** [Databricks Workspace setup](#setting-up-databricks-workspace-for-dbt-project) for DBT projects
- **4.2** [Loading retail dataset](#loading-retail-dataset-into-databricks-lakehouse) into Databricks Lakehouse
- **4.3** [DBT Cloud introduction](#introduction-to-dbt-cloud) - Pricing plans and features
- **4.4** [DBT Cloud project setup](#dbt-cloud-project-setup-with-databricks) with Databricks connection
- **4.5** [DBT Cloud IDE overview](#dbt-cloud-ide-overview-and-project-structure) and project structure

## **5. VERSION CONTROL & COLLABORATION**
- **5.1** [Git version control](#git-version-control-in-dbt-cloud-ide) in DBT Cloud IDE
- **5.2** [Branch management](#creating-a-feature-branch) and commit workflows
- **5.3** [Change tracking](#tracking-changes) and reverting modifications

## **6. MEDALLION ARCHITECTURE**
- **6.1** [Modeling in DBT](#modeling-in-dbt-with-the-medallion-architecture) with Medallion Architecture
- **6.2** [Bronze Layer](#the-three-layers) - Raw data ingestion and storage
- **6.3** [Silver Layer](#the-three-layers) - Cleaned and transformed data
- **6.4** [Gold Layer](#the-three-layers) - Aggregated and business-ready data
- **6.5** [Data flow](#data-flow-example) between layers and dependency management

## **7. BUILDING DBT MODELS**
- **7.1** [First DBT model](#building-the-first-dbt-model-bronze-orders) - Bronze Orders creation
- **7.2** [Target folder](#understanding-the-target-folder-and-the-dbt-clean-command) and DBT clean command
- **7.3** [Configuring sources](#configuring-sources-and-building-bronze-models-in-dbt) and building Bronze models
- **7.4** [Data freshness checking](#checking-data-freshness-in-dbt) in DBT
- **7.5** [Building Silver layer](#building-the-silver-layer-in-dbt-medallion-architecture) models with transformations
- **7.6** [Building Gold layer](#creating-the-gold-layer-in-dbt-medallion-architecture) models with aggregations

## **8. PROJECT STRUCTURE & CONVENTIONS**
- **8.1** [Structuring and naming conventions](#structuring-and-naming-conventions-in-a-dbt-project) in DBT projects
- **8.2** [Properties and configurations](#introduction-to-properties-and-configurations-in-dbt) in DBT
- **8.3** [Custom schema configuration](#custom-schema-configuration-in-dbt-bronze-silver-gold) (Bronze, Silver, Gold)
- **8.4** [Node selection syntax](#node-selection-syntax-in-dbt) in DBT

## **9. TESTING IN DBT**
- **9.1** [Introduction to testing](#introduction-to-testing-in-dbt) - Data quality assurance
- **9.2** [Generic tests](#generic-data-tests-in-dbt--not_null-and-unique) - not_null, unique, accepted_values, relationships
- **9.3** [Singular tests](#singular-custom-tests-in-dbt--using-sql-files-in-the-tests-directory) - Custom SQL-based validation
- **9.4** [DBT testing keyword update](#update-on-dbt-testing-keyword-tests-vs-data_tests) - tests vs data_tests
- **9.5** [The dbt build command](#the-dbt-build-command--combining-model-execution-and-testing) - Combining model execution and testing

## **10. DBT PACKAGES & MACROS**
- **10.1** [Introduction to DBT packages](#dbt-packages) - Reusable functionality
- **10.2** [Installing packages](#installing-a-package) (dbt_utils) from DBT Hub
- **10.3** [Using package macros](#using-package-macros-in-models) in models
- **10.4** [Working with dbt_utils](#example--using-the-date_spine-macro) package examples

## **11. DATA EXPLORATION & ANALYSIS**
- **11.1** [DBT Seeds](#dbt-seeds--loading-static-data-as-tables) - Loading static data as tables
- **11.2** [Analyses in DBT](#analyses-in-dbt--reusable-sql-queries-for-data-exploration) - Reusable SQL queries for exploration
- **11.3** [Introduction to Jinja](#introduction-to-jinja-in-dbt) templating in DBT
- **11.4** [Working with variables](#working-with-variables-and-whitespace-control-in-jinja) and whitespace control in Jinja
- **11.5** [Conditional statements](#conditional-statements-in-jinja) in Jinja
- **11.6** [Using for loops](#using-for-loops-in-jinja) in Jinja
- **11.7** [Built-in DBT Jinja functions](#built-in-dbt-jinja-functions-and-modules) and modules

## **12. ADVANCED TOPICS**
- **12.1** DBT Cloud advanced features and deployment
- **12.2** Performance optimization and best practices
- **12.3** Documentation and lineage visualization
- **12.4** Production deployment strategies

---

**📝 Course Overview:** This comprehensive DBT course covers everything from basic data architecture concepts to advanced Jinja templating and package management. The curriculum follows a practical approach using a retail dataset in Databricks environment, implementing the Medallion Architecture pattern throughout the learning journey.

**🔗 Quick Navigation:** Click on any topic above to jump directly to that section in the course material.

---

# Data Hierarchy of Needs – Applied to Analytics Engineering & DBT

## Overview

This concept maps the evolution of data maturity in organizations using a **Maslow-style pyramid**, where each layer depends on the foundation below it.

https://github.com/malvik01/DBT-On-Databricks-Course/wiki

---

## Pyramid Structure (Relevant to This Course)

### 1. **Data Collection**
- Capturing relevant raw data from various sources.
- Without this, nothing else can function.

### 2. **Data Cleaning & Integration**
- Transforming and mapping raw data into useful structures.
- Building reliable and maintainable pipelines.
- Core focus area for **analytics engineering** and **DBT**.

### 3. **Data Storage**
- Loading clean data into a **data warehouse** or **data lake**.
- Prepares the ground for analytics, dashboards, and KPIs.

> These three stages form the **core data pipeline**. They are essential for any data-driven organization.

---

## Not Covered in This Course (Top Layers)

- **Business Intelligence (BI)**: dashboards, reports, and KPIs.
- **Machine Learning / AI**: predictive models and automation.

# ETL and the Base of the Data Pyramid

## 1. **Data Collection (Extract)**
- Refers to **extracting data from source systems**.
- Source types vary by domain:
  - Manufacturing → Sensor data
  - Marketing → Google Analytics, clickstream logs
  - Finance → Stock market feeds
  - Healthcare → Radiology images
  - General → APIs, databases, business systems

### Data Characteristics: The 3 Vs
- **Variety** – Different formats (text, images, video, etc.)
- **Velocity** – Speed of arrival (real-time vs. batch)
- **Volume** – Scale of data (gigabytes to petabytes)

> Designing scalable architecture requires considering all three Vs.

---

## 2. **Data Staging & Cleaning (Transform)**
- After extraction, data is stored in a **staging area**.
- **Raw data is typically messy**, common issues include:
  - Duplicates (e.g., same user recorded multiple times)
  - Inconsistent values (e.g., ZIP code doesn’t match city)
  - Missing fields (e.g., empty last name)
  - Typos or format errors (e.g., "20" instead of "12" for December)

> Goal: Convert raw operational data into a clean, usable form.

---

## 3. **Data Integration (Load)**
- Cleaned data is **loaded into a target system** (data lake/warehouse).
- Two common strategies:
  - **Full refresh** – Rewrite entire dataset
  - **Incremental update** – Only load new or changed data

---

# Evolution from ETL to ELT

## 1. **Why ETL Was Adopted Historically**

### Historical Context
- In **1967**, 1 MB of storage cost **$1 million**.
- **Storage and compute were scarce** and extremely expensive.
- **On-premises** infrastructure had:
  - **Single-node limitations**
  - **High licensing costs**
  - **Low scalability**

### Result: Traditional ETL
- ETL = **Extract → Transform → Load**
- Transformations were done **before loading** to reduce storage needs.
- **Staging area** was used for pre-processing outside the DB.

---

## 2. **Problems with Traditional ETL**

- **Schema changes** can easily break ETL pipelines.
- **Velocity**: Changing data frequency is hard to adapt to.
- **Scalability**: Scaling ETL requires complex infrastructure.
- **Data source changes** require manual integration.
- **Testing and debugging** ETL flows is difficult and time-consuming.

---

## 3. **Shift to ELT – Enabled by Modern Tech**

### Modern Environment
- Storage is cheap (≈ $0.02 per GB).
- Compute is scalable and affordable.
- Cloud data warehouses like:
  - **Snowflake**
  - **Amazon Redshift**
  - **Google BigQuery**

> These systems support **high concurrency**, **massive scale**, and **in-database compute**.

### ELT = **Extract → Load → Transform**
- Raw data is **loaded directly** into the data warehouse.
- **Transformations happen inside the destination**, not in a separate layer.
- Benefits:
  - Simplified architecture
  - Easier scalability
  - Better alignment with modern cloud-native tools

---

## 4. **Modern ELT Tooling**

### Extract + Load Tools:
- **Fivetran**
- **Stitch**
- Others (Airbyte, Matillion, etc.)

> These tools offer **plug-and-play connectors** to load raw data into your warehouse effortlessly.

### Next Focus: **Transformations (the 'T')**
- Since EL is largely automated, the core value now lies in **how we transform data** post-load.
- Enter **DBT (Data Build Tool)** and **analytics engineering** practices.

---

## Summary

| ETL (Old Way) | ELT (Modern Way) |
|---------------|------------------|
| Transform outside the DB | Transform inside the DB |
| Needed to reduce storage | Storage is now cheap |
| Complex and brittle | Scalable and maintainable |
| Hard to debug and test | Easier with version-controlled SQL |

> ELT has become the new standard due to advances in **cloud computing**, **cheap storage**, and **modern tooling**.

# Data Warehouses – Overview & Evolution

## 1. What Is a Data Warehouse?

- Also known as **DW** or **DWH**.
- Purpose: Serve as a **central technology** for **data analytics** and **reporting**.
- Essentially a **high-performance analytical database** optimized for:
  - **SQL queries**
  - **Dimensions**, **facts**
  - **Denormalized structures**
  - **Columnar storage formats**

> Not suitable for **unstructured data** like images or videos.

---

## 2. Key Characteristics

- Primary interaction is via **SQL**.
- Designed for **analytical workloads**, not for transactional systems.
- Important to **keep data structured and clean**, especially for **BI and dashboards**.
  - Prevents wasting time on simple business questions.

---

## 3. Evolution of Data Warehouses

### Legacy (On-Premise)
- Examples: **IBM**, **Oracle**, etc.
- Full **control** over hardware and software.
- Ideal for **strict compliance** and **data governance** needs.

#### Pros:
- Full customization (storage size, compute power, memory).
- Security compliance is easier to enforce.

#### Cons:
- **High cost of ownership** (hardware, electricity, staff).
- **Maintenance-heavy** (need for sysadmins, network engineers).
- **Scaling is difficult** (buying new hardware, procurement processes).
- **Licensing and setup** are complex and time-consuming.

---

### Modern (Cloud-Based)
- Examples: **Amazon Redshift**, **Snowflake**, **Google BigQuery**.

#### Pros:
- **Fully managed** by cloud provider.
- **Transparent pricing**, pay-as-you-go model.
- **Elastic scalability** (compute can be added/removed on demand).
- No hardware maintenance or infrastructure management needed.

#### Architecture:
- Cloud warehouse typically uses **leader node** + **compute nodes** setup.

---

## 4. Summary Comparison

| Feature              | On-Premise DW           | Cloud-Based DW              |
|----------------------|--------------------------|------------------------------|
| Control              | Full                     | Limited                      |
| Maintenance          | Manual                   | Provider-managed             |
| Scalability          | Hard (physical upgrades) | Easy (auto or manual scale)  |
| Cost Structure       | Upfront + Ongoing        | Usage-based (predictable)    |
| Compliance           | Easier for strict needs  | Depends on provider's setup  |
| Setup Time           | Long                     | Rapid deployment             |

> Cloud-based data warehouses are now the **standard choice** due to flexibility, scalability, and ease of use.

# Limitations of Traditional Data Warehouses & Introduction to External Tables

## 1. Trade-Offs in DW Design

Whether using **on-premise** or **cloud-based** data warehouses, both have limitations:

### A. Compute Costs
- You **pay for compute nodes** regardless of usage.
- Costly with **large datasets** or **high analytical workloads**.
- **Underutilized storage** can still result in high costs due to compute demand.

### B. Scalability Challenges
- Autoscaling is **not always sufficient** to meet **peak demand**.
- Scaling may not be fast or granular enough for real-time heavy workloads.

---

## 2. Solution: Decoupling Storage and Compute

### External Tables
- **Store data externally**, e.g., in:
  - Amazon S3
  - Azure Blob Storage
  - Google Cloud Storage
- Data is **not stored inside the DW**, but can be **queried as if it were**.

### Key Benefits:
- **Independent scaling** of storage and compute.
- Avoids overpaying for unused DW resources.
- Cloud provider manages the **serverless infrastructure**.

> No noticeable difference in querying performance with proper setup.

---

## 3. Structured vs Unstructured Data

- External tables handle **structured** data (e.g., CSV, Parquet, Avro).

# Data Lakes: Handling Unstructured and Semi-Structured Data

## 1. When Not to Use a Data Warehouse

- Data warehouses are ideal for **structured data**.
- For **unstructured** or **semi-structured** data, use a **data lake** instead.

---

## 2. What is a Data Lake?

- A **repository** for storing all types of data:
  - Raw
  - Cleansed
  - Structured
  - Semi-structured
  - Unstructured (e.g. images, logs, videos)

- Think of it as a **highly scalable file system**.

---

## 3. Examples of Data Lake Storage

- **On-premise**: HDFS (Hadoop Distributed File System)
- **Cloud-based**:
  - Amazon S3
  - Azure Data Lake Storage Gen2 (ADLS Gen2)
  - Google Cloud Storage

---

## 4. Key Properties

- **Storage-only**: No compute is included by default.
- Enables **independent scaling** of:
  - Storage (data lake)
  - Compute (analytical clusters)

- **External tables** are often used to query data stored in lakes.
- Cloud providers **manage infrastructure** behind the scenes.

---

## 5. Integration with Analytics Tools

- Platforms like **Databricks** and **Snowflake**:
  - Use data lakes as default storage layer.
  - Allow users to provision **compute clusters** as needed for analytics.
  - You scale compute **up/down** based on workload size.

> Data lake = cost-efficient, scalable foundation for big data and modern analytics.

# The Lakehouse Concept

## 1. Why Lakehouse?

- Emerged due to **limitations of data lakes**:
  - Lack of structure
  - No ACID transactions
  - Poor support for BI tools

---

## 2. What is a Lakehouse?

- Combines **data lake** + **data warehouse** capabilities:
  - Cost-efficient **cloud storage** (from the data lake)
  - **Structured data management** (from the data warehouse)

---

## 3. Key Features

- **ACID transactional support**:
  - Ensures data consistency
  - Enables reliable data operations

- **Schema stored in a Metastore**:
  - Enables **schema enforcement** and **schema evolution**
  - No need to copy datasets for schema changes

- **Governance and Security**:
  - Fine-grained **access control**
  - Centralized **data authorization**

- **BI Compatibility**:
  - Seamless integration with **BI tools**
  - Supports SQL queries and reporting

---

## 4. Summary

> Lakehouse = Structured, governed, scalable, and cost-efficient

# Evolution Toward the Modern Data Stack and the Rise of DBT

## 1. Background

- In the **1970s**, data engineers began using **ETL (Extract, Transform, Load)** pipelines.  
- Transformations were done **before loading** to reduce storage use since **storage was expensive**.  
- Over time, **storage and compute costs decreased**, and **network speeds increased**, enabling a shift in architecture.

---

## 2. From SMP to MPP Architectures

### A. SMP (Symmetric Multiprocessing)
- **Single machine** with shared memory and storage.  
- **Tight coupling** between compute and storage.  
- **Vertical scaling only** (adding more CPUs or disks).  
- Fast for local processing but **limited scalability** and **high maintenance**.

### B. MPP (Massively Parallel Processing)
- **Master node + multiple compute nodes**, each with its own memory and storage.  
- **No shared memory** between nodes ("shared-nothing" architecture).  
- Enables **horizontal scaling** by adding more nodes.  
- Used by modern cloud warehouses like:
  - **Snowflake**
  - **BigQuery**
  - **Redshift**
  - **Azure Synapse**

> Transition from SMP → MPP was a key step toward today’s scalable cloud architectures.

# Evolution Toward the Modern Data Stack and the Rise of DBT

## 1. Background

- In the **1970s**, data engineers began using **ETL (Extract, Transform, Load)** pipelines.  
- Transformations were done **before loading** to reduce storage use since **storage was expensive**.  
- Over time, **storage and compute costs decreased**, and **network speeds increased**, enabling a shift in architecture.

---

## 2. From SMP to MPP Architectures

### A. SMP (Symmetric Multiprocessing)
- **Single machine** with shared memory and storage.  
- **Tight coupling** between compute and storage.  
- **Vertical scaling only** (adding more CPUs or disks).  
- Fast for local processing but **limited scalability** and **high maintenance**.

### B. MPP (Massively Parallel Processing)
- **Master node + multiple compute nodes**, each with its own memory and storage.  
- **No shared memory** between nodes ("shared-nothing" architecture).  
- Enables **horizontal scaling** by adding more nodes.  
- Used by modern cloud warehouses like:
  - **Snowflake**
  - **BigQuery**
  - **Redshift**
  - **Azure Synapse**

> Transition from SMP → MPP was a key step toward today’s scalable cloud architectures.

---

## 3. Decoupling Storage and Compute

- In MPP systems, **storage and compute** became **independent**.  
- **Compute** activates only when needed (on query/request).  
- **Storage** remains persistent in low-cost systems like:
  - **Amazon S3**
  - **Azure Blob Storage**
- Enables **dynamic scaling**:
  - Add compute power for heavy workloads.
  - Shut down compute when idle to save costs.

---

## 4. Column-Oriented Databases

### Row-Oriented (OLTP)
- Stores data **by row** — optimized for **transactional operations** (e.g., PostgreSQL, MySQL).  
- Great for fast writes, but **inefficient for analytics**.

### Column-Oriented (OLAP)
- Stores data **by column** — optimized for **aggregations and analytics**.  
- Requires fewer I/O operations, leading to **faster queries**.
- Became the standard for **cloud MPP warehouses**.

> All major modern warehouses are **columnar and MPP-based**.

---

## 5. Shift from ETL to ELT

- With cheaper cloud storage and compute, transformations moved **inside the data warehouse**.  
- ELT = **Extract → Load → Transform**  
- Tools like **Fivetran** and **Stitch** handle extraction and loading.
- **DBT** emerged to handle the **T (Transform)** step directly in SQL on the warehouse.

---

## 6. Traditional vs. Modern Data Stack

### Legacy Stack (Vertically Integrated)
- BI tools handled **storage, transformation, and visualization** together.  
- Examples: Complex, monolithic systems with poor scalability.

### Modern Data Stack (Horizontally Integrated)
- Layers are **decoupled and specialized**:
  - **EL:** Fivetran, Stitch  
  - **T:** DBT  
  - **Analytics:** Looker, Tableau  
  - **Reverse ETL:** Census
- **Cloud-native, fully managed**, and cost-efficient.

---

## 7. The Role of DevOps and DBT

- Data is now treated as a **product**.
- **DevOps principles** (version control, CI/CD, testing) are applied to **data workflows**.
- **DBT (Data Build Tool)**:
  - Productionizes the **Transform** step.
  - Brings **software engineering practices** into **analytics engineering**.

---

## 8. Summary

- Declining costs and faster networks enabled the move from **SMP → MPP → Cloud-native architectures**.
- **Columnar storage** and **decoupled compute** revolutionized scalability.
- **Modern data stack** = modular, scalable, cloud-based ecosystem.
- **DBT** became the standard for transformation in the **ELT paradigm**.

# Slowly Changing Dimensions (SCD)

## What Are SCDs?

- **Slowly Changing Dimensions (SCDs)** refer to data that **changes infrequently and unpredictably**.
- These changes impact **referential integrity** in a data warehouse.
- The main challenge: **how to reflect source system changes** in the warehouse **without losing necessary history**.

---

## Business Relevance

- In some cases, **historic data can be discarded** because it becomes obsolete or irrelevant.
- In other cases, especially for **historical analysis**, preserving past data is **crucial**.
  - Example: Tracking how a customer’s location or subscription level changed over time.

> Whether or not to keep history depends on **business requirements**.

---

## SCD Types Overview

- There are **multiple strategies**, called **SCD Types**, to handle changes in dimensional data.
- Each type offers different trade-offs in terms of:
  - Storage
  - Query complexity
  - Data accuracy over time

---

## Common SCD Types

| Type | Description                                  | Keeps History? | Notes                                  |
|------|----------------------------------------------|----------------|----------------------------------------|
| 0    | **Fixed** – No changes allowed               | ❌             | Value remains constant once inserted   |
| 1    | **Overwrite** – Update with new value        | ❌             | No historical tracking                 |
| 2    | **Historical** – Create new row per change   | ✅             | Most common for history tracking       |
| 3    | **Limited History** – Add new column         | ⚠️ Partial     | Only tracks previous value, not full   |

---

# SCD Type 0 – Fixed Dimensions

## Definition

- **SCD Type 0**: No changes are applied to the data warehouse table when the source data changes.
- The **original data is preserved** permanently.
- Also referred to as **“fixed” dimensions**.

---

## When to Use

- Use when **historical changes are irrelevant** or **not valuable** to the business.
- Applicable when **a dimension attribute becomes obsolete**.

---

## Real-World Example: Airbnb

- **Scenario**: A property owner updates their **fax number** in the source system.
- **Back in 2008**, Airbnb collected fax numbers from hosts.
- **By 2010**, faxing became irrelevant.
- **Decision**: Airbnb no longer updates the `fax_number` field in the data warehouse.
- Source data changes  
- Data warehouse remains unchanged

---

## Summary

- SCD Type 0 **preserves original values** even if the source changes.
- Ideal for attributes that **lose business relevance over time**.
- **No storage or tracking overhead**, but offers **no history or updates**.

# SCD Type 1 – Overwrite Changes

## Definition

- **SCD Type 1** updates the existing record in the data warehouse **with the new value**, **overwriting the old one**.
- **No history is preserved**.
- Useful when the **original data is obsolete** and **only the latest value matters**.

---

## When to Use

- When **historical changes are irrelevant**.
- Business logic or reporting requires **only the most recent state**.
- Avoids additional storage and complexity associated with versioning.

---

## Real-World Example: Airbnb

- **Scenario**: A property owner initially listed their flat **without air conditioning**.
- Later, they **install air conditioning** and update their listing.
- For Airbnb, it's **irrelevant** whether the property had air conditioning before.
- What matters is the **current availability**.
- ✅ Source data updated  
- ✅ Data warehouse **also updated**, **old value overwritten**

---

## Summary

- SCD Type 1 is ideal for **current-state-only attributes**.
- Pros:
  - Simpler implementation
  - No additional storage
- Cons:
  - **No historical tracking** of changes

# SCD Type 2 – Historical Tracking

## Definition

- **SCD Type 2** preserves both **current and historical data** in the data warehouse.
- When a change occurs, a **new record is inserted** while the old record is **retained**.
- Each record contains **metadata columns** such as:
  - `valid_from` (start date)
  - `valid_to` (end date)
  - `is_current` (flag indicating current record)

---

## When to Use

- When **both current and historical values** are relevant.
- Useful for **trend analysis**, **auditing**, or **regulatory tracking**.
- Ensures that **no data is lost** during updates.

---

## Real-World Example: Airbnb

- **Scenario**: Property owners can **adjust rental prices** anytime.
- Airbnb needs to **analyze price changes over time** to understand market trends.
- When an owner changes their price:
  - A **new row** is added with the new price.
  - The **previous row** is marked as historical.
- ✅ Current and historical data are stored.
- 🕓 Example columns:
  - `price`
  - `valid_from`
  - `valid_to`
  - `is_current`

---

## Benefits

- Complete **historical audit trail**.
- Enables **time-based reporting** and trend analysis.
- Supports **data validation** and backtracking.

---

## Drawbacks

- Increased **data volume and storage requirements**.
- **More complex queries** and slower processing on large datasets.
- Not ideal for systems with **very high record churn**.

---

## Summary

| Feature | Description |
|----------|--------------|
| Data update method | Insert new row |
| Keeps history | ✅ Yes |
| Typical use case | Historical reporting, audit, trend analysis |
| Trade-off | Higher storage & complexity |

# SCD Type 3 – Partial History with Columns

## Definition

- **SCD Type 3** stores **partial history** by adding **additional columns** for old values instead of new rows.
- Only the **current value** and a **limited number of previous values** (often just one) are stored.
- Common columns include:
  - `current_value`
  - `previous_value` or `original_value`

---

## When to Use

- When **limited history** is sufficient.
- When **query performance** and **storage efficiency** are more important than full historical tracking.
- Useful for capturing **recent changes** or **comparisons** between current and previous states.

---

## Real-World Example: Airbnb

- **Scenario**: A property is initially listed as a **private room**.
- Later, the owner moves out and lists it as an **entire place**.
- Later still, they return and change it to a **shared room**.
- **Airbnb only cares about the last state** before the current one (e.g., entire place → shared room).
- They don’t need to retain all changes over time (e.g., the original private room).
- Airbnb uses SCD Type 3 to add a **`previous_room_type`** column next to **`current_room_type`**.

---

## Benefits

- **Fewer records** in the data warehouse.
- **Faster performance** for queries and analytics.
- Simpler to implement than SCD Type 2.

---

## Drawbacks

- Only a **limited snapshot of history** is available.
- Does **not support full auditability** or long-term trend analysis.
- **Column semantics** must be clearly defined (e.g., `current`, `previous`).

---

## Summary

| Feature | Description |
|--------|-------------|
| Data update method | Update columns |
| Keeps full history | ❌ No |
| Keeps limited history | ✅ Yes (usually one prior state) |
| Typical use case | Limited change tracking, performance-sensitive systems |
| Trade-off | Lower storage and complexity, but less historical insight |

# Introduction to DBT – The "T" in ELT

## What is DBT?

- **DBT (Data Build Tool)** handles the **Transform** step in **ELT** pipelines.
- It **does not extract or load** data (unlike Fivetran or Stitch).
- DBT **transforms data already present** in a data warehouse (e.g., Snowflake, BigQuery, Redshift) using **SQL SELECT statements**.
- The value of DBT lies not in SQL itself, but in how it manages, organizes, tests, and deploys SQL-based transformations.

---

## DBT Metaphor: From Candle to Spotlight

- Running plain SQL is like using a **candle in a dark room**:  
  - Limited visibility.
  - Hard to collaborate.
  - Once the candle is gone, you're in the dark again.
- DBT is like turning on **spotlights**:
  - Full, shared visibility into your data transformations.
  - Portability and collaboration.
  - Clear structure and transparency.

---

## Why Use DBT?

### 1. **Software Engineering Best Practices**
- DBT brings **modularity**, **reusability**, and **version control** to analytics code.
- It supports **CI/CD**, **testing**, and **documentation**.
- Projects are structured and easier to maintain.

### 2. **Model Management**
- DBT organizes each transformation as a **model** (a `.sql` file with a `SELECT` statement).
- Dependencies between models are **automatically detected**.
- A **DAG (Directed Acyclic Graph)** is generated showing how models depend on each other.

### 3. **Compilation and Execution**
- DBT compiles your code into raw SQL and runs it on your **target data warehouse**.
- You write transformations as SELECT statements.
- DBT handles execution and ordering.

### 4. **Environment Separation**
- You can configure **development**, **staging**, and **production** environments.
- Switching between environments is seamless.

### 5. **Parallelism and Performance**
- DBT:
  - Detects **model dependencies**.
  - **Parallelizes** execution where possible.
  - Builds only the **required models or subgraphs**.

---

## Summary

| Feature                   | DBT Capability                                  |
|--------------------------|--------------------------------------------------|
| Extract & Load           | ❌ Not supported                                 |
| Transform                | ✅ Yes, via SQL models                           |
| Language                 | SQL (templated with Jinja)                      |
| Environment control      | ✅ Dev / Prod separation                         |
| Testing & CI/CD          | ✅ Built-in testing and integration tools        |
| Visualization            | ✅ DAG of models                                |
| Version Control          | ✅ Git integration                              |
| Performance              | ✅ Parallel builds, dependency-based ordering    |

---

## Final Note

> With DBT, you build **production-grade data pipelines** using **select statements** that are clean, testable, maintainable, and collaborative.

# Jinja in DBT – Summary Notes

## What is Jinja?
- A **templating engine** that makes SQL **dynamic and flexible**.  
- Allows **variables**, **loops**, and **conditions** inside SQL files.

## Why it matters in DBT
- Enables **dynamic SQL transformations** inside DBT models.  
- Avoids **hardcoding** and supports **environment-specific logic**.  
- Makes queries **reusable**, **adaptable**, and **maintainable**.

## Key Features
- **Dynamic model references** – use `ref()` instead of static table names.  
- **Conditional logic** – execute SQL only under certain conditions.  
- **Macros** – reusable SQL snippets to reduce duplication.  
- **Loops** – generate repetitive SQL patterns automatically.

## Example

```jinja
SELECT *
FROM {{ ref('customers') }}
WHERE country = '{{ var("target_country") }}'
```

# YAML in DBT – Summary Notes

## What is YAML?
- **YAML** = *YAML Ain’t Markup Language*  
- A **lightweight, human-readable format** for structured data.  
- Ideal for **configuration files** due to **clarity** and **simplicity**.  
- Uses **indentation (spaces only)** for hierarchy and structure.

## YAML Syntax Basics
- **Key–value pairs** use a colon (`:`).  
- **Indentation** defines hierarchy; use consistent spaces (no tabs).  
- **Lists** use hyphens (`-`) before each item.  
- **Comments** start with a hash (`#`).  
- **Strings** use quotes for special characters.

## Examples

```yaml
# Simple key–value pairs
name: Malvika
role: Director
company: Pathfinder Analytics

# Nested structure
person:
  name: Malvika
  role: Director
  company: Pathfinder Analytics

# Lists
languages:
  - Python
  - SQL
  - Scala

# List of objects
employees:
  - name: Malvika
    role: Data Engineer
  - name: Sophie
    role: Data Analyst

# Quoted values (special characters)
url: 'https://example.com'
password: 'p@ssw0rd!'

# Multiline strings
description: |
  This text preserves
  line breaks.
message: >
  This text folds
  into one line.
```

## YAML in DBT
- Used to **configure and document** DBT projects.  
- Manages **metadata**, **tests**, **tags**, and **sources**.  
- Defines **project-level settings**, **materializations**, and **database connections**.  

```yaml
name: simple_dbt_project
version: 1.0
source-paths: ["models"]
target-path: "target"
profile: "default"
models:
  simple_dbt_project:
    materialized: table
```

# DAGs in DBT – Summary Notes

## What is a DAG?
- **DAG** stands for **Directed Acyclic Graph**.  
- It is a **visual representation** of how data models are connected and how data flows between them.  
- Each **node** represents a model or data source.  
- **Directed arrows** show dependencies — how one model depends on another.  
- **Acyclic** means no loops — data always flows in one direction.

## Purpose and Benefits
- Provides **data lineage**: a clear view of how raw data transforms into final outputs.  
- Helps with **troubleshooting** and identifying **upstream** or **downstream** dependencies.  
- Useful for **performance optimization** and **data integrity assurance**.  
- Distinguishes between different types of models:
  - **Sources**
  - **Snapshots**
  - **Materialized models**
  - **Tests** attached to models

## Why It Matters in DBT
- DBT automatically builds a DAG to visualize model relationships.  
- You can instantly see how transformations are structured in your project.  
- Makes it easier to:
  - Debug pipeline issues  
  - Manage dependencies  
  - Understand transformation flow  
  - Collaborate across teams with visual context

## Key Concept
> A DAG ensures data moves **forward** through the pipeline without cycles, maintaining clarity and consistency in transformations.

# Setting Up Databricks Workspace for DBT Project

## Prerequisites
- A **Unity Catalog–enabled Databricks workspace** (on **Azure**, **GCP**, or **AWS**).  
- Familiarity with **Databricks SQL platform** and **Unity Catalog**.  
- Access to **Catalog Explorer** and ability to manage metastore and SQL warehouses.

## Metastore
- Navigate to **Catalog Explorer → Cog icon (⚙️)**.  
- Confirm that the **metastore** is active, e.g.,  
  `Metastore_Azure_UK_Sales`.  
- This metastore will hold the metadata for all catalogs, schemas, and tables in this project.

## Creating an SQL Warehouse
1. Go to **SQL → SQL Warehouses**.  
2. A **default serverless starter warehouse** is typically created automatically, but its size may be small.  
3. To manage performance and cost effectively:
   - Click **Create SQL Warehouse**.  
   - Name it:  
     `2xSmall_Serverless_Warehouse`.  
   - Set **Cluster Size** to `2X Small` (or smallest available).  
   - Set **Auto Stop** to **10 minutes of inactivity**.  
   - Keep **Max Clusters = 1**.  
   - **Type:** `Serverless`.  
   - Click **Create**.

4. Once created, verify it’s running under **SQL Warehouses** list.

## Creating a Catalog
1. In **Catalog Explorer**, navigate to **Catalogs → Create Catalog**.  
2. Name the catalog:  
   `DBT_project_catalog`.  
3. Select the **storage location** associated with your metastore.  
4. Click **Create**.  
5. You should now see the new catalog in your Catalog Explorer.

## Important Notes
- The **SQL warehouse performs all compute operations**.  
  → Always **turn it off** when not in use to prevent unnecessary costs.  
- Monitor and manage your **cloud costs**:
  - Use **Azure Cost Management**, **AWS Cost Explorer**, or **GCP Billing**.  
  - Set **budgets** and **alerts** to track usage.  

## Summary
| Component | Example Name | Purpose |
|------------|---------------|----------|
| Metastore | `Metastore_Azure_UK_Sales` | Central metadata store |
| Catalog | `DBT_project_catalog` | Logical container for schemas and tables |
| SQL Warehouse | `2xSmall_Serverless_Warehouse` | Compute resource for DBT and queries |

> Keep your compute turned off when idle — this is the most effective way to avoid unnecessary cloud expenses.

# Loading Retail Dataset into Databricks Lakehouse

## Objective
Load a **fictitious retail dataset** into a **landing schema** within the **`DBT_project_catalog`** in Databricks.  
This dataset will serve as the **raw data layer** for DBT transformations.

---

## Dataset Overview
- The downloadable resource is `Retail_Dataset.zip`.  
- After extraction, it contains **four Parquet files**:
  1. `orders.parquet`
  2. `products.parquet`
  3. `reviews.parquet`
  4. `users.parquet`

---

## Step 1: Create a Landing Schema
1. In **Catalog Explorer**, navigate to the **`DBT_project_catalog`**.  
2. Click **Create Schema**.  
3. Name it: `landing`.  
4. Link it to a **storage location** (use the metastore’s default).  
5. Click **Create**.  
   - The schema should now appear empty in the catalog.

---

## Step 2: Load Tables into the Landing Schema
Perform the following for each Parquet file.

### Example: Loading `orders.parquet`
1. Go to the root of the **Catalog Explorer**.  
2. Click **Add Data → Create or Modify Table**.  
3. Click **Browse** and locate `orders.parquet`.  
4. Ensure:
   - **Catalog:** `DBT_project_catalog`
   - **Schema:** `landing`
5. Wait for the data **preview** to load.  
6. Click **Create Table**.  
   - The `orders` table will appear under the `landing` schema.

### Repeat the same steps for:
- `products.parquet` → creates `products` table.  
- `reviews.parquet` → creates `reviews` table.  
- `users.parquet` → creates `users` table.  

After completion, the `landing` schema should contain:
| Table Name | Description |
|-------------|-------------|
| `orders` | Records of customer orders |
| `products` | Product details and pricing |
| `reviews` | Product reviews and ratings |
| `users` | Customer details and demographics |

---

## Step 3: Verify Table Contents
Use **Sample Data Preview** in Catalog Explorer.

### `orders`
| Column | Description |
|---------|-------------|
| `order_id` | Unique order identifier |
| `order_date` | Date of order placement |
| `user_id` | Customer placing the order |
| `product_id` | Product ordered |
| `quantity` | Quantity of the product |
| `unit_price` | Price per unit |

### `products`
| Column | Description |
|---------|-------------|
| `id` | Product ID (linked to `orders.product_id`) |
| `date_added` | Date the product was added |
| `title` | Product name |
| `category` | Product category |
| `ean` | European Article Number |
| `vendor` | Product vendor |
| `price` | Product price |

### `reviews`
| Column | Description |
|---------|-------------|
| `id` | Review ID |
| `review_date` | Date of review |
| `reviewer_name` | Reviewer’s name |
| `product_id` | Product reviewed |
| `rating` | Rating given |
| `review_text` | Review content |

### `users`
| Column | Description |
|---------|-------------|
| `id` | Customer ID |
| `date_added` | Date customer joined |
| `name` | Customer name |
| `email` | Customer email |
| `country` | Customer’s country |
| `birth_date` | Customer’s birth date |
| `source` | How customer was acquired |

---

## Step 4: Validate Relationships
- `orders.product_id` → `products.id`  
- `reviews.product_id` → `products.id`  
- `orders.user_id` → `users.id`

---

## Summary
You have successfully:
- Created a **landing schema** in Databricks.  
- Imported **four Parquet tables** into the schema.  
- Verified table structure and established **entity relationships**.  

> These tables form the **raw data layer** that DBT will use for further modeling and transformation.

# Introduction to DBT Cloud

## Overview
- **DBT Cloud** is a **managed service** built on top of **DBT Core**.
- **DBT Core** is the **open-source engine** that runs DBT transformations.
- **DBT Cloud** adds a **web-based interface (IDE)**, job scheduling, version control, and collaboration features.
- It eliminates complex local setups and simplifies project management for data teams.

---

## DBT Cloud Pricing Plans
| Plan | Description | Key Features |
|------|--------------|---------------|
| **Developer (Free)** | Ideal for individuals and small projects | 1 developer seat, browser-based IDE |
| **Team** | For small to medium teams | Job scheduling, multiple seats, priority support |
| **Enterprise** | For large organizations | SSO, advanced security, dedicated support |

- When signing up for the **Developer Plan**, you automatically get a **14-day free Team Plan trial**.
- After 14 days, you can **switch back to the free Developer plan** (no charges since no payment details are required).

---

## Signing Up for DBT Cloud
1. Visit **[getdbt.com/signup](https://getdbt.com/signup)**.
2. Provide:
   - Email address (preferably the same as your Databricks account)
   - First and last name
   - Company (enter “Student” if not employed)
   - Password and other required details
3. Agree to terms and click **Create Account**.
4. **Verify your email**.
5. After verification, you’ll be directed to your **DBT Cloud UI**.

---

## DBT Cloud UI Overview

### 1. **Dashboard**
- Displays **metrics and insights** once your project is set up.
- Helps engineers and analysts **monitor transformations and models**.

### 2. **Develop**
- Access to the **Cloud IDE** (integrated development environment).
- Build and edit DBT models using the browser-based SQL editor.

### 3. **Deploy**
- View **run history** for DBT models.
- Create **jobs** to schedule DBT commands (e.g., nightly runs).
- Configure **environments** like **QA** and **Production**.

### 4. **Data Sources**
- Manage external data connections (e.g., Databricks, Snowflake, BigQuery).

### 5. **Explore**
- Once a project is configured, provides:
  - Project overview and performance metrics.
  - **Lineage graphs** (data dependencies and model flow).
  - **File tree navigation** for your project.
  - Recommendations and resource usage insights.

### 6. **Documentation**
- Automatically generates **project documentation** from YAML and SQL models.

### 7. **Support and Help**
- Access **support assistant** and **official documentation**.

---

## Account and Profile Settings
- Accessed under your **Organization name** → **Settings**.
- Includes:
  - **Account Settings** (account name, ID, project management)
  - **Profile Settings** (personal info, credentials, security)
  - **Integrations** (connectors, billing, API tokens, user management)
  - **Billing** (plan management and trial information)

### Billing Details
- You start on a **14-day Team Trial**.
- After it expires:
  - Go to **Billing tab** → switch to **Developer Plan (Free)**.
  - No charges are incurred since payment info is not provided.

---

## Logging Out and Back In
- To **log out**, click your name → **Sign Out**.
- To **log back in**, visit:

## Summary
✅ DBT Cloud simplifies working with DBT through a managed, collaborative environment.  
✅ It provides a full workflow from **development → deployment → monitoring**.  
✅ The free **Developer Plan** is sufficient for this course.  
✅ Make sure to **switch to the Developer plan** after your trial ends to avoid interruptions.

Next up: setting up your first **DBT project** inside DBT Cloud.

# DBT Cloud Project Setup with Databricks

## 1. Accessing DBT Cloud
- Log in to **DBT Cloud**.
- Navigate to:  
  `Account Settings → Projects`
- A default project named **analytics** may appear. Delete it:  
  - Click **Edit → Delete**.

## 2. Creating a New Project
- Click **New Project**.
- Name the project:  
  **DBT_Databricks**
- Click **Continue**.

## 3. Creating a Databricks Connection
- Click **Add New Connection**.
- Select **Databricks** as the platform.
- Set the connection name: **Databricks**.

### Connection Parameters
- **Server Hostname** and **HTTP Path** come from your Databricks **SQL Warehouse**:
  - Go to the warehouse (e.g., *2x-small serverless*).
  - Open **Connection Details**.
  - Copy:
    - **Server Hostname**
    - **HTTP Path**
- Paste both values into the connection setup fields.

### Catalog
- Since **Unity Catalog** is enabled, specify the catalog name:  
  **DBT_project_catalog**

- Save the connection.

## 4. Setting Up Development Credentials
- In Databricks:
  - Go to **User Settings → Developer → Access Tokens → Manage**.
  - Generate a new token named **DBT_token**.
  - Set **Lifetime (days)** = 90.
  - Copy the token immediately (it won’t be visible again).

- Back in DBT Cloud:
  - Go to **Account Settings**.
  - Paste the token into the token field.

### Schema and Target
- Schema follows the format:  
  **dbt_<first_initial><surname>**  
  Example: `dbt_avergradia`
- This ensures each developer works in a personal schema and avoids overwriting others’ changes.
- Leave **Target** as default.

### Test Connection
- Click **Test Connection**.
- Once successful, click **Save**.

## 5. Setting Up the Repository
- Choose **Managed Repository** (simplest option).
- Name it:  
  **DBT_Databricks**
- Click **Create**.

## 6. Initializing the DBT Project
- Go to **Develop → Cloud IDE**.
- This opens the version-controlled IDE, which includes:
  - File Explorer
  - Command Terminal
  - File Preview Pane

- Click **Initialize DBT Project**.

### Project Structure
- DBT initializes a standard project skeleton.
- You’ll add SQL models and YAML configuration files here.

## 7. First Commit
- Click **Commit and Sync**.
- Add commit message:  
  **initial commit**
- Click **Commit Changes**.
- Changes are now merged into the main branch.

## 8. Summary
- Project setup is complete.
- Connection to Databricks and repo integration are ready.
- You can now start developing DBT models in the **Cloud IDE**.

# DBT Cloud IDE Overview and Project Structure

## 1. Purpose of the DBT Cloud IDE
- The **Cloud IDE** provides a web-based environment for developing and managing DBT projects.
- It includes:
  - **File Explorer**
  - **SQL Preview Pane**
  - **Terminal for DBT commands**
  - **Code Quality and Lineage views**

---

## 2. Core Concept of DBT
- DBT translates **SQL models** into executable **SQL queries** within your **data warehouse** or **lakehouse**.
- The key idea: every transformation is a **model**, represented by a `.sql` file.

---

## 3. Project Folder Structure

### `models/`
- Core folder containing SQL transformation files.
- You can organize models into **subfolders** for better structure and configuration.
- Example model file contains:
  - **Jinja configuration**
  - **CTE-based SQL logic**
  - Comments for documentation.

Example snippet:
```sql
WITH source_data AS (
  SELECT 1 AS id
  UNION ALL
  SELECT NULL AS id
)
SELECT * FROM source_data;
```

- You can preview the SQL output by using the **Preview Selection** option.
- Previewing will **start your Databricks SQL Warehouse** — remember to **turn it off** after use to save costs.

---

## 4. Compiling Models
- The **Compile** command converts DBT code into **raw SQL** that will actually be executed.
- Shows you the final SQL after Jinja processing.
- Compiled files are stored in the **target/** folder.

Path example:
```text
target/
 └── compiled/
     └── <project_name>/
         └── models/
             └── example/
                 └── my_first_dbt_model.sql
```

- Only selected files are compiled if explicitly chosen.

---

## 5. Results and Code Quality
- The **Results** pane displays query outputs.
- **Code Quality tools** allow you to auto-format SQL and review formatted results.

---

## 6. Lineage View
- Displays dependencies between models and sources.
- Helps visualize **data flow** and **model relationships**.
- Determined by the `ref()` Jinja function.

Example:
```sql
SELECT * FROM {{ ref('my_first_dbt_model') }}
```
- This indicates that the current model depends on `my_first_dbt_model`.

---

## 7. Build and Terminal
- The **Build** button or terminal command runs transformations and tests.
- Equivalent command in terminal:
```bash
dbt build
```
- The terminal accepts all DBT CLI commands.

---

## 8. Additional Folders in DBT Project

### `analyses/`
- For **ad hoc** or **exploratory SQL queries**.
- Does not create persistent objects in the database.

### `macros/`
- Stores **custom SQL or Jinja macros** that extend DBT functionality.

### `seeds/`
- Contains **static CSV files** loaded as reference tables into the data warehouse.

### `snapshots/`
- Track **historical data changes** over time.
- Used to implement **Slowly Changing Dimensions (SCD Type 2)**.

### `target/`
- Automatically generated folder containing compiled artifacts and execution outputs.

### `tests/`
- Holds SQL or YAML files for **data quality tests**.
- Example: ensure no `NULL` values in a column.

---

## 9. Configuration File: `dbt_project.yml`
- Defines project-level configurations such as folder paths and materialization types.

Key sections:
```yaml
name: my_new_project
version: 1.0.0
config-version: 2

model-paths: ["models"]
analysis-paths: ["analyses"]
test-paths: ["tests"]
seed-paths: ["seeds"]
macro-paths: ["macros"]
snapshot-paths: ["snapshots"]
target-path: "target"

models:
  my_new_project:
    example:
      +materialized: table
```

### Explanation:
- **Project name**: can be renamed (e.g., `DBT_Databricks`), but keep as `my_new_project` for now.
- **Materialization**: models in `example/` are created as **tables**.
- **“+” prefix**: configuration applies recursively to subfolders.

---

## 10. Summary
- The DBT Cloud IDE provides a fully managed environment to build, test, and deploy SQL-based transformations.
- Key elements:
  - **Models** = Transformations
  - **Macros** = Reusable logic
  - **Seeds** = Static data
  - **Snapshots** = Historical tracking
  - **Tests** = Data validation
  - **dbt_project.yml** = Central configuration
- Compilation, lineage, and build commands streamline the workflow for collaborative data transformation development.

# Git Version Control in DBT Cloud IDE

## 1. Overview
- DBT Cloud IDE integrates **Git** directly for version control.
- Projects are **collaborative**, meaning multiple developers can modify files simultaneously.
- Git ensures **safe, trackable, and reversible** changes.

---

## 2. Main Branch
- The **main branch** is **protected**:
  - Stores **production-ready** code.
  - Serves as the **default collaboration branch**.
  - Direct modifications are **not allowed**.
- Developers work on **feature branches** created from `main`.

---

## 3. Creating a Feature Branch
Steps:
1. Click **Create Branch**.
2. Use naming convention:  
   **feature/<description>**
   Example: `feature/my_first_branch`
3. Submit and switch to the new branch.

- Switching between branches changes the active codebase view.
- The **feature branch** initially mirrors the **main** branch until changes are made.

---

## 4. Making and Saving Changes
Example workflow:
1. In the **models/example** folder, create a new file:
   - File name: `feature.sql`
2. Add code:
   ```sql
   SELECT 1;
   ```
3. Save the file (unsaved files show a warning when closing).

---

## 5. Tracking Changes
- The IDE visually indicates file changes:
  - **Green** → added files  
  - **Red** → deleted files  
- Example:
  - Added `feature.sql`
  - Deleted `schema.yml`
- Differences between file versions can be viewed side-by-side:
  - **Green highlights** → new content
  - **Strikethroughs** → deleted content

---

## 6. Committing Changes
- Add a commit message summarizing your work:
  Example:  
  **"Added feature.sql and removed schema.yml"**
- Click **Commit and Sync** to save changes to the feature branch.

After committing:
- Changes disappear from the "Uncommitted Changes" list.
- Updates are now part of the branch.

---

## 7. Merging Branches
- Switch to the **main branch**:
  - `feature.sql` will not appear there yet.
  - `schema.yml` will still exist.
- To integrate your changes:
  - **Merge feature branch → main branch.**
- After merge:
  - `feature.sql` added to main.
  - `schema.yml` removed from main.
- Note: In managed repositories, feature branches **cannot be deleted**.

---

## 8. Reverting Changes
Example:
1. Create a new branch:  
   **feature/revert_branch**
2. Edit file:
   ```sql
   SELECT 2;
   ```
3. Save but do **not commit** yet.
4. To undo uncommitted changes:
   - Click dropdown → **Revert changes**.
   - File reverts to previous commit (`SELECT 1`).

---

## 9. Checking Out and Refreshing
- **Checkout branch**: makes it the active working branch.
- **Refresh Git Status**:
  - Updates IDE view with the latest repository state.
  - Ensures branches and commits are synced.
  - Mostly useful for **external repository setups**, less for managed ones.

---

## 10. Git Files in the Repository

### `.gitignore`
- Specifies files or directories **ignored by Git**.
- Prevents temporary or system files from being tracked.

### `.gitkeep`
- Used as a placeholder to keep **empty directories** in version control.
- Should **not be deleted**.

---

## 11. Typical Git Workflow in DBT
1. **Create a feature branch** from `main`.
2. **Implement changes** (e.g., new SQL models, YAML updates).
3. **Save and commit** changes.
4. **Merge** feature branch into `main` once reviewed.
5. Repeat for new features.

---

## 12. Summary
- **Branches** isolate work safely.
- **Commits** capture incremental progress.
- **Merges** integrate stable changes.
- **Revert** restores previous versions when needed.
- The DBT Cloud IDE provides a simplified Git workflow suitable for multi-developer environments.

For advanced Git topics (merge conflicts, rebasing, etc.), consult official Git documentation.

# Modeling in DBT with the Medallion Architecture

## 1. Overview
- This section focuses on **DBT modeling** using the **Medallion Architecture** framework.
- The Medallion Architecture organizes data into **three layers**:  
  **Bronze → Silver → Gold**.
- Each layer represents a different stage of data refinement and purpose.

---

## 2. The Three Layers

### **Bronze Layer**
- **Purpose:** Store raw, ingested data from the landing schema.
- **Characteristics:**
  - Contains unprocessed and unfiltered data.
  - Serves as a **historical record** for traceability.
  - Ideal for **error correction** and **reprocessing**.
- **Example:** Ingested tables directly from the source systems.

### **Silver Layer**
- **Purpose:** Store **cleaned and transformed** data.
- **Characteristics:**
  - Data from Bronze is **validated, deduplicated**, and **structured**.
  - More **query-ready** and standardized for analytics.
- **Example:** Orders, Products, and Users data refined from Bronze.

### **Gold Layer**
- **Purpose:** Provide **aggregated and enriched** data for analysis.
- **Characteristics:**
  - Optimized for **BI tools, reporting**, and **machine learning**.
  - Joins and summarizes data from Silver and Bronze layers.

---

## 3. Data Flow Example

### **From Landing to Bronze**
- Source data from the **landing schema** is loaded into the **Bronze layer**.

### **From Bronze to Silver**
- The following tables are processed:
  - `orders`
  - `products`
  - `users`
- These become **Silver layer** tables.
- Note: The **reviews** table remains in Bronze.

### **From Silver to Gold**
- **Gold_Sales_Daily**:
  - Aggregates **total daily sales revenue** and **number of orders**.
  - Grouped by **product**, **location**, and **sales channel**.
  - Combines data from **Silver Orders**, **Silver Products**, and **Silver Users**.

- **Gold_Average_Rating_Daily**:
  - Shows **average product ratings per day**.
  - Combines **Silver Products** and **Bronze Reviews**.

---

## 4. DBT Modeling Objectives
- Demonstrate how to:
  - Reference **source data**.
  - Build and organize **SQL models**.
  - Apply **transformations** through DBT workflows.

---

## 5. What’s Next
- This section introduces **core modeling fundamentals**.
- Later in the course, additional topics will include:
  - Different **materializations** (e.g., table, view, incremental)
  - **Incremental loading** strategies
  - **Data assertions** and testing
  - **Slowly Changing Dimensions (SCD Type 2)**

---

## 6. Summary
| Layer  | Purpose                             | Data State      | Use Case                          |
|--------|-------------------------------------|-----------------|-----------------------------------|
| Bronze | Raw ingestion from landing schema   | Unprocessed     | Historical archive                |
| Silver | Cleaned and deduplicated data       | Refined         | Query-ready and reliable data     |
| Gold   | Aggregated and enriched data        | Optimized       | Analytics, reporting, ML workloads |

- The **Medallion Architecture** ensures a clear lineage and refinement flow from raw ingestion to business-ready insights.

# Building the First DBT Model: Bronze Orders

## 1. Overview
- This lecture demonstrates creating the **first DBT model** — `bronze_orders.sql`.
- The model pulls data from the **landing schema** within the **DBT project catalog**.
- Models in DBT are **SQL files** that define transformations and are materialized as **tables** or **views** in the database.

---

## 2. Preparing the Workspace

### Branch Setup
1. In the **DBT Cloud IDE**, create a new branch:
   - Name: `feature/models`
2. Delete the old **example** subdirectory under `models/`.
3. Commit the deletion with a message:  
   **"Removed example folder"**

---

## 3. Creating the Bronze Orders Model

### Steps
1. In the `models/` folder, create a new file:  
   **`bronze_orders.sql`**
2. Reference the `orders` table from the **landing schema** in the **DBT project catalog**.

Example:
```sql
SELECT *
FROM dbt_project_catalog.landing.orders
```

- Do **not** use a semicolon at the end of DBT SQL files.
- Save and commit changes:  
  **"Added bronze_orders.sql"**

---

## 4. Previewing the Model
- Click **Preview** in the Cloud IDE to run the query.
- The **SQL Warehouse** in Databricks starts automatically during preview.
- The preview result corresponds to the raw `orders` table from `landing`.

---

## 5. Compiling and Running the Model

### Compile
- Compiles the SQL without executing it.
- Command options:
  - Single model: click **Compile**
  - Entire project:
    ```bash
    dbt compile
    ```

- The compiled code is stored in:
  ```text
  target/compiled/<project_name>/models/bronze_orders.sql
  ```

### Run
- Executes and materializes the model in Databricks.
  ```bash
  dbt run
  ```
- Result:
  - The model is materialized as a **view** by default.
  - Created in your **developer schema**, e.g.:
    `dbt_mvergadia.bronze_orders`
  - Output message: “Created view bronze_orders”.

---

## 6. Schema and Catalog Explanation
- **Catalog:** `dbt_project_catalog` (configured during connection setup)
- **Schema:** developer-specific, e.g.:
  `dbt_<first_initial><surname>`
- These configurations are defined under:
  - **Account Settings → Connections**
  - **Profile Credentials** in DBT Cloud

---

## 7. Changing the Materialization Type

### Why the Model Was a View
- Default DBT materialization is **view**.
- The `example` folder (now deleted) had `+materialized: table`, so other models defaulted to **view**.

### Updating Materialization in `dbt_project.yml`
- Open **`dbt_project.yml`** and edit it as follows:
```yaml
name: dbt_databricks_project
version: 1.0.0
config-version: 2

models:
  +materialized: table
```

- Commit the change:  
  **"Updated model materialization"**

### Re-run the Model
```bash
dbt run
```

- The log now shows:
  **“Created table bronze_orders”**
- The model is now a **Delta table** instead of a view.

---

## 8. Validation in Databricks
- Navigate to:
  `dbt_project_catalog → dbt_<your_name>`
- Verify that:
  - `bronze_orders` now appears as a **table**.
  - The **SQL definition** matches your model.
- Stop the **SQL Warehouse** after verification to save costs.

---

## 9. Summary
| Step | Action | Result |
|------|--------|--------|
| 1 | Created branch `feature/models` | Safe workspace for model development |
| 2 | Created `bronze_orders.sql` | Model file for the Bronze layer |
| 3 | Ran `dbt compile` | Checked SQL syntax and generated compiled code |
| 4 | Ran `dbt run` | Executed and materialized the model in Databricks |
| 5 | Updated `dbt_project.yml` | Changed default materialization from view → table |

---

## 10. Key Takeaways
- **Models** are the foundation of DBT projects.
- By default, DBT materializes models as **views**, but this can be overridden globally or per model.
- **Bronze models** typically load raw data without transformations.
- Development occurs in individual schemas (e.g., `dbt_<user>`).
- Future lectures will cover:
  - **Inline configurations**
  - **Materialization types**
  - **Incremental models**
  - **Advanced transformations**

- Continue working in the `feature/models` branch; **do not merge** it into the main branch yet.

# Understanding the Target Folder and the DBT Clean Command

## 1. Overview
- The **`target/`** folder stores all **compiled** and **executed** SQL code for your DBT project.
- After multiple runs or renaming projects, this folder may contain outdated artifacts from older project names or deleted models.

---

## 2. Target Folder Structure

### Example Layout
```text
target/
 ├── compiled/
 │   ├── my_new_project/
 │   └── dbt_databricks_project/
 └── run/
     ├── my_new_project/
     └── dbt_databricks_project/
```

### Folder Purpose
| Folder | Description |
|---------|-------------|
| **compiled/** | Contains the **final SQL code** generated from your DBT models and Jinja templates. |
| **run/** | Contains the **SQL code actually executed** against your data warehouse when running `dbt run`. |

---

## 3. Compiled vs. Run SQL
- Example: open the same model (`bronze_orders.sql`) from both folders.

**Compiled version:**
```sql
CREATE OR REPLACE TABLE dbt_mvergadia.bronze_orders AS
SELECT *
FROM dbt_project_catalog.landing.orders
```

**Run version:**
- The SQL that was actually executed by `dbt run`.
- It may include additional metadata or execution-specific statements.

---

## 4. Why Old Artifacts Remain
- When you delete models or folders (e.g., `example/`) from the project directory:
  - Their compiled files remain in `target/`.
  - DBT **does not automatically clean** them up.
- This can lead to outdated subdirectories such as:
  - `my_new_project/example/` still visible after deletion.

---

## 5. The `dbt clean` Command

### Purpose
- Deletes all directories listed in the **`clean-targets`** configuration of your project.
- Commonly removes:
  - The `target/` directory
  - The `dbt_packages/` directory (if used for dependencies)

### Syntax
```bash
dbt clean
```

### Example Output
```text
Running with dbt=1.x.x
Cleaning all directories specified in clean-targets...
Success! Cleaned all paths.
```

### Result
- The `target/` folder is **fully removed**.
- Running `dbt run` again will:
  - Recreate `target/`
  - Recompile your SQL files
  - Regenerate both `compiled/` and `run/` folders

---

## 6. Practical Example

### Before Cleaning
```text
target/
 ├── compiled/my_new_project/example/
 └── run/dbt_databricks_project/models/
```

### Run Clean
```bash
dbt clean
```

### After Cleaning
```text
(target folder deleted)
```

### Run Project Again
```bash
dbt run
```

- Recreates the target folder:
  - `compiled/bronze_orders.sql`
  - `run/bronze_orders.sql`
- The **bronze_orders table** in Databricks remains unchanged, as it is recreated from scratch.

---

## 7. Summary

| Command | Function | Result |
|----------|-----------|--------|
| `dbt compile` | Compiles SQL and Jinja templates | Updates files in `target/compiled/` |
| `dbt run` | Executes models and creates tables/views | Updates `target/run/` |
| `dbt clean` | Deletes compiled artifacts and packages | Removes directories defined in `clean-targets` |

- Use `dbt clean` when:
  - Removing outdated compiled files.
  - Renaming or restructuring your project.
  - Ensuring your environment is clean before new builds.

**Key takeaway:**  
`dbt clean` ensures a fresh compilation environment, preventing confusion from leftover artifacts in the `target/` directory.

# Configuring Sources and Building Bronze Models in DBT

## 1. Overview
- This lecture introduces **DBT sources** and the **`source()` Jinja function**.
- Sources establish **explicit dependencies** between **raw data tables** and **DBT models**.
- Using `source()` improves **lineage visibility** and ensures **correct model execution order**.

---

## 2. Lineage View Without Sources
- Initially, the **Bronze Orders** model referenced the landing table directly:
  ```sql
  SELECT *
  FROM dbt_project_catalog.landing.orders
  ```
- Although this worked, the **lineage view** did **not display** the connection between the **landing source** and the **model**.
- DBT could not infer dependencies without the `source()` function.

---

## 3. Understanding the `source()` Function
- The `source()` Jinja function defines relationships between **sources** (raw data) and **models**.
- Syntax:
  ```jinja
  {{ source('source_name', 'table_name') }}
  ```
- DBT uses this to:
  - Identify dependencies.
  - Build lineage graphs.
  - Determine execution order automatically.

Example:
```sql
SELECT * FROM {{ source('landing', 'orders') }}
```

---

## 4. Creating the Source Configuration

### Step 1: Add a YAML File
- In the `models/` folder, create:
  **`landing_sources.yml`**

### Step 2: Define the Source
```yaml
version: 2

sources:
  - name: landing
    database: dbt_project_catalog        # equivalent to Databricks catalog
    schema: landing
    tables:
      - name: orders
      - name: products
      - name: reviews
      - name: users
```

### Step 3: Save the File
- The lineage view in DBT now immediately shows the **landing source** feeding into your **bronze models**.

---

## 5. Updating the Bronze Orders Model
- Replace the hardcoded reference with the `source()` function:
```sql
SELECT *
FROM {{ source('landing', 'orders') }}
```

- Save the file.
- Commit changes with message:
  **"Added source YAML and updated bronze_orders source reference"**

---

## 6. Running the Model
Execute:
```bash
dbt run
```

- The result remains the same in Databricks:
  - The **Bronze Orders** table is materialized as a **table**.
  - Data is still sourced from the **landing.orders** table.
- However, the **lineage view** now shows a **direct connection** between the source and model.

---

## 7. Creating Remaining Bronze Models
- Add new SQL files in the `models/` directory:

**bronze_products.sql**
```sql
SELECT * FROM {{ source('landing', 'products') }}
```

**bronze_reviews.sql**
```sql
SELECT * FROM {{ source('landing', 'reviews') }}
```

**bronze_users.sql**
```sql
SELECT * FROM {{ source('landing', 'users') }}
```

- Save and commit changes:
  **"Added bronze models"**

---

## 8. Running All Bronze Models
Run all models:
```bash
dbt run
```

### Output:
- Four models executed:
  - `bronze_orders`
  - `bronze_products`
  - `bronze_reviews`
  - `bronze_users`
- Each model is **materialized as a table** (due to the global configuration in `dbt_project.yml`).

---

## 9. Validation in Databricks
- In the **DBT project catalog**, verify the presence of:
  - `bronze_orders`
  - `bronze_products`
  - `bronze_reviews`
  - `bronze_users`
- All tables exist under your developer schema (e.g. `dbt_mvergadia`).

---

## 10. Full Lineage View
- The lineage graph now clearly shows:
  - **Landing sources** → **Bronze models**
- Each model displays both **upstream sources** and **downstream relationships**.

---

## 11. Summary

| Concept | Description |
|----------|-------------|
| **Sources** | Defined in YAML files to represent external/raw data. |
| **`source()`** | Jinja function that links models to source tables. |
| **Lineage** | Visual representation of dependencies between sources and models. |
| **Bronze Layer** | Mirrors raw data; minimal transformations. |
| **Materialization** | All bronze models are created as **tables** based on global config. |

**Key Takeaway:**  
Using the `source()` function and YAML configuration makes model dependencies explicit, improves project transparency, and ensures DBT executes models in the correct order.

# Checking Data Freshness in DBT

## 1. Overview
- DBT allows you to **check the freshness** of your data to ensure that source tables are being updated regularly.  
- This is done by adding a **`freshness` block** in your **source YAML configuration**.  
- The freshness check compares the **most recent timestamp value** (e.g., `created_at`) with the current time.

---

## 2. Freshness Configuration Basics

### YAML Placement
You can define the `freshness` block:
- **At the source level** → applies to all tables in that source.
- **At the table level** → applies only to that specific table.

### Example Structure
```yaml
freshness:
  warn_after:
    count: 1
    period: day
  error_after:
    count: 2
    period: day
  filter: "WHERE is_active = TRUE"   # optional
  loaded_at_field: created_at        # required
```

### Key Parameters

| Parameter | Description |
|------------|-------------|
| **warn_after** | Triggers a warning when data is older than this threshold. |
| **error_after** | Fails the command when data exceeds this threshold. |
| **count** | Integer specifying how many periods to check. |
| **period** | Can be `minute`, `hour`, or `day`. |
| **filter** | Optional SQL condition to limit which records to evaluate. |
| **loaded_at_field** | Timestamp column used to check the most recent record. |

---

## 3. Example: Checking Freshness for the Orders Table

### Step 1: Identify the Timestamp Field
In Databricks, under **DBT project catalog → landing**, the `orders` table contains:
- **Column:** `created_at`
- **Latest record:** April 2020  
(Current date: September 2024 → data is not fresh.)

### Step 2: Add Freshness to `landing_sources.yml`
Edit your existing **`landing_sources.yml`** file:
```yaml
version: 2

sources:
  - name: landing
    database: dbt_project_catalog
    schema: landing
    tables:
      - name: orders
        freshness:
          warn_after:
            count: 365
            period: day
          loaded_at_field: created_at
```

This configuration raises a **warning** if data is older than **365 days**.

---

## 4. Running a Freshness Check

### Command
```bash
dbt source freshness
```

### Result
- You’ll see a **warning** similar to:
  ```text
  Warning: Data in source 'landing.orders' is older than 365 days.
  ```
- The DBT output details:
  - The executed query.
  - The timestamp used (`max(created_at)`).
  - The comparison to your threshold.

---

## 5. Adding an Error Threshold

Modify your block to trigger an **error** instead of a warning:
```yaml
freshness:
  error_after:
    count: 1460       # ~4 years
    period: day
  loaded_at_field: created_at
```

Re-run:
```bash
dbt source freshness
```

### Result
- DBT command **fails** because the `created_at` value is older than 1460 days.

---

## 6. Cleaning Up
For the demo dataset, you can remove the `freshness` block after testing:
```yaml
# Removed freshness block (no longer needed)
```

Save and commit the change.

---

## 7. Summary

| Concept | Description |
|----------|-------------|
| **Freshness block** | Checks how recent the data is based on a timestamp. |
| **`warn_after` / `error_after`** | Defines thresholds for warnings and errors. |
| **`loaded_at_field`** | The column used to determine data recency. |
| **`dbt source freshness`** | Command to execute freshness checks. |

**Key Takeaway:**  
The `freshness` block enables proactive data monitoring by automatically detecting stale data in your pipelines, helping maintain reliability and trust in your datasets.

# Building the Silver Layer in DBT (Medallion Architecture)

## 1. Overview
- The **Silver Layer** performs light transformations and data cleaning on **Bronze Layer** tables.
- In this step, we process only three Bronze tables:
  - `bronze_orders`
  - `bronze_products`
  - `bronze_users`
- The **Silver Layer** is created using **`ref()`** Jinja function to define model dependencies.

---

## 2. The `ref()` Function
- Used to reference **upstream DBT models** (other SQL models).
- Syntax:
  ```jinja
  {{ ref('model_name') }}
  ```
- DBT uses it to:
  - Establish model lineage.
  - Determine the correct **execution order** (bronze before silver).
- Works similarly to `source()` but applies to **models**, not raw tables.

---

## 3. Creating the Silver Orders Model

### File: `silver_orders.sql`
```sql
SELECT
    id,
    DATE(created_at) AS order_date,            -- Convert timestamp to date
    user_id,
    product_id,
    quantity,
    unit_price,
    quantity * unit_price AS order_amount      -- Calculate row-level order total
FROM {{ ref('bronze_orders') }}
```

**Key Transformations**
- Extracted `order_date` using `DATE()` (Databricks SQL-specific).
- Added a calculated column `order_amount = quantity * unit_price`.
- Referenced the upstream `bronze_orders` model with `ref()`.

---

## 4. Creating the Silver Products Model

### File: `silver_products.sql`
```sql
SELECT
    id,
    created_at,
    title AS product_name,
    category,
    vendor,
    price
FROM {{ ref('bronze_products') }}
```

**Transformation**
- Renamed `title` to `product_name`.

---

## 5. Creating the Silver Users Model

### File: `silver_users.sql`
```sql
SELECT
    id,
    created_at,
    city,
    state,
    YEAR(birth_date) AS birth_year,       -- Extract only the year
    source AS sales_channel               -- Rename column
FROM {{ ref('bronze_users') }}
```

**Transformations**
- Removed unnecessary columns: `name`, `email`, `zip`.
- Extracted **birth year**.
- Aliased **source → sales_channel**.

---

## 6. Running the Models
Run all transformations:
```bash
dbt run
```

**Execution Order**
1. DBT processes **bronze models**.
2. Then runs **silver models** (as defined by `ref()` dependencies).

### Output
- Three new tables created:
  - `silver_orders`
  - `silver_products`
  - `silver_users`
- All materialized as **tables**.

---

## 7. Validation in Databricks
- Refresh your schema to verify the new tables:
  - **`silver_orders`** → contains calculated `order_amount` and formatted `order_date`.
  - **`silver_products`** → renamed `product_name` field.
  - **`silver_users`** → `sales_channel` alias and `birth_year` derived.

### Example: Verifying `order_date`
If the `order_date` column is stored as a string, cast it:
```sql
SELECT
    DATE(created_at) AS order_date
FROM {{ ref('bronze_orders') }}
```

Re-run:
```bash
dbt run
```

---

## 8. Committing Changes
Commit to the current branch:
```text
Commit message: "Added silver layer models"
```

---

## 9. Summary

| Concept | Description |
|----------|-------------|
| **ref()** | References upstream DBT models to establish dependencies. |
| **Silver Layer** | Performs cleaning, transformation, and minor enrichment. |
| **Execution Order** | DBT automatically runs dependent bronze models first. |
| **Materialization** | All models are created as tables (per `dbt_project.yml`). |
| **Output Tables** | `silver_orders`, `silver_products`, and `silver_users`. |

**Key Takeaway:**  
The Silver Layer refines raw bronze data into clean, structured, and analysis-ready tables while maintaining lineage and dependency management through `ref()` functions.

# Creating the Gold Layer in DBT (Medallion Architecture)

## 1. Overview
- The **Gold Layer** contains business-ready aggregated data for analytics and reporting.  
- It is built on top of the **Silver Layer** models.  
- In this lecture, we create two **Gold** tables:
  1. `gold_daily_sales` – total daily revenue by product and location.  
  2. `gold_daily_avg_rating` – average daily rating for each product.

---

## 2. Gold Daily Sales Model

### Purpose
Aggregates total sales and orders by product, category, vendor, and customer location on a daily basis.

### File: `gold_daily_sales.sql`
```sql
SELECT
    o.order_date,
    SUM(o.order_amount) AS total_revenue,
    p.product_name,
    p.category,
    p.vendor,
    u.city,
    u.state,
    u.sales_channel
FROM {{ ref('silver_orders') }} AS o
LEFT JOIN {{ ref('silver_products') }} AS p
    ON o.product_id = p.id
LEFT JOIN {{ ref('silver_users') }} AS u
    ON o.user_id = u.id
GROUP BY ALL
```

### Explanation
| Concept | Description |
|----------|-------------|
| **Joins** | Combines `silver_orders`, `silver_products`, and `silver_users` to enrich order data. |
| **Aggregation** | Uses `SUM(order_amount)` to calculate total daily revenue. |
| **`GROUP BY ALL`** | Databricks-specific shortcut that groups by all non-aggregated columns. |
| **`ref()` Function** | References upstream silver models, ensuring DBT runs them first. |

### Output Example
| order_date | total_revenue | product_name | category | vendor | city | state | sales_channel |
|-------------|---------------|---------------|-----------|---------|------|-------|----------------|
| 2024-04-01  | 1250.00       | Collar A      | Accessories | PetCo | NYC | NY | online |

---

## 3. Gold Daily Average Rating Model

### Purpose
Calculates the average product rating per day using review data.

### File: `gold_daily_avg_rating.sql`
```sql
SELECT
    DATE(DATE_FORMAT(r.createdat, 'yyyy-MM-dd')) AS review_date,
    r.product_id,
    p.product_name,
    AVG(r.rating) AS avg_rating
FROM {{ ref('bronze_reviews') }} AS r
LEFT JOIN {{ ref('silver_products') }} AS p
    ON r.product_id = p.id
GROUP BY ALL
```

### Explanation
| Concept | Description |
|----------|-------------|
| **Source Tables** | Combines `bronze_reviews` (raw reviews) with `silver_products`. |
| **Date Conversion** | Extracts date from timestamp using `DATE_FORMAT` and `DATE()`. |
| **Aggregation** | Calculates daily average ratings per product. |
| **Aliasing** | Columns renamed for readability: `review_date`, `avg_rating`. |

### Output Example
| review_date | product_id | product_name | avg_rating |
|--------------|-------------|---------------|-------------|
| 2024-04-01   | 101         | Collar A      | 4.5         |

---

## 4. Running the Gold Models
To execute all models (bronze → silver → gold):
```bash
dbt run
```

**Execution Order:**
1. Bronze layer models
2. Silver layer models
3. Gold layer models (automatically sequenced by DBT based on `ref()` dependencies)

**Expected Result:**
- New tables created:
  - `gold_daily_sales`
  - `gold_daily_avg_rating`

---

## 5. Validation in Databricks
After running:
1. Open **Catalog Explorer**.
2. Refresh the schema under your DBT project catalog.
3. Verify:
   - `gold_daily_sales` contains aggregated revenue and location data.
   - `gold_daily_avg_rating` shows per-product daily ratings.

---

## 6. Commit Changes
Commit your updates:
```text
Commit message: "Added gold layer models"
```

---

## 7. Summary

| Concept | Description |
|----------|-------------|
| **Gold Layer** | Final curated tables for analytics and BI dashboards. |
| **`ref()` Function** | Maintains lineage and correct execution order. |
| **`GROUP BY ALL`** | Databricks syntax simplifying group-by logic. |
| **`gold_daily_sales`** | Daily aggregated sales and order metrics. |
| **`gold_daily_avg_rating`** | Daily average rating per product. |

**Key Takeaway:**  
The **Gold Layer** turns cleaned Silver data into high-value aggregated datasets — ready for dashboards, KPIs, and business insights, completing the Medallion Architecture pipeline.

# Structuring and Naming Conventions in a DBT Project

## 1. Overview
A **well-structured DBT project** with clear **naming conventions** improves:
- Clarity and maintainability.
- Collaboration between team members.
- Data lineage understanding.
- Scalability for growing projects.

By introducing **folders for each Medallion layer** (Bronze, Silver, Gold) and consistent model naming, navigation becomes more intuitive and manageable.

---

## 2. Folder Structure Overview

DBT recommends organizing models into subfolders for:
- **Staging** → equivalent to **Bronze layer**
- **Intermediate** → equivalent to **Silver layer**
- **Marts** → equivalent to **Gold layer**

For this project (Databricks + Medallion Architecture), we’ll use:
```text
models/
├── sources/
│   └── landing_sources.yml
├── bronze/
│   ├── bronze_orders.sql
│   ├── bronze_products.sql
│   ├── bronze_reviews.sql
│   └── bronze_users.sql
├── silver/
│   ├── silver_orders.sql
│   ├── silver_products.sql
│   └── silver_users.sql
└── gold/
    ├── gold_sales__daily.sql
    └── gold_avg_rating__daily.sql
```

---

## 3. Recommended Naming Convention

### Pattern
```text
<layer>_<subject>__<context>
```

| Component | Description | Example |
|------------|-------------|----------|
| **Layer** | Bronze / Silver / Gold | `gold` |
| **Subject / Topic** | Entity or data domain | `sales`, `orders`, `users` |
| **Context** | Optional, for aggregation or granularity | `__daily`, `__monthly` |

### Examples
| Model Name | Meaning |
|-------------|----------|
| `bronze_orders` | Raw ingestion of orders data. |
| `silver_users` | Cleaned user dataset. |
| `gold_sales__daily` | Daily aggregated sales metrics. |
| `gold_avg_rating__daily` | Daily average product ratings. |

**Note:**  
- Double underscores `__` separate the **context/granularity** from the base name.  
- Use lowercase and underscores for readability.  

---

## 4. Folder Creation Steps in DBT Cloud IDE

1. Navigate to **`models/`**.
2. Add the following subfolders:
   - `sources/`
   - `bronze/`
   - `silver/`
   - `gold/`
3. Move respective model files into their layer subfolders:
   - `landing_sources.yml` → `sources/`
   - All Bronze models → `bronze/`
   - All Silver models → `silver/`
   - All Gold models → `gold/`

### Updated Gold Model Names
| Old Name | New Name |
|-----------|-----------|
| `gold_daily_sales.sql` | `gold_sales__daily.sql` |
| `gold_daily_avg_rating.sql` | `gold_avg_rating__daily.sql` |

---

## 5. Important Notes on Model Referencing

- Moving files into subfolders **does not affect references**.
- The `ref()` function only depends on the **model name**, not its path.
  ```jinja
  {{ ref('silver_orders') }}   # Works even if silver_orders.sql is in a subfolder
  ```

As long as the file remains within the `models/` directory, DBT can locate and reference it correctly.

---

## 6. Running and Cleaning Up

### Run All Models
```bash
dbt run
```

### Manual Cleanup in Databricks
Since DBT uses **CREATE OR REPLACE TABLE**, old tables with outdated names remain.
Delete them manually:
1. Go to **Catalog Explorer**.
2. Locate old tables (`gold_daily_sales`, `gold_daily_avg_rating`).
3. Click **⋮ → Delete**.

### Verify
After running DBT again:
- `gold_sales__daily` and `gold_avg_rating__daily` tables should now appear.

---

## 7. Commit and Sync
Commit your structured project:
```text
Commit message: "Added folder structure to project and updated gold model names"
```

---

## 8. Summary

| Concept | Description |
|----------|-------------|
| **Folder structure** | Organizes models into logical layers (Bronze, Silver, Gold). |
| **Naming conventions** | Maintain consistent, descriptive naming for models. |
| **DBT ref()** | References models by name regardless of folder path. |
| **Manual cleanup** | Old tables must be deleted if renamed. |

**Key Takeaway:**  
A clear folder hierarchy and consistent naming convention make your DBT project **scalable**, **readable**, and **collaboration-friendly**, while preserving full compatibility with the **Medallion Architecture** design.

# Introduction to Properties and Configurations in DBT

## 1. Overview

In DBT, **resources** (such as models, sources, seeds, and snapshots) can have:
- **Properties** → Descriptive metadata (e.g., descriptions, tags, tests, column info).
- **Configurations** → Behavioral settings that control how DBT runs models (e.g., materialization type).

Understanding the difference:
| Concept | Purpose |
|----------|----------|
| **Property** | Describes or documents a resource (metadata). |
| **Configuration** | Defines how DBT should execute or materialize that resource. |

---

## 2. Defining Properties

### Where
- Defined in a YAML file (commonly named **`properties.yml`**) located in the same directory as your models.
- Used for documentation and testing metadata.

### Example
```yaml
version: 2

models:
  - name: silver_orders
    description: "Cleansed order data with calculated fields"
    columns:
      - name: order_amount
        description: "Total amount per order (quantity × unit_price)"
      - name: order_date
        description: "Order creation date"
    tags: ['silver', 'orders']
```

### Common Property Fields
| Property | Description |
|-----------|--------------|
| `description` | Text explaining what the model or column represents. |
| `columns` | Column-level metadata (name, description, tests). |
| `tags` | Used to organize or group related models. |
| `latest_version`, `deprecation_date` | Useful for versioning and lifecycle management. |

---

## 3. Defining Configurations

Configurations tell DBT **how to build** your resources.

### Three Places to Define Configurations
1. **`dbt_project.yml`** → global or folder-level configs.  
2. **`properties.yml`** → model-level configs.  
3. **Model file itself** → inline Jinja config (highest precedence).

---

## 4. Configuration Precedence

| Level | Location | Example | Precedence |
|--------|-----------|----------|-------------|
| **1** | Inside model file | `{{ config(materialized='view') }}` | 🥇 Highest |
| **2** | `properties.yml` | Defined under model `config` block | 🥈 Medium |
| **3** | `dbt_project.yml` | Folder-level or project-level defaults | 🥉 Lowest |

---

## 5. Example: Materialization Configuration

### Base Configuration in `dbt_project.yml`
```yaml
models:
  dbt_project_name:
    +materialized: table              # Default for all models
    gold:
      +materialized: view             # Override for gold models
```

- All models default to **table**.
- Models in the `gold/` folder are **materialized as views**.

### Result
| Folder | Materialization |
|---------|----------------|
| `/models/bronze` | table |
| `/models/silver` | table |
| `/models/gold` | view |

---

## 6. Overriding via `properties.yml`

If you want a specific model (e.g. `gold_sales__daily`) to override the folder-level config:

### File: `models/gold/properties.yml`
```yaml
version: 2

models:
  - name: gold_sales__daily
    config:
      materialized: table
```

**Effect:**  
- Although `gold` models default to *view*,  
  this one model is *table* because model-level config takes precedence.

---

## 7. Overriding via Jinja Config Block (Inline)

### File: `models/gold/gold_sales__daily.sql`
```jinja
{{ config(materialized='view') }}

SELECT
    order_date,
    SUM(order_amount) AS total_revenue
FROM {{ ref('silver_orders') }}
GROUP BY ALL
```

**Effect:**  
This inline `config()` **overrides both** the YAML configurations.

---

## 8. Confirming Materialization in Databricks

After running:
```bash
dbt run
```

### Verification
- In **DBT logs**, you’ll see:
  - `CREATE TABLE` for tables.
  - `CREATE VIEW` for views.
- In **Databricks Catalog Explorer**, confirm:
  - `silver_users` → table
  - `gold_sales__daily` → view
  - `gold_avg_rating__daily` → view

---

## 9. Cleanup and Commit

After demonstration:
1. Reset project so all models use **table** materialization.
   - Remove gold-specific configuration.
   - Remove `properties.yml` and inline config blocks.
2. Keep only:
   ```yaml
   models:
     dbt_project_name:
       +materialized: table
   ```

### Commit Changes
```text
Commit message: "Updated model materialization config in dbt_project.yml"
```

---

## 10. Summary

| Concept | Description |
|----------|-------------|
| **Property** | Adds descriptive metadata, tags, or documentation. |
| **Configuration** | Defines runtime behavior such as materialization type. |
| **Configuration precedence** | Model file > properties.yml > dbt_project.yml. |
| **Use Case** | Gold layer → often views; Silver/Bronze → usually tables. |

**Key Takeaway:**  
Use **properties** for documentation and testing, and **configurations** for control over materialization and execution. Understanding precedence ensures predictable and maintainable DBT projects.

# Custom Schema Configuration in DBT (Bronze, Silver, Gold)

## 1. Overview
By default, when you run your DBT models, they are created in the **developer schema** — typically:
```text
dbt_<firstnameinitial><lastname>
```
This is ideal for **development** since each developer works in isolation without overwriting others’ data.

However, in **testing** or **production**, you’ll usually want models separated into shared schemas — e.g.:
- `bronze`
- `silver`
- `gold`

This lecture explains how to:
1. Assign custom schemas to your models.
2. Understand DBT’s default schema suffixing behavior.
3. Override that behavior using a **custom macro**.

---

## 2. Defining Schema Configuration in `dbt_project.yml`

### Step 1: Update the `models` section
We’ll specify both **materialization** and **schema** per folder.

```yaml
models:
  dbt_project_name:
    bronze:
      +materialized: table
      +schema: bronze

    silver:
      +materialized: table
      +schema: silver

    gold:
      +materialized: table
      +schema: gold
```

This configuration ensures:
- Bronze models → go to `bronze` schema.
- Silver models → go to `silver` schema.
- Gold models → go to `gold` schema.

---

## 3. Alternative Ways to Set Custom Schema

You can also configure schema at a **model** or **file** level.

### Option A – In `properties.yml`
```yaml
version: 2

models:
  - name: gold_avg_rating__daily
    config:
      schema: gold
```

### Option B – Inline in SQL Model File
```jinja
{{ config(schema='gold') }}

SELECT * FROM {{ ref('silver_orders') }}
```

---

## 4. Default DBT Behavior: Schema Suffixing

After running:
```bash
dbt run
```

You might notice that DBT creates schemas like:
```text
dbt_<your_name>_bronze
dbt_<your_name>_silver
dbt_<your_name>_gold
```

This happens because of DBT’s **built-in macro** logic:
```jinja
{% macro generate_schema_name(custom_schema_name, node) -%}
    {%- set default_schema = target.schema -%}
    {%- if custom_schema_name is none -%}
        {{ default_schema }}
    {%- else -%}
        {{ default_schema }}_{{ custom_schema_name | trim }}
    {%- endif -%}
{%- endmacro %}
```

In other words:
> If you define a custom schema, DBT **prefixes** it with the developer’s default schema name.

---

## 5. Overriding Schema Prefixing with a Custom Macro

To make DBT use **exactly** the schema name you define (without prefixing):

### Step 1: Create a Macro File
In the **`macros/`** directory, create:
```text
generate_schema_name.sql
```

### Step 2: Paste and Modify the Code
```jinja
{% macro generate_schema_name(custom_schema_name, node) -%}
    {%- if custom_schema_name is none -%}
        {{ target.schema }}
    {%- else -%}
        {{ custom_schema_name | trim }}
    {%- endif -%}
{%- endmacro %}
```

### Step 3: Run DBT Again
```bash
dbt run
```

### ✅ Result
Schemas are now **exactly** what you specify:
```text
bronze
silver
gold
```

Each model is correctly materialized in its respective schema.

---

## 6. Clean Up Old Prefixed Schemas

To remove the old prefixed schemas (e.g. `dbt_<name>_bronze`), run:
```sql
DROP SCHEMA dbt_<name>_bronze CASCADE;
DROP SCHEMA dbt_<name>_silver CASCADE;
DROP SCHEMA dbt_<name>_gold CASCADE;
```

> Use `CASCADE` to also drop contained tables.

After dropping, you should only see:
- `bronze`
- `silver`
- `gold`
- and your developer schema (for dev testing).

---

## 7. Final Cleanup and Commit

### Update `dbt_project.yml`
Keep only the organized schema configuration:
```yaml
models:
  dbt_project_name:
    bronze:
      +materialized: table
      +schema: bronze
    silver:
      +materialized: table
      +schema: silver
    gold:
      +materialized: table
      +schema: gold
```

### Delete Old Files
- Remove the now unnecessary `gold_properties.yml`
- Remove the inline config block from the gold model.

### Commit Changes
```text
Commit message: "Added custom schema macro and updated schema config in dbt_project.yml"
```

---

## 8. Summary

| Concept | Description |
|----------|-------------|
| **Default behavior** | DBT prefixes schemas with your developer schema name. |
| **Custom schemas** | Can be set at the project, property, or model level. |
| **Macro override** | Removes the default prefix behavior. |
| **Use case** | Organize models cleanly into `bronze`, `silver`, and `gold` schemas. |
| **Cascade drop** | Removes old schema structures safely. |

**Key Takeaway:**  
By configuring schema settings and overriding DBT’s default macro, you gain full control over how and where your data models are deployed — keeping your **Bronze, Silver, and Gold layers** clean, consistent, and production-ready.

# Node Selection Syntax in DBT

## 1. Overview
DBT’s **node selection syntax** allows you to specify **which models or resources to run** during execution.  
It’s used across multiple DBT commands (e.g. `run`, `test`, `build`, `docs`, `seed`), but in this lecture, we’ll focus on `dbt run`.

You can use selection syntax to:
- Run specific models.
- Include upstream/downstream dependencies.
- Exclude specific models.
- Filter by tags or configurations.

---

## 2. Running a Single Model

### Syntax
```bash
dbt run --select <model_name>
```

### Example
```bash
dbt run --select bronze_orders
```

✅ Runs **only** the model `bronze_orders`.

> You don’t need to use quotes unless the name contains spaces.

---

## 3. Selecting a Model and Its Dependencies

DBT supports dependency traversal using the **`+` operator**.

| Symbol | Meaning |
|---------|----------|
| `+model` | Include **upstream** dependencies. |
| `model+` | Include **downstream** dependencies. |
| `+model+` | Include **both** upstream and downstream dependencies. |

### Example 1 – Downstream Dependencies
```bash
dbt run --select bronze_orders+
```

This runs:
- `bronze_orders`
- All models that depend on it (e.g. `silver_orders`, `gold_sales__daily`)

### Example 2 – Limit Dependency Depth
```bash
dbt run --select bronze_orders+1
```

Runs only the **first level** of downstream dependencies:
- `bronze_orders`
- `silver_orders`

---

## 4. Running Multiple Models

You can run multiple models by separating them with spaces.

### Example
```bash
dbt run --select "bronze_orders+ bronze_products+ bronze_users+"
```

✅ Runs each listed model and their downstream dependencies.

---

## 5. Handling Typos or Missing Models

If a model name doesn’t exist, DBT simply **runs nothing**:
```bash
dbt run --select gold_orders__daily
# (no output)
```

✅ Always double-check your model names before running commands.

---

## 6. Running Upstream Dependencies

You can also run upstream dependencies using the **`+` before** the model name.

### Example
```bash
dbt run --select +gold_sales__daily
```

This runs:
- All upstream models used to build `gold_sales__daily`
  - Bronze models
  - Silver models
  - Gold model itself

---

## 7. Excluding Models

You can exclude models from execution using `--exclude`.

### Example 1 – Exclude a Single Model
```bash
dbt run --exclude gold_sales__daily
```

✅ Runs all models **except** `gold_sales__daily`.

---

## 8. Selecting or Excluding by Tags

You can tag models using the **`config` block**, `properties.yml`, or `dbt_project.yml`.

### Example – Tag a Model as PII
```jinja
{{ config(tags=["contains_pii"]) }}

SELECT
    user_id,
    email
FROM {{ ref('bronze_raw_users') }}
```

Now DBT knows this model contains sensitive data.

### Example – Exclude All Models with a Tag
```bash
dbt run --exclude tag:contains_pii
```

✅ Runs all models except those tagged `contains_pii`.

---

## 9. Summary of Selection Syntax

| Pattern | Description | Example |
|----------|--------------|----------|
| `<model>` | Run the specific model | `dbt run --select silver_orders` |
| `<model>+` | Run model + downstream | `dbt run --select bronze_orders+` |
| `+<model>` | Run model + upstream | `dbt run --select +gold_sales__daily` |
| `+<model>+` | Run full lineage (up + down) | `dbt run --select +silver_orders+` |
| `<model>+1` | Run one level of downstream deps | `dbt run --select bronze_orders+1` |
| Multiple models | Run multiple models | `dbt run --select "bronze_orders bronze_products"` |
| `--exclude <model>` | Exclude model(s) | `dbt run --exclude gold_sales__daily` |
| `--exclude tag:<tag>` | Exclude by tag | `dbt run --exclude tag:contains_pii` |

---

## 10. Practical Flow Example

1. Run only the `bronze_orders` model:
   ```bash
   dbt run --select bronze_orders
   ```

2. Run the model and its downstream dependencies:
   ```bash
   dbt run --select bronze_orders+
   ```

3. Run all but exclude PII models:
   ```bash
   dbt run --exclude tag:contains_pii
   ```

4. Commit your changes:
   ```bash
   # After tagging a model
   git commit -m "Added PII tag to bronze_users model"
   ```


---

## 11. Key Takeaways

✅ **`--select`** and **`--exclude`** let you precisely control which models DBT runs.  
✅ Use **`+`** to include dependencies (upstream/downstream).  
✅ Use **tags** to classify and manage sensitive or grouped data models.  
✅ You can chain and combine multiple selection operators for complex filters.  

**In short:** DBT’s node selection syntax gives you granular control — allowing you to run, skip, or target exactly the models you need for efficient, safe development.

# Introduction to Testing in DBT

## 1. Overview

Testing in DBT is a core feature that ensures the **integrity**, **reliability**, and **accuracy** of your data models.  
It helps detect data anomalies early and ensures assumptions hold true across transformations.

There are **two main types of tests** in DBT:
1. **Generic Tests** — pre-built, reusable tests.
2. **Singular Tests** — custom, SQL-based tests for complex logic.

---

## 2. Why Testing Matters in DBT

Testing helps you:
- ✅ Validate assumptions about data.
- ✅ Detect data quality issues before production.
- ✅ Ensure referential integrity across models.
- ✅ Build trust and confidence in data pipelines.

---

## 3. Generic Tests

### Definition
Generic tests are **pre-built reusable tests** that can be applied directly to models or columns with minimal configuration.

You do **not** need to write SQL for these.  
They are **declarative**, meaning you describe what you want to test, not how to do it.

### Common Generic Tests
| Test | Purpose |
|------|----------|
| **unique** | Ensures all values in a column are unique. |
| **not_null** | Ensures there are no NULL values in the column. |
| **accepted_values** | Checks that all values belong to a predefined list. |
| **relationships** | Validates referential integrity between two tables. |

### Example
```yaml
version: 2

models:
  - name: silver_orders
    columns:
      - name: order_id
        tests:
          - unique
          - not_null
      - name: order_status
        tests:
          - accepted_values:
              values: ['pending', 'shipped', 'delivered']
      - name: customer_id
        tests:
          - relationships:
              to: ref('silver_customers')
              field: customer_id
```

✅ DBT automatically generates SQL behind the scenes for each test.

---

## 4. Singular Tests

### Definition
Singular tests are **custom SQL queries** used for scenarios that **generic tests can’t handle** —  
for example, enforcing business rules or complex data constraints.

You create these tests manually inside the `tests/` directory.

### Example: Checking Order Validity
```sql
-- File: tests/test_orders_have_valid_quantity.sql
SELECT *
FROM {{ ref('silver_orders') }}
WHERE quantity <= 0
```

✅ If this query returns **any rows**, the test **fails**.  
In DBT, a test passes only when **no records** are returned.

### Typical Use Cases
| Scenario | Example |
|-----------|----------|
| Business rule enforcement | Orders must have `quantity > 0` |
| Data consistency check | Price must equal `unit_price * quantity` |
| Custom data validation | Flag missing or invalid mappings |

---

## 5. Running Tests

You can run tests across your project or on specific models.

| Command | Description |
|----------|-------------|
| `dbt test` | Runs all tests in the project. |
| `dbt test --select model_name` | Runs tests for a specific model. |
| `dbt test --select test_name` | Runs a specific test. |

Example:
```bash
dbt test --select silver_orders
```

✅ DBT will automatically execute all tests (generic + singular) associated with the `silver_orders` model.

---

## 6. Interpreting Results

After running tests:
- ✅ **Passed tests** return **zero rows**.
- ❌ **Failed tests** return one or more rows violating the condition.
- DBT outputs results in both console and the `target/` folder.

---

## 7. When to Use Each Type

| Test Type | When to Use | Example |
|------------|--------------|----------|
| **Generic** | For common, reusable checks | `unique`, `not_null`, `relationships` |
| **Singular** | For specific, custom rules | “All orders must have positive quantity” |

---

## 8. Summary

| Concept | Description |
|----------|-------------|
| **Generic tests** | Built-in, reusable tests defined in YAML. |
| **Singular tests** | Custom SQL queries for advanced or specific logic. |
| **Goal** | Ensure data integrity and quality across models. |
| **Pass condition** | A test passes if the SQL query returns **no rows**. |

---

**Key Takeaway:**  
Testing in DBT isn’t just about catching errors — it’s about building **trust** in your transformations.  
Use **generic tests** for fast validation, and **singular tests** for complex business logic to ensure your data remains accurate and reliable.

# Update on DBT Testing Keyword: `tests` vs `data_tests`

## 1. Overview

In recent DBT releases, the keyword used in YAML configuration files for defining tests has been **updated**.

Previously, tests were defined under the keyword:

```yaml
tests:
```

However, DBT has introduced a **new keyword**:

```yaml
data_tests:
```

This change helps distinguish **data quality tests** (the ones we write for models and columns) from **other upcoming test types** that DBT plans to support (for example, schema or functional tests in future versions).

---

## 2. Current Situation

| Keyword | Status | Notes |
|----------|---------|-------|
| `tests` | ✅ Supported (backward compatible) | Used in existing DBT projects and tutorials. |
| `data_tests` | ✅ New recommended keyword | More explicit and future-proof. |

Both options currently **work identically** — there’s no functional difference.

---

## 3. Example: Old vs New Syntax

### Using the classic `tests` keyword (still valid)
```yaml
version: 2

models:
  - name: silver_orders
    columns:
      - name: order_id
        tests:
          - unique
          - not_null
```

### Using the new `data_tests` keyword
```yaml
version: 2

models:
  - name: silver_orders
    columns:
      - name: order_id
        data_tests:
          - unique
          - not_null
```

✅ Both definitions will execute the same tests and produce the same results.

---

## 4. Recommendation for This Course

To stay consistent with the code examples in this course:
- Continue using the classic **`tests`** keyword.

However:
- If you want to align with **DBT’s latest standards**, you can safely use **`data_tests`** instead.
- The behavior will remain identical for now.

---

## 5. Migration Tip (If Needed)

If DBT deprecates the old keyword in a future version, you can easily migrate using **find and replace**:

From:
```text
tests:
```
To:
```text
data_tests:
```

This will ensure compatibility with future DBT releases.

---

## 6. Summary

| Keyword | Description | Supported |
|----------|--------------|------------|
| `tests` | Traditional keyword for defining tests in YAML. | ✅ Yes |
| `data_tests` | New keyword introduced to clarify test type. | ✅ Yes |

**Key takeaway:**  
> You can use either `tests` or `data_tests` — both work today.  
> For consistency with this course, continue using `tests`.  
> If you prefer to follow DBT’s latest convention, switch to `data_tests`.

---  
**In short:**  
🧩 Both syntaxes are valid.  
📚 This course will use `tests:` for simplicity.  
🔮 `data_tests:` is the newer, forward-compatible option.

# Generic Data Tests in DBT — `not_null` and `unique`

## 1. Overview

In this lecture, we’ll explore **generic data tests** in DBT — specifically the **`not_null`** and **`unique`** tests.  
These are pre-built, reusable tests that help ensure **data integrity** across your models and sources.

---

## 2. Why Use Generic Tests?

Generic tests are useful for validating:
- ✅ Data **completeness** (`not_null`)
- ✅ Data **uniqueness** (`unique`)
- ✅ Data **integrity** (relationships)
- ✅ Data **consistency** (accepted values)

You don’t need to write any SQL — DBT automatically generates it.

---

## 3. Example Data Source

We’ll apply tests to our **sources** defined in the YAML file — specifically the `landing_sources.yml` file.  
Our sources include:
- `orders`
- `products`
- `reviews`
- `users`

Each table contains an **`id`** column that should be **unique** and **not null**.

---

## 4. Adding Tests to the `orders` Source

### Step 1 — Define the column and tests
In your `landing_sources.yml` file, add a `columns` section under the `orders` source definition.

```yaml
version: 2

sources:
  - name: landing
    tables:
      - name: orders
        columns:
          - name: id
            tests:
              - unique:
                  config:
                    severity: warn
              - not_null:
                  config:
                    severity: warn
```

✅ **Explanation:**
- `unique` — checks that each `id` is distinct.
- `not_null` — ensures no missing values.
- `config: severity: warn` — downgrades test failure to a **warning** instead of stopping the pipeline (default is `error`).

---

## 5. Running the Tests

### Command:
```bash
dbt test
```

### Output Example:
```text
Completed successfully

Passed 2 tests:
- source.unique.landing.orders.id
- source.not_null.landing.orders.id
```

✅ Both tests passed successfully.

---

## 6. Testing a Known Failure

Let’s deliberately create a failing test for demonstration.

### Add a test for `product_id`:
```yaml
      - name: product_id
        tests:
          - unique:
              config:
                severity: error
```

### Run:
```bash
dbt test
```

### Result:
```text
Failure in test source.unique.landing.orders.product_id
Result: FAIL
```

❌ The test fails — as expected — since `product_id` can repeat across orders.

Now, if we change the **severity** to `warn`, DBT won’t fail the run, it will just log a warning.

---

## 7. Applying the Same Tests to All Sources

Since each source (`orders`, `products`, `reviews`, `users`) has an `id` column,  
we can reuse the same test block for all.

### Example:
```yaml
version: 2

sources:
  - name: landing
    tables:
      - name: orders
        columns:
          - name: id
            tests:
              - unique:
                  config:
                    severity: warn
              - not_null:
                  config:
                    severity: warn

      - name: products
        columns:
          - name: id
            tests:
              - unique:
                  config:
                    severity: warn
              - not_null:
                  config:
                    severity: warn

      - name: reviews
        columns:
          - name: id
            tests:
              - unique:
                  config:
                    severity: warn
              - not_null:
                  config:
                    severity: warn

      - name: users
        columns:
          - name: id
            tests:
              - unique:
                  config:
                    severity: warn
              - not_null:
                  config:
                    severity: warn
```

### Run all tests again:
```bash
dbt test
```

✅ Output:
```text
8 tests passed, 0 warnings, 0 errors
```

---

## 8. Adjusting Test Severity

### Available options:
| Setting | Behavior |
|----------|-----------|
| `severity: error` | ❌ Fails the run (default) |
| `severity: warn` | ⚠️ Logs a warning, pipeline continues |

Example:
```yaml
- unique:
    config:
      severity: warn
```

---

## 9. Summary

| Test | Purpose | Default Behavior | Example Use Case |
|------|----------|------------------|------------------|
| `not_null` | Ensures no null values exist. | ❌ Error | IDs, Primary Keys |
| `unique` | Ensures all values are distinct. | ❌ Error | Primary Keys, Unique Identifiers |
| `severity: warn` | Converts errors to warnings. | ✅ Safe for non-critical checks | Product IDs, Optional Columns |

✅ **Key Takeaways:**
- Generic tests are defined in YAML under the `columns` key.
- Use `dbt test` to run all data tests.
- Use `severity: warn` to log warnings without failing the pipeline.
- Reuse the same test definitions across all relevant tables for consistency.

---

### Commit Message Example
> `Added generic tests (unique, not_null) for source ID columns with warning severity`

---

With this, your **data quality layer** is now enforced at the source level using **generic DBT tests**.

# Generic Data Tests in DBT — `accepted_values` and `relationships`

## 1. Overview

In this lecture, we’ll continue working with DBT’s **generic data tests**, focusing on two additional types:

- ✅ `accepted_values` — ensures that a column only contains predefined valid values.  
- ✅ `relationships` — ensures referential integrity between related tables.

We’ll apply these tests to **models** (not sources) using a **properties YAML file**.

---

## 2. Context: The Bronze Products Model

We’ll work with the **`bronze_products`** model from the **bronze** schema.

### Sample Columns:
| Column | Description |
|---------|--------------|
| `id` | Unique product identifier (Primary Key) |
| `category` | Product category (`gadget`, `gizmo`, `doohickey`, or `widget`) |

We’ll apply:
1. An `accepted_values` test on `category`  
2. A `relationships` test between `bronze_products.id` and `bronze_orders.product_id`

---

## 3. Creating a `properties.yaml` for the Bronze Folder

Inside your **`models/bronze/`** directory, create a new file called **`properties.yaml`**.

### File Structure:
```yaml
version: 2

models:
  - name: bronze_products
    columns:
      - name: category
        tests:
          - accepted_values:
              values: ['doohickey', 'widget', 'gizmo', 'gadget']
```

✅ **Explanation:**
- `version: 2` — Required by DBT for modern YAML schema.
- `models:` — Defines model-level metadata and tests.
- `accepted_values:` — Test ensures that only these four strings are present in `category`.

---

## 4. Running the Accepted Values Test

### Command:
```bash
dbt test
```

### Example Output:
```text
Completed successfully

Passed 1 test:
- accepted_values_bronze_products_category_accepted_values_doohickey_widget_gizmo_gadget
```

✅ The test passed since all category values match the accepted list.

---

## 5. Testing a Failure Case

Let’s deliberately break the test by removing one of the accepted values (for example, `gadget`):

```yaml
values: ['doohickey', 'widget', 'gizmo']
```

Run again:

```bash
dbt test
```

### Output:
```text
Failure in test accepted_values_bronze_products_category
Got 1 result, expected 0.
```

❌ The test fails because `gadget` exists in the data but not in the allowed list.

---

## 6. Adding a Relationships Test

Now we’ll ensure **referential integrity** between:
- `bronze_products.id` (primary key)  
- `bronze_orders.product_id` (foreign key)

Add another test block in the same file:

```yaml
version: 2

models:
  - name: bronze_products
    columns:
      - name: category
        tests:
          - accepted_values:
              values: ['doohickey', 'widget', 'gizmo', 'gadget']

      - name: id
        tests:
          - relationships:
              to: ref('bronze_orders')
              field: product_id
```

✅ **Explanation:**
- `relationships:` — Ensures that every `product_id` in `bronze_orders` exists as an `id` in `bronze_products`.
- `to:` — Uses the **`ref()`** function to point to the related model.
- `field:` — Specifies the column in the target model to validate against.

---

## 7. Run the Relationships Test

### Command:
```bash
dbt test
```

### Output:
```text
Completed successfully

Passed 2 tests:
- accepted_values_bronze_products_category
- relationships_bronze_products_id_to_bronze_orders_product_id
```

✅ The test passes, confirming that all foreign keys (`product_id`) are valid.

---

## 8. Summary of Generic Tests

| Test | Purpose | Example |
|------|----------|----------|
| `unique` | Ensures values are distinct | `id` in `orders` |
| `not_null` | Ensures no missing values | `id` in `reviews` |
| `accepted_values` | Restricts column values to a predefined list | `category` in `products` |
| `relationships` | Enforces referential integrity between tables | `product_id` ↔ `id` |

---

## 9. Cleanup

Since the tests on source data are sufficient for this project, you can now delete the model-level test file:

```bash
rm models/bronze/properties.yaml
```

---

## 10. Commit Message Example

> `Added generic model-level tests: accepted_values and relationships (bronze_products)`

---

✅ **Key Takeaways**
- You can add tests to **models** via `properties.yaml`, not just sources.
- `accepted_values` restricts column values to a predefined set.
- `relationships` ensures data consistency between related tables.
- Both tests enhance data quality and model reliability.

# Singular (Custom) Tests in DBT — Using SQL Files in the `tests/` Directory

## 1. Overview

DBT provides two main types of tests:
- **Generic tests** (defined in YAML)
- **Singular tests** (defined as standalone SQL files)

In this section, we’ll focus on **singular tests**, which allow you to write **custom SQL logic** to enforce **business rules** that generic tests cannot cover.

---

## 2. What Are Singular Tests?

Singular tests are defined inside the **`tests/`** directory.

Each **SQL file** in this directory represents one test.  
When you run `dbt test`, DBT executes each SQL file as a query.

✅ The **test passes** if the query returns **zero rows**.  
❌ The **test fails** if **any rows are returned**.

---

## 3. When to Use Singular Tests

Singular tests are ideal for:
- Validating **complex business rules**
- Checking **cross-model relationships**
- Ensuring **data assumptions**
- Detecting **data anomalies** that generic tests can’t handle

---

## 4. Example Scenario

We’ll create a singular test to ensure that:
- `quantity` ≥ 0  
- `unit_price` ≥ 0  

in the **`landing.orders`** table.

Negative quantities or prices would make no business sense, so this rule enforces that.

---

## 5. Creating the Test File

Navigate to your `tests/` directory and create a new file:

**File name:**  
`assert_source_orders_non_negative.sql`

> ✅ Tip: It’s a good practice to use descriptive names like  
> `assert_<stage>_<table>_<rule>.sql`.

---

## 6. Writing the SQL Logic

### Step 1 — Define the query
```sql
SELECT *
FROM {{ source('landing', 'orders') }}
WHERE unit_price < 0 OR quantity < 0
```

✅ **Explanation:**
- The `source()` function points to the **source table**.
- The `WHERE` clause filters rows violating your rule.
- If **no rows** are returned → the test **passes**.
- If **rows exist** → the test **fails**.

---

## 7. Running the Test

### Command:
```bash
dbt test
```

### Output Example:
```text
Completed successfully

1 of 1 PASS singular_test.assert_source_orders_non_negative
```

✅ The test passed — no invalid data detected.

---

## 8. Triggering a Failure Example

Let’s modify the query to **intentionally fail** by including zero values:

```sql
SELECT *
FROM {{ source('landing', 'orders') }}
WHERE unit_price <= 0 OR quantity <= 0
```

Now, preview this query in your SQL editor — you’ll see some rows returned (e.g., 10 records where `quantity = 0`).

Run the test again:

```bash
dbt test
```

### Output:
```text
Failure in test singular_test.assert_source_orders_non_negative
Got 10 results, expected 0.
```

❌ The test fails because rows with `quantity = 0` or `unit_price = 0` exist.

---

## 9. Adjusting Test Severity

By default, failing singular tests have **`severity: error`**, which stops the pipeline.  
You can downgrade this to **`warn`** by using a **`config`** block at the top of the SQL file.

### Add config block:
```sql
{{ config(severity = 'warn') }}

SELECT *
FROM {{ source('landing', 'orders') }}
WHERE unit_price < 0 OR quantity < 0
```

✅ Now, failing this test will **not break the run**, it will only **log a warning**.

---

## 10. Re-running the Test

Run again:

```bash
dbt test
```

### Output Example:
```text
Completed with warnings

1 warning in test singular_test.assert_source_orders_non_negative
```

⚠️ The test triggered a warning but did not stop execution.

---

## 11. Final Version of the Test File

```sql
{{ config(severity = 'warn') }}

SELECT *
FROM {{ source('landing', 'orders') }}
WHERE unit_price < 0 OR quantity < 0
```

✅ Ensures all prices and quantities are non-negative.  
✅ Warns instead of failing if issues occur.

---

## 12. Summary

| Concept | Description |
|----------|--------------|
| **Directory** | `tests/` |
| **File type** | `.sql` |
| **Pass condition** | Query returns 0 rows |
| **Fail condition** | Query returns ≥ 1 row |
| **Config option** | `{{ config(severity='warn') }}` |
| **Example use** | Validate business logic beyond generic tests |

---

## 13. Commit Message Example

> `Added singular test for non-negative quantity and unit_price in source orders`

---

✅ **Key Takeaways**
- Singular tests are defined in **SQL files** inside the `tests/` folder.  
- They run alongside YAML-based generic tests when you execute `dbt test`.  
- Use them for **custom, complex validation logic** that generic tests can’t handle.  
- Use the `config` block to control **severity** (warn/error).  

# The `dbt build` Command — Combining Model Execution and Testing

## 1. Overview

The **`dbt build`** command is a powerful addition to DBT’s workflow.  
It combines multiple key steps — **model execution** and **testing** — into one streamlined process.

In essence:
> ✅ `dbt build` = `dbt run` + `dbt test`

This means DBT will:
1. **Build (materialize)** your models.  
2. **Run all associated tests** (generic + singular).  
3. **Stop dependent builds** if a test fails in an earlier stage.

---

## 2. Comparison: `dbt run`, `dbt test`, and `dbt build`

| Command | Purpose | Behavior |
|----------|----------|-----------|
| `dbt run` | Builds models | Executes SQL and materializes data models |
| `dbt test` | Validates data | Runs generic tests (`unique`, `not_null`, etc.) and custom SQL tests |
| `dbt build` | Combines both | Builds and tests models layer by layer with dependency awareness |

---

## 3. DAG — Directed Acyclic Graph

DBT represents your project as a **DAG (Directed Acyclic Graph)** — a **data lineage graph** showing dependencies between models.

For example:

> landing → bronze → silver → gold


- **Landing**: Raw source data.  
- **Bronze**: Initial cleansed data.  
- **Silver**: Refined transformations.  
- **Gold**: Final analytical layer.

---

## 4. Why `dbt build` Is Better Than Sequential Run + Test

### Problem with `dbt run` + `dbt test`:
1. `dbt run` builds all models first.  
2. `dbt test` runs afterward.  
3. ❌ If a test fails, the incorrect model is **already materialized** in the database.

### Problem with `dbt test` before `dbt run`:
- ❌ The tests can’t run — data doesn’t exist yet.

### Solution — `dbt build`:
- ✅ Runs **build and test per layer**.
- ✅ Prevents downstream layers from being built if an upstream test fails.
- ✅ Ensures integrity across dependencies.

---

## 5. Execution Flow of `dbt build`

1. **Run source tests** (validate your raw data).  
2. **If tests pass**, build the **bronze** models.  
3. **Run tests** for the bronze layer.  
4. **If tests pass**, build the **silver** layer.  
5. **Run tests** for the silver layer.  
6. **If tests pass**, build and test the **gold** layer.  
7. ✅ Process completes successfully.  

If **any test fails**, DBT stops downstream materialization immediately.

---

## 6. Example 1 — Running Full Build

### Command:
```bash
dbt build
```

### Output (simplified):
```text
Running 8 tests for source data...
All source tests passed!

Building bronze models...
Building silver models...
Building gold models...
All models built successfully!
```

✅ The process automatically built and tested all layers in dependency order.

---

## 7. Example 2 — Building a Specific Model and Its Dependencies

You can use the **`--select`** argument with the `+` operator to include dependencies.

### Command:
```bash
dbt build --select +gold_sales__daily
```

✅ Explanation:
- `+` — Includes all **upstream dependencies**.
- DBT will:
  1. Test and build all models feeding into `gold_sales__daily`.
  2. Stop if any upstream test fails.

---

## 8. Example 3 — Failing a Test Intentionally

Let’s modify the singular test in the `tests/` directory to make it fail.

**File:** `tests/assert_source_orders_non_negative.sql`

### Before:
```sql
{{ config(severity = 'warn') }}

SELECT *
FROM {{ source('landing', 'orders') }}
WHERE unit_price < 0 OR quantity < 0
```

### Modify to Fail:
```sql
{{ config(severity = 'error') }}

SELECT *
FROM {{ source('landing', 'orders') }}
WHERE unit_price <= 0 OR quantity <= 0
```

Run:
```bash
dbt build
```

### Output:
```text
Failure in test assert_source_orders_non_negative
Got 10 results, expected 0.

Skipping downstream models: bronze_orders, silver_orders, gold_sales_daily
```

❌ DBT skipped dependent models since the test failed.

---

## 9. Restoring the Passing Test

To fix the test, revert it to:

```sql
{{ config(severity = 'warn') }}

SELECT *
FROM {{ source('landing', 'orders') }}
WHERE unit_price < 0 OR quantity < 0
```

Then rerun:

```bash
dbt build
```

✅ All models and tests execute successfully again.

---

## 10. Summary

| Command | Runs Models | Runs Tests | Dependency-Aware | Stops on Failure |
|----------|--------------|-------------|------------------|------------------|
| `dbt run` | ✅ | ❌ | ❌ | ❌ |
| `dbt test` | ❌ | ✅ | ❌ | ❌ |
| `dbt build` | ✅ | ✅ | ✅ | ✅ |

✅ **`dbt build` is the recommended command for CI/CD pipelines and production environments.**

---

## 11. Commit Message Example

> `Refactored pipeline to use dbt build for combined model execution and testing`

---

### Key Takeaways
- `dbt build` = `dbt run` + `dbt test`
- It executes layer by layer, respecting dependencies.
- Stops downstream builds when upstream tests fail.
- Perfect for automated data quality enforcement.

# DBT Seeds — Loading Static Data as Tables

## 1. Overview

In **DBT**, *seeds* are **CSV files** that you can upload into your **data lakehouse** as tables.  
They’re perfect for loading **small, static datasets** — such as reference data, mappings, configurations, or lookups — without writing SQL or ETL pipelines.

✅ **Definition:**  
A **seed** is a `.csv` file placed in your project’s **`seeds/`** folder.  
When you run **`dbt seed`**, DBT:
- Reads each CSV file in the `seeds/` directory.
- Uploads it to your lakehouse or warehouse as a table.
- Names the table the same as the CSV file (without the `.csv` extension).

---

## 2. Typical Folder Structure

```text
dbt_project/
├── models/
│   ├── bronze/
│   ├── silver/
│   └── gold/
├── seeds/
│   └── product_categories.csv
├── tests/
└── dbt_project.yml
```

Each CSV in the `seeds/` folder will be created as a separate table.

---

## 3. Creating a Seed File

Let’s create a new seed in **DBT Cloud IDE** (or locally in your project directory).

**File name:** `product_categories.csv`  
**Location:** `seeds/`

**Content:**
```csv
category_id,category_name,description,typical_usage
1,Gadget,Small mechanical or electronic device,Home use
2,Gizmo,Innovative or unique tool,Industrial use
3,Doohickey,Simple mechanical component,General purpose
4,Widget,Standard unit or component,Business use
```

Save the file.

---

## 4. Running DBT Seed

Now, execute:

```bash
dbt seed
```

DBT will:
1. Read all CSVs in the `seeds/` directory.
2. Create a corresponding table for each CSV.
3. Load the data from the file.

### Example Output:
```text
Running with dbt=1.x.x
Found 1 seed file, 1 of which is selected
Creating table: product_categories
Completed successfully
```

---

## 5. Viewing the Seed Table

After running the command, DBT creates the table in your **development schema** — by default, something like:

```text
dbt_<firstinitial><lastname>
```

For example:  
`dbt_j_smith.product_categories`

You can verify this in **Databricks Catalog Explorer** (or your data warehouse UI):

- Navigate to your schema (e.g., `dbt_j_smith`).
- You’ll see a table called **`product_categories`**.
- Preview it to confirm the content matches your CSV.

---

## 6. Updating Seed Data

If you modify the CSV content, simply re-run:

```bash
dbt seed
```

DBT will overwrite the existing table with the new data.

✅ **Use case:** Perfect for small, rarely changing datasets.

---

## 7. Configuring Where Seeds Are Loaded

By default, seeds go into your **default dev schema**, but you can configure the schema just like you do for models.

You can define this in either:
- The **`dbt_project.yml`** file, or  
- A **properties YAML** file inside the `seeds/` directory.

### Example — Configure in `dbt_project.yml`

```yaml
models:
  dbt_databricks_project:
    +schema: dev

seeds:
  dbt_databricks_project:
    +schema: bronze
```

✅ This configuration will load your seed tables into the **bronze schema** instead of the default dev schema.

---

## 8. Rerun After Schema Change

Once you’ve updated your config, rerun:

```bash
dbt seed
```

### Output:
```text
Creating table: bronze.product_categories
Completed successfully
```

Now, the table is created inside the **bronze** schema.

---

## 9. Referencing Seeds in Models

Seeds can be referenced just like any DBT model, using the `ref()` function.

Example inside a model:

```sql
SELECT
    p.product_id,
    p.product_name,
    c.category_name,
    c.typical_usage
FROM {{ ref('bronze_products') }} p
LEFT JOIN {{ ref('product_categories') }} c
ON p.category = c.category_name
```

✅ DBT automatically resolves the correct database, schema, and table for the seed reference.

---

## 10. Typical Use Cases for Seeds

| Use Case | Description |
|-----------|-------------|
| **Reference Data** | Static lookups like product categories, country codes, or department mappings |
| **Configuration Data** | Thresholds, business rules, or default values used by models |
| **Testing Data** | Small sample datasets for development and unit testing |
| **Lookup Tables** | Datasets used for joins that don’t belong to fact or dimension tables |
| **Static Mappings** | Crosswalks (e.g., code → label, region → zone) |

---

## 11. Verifying in Databricks

After running `dbt seed`:
1. Open **Catalog Explorer**.
2. Locate the configured schema (e.g., `bronze`).
3. You’ll find the `product_categories` table.
4. Preview to confirm all rows are loaded correctly.

---

## 12. Maintenance

- To **update** seed data → edit the CSV → run `dbt seed` again.  
- To **remove** a seed → delete the CSV and re-run DBT (or drop the table manually).  
- To **store sensitive data** → avoid seeds (use secure tables instead).

---

## 13. Example Commit Message

> **Commit message:** `Added product_categories seed to bronze schema`

---

## 14. Summary

| Concept | Description |
|----------|--------------|
| **Seed** | CSV file that DBT loads as a table |
| **Command** | `dbt seed` |
| **Default Schema** | Developer’s personal schema (`dbt_<name>`) |
| **Custom Schema** | Configured in `dbt_project.yml` or a properties file |
| **Referencing** | Use `{{ ref('seed_name') }}` |
| **Ideal For** | Static, small, rarely updated datasets |

✅ **In short:**  
**Seeds make it easy to manage small datasets directly from version-controlled CSV files — no manual uploads or external ETL needed.**

# Analyses in DBT — Reusable SQL Queries for Data Exploration

## 1. Overview

In **DBT**, the **`analyses/`** directory is designed for **SQL scripts and ad hoc queries** that are **not part of your core transformation models**.  
These files are stored, version-controlled, and compiled — but **not materialized** as models or tables in your lakehouse.

✅ **Purpose:**  
Analyses are ideal for:
- Ad hoc exploration and validation queries  
- Analytical reports or insights  
- Queries you want to **save and share** with your team  
- Scripts that use **DBT’s ref() function** but should not create tables or views  

---

## 2. Key Behavior

| Action | Analyses Behavior |
|--------|-------------------|
| **Compilation** | ✅ Yes — files are compiled into runnable SQL |
| **Execution** | ❌ No — not executed automatically |
| **Materialization** | ❌ Not materialized as tables or views |
| **Reference Support** | ✅ Yes — can use `{{ ref() }}` or `{{ source() }}` |
| **Storage Location** | `analyses/` directory |
| **Compiled Output** | Stored in the `target/` directory after `dbt compile` |

---

## 3. Folder Structure

```text
dbt_project/
├── analyses/
│   └── demo_analysis.sql
├── models/
├── seeds/
├── tests/
└── dbt_project.yml
```

---

## 4. Creating an Analysis File

Let’s create a file inside the **`analyses`** directory:

**File name:** `demo_analysis.sql`

### Content:
```sql
SELECT *
FROM {{ ref('bronze_orders') }}
```

✅ This query references the **bronze_orders** model using DBT’s `ref()` function.  
It will dynamically resolve to the correct database and schema, depending on your current environment (dev, test, or prod).

---

## 5. Compiling the Analysis

To compile the query into executable SQL, run:

```bash
dbt compile
```

DBT will translate all references into **fully qualified names**, such as:

```sql
SELECT *
FROM dbt_databricks_project_catalog.bronze.bronze_orders
```

### Compilation Output:
- The compiled SQL is stored in the `target/` directory.

**Path example:**
```text
target/compiled/dbt_databricks_project/analyses/demo_analysis.sql
```

---

## 6. Previewing the Analysis

If you’re using **DBT Cloud**, you can click **Preview** in the editor.  
This will:
- Run the compiled query directly against your data warehouse.
- Return the results in your console.
- Allow interactive validation and data exploration.

✅ **Note:**  
This does *not* create or alter any models — it simply executes the compiled query temporarily.

---

## 7. Executing the Compiled SQL (Optional)

You can copy the compiled SQL query from the `target/` directory and execute it manually in your warehouse.

Example:
```sql
SELECT *
FROM dbt_databricks_project_catalog.bronze.bronze_orders
```

✅ This should return the same results as previewing it within DBT.

---

## 8. Difference Between Analyses and Models

| Feature | Models | Analyses |
|----------|---------|-----------|
| **Stored in** | `models/` | `analyses/` |
| **Compiled?** | ✅ Yes | ✅ Yes |
| **Executed/Materialized?** | ✅ Yes | ❌ No |
| **Creates Tables/Views?** | ✅ Yes | ❌ No |
| **Ref() Support?** | ✅ Yes | ✅ Yes |
| **Ideal For** | Transformations | Exploratory analysis, reporting |

---

## 9. Example Workflow

1. **Create file:** `analyses/demo_analysis.sql`  
2. **Write SQL:**  
   ```sql
   SELECT category, COUNT(*) AS total_orders
   FROM {{ ref('bronze_orders') }}
   GROUP BY category
   ```
3. **Compile the file:**  
   ```bash
   dbt compile
   ```
4. **Check output:** `target/compiled/.../demo_analysis.sql`  
5. **Copy and execute** the compiled SQL in Databricks or your data warehouse.

---

## 10. Cleaning Up

Analyses are **temporary or exploratory** artifacts.  
Once you no longer need them:
- You can safely **delete** the `.sql` file.
- DBT won’t attempt to recompile it next time.

Example cleanup steps:
1. Right-click → **Delete** or **Revert changes** in DBT Cloud.
2. Re-run `dbt compile` to refresh the compiled output.

---

## 11. Summary

| Concept | Description |
|----------|--------------|
| **Analyses Folder** | For ad hoc SQL queries or reusable reports |
| **Files Compiled** | ✅ Yes, via `dbt compile` |
| **Materialized** | ❌ No |
| **Supports Ref()** | ✅ Yes |
| **Output Location** | `target/compiled/.../analyses/` |
| **Best Use Cases** | Data exploration, validation, one-off analytics |

✅ **In short:**  
DBT **analyses** are perfect for analysts and engineers who need **version-controlled, environment-aware SQL scripts** that can reference DBT models — **without creating new tables** in the lakehouse.

# Introduction to Jinja in DBT

## 1. Overview

In **DBT**, **Jinja** is a **templating language** that allows you to dynamically generate SQL.  
It provides **variables**, **loops**, **conditions**, and **macros**, giving you flexibility and reusability across your models.

✅ **Purpose:**  
By leveraging Jinja, you can:
- Automate repetitive SQL logic  
- Adapt queries for different environments  
- Dynamically insert variables or parameters  
- Simplify model maintenance

---

## 2. Where Jinja Is Used

Jinja can be used in:
- **Model files** (`.sql` in `/models/`)
- **Analyses** (`.sql` in `/analyses/`)
- **Macros** (`.sql` in `/macros/`)
- **Tests**, **seeds**, and **hooks**

DBT compiles your Jinja templates into executable SQL during the `dbt run` or `dbt compile` phase.

---

## 3. Basic Syntax

### a) Output Expression

```sql
{{ expression }}
```

- The **double curly braces** `{{ }}` evaluate an expression and **output** its result directly into the compiled SQL.  
- Inside, you can place variables, functions, or logic.

**Example:**
```sql
SELECT * FROM {{ source('landing', 'orders') }}
```

This dynamically resolves to:
```sql
SELECT * FROM my_catalog.landing.orders
```

---

### b) Control Structures

```sql
{% statement %}
    -- logic or flow control
{% endstatement %}
```

These are used to **execute logic** like loops or conditionals, without directly outputting values.

**Example:**
```sql
{% if target.name == 'prod' %}
  SELECT * FROM prod_schema.orders
{% else %}
  SELECT * FROM dev_schema.orders
{% endif %}
```

✅ This dynamically selects the schema based on the target environment.

---

### c) Comments

You can use **Jinja-style comments** that are ignored during compilation.

**Single-line comment:**
```sql
{# This is a single-line comment #}
```

**Multi-line comment:**
```sql
{#
This is a
multi-line
comment
#}
```

Comments will not appear in the compiled SQL output.

---

## 4. Hands-On Example: Jinja Demo

Let’s create a new file to explore Jinja basics.

**File path:** `analyses/jinja_demos.sql`

### Example content:
```sql
{{ 'Hello world' }}

{# This will print “Hello world” when compiled #}
```

Now, compile this using:

```bash
dbt compile
```

**Resulting compiled SQL:**
```sql
Hello world
```

✅ The double curly braces `{{ }}` evaluated the expression and printed its output directly.

---

## 5. Control Structures Example

**Using Logic Blocks**

```sql
{% if execute %}
  SELECT 'Running inside dbt' AS message
{% else %}
  SELECT 'Not executing in dbt' AS message
{% endif %}
```

This is a **conditional block**.  
When compiled or executed inside DBT, the `execute` variable indicates if DBT is actively running the query.

---

## 6. Using Macros

Macros are reusable Jinja functions stored in the **`/macros`** directory.  
They are defined using `{% macro %}` and `{% endmacro %}` syntax.

**Example Macro:**
```sql
{% macro generate_schema_name(custom_schema_name, node) %}
  {{ custom_schema_name | lower }}_{{ target.name }}
{% endmacro %}
```

**Usage in a Model:**
```sql
{{ generate_schema_name('bronze', this) }}
```

✅ This outputs a dynamic schema name depending on your environment.

---

## 7. Combining SQL and Jinja

You can mix SQL and Jinja freely.  
DBT compiles Jinja into executable SQL before sending it to your data warehouse.

**Example:**
```sql
SELECT *
FROM {{ ref('silver_orders') }}
WHERE order_date >= '{{ var("start_date", "2024-01-01") }}'
```

- `{{ ref('silver_orders') }}` dynamically resolves the model reference.
- `{{ var("start_date", "2024-01-01") }}` fetches a variable, defaulting to `2024-01-01` if not provided.

---

## 8. Compilation Output

When you compile or run DBT, all Jinja templates are rendered into **pure SQL** stored in the `target/compiled/` directory.

Run:
```bash
dbt compile
```

Then navigate to:
```text
target/compiled/dbt_project/analyses/jinja_demos.sql
```

You’ll see the rendered SQL result there.

---

## 9. Summary

| Concept | Jinja Syntax | Purpose |
|----------|---------------|----------|
| **Output Expression** | `{{ ... }}` | Inserts evaluated result into SQL |
| **Control Statement** | `{% ... %}` | Executes logic like loops or conditions |
| **Comment** | `{# ... #}` | Ignored during compilation |
| **Macro** | `{% macro %}` | Reusable block of Jinja + SQL |
| **Ref Function** | `{{ ref('model') }}` | Dynamically references models |
| **Source Function** | `{{ source('schema','table') }}` | References source tables |

✅ **In short:**  
**Jinja** is what makes DBT dynamic — allowing you to inject logic, automation, and environment awareness directly into your SQL models.

# Working with Variables and Whitespace Control in Jinja

## 1. Introduction

In DBT (and Jinja in general), you can **create variables** inside your SQL templates and use them later in your code.  
These variables make your SQL more **dynamic** and **readable**, while whitespace control (using the `-` minus operator) ensures your compiled SQL output looks clean and professional.

We’ll cover:
- Setting variables  
- Accessing variable values  
- Whitespace control using the **minus operator** (`-`)  
- Data structures (lists, strings, dictionaries)

---

## 2. Setting Variables in Jinja

### Basic Variable Definition

To define (or "set") a variable, use `{% set %}` inside your SQL:

```sql
{% set v1 = 'Hello world' %}
{{ v1 }}
```

When compiled, this becomes:
```text
Hello world
```

---

## 3. Understanding the Extra Empty Lines

When you compile the above code, you might notice **blank lines** before or after the output:

```text
(blank line)
(blank line)
Hello world
```

This happens because:
- Jinja renders each block (`{% set ... %}`) as part of the template structure.
- By default, it **preserves newlines** before and after these statements.

---

## 4. Whitespace Control with the Minus Operator (`-`)

Jinja provides the **minus operator (`-`)** to control whitespace around blocks.

### a) Remove Whitespace *After* a Block

```sql
{% set v1 = 'Hello world' -%}
{{ v1 }}
```

Explanation:
- The `-%}` tells Jinja:  
  → “Remove the newline *after* this block.”

Result:
```text
Hello world
```
✅ No blank line appears before “Hello world”.

---

### b) Remove Whitespace *Before* a Block

```sql
{%- set v1 = 'Hello world' %}
{{ v1 }}
```

Explanation:
- The `{%-` tells Jinja:  
  → “Remove the newline *before* this block.”

This is useful if you have multiple Jinja blocks close together and want them on the same line.

---

### c) Remove Whitespace *Before and After*

You can combine both:

```sql
{%- set v1 = 'Hello world' -%}
{{ v1 }}
```

✅ This removes **all** surrounding blank lines.

---

### d) Example: Before vs After

| Syntax | Effect |
|--------|---------|
| `{% set v1 = 'Hello' %}` | Leaves blank lines before/after |
| `{%- set v1 = 'Hello' %}` | Removes preceding blank line |
| `{% set v1 = 'Hello' -%}` | Removes following blank line |
| `{%- set v1 = 'Hello' -%}` | Removes both blank lines |

---

## 5. Multi-Line Variable Declaration

Sometimes, you want to set a variable block that spans multiple lines — for example, a string or an object.  
Use **block form** for `set`:

```sql
{% set v2 %}
Hello world 2
{% endset %}
{{ v2 }}
```

This creates a block variable with a multi-line value.

To remove unnecessary spaces:

```sql
{%- set v2 -%}
Hello world 2
{%- endset -%}
{{ v2 }}
```

✅ This removes all leading and trailing blank lines.

---

## 6. Variables with Lists (Arrays)

Jinja supports Python-like data structures such as **lists** and **dictionaries**.

### Example: Defining a List

```sql
{% set v3 = ['Hello world', 'Hello again world'] %}
{{ v3 }}
```

Result (when compiled):

```text
['Hello world', 'Hello again world']
```

---

### Accessing Elements by Index

Just like Python:

```sql
{{ v3[0] }}   -- returns 'Hello world'
{{ v3[1] }}   -- returns 'Hello again world'
```

---

### Example with Whitespace Control

Without whitespace control:
```sql
{% set v3 = ['Hello', 'World'] %}
{{ v3[1] }}
```

Might produce:
```text

(blank line)
World
```

With whitespace control:
```sql
{%- set v3 = ['Hello', 'World'] -%}
{{ v3[1] }}
```

✅ Produces:
```text
World
```

---

## 7. Why Whitespace Control Matters

When DBT compiles Jinja templates into SQL, **every newline and space** counts toward the final output.  
Using the `-` operator keeps your compiled SQL clean and readable — especially important when:
- Your SQL models are long
- You use many control statements (`if`, `for`, `set`, etc.)
- You care about clean, minimal whitespace in compiled SQL

---

## 8. Combining Everything — Full Example

```sql
{%- set greeting = 'Hello' -%}
{%- set people = ['World', 'DBT', 'Engineer'] -%}

{{ greeting }} {{ people[0] }}
{{ greeting }} {{ people[1] }}
{{ greeting }} {{ people[2] }}
```

Result:
```text
Hello World
Hello DBT
Hello Engineer
```

✅ Clean output — no unnecessary blank lines between results.

---

## 9. Summary

| Concept | Syntax | Description |
|----------|---------|-------------|
| **Set Variable (inline)** | `{% set v1 = 'value' %}` | Defines a variable with a value |
| **Set Variable (block)** | `{% set v2 %}value{% endset %}` | Multi-line or complex values |
| **Whitespace Before** | `{%- ... %}` | Removes blank line *before* statement |
| **Whitespace After** | `{% ... -%}` | Removes blank line *after* statement |
| **Both Directions** | `{%- ... -%}` | Removes whitespace on both sides |
| **Output Expression** | `{{ v1 }}` | Prints variable value |
| **Lists / Arrays** | `{% set v3 = ['a', 'b'] %}` | Define collections |
| **Index Access** | `{{ v3[1] }}` | Returns element at index 1 |

✅ **In short:**  
Use `{% set ... %}` to define variables.  
Use `{{ ... }}` to print them.  
Use `-` (minus) to **remove unwanted whitespace** before or after Jinja blocks for cleaner SQL output.

# Conditional Statements in Jinja

## 1. Introduction

In Jinja (and therefore in DBT models), **conditional statements** let you control which SQL or text is rendered based on logic.  
They work similarly to **if/elif/else** statements in Python and are extremely useful for:
- Adjusting logic based on environment
- Handling parameterized or variable-driven transformations
- Keeping models concise and dynamic

---

## 2. Basic Syntax

The Jinja `if` block uses the following syntax:

```sql
{% if condition %}
   -- code to render if condition is true
{% elif another_condition %}
   -- code to render if second condition is true
{% else %}
   -- code to render if none are true
{% endif %}
```

✅ You can use **`if`**, **`elif`**, and **`else`** exactly like in Python.

---

## 3. Example — Temperature Check

Let’s start with a simple example in `analyses/jinja_demos.sql`.

### Step 1 — Define a Variable
```sql
{% set temperature = 5 %}
```

### Step 2 — Add a Conditional Block
```sql
{% if temperature > 20 %}
  It is hot
{% else %}
  It is not hot
{% endif %}
```

### Step 3 — Compile It
When compiled with `temperature = 5`, output will be:

```text
It is not hot
```

---

## 4. Inline Conditional Expression (One-Line)

Instead of using a full block, you can use **inline expressions**:

```sql
{{ 'It is hot' if temperature > 20 else 'It is not hot' }}
```

This is equivalent to the previous block and renders:

```text
It is not hot
```

If you change:
```sql
{% set temperature = 30 %}
```

then the compiled output becomes:

```text
It is hot
```

---

## 5. Adding Multiple Conditions (elif)

You can add extra conditions using `elif`.

Example:
```sql
{% set temperature = -10 %}
{% if temperature > 20 %}
  It is hot
{% elif temperature < 0 %}
  It is freezing
{% else %}
  It is not hot
{% endif %}
```

Result:
```text
It is freezing
```

---

## 6. Managing Whitespace (Minus Operator `-`)

By default, Jinja preserves **blank lines** caused by each control structure.  
This often results in unwanted empty lines in the compiled SQL.

Example without whitespace control:

```sql
{% set temperature = -10 %}
{% if temperature > 20 %}
  It is hot
{% elif temperature < 0 %}
  It is freezing
{% else %}
  It is not hot
{% endif %}
```

Compiles to:
```text

(blank line)
(blank line)
It is freezing
(blank line)
```

---

### a) Remove Empty Lines After a Block

To remove the **newline after** a block, place a `-` **before the closing `%}`**:

```sql
{% if temperature > 20 -%}
  It is hot
{% elif temperature < 0 -%}
  It is freezing
{% else -%}
  It is not hot
{% endif -%}
```

Now your compiled output will be clean:

```text
It is freezing
```

---

### b) Remove Empty Lines Before a Block

To remove the **newline before** a block, place a `-` **after the opening `{%`**:

```sql
{%- if temperature > 20 %}
  It is hot
{%- elif temperature < 0 %}
  It is freezing
{%- else %}
  It is not hot
{%- endif %}
```

✅ Typically, you’ll combine both for the cleanest result:
```sql
{%- if temperature > 20 -%}
  It is hot
{%- elif temperature < 0 -%}
  It is freezing
{%- else -%}
  It is not hot
{%- endif -%}
```

Output:
```text
It is freezing
```

---

## 7. Full Example with Both Whitespace and Inline Style

### a) Using Block Syntax
```sql
{%- set temperature = -10 -%}

{%- if temperature > 20 -%}
It is hot
{%- elif temperature < 0 -%}
It is freezing
{%- else -%}
It is not hot
{%- endif -%}
```

### Output:
```text
It is freezing
```

### b) Using Inline Expression
```sql
{% set temperature = 30 %}
{{ 'It is hot' if temperature > 20 else 'It is not hot' }}
```

Output:
```text
It is hot
```

---

## 8. Practical Use Cases in DBT

| Use Case | Example |
|-----------|----------|
| Environment-based schema | `{% if target.name == 'prod' %} schema_prod {% else %} schema_dev {% endif %}` |
| Conditional filters | `WHERE {{ 'TRUE' if var('include_all') else 'created_at > current_date - 7' }}` |
| Dynamic column logic | Include/exclude columns based on config variables |

---

## 9. Summary

| Concept | Syntax | Description |
|----------|---------|-------------|
| **If condition** | `{% if x > 0 %}` | Starts conditional block |
| **Elif** | `{% elif x < 0 %}` | Adds secondary condition |
| **Else** | `{% else %}` | Fallback if others fail |
| **Inline condition** | `{{ 'A' if cond else 'B' }}` | One-line conditional |
| **Whitespace before** | `{%-` | Removes blank line before block |
| **Whitespace after** | `-%}` | Removes blank line after block |
| **Both sides** | `{%- ... -%}` | Cleanest output, no extra lines |

✅ **In short:**  
Use `if`, `elif`, and `else` to control logic dynamically.  
Use `-` (minus) inside your Jinja tags to **remove empty lines** before and after conditional blocks — keeping your compiled SQL perfectly formatted.

# Using For Loops in Jinja

## 1. Introduction

In Jinja (used by DBT), **for loops** allow you to iterate over iterable objects such as lists, dictionaries, or query results.  
They’re especially useful when you want to dynamically generate repetitive SQL code — for example, lists of columns in a `SELECT` statement.

You can even combine **for loops** with **if conditions** to build complex logic such as adding commas only between columns.

---

## 2. Creating a List to Iterate Over

Let’s start by defining a simple list (array) of column names.

```sql
{% set names = ['ID', 'quantity', 'unit_price'] %}
{{ names }}
```

When compiled, this returns:
```text
['ID', 'quantity', 'unit_price']
```

✅ Each value in the list can be iterated over by a loop.

---

## 3. Basic For Loop

Let’s iterate through the list and print each element on a new line:

```sql
{% for name in names %}
{{ name }}
{% endfor %}
```

When compiled, this returns:
```text
ID
quantity
unit_price
```

Here:
- `name` is the **loop variable**, representing each element.
- `names` is the **iterable** list.

---

## 4. Generating Dynamic SQL

Let’s use this list to programmatically generate a SQL `SELECT` statement.

```sql
SELECT
{% for name in names %}
    {{ name }},
{% endfor %}
FROM some_table
```

This compiles to:

```sql
SELECT
    ID,
    quantity,
    unit_price,
FROM some_table
```

❌ This is **invalid SQL**, because there’s a comma after the last column.

---

## 5. Handling the Final Comma Using `loop.last`

Jinja provides **loop variables**, accessible inside a for-loop, such as:
- `loop.index` — current iteration number (starting at 1)
- `loop.index0` — current iteration (starting at 0)
- `loop.first` — `True` if this is the first loop
- `loop.last` — `True` if this is the last loop ✅

We’ll use `loop.last` to remove the comma after the final element.

```sql
SELECT
{% for name in names %}
    {{ name }}{% if not loop.last %},{% endif %}
{% endfor %}
FROM some_table
```

### Compiled Output:
```sql
SELECT
    ID,
    quantity,
    unit_price
FROM some_table
```

✅ No trailing comma!

---

## 6. Using Whitespace Control for Cleaner Output

You can use **minus signs (`-`)** inside your control blocks to remove unwanted blank lines.

For example:

```sql
SELECT
{%- for name in names -%}
  {{ name }}{% if not loop.last %},{% endif %}
{%- endfor %}
FROM some_table
```

**Explanation of the minus operators:**

| Syntax | Effect |
|--------|---------|
| `{%- for ... %}` | Removes the newline before the loop |
| `{% for ... -%}` | Removes the newline after the loop |
| `{%- endfor -%}` | Removes newlines both before and after the loop |
| `{% if not loop.last %},{% endif %}` | Conditional logic inside the loop |

The above code compiles to:

```sql
SELECT ID, quantity, unit_price FROM some_table
```

All on one line — which is clean but maybe too compact for readability.

---

## 7. Adjusting Formatting (Trial and Error)

Sometimes you’ll experiment with the placement of `-` to get the exact formatting you want.

For example:

### a) With all minuses (no newlines):
```sql
{%- for name in names -%}
{{ name }}{% if not loop.last %},{% endif %}
{%- endfor -%}
```
➡ Output: `ID,quantity,unit_price`

### b) With partial minuses (keeping readable formatting):
```sql
{% for name in names -%}
  {{ name }}{% if not loop.last %},{% endif %}
{% endfor %}
```
➡ Output:
```text
  ID,
  quantity,
  unit_price
```

---

## 8. Practical Example — Dynamic Column Generation in DBT

You could use this technique inside a DBT model to dynamically select columns:

```sql
{% set columns = ['id', 'product_id', 'quantity', 'unit_price'] %}

SELECT
{% for c in columns %}
  {{ c }}{% if not loop.last %},{% endif %}
{% endfor %}
FROM {{ ref('bronze_orders') }}
```

**Compiled SQL:**
```sql
SELECT
  id,
  product_id,
  quantity,
  unit_price
FROM analytics.bronze_orders
```

---

## 9. Useful Built-in Loop Variables

| Variable | Description | Example Output |
|-----------|--------------|----------------|
| `loop.index` | 1-based index | 1, 2, 3 |
| `loop.index0` | 0-based index | 0, 1, 2 |
| `loop.first` | `True` for first iteration | True, False, False |
| `loop.last` | `True` for last iteration | False, False, True |
| `loop.length` | Number of items in the iterable | 3 |

Example debugging:
```sql
{% for name in names %}
  {{ name }} → loop.last = {{ loop.last }}
{% endfor %}
```

Output:
```text
ID → loop.last = False
quantity → loop.last = False
unit_price → loop.last = True
```

---

## 10. Summary

| Concept | Syntax | Description |
|----------|---------|-------------|
| **For Loop** | `{% for x in list %} ... {% endfor %}` | Iterates over items in a list |
| **Loop Variable** | `{{ x }}` | Current item |
| **Last Check** | `{% if not loop.last %},{% endif %}` | Avoid trailing commas |
| **Whitespace Control** | `{%- ... -%}` | Remove blank lines for clean output |
| **Dynamic SQL Example** | Build SELECT columns dynamically | Saves repetitive typing |

✅ **In short:**  
Jinja `for` loops allow you to dynamically generate SQL statements from Python-style lists.  
Combine them with `if` conditions and whitespace control (`-`) to create **precise**, **formatted**, and **dynamic SQL** — perfect for DBT models.

# Built-in DBT Jinja Functions and Modules

## 1. Introduction

DBT provides a range of **built-in Jinja functions** and **Python modules** that you can use to make your models dynamic and metadata-aware.  
These functions help you:
- Reference other models or sources,
- Access environment or adapter-specific information,
- Work with timestamps and system data,
- Automate SQL generation.

---

## 2. Core DBT Functions

### a) `ref()`

Used to reference another **model** within your DBT project.  
It ensures **dependency tracking** and **correct build order**.

**Example:**
```sql
{{ ref('bronze_orders') }}
```

**Compiled Output:**
```sql
catalog.schema.bronze_orders
```

✅ DBT replaces the model name with its fully qualified path (catalog → schema → table).  
This is how DBT understands the **lineage** between models.

---

### b) `source()`

Used to reference **external raw data** sources defined in your `schema.yml`.

**Example:**
```sql
{{ source('raw', 'orders') }}
```

**Compiled Output:**
```sql
catalog.raw.orders
```

✅ Typically used in bronze/staging models that ingest raw tables.

---

### c) `config()`

Used to set configurations for the current model — such as materialization, schema, tags, etc.

**Example:**
```sql
{{ config(
    materialized='table',
    schema='silver'
) }}
```

✅ This is evaluated **at compile time**, before SQL execution.

---

## 3. DBT’s Jinja `modules` Object

DBT allows you to use certain **Python standard library modules** (safe subset) via the `modules` object.

---

### a) Using `modules.datetime`

This gives you access to the **Python `datetime` module**.

**Example — Current Timestamp:**
```sql
{% set now = modules.datetime.datetime.now() %}
{{ now }}
```

✅ Output (example):
```text
2025-10-11 14:32:10.563172
```

---

**Example — Current Date Only:**
```sql
{% set today = modules.datetime.date.today() %}
{{ today }}
```

✅ Output:
```text
2025-10-11
```

---

These are useful when dynamically generating partition filters, timestamps, or naming conventions for logs or backups.

---

## 4. The `adapter` Module

DBT’s **adapter module** exposes functions specific to your database backend (Databricks, Snowflake, BigQuery, Redshift, etc.).  
It allows you to programmatically access metadata and schema details from within Jinja.

---

### a) Example — Get Column Metadata from a Model

**Syntax:**
```sql
adapter.get_columns_in_relation(ref('model_name'))
```

**Example:**
```sql
{{ adapter.get_columns_in_relation(ref('bronze_orders')) }}
```

✅ When compiled, this will:
- Connect to your Databricks SQL Warehouse (or database),
- Retrieve metadata about the model,
- Return column names and types.

**Output Example:**
```text
[
  Column(name='id', data_type='bigint'),
  Column(name='createdat', data_type='timestamp'),
  Column(name='user_id', data_type='bigint'),
  Column(name='product_id', data_type='bigint'),
  Column(name='quantity', data_type='int'),
  Column(name='unit_price', data_type='decimal')
]
```

---

### b) Storing the Output in a Variable

You can capture that list of columns into a variable:

```sql
{% set columns = adapter.get_columns_in_relation(ref('bronze_orders')) %}
{{ columns }}
```

✅ Output: same list of `Column` objects.

---

### c) Iterating Over Column Metadata

Since `columns` is an iterable (list of objects), you can loop over it:

```sql
{% for col in columns %}
  {{ col }}
{% endfor %}
```

Output (simplified):
```text
Column(name='id', data_type='bigint')
Column(name='createdat', data_type='timestamp')
Column(name='quantity', data_type='int')
...
```

---

### d) Getting Only the Column Names

Each column object has a `.name` property:

```sql
{% for col in columns %}
  {{ col.name }}
{% endfor %}
```

Output:
```text
id
createdat
user_id
product_id
quantity
unit_price
```

✅ This is standard Python object attribute access — `col` is a Python object.

---

## 5. Why `ref()` Is Not Enclosed in `{{ }}` Inside Another Expression

When you’re already *inside an expression block* (`{{ ... }}`), you should **not** use another pair of curly braces for nested functions.

✅ Correct:
```sql
{{ adapter.get_columns_in_relation(ref('bronze_orders')) }}
```

❌ Incorrect:
```sql
{{ adapter.get_columns_in_relation({{ ref('bronze_orders') }}) }}
```

Because `{{ ... }}` means “evaluate and output.”  
Inside another expression, the nested function call already gets evaluated.

---

## 6. Full Example: Getting Column Names Dynamically

```sql
{% set cols = adapter.get_columns_in_relation(ref('bronze_orders')) %}

SELECT
{% for col in cols %}
  {{ col.name }}{% if not loop.last %},{% endif %}
{% endfor %}
FROM {{ ref('bronze_orders') }}
```

✅ Compiled Output:
```sql
SELECT
  id,
  createdat,
  user_id,
  product_id,
  quantity,
  unit_price
FROM catalog.schema.bronze_orders
```

This dynamically generates a `SELECT` statement using the **real schema** from Databricks.

---

## 7. Summary

| Function / Module | Description | Example |
|--------------------|--------------|----------|
| `ref('model')` | Reference another DBT model | `{{ ref('bronze_orders') }}` |
| `source('src', 'table')` | Reference a raw source table | `{{ source('raw', 'orders') }}` |
| `config()` | Define model configuration | `{{ config(materialized='view') }}` |
| `modules.datetime` | Access Python datetime functions | `modules.datetime.datetime.now()` |
| `adapter.get_columns_in_relation()` | Get column metadata from a model | `adapter.get_columns_in_relation(ref('bronze_orders'))` |

---

## 8. Key Takeaways

✅ **DBT Jinja functions** bridge the gap between your SQL models and metadata/configuration layers.  
✅ **Modules** like `datetime` and `adapter` let you use Python functionality directly inside SQL.  
✅ You can iterate, filter, and transform metadata programmatically — reducing boilerplate SQL.  
✅ The combination of **`ref()`**, **`adapter`**, and **loops/conditions** enables dynamic, reusable, and environment-aware DBT code.

# DBT Packages

## 1. Introduction

**DBT packages** add prebuilt functionality to your DBT project.  
They act like **libraries** or **modules** in traditional programming — reusable collections of macros, models, and tests that you can plug into your project.

✅ Packages allow you to:
- Reuse open-source community tools.
- Avoid reinventing common macros.
- Accelerate development and standardize logic.

They are managed through the **`packages.yml`** file in your DBT project root.

---

## 2. What Packages Contain

A DBT package can include:

| Component | Description |
|------------|--------------|
| **Macros** | Reusable logic or SQL snippets written in Jinja |
| **Models** | Prebuilt SQL transformations |
| **Tests** | Generic or custom tests for data validation |
| **Utilities** | Helpers such as column generators or schema validators |

Packages are particularly useful for **common tasks** like:
- Generating date spines
- Column comparisons
- Schema testing
- Metadata management

---

## 3. The DBT Hub

DBT Hub is a central repository of community-contributed packages:  
🔗 **https://hub.getdbt.com**

From there you can browse and install packages such as:
- `dbt_utils` (the most popular one)
- `dbt_expectations`
- `dbt_date`
- `dbt_audit_helper`
- `dbt_artifacts`

---

## 4. The `dbt_utils` Package

`dbt_utils` is one of the most widely used packages.  
It provides dozens of **generic macros** for tasks like:
- `date_spine` — generate sequential dates
- `union_relations` — union multiple models
- `surrogate_key` — generate unique keys
- `get_column_values` — extract unique values from a column

📘 Documentation: [dbt-utils on GitHub](https://github.com/dbt-labs/dbt-utils)

---

## 5. Installing a Package

### Step 1 — Create `packages.yml`

In the root directory of your project, create a file called:

```yaml
packages:
  - package: dbt-labs/dbt_utils
    version: 1.3.0
```

Each entry specifies the **package name** and **version**.

---

### Step 2 — Alternative: Install from GitHub

You can also reference a package directly from GitHub:

```yaml
packages:
  - git: "https://github.com/dbt-labs/dbt-utils.git"
    revision: main
```

✅ `revision` can be a branch (`main`), tag (`v1.3.0`), or commit hash.

---

### Step 3 — Install Packages

Run the following command in your terminal:

```bash
dbt deps
```

This will:
- Download the packages,
- Store them under a new directory called `dbt_packages/`,
- Make them available to your project.

---

## 6. Exploring Installed Packages

After installation, you’ll see a new directory:

dbt_packages/
└── dbt_utils/
├── macros/
├── models/
├── tests/
└── README.md

You can open the files to inspect or learn from the macros.

---

## 7. Example — Using the `date_spine` Macro

The `date_spine` macro generates a **sequential list of dates** between a start and end date.

### Step 1 — Create an Analysis File

Create `analyses/date_spine_demo.sql`:

```sql
{{ dbt_utils.date_spine(
    datepart="day",
    start_date="cast('2024-01-01' as date)",
    end_date="cast('2024-01-06' as date)"
) }}
```

- `datepart`: unit of time (`day`, `week`, `month`, etc.)
- `start_date`: starting date (inclusive)
- `end_date`: upper boundary (exclusive)

---

### Step 2 — Compile It

Run:
```bash
dbt compile
```

**Compiled Output Example:**
```sql
WITH date_spine AS (
  SELECT date_add('day', seq4(), cast('2024-01-01' as date)) AS date_day
  FROM table(generator(rowcount => datediff('day', cast('2024-01-01' as date), cast('2024-01-06' as date))))
)
SELECT * FROM date_spine
```

✅ Output: five rows of sequential dates (2024-01-01 → 2024-01-05).

---

### Step 3 — Preview the Results

When previewed in DBT Cloud or Databricks, the output table looks like:

| date_day |
|-----------|
| 2024-01-01 |
| 2024-01-02 |
| 2024-01-03 |
| 2024-01-04 |
| 2024-01-05 |

Note: The `end_date` value (2024-01-06) is **not included** — `date_spine` generates dates **up to but not including** that end date.

---

## 8. Using Package Macros in Models

You can use macros from installed packages inside your models like this:

```sql
SELECT *
FROM {{ dbt_utils.date_spine(
    datepart="day",
    start_date="cast('2024-01-01' as date)",
    end_date="cast('2024-01-06' as date)"
) }}
```

✅ DBT will automatically resolve the macro path from the `dbt_utils` package.

---

## 9. Committing Your Changes

After verifying everything works, commit your updates:

```bash
git add packages.yml
git commit -m "Added dbt_utils package"
git push
```

This ensures that your teammates can run `dbt deps` to install the same dependencies.

---

## 10. Summary

| Concept | Description | Example |
|----------|--------------|----------|
| **Package** | A reusable collection of macros, models, and tests | `dbt_utils`, `dbt_expectations` |
| **Hub Source** | Central DBT package repository | `hub.getdbt.com` |
| **Install Command** | Installs dependencies from `packages.yml` | `dbt deps` |
| **Popular Package** | Provides generic macros | `dbt-labs/dbt_utils` |
| **Example Macro** | Sequential date generation | `dbt_utils.date_spine()` |
| **Storage Location** | Where packages are downloaded | `dbt_packages/` |

---

## 11. Key Takeaways

✅ **DBT packages** are like plugins — they extend DBT with reusable, community-tested components.  
✅ Installed via `packages.yml` and `dbt deps`.  
✅ **`dbt_utils`** is the most common and versatile package.  
✅ Macros like `date_spine` can generate dynamic datasets (e.g., date ranges) without manual SQL.  
✅ You can combine packages and custom macros for maximum flexibility and maintainability.

# DBT Materializations

## 1. Introduction

In DBT, **materializations** determine *how your models are built and stored* in the data warehouse.  
They define whether your SQL query becomes a **view**, a **table**, an **incremental table**, an **ephemeral subquery**, or a **snapshot**.

Each materialization has its own purpose, pros and cons, and best-use scenarios.  
Choosing the right one is essential for performance, scalability, and data freshness.

---

## 2. Overview of Materialization Types

| Materialization | Description | Stored Physically? | Best For |
|------------------|--------------|--------------------|-----------|
| **View** | Virtual table (always reflects latest data) | ❌ No | Small or frequently changing data |
| **Table** | Physically stored data, rebuilt each run | ✅ Yes | Stable, frequently queried data |
| **Incremental** | Stored as table, updates only new/changed records | ✅ Yes | Large datasets or append-only data |
| **Ephemeral** | Compiled as subquery, not persisted | ❌ No | Temporary or intermediate logic |
| **Snapshot** | Tracks changes in data over time | ✅ Yes | Historical tracking and auditing |

---

## 3. View Materialization

### How It Works
DBT creates a **view** using a `CREATE VIEW AS` statement.  
Each time you run `dbt run`, DBT recreates this view, meaning it always reflects the latest source data.

**Syntax Example:**
```sql
{{ config(materialized='view') }}

SELECT
    id,
    name,
    created_at
FROM {{ source('raw', 'users') }}
```

### ✅ Pros
- No extra storage cost (no physical data stored).
- Always up to date with latest source data.
- Simple to maintain.

### ❌ Cons
- Slower to query (especially for complex transformations).
- Recomputes the logic each time the view is queried.

### 💡 Best Use
Use **views** for:
- Lightweight transformations.
- Early staging/bronze layers.
- Models that are not queried frequently.

---

## 4. Table Materialization

### How It Works
DBT creates a **table** using `CREATE TABLE AS SELECT`.  
This stores the query results physically in the database.

**Syntax Example:**
```sql
{{ config(materialized='table') }}

SELECT
    id,
    name,
    COUNT(*) AS total_orders
FROM {{ ref('bronze_orders') }}
GROUP BY id, name
```

### ✅ Pros
- Fast query performance.
- Ideal for BI dashboards and frequent reads.
- Stable for downstream dependencies.

### ❌ Cons
- Requires rebuild on each `dbt run`.
- Longer build time for large datasets.
- Not automatically refreshed — must be rebuilt.

### 💡 Best Use
Use **tables** for:
- Models heavily used by BI tools.
- Layers with complex transformations.
- Aggregations or summary tables.

---

## 5. Incremental Materialization

### How It Works
An **incremental** model builds like a table but only **processes new or changed data** since the last run.

DBT stores metadata (usually via a unique key or timestamp) to identify new records.

**Syntax Example:**
```sql
{{ config(
    materialized='incremental',
    unique_key='id'
) }}

SELECT *
FROM {{ source('raw', 'events') }}
{% if is_incremental() %}
  WHERE event_timestamp > (SELECT MAX(event_timestamp) FROM {{ this }})
{% endif %}
```

### ✅ Pros
- Much faster builds for large tables.
- Only new data is processed.
- Supports large or streaming datasets.

### ❌ Cons
- Requires proper incremental logic.
- More configuration complexity.
- Must handle schema changes carefully.

### 💡 Best Use
Use **incremental models** for:
- Large fact tables.
- Event or transaction logs.
- Slowly growing datasets.

---

## 6. Ephemeral Materialization

### How It Works
Ephemeral models **don’t create tables or views**.  
They are compiled as **subqueries** wherever they’re referenced.

**Syntax Example:**
```sql
{{ config(materialized='ephemeral') }}

SELECT
    user_id,
    COUNT(*) AS order_count
FROM {{ ref('bronze_orders') }}
GROUP BY user_id
```

If another model references this one, DBT **inlines it** as a subquery in the compiled SQL.

### ✅ Pros
- Reduces clutter — no temporary tables.
- Improves query modularity and reuse.
- Keeps lakehouse clean.

### ❌ Cons
- Cannot query directly.
- Harder to debug.
- May slow execution if overused (complex nested subqueries).

### 💡 Best Use
Use **ephemeral** models for:
- Small, reusable transformations.
- Logical breakdowns of complex queries.
- Early steps in a DAG with few dependents.

---

## 7. Snapshot Materialization

### How It Works
Snapshots capture the **state of a record over time**, allowing historical change tracking.  
They store multiple versions of rows as they evolve.

**Syntax Example:**
```sql
{% snapshot customer_snapshot %}
{{ config(
    target_schema='snapshots',
    unique_key='customer_id',
    strategy='timestamp',
    updated_at='updated_at'
) }}

SELECT * FROM {{ source('raw', 'customers') }}

{% endsnapshot %}
```

### ✅ Pros
- Maintains a full history of changes.
- Great for auditing and SCD (Slowly Changing Dimensions).
- Allows tracking row-level evolution.

### ❌ Cons
- Requires extra storage.
- Additional configuration required.
- Can slow down with large histories.

### 💡 Best Use
Use **snapshots** for:
- Historical tracking (e.g., customer details, product prices).
- Auditing and compliance.
- Change-data capture (CDC) scenarios.

---

## 8. Summary — When to Use Each

| Materialization | Data Stored | Updated Automatically | Performance | Ideal For |
|------------------|--------------|------------------------|--------------|------------|
| **View** | ❌ No | ✅ Yes | 🐢 Slower | Lightweight models |
| **Table** | ✅ Yes | ❌ No | ⚡ Fast | BI reports, aggregates |
| **Incremental** | ✅ Yes (partial) | ✅ Partial | ⚡⚡ Very fast | Large or streaming datasets |
| **Ephemeral** | ❌ No | N/A | 🧩 Inline SQL | Intermediate logic |
| **Snapshot** | ✅ Yes (historical) | ✅ On trigger | ⚡ Moderate | Historical data tracking |

---

## 9. Choosing the Right Materialization

| Goal | Recommended Type |
|------|------------------|
| Always up-to-date data | View |
| Optimized for queries | Table |
| Large datasets or streaming data | Incremental |
| Temporary logic reuse | Ephemeral |
| Historical change tracking | Snapshot |

---

## 10. Key Takeaways

✅ **Views** → Virtual, always fresh, best for small models.  
✅ **Tables** → Physical, fast to query, best for stable datasets.  
✅ **Incremental** → Efficient for growing data, updates new records only.  
✅ **Ephemeral** → No storage, for logical modularity.  
✅ **Snapshots** → Preserve history for auditing and SCDs.

---

💡 **Tip:** Start with views or tables, then move to incremental models once data volume grows and runtime becomes too long.

# Recap: Configuring Materializations in DBT

## 1. Introduction

We’ve already worked with **tables** and **views**, but let’s recap both concepts — and the **three different ways** to configure materializations in DBT.

In our project, we have the following model hierarchy:

models/
├── bronze/
├── silver/
└── gold/

Each layer (bronze, silver, gold) has its models materialized according to the settings defined in the **`dbt_project.yml`** file.

---

## 2. Configuring Materializations in `dbt_project.yml`

The **`dbt_project.yml`** file defines global or folder-specific configurations for your models.

Example structure:

```yaml
models:
  my_project:
    bronze:
      +materialized: table
    silver:
      +materialized: table
    gold:
      +materialized: table
```

✅ Here:
- Bronze → stored as **tables**
- Silver → stored as **tables**
- Gold → stored as **tables**

---

## 3. Changing Materialization for a Layer

Let’s change the **gold layer** from `table` to `view`:

```yaml
models:
  my_project:
    gold:
      +materialized: view
```

Then run:
```bash
dbt run
```

DBT will rebuild the gold models as **views**.

---

## 4. Observing in Databricks Catalog Explorer

After the run:
- The gold models (`gold_average_rating_daily`, `gold_sales_daily`) are now **views**.
- Execution time is shorter — since **views** don’t persist data.

**Example timing comparison:**

| Model | Materialization | Duration (s) |
|--------|------------------|---------------|
| gold_average_rating_daily | view | 1.92 |
| gold_sales_daily | view | 1.69 |
| gold_average_rating_daily | table | 5.07 |
| gold_sales_daily | table | 5.03 |

✅ **Views** are faster to create.  
❌ **Tables** are faster to query (especially on large datasets).

---

## 5. Reverting Back to Tables

Simply switch the configuration back:

```yaml
models:
  my_project:
    gold:
      +materialized: table
```

Then run:
```bash
dbt run
```

Your gold models are now materialized again as **tables**.

---

## 6. Three Ways to Configure Materializations

You can configure model materialization in **three different locations**:

### 6.1. Global Configuration — `dbt_project.yml`

```yaml
models:
  my_project:
    gold:
      +materialized: table
```

Affects **all models** in that directory (unless overridden).

---

### 6.2. Model-Specific YAML — `properties.yml`

You can configure individual models in a **`properties.yml`** file inside the relevant folder.

Example:
```yaml
version: 2

models:
  - name: gold_sales_daily
    config:
      materialized: view
```

✅ This config applies only to the specified model.

---

### 6.3. Inline Configuration — In the Model File (`.sql`)

You can define materialization **directly in the model** using a Jinja `config` block.

Example (`gold_average_rating_daily.sql`):
```sql
{{ config(materialized='view') }}

SELECT
    product_id,
    AVG(rating) AS avg_rating,
    date_trunc('day', created_at) AS date
FROM {{ ref('silver_reviews') }}
GROUP BY product_id, date
```

✅ This configuration is **inline** and **takes the highest priority**.

---

## 7. Order of Precedence

If you configure materializations in multiple places, DBT follows this **priority order**:

| Priority | Configuration Source | Description |
|-----------|----------------------|--------------|
| 1️⃣ | **Model config block** | Inside the `.sql` model file |
| 2️⃣ | **Properties YAML file** | `properties.yml` under model folder |
| 3️⃣ | **Project YAML file** | `dbt_project.yml` global configuration |

✅ The **closest definition** to the model always wins.

---

## 8. Example Summary

Let’s summarize with a working example:

| Model | Configuration Source | Materialization |
|--------|-----------------------|-----------------|
| gold_average_rating_daily | Inline (`config()` block) | **view** |
| gold_sales_daily | `properties.yml` | **view** |
| bronze_orders | `dbt_project.yml` | **table** |

After `dbt run`, both gold models are rebuilt as **views**, overriding the global table setting.

---

## 9. Reverting Changes

To revert:
- Remove or comment out the inline `config()` block.
- Delete the `properties.yml` file.
- Restore the gold section in `dbt_project.yml` to:
```yaml
  gold:
    +materialized: table
```

Then run:
```bash
dbt run
```

The models will be rebuilt as **tables** again.

---

## 10. Key Takeaways

✅ **Three configuration options:**
1. Inline (`config()` block)
2. Model-level (`properties.yml`)
3. Global (`dbt_project.yml`)

✅ **Priority order:**  
`config()` > `properties.yml` > `dbt_project.yml`

✅ **Performance notes:**
- **Views:** Quick to build, slow to query.
- **Tables:** Slow to build, fast to query.

✅ **Tip:** Use **views** for development and testing; switch to **tables** or **incremental models** in production for better performance.

---

**Conclusion:**  
This lecture was a **recap** of DBT’s materialization setup and configuration hierarchy — essential knowledge for maintaining clean, performant data pipelines across your **bronze, silver, and gold** model layers.

# Incremental Materializations in DBT

## 1. Introduction

**Incremental materializations** in DBT allow you to build models that **process only new or updated records** instead of rebuilding the entire dataset on each run.

✅ **Key benefit:** significant reduction in **runtime** and **compute cost** for large datasets.

---

## 2. Initial Setup for Demonstration

### Step 1 — Create a Temporary Source Table

In Databricks (or your SQL warehouse), create an **empty table** with the same schema as the existing `orders` table.

```sql
CREATE TABLE landing.orders_incremental AS
SELECT *
FROM landing.orders
WHERE 1 = 2;
```

✅ This copies the **schema only**, without any data.

---

### Step 2 — Verify the Table Exists

```sql
SELECT * FROM landing.orders_incremental;
```

You should see:
- No rows.
- Same columns as `landing.orders`.

---

### Step 3 — Add as a Source in DBT

Update your **`sources/landing_sources.yml`** file to include the new table:

```yaml
version: 2

sources:
  - name: landing
    tables:
      - name: orders
      - name: orders_incremental
```

---

### Step 4 — Point Bronze Model to the New Source

In `models/bronze/bronze_orders.sql`, change the source reference:

```sql
FROM {{ source('landing', 'orders_incremental') }}
```

Now, the **bronze layer** will depend on `orders_incremental` instead of the original `orders` table.

---

## 3. Populating the Source with Initial Data

### Step 1 — Check Original Orders Data

```sql
SELECT
  COUNT(*) AS total_rows,
  YEAR(created_at) AS order_year
FROM landing.orders
GROUP BY order_year
ORDER BY order_year;
```

Example output:

| order_year | total_rows |
|-------------|-------------|
| 2016 | 81 |
| 2017 | 436 |
| 2018 | 512 |
| 2019 | 640 |
| 2020 | 489 |

---

### Step 2 — Insert 2016 Data into `orders_incremental`

```sql
INSERT INTO landing.orders_incremental
SELECT *
FROM landing.orders
WHERE YEAR(created_at) = 2016;
```

✅ You’ve now inserted **81 rows**.

Verify:

```sql
SELECT COUNT(*) FROM landing.orders_incremental;
```

---

## 4. Configure Bronze Orders as Incremental

In `models/bronze/bronze_orders.sql`, set the materialization type:

```sql
{{ config(materialized='incremental') }}

SELECT *
FROM {{ source('landing', 'orders_incremental') }}
```

Now, DBT will store the output as a **table** and append data on subsequent runs.

---

## 5. First Run

Run only the bronze model and its upstream sources:

```bash
dbt run --select +bronze_orders
```

✅ Output:
- Bronze model created.
- 81 rows inserted (2016 data).

Verify in Databricks:

```sql
SELECT COUNT(*) FROM bronze.bronze_orders;
```

Result: `81 rows`

---

## 6. Behavior on Repeated Runs

If you run the same command again:

```bash
dbt run --select +bronze_orders
```

DBT will **append** all source rows again — leading to **duplicates**.

Example:

| id | created_at | ... |
|----|-------------|-----|
| 56 | 2016-03-10 | ... |
| 56 | 2016-03-10 | ... |

Now there are **162 rows**, because DBT appended the same 81 rows again.

---

## 7. Implementing Conditional Incremental Logic

To prevent duplicates, we need to **filter the source** so that only *new records* are added.

### Step 1 — Truncate Bronze Table

```sql
TRUNCATE TABLE bronze.bronze_orders;
```

Now the target is empty.

---

### Step 2 — Add Incremental Condition

Modify your `bronze_orders.sql` to include conditional logic using Jinja:

```sql
{{ config(materialized='incremental') }}

SELECT *
FROM {{ source('landing', 'orders_incremental') }}
{% if is_incremental() %}
  WHERE created_at > (
    SELECT COALESCE(MAX(created_at), '1900-01-01')
    FROM {{ this }}
  )
{% endif %}
```

**Explanation:**
- `is_incremental()` → returns `true` if the model is running incrementally.
- `{{ this }}` → refers to the current model (avoids circular references).
- `COALESCE()` → ensures that if the model is empty, it uses a fallback date (`1900-01-01`).

---

## 8. Run Incremental Load Again

```bash
dbt run --select +bronze_orders
```

✅ Bronze model now loads 81 rows (2016).

Run again — no duplicates appear.

---

### Validate Results

```sql
SELECT
  COUNT(*) AS total_rows,
  YEAR(created_at) AS order_year
FROM bronze.bronze_orders
GROUP BY order_year
ORDER BY order_year;
```

| order_year | total_rows |
|-------------|-------------|
| 2016 | 81 |

Perfect.

---

## 9. Adding New Data to Source

Insert **2017** records into the incremental source:

```sql
INSERT INTO landing.orders_incremental
SELECT *
FROM landing.orders
WHERE YEAR(created_at) = 2017;
```

Now verify:

```sql
SELECT
  YEAR(created_at) AS order_year,
  COUNT(*) AS total_rows
FROM landing.orders_incremental
GROUP BY order_year;
```

| order_year | total_rows |
|-------------|-------------|
| 2016 | 81 |
| 2017 | 436 |

---

## 10. Run DBT Incremental Load Again

```bash
dbt run --select +bronze_orders
```

✅ DBT appends **only new rows** where `created_at > max(created_at)` in target.

Now in `bronze_orders`:

| order_year | total_rows |
|-------------|-------------|
| 2016 | 81 |
| 2017 | 436 |

🎯 **No duplicates!**  
The filtering logic is working correctly.

---

## 11. Understanding the Query Logic

### Compiled SQL (simplified)

```sql
CREATE OR REPLACE TABLE bronze.bronze_orders AS
SELECT *
FROM landing.orders_incremental
WHERE created_at > (
  SELECT COALESCE(MAX(created_at), '1900-01-01')
  FROM bronze.bronze_orders
);
```

✅ On the first run → all records are loaded.  
✅ On subsequent runs → only new records after the max timestamp are appended.

---

## 12. Full Refresh Flag

Sometimes, you want to **rebuild the model completely**, ignoring incremental logic.

You can use the **`--full-refresh`** flag:

```bash
dbt run --select +bronze_orders --full-refresh
```

**Effect:**  
- Drops and recreates the table.
- Ignores the `is_incremental()` condition.
- Runs a full rebuild (like a `table` materialization).

---

## 13. Recap

| Concept | Description |
|----------|--------------|
| **Incremental Materialization** | Builds a table by processing only new/changed data |
| **is_incremental()** | Jinja function that returns `true` during incremental runs |
| **COALESCE()** | Ensures fallback date if no prior data exists |
| **{{ this }}** | Refers to the current model (avoids self-reference loops) |
| **--full-refresh** | Forces full rebuild of the model |

---

## 14. Key Takeaways

✅ **Incremental models** save time and resources for large datasets.  
✅ Always include **conditional logic** to avoid duplicates.  
✅ Use **created_at** or similar timestamp columns for tracking new data.  
✅ The **`--full-refresh`** flag performs a complete rebuild when needed.  
✅ Validate incremental behavior regularly with count checks.

---

### Example Final Model (`bronze_orders.sql`)

```sql
{{ config(materialized='incremental') }}

SELECT *
FROM {{ source('landing', 'orders_incremental') }}
{% if is_incremental() %}
  WHERE created_at > (
    SELECT COALESCE(MAX(created_at), '1900-01-01')
    FROM {{ this }}
  )
{% endif %}
```

With this logic, DBT efficiently processes **only new data**, keeping your transformations consistent and fast.

# Upsert Logic in Incremental DBT Models

## 1. Introduction

In this lecture, we extend the **incremental materialization** concept by implementing **upserts** (update or insert).  
This ensures that **records remain unique** in your target model — if a record with the same key exists, DBT will **update** it rather than **insert a duplicate**.

---

## 2. Problem Overview

Currently, our incremental model **only appends** data from the source to the target.  
That means if the same record (e.g. `id = 2000`) appears again with updated values, we end up with **two rows** for the same key.

Example:

| id | user_id | product_id | quantity | unit_price | created_at |
|----|----------|-------------|-----------|-------------|-------------|
| 2000 | 276 | 109 | 9 | 79.37 | 2023-10-11 |
| 2000 | 276 | 109 | 1000 | 79.37 | 2023-10-12 |

❌ This duplicates the key value and breaks data integrity.

---

## 3. Inspect Current Records

### Step 1 — Query the Source Record

```sql
SELECT *
FROM landing.orders_incremental
WHERE id = 2000;
```

You’ll see one record (e.g. quantity = 9).

### Step 2 — Query the Target Record

```sql
SELECT *
FROM bronze.bronze_orders
WHERE id = 2000;
```

At this stage, both source and target have the same record with the same values.

---

## 4. Update a Record in the Source

Now, let’s simulate a record update by changing the **quantity** and **created_at** in the source.

```sql
UPDATE landing.orders_incremental
SET
  quantity = 1000,
  created_at = current_timestamp
WHERE id = 2000;
```

Verify the change:

```sql
SELECT *
FROM landing.orders_incremental
WHERE id = 2000;
```

---

## 5. Run DBT Incremental Load

Run your incremental model again:

```bash
dbt run --select +bronze_orders
```

✅ The model runs successfully, but because there is **no unique key** defined yet, the target now contains **two rows** for `id = 2000`.

Verify:

```sql
SELECT *
FROM bronze.bronze_orders
WHERE id = 2000;
```

Result:

| id | quantity | created_at |
|----|-----------|-------------|
| 2000 | 9 | 2023-10-11 |
| 2000 | 1000 | 2023-10-12 |

❌ **Duplicates remain** because DBT is appending data without deduplication.

---

## 6. Implementing UPSERT with `unique_key`

To make DBT update existing records instead of inserting duplicates, add a `unique_key` to the model config block.

### Step 1 — Modify `bronze_orders.sql`

```sql
{{ config(
    materialized = 'incremental',
    unique_key = 'id'
) }}

SELECT *
FROM {{ source('landing', 'orders_incremental') }}
{% if is_incremental() %}
  WHERE created_at > (
    SELECT COALESCE(MAX(created_at), '1900-01-01')
    FROM {{ this }}
  )
{% endif %}
```

✅ The `unique_key` parameter ensures that when a record from the source has the same `id` as one in the target, it **replaces the existing one** instead of inserting a duplicate.

**Note:**  
You can specify multiple keys using a list:
```jinja
unique_key = ['id', 'created_at']
```

---

## 7. Clean Up Duplicates (Optional)

Before testing the new logic, delete any existing duplicates from the target:

```sql
DELETE FROM bronze.bronze_orders
WHERE id = 2000 AND quantity = 1000;
```

Now, the target should contain only one row (quantity = 9).

---

## 8. Run DBT Again with UPSERT Enabled

Run the same command again:

```bash
dbt run --select +bronze_orders
```

✅ DBT now uses a **MERGE INTO** statement instead of an INSERT.

---

## 9. Validate the Result

Query the target again:

```sql
SELECT *
FROM bronze.bronze_orders
WHERE id = 2000;
```

Result:

| id | quantity | created_at |
|----|-----------|-------------|
| 2000 | 1000 | 2023-10-12 |

✅ The record has been updated instead of duplicated.

---

## 10. Behind the Scenes: MERGE Statement

When `unique_key` is defined, DBT compiles the model into a **MERGE statement** like this:

```sql
MERGE INTO bronze.bronze_orders AS target
USING (SELECT * FROM landing.orders_incremental) AS source
ON target.id = source.id
WHEN MATCHED THEN
  UPDATE SET *
WHEN NOT MATCHED THEN
  INSERT *;
```

This ensures:
- Matching rows (based on `id`) are **updated**.
- New rows are **inserted**.

---

## 11. Clean Up and Commit

### Step 1 — Revert Source Reference

In your **`landing_sources.yml`**:
```yaml
version: 2
sources:
  - name: landing
    tables:
      - name: orders
```

In `bronze_orders.sql`, revert the source reference:

```jinja
FROM {{ source('landing', 'orders') }}
```

### Step 2 — Commit Changes

```bash
git add .
git commit -m "Added incremental upsert logic with unique_key to bronze_orders"
```

---

## 12. Drop Temporary Table

Finally, remove the temporary incremental table:

```sql
DROP TABLE landing.orders_incremental;
```

✅ Table dropped successfully.

---

## 13. Recap

| Concept | Description |
|----------|--------------|
| **Upsert (Merge)** | Combines insert + update into one operation |
| **unique_key** | Defines columns used to match records between source and target |
| **MERGE INTO** | SQL operation generated automatically by DBT for incremental models |
| **No unique_key** | Results in duplicate records |
| **With unique_key** | Updates matching records, inserts new ones |

---

## 14. Key Takeaways

✅ Incremental + `unique_key` enables **clean, deduplicated pipelines**.  
✅ DBT automatically handles **MERGE logic** — no manual SQL required.  
✅ Always identify a **unique key** (e.g. `id`, `order_id`, etc.) in your datasets.  
✅ You can verify compiled SQL in the `/target/run/` folder.  
✅ For debugging, use `dbt compile` to inspect the generated queries.

---

### Final Model Example (`bronze_orders.sql`)

```sql
{{ config(
    materialized='incremental',
    unique_key='id'
) }}

SELECT *
FROM {{ source('landing', 'orders_incremental') }}
{% if is_incremental() %}
  WHERE created_at > (
    SELECT COALESCE(MAX(created_at), '1900-01-01')
    FROM {{ this }}
  )
{% endif %}
```

This configuration enables **efficient, deduplicated incremental loads** in DBT by using **upserts** through the **MERGE INTO** operation.

# Common Table Expressions (CTEs) in DBT

## 1. Introduction

**Common Table Expressions (CTEs)** — often abbreviated as **CTEs** — are **temporary result sets** defined within a query using the **`WITH` clause**.  
They help make SQL queries **cleaner and easier to read** by breaking down complex logic into smaller, named, and reusable components.

✅ **Key points:**
- CTEs exist **only during query execution**.  
- They can be **referenced multiple times** in the same query.  
- They help **avoid repetitive subqueries**.  
- Syntax is typically:  
  ```sql
  WITH cte_name AS (
      SELECT ...
  )
  SELECT ...
  FROM cte_name;
  ```

---

## 2. Example Structure

```sql
WITH rename_columns AS (
    SELECT
        id AS customer_id,
        name AS customer_name
    FROM customers
)
SELECT *
FROM rename_columns;
```

Here:
- `rename_columns` is the **CTE name**.
- It defines a **temporary result set** used by the main query.

---

## 3. Purpose of CTEs in DBT

In DBT, CTEs can be used to **replace dependencies on materialized tables or views** when we only need them **within one model**.

Instead of referencing other DBT models (e.g., bronze, silver), you can **copy their logic directly into CTEs**.

This reduces the need to **materialize intermediate layers** when they are only used for transformations.

---

## 4. Practical Example — Converting Models into CTEs

Let’s take the model **`gold_average_rating_daily.sql`**, which depends on:
- `bronze_reviews`
- `silver_products`

We’ll refactor it to use CTEs instead of referencing these materialized models.

---

### Step 1 — Create CTE for Bronze Reviews

In `gold_average_rating_daily.sql`:

```sql
WITH reviews AS (
    SELECT
        review_id,
        product_id,
        rating,
        created_at
    FROM {{ source('landing', 'reviews') }}
),
```

This replaces the logic from `bronze_reviews.sql`, which was selecting reviews data from the landing source.

---

### Step 2 — Create CTE for Products

Next, we add another CTE for the products data.

```sql
products AS (
    SELECT
        product_id,
        product_name,
        category,
        price
    FROM {{ source('landing', 'products') }}
)
```

This combines the logic that previously lived in both:
- `bronze_products.sql` (reading from source)
- `silver_products.sql` (transforming bronze layer)

---

### Step 3 — Use CTEs in Main Query

Now that both temporary tables (`reviews` and `products`) exist within the same query, we can use them directly:

```sql
WITH
    reviews AS (
        SELECT review_id, product_id, rating, created_at
        FROM {{ source('landing', 'reviews') }}
    ),
    products AS (
        SELECT product_id, product_name, category, price
        FROM {{ source('landing', 'products') }}
    )

SELECT
    p.category,
    AVG(r.rating) AS average_rating,
    DATE_TRUNC('day', r.created_at) AS rating_date
FROM reviews AS r
JOIN products AS p
  ON r.product_id = p.product_id
GROUP BY p.category, DATE_TRUNC('day', r.created_at);
```

✅ **Result:**  
The query now depends **only on sources**, not on the `bronze` or `silver` materialized tables.

---

## 5. Run the Model

Execute the model directly without running upstream bronze/silver models:

```bash
dbt run --select gold_average_rating_daily
```

**Observation:**
- DBT skips all bronze/silver models because the CTEs make them unnecessary.
- In Databricks Catalog Explorer:
  - Only the **gold** model is materialized.
  - **Bronze** and **silver** models are not created.

---

## 6. Verify Lineage

After running:
- The **lineage graph** now shows direct dependencies between **gold models** and **source tables**.
- **Bronze** and **silver** models are no longer part of the lineage because we’ve replaced them with CTEs.

---

## 7. Cleanup (Optional)

If bronze and silver tables exist in Databricks, you can delete them to confirm they’re no longer used:

```sql
DROP TABLE bronze.bronze_products;
DROP TABLE bronze.bronze_reviews;
DROP TABLE silver.silver_products;
```

---

## 8. Reverting Changes

If you prefer to keep the **bronze** and **silver** models materialized (for modularity or reuse), revert to referencing the original DBT models:

```sql
FROM {{ ref('silver_products') }}
JOIN {{ ref('bronze_reviews') }} ...
```

Then re-run DBT:

```bash
dbt run
```

Now all dependent layers (`bronze`, `silver`, `gold`) will be recreated.

---

## 9. Key Takeaways

| Concept | Description |
|----------|--------------|
| **CTE (Common Table Expression)** | A temporary query result defined using the `WITH` clause |
| **Scope** | Exists only during query execution |
| **Purpose** | Simplifies complex SQL and avoids repetitive subqueries |
| **Usage in DBT** | Allows embedding logic from upstream models directly into one model |
| **Performance** | Can reduce overhead if intermediate tables don’t need to be materialized |
| **Reversibility** | You can revert to referencing DBT models anytime |

---

## 10. Final Example — Gold Model with CTEs

```sql
WITH
    reviews AS (
        SELECT
            review_id,
            product_id,
            rating,
            created_at
        FROM {{ source('landing', 'reviews') }}
    ),
    products AS (
        SELECT
            product_id,
            product_name,
            category,
            price
        FROM {{ source('landing', 'products') }}
    )

SELECT
    p.category,
    AVG(r.rating) AS average_rating,
    DATE_TRUNC('day', r.created_at) AS rating_date
FROM reviews r
JOIN products p
  ON r.product_id = p.product_id
GROUP BY p.category, DATE_TRUNC('day', r.created_at);
```

---

# Ephemeral Models in DBT

## 1. Introduction

**Ephemeral models** in DBT are **temporary, in-memory transformations** that do not get materialized as actual tables or views in your data lakehouse.

✅ **Key concept:**  
Instead of persisting data physically (like tables or views), DBT embeds ephemeral models **directly as CTEs** within downstream queries.

---

## 2. How Ephemeral Models Work

When a model is configured as **ephemeral**, DBT:
1. Does **not** create a table or view for it.
2. **Inlines** its SQL logic inside dependent models using a **CTE (Common Table Expression)**.
3. Treats it as an **intermediate step** that exists only during query execution.

Example:

```sql
{{ config(materialized='ephemeral') }}

SELECT
    user_id,
    COUNT(order_id) AS total_orders
FROM {{ source('landing', 'orders') }}
GROUP BY user_id
```

When another model references this one using `ref('silver_users')`, DBT replaces it with the SQL code above — wrapped as a **CTE** — instead of performing a join on a table.

---

## 3. Use Case Overview

In our project, we have three main layers:
- **Bronze** → raw ingestion tables.
- **Silver** → cleaned and standardized data.
- **Gold** → aggregated data for analytics.

Now, we’ll configure the **Silver layer** to use **ephemeral materialization**.

---

## 4. Configuring Ephemeral Models

### Step 1 — Update the `dbt_project.yml`

Change the materialization for the **Silver layer models** from `table` to `ephemeral`:

```yaml
models:
  dbt_project:
    bronze:
      +materialized: table
    silver:
      +materialized: ephemeral
    gold:
      +materialized: table
```

Save the file.

---

### Step 2 — Clean Up Existing Tables

Because DBT won’t automatically drop old tables, we’ll manually remove them before testing.

```sql
DROP SCHEMA bronze CASCADE;
DROP SCHEMA silver CASCADE;
DROP SCHEMA gold CASCADE;
```

✅ This ensures we start with a clean environment.

---

### Step 3 — Run DBT

Run the project again:

```bash
dbt run
```

**Result:**
- DBT processes **bronze models** first (4 tables).
- **Silver models** are **skipped** from materialization.
- DBT goes **directly to gold models**.

---

## 5. Inspecting the Compiled SQL

Open the logs for a **gold model**, for example `gold_sales_daily`.

Inside the **details** of the run or in the `target/run/` directory, you’ll see something like:

```sql
WITH silver_orders AS (
    -- SQL logic from the silver_orders model
    SELECT
        order_id,
        user_id,
        total_price,
        created_at
    FROM bronze_orders
),
silver_products AS (
    -- SQL logic from the silver_products model
    SELECT
        product_id,
        category,
        price
    FROM bronze_products
),
silver_users AS (
    -- SQL logic from the silver_users model
    SELECT
        user_id,
        name,
        country
    FROM bronze_users
)
SELECT
    so.created_at,
    su.country,
    sp.category,
    SUM(so.total_price) AS daily_sales
FROM silver_orders so
JOIN silver_products sp ON so.product_id = sp.product_id
JOIN silver_users su ON so.user_id = su.user_id
GROUP BY so.created_at, su.country, sp.category;
```

Notice how each **silver model** is represented as a **CTE** rather than a reference to a physical table.

---

## 6. Verifying in Databricks

After running `dbt run`:
- The **bronze** schema exists (tables created).
- The **gold** schema exists (tables created).
- The **silver** schema **does not exist**, since ephemeral models are not materialized.

Confirm by refreshing the Catalog Explorer:
  - You’ll only see `bronze` and `gold` schemas.

---

## 7. Benefits of Ephemeral Models

| Advantage | Description |
|------------|--------------|
| **Performance** | Reduces I/O because intermediate results are not written to disk. |
| **Simpler lineage** | Embedded CTEs simplify dependencies. |
| **Readability** | Keeps your SQL modular while avoiding intermediate tables. |
| **Storage efficiency** | No unnecessary intermediate tables or views in your lakehouse. |

---

## 8. Trade-offs

| Limitation | Explanation |
|-------------|--------------|
| **Complex queries** | Large models can become deeply nested when CTEs are inlined. |
| **Debug difficulty** | Harder to inspect intermediate data because nothing is persisted. |
| **Query length** | Very complex transformations may exceed SQL engine limits. |

Use ephemeral models for **lightweight intermediate transformations**, not heavy aggregations.

---

## 9. Reverting the Change

If you prefer to persist your silver models as tables again, revert the materialization:

```yaml
models:
  dbt_project:
    bronze:
      +materialized: table
    silver:
      +materialized: table
    gold:
      +materialized: table
```

Save and re-run DBT:

```bash
dbt run
```

✅ Now the silver layer will be **materialized as tables again**.

Verify in Databricks — the `silver` schema reappears with its models.

---

## 10. Key Takeaways

| Concept | Description |
|----------|--------------|
| **Ephemeral models** | Exist only in memory; never written to the lakehouse |
| **Implementation** | Defined with `{{ config(materialized='ephemeral') }}` |
| **Behavior** | Compiled as **CTEs** in downstream queries |
| **Use case** | Intermediate transformations that don’t need persistence |
| **Benefit** | Faster query execution and less data storage |
| **Trade-off** | Increased query complexity for deeply nested models |

---

## 11. Example: Final Configuration

**Silver model (ephemeral)**  
`models/silver/silver_orders.sql`

```sql
{{ config(materialized='ephemeral') }}

SELECT
    order_id,
    user_id,
    product_id,
    total_price,
    created_at
FROM {{ ref('bronze_orders') }}
WHERE status = 'Completed'
```

**Gold model consuming ephemeral silver**

```sql
SELECT
    s.created_at,
    SUM(s.total_price) AS daily_sales
FROM {{ ref('silver_orders') }} s
GROUP BY s.created_at;
```

When compiled, DBT turns this into one unified query with **CTEs**, ensuring everything runs **in memory** without materializing intermediate tables.

---

✅ **In summary:**
Ephemeral models are perfect for short-lived, intermediate logic that doesn’t need to be stored.  
They reduce table clutter, optimize pipelines, and keep transformations modular — but should be used thoughtfully for performance and maintainability.

# Implementing Slowly Changing Dimensions (SCD Type 2) with DBT Snapshots

## 1. Introduction

**Slowly Changing Dimensions (SCDs)** are a fundamental concept in **data warehousing**, used to manage and track historical changes in **dimension data** over time.

There are several types of SCDs, but the two most common are:
- **Type 1 (SCD1):** Overwrites existing data — no history is kept.
- **Type 2 (SCD2):** Preserves history — new rows are added for each change, with validity timestamps.

DBT provides a built-in feature called **snapshots** to easily implement **SCD Type 2**.

---

## 2. Difference Between SCD Type 1 and Type 2

Let’s consider a `products` table:

| id | name     | price | valid_from | valid_to |
|----|-----------|--------|-------------|-----------|
| 1  | Widget A | 25     | 2024-01-01  | NULL |

Now the price changes to 30 on 2024-02-01.

### **SCD Type 1:**
You overwrite the old value:
| id | name     | price |
|----|-----------|--------|
| 1  | Widget A | 30     |

→ ❌ No historical trace of previous prices.

### **SCD Type 2:**
You insert a new record:
| id | name     | price | valid_from | valid_to |
|----|-----------|--------|-------------|-----------|
| 1  | Widget A | 25     | 2024-01-01  | 2024-01-31 |
| 1  | Widget A | 30     | 2024-02-01  | NULL |

→ ✅ Full historical tracking of changes.

---

## 3. What Are Snapshots in DBT?

**Snapshots** capture and store **versions of records** over time.  
They compare the current state of a source table to the previously stored state and record **differences** as new rows.

When DBT detects changes, it automatically updates the validity timestamps:
- `dbt_valid_from`
- `dbt_valid_to`
- `dbt_updated_at`

Snapshots are a **built-in DBT mechanism** for **SCD Type 2** logic.

---

## 4. Setting Up a Snapshot

### Step 1 — Create Snapshot File

In your DBT project, create a new file under `/snapshots`:

📄 `snapshots/products_snapshot.sql`

```sql
{% snapshot products_snapshot %}
    {{
        config(
            target_schema='bronze',
            strategy='timestamp',
            unique_key='id',
            updated_at='created_at'
        )
    }}

    SELECT
        id,
        name,
        price,
        created_at
    FROM {{ source('landing', 'products') }}
{% endsnapshot %}
```

**Explanation:**
- `target_schema`: Where the snapshot will be stored (`bronze` layer).
- `strategy`: How DBT detects changes — here `timestamp`.
- `unique_key`: Unique row identifier.
- `updated_at`: Column DBT uses to detect changes (`created_at` in this case).

---

## 5. Running the Snapshot

Run all snapshots in your project:

```bash
dbt snapshot
```

✅ DBT creates a new table in the `bronze` schema:
- `bronze.products_snapshot`

### Snapshot Table Includes:
| id | name | price | created_at | dbt_scd_id | dbt_updated_at | dbt_valid_from | dbt_valid_to |
|----|------|--------|-------------|--------------|------------------|------------------|----------------|
| 200 | Widget X | 48.8 | 2024-01-01 | ... | ... | 2024-01-01 | NULL |

---

## 6. Simulate a Change in Source Data

### Step 1 — Update Source Table

```sql
UPDATE landing.products
SET
  price = 100,
  created_at = current_timestamp
WHERE id = 200;
```

### Step 2 — Re-run Snapshot

```bash
dbt snapshot
```

✅ DBT detects the change and creates a **new record** in the snapshot table.

Now the table looks like:

| id | name | price | dbt_valid_from | dbt_valid_to |
|----|------|--------|------------------|----------------|
| 200 | Widget X | 48.8 | 2024-01-01 | 2024-02-01 |
| 200 | Widget X | 100  | 2024-02-01 | NULL |

- The old record’s `dbt_valid_to` is filled with the timestamp of the update.  
- The new record’s `dbt_valid_to` is `NULL` — marking it as the active version.

---

## 7. Integrating the Snapshot into the Data Model

Now that the snapshot captures product history, we’ll update downstream models (like `silver_products`) to use it.

### Step 1 — Modify `silver_products.sql`

```sql
SELECT
    id,
    name,
    price
FROM {{ ref('products_snapshot') }}
WHERE dbt_valid_to IS NULL
```

✅ This filters only **active records** (where `dbt_valid_to IS NULL`).

---

## 8. Clean Up Old Models

Since the snapshot replaces the `bronze_products` model, delete it to avoid duplication.

```bash
rm models/bronze/bronze_products.sql
```

---

## 9. Build the Full Project

Now rebuild your DBT project using:

```bash
dbt build
```

This command:
1. Runs snapshots.
2. Runs models.
3. Runs tests and seeds (in dependency order).

✅ The snapshot (`products_snapshot`) executes first.
✅ Then DBT runs the dependent `silver_products` and `gold` models.

---

## 10. Verify the Results in Databricks

After the build:
- In the **bronze** schema → table `products_snapshot` exists.
- In the **silver** schema → `silver_products` exists with only **active** records.
- The **gold** layer can aggregate data as usual.

---

## 11. Example Query

You can query active and historical records as follows:

**Active Products**
```sql
SELECT *
FROM bronze.products_snapshot
WHERE dbt_valid_to IS NULL;
```

**Historical Changes**
```sql
SELECT *
FROM bronze.products_snapshot
WHERE dbt_valid_to IS NOT NULL;
```

---

## 12. Commit Your Changes

Commit the changes to your feature branch:

```bash
git add snapshots/products_snapshot.sql models/silver/silver_products.sql
git commit -m "Added product snapshot to bronze and updated silver_products reference"
```

---

## 13. Summary

| Feature | Description |
|----------|--------------|
| **Tool** | DBT Snapshots |
| **Purpose** | Track changes in dimension tables (SCD Type 2) |
| **Strategy** | Timestamp or Check columns |
| **Schema** | Typically in the bronze layer |
| **System Columns** | `dbt_scd_id`, `dbt_updated_at`, `dbt_valid_from`, `dbt_valid_to` |
| **Active Record Filter** | `WHERE dbt_valid_to IS NULL` |

---

## 14. Key Takeaways

✅ **SCD Type 2** preserves history by inserting new rows instead of overwriting.  
✅ **DBT snapshots** automate this logic with built-in timestamp or check strategies.  
✅ You can integrate snapshots seamlessly into your DBT DAG with `ref()`.  
✅ Always filter by `dbt_valid_to IS NULL` to get the **current active** records.  
✅ Use `dbt build` to orchestrate full runs with models, seeds, tests, and snapshots.

---

## 15. Example Snapshot File (Final)

📄 `snapshots/products_snapshot.sql`

```sql
{% snapshot products_snapshot %}
    {{
        config(
            target_schema='bronze',
            strategy='timestamp',
            unique_key='id',
            updated_at='created_at'
        )
    }}

    SELECT
        id,
        name,
        price,
        created_at
    FROM {{ source('landing', 'products') }}
{% endsnapshot %}
```

This is a complete and production-ready example for implementing **Slowly Changing Dimensions (Type 2)** using **DBT snapshots**.

# Advanced Testing in DBT — Generic, Singular, and Package-Based Tests

## 1. Introduction

In DBT, **testing** is a core feature that ensures **data quality, integrity, and consistency** throughout your transformation pipelines.

There are **two main categories** of tests:
1. **Generic tests** — predefined and reusable.
2. **Singular tests** — custom, SQL-based assertions.

We’ve already explored the basics of both types.  
Now we’ll extend these concepts to make our tests **more reusable and modular**, and we’ll also look at how to enhance testing using **DBT packages** like:
- **`dbt_utils`**
- **`dbt_expectations`**

---

## 2. Recap — Generic Tests

Generic tests are **YAML-defined validations** applied directly to columns or models.  
They come pre-installed with DBT and include:

| Test Name | Description |
|------------|--------------|
| `unique` | Ensures each value in the column is unique |
| `not_null` | Ensures the column has no null values |
| `accepted_values` | Ensures column values belong to a defined list |
| `relationships` | Enforces referential integrity between models |

---

### Example: Generic Tests for Sources

📄 `models/sources/landing_sources.yml`

```yaml
version: 2

sources:
  - name: landing
    tables:
      - name: orders
        columns:
          - name: id
            tests:
              - unique
              - not_null
          - name: status
            tests:
              - accepted_values:
                  values: ['pending', 'completed', 'cancelled']
```

✅ This configuration automatically runs during `dbt test` and validates data in the **source tables**.

---

## 3. Recap — Singular Tests

**Singular tests** are **custom SQL queries** that assert a specific condition.

- Stored under the `/tests` directory.
- Must return **zero rows** to pass.
- Any rows returned indicate a **test failure**.

### Example: Simple Singular Test

📄 `tests/assert_source_orders_quantity_unit_price_non_negative.sql`

```sql
SELECT *
FROM {{ source('landing', 'orders') }}
WHERE quantity < 0 OR unit_price < 0
```

✅ **Pass condition:** No records are returned.  
❌ **Fail condition:** At least one record violates the rule.

---

## 4. Making Singular Tests More Generic

You can convert repetitive singular tests into **generic macros**, making them **reusable** across multiple models or columns.

### Example: Create a Custom Macro Test

📄 `macros/assert_non_negative.sql`

```sql
{% macro test_non_negative(model, column_name) %}
    SELECT *
    FROM {{ model }}
    WHERE {{ column_name }} < 0
{% endmacro %}
```

### Use It in YAML

📄 `models/orders.yml`

```yaml
version: 2

models:
  - name: silver_orders
    columns:
      - name: unit_price
        tests:
          - non_negative
      - name: quantity
        tests:
          - non_negative
```

✅ Now, this test can be reused across multiple models and columns without duplicating SQL.

---

## 5. Enhancing Testing with DBT Packages

DBT supports **third-party packages** that extend functionality.  
Two of the most popular packages for data testing are:

### 1. `dbt_utils`

Provides a collection of **reusable macros** for testing and transformation logic.

📦 Install via `packages.yml`:

```yaml
packages:
  - package: dbt-labs/dbt_utils
    version: ">=1.1.0"
```

Then run:

```bash
dbt deps
```

### Example — Using `dbt_utils` Generic Tests

```yaml
version: 2

models:
  - name: silver_orders
    columns:
      - name: order_id
        tests:
          - dbt_utils.unique_combination_of_columns:
              combination_of_columns: ['order_id', 'product_id']
      - name: order_date
        tests:
          - dbt_utils.expression_is_true:
              expression: "order_date <= current_date"
```

✅ These macros simplify validation of complex logic, e.g., ensuring composite uniqueness or expression validity.

---

### 2. `dbt_expectations`

Inspired by **Great Expectations**, this package brings **human-readable, behavior-driven tests** to DBT.

📦 Install via `packages.yml`:

```yaml
packages:
  - package: calogica/dbt_expectations
    version: ">=0.10.0"
```

Run:

```bash
dbt deps
```

### Example — Using `dbt_expectations`

```yaml
version: 2

models:
  - name: silver_orders
    columns:
      - name: quantity
        tests:
          - dbt_expectations.expect_column_values_to_be_between:
              min_value: 0
              max_value: 1000
      - name: unit_price
        tests:
          - dbt_expectations.expect_column_values_to_not_be_null
      - name: order_id
        tests:
          - dbt_expectations.expect_column_to_exist
```

✅ These tests provide **rich validation** with readable semantics — great for analytics or data quality teams.

---

## 6. Comparing Testing Approaches

| Type | Defined In | Example | Reusability | Use Case |
|------|-------------|----------|--------------|-----------|
| **Generic** | YAML | `unique`, `not_null` | ✅ High | Simple, column-level checks |
| **Singular** | SQL | `SELECT * FROM ... WHERE ...` | ❌ Low | Complex custom logic |
| **Custom Macro Test** | Macro + YAML | `test_non_negative` | ✅ High | Reusable logic, intermediate complexity |
| **DBT Packages** | External macros | `dbt_expectations`, `dbt_utils` | ✅✅ Very High | Advanced data validation |

---

## 7. Running Tests

You can run all or specific tests with:

```bash
# Run all tests
dbt test

# Run only tests for a specific model
dbt test --select silver_orders

# Run only failing tests again
dbt test --select test_type:error
```

You can also see detailed test results in:
- The **DBT Cloud UI**
- The **`target/run_results.json`** file

---

## 8. Example: Combining Everything

📄 `models/silver_orders.yml`

```yaml
version: 2

models:
  - name: silver_orders
    description: "Cleansed and standardized order data"
    columns:
      - name: order_id
        tests:
          - unique
          - not_null
      - name: quantity
        tests:
          - non_negative
          - dbt_expectations.expect_column_values_to_be_between:
              min_value: 0
              max_value: 1000
      - name: unit_price
        tests:
          - non_negative
          - dbt_expectations.expect_column_values_to_be_between:
              min_value: 0
              max_value: 5000
      - name: order_date
        tests:
          - dbt_utils.expression_is_true:
              expression: "order_date <= current_date"
```

---

## 9. Key Takeaways

| Concept | Description |
|----------|--------------|
| **Generic Tests** | YAML-based reusable tests like `unique` or `not_null`. |
| **Singular Tests** | SQL-based custom tests for complex logic. |
| **Macro-Based Tests** | Make singular tests reusable by wrapping logic in macros. |
| **`dbt_utils`** | Adds extra generic test types and helper macros. |
| **`dbt_expectations`** | Enables expressive, human-readable data quality tests. |
| **Best Practice** | Use generic tests for column-level validation, macro tests for reusability, and package-based tests for advanced rules. |

---

## 10. Example Test Execution Workflow

1. Define tests in your YAML or SQL.
2. Install dependencies (`dbt deps`).
3. Run your tests (`dbt test`).
4. Review failed rows in the **DBT Cloud UI** or logs.
5. Iterate — adjust data or test logic as needed.

---

✅ **In summary:**  
You can elevate your DBT testing from simple YAML checks to a robust, reusable, and expressive testing framework using **custom macros** and **packages** like `dbt_utils` and `dbt_expectations`.  
This makes your data pipelines both **trustworthy** and **auditable**.

# Selective Test Execution in DBT

## 1. Introduction

As your **DBT project grows**, running **all tests** can become slow and unnecessary.  
DBT allows you to **run specific tests** selectively — targeting particular **models, sources, test types, or directories**.

✅ **Key feature:**  
The `--select` argument in the `dbt test` command lets you filter and run only the tests that matter.

---

## 2. Basic Syntax

```bash
dbt test --select <criteria>
```

**Examples:**
- `dbt test --select bronze_reviews`
- `dbt test --select test_type:singular`
- `dbt test --select source:*`
- `dbt test --select path:models/bronze/*`

---

## 3. Upstream and Downstream Selection

DBT uses **operators** to select dependencies:

| Operator | Meaning | Example |
|-----------|----------|----------|
| `+model` | Include **upstream** dependencies | `dbt test --select +bronze_reviews` |
| `model+` | Include **downstream** dependencies | `dbt test --select bronze_reviews+` |
| `+model+` | Include **both** upstream and downstream | `dbt test --select +bronze_reviews+` |

---

## 4. Example: Running Tests for a Specific Model

Let’s say we have this model:

📄 `models/bronze/bronze_reviews.sql`

And we want to test this model and any **upstream dependencies**.

```bash
dbt test --select +bronze_reviews
```

✅ DBT runs tests for:
- The **bronze_reviews** model (if any tests exist)
- Its **source inputs** (e.g. `landing.reviews`)

If no tests are configured for `bronze_reviews` itself, only **source-level tests** (like `unique` or `not_null`) will run.

---

## 5. Running Tests Only for the Model (No Dependencies)

```bash
dbt test --select bronze_reviews
```

✅ Runs **only** tests configured directly on the `bronze_reviews` model.  
If there are none, DBT skips execution.

---

## 6. Running Only Singular Tests

Singular tests are custom SQL queries in your `/tests` folder.

To run **only singular tests**:

```bash
dbt test --select test_type:singular
```

✅ Example result:
Running 1 test:
- assert_source_orders_quantity_unit_price_non_negative


---

## 7. Running Only Generic Tests

Generic tests are the YAML-defined column tests like `unique` or `not_null`.

To run **only generic tests**:

```bash
dbt test --select test_type:generic
```

✅ Example output:
Running 6 generic tests:
- not_null_landing_orders_id
- unique_landing_orders_id
- not_null_landing_products_id

---

## 8. Running Tests for Tables Based on Materialization

You can filter by **config settings**, such as materialization type.

```bash
dbt test --select config.materialized:table
```

✅ Runs tests only for models configured as tables.

Add a `+` to include **upstream** dependencies:

```bash
dbt test --select +config.materialized:table
```

✅ Now runs all relevant tests for both the tables **and** their source dependencies.

---

## 9. Running Tests for All Sources

To run tests configured on **all sources** in your project:

```bash
dbt test --select source:*
```

✅ Runs all generic tests defined in your `sources.yml` files — for example:
- `unique`
- `not_null`
- `accepted_values`

---

## 10. Running Tests in a Specific Directory

If your models are organized by folders (e.g., `bronze`, `silver`, `gold`),  
you can run tests based on their **directory path**.

```bash
dbt test --select path:models/bronze/*
```

✅ Runs tests for all models in `models/bronze`.

To include **upstream** dependencies (e.g., sources):

```bash
dbt test --select +path:models/bronze/*
```

---

## 11. Combining Multiple Targets

You can combine multiple resources using **spaces** between selections.

```bash
dbt test --select +bronze.bronze_orders +bronze.bronze_reviews
```

✅ Runs tests for both `bronze_orders` and `bronze_reviews` models (and their upstream dependencies).

If models have the same name in different directories, use **dot notation** to disambiguate:
- `bronze.bronze_orders`
- `silver.bronze_orders`

---

## 12. Practical Examples

| Goal | Command |
|------|----------|
| Run all tests | `dbt test` |
| Run only tests for `bronze_orders` and upstream | `dbt test --select +bronze_orders` |
| Run only singular tests | `dbt test --select test_type:singular` |
| Run only generic tests | `dbt test --select test_type:generic` |
| Run tests for all sources | `dbt test --select source:*` |
| Run tests for all table models | `dbt test --select config.materialized:table` |
| Run tests in `silver` directory | `dbt test --select path:models/silver/*` |
| Combine multiple models | `dbt test --select +bronze_orders +silver_products` |

---

## 13. Visual Summary

| Selector | Description | Example |
|-----------|--------------|----------|
| `+` | Include upstream dependencies | `+model` |
| `model+` | Include downstream dependencies | `bronze_reviews+` |
| `test_type:singular` | Only singular tests | `dbt test --select test_type:singular` |
| `test_type:generic` | Only generic tests | `dbt test --select test_type:generic` |
| `config.materialized:table` | Filter by materialization type | `dbt test --select config.materialized:table` |
| `source:*` | All source tests | `dbt test --select source:*` |
| `path:models/bronze/*` | All tests for bronze models | `dbt test --select path:models/bronze/*` |

---

## 14. Best Practices

✅ **Use `--select` strategically**
- Focus only on areas affected by your recent changes.

✅ **Combine filters**
- Example: `dbt test --select test_type:generic +path:models/bronze/*`

✅ **Use upstream (`+`) wisely**
- Avoid unnecessary tests on unrelated models.

✅ **Use DBT Cloud or artifacts**
- View which tests were executed in the **DBT Cloud UI** or check `target/run_results.json`.

---

## 15. Summary

| Concept | Description |
|----------|--------------|
| **`dbt test`** | Executes all or selected data tests |
| **`--select`** | Filters which models/tests to run |
| **`+` / `+model+`** | Include dependencies (upstream/downstream) |
| **`test_type`** | Run tests by type (singular or generic) |
| **`config.materialized`** | Run tests for specific materializations |
| **`source:*`** | Run all source tests |
| **`path:`** | Run tests for specific directories |
| **Multiple selections** | Combine models, sources, or filters with spaces |

---

✅ **In summary:**  
DBT’s `--select` syntax gives you **fine-grained control** over which tests to execute.  
You can focus testing on a single model, schema, or directory, or restrict by type or configuration —  
making your testing process **faster, cleaner, and more targeted**.

# Advanced Test Configurations in DBT

## 1. Introduction

In DBT, **generic tests** can be customized through configurations that allow for more **control, flexibility, and debugging capabilities**.

In this lecture, we expand on:
- Filtering test scope with `where`
- Setting thresholds using `error_if` and `warn_if`
- Storing failed results using `store_failures`
- Limiting the number of records with `limit`

These configurations help refine **data validation** and **testing precision**, especially in production-scale projects.

---

## 2. Example Setup — Snapshot Testing

Let’s consider a **snapshot** that tracks product data changes over time.

📄 `snapshots/products_snapshot.sql`

```sql
{% snapshot products_snapshot %}
    {{
        config(
            target_schema='bronze',
            strategy='timestamp',
            unique_key='id',
            updated_at='created_at'
        )
    }}

    SELECT
        id,
        name,
        category,
        price,
        created_at
    FROM {{ source('landing', 'products') }}
{% endsnapshot %}
```

This snapshot stores **historical and active product versions**.  
Records with `dbt_valid_to IS NULL` represent **active** rows.

---

## 3. Creating a Properties File for Snapshot Tests

Let’s define tests for the snapshot in a **YAML configuration**.

📄 `snapshots/_snapshots_properties.yml`

```yaml
version: 2

snapshots:
  - name: products_snapshot
    columns:
      - name: id
        tests:
          - unique:
              where: "dbt_valid_to IS NULL"
              severity: warn
```

### Explanation:
- `snapshots`: Defines tests for snapshot models.
- `unique`: Tests uniqueness of the `id` column.
- `where`: Filters active records only.
- `severity`: Marks the test as a **warning** instead of an error if it fails.

---

## 4. Running the Test

Run tests only for snapshots:

```bash
dbt test --select path:snapshots/
```

✅ This passes, because all **active IDs** are unique.  
(If inactive historical records were included, it would fail.)

---

## 5. Using the `where` Clause

The `where` clause filters the rows **tested** by the query.

### Example

```yaml
- unique:
    where: "dbt_valid_to IS NULL"
```

✅ Only **active records** are checked for uniqueness.

**Benefit:**  
You can test specific data segments — for example:
- Recent dates (`where: "order_date > current_date - interval '7 days'"`)
- Active records (`where: "is_active = true"`)
- Valid data ranges (`where: "price > 0"`)
---

## 6. Configuring Error and Warning Thresholds

Sometimes, you may not want a test to **fail immediately** if only a small number of records violate a rule.

You can configure thresholds using:

- `error_if` → defines when DBT should **error**
- `warn_if` → defines when DBT should **warn**

### Example

```yaml
- unique:
    warn_if: ">=1"
    error_if: ">4"
```

✅ Interpretation:
- If **1 or more** records fail → show a **warning**.
- If **more than 4** records fail → show an **error**.

### Output Example
- WARN: unique_products_snapshot_category - Got 4 results, configured to warn if >= 1


---

## 7. Example: Forcing a Failing Test

Let’s create a test that intentionally fails.

```yaml
- name: category
  tests:
    - unique:
        warn_if: ">1"
        error_if: ">3"
        store_failures: true
```

✅ We know `category` has duplicates, so it will:
- Fail when more than 3 duplicate records exist.
- Store the failed results for inspection.

---

## 8. Using `store_failures`

When `store_failures: true` is enabled, DBT **stores failing rows** in a new schema.

### Behavior:
- A new schema (e.g. `dbt_test__audit`) is automatically created.
- Each failed test is stored in a table named after the test.

**Example table name:**
dbt_test__audit.unique_products_snapshot_category

### Inspect Failed Rows

In Databricks (or your SQL IDE):

```sql
SELECT *
FROM dbt_test__audit.unique_products_snapshot_category;
```

✅ The table shows **all rows** that failed the uniqueness test.

This helps with **data debugging** and **failure tracking**.

---

## 9. Using `limit` to Restrict Output

For large datasets, you can use `limit` to cap how many failing rows are returned and stored.

### Example

```yaml
- unique:
    limit: 1000
```

✅ DBT will only return and store the **first 1000 failures**.

**Use case:**  
When millions of records might fail — this prevents performance bottlenecks or oversized failure tables.

---

## 10. Full Example: Advanced Snapshot Test Configurations

📄 `snapshots/_snapshots_properties.yml`

```yaml
version: 2

snapshots:
  - name: products_snapshot
    columns:
      - name: id
        tests:
          - unique:
              where: "dbt_valid_to IS NULL"
              severity: warn
              store_failures: true
              warn_if: ">0"
              error_if: ">5"
              limit: 1000
```

✅ Summary:
| Config | Description |
|---------|--------------|
| `where` | Filters test scope to active records |
| `severity` | Sets test result level (error/warn) |
| `store_failures` | Saves failed rows for debugging |
| `warn_if` / `error_if` | Controls thresholds for failure levels |
| `limit` | Restricts how many failed rows are processed |

---

## 11. Running and Reviewing Tests

Run tests selectively:

```bash
dbt test --select path:snapshots/
```

### Example Output
Failure in test unique_products_snapshot_category
Got 4 results, configured to error if >3
Failure rows stored in dbt_test__audit.unique_products_snapshot_category

In Databricks:

- Navigate to your project catalog
- Open schema `dbt_test__audit`
- Query `unique_products_snapshot_category` to see failure details

---

## 12. Best Practices

✅ Use `where` for **snapshot-based testing** to avoid duplicates across time.  
✅ Use `store_failures` for **auditability and debugging**.  
✅ Use `limit` for **performance protection** in large data sets.  
✅ Set `warn_if` and `error_if` thresholds for **non-critical vs. critical validation**.  
✅ Store YAML config files using logical names like `_snapshots_properties.yml`.

---

## 13. Final Example with Commit

Once testing is complete, you can clean up and commit changes:

```bash
git add snapshots/_snapshots_properties.yml
git commit -m "Added advanced tests to snapshot configuration"
```

---

## 14. Summary

| Configuration | Description | Example |
|----------------|--------------|----------|
| **`where`** | Filters rows included in a test | `where: "dbt_valid_to IS NULL"` |
| **`severity`** | Marks failure as warning or error | `severity: warn` |
| **`warn_if` / `error_if`** | Sets thresholds for warnings/errors | `warn_if: ">1"`, `error_if: ">4"` |
| **`store_failures`** | Persists failed rows in an audit schema | `store_failures: true` |
| **`limit`** | Limits number of failure rows processed | `limit: 1000` |

---

**In summary:**  
These advanced configurations allow you to **fine-tune DBT tests** — improving accuracy, visibility, and control.  
They’re especially valuable in **production-grade** projects where you need both flexibility and traceability in your data quality assurance.

# Creating Custom Generic Tests in DBT

## 1. Introduction

In DBT, you can create **custom generic tests** to validate data quality across multiple models and columns without duplicating SQL code.

Previously, we wrote a **singular test** — `assert_source_orders_quantity_unit_price_non_negative.sql` — which checked that `quantity` and `unit_price` in the `landing.orders` table were non-negative.

However, that test was **specific** to one table and not reusable.

In this lecture, we’ll refactor that into a **generic custom test** that can be applied to **any model and column**.

---

## 2. What Are Generic Custom Tests?

Generic custom tests:
- Are **parameterized** SQL macros.
- Can be applied across different **models and columns**.
- Are stored either:
  - In the `tests/generic/` folder, or
  - In the `macros/` folder.

**Tip:**  
DBT automatically passes two arguments to generic test macros:
- `model`
- `column_name`

You do **not** need to pass them manually — they are inferred from context.

---

## 3. Creating the Custom Generic Test

Create a new file:

`tests/generic/assert_non_negative.sql`

```sql
{% test assert_non_negative(model, column_name) %}

    SELECT *
    FROM {{ model }}
    WHERE {{ column_name }} < 0

{% endtest %}
```

### Explanation:
- `test` defines a macro-based test.
- `model` and `column_name` are **standard DBT arguments**.
- The query returns rows where the value is negative.
  - ✅ Pass: No rows returned.
  - ❌ Fail: One or more rows returned.

---

## 4. Applying the Test in YAML

Now that our test is generic, we can apply it to **any source or model column**.

Let’s configure it for the `landing.orders` source.

`models/sources/landing_sources.yml`

```yaml
version: 2

sources:
  - name: landing
    tables:
      - name: orders
        columns:
          - name: quantity
            tests:
              - assert_non_negative
          - name: unit_price
            tests:
              - assert_non_negative
```

DBT automatically recognizes `assert_non_negative` as a generic test macro.  
You do **not** need to pass `model` or `column_name` — DBT handles that internally.

---

## 5. Optional: Passing Additional Arguments

If your custom test requires **extra arguments**, you can pass them like this:

```yaml
- assert_non_negative:
    threshold: 0
    condition: "is_active = true"
```

But again — `model` and `column_name` are always **automatically provided** by DBT.

---

## 6. Running the Test

Run all source tests:

```bash
dbt test --select source:*
```

Output example:

Running 2 tests:
- assert_non_negative_landing_orders_quantity
- assert_non_negative_landing_orders_unit_price


Both tests passed — meaning no negative values exist.

---

## 7. Example: Adding Severity (Optional)

You can add test **severity levels** if needed:

```yaml
- assert_non_negative:
    severity: warn
```

This will mark test failures as **warnings** instead of hard errors.

---

## 8. Committing the Changes

Once verified, commit your new test.

```bash
git add tests/generic/assert_non_negative.sql models/sources/landing_sources.yml
git commit -m "Added generic custom tests to landing.orders quantity and unit_price"
```

✅ Changes have been committed to the `feature/models` branch.

---

## 9. Additional Example: Custom Arguments in Generic Tests

You can define **custom arguments** for more complex test logic.

Example: `relationships` test using extra arguments.

`tests/generic/relationships.sql`

```sql
{% test relationships(model, column_name, field, to) %}

    SELECT {{ column_name }}
    FROM {{ model }}
    LEFT JOIN {{ to }}
    ON {{ model }}.{{ column_name }} = {{ to }}.{{ field }}
    WHERE {{ to }}.{{ field }} IS NULL

{% endtest %}
```

Usage:

```yaml
- relationships:
    to: ref('customers')
    field: id
```

✅ `model` and `column_name` are passed automatically.  
✅ `to` and `field` are explicitly provided as **custom arguments**.

---

## 10. Summary

| Concept | Description | Example |
|----------|--------------|----------|
| **Custom Generic Test** | A reusable test defined as a macro | `assert_non_negative` |
| **Arguments** | Automatically includes `model` and `column_name` | No manual input required |
| **Location** | Place under `tests/generic/` or `macros/` | `tests/generic/assert_non_negative.sql` |
| **Configuration** | Add under columns in YAML | `tests: - assert_non_negative` |
| **Run Command** | Execute via `dbt test --select source:*` | Runs all source tests |
| **Extra Arguments** | Add flexibility with custom parameters | `field`, `to`, etc. |

---

## 11. Key Takeaways

✅ **Generic tests** are macros you can reuse across models and columns.  
✅ `model` and `column_name` are **inferred automatically**.  
✅ You can extend them with **custom arguments** for more advanced logic.  
✅ Store them in `tests/generic/` or `macros/`.  
✅ Use YAML configuration to apply them easily.  
✅ Run selectively using `dbt test --select source:*`.

---

**In summary:**  
By converting your singular SQL tests into **generic reusable macros**, you make your DBT project cleaner, more modular, and scalable — ensuring consistent data validation across your entire pipeline.

# Using the DBT Utils Package for Testing

## 1. Introduction

The **DBT Utils** package provides a set of **prebuilt, reusable macros and generic tests** that make testing faster and more consistent — without writing custom SQL each time.

In this lecture, we’ll explore how to use **`dbt_utils`** to replace custom tests (like our earlier `assert_non_negative` test) with more flexible, package-provided alternatives.

---

## 2. Installation Recap

We’ve already installed the **DBT Utils** package in our project.

📄 `packages.yml`

```yaml
packages:
  - package: dbt-labs/dbt_utils
    version: 1.1.1
```

Then run:

```bash
dbt deps
```

✅ This downloads and installs the `dbt_utils` package in your `dbt_packages/` directory.

---

## 3. Exploring the Package

In the documentation, DBT Utils provides a wide range of **useful macros and tests**.  
Examples include:
- `expression_is_true`
- `equality`
- `recency`
- `not_constant`
- `cardinality_equality`
- and many others.

Each comes with configurable arguments and optional settings.

---

## 4. The `expression_is_true` Generic Test

One of the most versatile tests is:
- dbt_utils.expression_is_true

This test asserts that a given **SQL expression** evaluates to **TRUE** for all records.

### Syntax

```yaml
tests:
  - dbt_utils.expression_is_true:
      expression: "<SQL expression>"
```

✅ **If all rows satisfy the condition** → test passes  
❌ **If any row fails the condition** → test fails

---

## 5. Replacing Our Custom Test with DBT Utils

Previously, we created a custom generic test `assert_non_negative` to ensure that `quantity` and `unit_price` were not negative.

Now, we’ll replace it with the **DBT Utils** version.

📄 `models/sources/landing_sources.yml`

```yaml
version: 2

sources:
  - name: landing
    tables:
      - name: orders
        columns:
          - name: quantity
            tests:
              - dbt_utils.expression_is_true:
                  expression: "quantity >= 0"

          - name: unit_price
            tests:
              - dbt_utils.expression_is_true:
                  expression: "unit_price >= 0"
```

✅ This does the same as our previous custom test:
- Checks that all values are greater than or equal to zero.
- Fails if any negative value exists.

---

## 6. Running the Test

Execute all tests for your sources:

```bash
dbt test --select source:*
```

✅ Example output:

Running 2 tests:

- dbt_utils_expression_is_true_landing_orders_quantity
- dbt_utils_expression_is_true_landing_orders_unit_price
- PASS=2 WARN=0 ERROR=0 SKIP=0 TOTAL=2

---

## 7. Configuring the Test at the Model Level

Instead of defining the test for each column, you can define it once for the entire model.

📄 `models/sources/landing_sources.yml`

```yaml
version: 2

sources:
  - name: landing
    tables:
      - name: orders
        tests:
          - dbt_utils.expression_is_true:
              expression: "quantity >= 0 AND unit_price >= 0"
```

✅ This ensures **both conditions** must be true for every record in the table.

---

## 8. Logical Difference Between Column and Model-Level Tests

| Scope | Definition | Behavior |
|--------|-------------|-----------|
| **Column-level** | Each column tested individually | Fails if any single column value violates condition |
| **Model-level** | Entire row tested with logical expression | Fails if **any record** violates the combined condition |

**Example difference:**

- Column test: fails if any `quantity < 0`
- Model test: fails only if `quantity < 0 AND unit_price < 0` in same row (depending on expression logic)

---

## 9. Example with Severity

You can also specify **severity**:

```yaml
- dbt_utils.expression_is_true:
    expression: "quantity >= 0"
    severity: warn
```

✅ Result:
- Displays a **warning** instead of a hard error if test fails.

---

## 10. Running Combined Tests

Run all source-level and model-level tests:

```bash
dbt test --select source:*
```

✅ Example output:
- PASS=3 WARN=0 ERROR=0 SKIP=0 TOTAL=3

- Two column-level tests (`quantity`, `unit_price`)
- One model-level test (`orders` table-level condition)

---

## 11. Reverting to Custom Tests (Optional)

If you prefer to keep your **custom generic test (`assert_non_negative`)**, you can revert the YAML configuration:

```yaml
- assert_non_negative
```

Both approaches are valid —  
`dbt_utils` simply saves time and improves **standardization** across your project.

---

## 12. Summary

| Concept | Description | Example |
|----------|--------------|----------|
| **Package** | `dbt_utils` provides reusable macros and tests | Installed via `packages.yml` |
| **Macro Used** | `expression_is_true` | Asserts that a condition is true for all rows |
| **Arguments** | `expression` — SQL condition that must hold true | `"quantity >= 0"` |
| **Level** | Can be applied at column or model level | Column: checks per field, Model: checks per row |
| **Severity** | Optional config to mark as `warn` or `error` | `severity: warn` |
| **Run Command** | Execute with `dbt test --select source:*` | Runs all source-level tests |

---

# Using the DBT Expectations Package for Data Quality Testing

## 1. Introduction

Another very useful package for testing is **DBT Expectations**.  
This package integrates testing capabilities inspired by **Great Expectations**, a popular open-source framework for data validation.

The goal of **DBT Expectations** is to make it easy to perform **data quality testing directly in your DBT workflow**, using predefined expectations about your data.

---

## 2. Overview of DBT Expectations

The package provides a wide variety of tests grouped into categories, such as:

- **Table shape tests** — check that your tables contain expected columns.  
- **Missing values tests** — detect nulls or missing entries.  
- **Uniqueness tests** — ensure primary key integrity.  
- **Type tests** — validate data types.  
- **Set and range tests** — check that values fall within specific bounds.  
- **String matching tests** — pattern or regex-based tests.  
- **Aggregate function tests** — validate aggregated metrics.  
- **Multi-column and distributional tests** — check relationships or statistical distributions.

These categories make DBT Expectations extremely versatile for enforcing consistency and correctness across your datasets.

---

## 3. Installing DBT Expectations

To install the package, add it to your `packages.yml` file.

📄 `packages.yml`

```yaml
packages:
  - package: calogica/dbt_expectations
    version: [">=0.8.5", "<0.9.0"]
```

Then install it by running:

```bash
dbt deps
```

This downloads the **DBT Expectations** package and any dependencies.  
After installation, you can confirm the package exists under `dbt_packages/`.

You might also notice a dependency like `dbt_date`, which is automatically included because some DBT Expectations macros rely on it.

---

## 4. Example: Table Shape Test

A common use case is verifying that a table still contains the expected set of columns.  
The macro **`expect_table_columns_to_match_set`** helps ensure your model’s structure hasn’t changed unexpectedly.

For example, here’s the syntax:

```yaml
tests:
  - dbt_expectations.expect_table_columns_to_match_set:
      column_list: ["col_a", "col_b"]
```

This ensures that the model contains **exactly** the two specified columns.  
If the model includes additional or missing columns, the test fails.

---

## 5. Applying It to a Model

Let’s apply this to our **`gold_sales_daily`** model.

The model has the following columns:
- `order_date`
- `product_name`
- `category`
- `vendor`
- `city`
- `state`
- `sales_channel`
- `total_revenue`

We want to make sure this structure remains consistent over time.

📄 `models/gold/_gold.yml`

```yaml
version: 2

models:
  - name: gold_sales_daily
    tests:
      - dbt_expectations.expect_table_columns_to_match_set:
          column_list: [
            "order_date",
            "product_name",
            "category",
            "vendor",
            "city",
            "state",
            "sales_channel",
            "total_revenue"
          ]
```

---

## 6. Running the Test

Now, execute the test for the model:

```bash
dbt test --select gold_sales_daily
```

✅ **Expected Output:**
- PASS=1 WARN=0 ERROR=0 SKIP=0 TOTAL=1

The test passes because all the expected columns exist.

---

## 7. Verifying Test Behavior on Failure

To verify that the test is working correctly, let’s simulate a failure by removing one column (e.g., `order_date`) from the `column_list`.

Updated configuration:

```yaml
- dbt_expectations.expect_table_columns_to_match_set:
    column_list: [
      "product_name",
      "category",
      "vendor",
      "city",
      "state",
      "sales_channel",
      "total_revenue"
    ]
```

Now re-run the test:

```bash
dbt test --select gold_sales_daily
```

❌ **Expected Output:**
- FAIL=1 WARN=0 ERROR=0 SKIP=0 TOTAL=1

The test fails because the `order_date` column exists in the model but is missing from the expected list.  
This confirms the macro works as intended.

---

## 8. Interpreting the Results

When a test fails:
- DBT Expectations provides detailed feedback showing **which columns are missing or unexpected**.
- This ensures schema changes don’t go unnoticed.
- You can quickly verify column consistency across different environments (e.g., development vs. production).

---

## 9. Additional Example Tests

Other common DBT Expectations macros include:

| Category | Macro | Description |
|-----------|--------|-------------|
| **Missing Values** | `expect_column_values_to_not_be_null` | Ensures column contains no null values |
| **Uniqueness** | `expect_column_values_to_be_unique` | Validates unique key constraints |
| **Ranges** | `expect_column_values_to_be_between` | Checks numerical range bounds |
| **Sets** | `expect_column_values_to_be_in_set` | Validates that values match predefined categories |
| **String Patterns** | `expect_column_values_to_match_regex` | Ensures strings match a given regex pattern |
| **Aggregations** | `expect_column_mean_to_be_between` | Checks statistical consistency |

Each of these can be configured in YAML similarly to the table shape test.

---

## 10. Reverting Changes

Once finished testing, revert any intentional modifications made for demonstration purposes.  
For instance, restore the original `column_list` that includes all expected fields.

```yaml
column_list: [
  "order_date",
  "product_name",
  "category",
  "vendor",
  "city",
  "state",
  "sales_channel",
  "total_revenue"
]
```

Then rerun your test:

```bash
dbt test --select gold_sales_daily
```

✅ The test passes again, confirming the model’s schema is correct.

---

## 11. Summary

| Concept | Description | Example |
|----------|--------------|----------|
| **Package** | `dbt_expectations` adds data quality tests inspired by Great Expectations | Installed via `packages.yml` |
| **Test Used** | `expect_table_columns_to_match_set` | Ensures model columns match an expected list |
| **Argument** | `column_list` | Defines which columns must be present |
| **Failure Behavior** | Test fails if any expected column is missing or if extras exist | Demonstrated with `order_date` removal |
| **Command** | `dbt test --select <model_name>` | Runs the test on a specific model |
| **Use Case** | Schema validation and column consistency | Applied to `gold_sales_daily` model |

---

