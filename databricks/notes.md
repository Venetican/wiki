# SQL Warehouses vs. Spark-based Clusters in Databricks

This note provides a comprehensive yet digestible overview of the key differences between SQL Warehouses and Spark-based Clusters in Databricks, including types, technical distinctions, and practical use cases.

---

## 1. Core Difference – SQL vs. Spark Engine

| Feature                  | SQL Warehouse                    | Spark Cluster                      |
|--------------------------|----------------------------------|------------------------------------|
| Execution Engine         | **Photon Engine** – optimized for fast SQL | **Apache Spark Engine** – powerful and general-purpose |
| Primary Use              | Analytical SQL workloads         | ETL, machine learning, data science, streaming, and more |
| Language Support         | SQL only                         | SQL, Python, Scala, R              |
| UI                       | Databricks SQL Workspace         | Databricks Workspace (Notebooks)   |

---

## 2. Types of Spark-based Compute Environments

| Type           | Use Case                                | Created When               | Shutdown Method           |
|----------------|------------------------------------------|----------------------------|----------------------------|
| All-purpose    | Development, exploration, interactive analysis | Manually (UI / API)       | Manual / idle timeout      |
| Job cluster    | Automated jobs and workflows             | Automatically by job       | After job completion       |

- You can run **Python, SQL, R, and Scala notebooks**.
- Full access to the **entire Spark API**.
- Designed for **Data Engineering**, **ML pipelines**, **data transformations**, **Delta Live Tables (DLT)**.
- Leverages the classic **Spark driver + executors** architecture.

---

## 3. Types of SQL Warehouses

| Type      | Engine   | Predictive IO | Intelligent Workload Mgmt (IWM) | Compute Location       | Startup Time | Auto-scaling | Best For                                |
|-----------|----------|----------------|----------------------------------|-------------------------|---------------|----------------|------------------------------------------|
| Serverless| Photon   | ✅              | ✅                                | Databricks-managed      | ⚡ 2–6 sec     | ✅ fast        | BI tools, ad hoc SQL, dbt, exploration   |
| Pro       | Photon   | ✅              | ❌                                | In your cloud account   | ~4 min        | Slower        | Hybrid workloads, VPC integration        |
| Classic   | Photon   | ❌              | ❌                                | In your cloud account   | ~4 min        | Slower        | Basic interactive SQL                    |

- Exclusively designed for **SQL queries** (Databricks SQL UI, BI tools like Power BI, and dbt).
- Ideal for **analysts**, **analytics teams**, and **reporting**.
- **Serverless** is the most performant option, leveraging Photon, predictive IO, and AI-based workload optimization.

---

## 4. Technical Comparison

| Feature                     | SQL Warehouse                      | Spark Clusters                     |
|-----------------------------|------------------------------------|------------------------------------|
| Engine                      | Photon (optimized for SQL)         | Apache Spark (general-purpose)     |
| Supported Languages         | SQL only                           | SQL, Python, Scala, R              |
| BI tool integration (ODBC/JDBC) | ✅ Native                      | ❌ Requires workarounds            |
| UDF Support                 | Limited (SQL-only UDFs)            | ✅ Full UDFs (Python, Scala)       |
| Startup Time                | ⚡ Serverless: ~2–6 sec, others ~4 min | ~1–4 min depending on config    |
| Credential Passthrough      | ❌ Requires Unity Catalog           | ✅ Supported with setup            |
| Data Governance             | Unity Catalog recommended          | Unity Catalog + SCIM               |
| Pricing Model               | Per query (efficient scaling)      | Per cluster uptime (driver + workers) |

---

## 5. When to Use What – Practical Cheat Sheet

| Use Case                                      | Recommended Compute Type                |
|-----------------------------------------------|------------------------------------------|
| Interactive BI queries (Power BI)             | ✅ Serverless SQL Warehouse              |
| Running dbt pipelines                         | ✅ Serverless or Pro SQL Warehouse       |
| ETL via Spark notebooks                       | ✅ Job Cluster                           |
| Data exploration using PySpark                | ✅ All-purpose Cluster                   |
| Machine Learning pipelines                    | ✅ Job Cluster                           |
| Delta Live Tables (DLT)                       | ✅ Job Cluster or dedicated DLT cluster  |
| Notebook-based development                    | ✅ All-purpose Cluster                   |
| Data federation from your private network     | ✅ Pro SQL Warehouse                     |
| Low-latency, query-heavy analytics workloads  | ✅ Serverless SQL Warehouse              |
| Simple interactive SQL queries                | ✅ Classic SQL Warehouse (cost-efficient)|

---

## Summary

- **SQL Warehouses** are ideal for fast, scalable SQL workloads, especially for **BI tools and analysts**.
- **Spark Clusters** provide a powerful and flexible compute environment suited for **engineering, ML, and complex transformations**.
- Choosing the right compute type helps optimize **cost**, **performance**, and **developer productivity**.

# What Does "Dedicated" Mean in Databricks?

## Definition

In Databricks, **“dedicated”** is *not* an official compute type or cluster type. Instead, it refers to a **usage model** – where compute resources (like clusters or SQL Warehouses) are **exclusively assigned** to a specific purpose, team, or process.

---

## 🔄 Dedicated vs. Shared – Comparison Table

| Feature                 | Dedicated                                | Shared                                       |
|-------------------------|-------------------------------------------|----------------------------------------------|
| Access                  | Exclusive – only for a specific team/job  | Multiple users, teams, or workloads share it |
| Performance Isolation   | ✅ Guaranteed compute isolation            | ❌ Potential slowdown from competing workloads |
| Environment Control     | High – strict ACLs and config possible    | Lower – more general-purpose configuration    |
| Cost                    | Higher (may underutilize resources)       | More cost-efficient due to shared usage       |
| Typical Use Cases       | Production ETL, reporting, compliance, HA | Development, exploration, testing             |

---

## What Can Be “Dedicated” in Practice?

| Environment             | How It Can Be "Dedicated"                                               |
|-------------------------|--------------------------------------------------------------------------|
| All-purpose Cluster     | Assigned to a specific team via permissions and cluster ACLs            |
| Job Cluster             | **Always dedicated** to the job that creates it                         |
| SQL Warehouse (e.g., Pro) | Bound to a specific team, app, or dashboard (e.g., BI reporting)        |
| DLT Pipeline Compute    | Cluster is created solely for that Delta Live Table pipeline             |

---

## How to Create Dedicated Environments

You can enforce dedicated usage in several ways:

- **Cluster Policies**: Restrict who can launch specific clusters with defined configurations.
- **Access Control Lists (ACLs)**: Control access at the user/team level to clusters and warehouses.
- **Naming Conventions**: Use names like `etl-prod-dedicated-cluster` or `finance-sql-warehouse` for clarity and governance.
- **Compute Isolation**: Use infrastructure-level separation such as:
  - **VPC isolation**
  - **Private Link endpoints**
  - **Region-based separation**

---

## Summary

- “Dedicated” is a *practice*, not a built-in setting.
- Best used for **secure, stable, high-priority workloads**.
- Provides **better control, performance, and compliance** at the cost of potentially higher resource usage.

# Setting Up a Cluster in Databricks

This guide walks through the process of creating and configuring a cluster in **Databricks**, including key components, configurations, and best practices.

---

## What is a Cluster?

A **Databricks cluster** is a group of virtual machines (VMs) that work together to execute code. It is the compute environment where Spark jobs run.

- **Driver node**: The main coordinator responsible for scheduling tasks and managing workers.
- **Worker nodes**: Execute tasks assigned by the driver in parallel.
- Clusters can be **multi-node** (driver + workers) or **single-node** (only driver node).

---

## Step-by-Step: Creating a Cluster

### 1. Navigate to Compute
- In the left-hand sidebar, go to **Compute**.
- From here, you can manage all clusters (create, edit, delete, monitor).

### 2. Create a New Cluster
- Click **Create Compute** under *All-purpose compute*.
- Rename the default cluster name (e.g., `Demo Cluster`).
- Leave the **Policy** as `Unrestricted` to allow full customization (unless using cluster policies for governance).

---

## Cluster Configuration Options

### 3. Cluster Type: Single-Node vs. Multi-Node
| Type         | Description                                               |
|--------------|-----------------------------------------------------------|
| **Single Node** | No workers – the Spark job runs entirely on the driver. Efficient for small workloads, tutorials, or development. |
| **Multi Node**  | One driver + multiple workers. Suitable for large-scale jobs, production pipelines, ML training. |

> For training or light use, a **single-node cluster** is sufficient and cost-effective.

---

### 4. Access Mode

| Mode         | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| **Single User** | Only one user can access this cluster. Ideal for personal notebooks.        |
| **Shared**      | Multiple users can share the cluster. Only **SQL** and **Python** workloads are supported. |

> Use **Single User** unless collaborative development is needed.

---

### 5. Databricks Runtime

- A pre-configured image containing:
  - A specific version of **Apache Spark**
  - Languages like **Scala**, **Python**, etc.
  - Preinstalled libraries (e.g., MLflow, Koalas)
- Select a **Long Term Support (LTS)** version like `11.3 LTS`.
- Optionally enable **Photon** – a **C++-based vectorized query engine** that dramatically boosts performance for SQL workloads.

---

### 6. Worker Node Configuration

- Select the VM size based on:
  - **vCPUs**
  - **Memory**
  - **Disk**
- Options depend on your cloud provider (e.g., **Azure**).
- You can enable **Auto-scaling**:
  - Define min/max number of workers.
  - Databricks will scale up/down based on workload.
- Otherwise, specify a **fixed number of workers** (e.g., 3 workers).

> You can keep the **driver configuration** the same as the worker, or customize it separately.

---

### 7. Auto-Termination

- Enable **Auto-Termination** to save costs.
- Specify idle timeout in minutes (e.g., `30 minutes`).
- If the cluster is inactive for that duration, it will automatically shut down.

---

## Cost: Understanding DBUs

- **DBU** = **Databricks Unit**: A unit of processing power per hour.
- Each VM configuration has a known DBU rate (visible in the right panel).
- You pay for DBUs consumed, based on cluster usage.
- **Single node clusters** use fewer DBUs → lower cost.

---

## Creating the Cluster

1. Review the cluster summary on the right.
2. Click **Create**.
3. Azure will provision the necessary virtual machines with your selected configuration.

---

## Cluster Management Features

- Go back to **Compute** anytime to:
  - **Start / Stop / Terminate** clusters.
  - **Delete** clusters.
  - **Edit** cluster settings (changing config may require a restart).
  - View **status** (Running / Terminated).

---

## Monitoring Tools

### 1. Event Log
- Tracks all cluster-related events:
  - Creation
  - Termination
  - Configuration changes
  - Failures or restarts

### 2. Driver Log
- Contains logs from notebooks, Spark jobs, and libraries.
- Useful for debugging and performance tuning.

---

## Summary

| Concept                      | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| **Cluster**                  | A set of VMs for running Spark jobs in Databricks                          |
| **Driver Node**              | Coordinates execution across worker nodes                                  |
| **Single Node Cluster**      | Entire workload runs on a single VM (no workers)                           |
| **Databricks Runtime**       | Pre-built environment with Spark, Scala, Python, libraries                 |
| **Photon**                   | Optional, high-performance engine for SQL                                  |
| **Auto-scaling**             | Dynamically adjusts the number of workers                                  |
| **Auto-termination**         | Shuts down the cluster after inactivity to save costs                      |
| **DBU (Databricks Unit)**    | Billing unit based on cluster size and runtime duration                    |

---

**Best Practice**: Always enable **auto-termination** for development clusters, and prefer **single-node clusters** for light workloads to minimize cost.

# Databricks Notebooks – Complete Guide

Databricks Notebooks provide a powerful, interactive environment for writing and executing code in various languages. They are central to workflows in data engineering, data science, and analytics.

---

## What Is a Databricks Notebook?

- An interactive development interface for writing and executing code cell-by-cell.
- Similar to Jupyter Notebooks, but integrated with Databricks runtime and ecosystem.
- Supports **multi-language**, **data visualization**, **collaboration**, and **modular development**.

---

## Supported Languages via Magic Commands

| Language | Magic Command | Description                                                                 |
|----------|----------------|-----------------------------------------------------------------------------|
| Python   | %python        | Default language (supports PySpark, Pandas, dbutils, ML, DLT, etc.)         |
| SQL      | %sql           | Write SQL queries, work with Delta Lake, tables, views                      |
| Scala    | %scala         | Lower-level Spark API, powerful but less commonly used                      |
| R        | %r             | For statistical modeling and analysis (rarely used)                         |
| Shell    | %sh            | Run bash commands (`ls`, `pip install`, etc.)                               |
| Markdown | %md            | Add formatted text, tables, links, headings, and images                     |
| FS       | %fs            | File System commands (`%fs ls`, `%fs cp`) – wrapper over `dbutils.fs`       |
| Run      | %run           | Executes another notebook and imports its variables and logic               |

All magic commands start with `%` and switch the context/language of a cell.

---

## Basic Notebook Workflow

1. **Create Notebook**:  
   - Go to `Workspace → Create → Notebook`
   - Name it and choose the default language (e.g., Python)

2. **Attach to Cluster**:  
   - Notebooks must be attached to a running **All-purpose** or **Job** cluster

3. **Execute Code**:  
   - Use ▶️ icon or `Shift + Enter`  
   - Run individual cells or all cells above/below

4. **Add New Cells**:  
   - Use the `+` below any cell (either code or Markdown)

5. **Rename Notebook**:  
   - Click the title at the top of the notebook

---

## Changing Language Within a Notebook

- The default language is set during creation.
- You can override the language in any cell using magic commands like `%sql`, `%r`, `%scala`, `%md`.

Variables are **not shared** between cells of different languages.

---

## Magic Commands – Overview

| Command       | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| %python       | Switches to Python for the current cell                                     |
| %sql          | Executes SQL queries                                                        |
| %scala        | Executes Scala code                                                         |
| %r            | Executes R code                                                             |
| %md           | Formatted Markdown (headings, lists, links, etc.)                           |
| %sh           | Runs shell commands                                                         |
| %fs           | File system operations over DBFS                                            |
| %run          | Runs another notebook and loads its variables/functions                     |

---

## Working with Files – DBFS (Databricks File System)

Two primary methods:

| Method        | Description                                                  | Example                       |
|---------------|--------------------------------------------------------------|-------------------------------|
| %fs magic     | Shell-like commands for exploration                          | %fs ls /databricks-datasets   |
| dbutils.fs    | Python object API – allows programmatic logic and variables  | dbutils.fs.ls("/...")         |

**Example**:
```python
files = dbutils.fs.ls("/databricks-datasets")
display(files)  # shows a visual table of files
```
- `%fs` is ideal for quick exploration.
- `dbutils.fs` is preferred when you need to work with results in code.

---

## Notebook Modularity with %run

Use `%run` to **include other notebooks** and reuse code or variables.

```python
%run ./Includes/Setup
print(full_name)
```
The included notebook can contain reusable code like:

```python
full_name = "John Doe"
```
Useful for:
- Initialization scripts
- Reusable utility functions
- Structuring notebooks into logical components

---

## Databricks Utilities (`dbutils`)

| Module              | Functionality                                                                 |
|---------------------|------------------------------------------------------------------------------|
| dbutils.fs          | File operations (list, copy, delete directories)                              |
| dbutils.secrets     | Manage secrets (e.g., API keys, database credentials)                         |
| dbutils.widgets     | Define parameters for notebook execution                                      |
| dbutils.notebook    | Run other notebooks like a function with input/output                        |

---

## Outputs and Visualization

- Use `display()` to render tables and visuals (supports bar, pie, scatter, etc.).
- SQL cells auto-display tabular output – no need for `display()`.
- Output limit: **1,000 rows per cell**.

---

## Markdown Formatting with %md

- **Headings**: `#`, `##`, `###`
- **Bold**: `**text**`, *Italic*: `_text_`
- **Lists**: `- item`, `* item`, `1. item`
- **Links**: `[label](https://...)`
- **Tables**:
  | Column A | Column B |
  |----------|----------|
  | A1       | B1       |
  | A2       | B2       |

---

## Notebook Export & Import

| Action               | How-To                                                      |
|----------------------|-------------------------------------------------------------|
| Export Notebook      | `File → Export → IPython (.ipynb)` or `HTML`                |
| Export Folder        | Click on folder → Export as `.dbc` archive                  |
| Import Notebook      | `Workspace → Import` → Select notebook or DBC file          |

---

## Revision History

- Each notebook keeps a **history of edits**.
- Click on **Last edit** → browse revisions.
- Click **"Restore this revision"** to revert to an earlier version.

---

## Additional Insights

- Notebooks are:
  - ✅ Versioned
  - ✅ Collaborative
  - ✅ Auditable
- Share with teammates and add comments.
- Schedule notebooks as **Jobs** or call as **functions**.
- Notebooks are **runtime-agnostic**: can run on any cluster with a matching Databricks Runtime.
- Can be used as source code for **Delta Live Tables (DLT)** pipelines.

---

## Summary

Databricks Notebooks provide:
- Multi-language support with `%magic` commands
- Interactive exploration and visualization
- Modular architecture via `%run`
- File system access through `%fs` and `dbutils.fs`
- Parameterization via `dbutils.widgets`
- Full revision history and export/import options

They are a core tool for data engineers, analysts, and scientists working on the Databricks platform.


# Databricks Unit (DBU) – Complete Overview

A **DBU (Databricks Unit)** is an abstract unit of processing power usage billed on a per-hour basis depending on the type of compute environment used.

---

## What Is a DBU?

- DBU = **Databricks Unit**  
- Represents **consumed compute power per hour**
- Billing is based on:
  - **Cluster type**
  - **VM instance type**
  - **Databricks Runtime**
  - **Number of active nodes** (driver + workers)
  - **Runtime duration**

---

## How Is DBU Calculated?

| Factor                | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Compute Type**      | All-purpose cluster, Job cluster, SQL Warehouse (Classic, Pro, Serverless) |
| **Instance Type**     | e.g., Standard_DS3_v2, i3.xlarge, E8s_v4 – each with different DBU rates    |
| **Databricks Runtime**| Different versions (e.g., 11.3 LTS, ML, Genomics) have specific pricing     |
| **Number of Nodes**   | Total count of driver and workers                                           |
| **Uptime Duration**   | Measured in hours (rounded from minutes); Serverless may bill by second     |

---

## Example Calculation – Job Cluster

You run a **Job cluster** with:
- 1 driver
- 2 workers
- Each using instance type `Standard_DS3_v2` with a DBU rate of **0.5 DBU/hour**

Duration: **1 hour**

DBU Consumption:
3 nodes × 0.5 DBU × 1 hour = **1.5 DBU**

---

## How Much Does 1 DBU Cost?

Depends on:
- **Cloud Provider** (Azure, AWS, GCP)
- **Pricing Tier** (Standard / Premium / Enterprise)

Typical Azure pricing (approximate):

| DBU Type                      | Price per DBU        |
|-------------------------------|-----------------------|
| Standard (e.g. job cluster)   | $0.10 – $0.40         |
| Serverless SQL Warehouse      | $0.40 – $0.55         |
| Specialized runtimes (ML, Genomics) | +$0.05 – $0.10 |

DBU price is separate from infrastructure costs (VM usage)

---

## Example DBU Rates by Compute Type

| Compute Type                   | DBU Rate (Approx.)         | Notes                                |
|--------------------------------|-----------------------------|---------------------------------------|
| All-purpose Cluster (Standard) | 0.22 DBU / node / hour      | For interactive dev                   |
| Job Cluster                    | 0.15 DBU / node / hour      | Optimized for scheduled jobs          |
| SQL Warehouse – Classic        | 0.22 DBU / vCore / hour     | Based on warehouse size               |
| SQL Warehouse – Pro            | 0.30 – 0.40 DBU / vCore / hr| Enhanced with predictive IO           |
| SQL Warehouse – Serverless     | 0.40 – 0.55 DBU / vCore / hr| Fully managed, fastest start-up       |
| Photon / ML / Genomics Runtimes| +0.05 – 0.10 DBU            | Added cost for performance libraries  |

---

## Key Cost Formula

Total Cost = (DBU × $ per DBU) + (VM hourly cost × usage duration)

---

## How to Monitor DBU Consumption

**Navigate to**: `Admin Console → Usage`

You can filter usage by:
- Cluster
- User
- Date range
- Compute type

Export usage data as **CSV** for billing or audits.

---

## Summary Table

| Question               | Answer                                                                  |
|------------------------|-------------------------------------------------------------------------|
| What is a DBU?         | A compute usage unit billed hourly in Databricks                        |
| What affects it?       | Cluster type, VM type, runtime version, uptime, number of nodes         |
| Is DBU the final cost? | ❌ No – VM usage costs are added separately                             |
| Price of 1 DBU?        | Ranges from $0.10 to $0.55 depending on usage and compute type          |
| Where to track usage?  | Admin Console → Usage or Billing Dashboard                              |

---

## Tips

- Use **job clusters** when possible – they are cheaper than all-purpose clusters.
- Use **auto-termination** to limit unnecessary DBU costs.
- Enable **cluster policies** to prevent expensive configuration misuse.
- Analyze your DBU consumption regularly to **optimize cost per workload**.

# Databricks Repos – Complete Guide

Databricks Repos enables native **Git integration** in your Databricks workspace. This allows full version control, collaboration, and project management through popular Git providers such as GitHub and Azure DevOps.

---

## Why Use Databricks Repos?

- Notebooks have basic revision history, but:
  - No branching or merging
  - History can be manually deleted
- Databricks Repos offers full **source control** using Git

---

## 🔧 Setting Up Git Integration

1. **Open User Settings**
   - Click your username in the top bar → `User Settings`
   - Navigate to the **Git Integration** tab

2. **Select Git Provider**
   - Choose from GitHub, GitLab, Azure DevOps, etc.

3. **Provide Git Credentials**
   - Username from your Git provider
   - **Personal Access Token** (PAT)

4. **Generate GitHub Token (Demo)**
   - GitHub → Avatar → Settings → Developer Settings
   - Personal Access Tokens → Classic → Generate new token
   - Set:
     - Note (description)
     - Expiration date
     - Scope: ✅ `repo`
   - Click `Generate Token`
   - Copy the token immediately (not visible again)

5. **Connect Databricks to GitHub**
   - Enter username and token in Databricks Git Integration tab
   - Click `Save`

Git is now successfully integrated into Databricks.

---

## Create a Git Repository (GitHub)

1. Go to GitHub → Click `New`
2. Name the repository (e.g., `demo-repo`)
3. Set to **Private**
4. Add README file
5. Click `Create repository`
6. Copy the repository URL

---

## Add Repository in Databricks

1. Go to **Repos** tab in Databricks sidebar
2. Click `Add Repo`
3. Paste the Git URL
4. Git provider and repo name are auto-filled
5. Click `Submit`

Databricks now creates a **local clone** of the remote repository.

---

## Working with Branches

- You start on the default `main` branch.
- To create a new branch:
  - Open Repo dialog
  - Click `Create branch`
  - Name it (e.g., `dev-branch`)
  - Click `Create`

The new branch becomes the current branch (can switch anytime from the dropdown).

---

## Adding Notebooks and Folders

1. Create a folder (e.g., `MyFolder`)
2. Add a new notebook or:
   - Import a notebook from a file or URL
   - Clone an existing notebook from Workspace

**To Clone a Notebook**:
- Go to `Workspace`
- Click next to a notebook (e.g., `Notebook Basics`)
- Select `Clone`
- Choose your new folder inside the repo

---

## Commit and Push Changes

1. Click the branch name to open changes view
2. Write a commit message
3. Click `Commit & Push`

Your changes are now saved to the remote Git repository.

---

## Pull Request Workflow (in GitHub)

1. Switch to the `dev` branch on GitHub
2. Click `Contribute → Open pull request`
3. Add title & description
4. Click `Create pull request`
5. Click `Merge pull request → Confirm`

---

##  Pull Changes into Databricks

1. Go back to Databricks Repos
2. Switch to the `main` branch
3. Open Repo dialog → Click `Pull`
4. Confirm

Your folder and notebooks are now visible in `main`.

---

## Best Practices

- Pull frequently to avoid merge conflicts
- Use branches for feature development
- Commit regularly with clear messages
- Use `README.md` for project documentation

---

## Summary

| Feature                 | Databricks Repos Support |
|--------------------------|--------------------------|
| Git-based version control | ✅                      |
| Branching & merging      | ✅                      |
| Commit history           | ✅                      |
| Supports GitHub, Azure DevOps | ✅                 |
| Notebooks + files + folders | ✅                   |
| Local clone of remote repo | ✅                   |
| Collaboration ready      | ✅                      |

Databricks Repos combines the power of **Git** with the flexibility of **notebook-driven development**, making it ideal for collaborative data workflows.
