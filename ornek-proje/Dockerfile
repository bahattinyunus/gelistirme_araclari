# Dockerfile - Todo Uygulaması
# Bu dosya, uygulamayı Docker konteynerinde çalıştırmak için kullanılır

# Node.js 18 LTS sürümünü base image olarak kullan
FROM node:18-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
# Bu, bağımlılıkların cache'lenmesini sağlar
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm ci --only=production

# Uygulama dosyalarını kopyala
COPY . .

# Public klasörünü statik dosyalar için expose et
COPY public ./public

# Port 3000'i expose et
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]

