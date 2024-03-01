# Docker Build, Security Scan & Deploy CI/CD - templateapi

## Sample Project Structures
This project consists of three main folder structures:
cf-pipelines/: Contains CI/CD YAML configuration files and DNS migration settings.
dockers/: Holds the project's codebase.
infra/charts/: Contains Helm chart packages for Kubernetes.

### CI/CD Pipeline
- This section includes YAML configurations for the CI/CD pipeline and DNS migration settings.
- The CI/CD pipeline comprises a series of YAML configurations guiding the process from code pull to building, testing, vulnerability scanning, staging deployment, and production promotion.
- DNS migration files are typically used during service migration from an old cluster to a new one.

### Docker
Docker automates image building by interpreting instructions from a Dockerfile, which contains all commands required to construct a specific image.

### Helm Chart
Helm Chart serves as a package manager for Kubernetes, facilitating the discovery, sharing, and utilization of software designed for Kubernetes environments.

## Benefits for Codefresh CI/CD Platform
- Utilizing Codefresh provides enhanced visibility, easing the debugging process through associated events and workflows, with logs conveniently collected into a central view.
- visit [codefresh](https://codefresh.io/)

## Getting Started

![codefresh-pipeline](images/codefresh_pipeline_templateapi.png)

- Begin by cloning your project's codebase using `Git`.
- Build the `Docker` image and upload it to the `AWS ECR` private repository.
- Employ `Synk` security scanner tools to identify vulnerabilities and conduct Static Application Security Testing (SAST).
- Update the `Gitops` application manifest with the latest image tag, server details, name, and endpoint information.
- Validate the syntax of the `Helm Chart`.
- Release the newly built Docker image to the `staging` cluster.
- Performing 2 minutes pause to ensure all the pod/container subside.
- Perform Load test using `K6` 3rd-party test.

### What the Sample Project is Doing
- Runs a simple `springboot java` web server which returns "Hello, World!" on port 8080
- The `Dockerfile` builds the application and upload docker image to AWS ECR

### Prerequisites
- AWS Account Staging and Production
- Codefresh Service
- Cloudflare DNS  Service
- Synk (Security Platform)
- AWS EKS Cluster Staging and Production

## Author
Thinegan Ratnam
 - [https://thinegan.com](https://thinegan.com/)

## Copyright and License

Copyright 2024 Thinegan Ratnam

Code released under the MIT License.
