# Docker

Bu klasör, uygulamaları konteyner içinde çalıştırmak için kullanılan **Docker** ile ilgili örnekleri içerir.

## Temel Kavramlar
- Image
- Container
- Dockerfile
- Volume
- Port yönlendirme

## Basit Node.js Dockerfile Örneği
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## Faydalı Komutlar
- `docker build -t todo-app .`
- `docker run -p 3000:3000 todo-app`
- `docker ps`
- `docker stop <id>`
