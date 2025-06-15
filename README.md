# temu-webshop

## Getting Started

### Prerequisites

**Node.js and npm/yarn**: For frontend and backend development.
**Docker Desktop (or Docker Engine + Docker Compose):** For running the application locally using containers.
**kubectl:** The Kubernetes command-line tool (if deploying to Kubernetes).
**A local Kubernetes cluster:** Such as the one included with Docker Desktop, Minikube, or kind (if deploying to Kubernetes).
**Git:** For version control.

### Local Development (Docker Compose)

This is the recommended way to run the entire stack for development and testing on your local machine.

#### Clone the repository

```bash
git clone https://github.com/Plirexic/temu-webshop
cd temu-webshop
```

#### Build and start the services

From the project root directory:

```bash
docker-compose up --build -d
```

`--build`: Forces a rebuild of your custom frontend and backend images if their Dockerfiles or contexts have changed.
`-d`: Runs containers in detached mode.

#### **Access the applications**

    **Frontend:** `http://localhost:3000`
    **Backend API Base:** `http://localhost:3001`
    **pgAdmin (Database Admin):** `http://localhost:5050` (Login with `admin@admin.com` / `admin`)

#### To stop the services or view logs

```bash
docker-compose down
# or
docker-compose logs -f <service_name> #e.g. backend, frontend, db
```

### Kubernetes Deployment

The Kubernetes manifests are located in the `kubernetes/` directory. These define Deployments and Services for each component.

#### Prerequisites for Kubernetes

1. A running Kubernetes cluster (e.g., Docker Desktop's built-in Kubernetes, Minikube, kind).
2. `kubectl` configured to communicate with your cluster.
3. The Docker images (`plirexic/temu-frontend:latest` and `plirexic/temu-backend:latest`) are pushed to Docker Hub and accessible by the Kubernetes cluster.

#### Applying Manifests

All Kubernetes manifets are in the kubernetes folder.
Apply all Kubernetes manifests (Deployments and Services):

```bash
kubectl apply -f kubernetes/
```

#### Accessing the Application on Kubernetes

There should be the following pods and services deployed: `postgres, frontend, backend`

```bash
kubectl get pods
```

#### Checking Deployment Status

View Pod logs

```bash
kubectl logs <pod-name>
```

Describe resources/events

```bash
kubectl describe pod <pod_id>
```

#### API Documentation

The backend API includes Swagger UI for interactive documentation. Once the backend is running (either via Docker Compose or Kubernetes):

```bash
<backend_url>/api
# default backend port is 3001
```
