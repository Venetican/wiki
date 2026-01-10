# AWS Storage Services

## Overview

AWS offers multiple storage services designed for different use cases:
- **Object storage**: Amazon S3
- **Block storage**: Amazon EBS
- **File storage**: Amazon EFS
- **Ephemeral storage**: Instance Store
- **Hybrid storage**: AWS Storage Gateway
- **Backup services**: AWS Backup

Selecting the right storage service depends on:
- Data access patterns
- Performance requirements
- Durability needs
- Cost considerations

---

# Amazon S3 (Simple Storage Service)

## What It Is

Amazon S3 is AWS's **object storage service** designed to store and retrieve any amount of data from anywhere.

### Key Components

#### Buckets

- **Primary container** for objects in S3
- Bucket names must be **globally unique** (across all AWS accounts worldwide)
- Organized by region
- Act as the top-level namespace for objects

#### Objects

- **Data files** stored in buckets
- Each object consists of:
  - **Data**: The actual file content
  - **Key**: Unique identifier within the bucket
  - **Metadata**: Information about the object (size, type, creation date, etc.)

#### Metadata

- **Labels and details** attached to objects
- Provides information about the object
- Can include custom metadata

---

## Key Features

### Durability

- **11 nines of durability** (99.999999999%) over a given year
- Designed to reliably store data without data loss
- Data stored across multiple devices in multiple facilities

### Scalability

- **Unlimited storage capacity**
- Automatically scales to handle any amount of data
- No need to provision storage in advance

### Security

- **Bucket policies**: Control access to objects in buckets
- **Access Control Lists (ACLs)**: Manage access to buckets and objects
- **IAM policies**: Integrate with AWS IAM for fine-grained access control
- **Encryption**: Encrypted by default (can use KMS or S3-managed keys)

### Versatility

- Can store **any type of data**:
  - Documents
  - Images
  - Videos
  - Backups
  - Big data datasets

---

## Primary Use Cases

- **Data backup and archival**: Store backups of critical data
- **Static website hosting**: Host static websites directly from S3
- **Content distribution**: Use with CloudFront for global content delivery
- **Big data analytics**: Store large datasets for analytics workloads
- **Application data storage**: Store application files, logs, and data

---

## Key Constraints / Tradeoffs

- **Object storage only**: Not suitable for file systems or block storage needs
- **Eventual consistency**: Updates may take time to propagate (for some operations)
- **Costs scale with usage**: Pay for storage, requests, and data transfer out
- **No file system interface**: Access via API, not traditional file system

---

## S3 Bucket Configuration

### Bucket Versioning

- **Enable versioning** to preserve, retrieve, and restore previous versions of objects
- Protects against accidental deletion or overwrites
- Each version has a unique version ID
- Can restore previous versions if unintended changes occur

### Encryption

- **Encrypted by default** in modern AWS accounts
- Options:
  - **S3-managed encryption** (SSE-S3)
  - **AWS KMS encryption** (SSE-KMS)
  - **Customer-provided keys** (SSE-C)

### Lifecycle Policies

- **Automate transitions** between storage classes
- **Automate deletion** of old objects
- Examples:
  - Move objects from S3 Standard to Glacier after 90 days
  - Delete old log files after 365 days
- Helps optimize costs automatically

---

## Key Takeaways (Exam-Oriented)

- S3 = object storage (not block or file storage)
- Bucket names are globally unique (across all AWS accounts)
- Objects consist of: data, key (unique identifier), metadata
- 11 nines of durability (99.999999999%)
- Security: bucket policies, ACLs, IAM policies, encryption
- Versioning enables recovery of previous object versions
- Lifecycle policies automate storage class transitions and deletions
- Default deny access (must explicitly allow access)

---

## One-Sentence Summary

Amazon S3 is a highly durable, scalable object storage service that stores data as objects in globally unique buckets, provides 11 nines of durability, and offers features like versioning, lifecycle policies, and comprehensive security controls.

---

# Amazon S3 Storage Classes

## Overview

Amazon S3 offers multiple **storage classes** optimized for different access patterns and cost requirements. Each storage class serves a unique purpose based on how frequently data is accessed and how quickly it needs to be retrieved.

---

## S3 Storage Classes Comparison

| Storage Class | Durability | Availability | Use Case | Retrieval Time | Cost |
|---------------|------------|--------------|----------|----------------|------|
| **S3 Standard** | 99.999999999% | 99.99% | Frequently accessed data | Immediate | Highest |
| **S3 Intelligent-Tiering** | 99.999999999% | 99.99% | Unpredictable access patterns | Immediate | Optimized automatically |
| **S3 Standard-IA** | 99.999999999% | 99.9% | Infrequently accessed, rapid access needed | Immediate | Lower (retrieval fee) |
| **S3 One Zone-IA** | 99.5% | 99.5% | Secondary backup, reproducible data | Immediate | Lower (single AZ) |
| **S3 Glacier Instant Retrieval** | 99.999999999% | 99.9% | Archive, rarely accessed, millisecond retrieval | Milliseconds | Very low |
| **S3 Glacier Flexible Retrieval** | 99.999999999% | 99.99% | Archive, accessed 1-2x/year | 1-5 minutes (or bulk) | Very low |
| **S3 Glacier Deep Archive** | 99.999999999% | 99.99% | Long-term archive, compliance (7-10+ years) | Up to 12 hours | Lowest |

---

## S3 Standard

### What It Is

- **Default storage class** for frequently accessed data
- High throughput and low latency
- Designed for durability across multiple devices and facilities

### Primary Use Cases

- Frequently accessed data
- Content distribution
- Cloud applications
- Dynamic websites

### Key Characteristics

- **High availability**: 99.99% availability SLA
- **High durability**: 11 nines
- **Immediate access**: No retrieval delays
- **Highest cost**: Most expensive storage class

---

## S3 Intelligent-Tiering

### What It Is

- **Automatically moves data** between two access tiers based on access patterns
- Designed for cost savings without performance impact

### Primary Use Cases

- Data with **unpredictable access patterns**
- Unknown access frequency
- Want automatic cost optimization

### Key Characteristics

- **Automatic optimization**: Moves data between frequent and infrequent access tiers
- **No retrieval fees**: Unlike Standard-IA
- **Monitoring fee**: Small monthly fee per object
- **Immediate access**: No retrieval delays

---

## S3 Standard-Infrequent Access (Standard-IA)

### What It Is

- Designed for data that's **less frequently accessed** but requires **rapid access** when needed

### Primary Use Cases

- Backup data
- Disaster recovery files
- Long-term storage with occasional access needs

### Key Characteristics

- **Lower storage cost** than Standard
- **Retrieval fee**: Charged per GB retrieved
- **Minimum storage duration**: 30 days
- **Minimum object size**: 128 KB
- **Immediate access**: No retrieval delays

---

## S3 One Zone-Infrequent Access (One Zone-IA)

### What It Is

- Stores data in **a single Availability Zone**
- Lower cost than Standard-IA
- Lower durability than multi-AZ options

### Primary Use Cases

- **Secondary backup** copies
- **Easily reproducible data**
- Data that can be recreated if lost

### Key Characteristics

- **Lower cost**: Cheaper than Standard-IA
- **Lower durability**: 99.5% (vs 99.999999999% for multi-AZ)
- **Single AZ**: Data stored in one Availability Zone only
- **Retrieval fee**: Charged per GB retrieved
- **Immediate access**: No retrieval delays

---

## S3 Glacier Instant Retrieval

### What It Is

- **Archive storage class** for long-lived data that is rarely accessed
- Requires **millisecond retrieval** times
- Lowest cost storage for data requiring immediate access

### Primary Use Cases

- Medical images
- News media assets
- User-generated content archives

### Key Characteristics

- **Millisecond retrieval**: Immediate access when needed
- **Very low cost**: Lower than Standard-IA
- **Archive storage**: Designed for long-term retention
- **Minimum storage duration**: 90 days

---

## S3 Glacier Flexible Retrieval

### What It Is

- **Archive storage** for data accessed **1-2 times per year**
- Flexible retrieval options

### Primary Use Cases

- Backup archives
- Disaster recovery
- Long-term data retention

### Key Characteristics

- **Retrieval options**:
  - **Expedited**: 1-5 minutes (highest cost)
  - **Standard**: 3-5 hours (default)
  - **Bulk**: 5-12 hours (lowest cost, free for large retrievals)
- **Very low cost**: Lower than Instant Retrieval
- **Minimum storage duration**: 90 days

---

## S3 Glacier Deep Archive

### What It Is

- **Lowest-cost storage class** for long-term archival
- Designed for **regulatory compliance** and long-term retention

### Primary Use Cases

- **Regulatory compliance**: Healthcare, public sector (7-10+ years retention)
- Long-term data retention
- Digital preservation

### Key Characteristics

- **Lowest cost**: Most cost-effective storage class
- **Long retrieval time**: Up to 12 hours
- **Bulk retrieval only**: Standard retrieval (12 hours)
- **Minimum storage duration**: 180 days
- **Designed for compliance**: Meets regulatory requirements

---

## Key Takeaways (Exam-Oriented)

- **Standard**: Frequently accessed, highest cost, immediate access
- **Intelligent-Tiering**: Unpredictable patterns, automatic optimization, no retrieval fees
- **Standard-IA**: Infrequent access, rapid retrieval, retrieval fee, 30-day minimum
- **One Zone-IA**: Single AZ, lower durability, secondary backup, retrieval fee
- **Glacier Instant Retrieval**: Archive, millisecond access, very low cost
- **Glacier Flexible Retrieval**: Archive, 1-2x/year access, 3-5 hour retrieval
- **Glacier Deep Archive**: Long-term compliance, lowest cost, 12-hour retrieval
- **Multi-AZ vs Single AZ**: Standard, Standard-IA, Glacier = multi-AZ; One Zone-IA = single AZ
- **Retrieval fees**: Standard-IA and One Zone-IA have retrieval fees; Standard and Intelligent-Tiering do not

---

## One-Sentence Summary

Amazon S3 offers seven storage classes (Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval, Glacier Deep Archive) optimized for different access patterns, with costs decreasing and retrieval times increasing as data is accessed less frequently.

---

# Amazon EBS (Elastic Block Store)

## What It Is

Amazon EBS provides **persistent block-level storage volumes** for use with EC2 instances.

### Key Characteristics

- **Block storage**: Provides raw storage volumes that can be formatted with a file system
- **Persistent**: Data persists independently of EC2 instance lifecycle
- **Directly attached**: Volumes are attached to EC2 instances
- **High availability**: Data automatically replicated within Availability Zone

---

## Key Features

### Persistence

- Data **remains intact** even after stopping an EC2 instance
- Volumes persist independently of instance lifecycle
- Can detach and reattach volumes to different instances

### High Availability and Durability

- EBS volume data is **automatically replicated** within its Availability Zone
- Protects against component failure
- **Note**: For multi-AZ durability, use snapshots or Multi-AZ deployments

### Scalability

- Can **resize volumes** on the fly (with some limitations)
- Can expand file system without downtime (for supported file systems)
- Supports volumes from 1 GB to 16 TB

### Encryption

- **Encryption at rest**: Data encrypted on the volume
- **Encryption in transit**: Data encrypted when moving between instance and volume
- Uses AWS KMS for key management

### Snapshots

- **Point-in-time backups** of EBS volumes
- Incremental backups (only stores changes since last snapshot)
- Can create new volumes or restore volumes from snapshots
- Can copy snapshots across regions

---

## Primary Use Cases

- **Relational databases**: MySQL, PostgreSQL, Oracle
- **NoSQL databases**: MongoDB, Cassandra
- **Data warehousing**: Large-scale analytics workloads
- **Big data analytics**: Processing large datasets
- **Enterprise applications**: ERP, CRM systems
- **Boot volumes**: Root volumes for EC2 instances

---

## EBS Volume Types

EBS offers two main categories of volume types:

### SSD-Backed Volumes

- Optimized for **IOPS** (Input/Output Operations Per Second)
- Best for transactional workloads requiring high IOPS

### HDD-Backed Volumes

- Optimized for **throughput** (bits/bytes per second)
- Best for large streaming workloads

**Key distinction**: SSD = high IOPS; HDD = high throughput

---

## SSD-Backed Volume Types

### General Purpose SSD (gp3 and gp2)

#### gp3 (Latest Generation)

- **Baseline performance**: 3,000 IOPS, 125 MB/s throughput
- **Can scale up to**: 16,000 IOPS, 1,000 MB/s (with additional cost)
- **Cost-effective**: Lower cost than gp2

#### gp2

- **Performance scales with volume size**: 3 IOPS per GB (up to 16,000 IOPS)
- **Baseline**: 3 IOPS per GB, burst up to 3,000 IOPS
- **Minimum**: 100 IOPS for volumes under 33.33 GB

#### Use Cases

- **Transactional workloads**: Databases, applications
- **Virtual desktops**: VDI environments
- **Low-latency interactive applications**: Web servers
- **Development and test environments**

---

### Provisioned IOPS SSD (io2, io1, io2 Block Express)

#### io2 and io1

- **Provisioned IOPS**: Specify exact IOPS needed
- **Maximum IOPS per volume**: 64,000 IOPS
- **Sub-millisecond latency**: Consistent low latency
- **Use cases**: Workloads requiring sustained high IOPS performance

#### io2 Block Express

- **Maximum IOPS per volume**: 256,000 IOPS
- **Highest performance**: For most demanding workloads
- **Use cases**: Mission-critical applications requiring extreme performance

#### EBS Multi-Attach

- **Attach single Provisioned IOPS SSD volume** to multiple EC2 instances
- **Same Availability Zone**: All instances must be in the same AZ
- **Supported volumes**: io1 and io2 only
- **Use cases**: Clustered applications, high availability databases

---

## HDD-Backed Volume Types

### Throughput Optimized HDD (st1)

- **Optimized for throughput**: Large streaming workloads
- **Use cases**:
  - Big data
  - Data warehouses
  - Log processing
  - ETL workloads

### Cold HDD (sc1)

- **Lowest cost HDD**: Throughput-oriented storage
- **Infrequently accessed data**: Data accessed less often
- **Use cases**: Throughput-oriented workloads with infrequent access

#### Comparison

- **st1**: Higher IOPS and higher max throughput than sc1
- **sc1**: Lower storage cost than st1
- **Multi-Attach**: Not supported for HDD volumes

---

## EBS Snapshots

### What They Are

- **Point-in-time backups** of EBS volumes
- Capture the state of a volume at a specific moment

### Key Features

#### Incremental Backups

- Each snapshot **only saves changes** since the last snapshot
- **Efficient storage**: Only stores modified blocks
- First snapshot contains all data; subsequent snapshots are incremental

#### Restore and Launch

- **Restore volumes**: Create new volumes from snapshots
- **Launch instances**: Launch EC2 instances from snapshots (via AMI)
- **Quick recovery**: Faster than recreating from scratch

#### Share and Copy

- **Share snapshots**: Share with other AWS accounts
- **Make public**: Can make snapshots publicly available
- **Cross-region replication**: Copy snapshots to other regions for disaster recovery

#### Cost-Effective

- **Only pay for changed data**: Incremental nature reduces storage costs
- **Compressed**: Snapshots are compressed for efficiency
- **Lifecycle management**: Can automate snapshot creation and deletion

---

## Key Constraints / Tradeoffs

- **Single AZ**: EBS volumes are tied to a specific Availability Zone (must be in same AZ as instance)
- **Instance attachment**: Can only attach to instances in the same AZ
- **Performance limits**: Each volume type has IOPS and throughput limits
- **Cost**: Pay for provisioned storage even if not fully utilized
- **Snapshot storage**: Snapshots stored in S3 (separate cost)

---

## Key Takeaways (Exam-Oriented)

- EBS = persistent block-level storage for EC2
- SSD volumes: High IOPS (gp3, gp2, io1, io2, io2 Block Express)
- HDD volumes: High throughput (st1, sc1)
- SSD for IOPS, HDD for throughput
- Multi-Attach: Only for Provisioned IOPS SSD (io1, io2) in same AZ
- Snapshots: Incremental backups, stored in S3, can copy across regions
- Volumes: Single AZ, can resize, encrypted by default
- gp3: Latest, cost-effective, baseline 3,000 IOPS
- io2 Block Express: Highest performance, 256,000 IOPS max

---

## One-Sentence Summary

Amazon EBS provides persistent block-level storage volumes for EC2 instances, offering SSD volumes optimized for IOPS (gp3, gp2, io1, io2) and HDD volumes optimized for throughput (st1, sc1), with features like snapshots, encryption, and Multi-Attach for high-availability workloads.

---

# Amazon EFS (Elastic File System)

## What It Is

Amazon EFS is a **scalable file storage solution** for EC2 and other AWS services.

### Key Characteristics

- **File system**: Provides a file system interface (not block storage)
- **Shared storage**: Can be accessed by multiple EC2 instances simultaneously
- **Fully managed**: No file system administration required
- **Scalable**: Automatically grows and shrinks as files are added/removed

---

## Key Features

### Fully Managed

- **No administration**: AWS manages the file system
- **Simplified deployment**: No need to configure or maintain file servers
- **Automatic scaling**: Handles capacity management

### Automatic Scaling

- **Grows automatically**: As you add files, storage increases
- **Shrinks automatically**: As you remove files, storage decreases
- **Pay only for what you use**: No need to provision storage in advance

### Concurrent Access

- **Multiple instances**: Designed to be accessed by multiple EC2 instances simultaneously
- **Cross-AZ access**: Can be accessed from instances in different Availability Zones
- **NFS protocol**: Uses Network File System (NFS) protocol

### High Availability

- **Multi-AZ**: Data stored across multiple Availability Zones
- **Durability**: Highly durable file storage
- **Automatic failover**: Built-in redundancy

---

## Primary Use Cases

- **Content management**: Shared content repositories
- **Web serving**: Shared web content across multiple servers
- **Big data analytics**: Shared datasets for analytics workloads
- **Development and testing**: Shared code repositories and test data
- **Media processing**: Shared media files for processing
- **Container storage**: Persistent storage for containerized applications

---

## Key Constraints / Tradeoffs

- **Network latency**: Access over network (not directly attached like EBS)
- **Cost**: More expensive than EBS for single-instance use cases
- **Performance**: Lower IOPS than EBS for single-instance workloads
- **NFS only**: Uses NFS protocol (not compatible with Windows file systems)
- **Regional service**: File system exists within a region (not global)

---

## EFS vs EBS Comparison

| Feature | Amazon EFS | Amazon EBS |
|---------|------------|------------|
| **Storage Type** | File system | Block storage |
| **Access** | Multiple EC2 instances | Single EC2 instance |
| **Protocol** | NFS | Block device |
| **Scaling** | Automatic | Manual (resize volume) |
| **Use Case** | Shared file storage | Single-instance storage |
| **Cost** | Higher for single instance | Lower for single instance |
| **Performance** | Lower IOPS per instance | Higher IOPS per instance |

---

## Key Takeaways (Exam-Oriented)

- EFS = scalable file storage (not block storage)
- Shared access: Multiple EC2 instances can access simultaneously
- Automatic scaling: Grows/shrinks automatically with files
- Fully managed: No file system administration
- NFS protocol: Network File System
- Multi-AZ: Data stored across multiple Availability Zones
- Use cases: Content management, web serving, big data analytics, shared storage
- Pay for storage used: No need to provision capacity

---

## One-Sentence Summary

Amazon EFS is a fully managed, scalable file storage service that provides shared file system access to multiple EC2 instances simultaneously, automatically scales with data, and is ideal for applications requiring shared storage across multiple instances.

---

# EC2 Instance Store

## What It Is

Instance Store provides **temporary block-level storage** directly attached to EC2 instances.

### Key Characteristics

- **Ephemeral storage**: Data is temporary and not persistent
- **Directly attached**: Physically attached to the host computer
- **High performance**: Very fast I/O performance
- **No additional cost**: Included with instance (no separate charge)

---

## Key Features

### High I/O Performance

- **Direct attached storage**: Provides very fast I/O operations
- **Low latency**: Minimal delay for read/write operations
- **High throughput**: Can handle high-volume data operations

### Temporary Storage

- **Data loss on stop**: Data is lost if instance is stopped
- **Data loss on terminate**: Data is lost if instance is terminated
- **Data loss on failure**: Data is lost if underlying host fails
- **Not persistent**: Cannot rely on data surviving instance lifecycle changes

### No Additional Cost

- **Included with instance**: Part of the instance price
- **No separate charges**: No per-GB storage fees
- **Cost-effective**: For temporary data storage needs

---

## Primary Use Cases

- **Temporary data**: Caches, buffers, temporary files
- **Write-intensive workloads**: Applications that write and discard large amounts of data
- **Distributed processing**: Data replicated across multiple instances
- **High-performance computing**: Workloads requiring maximum I/O performance
- **Temporary scratch space**: Processing temporary data

---

## Instance Store vs EBS Comparison

| Feature | Instance Store | Amazon EBS |
|---------|----------------|------------|
| **Persistence** | Ephemeral (temporary) | Persistent |
| **Data survives stop** | No | Yes |
| **Data survives terminate** | No | Yes (unless DeleteOnTermination=true) |
| **Performance** | Very high I/O | High I/O (depends on type) |
| **Cost** | Included with instance | Additional cost |
| **Use Case** | Temporary data | Persistent data |

---

## Key Takeaways (Exam-Oriented)

- Instance Store = temporary block-level storage
- Ephemeral: Data lost on stop, terminate, or failure
- High I/O performance: Very fast for temporary data
- No additional cost: Included with instance
- Use cases: Caches, buffers, temporary data, high-performance computing
- NOT persistent: Only EBS and EFS offer durable storage
- Directly attached: Physically attached to host computer

---

## One-Sentence Summary

EC2 Instance Store provides high-performance temporary block-level storage directly attached to instances, offering very fast I/O operations at no additional cost, but data is ephemeral and lost when instances stop, terminate, or fail.

---

# AWS Storage Gateway

## What It Is

AWS Storage Gateway is a **hybrid storage service** that connects on-premises environments to AWS cloud storage.

### Key Characteristics

- **Hybrid solution**: Bridges on-premises and cloud storage
- **Seamless integration**: Works with existing on-premises applications
- **Multiple gateway types**: Different types for different use cases
- **Secure**: Encrypts data in transit and at rest

---

## Key Benefits

### Cost-Efficient

- **Reduces on-premises infrastructure**: Less need for local storage hardware
- **Pay-as-you-go**: Pay only for storage used in cloud
- **Eliminates upfront costs**: No need to purchase storage hardware

### Secure

- **Encryption**: Data encrypted during transfer and storage
- **Secure connectivity**: Uses VPN or Direct Connect
- **Access control**: Integrates with AWS IAM

### Seamless Integration

- **Works with existing applications**: No application changes required
- **Transparent**: Applications see Storage Gateway as local storage
- **Smooth migration**: Enables gradual cloud adoption

---

## Primary Use Cases

- **Data backup**: Off-site backup to AWS cloud
- **Disaster recovery**: Quick recovery from cloud if on-premises fails
- **Data processing**: Send data to AWS for analytics, then retrieve results
- **Cloud migration**: Gradual migration of data to cloud
- **Archive**: Long-term archival of on-premises data

---

## Storage Gateway Types

### S3 File Gateway

- **Stores files directly on S3**: Files stored in native SFS format
- **Use case**: Keep data in cloud-native formats
- **Access**: Via NFS or SMB protocol
- **Benefits**: Direct S3 integration, no local cache required

### Volume Gateway

- **Block storage volumes**: Provides block storage backed by S3
- **Two modes**:
  - **Stored volumes**: Entire dataset stored locally, asynchronously backed up to S3
  - **Cached volumes**: Frequently accessed data cached locally, full dataset in S3
- **Use case**: Applications needing block storage
- **Access**: iSCSI protocol

### Tape Gateway

- **Virtual tapes**: Archives data as virtual tapes in AWS
- **Use case**: Long-term retention, compliance archiving
- **Backend**: Uses S3 Glacier or S3 Glacier Deep Archive
- **Benefits**: Replace physical tape infrastructure

### FSx File Gateway

- **Extends on-premises file systems**: Connects to FSx for Windows File Server
- **Use case**: Windows-based file shares in cloud
- **Access**: SMB protocol
- **Benefits**: Native Windows file system features

---

## Key Constraints / Tradeoffs

- **Network dependency**: Requires reliable network connection to AWS
- **Latency**: Network latency affects performance (especially for cached volumes)
- **On-premises hardware**: Requires gateway appliance or VM
- **Complexity**: More complex than pure cloud solutions

---

## Key Takeaways (Exam-Oriented)

- Storage Gateway = hybrid storage service (on-premises to cloud)
- Four types: S3 File Gateway, Volume Gateway (stored/cached), Tape Gateway, FSx File Gateway
- Cost-efficient: Reduces on-premises storage needs
- Secure: Encrypts data in transit and at rest
- Use cases: Backup, disaster recovery, data processing, cloud migration
- Seamless integration: Works with existing applications
- Volume Gateway modes: Stored (full dataset local) vs Cached (frequently accessed local)

---

## One-Sentence Summary

AWS Storage Gateway is a hybrid storage service that connects on-premises environments to AWS cloud storage through four gateway types (S3 File, Volume, Tape, FSx File), enabling backup, disaster recovery, and cloud migration while maintaining compatibility with existing applications.

---

# AWS Backup

## What It Is

AWS Backup is a **centralized backup service** that makes it easy to configure backup policies and monitor backup activity across AWS services.

### Key Characteristics

- **Centralized management**: Single console for backups across multiple services
- **Automated**: Schedule automatic backups with policies
- **Comprehensive**: Supports multiple AWS services
- **Compliance-ready**: Encryption and compliance features built-in

---

## Key Features

### Centralized Backup Management

- **Single console**: Manage backups for multiple AWS services from one place
- **Simplified oversight**: Easier to track and manage backups across services
- **Consistent policies**: Apply same backup policies across services

### Automated Backup Scheduling

- **Backup policies**: Define when and how often backups occur
- **Automated execution**: Backups run automatically according to schedule
- **Lifecycle management**: Automate retention and deletion of backups

### Security and Compliance

- **Encryption**: Backups encrypted at rest and in transit
- **Compliance**: Meets various compliance requirements
- **Access control**: Integrates with AWS IAM

### Cross-Region and Cross-Account Backup

- **Disaster recovery**: Backup data across regions
- **Multi-account**: Backup across AWS accounts
- **Enhanced resilience**: Protects against regional failures

---

## Supported AWS Services

AWS Backup supports backing up:

- **EC2 instances**: Elastic Compute Cloud instances
- **EBS volumes**: Elastic Block Store volumes
- **RDS databases**: Relational Database Service databases
- **DynamoDB tables**: NoSQL database tables
- **EFS file systems**: Elastic File System file systems
- **FSx file systems**: FSx for Windows File Server and FSx for Lustre
- **Storage Gateway volumes**: AWS Storage Gateway volumes

---

## Primary Use Cases

### Cloud-Native Backup

- **Protect AWS workloads**: Backup cloud-based applications and data
- **Automated protection**: Ensure regular backups without manual intervention
- **Compliance**: Meet backup and retention requirements

### Hybrid Data Protection

- **On-premises integration**: Extend backup to hybrid environments
- **Unified strategy**: Single backup strategy for cloud and on-premises
- **Storage Gateway**: Backup Storage Gateway volumes

---

## Recovery Process

### Key Aspects

- **Quick recovery**: Restore data quickly when needed
- **Point-in-time recovery**: Restore to specific backup points
- **Minimal downtime**: Reduce recovery time objectives (RTO)
- **Data integrity**: Ensure recovered data is consistent and complete

### Recovery Options

- **Full restore**: Restore entire resource from backup
- **Partial restore**: Restore specific files or databases
- **Cross-region restore**: Restore to different region for disaster recovery

---

## Key Constraints / Tradeoffs

- **Service coverage**: Not all AWS services supported (check current list)
- **Cost**: Additional cost for backup storage
- **Retention limits**: Policies may have retention limitations
- **Recovery time**: Depends on size and service type

---

## Key Takeaways (Exam-Oriented)

- AWS Backup = centralized, automated backup service
- Centralized management: Single console for multiple AWS services
- Automated scheduling: Policies define when backups occur
- Supports: EC2, EBS, RDS, DynamoDB, EFS, FSx, Storage Gateway
- Security: Encryption, compliance features
- Cross-region/account: Backup across regions and accounts for disaster recovery
- Recovery: Quick restore with point-in-time recovery options

---

## One-Sentence Summary

AWS Backup is a centralized, automated backup service that simplifies backup management across multiple AWS services (EC2, EBS, RDS, DynamoDB, EFS, FSx, Storage Gateway), provides automated scheduling, encryption, compliance features, and cross-region/account backup capabilities.

---

# Additional Storage Services

## Amazon FSx

### What It Is

- **Managed file systems** for Windows and Lustre workloads
- Fully managed service (no file server management)

### FSx for Windows File Server

- **Windows-native features**: SMB protocol, Active Directory integration
- **Use case**: Windows-based applications requiring Windows file shares
- **Compatibility**: Fully compatible with Windows applications

### FSx for Lustre

- **High-performance file system**: Optimized for compute-intensive workloads
- **Use case**: Machine learning, high-performance computing, data processing
- **Performance**: Very high throughput and low latency

### Key Point for Exam

- **Windows workloads**: FSx for Windows File Server
- **High-performance computing**: FSx for Lustre
- **Fully managed**: No file server administration

---

## AWS Elastic Disaster Recovery

### What It Is

- **Disaster recovery service** that minimizes downtime and data loss
- Provides swift recovery times for business continuity

### Key Features

- **Minimize downtime**: Quick recovery from disruptions
- **Minimize data loss**: Continuous replication to AWS
- **Cost-effective**: Pay only for servers actively replicating
- **Adaptable**: Tailored to specific recovery needs

### Use Cases

- **Business continuity**: Ensure operations continue during disruptions
- **Disaster recovery**: Recover from on-premises failures
- **Cost-effective DR**: More affordable than maintaining duplicate infrastructure

### Key Point for Exam

- **Quick recovery times**: Swift recovery from disasters
- **Cost-effective**: Pay only for active replication
- **Business continuity**: Minimizes downtime and data loss

---

## Key Takeaways (Exam-Oriented)

- **FSx**: Managed file systems (Windows File Server, Lustre)
- **FSx for Windows**: Windows-native features, SMB protocol
- **FSx for Lustre**: High-performance computing, ML workloads
- **Elastic Disaster Recovery**: Minimizes downtime, cost-effective DR solution
- **Pay for active replication**: Only pay for servers being replicated

---

## One-Sentence Summary

Amazon FSx provides managed file systems for Windows (FSx for Windows File Server) and high-performance computing (FSx for Lustre), while AWS Elastic Disaster Recovery offers cost-effective disaster recovery with quick recovery times and continuous replication to AWS.

---

# Storage Services Summary Table

## Quick Reference: AWS Storage Services

| Service | Type | Persistence | Access | Use Case | Cost |
|---------|------|------------|--------|----------|------|
| **S3** | Object | Persistent | API/Web | Backup, static websites, big data | Pay per GB |
| **EBS** | Block | Persistent | Single EC2 | Databases, boot volumes | Pay per GB |
| **EFS** | File | Persistent | Multiple EC2 | Shared file storage | Pay per GB |
| **Instance Store** | Block | Ephemeral | Single EC2 | Temporary data, caches | Included |
| **Storage Gateway** | Hybrid | Persistent | On-premises | Hybrid cloud, backup | Pay per GB |
| **FSx** | File | Persistent | Multiple EC2 | Windows/Lustre workloads | Pay per GB |

---

## Exam-Oriented Storage Decision Tree

### Need persistent storage?

**Yes** → Need block storage?
- **Yes** → **EBS** (single EC2 instance, databases)
- **No** → Need file system?
  - **Yes** → Need shared access?
    - **Yes** → **EFS** (multiple EC2, NFS)
    - **No** → **FSx** (Windows/Lustre)
  - **No** → **S3** (object storage, backup, static websites)

**No** → **Instance Store** (temporary, high I/O, no cost)

### Need hybrid (on-premises to cloud)?

**Yes** → **Storage Gateway** (S3 File, Volume, Tape, FSx File)

---

## Key Exam Tips

1. **S3**: Object storage, 11 nines durability, globally unique bucket names
2. **EBS**: Block storage, single EC2 instance, SSD (IOPS) vs HDD (throughput)
3. **EFS**: File storage, multiple EC2 instances, NFS protocol, automatic scaling
4. **Instance Store**: Temporary, high I/O, data lost on stop/terminate
5. **Storage Classes**: Know retrieval times and costs (Standard → Glacier Deep Archive)
6. **Snapshots**: Incremental, stored in S3, can copy across regions
7. **Multi-Attach**: Only for Provisioned IOPS SSD (io1, io2) in same AZ
8. **Durability**: S3, EBS, EFS = persistent; Instance Store = ephemeral

---

## One-Sentence Summary

AWS provides multiple storage services: S3 for object storage, EBS for block storage, EFS for shared file storage, Instance Store for temporary high-performance storage, Storage Gateway for hybrid cloud, FSx for Windows/Lustre workloads, and AWS Backup for centralized backup management, each optimized for specific use cases and access patterns.
