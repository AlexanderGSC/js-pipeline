# Node.js CI/CD Pipeline with Docker and Render 🚀

This project is an exercise in continuous deployment that connects an Express server to a cloud infrastructure.

## 🌐 Link
You can see the service in action here: 
👉 [https://test-node-service-jmdc.onrender.com/](https://test-node-service-jmdc.onrender.com/)

## 🛠️ Pipeline

1. **GitHub Push**: When changes are pushed to the `main` branch, a **GitHub Action** is triggered.
2. **Build & Push**: The Action builds a Docker image and uploads it to **Docker Hub**.
3. **Trigger de Despliegue**: After a successful push, a webhook (deploy hook) is sent to **Render**.
4. **Auto-Update**: Render downloads the new image and automatically restarts the service.

## 📦 Componentes
- **Backend**: Node.js + Express.
- **Container**: Docker (Multi-stage build).
- **CI/CD**: GitHub Actions.
- **Hosting**: Render (Web Service).

---
