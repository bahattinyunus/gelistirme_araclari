# Kubernetes

Bu klasör, container orkestrasyon aracı **Kubernetes** hakkında temel kavramları içeren kısa bir özet sunar.

## Temel Kavramlar
- Cluster
- Node
- Pod
- Deployment
- Service

## Basit Deployment Örneği
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: todo-api
spec:
  replicas: 2
  selector:
    matchLabels:
      app: todo-api
  template:
    metadata:
      labels:
        app: todo-api
    spec:
      containers:
        - name: todo-api
          image: kullanici/todo-api:latest
          ports:
            - containerPort: 3000
```

Gerçek ortamda bu dosya `kubectl apply -f deployment.yml` komutu ile uygulanır.
