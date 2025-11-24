# AWS Disaster Recovery with Serverless & S3

This project demonstrates a **disaster recovery (DR) architecture on AWS** using **S3, Lambda, and other serverless services**.  
The goal is to automatically back up data, replicate it to a secondary region, and enable quick recovery in case of primary region failure.

---

## 📌 Project Overview

- **Primary Storage:** S3 bucket in the primary region (e.g., `ap-south-1`).
- **Backup/DR Region:** S3 bucket in a secondary region (e.g., `ap-southeast-1`).
- **Serverless Automation:** AWS Lambda functions triggered by S3 events / schedulers.
- **Use Case:** When data is uploaded/modified in the primary bucket, it is automatically backed up or replicated to a DR bucket.

You can use this setup as a **reference architecture** for small applications that require low-cost disaster recovery.

---

## 🏗️ Architecture

**Main components:**

- **Amazon S3** – Stores primary data and backup copies.
- **AWS Lambda** – Handles automatic replication/backup/cleanup logic.
- **(Optional) CloudWatch Events / EventBridge** – Schedules periodic backups or health checks.
- **(Optional) IAM Roles & Policies** – Secure access for Lambda and S3.

**Flow (example):**

1. User uploads files to **Primary S3 Bucket**.
2. An **S3 event** triggers a **Lambda function**.
3. Lambda copies the object to the **DR S3 Bucket** (possibly in another region).
4. In case of a disaster in the primary region, data can be restored from the DR bucket.

Add architecture diagram in `/docs/architecture.png` and reference it here:

![Architecture Diagram](docs/architecture.png)

---

## 🔧 Tech Stack

- **Cloud Provider:** AWS
- **Services Used:**  
  - Amazon S3  
  - AWS Lambda  
  - AWS IAM
  - AWS Dynamo DB
  - AWS R53
  - AWS CLOUDWATCH 
  -CloudFormation / Terraform for IaC  
- **Languages:**  
   Python (for Lambda)  
- **Other:**  
  - IAM roles and policies

---

## 🚀 Features

- Automatic backup of objects from primary S3 bucket to DR bucket.
- Cross-region replication using serverless functions (if enabled).
- (Optional) Scheduled backups using CloudWatch Events.
- (Optional) Logging and monitoring using CloudWatch Logs.

---

                   
