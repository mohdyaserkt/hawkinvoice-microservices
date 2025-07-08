# 🚀 HawkInvoice - Multi-tenant SaaS for Invoice Management

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/your-org/hawkinvoice/ci-cd.yml?branch=main)](https://github.com/your-org/hawkinvoice/actions)
[![codecov](https://codecov.io/gh/your-org/hawkinvoice/branch/main/graph/badge.svg)](https://codecov.io/gh/your-org/hawkinvoice)

## 🖥 Frontend

The frontend application for HawkInvoice is built with Next.js.

- **Repository**: [Frontend Repo](https://github.com/mohdyaserkt/hawkinvoice-client)


## 📋 Overview

HawkInvoice is a scalable, cloud-native SaaS platform designed to streamline invoice management, financial tracking, and business operations for organizations of all sizes. Built with a microservices architecture, it ensures high scalability, maintainability, and performance while adhering to Clean Architecture and SOLID principles.


## 🌟 Features

- **Multi-tenant Architecture**: Secure isolation between different organizations
- **Invoice Lifecycle Management**: Create, send, track, and manage invoices
- **Customer Management**: Centralized customer database with interaction history
- **Organization Management**: Manage multiple organizations under a single account
- **Role-based Access Control**: Fine-grained permissions system
- **RESTful & gRPC APIs**: For seamless integration with other systems
- **Containerized Deployment**: Using Docker and Kubernetes
- **CI/CD Pipeline**: Automated testing and deployment

## 🏗 Project Structure

```
hawkinvoice/
├── .github/             # GitHub workflows and templates
├── infra/               # Infrastructure as Code
│   ├── k8s/            # Kubernetes manifests
│   ├── k8s-dev/        # Development environment configs
│   └── k8s-prod/       # Production environment configs
├── services/           # Microservices
│   ├── customer/       # Customer management service
│   ├── invoice/        # Core invoice processing
│   ├── organization/   # Organization management
│   └── tenants/        # Multi-tenancy service
└── skaffold.yaml       # Development workflow configuration
```

## 🛠 Services

### 1. Customer Service
Manages customer data, interactions, and relationships.
- **Tech Stack**: Node.js, TypeScript, 
- **Database**: MongoDB
- **API**: REST & gRPC

### 2. Invoice Service
Handles the complete invoice lifecycle.
- **Tech Stack**: Node.js, TypeScript
- **Database**: MongoDB
- **Features**: PDF generation, email notifications

### 3. Organization Service
Manages organization settings and users.
- **Tech Stack**: Node.js, TypeScript
- **Database**: MongoDB
- **Features**: User management, role-based access

### 4. Tenants Service
Handles multi-tenancy and tenant isolation.
- **Tech Stack**: Node.js, TypeScript, 
- **Database**: MongoDB

## 🛠 Infrastructure

### Kubernetes
- **Development**: Local development with Minikube
- **Production**: Managed Kubernetes (EKS/GKE/AKS)
- **Message Broker**: NATS
- **Ingress**: Nginx Ingress Controller

### CI/CD
- GitHub Actions for automated testing and deployment
- ArgoCD for GitOps workflow
- Automated testing and security scanning

## 🚀 Getting Started

### Prerequisites

- Docker & Docker Compose
- Node.js 18+
- npm or yarn
- Kubernetes (for production deployment)
- Skaffold (for local development)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/hawkinvoice.git
   cd hawkinvoice-microservices
   ```

2. **Start development environment**
   ```bash
   skaffold dev
   ```
   This will:
   - Build all services
   - Deploy to local Kubernetes (Minikube/Docker Desktop)
   - Set up port forwarding
   - Stream logs

3. **Access the application**
   - Web UI: http://localhost:3000
   - API Documentation: http://localhost:3000/api/docs

## 🧪 Testing

Run tests for all services:

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 🚀 Deployment

### Development
```bash
skaffold run
```

### Production
```bash
kubectl apply -k ./infra/k8s-prod
```

## 📚 Documentation

- [API Documentation](https://app.swaggerhub.com/apis-docs/YASERKT786/hawk-invoice_api/1.0.0)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: mail.hawkinvoice@gmail.com
- **Twitter**: [@hawkinvoice](https://twitter.com/hawkinvoice)
- **Website**: https://hawkinvoice.online

## 🙏 Acknowledgments

- Built with ❤️ by Mohd Yassar.
