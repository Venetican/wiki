# AWS Fundamentals – Amazon S3 Overview

## What is Amazon S3?
- **Core AWS storage service**.
- Advertised as **infinitely scalable object storage**.
- Backbone for many websites and AWS service integrations.
- Foundational component for data engineering.

---

## Common Use Cases
- Backup and general file storage.
- Disaster recovery (cross-region backups).
- Archival storage (via **S3 Glacier**).
- Hybrid cloud storage (on-prem + cloud).
- Hosting applications and media (images, videos).
- **Data lakes** for big data analytics.
- Software delivery and static website hosting.

**Real-world examples**
- Nasdaq stores 7 years of data in **S3 Glacier**.
- Cisco runs analytics on data stored in S3.

---

## Buckets
- S3 stores data in **buckets**.
- Buckets are top-level containers.
- **Globally unique name** (across all AWS accounts & regions).
- Buckets are created in a **specific AWS region**.
- S3 appears global, but buckets are **region-scoped**.

### Bucket Naming Rules (High-Level)
- Length: **3–63 characters**.
- Lowercase letters, numbers, hyphens only.
- No uppercase letters or underscores.
- Must not resemble an IP address.
- Must start with a lowercase letter or number.

---

## Objects
- Files stored in S3 are called **objects**.
- Each object has:
  - **Key** (full path / name)
  - **Value** (file content)

### Object Key
- Full path of the object.
- Example:
  - `myfile.txt`
  - `folder1/folder2/myfile.txt`
- Key = **prefix + object name**.
- S3 has **no real directories** — folders are a UI abstraction.

---

## Object Characteristics
- **Maximum object size:** 5 TB.
- Files larger than **5 GB** require **multipart upload**.
- Objects may include:
  - **Metadata** (system or user-defined key-value pairs).
  - **Tags** (up to 10 key-value pairs, Unicode).
  - **Version ID** (if versioning is enabled).

---

## Key Concepts to Remember
- Bucket names are globally unique.
- Buckets live in a specific region.
- Objects are identified by keys (paths).
- No real directory structure—everything is an object key.
- Multipart upload required for large files.
- S3 is foundational for **data lakes and analytics**.

---


# Amazon S3 – Object Storage Fundamentals (Exam-Critical)

## Core Concept
- Amazon S3 is **not a filesystem**
- It is a **flat object storage system**
- The fundamental unit is an **object**, not a directory

## Object Model
- **Bucket** – globally unique container
- **Key (object key)** – unique identifier of an object
- **Value** – binary data (file content)
- **Metadata** – system + user-defined metadata

## No Real Directories
- No inodes
- No permission bits
- No hierarchical filesystem
- No real directories

- What looks like folders is only a **UI abstraction**

## Object Key & Prefixes
- Example object:
  - `s3://my-bucket/data/2025/01/01/file.parquet`

- Internally:
  - Bucket: `my-bucket`
  - Key: `data/2025/01/01/file.parquet`

- S3 does **not** understand:
  - `data/`
  - `2025/`
  - `01/`

- The entire path is a **single string key**

## How the "Directory" Illusion Works
- AWS Console, CLI and SDK:
  - parse prefixes
  - split keys by `/`
  - render them as folders

- Storage layer:
  - no directory entity exists
  - prefix = substring of object key

## Practical Consequences (Very Important)

### No Empty Directories
- `s3://bucket/data/`

- Does not exist unless at least one object exists, for example:
- `s3://bucket/data/_SUCCESS`

### Renaming a Directory
- No directory rename operation exists
- Renaming equals **COPY + DELETE**
- All objects with the prefix must be copied
- Old objects must be deleted

- Consequences:
  - expensive
  - slow
  - non-atomic

### Prefix Design Affects Performance
- S3 scales internally by **prefix**, not directories

- Good design:
  - `s3://bucket/data/date=2025-01-01/hour=13/part-000.parquet`

- Bad design:
  - `s3://bucket/data/all_files_here/file_000001.parquet`

### Glue / Athena / Spark Partitioning
- Partitioning is a mapping:
  - partition column → S3 key prefix

- S3 itself knows nothing about partitions
- Partition logic lives in:
  - Glue Data Catalog
  - Hive Metastore
  - Query engines (Athena, Spark, Trino)

## One-Sentence Exam Definition
- Amazon S3 is a flat object storage system where "directories" are only prefixes in object keys, not real filesystem structures.


# Amazon S3 Console Walkthrough – Practical Implementation Guide

> **Building on the fundamentals**: Now that we understand S3's flat object storage model, let's explore how these concepts manifest in the AWS Console and what practical implications they have for data engineering workflows.

---

## Bucket Creation & Configuration

### Step 1: Region Selection & Global View
- **Key concept**: Buckets are **region-scoped resources**, even though S3 appears "global"
- In the console, you select a **specific region** for bucket creation (e.g., `eu-north-1`)
- **Important**: The console lists **all buckets across all regions** in one unified view
  - This can mislead beginners into thinking buckets are global
  - Remember: each bucket exists in exactly one region

### Step 2: Bucket Type Selection
- **Options available**:
  - **General purpose** ← Choose this for exam and standard workloads
  - Directory buckets (advanced, out of exam scope)
- **Note**: If you don't see the choice, it's implicitly **General purpose**

### Step 3: Bucket Naming – Global Uniqueness Requirement
- **Critical rule**: Bucket names must be **globally unique** across:
  - All AWS accounts
  - All regions
- **If name is taken**: Creation fails with "bucket already exists" error
- **Practical naming strategy**:
  ```
  [personal-prefix]-[purpose]-[version-suffix]
  Example: daniel-data-lake-v1
  ```

### Step 4: Security & Access Configuration

#### Object Ownership (ACLs)
- **Recommended default**: **ACLs disabled**
- **Why**: Prefer IAM policies and bucket policies for access control
  - More secure and manageable
  - Better integration with AWS security model

#### Block Public Access
- **Keep enabled by default** ✓
- **Ensures**:
  - Objects are **not publicly reachable**
  - Only authorized principals (IAM users/roles) can access objects
- **When to disable**: Only for specific use cases like static website hosting (with caution)

### Step 5: Versioning Configuration
- **Default**: Disabled (can be enabled later)
- **Enable versioning for**:
  - Recovery from accidental overwrites/deletes
  - Auditability and compliance
  - Data lifecycle management strategies

### Step 6: Tags (Optional but Recommended)
- **Not required** for basic demos
- **Important in production** for:
  - **Cost allocation** and tracking
  - **Governance** and ownership identification
  - **Automation** and resource management

### Step 7: Default Encryption – Server-Side Encryption (SSE)
- **Recommended**: Enable default encryption using **SSE-S3** (S3-managed keys)
- **What this means**:
  - Objects are **automatically encrypted at rest**
  - Key management handled by S3 (no key rotation needed)
- **Advanced option**: Bucket key (cost optimization for SSE-KMS scenarios)

### Step 8: Bucket Created – Understanding the Console View
- After creation, the console displays:
  - All general purpose buckets across all regions
  - (Optionally) directory buckets if supported in your account/region
- **Tip**: Use the search function to quickly locate buckets by name

---

## Working with Objects

### Uploading Objects – What Actually Happens
When you upload a file, S3 creates an **object** with:
- **Key**: The object path string (e.g., `coffee.jpg` or `images/coffee.jpg`)
- **Value**: Binary file content
- **Metadata**: 
  - System metadata (size, content-type, last-modified, etc.)
  - Optional user-defined metadata (key-value pairs)

**Example**: Uploading `coffee.jpg` creates an object at the bucket root with key `coffee.jpg`

#### Object Properties & Metadata
The object detail page shows:
- **Size** (bytes)
- **Content type** (MIME type)
- **Last modified** timestamp
- **Storage class** (Standard, Intelligent-Tiering, etc.)
- **Object URL** (public-style URL, not necessarily accessible)

---

### Accessing Objects – Understanding URLs & Access Control

#### Console "Open" Button (Pre-Signed URLs)
- **How it works**: Uses an **S3 pre-signed URL**
  - Temporary, cryptographically signed request
  - Embeds signature proving requester has valid AWS credentials
  - Proves authorization for that specific object
- **Result**: You can view the object in your browser (temporary access)

#### Plain Object URL (Public-Style URL)
- **Format**: `https://bucket-name.s3.region.amazonaws.com/object-key`
- **Why it fails** (AccessDenied):
  - Bucket has "Block public access" enabled ✓
  - Object has no public-read permissions
  - No bucket policy allows anonymous access
- **Result**: **AccessDenied** error

#### Key Takeaway
```
Public URL ≠ Accessible Object
```
- **Access requires**:
  - IAM authorization + signed request (pre-signed URL), OR
  - Explicit public policy/ACL (generally discouraged for security)

---

## Understanding "Folders" in S3 Console

> **Connecting to fundamentals**: Recall that S3 is a flat object storage system. The "folder" concept you see in the console is purely a UI abstraction built on object keys and prefixes.

### Creating "Folders" – The Technical Reality

#### What You See in the UI
- Click **"Create folder"** button
- Enter folder name: `data/2025/01/`
- Folder appears in the console

#### What Actually Happens (No Real Directories)
- **S3 does NOT create a directory**
- The console creates a **zero-byte object** with a key ending in `/`
  - Key: `data/2025/01/`
  - Size: `0 B`
  - Value: empty

#### Why This Exists
- **Purpose**: Pure UX convenience for filesystem-like browsing
- **Storage model remains flat**: 
  - Bucket + objects
  - Keys are just strings
  - No hierarchical filesystem structure

---

### Practical Consequences of "Folders" (Exam-Critical)

#### 1. Folders Without Objects Don't Exist
- If you delete:
  - The last real object under prefix `data/2025/01/`
  - AND the 0B "folder marker" object `data/2025/01/`
- **Result**: The "folder" disappears from the console view

#### 2. Folders Are Not Real Resources
- **No independent identity**: A folder has no separate existence
- **No dedicated IAM targets**: You cannot grant permissions to a "folder"
- **Workaround**: Target prefixes via object ARNs:
  ```
  arn:aws:s3:::bucket-name/data/2025/01/*
  ```

#### 3. Analytics Engines Ignore "Folders"
- **Glue / Athena / Spark** operate on:
  - **Prefixes** (substrings of object keys)
  - **Object keys** (e.g., `_SUCCESS`, `part-*.parquet`, `_metadata`)
- **They do NOT operate on folders**: Everything is just keys

#### 4. Folder ≠ Partition
- **Partitioning** is a **metadata concept**:
  - Lives in Glue Data Catalog / Hive Metastore
  - Maps partition columns to key prefixes
- **S3 has no notion of partitions**: It only sees object keys

---

### Deleting "Folders" – What It Really Means
- **UI action**: Click "Delete folder"
- **What actually happens**:
  - Deletes **all objects** with that prefix
  - Deletes the optional 0B "folder marker" object
- **Important**: Space is only freed by deleting actual objects, not by "deleting a folder name"

---

## Summary: Console "Folders" vs. Storage Reality

### One-Sentence Exam Definition
> A folder created in the S3 console is just a **0-byte object whose key ends with `/`**, used to visually represent a prefix; it is **not** a real directory in the S3 storage model.

### Key Points to Remember
1. ✅ **Folders are UI abstractions** – no real filesystem directories exist
2. ✅ **Storage model is flat** – bucket + objects with string keys
3. ✅ **Prefixes matter** – for performance, partitioning, and access control
4. ✅ **Analytics engines work with keys** – not folders
5. ✅ **IAM targets prefixes** – via object ARNs with wildcards


# Amazon S3 Security – Comprehensive Guide

> **Security fundamentals**: S3 security is built on AWS's identity and access management foundation. Understanding how IAM, bucket policies, and ACLs work together is crucial for both the exam and real-world implementations.

---

## Understanding AWS IAM (Identity and Access Management)

### What is IAM?
- **IAM** = AWS's centralized service for managing **who can do what** in your AWS account
- Think of IAM as AWS's "security guard" that controls access to all AWS services
- IAM operates on the principle of **least privilege**: grant only the minimum permissions needed

### Core IAM Concepts

#### IAM Users
- **Definition**: Represents a person or application that needs access to AWS
- **Use case**: Individual developers, service accounts, applications
- **Example**: A developer named "Alice" has an IAM user `alice-dev`
- **Important**: Each user has long-term credentials (access keys, passwords)

#### IAM Groups
- **Definition**: Collection of IAM users
- **Purpose**: Easier permission management (assign permissions to group, all users inherit)
- **Example**: `developers` group contains users `alice-dev`, `bob-dev`, `charlie-dev`
- **Best practice**: Assign permissions to groups, not individual users

#### IAM Roles
- **Definition**: Temporary credentials that can be **assumed** by users or AWS services
- **Key difference from users**: Roles don't have permanent credentials
- **Use cases**:
  - EC2 instances accessing S3 (instance assumes a role)
  - Lambda functions accessing other AWS services
  - Cross-account access
- **Why roles?**: More secure than storing access keys on instances

#### IAM Policies
- **Definition**: JSON documents that define **permissions** (what actions are allowed/denied)
- **Two types**:
  1. **Identity-based policies** (attached to users/groups/roles)
  2. **Resource-based policies** (attached to resources like S3 buckets)
- **Structure**: Contains `Effect`, `Action`, `Resource`, `Principal` (for resource policies)

---

## S3 Security Mechanisms Overview

S3 provides **three main security mechanisms** that work together:

1. **IAM Policies** (identity-based) – attached to users/groups/roles
2. **Bucket Policies** (resource-based) – attached to buckets
3. **ACLs** (legacy, object-level) – attached to individual objects

---

## User-Based Security (IAM Policies)
- IAM policies can be attached to:
  - IAM users
  - IAM groups
  - IAM roles
- IAM policies define:
  - which S3 API actions are allowed or denied
  - on which resources
- Typical actions:
  - `s3:GetObject`
  - `s3:PutObject`
  - `s3:ListBucket`

**Mental model:**  
- IAM policies answer: *“What can this identity do in S3?”*

---

## Resource-Based Security (S3 Bucket Policies)
- Bucket policies are:
  - JSON-based
  - attached directly to an S3 bucket
- They define:
  - who (principal) can access the bucket
  - what actions are allowed or denied
  - on which objects or prefixes

- Bucket policies can grant access to:
  - IAM users in the same account
  - IAM users in another AWS account (cross-account)
  - the public internet

**Mental model:**  
- Bucket policies answer: *“Who can access this bucket or its objects?”*

---

## Access Control Lists (ACLs)
- Object ACLs:
  - fine-grained access at object level
- Bucket ACLs:
  - rarely used
- Modern best practice:
  - disable ACLs
  - use IAM policies and bucket policies instead

**Exam note:**  
- ACLs are legacy and largely deprecated in modern S3 architectures.

---

## How S3 Authorization Is Evaluated (Exam-Critical)
- An IAM principal can access an S3 object if:
  - an IAM policy allows the action  
  - OR a bucket policy allows the action  
  - AND there is no explicit `Deny`

- Explicit `Deny` always overrides any `Allow`.

---

## Encryption as a Security Layer
- S3 supports server-side encryption
- Objects can be encrypted:
  - automatically at upload
  - enforced via bucket policies
- Encryption is independent from access control:
  - encryption protects data at rest
  - IAM and bucket policies control who can access data

---

## S3 Bucket Policy – Logical Structure
- Bucket policies are JSON documents composed of:

### Resource
- Defines which buckets and objects the policy applies to
- Example:
  - `arn:aws:s3:::example-bucket/*`

### Effect
- `Allow` or `Deny`

### Action
- S3 API operations such as:
  - `s3:GetObject`
  - `s3:PutObject`
  - `s3:DeleteObject`

### Principal
- Who the policy applies to:
  - specific IAM user or role
  - AWS account
  - `*` (public access)

---

## Public Access via Bucket Policy
- Public access is granted by:
  - `Principal: "*"`
  - `Effect: Allow`
  - `Action: s3:GetObject`
- This makes objects publicly readable over the internet

**Typical use cases:**
- static websites
- public assets (images, downloads)

---

## Common Access Scenarios (Exam-Focused)

### Public internet access
- Implemented using bucket policies
- Requires public access to be unblocked

### IAM user in the same AWS account
- Access controlled using IAM policies
- Bucket policy not strictly required

### EC2 instance accessing S3
- Access provided via an IAM role
- IAM users must never be used on EC2

### Cross-account access
- Implemented using bucket policies
- Bucket policy explicitly allows an IAM principal from another account

---

## Block Public Access – Safety Mechanism
- Available at:
  - bucket level
  - account level
- Designed to prevent accidental public exposure

**Key behavior:**
- If Block Public Access is enabled:
  - public bucket policies are ignored
  - public ACLs are ignored

**Best practice:**
- Keep enabled for private or internal data
- Disable only when public access is explicitly required

---

## Exam Mental Model Summary
- IAM policies → what an identity can do
- Bucket policies → who can access a bucket
- Block Public Access → global safety override
- ACLs → legacy mechanism
- Encryption → protects data at rest, not access

---

## One-Sentence Exam Definition
- Amazon S3 security is primarily enforced using IAM policies for identities and bucket policies for resources, with Block Public Access acting as a global safeguard and explicit `Deny` always taking precedence.


# Making an S3 Bucket Public Using a Bucket Policy (Hands-On + Practical Context)

## Goal
- Allow public access to objects in an S3 bucket
- Enable access via the **public object URL**
- Typical use case: public images for a web application

---

## Enabling Public Access at Bucket Level
- Navigate to the **Permissions** tab of the bucket
- Edit **Block public access** settings
- Disable blocking of public access

**Important security note:**
- This step is **dangerous if misused**
- Should be done **only if**:
  - the bucket is intended to be public
  - no sensitive or private data is stored
- AWS requires explicit confirmation to prevent accidental data leaks

---

## Creating a Bucket Policy
- Scroll to **Bucket policy**
- Initially, no policy exists
- Options available:
  - policy examples (documentation)
  - **Policy generator** (used here)

---

## Using the AWS Policy Generator
- Policy type: **S3 Bucket Policy**
- Effect: `Allow`
- Principal: `*` (anyone)
- Action: `s3:GetObject`
- Resource:
  - bucket ARN
  - followed by `/*` to target all objects

### Why `/*` Is Required
- `s3:GetObject` applies to **objects**, not the bucket itself
- Objects exist **after the slash** in the key namespace
- Example:
  - `arn:aws:s3:::my-bucket/*`

---

## Resulting Policy Behavior
- Anyone on the internet can:
  - retrieve (`GET`) any object in the bucket
- Applies to:
  - `coffee.jpg`
  - any other object in the bucket

---

## Verifying Public Access
- Copy the **Object URL** of `coffee.jpg`
- Paste it into a browser
- The image loads successfully without authentication

**Key distinction:**
- Before policy → AccessDenied
- After policy → object publicly accessible

---

## Practical Real-World Use Case (Web Application)

### Typical Architecture
- Frontend web application (React, Vue, plain HTML)
- Static assets (images, icons, CSS) stored in S3
- Browser loads images directly from S3

Example:
- Web page HTML contains:
  - `<img src="https://my-bucket.s3.amazonaws.com/coffee.jpg">`

### What Happens at Runtime
- Each page visit triggers:
  - an HTTP `GET` request to S3
  - S3 serves the object directly to the client
- No backend server involvement required

---

## Pricing Implications (Very Exam-Relevant)

### Cost Components
- **Storage**
  - cost per GB stored per month
- **Requests**
  - `GET` requests are charged per 1,000 requests
- **Data transfer out**
  - outbound data to the internet is charged

### Example Scenario
- A public website shows 5 images per page
- 100,000 page views per month
- Total image requests:
  - 500,000 `GET` requests / month
- Each image:
  - fetched directly from S3 by the browser

➡️ Costs scale with:
- number of visitors
- number of assets per page
- size of each object

---

## Best Practice for Production
- For high-traffic websites:
  - place **CloudFront** in front of S3
- Benefits:
  - caching at edge locations
  - reduced S3 request costs
  - lower latency for users
  - better protection against traffic spikes

---

## Exam Mental Model
- Bucket policy enables public access
- Block Public Access must be disabled for it to work
- Public S3 is commonly used for static assets
- Every browser fetch = S3 `GET` request + data transfer cost

---

## One-Sentence Summary
- Making an S3 bucket public requires disabling Block Public Access and attaching a bucket policy allowing `s3:GetObject`, after which objects can be fetched directly by web clients, incurring request and data transfer costs per access.


# Amazon S3 Versioning – Safe Object Management

## What S3 Versioning Is
- S3 versioning is a **bucket-level setting**
- When enabled:
  - every upload creates a **new version** of an object
  - overwriting the same key does **not replace** data
  - S3 stores multiple versions under the same key

Example:
- Upload `index.html` → version `v1`
- Upload `index.html` again → version `v2`
- Upload again → version `v3`

The **object key stays the same**, but versions differ.

---

## Why Versioning Is Best Practice
- Protects against **unintended deletes**
- Enables **easy rollback** to previous object states
- Critical for:
  - websites
  - data lakes
  - production workloads

---

## Deletes in a Versioned Bucket
- Deleting an object does **not remove data**
- S3 creates a **delete marker**
- Older versions remain stored and recoverable

Result:
- Object appears deleted
- Data still exists underneath

---

## Rolling Back to a Previous Version
- You can:
  - list all versions of an object
  - remove the delete marker
  - restore or re-copy an older version
- Common use case:
  - website rollback after a bad deployment
  - recovery from accidental overwrite

---

## Important Versioning Rules (Exam-Relevant)
- Objects uploaded **before enabling versioning**:
  - have version ID = `null`
- Suspending versioning:
  - does **not delete existing versions**
  - only stops creation of new versions
- Versioning state transitions:
  - Disabled → Enabled (irreversible)
  - Enabled → Suspended (safe)

---

## Cost Implications
- Every version consumes storage
- Deleting objects does not immediately reduce storage cost
- Old versions must be explicitly deleted or expired

---

## Best Practices
- Enable versioning on:
  - critical buckets
  - website buckets
  - data lake raw zones
- Combine with:
  - lifecycle policies (to expire old versions)
  - access control to limit delete permissions

---


# Amazon S3 Versioning

## Core Principle
- S3 versioning works at the **object key level**, not at the bucket level as a whole
- The unique identity of an object is:
  - `(bucket, key, versionId)`
- Same bucket + same key + different versionId = different object versions

---

## Object Key Scope
- The **full key string** matters, including prefixes

Examples:
- `data/a/file.csv`
- `data/b/file.csv`

These are:
- two different keys
- two completely independent objects
- versioning has **no relationship** between them

---

## Same Key Without Versioning
- Versioning disabled

Flow:
- `PUT file.csv`
- `PUT file.csv`

Result:
- second upload overwrites the first
- previous data is **permanently lost**

---

## Same Key With Versioning Enabled
- Versioning enabled at bucket level

Flow:
- `PUT file.csv` → `versionId = v1`
- `PUT file.csv` → `versionId = v2`

Result:
- both versions exist simultaneously
- latest version (`v2`) is returned by default
- older versions are hidden unless explicitly requested

Important clarification:
- every object **always has a versionId**
- even if the UI shows only one file
- UI hides versionId until multiple versions exist

---

## VersionId Visibility
- UI behavior can be misleading
- Internally:
  - every object in a versioned bucket has a versionId
- UI shows versionId only when:
  - “Show versions” is enabled
  - or multiple versions exist

---

## Standard Delete Behavior
- Delete **without specifying versionId**

Example:
- `DELETE file.csv`

Result:
- no data is physically removed
- S3 creates a **Delete Marker**
- delete marker becomes the **latest version**

State:
- object is not visible
- object is not accessible
- previous versions still exist

---

## Delete Marker Explained
- Special zero-byte marker
- Indicates the object is deleted
- Overrides visibility of real object versions
- Does not remove data

---

## Object Recovery
- To restore a deleted object:
  - delete the delete marker

Result:
- latest valid version becomes current again
- object is immediately restored

Key points:
- no re-upload required
- no new version created
- purely metadata-level operation

---

## Permanent Deletion
- Delete **with versionId specified**

Example:
- `DELETE file.csv?versionId=v1`

Result:
- specific version is permanently removed
- operation is irreversible
- applies to:
  - old versions
  - latest versions
  - delete markers

---

## Behavior Summary
- Standard delete:
  - creates delete marker
  - data remains
- Recovery:
  - delete delete marker
  - data restored
- Permanent delete:
  - removes specified version forever

---

## Cost and Lifecycle Considerations
- All versions consume storage
- Delete markers consume minimal space but block access
- Without cleanup:
  - storage cost grows indefinitely
- Lifecycle policies are required to:
  - expire old versions
  - remove delete markers
  - control cost

---

## Certification-Relevant Notes
- Versioning protects against accidental deletes and overwrites
- Versioning is **not a backup**
- Delete markers are expected behavior
- Lifecycle policies are essential for production buckets

---

# Amazon S3 Replication

## Overview
- Amazon S3 replication copies objects **asynchronously** between buckets
- Replication happens **in the background** after objects are uploaded
- Replication works at the **object level**, not at the bucket level

---

## Replication Types
- **CRR (Cross-Region Replication)**
  - Source and destination buckets are in **different AWS regions**
- **SRR (Same-Region Replication)**
  - Source and destination buckets are in the **same AWS region**

---

## Prerequisites
- **Versioning must be enabled** on:
  - source bucket
  - destination bucket
- For CRR:
  - regions must be different
- Buckets can be:
  - in the same AWS account
  - or in different AWS accounts
- Proper **IAM permissions** are required:
  - S3 service must be allowed to read from source
  - and write to destination

---

## Replication Characteristics
- Replication is **asynchronous**
- Objects are replicated **after upload**
- Existing objects are **not replicated automatically**
  - only new objects (unless replication is configured accordingly)
- Replication uses IAM roles assumed by the S3 service

---

## CRR Use Cases
- Regulatory and compliance requirements
- Disaster recovery across regions
- Lower-latency access for users in another region
- Cross-account data distribution

---

## SRR Use Cases
- Aggregating logs from multiple buckets
- Replicating data between production and test environments
- Isolating workloads while staying in the same region

---

## Key Exam Takeaways
- Replication requires versioning on both buckets
- CRR = different regions, SRR = same region
- Replication is not immediate
- IAM permissions are mandatory for S3 replication to function

---

## One-Sentence Summary
- Amazon S3 replication asynchronously copies versioned objects between buckets either across regions (CRR) or within the same region (SRR), using IAM permissions granted to the S3 service.


# Amazon S3 Replication – Additional Notes

## Replication Scope
- After replication is enabled, **only newly created objects** are replicated
- Objects that already existed in the bucket **before replication was enabled are not replicated automatically**

---

## Replicating Existing Objects
- To replicate existing objects or objects that previously failed replication, you must use:
  - **S3 Batch Replication**
- S3 Batch Replication allows:
  - backfilling historical data
  - retrying failed replications
- This is an explicit, controlled operation

---

## Delete Marker Replication
- **Delete markers can be replicated**
  - This is an **optional configuration**
  - Applies only to standard deletes (DELETE without versionId)
- Use case:
  - keep logical deletions in sync across buckets

---

## Permanent Deletes Are Not Replicated
- Deletes that specify a **versionId** are **not replicated**
- These deletes permanently remove the object version
- Reason:
  - prevents accidental or malicious permanent deletions from propagating across buckets

---

## No Replication Chaining
- Replication does **not chain**
- Example:
  - Bucket A replicates to Bucket B
  - Bucket B replicates to Bucket C
- Result:
  - Objects from Bucket A **do not** replicate to Bucket C
- Each replication rule applies **only to objects created directly in the source bucket**

---

## Key Exam Takeaways
- Replication applies only to new objects by default
- Existing objects require S3 Batch Replication
- Delete marker replication is optional
- Deletes with versionId are never replicated
- Replication does not cascade across multiple buckets

---

## One-Sentence Summary
- Amazon S3 replication copies only new objects by default, optionally replicates delete markers, never replicates permanent deletes, and does not support chained replication between multiple buckets.


# Amazon S3 Replication – Hands-on Practice Notes

## Replication Setup Overview
- Replication is configured **on the source (origin) bucket**
- A **destination (replica) bucket** must already exist
- **Versioning must be enabled** on both source and destination buckets
- Replication is **asynchronous** and happens in the background

---

## Buckets Used in the Example
- Origin bucket
  - `s3-stephane-bucket-origin-v2`
  - Region: `eu-west-1`
- Replica bucket
  - `s3-stephane-bucket-replica-v2`
  - Region: `us-east-1`
- Different regions ⇒ **CRR (Cross-Region Replication)**

---

## Key Replication Rule Configuration
- Replication rule created under **Management → Replication rules**
- Rule applies to:
  - all objects in the bucket
- Destination:
  - another bucket (same account or cross-account)
- IAM role:
  - required for S3 to read from source and write to destination
  - automatically created by AWS if selected

---

## Important Behavior: Existing Objects
- Objects uploaded **before replication is enabled are NOT replicated**
- AWS prompts:
  - whether to replicate existing objects
- Existing objects require:
  - **S3 Batch Replication**
- In this example:
  - existing objects were **not replicated**

---

## Replication in Action
- Uploading a **new object** after replication is enabled:
  - object is replicated to destination bucket
  - replication delay is typically a few seconds
- Object `versionId`:
  - **preserved during replication**
  - source and replica objects share the same `versionId`

---

## Versioning and Replication
- Each replicated object:
  - keeps the same `(bucket, key, versionId)` semantics
- Uploading a new version of an object:
  - triggers replication of that new version
- Old versions uploaded before replication:
  - remain unreplicated unless batch replication is used

---

## Delete Marker Replication
- By default:
  - **delete markers are NOT replicated**
- Optional setting:
  - enable **Delete Marker Replication**
- When enabled:
  - standard deletes (DELETE without `versionId`) create delete markers
  - delete markers are replicated to the destination bucket
- Result:
  - object disappears from both buckets (logically deleted)

---

## Permanent Deletes and Replication
- Permanent delete:
  - DELETE with a specific `versionId`
- Behavior:
  - **not replicated**
  - applies only to the source bucket
- Reason:
  - prevents destructive or malicious deletes from propagating

---

## Exam-Critical Takeaways
- Replication requires versioning on both buckets
- Replication only applies to **new objects by default**
- Existing objects need S3 Batch Replication
- `versionId` is preserved across replication
- Delete marker replication is optional
- Permanent deletes are never replicated
- Replication does not cascade to other buckets

---

# Amazon S3 Storage Classes – Systematic Notes

## Overview of S3 Storage Classes
- Amazon S3 provides multiple storage classes optimized for different access patterns and cost profiles
- Storage class can be:
  - chosen at object upload
  - changed manually
  - managed automatically via **S3 Lifecycle policies**
- All classes share the same **durability**, but differ in **availability, cost, and retrieval time**

---

## Durability vs Availability
- **Durability**
  - Measures probability of data loss
  - Amazon S3 durability: **99.999999999% (11 nines)**
  - Same durability across all S3 storage classes
  - Example: 10 million objects → 1 object lost every 10,000 years (statistically)

- **Availability**
  - Measures how often data is accessible
  - Varies by storage class
  - Lower availability = more potential access errors

---

## S3 Standard (General Purpose)

- **Default Amazon S3 storage class**
- Designed for **frequently accessed (hot) data**
- Serves as the baseline storage tier for most applications and data platforms

### Characteristics
- **Low latency** (milliseconds)
- **High throughput**
- **Multi-AZ resilience** – data is automatically stored across multiple Availability Zones
- Designed to **withstand the loss of two Availability Zones**
- No minimum storage duration
- No retrieval fees

### Availability & Durability
- Availability: **99.99%**
- Durability: **99.999999999% (11 nines)**

### Typical use cases
- Big data analytics (Athena, EMR, Spark)
- Web and mobile applications
- Content distribution
- Media processing pipelines
- Active data lakes (hot / raw zones)

---

## S3 Standard – Infrequent Access (S3 Standard-IA)

- Intended for data that is **accessed less frequently**, but must remain
  **immediately available**
- Uses the same underlying architecture as S3 Standard with a different pricing model

### Characteristics
- **Lower storage cost** compared to S3 Standard
- **Retrieval fee applies** (charged per GB retrieved)
- **Multi-AZ storage**
- Minimum storage duration: **30 days**
- Optimized for backup and disaster recovery scenarios

### Availability & Durability
- Availability: **99.9%**
- Durability: **99.999999999% (11 nines)**

### Typical use cases
- Disaster recovery datasets
- Primary backups
- Long-lived but rarely accessed data
- Warm data tier in data lake architectures

---

## S3 One Zone – Infrequent Access (S3 One Zone-IA)

- Stores data in **a single Availability Zone**
- Designed for data that is **re-creatable or recoverable from another source**

### Characteristics
- **Lower cost** than S3 Standard-IA
- High durability **within a single AZ**
- **No multi-AZ redundancy**
- Data is **lost if the Availability Zone is permanently destroyed**
- Minimum storage duration: **30 days**

### Availability & Durability
- Availability: **99.5%**
- Durability: **99.999999999% (11 nines)** *within one AZ*

### Typical use cases
- Secondary or tertiary backup copies
- Re-creatable data (ETL outputs, derived datasets)
- On-premises backup replicas stored in S3
- Non-critical archival copies

---

## Amazon S3 Glacier Storage Classes

- Low-cost storage optimized for **rarely accessed (cold) data**
- Intended for **archival and long-term backup**
- Pricing model includes:
  - Very low storage cost
  - Retrieval fees
  - Potential retrieval delays (depending on class)

---

### S3 Glacier Instant Retrieval

- Archive storage with **millisecond access latency**
- Fastest retrieval option within the Glacier family
- Minimum storage duration: **90 days**

#### Characteristics
- Immediate access without restore operations
- Higher retrieval cost compared to other Glacier classes
- Designed for data that is almost never accessed, but must be available instantly

#### Typical use cases
- Compliance and audit data
- Quarterly or annual backup access
- Archived data requiring immediate availability

---

### S3 Glacier Flexible Retrieval

- Formerly known as **Amazon S3 Glacier**
- Designed for archives where **retrieval delay is acceptable**
- Minimum storage duration: **90 days**

#### Retrieval options
- **Expedited**: 1–5 minutes (highest cost)
- **Standard**: 3–5 hours
- **Bulk**: 5–12 hours (lowest cost)

#### Typical use cases
- Disaster recovery archives
- Historical datasets
- Backups accessed occasionally

---

### S3 Glacier Deep Archive

- **Lowest-cost** Amazon S3 storage class
- Intended for **long-term data retention**
- Minimum storage duration: **180 days**

#### Retrieval options
- **Standard**: ~12 hours
- **Bulk**: ~48 hours

#### Typical use cases
- Regulatory and compliance archives
- Long-term legal records
- Financial and healthcare data retention
- Archives kept for many years with extremely rare access


## S3 Intelligent-Tiering
- Automatically moves objects between tiers based on access patterns
- Designed to minimize cost **without performance impact**
- Characteristics:
  - Small monthly monitoring fee
  - No retrieval fees
- Access tiers:
  - Frequent Access (default)
  - Infrequent Access (after ~30 days)
  - Archive Instant Access (after ~90 days)
  - Archive Access (optional, configurable)
  - Deep Archive Access (optional, configurable)
- Ideal when access patterns are **unknown or unpredictable**

---

## Key Exam Notes
- Durability is **identical across all S3 storage classes**
- Availability decreases as redundancy decreases
- Glacier classes always involve retrieval delays (except Instant Retrieval)
- Intelligent-Tiering avoids retrieval costs but adds monitoring cost
- Lifecycle policies are essential for cost optimization

---

## Comparison Table of S3 Storage Classes

| Storage Class | Availability | AZs Used | Retrieval Time | Minimum Storage | Typical Use Case |
|--------------|-------------|----------|----------------|-----------------|------------------|
| S3 Standard | 99.99% | Multi-AZ | Milliseconds | None | Frequent access, web apps |
| S3 Standard-IA | 99.9% | Multi-AZ | Milliseconds | 30 days | Backups, DR |
| S3 One Zone-IA | 99.5% | Single AZ | Milliseconds | 30 days | Re-creatable data |
| Glacier Instant Retrieval | 99.9% | Multi-AZ | Milliseconds | 90 days | Archive with fast access |
| Glacier Flexible Retrieval | 99.9% | Multi-AZ | Minutes to hours | 90 days | Cold archives |
| Glacier Deep Archive | 99.9% | Multi-AZ | 12–48 hours | 180 days | Long-term compliance |
| Intelligent-Tiering | 99.9%+ | Multi-AZ | Automatic | None | Unknown access patterns |

---

## One-Sentence Summary
Amazon S3 storage classes allow cost optimization by trading availability, retrieval time, and redundancy while maintaining the same 11-nines durability across all classes.


# Amazon S3 Express One Zone

## Overview
- High-performance Amazon S3 storage class optimized for **low latency and high throughput**
- Designed for **data-intensive, performance-sensitive workloads**
- Stores data in a **single Availability Zone (AZ)**
- Delivers **sub-millisecond latency** and high IOPS
- Trades multi-AZ durability for speed and cost efficiency

## Core Characteristics
- Single-AZ storage (no cross-AZ replication)
- Strong read-after-write consistency
- Optimized for small to medium objects with frequent reads/writes
- Lower cost compared to S3 Standard for high-performance workloads
- Durability lower than standard S3 classes (≈ 99.99%)

## Key Features
- High throughput and very low latency
- POSIX-compatible file namespace semantics
- Efficient parallel access for compute engines
- Cost-efficient for short-lived or reproducible data
- Built for performance rather than long-term durability

## Data Engineering Use Cases
- ETL staging areas before loading into S3 Standard, Redshift, or data warehouses
- High-velocity streaming ingestion buffers (Kinesis, Kafka)
- Machine learning feature stores for low-latency inference
- Temporary scratch storage for Spark, EMR, or AWS Glue jobs
- Intermediate datasets in complex data pipelines

## When to Use
- Data is accessed frequently and requires millisecond-level latency
- Data can be regenerated or re-ingested from source systems
- Performance is more critical than multi-AZ durability
- Storage is short-lived or intermediate in nature

## When Not to Use
- Mission-critical datasets requiring multi-AZ resilience
- Long-term archival or compliance data
- Workloads that cannot tolerate single-AZ failure

## Exam-Relevant Notes
- Single-AZ by design (similar risk profile to One Zone-IA, but far faster)
- Optimized for **performance**, not **cost-per-GB archival**
- Complements, not replaces, S3 Standard or Glacier
- Best positioned as **ephemeral, high-speed object storage**

## One-Sentence Summary
Amazon S3 Express One Zone is a high-performance, single-AZ S3 storage class designed for fast, ephemeral data access in modern data engineering pipelines where speed and cost matter more than multi-AZ durability.


# Amazon S3 Object Transitions and Lifecycle Rules

## Storage Class Transitions
- Amazon S3 allows objects to be **transitioned between storage classes** over time
- Common transitions:
  - S3 Standard → S3 Standard-IA
  - S3 Standard / Standard-IA → Intelligent-Tiering
  - Standard / IA / One-Zone IA → Glacier tiers
  - Glacier Flexible Retrieval → Glacier Deep Archive
- Transitions are based on **access patterns and cost optimization**
- Archival data should be moved to **Glacier tiers**
- Infrequently accessed data should be moved to **Standard-IA or One-Zone IA**

## Lifecycle Rules Overview
- Lifecycle Rules automate object management
- Defined at the **bucket level**
- Can apply to:
  - Entire bucket
  - Specific key prefixes
  - Objects with specific tags

## Transition Actions
- Automatically move objects to another storage class after a defined time
- Examples:
  - Move to Standard-IA after 60 days
  - Move to Glacier Flexible Retrieval after 180 days
  - Move to Glacier Deep Archive for long-term retention

## Expiration Actions
- Automatically delete objects after a defined time
- Common use cases:
  - Delete access logs after 365 days
  - Delete temporary or intermediate data
  - Delete non-current versions in versioned buckets
  - Abort incomplete multipart uploads older than a threshold (e.g. 14 days)

## Prefix- and Tag-Based Rules
- Lifecycle rules can target:
  - Specific prefixes (logical separation using key paths)
  - Specific object tags (e.g. department=finance)
- Enables fine-grained data management within a single bucket

## Practical Design Scenarios

### Images and Thumbnails
- Source images:
  - Stored in S3 Standard
  - Transition to Glacier after 60 days
- Thumbnails:
  - Stored in One-Zone IA
  - Easily reproducible
  - Expired (deleted) after 60 days
- Separation achieved via **prefixes**

### Deleted Object Recovery Policy
- Requirement:
  - Recover deleted objects immediately for 30 days
  - Recover within 48 hours for up to 365 days
- Solution:
  - Enable S3 Versioning
  - Non-current versions remain after delete (hidden by delete marker)
  - Lifecycle rules:
    - Transition non-current versions to Standard-IA
    - Later transition non-current versions to Glacier Deep Archive

## Determining Optimal Transition Timing

### Amazon S3 Analytics
- Provides usage-based recommendations
- Focuses on:
  - Standard → Standard-IA optimization
- Generates daily CSV reports
- Requires 24–48 hours before insights appear
- Does **not** provide recommendations for:
  - One-Zone IA
  - Glacier tiers
- Useful for:
  - Designing new lifecycle rules
  - Optimizing existing rules

## Key Takeaways
- Lifecycle Rules automate cost-efficient storage management
- Transitions reduce storage cost as access frequency decreases
- Expiration rules prevent uncontrolled data growth
- Versioning + lifecycle rules provide powerful recovery and retention strategies
- S3 Analytics helps validate and tune lifecycle configurations


# Amazon S3 Lifecycle Rules – Practical Configuration

## Lifecycle Rule Scope
- Lifecycle rules are created under the **Management** tab of an S3 bucket
- A rule can apply to:
  - All objects in the bucket
  - A subset of objects (via prefix or tags)
- Rules run **asynchronously in the background**

## Available Lifecycle Rule Actions
- Move current versions of objects between storage classes
- Move non-current versions of objects between storage classes
- Expire (delete) current versions of objects
- Permanently delete non-current versions of objects
- Delete expired objects, delete markers, or incomplete multipart uploads

## Transitioning Current Object Versions
- Current version = latest version visible to users
- Typical transition chain example:
  - S3 Standard → Standard-IA after 30 days
  - Standard-IA → Intelligent-Tiering after 60 days
  - Intelligent-Tiering → Glacier Instant Retrieval after 90 days
  - Glacier Instant Retrieval → Glacier Flexible Retrieval after 180 days
  - Glacier Flexible Retrieval → Glacier Deep Archive after 365 days
- Multiple transitions can be defined for a single object lifecycle

## Transitioning Non-Current Object Versions
- Non-current versions = older versions replaced by newer uploads
- Often transitioned **earlier** than current versions
- Common pattern:
  - Move non-current versions directly to Glacier Flexible Retrieval
  - Used when older versions are rarely accessed but must be retained

## Expiring Current Object Versions
- Automatically deletes the **latest version** after a defined number of days
- Example:
  - Expire current version after 700 days
- Useful for:
  - Temporary data
  - Compliance-driven retention limits

## Deleting Non-Current Object Versions
- Permanently deletes older versions after a defined period
- Example:
  - Permanently delete non-current versions after 700 days
- Prevents:
  - Unbounded storage growth
  - Accumulation of obsolete versions

## Lifecycle Timeline Visualization
- AWS console displays a **timeline view** of:
  - Transitions for current versions
  - Transitions for non-current versions
  - Expiration and deletion points
- Helps validate rule logic before creation

## Key Takeaways
- Lifecycle rules automate cost optimization and data retention
- Current and non-current versions are managed independently
- Glacier tiers are ideal for long-term, rarely accessed data
- Expiration rules enforce cleanup policies
- Lifecycle rules reduce operational overhead and human error


# Amazon S3 Event Notifications

## Concept
- Amazon S3 can emit **events** when specific actions occur in a bucket
- Events represent changes or operations on objects
- Event notifications enable **reactive, event-driven architectures**

## Supported S3 Events
- Object created (PUT, POST, COPY, multipart upload completion)
- Object removed (DELETE)
- Object restored (from Glacier)
- Replication-related events

## Event Filtering
- Events can be filtered by:
  - Object key prefix
  - Object key suffix (e.g. `.jpg`, `.jpeg`)
- Enables fine-grained reactions (e.g. only image uploads)

## Typical Use Cases
- Generate thumbnails when images are uploaded
- Trigger ETL jobs when new data arrives
- Validate or enrich objects after upload
- Notify downstream systems of data availability

## Event Notification Targets
- Amazon SNS (fan-out notifications)
- Amazon SQS (queue-based processing)
- AWS Lambda (serverless execution)
- Amazon EventBridge (advanced routing and filtering)

## Delivery Characteristics
- Events are usually delivered within seconds
- In rare cases, delivery may take up to a minute or more
- Notifications are **asynchronous**

## Security and Permissions Model
- S3 does **not** assume IAM roles for event delivery
- Access is granted via **resource-based policies** on targets

### SNS
- SNS Topic Policy allows S3 to publish messages
- Policy explicitly grants `s3.amazonaws.com` permission

### SQS
- SQS Queue Policy allows S3 to send messages
- Required for S3 → SQS integration

### Lambda
- Lambda Resource Policy allows S3 to invoke the function
- Permission is scoped to a specific bucket and event type

## Amazon EventBridge Integration
- All S3 events are automatically sent to EventBridge
- EventBridge acts as a central event bus

### EventBridge Capabilities
- Advanced filtering (object name, size, metadata, event type)
- Multiple destinations per rule
- Integration with 18+ AWS services
- Event archiving and replay
- Higher reliability and observability

## Architectural Summary
- S3 emits events on object-level operations
- Events can be routed to:
  - SNS, SQS, Lambda (direct notifications)
  - EventBridge (advanced event-driven workflows)
- Enables scalable, decoupled, and reactive data pipelines

## One-Sentence Summary
Amazon S3 Event Notifications allow you to react to object-level changes by sending events to SNS, SQS, Lambda, or EventBridge, enabling event-driven processing and automation.

# Amazon S3 Event Notifications – Hands-on Walkthrough

## Bucket Creation
- A new S3 bucket is created (example: `stephane-v3-event-notifications`)
- Region selection does not affect event notification functionality
- After creation, configuration is done directly on the bucket

## Event Notifications Configuration Location
- Navigate to **Bucket → Properties**
- Scroll to **Event notifications**
- Two available approaches:
  - Create classic S3 Event Notifications (SNS, SQS, Lambda)
  - Enable **Amazon EventBridge integration** to forward *all* S3 events to EventBridge

## EventBridge Option (High-Level)
- When enabled, all S3 events are automatically sent to Amazon EventBridge
- EventBridge can then route events to many AWS services
- More powerful, but more complex
- For demonstration purposes, classic S3 Event Notifications are used

## Creating an S3 Event Notification
- A new notification configuration is created
- Optional filters:
  - Prefix (e.g. `images/`)
  - Suffix (e.g. `.jpg`)
- Event types selected:
  - Object created events (PUT, POST, COPY, multipart upload completion)
- Other event types (not used here):
  - Object removal
  - Object restore
  - Replication events

## Destination Options
- AWS Lambda function
- Amazon SNS topic
- Amazon SQS queue

In this example:
- Amazon SQS is chosen as the destination

## Creating the SQS Queue
- A new SQS queue is created (example: `DemoS3Notification`)
- By default, the queue **does not allow S3 to send messages**

## Required Security Configuration (Critical)
- S3 does **not** use IAM roles to send events
- Instead, **resource-based policies** are required on the destination

### SQS Access Policy Requirement
- The SQS queue policy must explicitly allow:
  - `s3.amazonaws.com` to perform `SendMessage`
- Without this policy:
  - S3 event notification creation fails with a validation error

### Example Policy Characteristics
- Effect: Allow
- Action: `sqs:SendMessage`
- Resource: SQS queue ARN
- Principal: S3 service (or `*` for demo purposes)

Once applied:
- S3 can successfully deliver events to the SQS queue

## Validation Event
- After saving the S3 event notification:
  - S3 sends a **test event** to the SQS queue
- This confirms correct permissions and connectivity
- The test message can be safely deleted

## Triggering a Real Event
- Uploading an object to the S3 bucket (e.g. `coffee.jpg`)
- This triggers an `ObjectCreated:Put` event
- S3 sends an event message to the SQS queue

## Inspecting the SQS Message
- Polling the queue shows a new message
- The event payload includes:
  - Event name: `ObjectCreated:Put`
  - Bucket name
  - Object key (`coffee.jpg`)
  - Additional metadata

This message can now be consumed by:
- A worker application
- A Lambda function
- An ETL or thumbnail-generation pipeline

## Typical Data Engineering Use Case
- Image uploaded to S3
- S3 event sent to SQS
- Downstream consumer:
  - Generates thumbnails
  - Starts a processing job
  - Updates metadata
  - Triggers analytics pipelines

## Key Takeaways
- S3 Event Notifications enable event-driven architectures
- Supported destinations:
  - SQS
  - SNS
  - Lambda
  - EventBridge
- Resource-based policies are mandatory for delivery
- Events are asynchronous and usually delivered within seconds
- EventBridge provides advanced routing, filtering, and replay capabilities

## One-Sentence Summary
Amazon S3 Event Notifications allow S3 object-level events to trigger downstream processing via SQS, SNS, Lambda, or EventBridge, enabling scalable and reactive data pipelines.


# Amazon S3 Performance and Optimization

## Baseline S3 Performance
- Amazon S3 automatically scales to very high request rates with low latency
- Typical latency to first byte: ~100–200 ms
- Performance limits are defined **per prefix**, not per bucket

## Request Rate per Prefix
- Per prefix limits:
  - 3,500 PUT / COPY / POST / DELETE requests per second
  - 5,500 GET / HEAD requests per second
- Prefix = everything between bucket name and object name in the key

### Prefix Example
- `bucket/folder1/sub1/file`
  - Prefix: `/folder1/sub1`
- `bucket/folder1/sub2/file`
  - Prefix: `/folder1/sub2`
- Each prefix gets its own independent request quota

### Scaling via Prefixes
- No limit on number of prefixes in a bucket
- Distributing traffic across prefixes increases total throughput
- Example:
  - 4 prefixes × 5,500 GET/sec = 22,000 GET/sec total

## Multipart Upload
- Recommended for objects larger than 100 MB
- Mandatory for objects larger than 5 GB
- File is split into multiple parts
- Parts are uploaded in parallel
- S3 reassembles parts into the final object
- Benefits:
  - Faster uploads
  - Better bandwidth utilization
  - Improved resilience (retry individual parts)

## S3 Transfer Acceleration
- Speeds up uploads and downloads over long distances
- Uses AWS Edge Locations as entry points
- Data flow:
  - Client → nearest Edge Location (public internet)
  - Edge Location → S3 bucket (AWS private network)
- Reduces latency and packet loss
- Compatible with multipart upload
- Useful for:
  - Global users
  - Cross-continent uploads/downloads

## S3 Byte-Range Fetches
- Optimizes download performance
- Allows requesting specific byte ranges of an object
- Multiple byte-range GET requests can run in parallel

### Use Cases
- Parallelize downloads of large objects
- Retry only failed byte ranges instead of entire file
- Retrieve partial content only (e.g. headers)

### Example
- Request:
  - First bytes (metadata or header)
  - Middle portion
  - End portion
- All fetched concurrently for faster access

## Key Takeaways
- S3 performance scales horizontally via prefixes
- Prefix design directly impacts throughput
- Multipart upload optimizes large uploads
- Transfer Acceleration optimizes long-distance transfers
- Byte-range fetches optimize large downloads and partial reads

## One-Sentence Summary
Amazon S3 delivers massive, prefix-based scalability with built-in optimizations such as multipart upload, transfer acceleration, and byte-range fetches to maximize upload and download performance.


# Amazon S3 Object Encryption

## Overview
- Amazon S3 supports **four encryption methods** for objects
- Encryption can happen:
  - **Server-side** (SSE)
  - **Client-side**
- Exam focus: understand **when and why** to use each option

## Server-Side Encryption (SSE)
- Encryption happens **inside AWS**, after upload
- Data is encrypted at rest automatically

### SSE-S3 (S3-Managed Keys)
- Keys are **fully managed by AWS**
- User never sees or controls the key
- Encryption algorithm: **AES-256**
- Required header:
  - `x-amz-server-side-encryption: AES256`
- **Enabled by default** for new buckets and objects
- Simplest and most common option

### SSE-KMS (KMS-Managed Keys)
- Encryption keys are managed in **AWS KMS**
- User controls:
  - Key creation
  - Key rotation
  - Key permissions
- Key usage is **audited via CloudTrail**
- Required header:
  - `x-amz-server-side-encryption: aws:kms`
- Optional: specify a **customer-managed KMS key**
- Access requires:
  - Permission to the S3 object
  - Permission to the KMS key
- Performance consideration:
  - Upload/download triggers KMS API calls
  - Subject to KMS API quotas (5,000–30,000 req/s)
- Exam pitfall:
  - High-throughput buckets + SSE-KMS may cause throttling

### SSE-C (Customer-Provided Keys)
- Encryption is still **server-side**
- Key is:
  - Provided by the client
  - Never stored by AWS
  - Discarded after use
- Client must send the key **with every request**
- Mandatory requirements:
  - HTTPS only
  - Key passed in HTTP headers
- Client is fully responsible for key management
- If key is lost → data is unrecoverable

## Client-Side Encryption
- Encryption happens **before upload**
- S3 stores only **already-encrypted data**
- Keys are fully managed **outside AWS**
- Encryption and decryption happen on the client
- Often implemented using client-side encryption libraries
- AWS never sees plaintext data or keys

## Encryption in Transit (In-Flight)
- Protects data **while being transferred**
- Uses **SSL/TLS (HTTPS)**

### S3 Endpoints
- HTTP → not encrypted
- HTTPS → encrypted (recommended, default)

### Enforcing HTTPS
- Use an S3 bucket policy
- Deny requests when:
  - `aws:SecureTransport = false`
- Effect:
  - HTTP access blocked
  - HTTPS allowed only

## Exam-Oriented Comparisons

### Key Ownership
- SSE-S3 → AWS
- SSE-KMS → AWS KMS (user-controlled)
- SSE-C → Customer
- Client-side → Customer

### Auditability
- SSE-KMS → Yes (CloudTrail)
- Others → No key-level audit

### Performance Impact
- SSE-S3 → No impact
- SSE-KMS → KMS API throttling risk
- SSE-C → Client overhead
- Client-side → Client CPU overhead

## One-Sentence Summary
Amazon S3 supports multiple encryption models—server-side and client-side—with different trade-offs in key control, auditability, and performance, while HTTPS and bucket policies enforce encryption in transit.


# Amazon S3 Encryption – Complete, Systematic Notes

## Encryption Models in Amazon S3
Amazon S3 supports four encryption approaches:
- SSE-S3 – Server-side encryption with S3-managed keys
- SSE-KMS – Server-side encryption with AWS KMS keys
- SSE-C – Server-side encryption with customer-provided keys
- Client-side encryption – Encryption fully handled by the client before upload

---

## SSE-S3 (Server-Side Encryption with S3-Managed Keys)
- Default encryption for new buckets and objects
- Encryption algorithm: AES-256
- Keys are:
  - Fully managed by AWS
  - Not accessible to users
- Encryption and decryption are transparent
- Required request header:
  ```
  x-amz-server-side-encryption: AES256
  ```

Use cases:
- Default secure storage
- Minimal operational complexity
- No additional cost

---

## SSE-KMS (Server-Side Encryption with AWS KMS)
- Uses AWS Key Management Service (KMS)
- Supports:
  - AWS-managed keys (aws/s3)
  - Customer-managed keys (CMK)
- Required request header:
  ```
  x-amz-server-side-encryption: aws:kms
  ```
- Optional header to specify key:
  ```
  x-amz-server-side-encryption-aws-kms-key-id
  ```
- Reading an object requires:
  - S3 permissions
  - KMS decrypt permissions

Advantages:
- Fine-grained access control
- Auditability via CloudTrail
- Key rotation support

Limitations:
- KMS API rate limits apply
- High-throughput workloads may hit throttling
- Additional cost for customer-managed keys

---

## DSSE-KMS (Dual-Layer Server-Side Encryption with KMS)
- Two layers of encryption using KMS
- Stronger security model
- Higher cost and latency
- Supported in console and lifecycle rules
- Typically used for regulated or highly sensitive data

---

## SSE-C (Server-Side Encryption with Customer-Provided Keys)
- Customer provides encryption key per request
- AWS never stores the key
- Keys must be sent on every request
- HTTPS is mandatory
- Only available via CLI / SDK (not console)

Required headers:
```
x-amz-server-side-encryption-customer-algorithm
x-amz-server-side-encryption-customer-key
x-amz-server-side-encryption-customer-key-MD5
```

Trade-offs:
- Full key ownership
- High operational complexity
- Risk of permanent data loss if key is lost

---

## Client-Side Encryption
- Encryption happens before upload
- Decryption happens after download
- S3 stores encrypted binary data only
- Keys are fully managed outside AWS
- Implemented using SDK libraries

Characteristics:
- Maximum control
- AWS has zero visibility into data
- Suitable for zero-trust models

---

## Encryption In Transit (TLS)
- S3 supports:
  - HTTP (unencrypted)
  - HTTPS (TLS-encrypted)
- HTTPS is strongly recommended
- Mandatory for SSE-C
- Most SDKs use HTTPS by default

---

## Enforcing Encryption in Transit
- Use S3 Bucket Policy
- Deny requests using insecure transport

Example policy logic:
```
Deny s3:GetObject
If aws:SecureTransport = false
```

Effect:
- HTTP access blocked
- HTTPS access allowed

---

## Default Encryption at Bucket Level
- Configured during or after bucket creation
- Options:
  - SSE-S3
  - SSE-KMS
  - DSSE-KMS
- Applies automatically to new objects
- Can be overridden per object
- Changing encryption creates a new object version (if versioning enabled)

---

## Encryption and Versioning
- Modifying encryption settings:
  - Creates a new object version
- Old versions retain original encryption
- Versioning strongly recommended with encryption changes

---

## Key Certification Takeaways
- SSE-S3 is default and simplest
- SSE-KMS adds auditability and access control
- KMS throttling can affect high-throughput workloads
- SSE-C and client-side encryption require strict key management
- Encryption in transit should always be enforced via HTTPS
- Bucket policies can enforce encryption standards

---

## One-Sentence Summary
Amazon S3 supports multiple encryption models—ranging from fully managed SSE-S3 to client-side encryption—with different trade-offs in security, control, cost, and operational complexity, all while maintaining encryption at rest and in transit.


# Amazon S3: Default Encryption vs. Bucket Policies

## Default Encryption in Amazon S3
- All newly created S3 buckets have **default encryption enabled** by default.
- The default encryption method is **SSE-S3** (Server-Side Encryption with S3-managed keys).
- This encryption is **automatically applied** to all newly uploaded objects.
- You can change the default encryption to:
  - SSE-KMS
  - DSSE-KMS
- Default encryption:
  - Is transparent to users
  - Does not require encryption headers in upload requests
  - Applies only when no explicit encryption is specified in the request

---

## Enforcing Encryption Using Bucket Policies
- Bucket policies can **force encryption requirements**.
- A bucket policy can **deny PutObject requests** if:
  - Required encryption headers are missing
  - A specific encryption method is not used (e.g. SSE-KMS, SSE-C)

Typical enforcement scenarios:
- Deny uploads without SSE-KMS
- Deny uploads without SSE-C headers
- Deny uploads using incorrect encryption type

Conceptual logic:
- If `PutObject` request
- And required encryption header is missing or incorrect
- Then **Deny**

---

## Evaluation Order (Very Important for Exams)
- **Bucket policies are evaluated before default encryption**
- This means:
  - Even if default encryption is enabled
  - A bucket policy can still reject the request
  - Default encryption will **not save** a request blocked by policy

In other words:
- Default encryption is passive
- Bucket policies are active enforcement

---

## Practical Comparison

### Default Encryption
- Automatically encrypts objects
- Easy to use
- No request modification needed
- Cannot enforce encryption type on clients

### Bucket Policy Enforcement
- Actively blocks non-compliant uploads
- Ensures strict security standards
- Required for compliance-driven environments
- Slightly more complex to manage

---

## Typical Enterprise Pattern
- Enable default encryption (SSE-S3 or SSE-KMS)
- Add bucket policy to:
  - Enforce encryption headers
  - Enforce encryption type
  - Enforce HTTPS-only uploads

---

## One-Sentence Summary
Default encryption provides automatic protection, but bucket policies take precedence and are required to strictly enforce encryption standards on all S3 object uploads.

# Amazon S3 Access Points — Detailed Deep Dive

## What Are S3 Access Points
- **Alternative entry points (endpoints)** to a single S3 bucket
- Each access point provides:
  - Its own **DNS endpoint**
  - Its own **access point policy**
  - Optional **VPC-level network restriction**
- One bucket can have **multiple Access Points**, each designed for a specific use case

## Core Goals
- Separate access rules (IAM / policies)
- Simplify permission management
- Enforce network-level isolation
- Improve governance in multi-tenant buckets

## Problem Access Points Solve

### Without Access Points
- One bucket
- One (or few) **complex bucket policies**
- Many applications, teams, workloads
- Policy grows large, unreadable, and risky
- High chance of misconfiguration

### With Access Points
- Each use case gets:
  - Its own endpoint
  - Its own policy
  - Its own network constraints
- Clear ownership and isolation

→ Significantly better **security, governance, and scalability**

## Logical Request Flow
Application  
→ S3 Access Point endpoint  
→ Access Point policy  
→ Bucket policy  
→ S3 bucket  

Key rule:
- **Access Point does NOT replace the bucket**
- Bucket policy is still evaluated
- Effective permission = **Access Point policy AND Bucket policy**

## Access Point vs Bucket Policy

| Aspect | Bucket Policy | Access Point |
|---|---|---|
| Scope | Entire bucket | Single use case |
| Granularity | Coarse | Fine-grained |
| Readability | Degrades with scale | High |
| Multi-tenant | Difficult | Natural |
| VPC restriction | Indirect | Native |
| Endpoint | Bucket-wide | Per access point |

## Individual Access Points — Design Patterns

### Finance Access Point
- Prefix: `finance/`
- Permissions: Read / Write
- IAM role: FinanceAppRole
- Network: VPC-only

### Sales Access Point
- Prefix: `sales/`
- Permissions: Read / Write
- IAM role: SalesAppRole
- Network: Public or VPC-only

### Analytics Access Point
- Prefixes: `finance/`, `sales/`
- Permissions: Read-only
- IAM role: AnalyticsRole
- Network: VPC-only

Each access point:
- Has **its own policy**
- Has **its own endpoint**
- Is independently manageable

## VPC-Only Access Points (Critical Feature)

### What It Means
- Access Point is **bound to a specific VPC**
- Objects can be accessed:
  - Only from that VPC
  - Only through a **VPC Endpoint**
- No public S3 endpoint usage

### Architecture
EC2 / Lambda / ECS (inside VPC)  
↓  
VPC Endpoint for S3  
↓  
S3 Access Point (VPC-restricted)  
↓  
S3 bucket  

### Security Outcomes
- Private connectivity
- Zero-trust networking
- No data exfiltration via public internet
- Strong isolation per workload

## Access Point Policy (Example)
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:role/DataAppRole"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:eu-central-1:123456789012:accesspoint/my-ap/object/*"
    }
  ]
}
```

Key characteristics:
- Policy applies **only to this Access Point**
- Much simpler than bucket-wide policies
- Clean separation per application or team

## Typical Use Cases

### Multi-Application Bucket
- One bucket
- Multiple applications
- Each Access Point:
  - Different prefix
  - Different IAM role
  - Different VPC

### Data Lake Access Control
- Prefixes: `raw/`, `processed/`, `analytics/`
- Each team has its own Access Point
- Minimal access by design

### Secure VPC-Only Data Access
- No public S3 access
- Data accessible only:
  - From corporate VPCs
  - From controlled workloads

## Key Takeaway
S3 Access Points are **policy-isolated, endpoint-specific, optionally VPC-restricted entry points** to a shared S3 bucket, enabling clean multi-tenant access control, strong network isolation, and scalable security management.


# Amazon S3 Object Lambda

## What Is S3 Object Lambda
- Extension of **S3 Access Points**
- Allows **modifying objects at request time**
- Object is transformed **just before it is returned** to the caller
- Original data in the bucket remains **unchanged**

## Core Idea
- One **source S3 bucket**
- Multiple **Object Lambda Access Points**
- Each access point:
  - Triggers a **Lambda function**
  - Returns a **customized view** of the same object

No data duplication  
No multiple buckets  
Transformations happen **on the fly**

## High-Level Architecture
Application  
→ S3 Object Lambda Access Point  
→ Lambda function (transform logic)  
→ S3 Access Point  
→ Original S3 bucket  

## Why Object Lambda Exists
Without Object Lambda:
- Multiple buckets
- Duplicated datasets
- Complex sync logic
- Higher storage and maintenance cost

With Object Lambda:
- Single source of truth
- Dynamic transformations
- Clean separation by use case

## Example Scenarios

### E-commerce Application (Raw Data)
- Accesses **standard S3 Access Point**
- Reads and writes **original objects**
- No transformation

### Analytics Application (Redacted Data)
- Uses **S3 Object Lambda Access Point**
- Lambda function:
  - Removes sensitive fields
  - Masks PII
- Analytics app receives **redacted object**

### Marketing Application (Enriched Data)
- Uses another **Object Lambda Access Point**
- Lambda function:
  - Calls customer loyalty database
  - Enriches object with extra attributes
- Marketing app receives **enriched object**

All applications:
- Read from the **same bucket**
- See **different representations** of the same object

## Typical Transformations
- Redaction of PII data
- Field-level filtering
- Data format conversion (XML → JSON)
- Image resizing or watermarking
- User-specific content customization
- Schema reshaping for analytics

## Key Characteristics
- Transformation happens **at GET time**
- No object rewriting in S3
- Lambda code fully controls output
- Different consumers see different data
- Strong security and governance model

## Security Model
- IAM permissions still apply
- Access Point policy applies
- Bucket policy still applies
- Lambda execution role controls:
  - S3 access
  - External service access

Effective permission =  
Access Point policy AND Bucket policy AND Lambda role

## When to Use S3 Object Lambda
- Need multiple views of the same data
- Want to avoid data duplication
- Require dynamic, request-based transformations
- Need strong separation between producers and consumers

## When NOT to Use
- Very high-throughput, ultra-low-latency workloads
- Simple static objects with no transformation needs
- Cases where precomputed objects are acceptable

## One-Sentence Summary
S3 Object Lambda enables **on-the-fly, per-request transformation of S3 objects using Lambda**, allowing multiple consumers to access customized views of the same data from a single bucket without duplication.


# Amazon S3 Storage Lens

## What S3 Storage Lens Is
- Organization-wide **analytics and observability service** for Amazon S3
- Designed to **understand, analyze, and optimize** object storage usage
- Helps with:
  - Cost optimization
  - Data protection best practices
  - Usage and activity visibility
  - Detecting anomalies and inefficiencies

---

## Scope of Analysis
S3 Storage Lens can aggregate metrics at multiple levels:
- AWS Organization
- AWS Accounts
- Regions
- Buckets
- Prefixes (advanced)

This makes it suitable for **large, multi-account, multi-region environments**.

---

## Dashboards
- **Default dashboard**
  - Automatically created
  - Covers multiple accounts and regions
  - Cannot be deleted (can be disabled)
  - Preconfigured filters
- **Custom dashboards**
  - User-defined scope and filters

Dashboards provide:
- Total storage size
- Object count
- Average object size
- Number of buckets
- Per-account and per-region breakdowns

---

## Exporting Metrics
- Metrics and reports can be exported to an S3 bucket
- Supported formats:
  - CSV
  - Parquet
- Useful for:
  - Athena
  - Spark
  - Custom analytics pipelines

---

## Metric Categories

### Summary Metrics
High-level storage insights:
- StorageBytes
- ObjectCount

Use cases:
- Identify fastest-growing buckets or prefixes
- Detect unused or stagnant storage

---

### Cost Optimization Metrics
Focus on storage efficiency:
- NoncurrentVersionStorageBytes
- IncompleteMultipartUploadStorageBytes

Use cases:
- Identify old object versions consuming space
- Detect failed multipart uploads
- Decide lifecycle transitions to cheaper tiers

---

### Data Protection Metrics
Visibility into protection best practices:
- VersioningEnabledBucketCount
- MFADeleteEnabledBucketCount
- SSEKMSEnabledBucketCount
- CrossRegionReplicationRulesCount

Use cases:
- Identify buckets missing versioning
- Identify unencrypted buckets
- Audit replication coverage

---

### Access Management Metrics
Ownership and access configuration insights:
- Object ownership settings
- Bucket ownership models

Use cases:
- Validate consistent ownership strategies
- Support multi-account governance

---

### Event Metrics
Insights into event-driven architectures:
- Buckets with S3 Event Notifications enabled

Use cases:
- Validate event-based workflows
- Detect missing notifications

---

### Performance Metrics
Transfer-related insights:
- S3 Transfer Acceleration usage

Use cases:
- Identify buckets using accelerated transfers
- Validate performance optimization strategies

---

### Activity Metrics
Request-level usage patterns:
- AllRequests
- GetRequests
- PutRequests
- BytesDownloaded / BytesUploaded

Use cases:
- Understand workload behavior
- Detect unusual access patterns

---

### HTTP Status Code Metrics
Request outcomes:
- 200 OK
- 403 Forbidden
- Other status codes

Use cases:
- Detect access issues
- Identify permission misconfigurations
- Troubleshoot application errors

---

## Free vs Paid Metrics

### Free Metrics
- Enabled by default
- ~28 usage metrics
- Data retention: **14 days**
- No CloudWatch publishing

---

### Advanced (Paid) Metrics
- Additional metrics:
  - Advanced activity
  - Advanced cost optimization
  - Advanced data protection
  - HTTP status codes
- Data retention: **15 months**
- Metrics published to **CloudWatch**
- Prefix-level metrics supported

---

## Exam-Relevant Takeaways
- Storage Lens is **organization-wide**
- Default dashboard spans **multiple accounts and regions**
- Clear distinction between **free vs advanced metrics**
- Strong focus on:
  - Cost optimization
  - Data protection
  - Usage visibility
- Metrics can be exported for downstream analytics

---

## One-Sentence Summary
Amazon S3 Storage Lens provides centralized, organization-wide visibility into S3 usage, cost, performance, and data protection, with free and advanced metrics to support governance and optimization at scale.


# Amazon Elastic Block Store (EBS)

## What Amazon EBS Is

- **Amazon Elastic Block Store (EBS)** is a **persistent block storage service** designed primarily for **EC2 instances**
- EBS acts as a **cloud-based disk** for compute workloads
- It behaves like:
  - A traditional **HDD / SSD**
  - With a **filesystem**
  - With **very low latency** and predictable performance

**Mental model**
- EBS = cloud disk attached to EC2

---

## EBS in the AWS Architecture Context

- **Compute** → EC2  
- **Block storage** → EBS  
- **Object storage** → S3  
- **Shared filesystem** → EFS  

Interpretation:
- EC2 = compute power
- EBS = local disk for compute
- S3 = external, API-based object storage
- EFS = shared filesystem for multiple instances

---

## Relationship Between EC2 and EBS

- Every EC2 instance:
  - Has an **EBS root volume** (operating system)
- One EC2 instance:
  - Can have **multiple EBS volumes** attached
- One EBS volume:
  - Is attached to **one EC2 instance at a time**
  - Exception: **Multi-Attach** (io1/io2 only, advanced use case)

Persistence behavior:
- EBS volumes are **persistent**
- Data survives:
  - EC2 stop / start
- Data may survive:
  - EC2 termination (if *Delete on Termination* is disabled)

---

## What Is Typically Stored on EBS

Common use cases:
- Operating system (root volume)
- Databases (PostgreSQL, MySQL, Oracle, SQL Server)
- Application data
- Logs
- Cache
- Temporary / working data

Key characteristic:
- Anything that requires a **filesystem** and **low-latency I/O**

---

## What Does NOT Belong on EBS

- Data lakes
- Shared data across multiple EC2 instances
- Long-term archives
- Data accessed via APIs

Correct alternatives:
- S3 for object storage and data lakes
- EFS for shared filesystems

---

## EBS as a Network-Attached Disk

- EBS is a **network drive**, not a physical disk
- Communication between EC2 and EBS happens over the AWS network
- Implications:
  - Slight network latency compared to local disks
  - High reliability and flexibility

Operational advantages:
- EBS volumes can be:
  - Detached from one instance
  - Attached to another instance quickly
- Useful for:
  - Failover scenarios
  - Recovery workflows

---

## Availability Zone (AZ) Scope

- An EBS volume:
  - Exists in **one Availability Zone**
- An EC2 instance:
  - Must be in the **same AZ** as the EBS volume

Implications:
- You cannot directly attach an EBS volume across AZs
- To move data across AZs:
  - Create a **snapshot**
  - Restore the snapshot in another AZ

---

## Provisioning Model

- EBS is **provisioned storage**
- You must define upfront:
  - Volume size (GB)
  - Performance characteristics (IOPS / throughput)

Billing model:
- You are billed for:
  - **Provisioned capacity**, not actual usage
- You can:
  - Increase volume size
  - Change volume type
  - Modify performance **while the volume is attached**

---

## EBS Volume Types (High-Level)

- **gp3 / gp2**
  - General-purpose SSD
  - Balanced price and performance
- **io1 / io2**
  - Provisioned IOPS
  - Designed for databases and latency-sensitive workloads
- **st1**
  - Throughput-optimized HDD
  - Large sequential workloads
- **sc1**
  - Cold HDD
  - Infrequently accessed data

Selection depends on:
- IOPS requirements
- Throughput needs
- Latency sensitivity
- Cost constraints

---

## Snapshots and Backups

- EBS supports **snapshots**
- Snapshots are:
  - Incremental
  - Stored in S3 (AWS-managed)
- Use cases:
  - Backups
  - Disaster recovery
  - Volume cloning
  - Migration across AZs or regions

Important:
- You do not manage the underlying S3 storage directly

---

## Security

- EBS supports:
  - **Encryption at rest** (via AWS KMS)
  - **Encryption in transit** (EC2 ↔ EBS)
- Encryption can be:
  - Enabled per volume
  - Enabled by default at the account level

---

## Delete on Termination Attribute

- Each EBS volume has a **Delete on Termination** flag
- Controls behavior when an EC2 instance is terminated

Default behavior:
- Root volume:
  - Delete on termination = **enabled**
- Additional data volumes:
  - Delete on termination = **disabled**

Use case:
- Preserve data after instance termination by disabling this flag
- Common exam scenario

---

## How EBS Works with S3

Typical lifecycle:
- EC2
  - Uses EBS for active, low-latency data
- EBS snapshot
  - Stored in S3 for durability and backup

Conceptual separation:
- EBS = working storage
- S3 = durable, cost-efficient backup and archive

---

## When NOT to Use EBS

- Multiple EC2 instances need simultaneous write access
- You need a shared filesystem
- You need API-based object access

Correct alternatives:
- EFS for shared filesystems
- S3 for object-based access

---

## Certification Golden Rules

- EBS is **block storage**
- EBS is **persistent storage for EC2**
- EBS is **AZ-scoped**
- EBS is **not** a shared filesystem
- EBS is **not** object storage
- Snapshots are stored in S3 (managed by AWS)

---

## One-Sentence Summary

Amazon EBS is persistent, low-latency block storage designed as a disk for EC2 instances, ideal for operating systems, databases, and stateful workloads, while backups and long-term data belong in S3.

# Amazon EBS Elastic Volumes

## What Are EBS Elastic Volumes

- **EBS Elastic Volumes** allow you to **modify EBS volumes on the fly**
- You do **not** need to:
  - Detach the volume
  - Stop or restart the EC2 instance
- Supported for most modern EC2 instance types (default today)

You can dynamically change:
- Volume size
- Volume type
- Performance characteristics (IOPS, throughput)

All **without downtime**

---

## Why Elastic Volumes Matter

Before Elastic Volumes:
- Resize = stop instance
- Change type = detach volume
- Operational downtime required

With Elastic Volumes:
- Fully online changes
- Zero downtime
- Much simpler operations

Typical scenario:
- Disk is running out of space
- You increase the volume size immediately
- No service interruption

---

## Supported Modifications (Live)

You can modify **while the volume is attached and in use**:

- Increase volume size  
  - ✅ Supported  
  - ❌ Decreasing size is **not supported**
- Change volume type  
  - e.g. gp2 → gp3
- Change performance:
  - IOPS
  - Throughput (MB/s)

All changes are done via:
- EC2 Console → Volumes → Actions → Modify Volume
- AWS CLI / API

---

## Why You Cannot Decrease Volume Size

- Shrinking a filesystem safely is complex
- Risk of data corruption if volume is partially full
- AWS intentionally disallows this

Workaround:
- Create a smaller volume
- Copy data
- Replace the original volume

---

## Changing Volume Type On The Fly

Example:
- gp2 → gp3
- io1 → io2

What happens:
- AWS migrates volume in the background
- No detach
- No reboot
- No downtime

Best practice:
- Always **explicitly define**:
  - Desired IOPS
  - Desired throughput
- Otherwise AWS auto-selects values based on defaults

---

## EBS Volume Types (Explained)

### gp2 – General Purpose SSD (Legacy)

- Performance scales with volume size
- IOPS = 3 × volume size (GB)
- Burstable performance model
- Max IOPS: 16,000
- Older default option

Drawbacks:
- Harder to predict performance
- Over-provisioning storage to get IOPS

---

### gp3 – General Purpose SSD (Recommended)

- **Decouples storage size from performance**
- You independently set:
  - Size
  - IOPS
  - Throughput
- More predictable
- Cheaper than gp2

Defaults:
- 3,000 IOPS
- 125 MB/s throughput

Use cases:
- Most workloads
- OS disks
- Application data
- Databases with moderate I/O

---

### io1 / io2 – Provisioned IOPS SSD

- Designed for **low-latency, high-IOPS workloads**
- Explicitly provision IOPS
- io2 is newer and more durable than io1
- Supports **Multi-Attach** (advanced use case)

Use cases:
- Critical databases
- Transaction-heavy systems
- Enterprise workloads

---

### st1 – Throughput Optimized HDD

- HDD-based
- Optimized for **large sequential I/O**
- High throughput, low IOPS

Use cases:
- Big data
- Log processing
- Data warehouses (non-latency sensitive)

---

### sc1 – Cold HDD

- Lowest cost EBS option
- Lowest performance
- Infrequent access

Use cases:
- Cold data
- Rarely accessed workloads

---

## Elastic Volumes + Performance Tuning

You can dynamically:
- Increase IOPS when load spikes
- Reduce IOPS later to save cost
- Increase throughput for batch jobs

This makes EBS:
- Highly flexible
- Cost-optimizable
- Suitable for variable workloads

---

## Key Exam Takeaways

- EBS Elastic Volumes:
  - Enabled by default
  - No downtime required
- You can:
  - Increase size
  - Change type
  - Modify performance
- You cannot:
  - Decrease volume size
- gp3 is preferred over gp2
- Performance can be tuned live

---

## One-Sentence Summary

EBS Elastic Volumes allow you to resize, retune, and even change EBS volume types (like gp2 to gp3) on a running EC2 instance with no downtime, making EBS highly flexible and production-friendly.
