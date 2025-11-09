# Todo Uygulaması - Örnek Proje

Bu proje, **Yazılım Geliştirme Araçları** eğitimi kapsamında oluşturulmuş örnek bir Todo (Görev Listesi) uygulamasıdır.

## 🎯 Proje Amacı

Bu proje, aşağıdaki yazılım geliştirme araçlarının kullanımını göstermek için oluşturulmuştur:

- ✅ **Git & GitHub** - Sürüm kontrolü
- ✅ **Node.js & Express** - Backend API geliştirme
- ✅ **Jest** - Test yazma
- ✅ **Docker** - Konteynerizasyon
- ✅ **GitHub Actions** - CI/CD pipeline
- ✅ **VS Code** - Kod editörü

## 📁 Proje Yapısı

```
ornek-proje/
├── server.js              # Express.js backend API
├── package.json           # Node.js bağımlılıkları
├── Dockerfile             # Docker konteyner tanımı
├── docker-compose.yml     # Docker Compose yapılandırması
├── public/                # Frontend dosyaları
│   ├── index.html
│   ├── style.css
│   └── app.js
├── tests/                 # Test dosyaları
│   └── todo.test.js
└── .github/
    └── workflows/
        └── ci.yml         # GitHub Actions workflow
```

## 🚀 Kurulum ve Çalıştırma

### Yerel Ortamda Çalıştırma

1. **Bağımlılıkları yükle:**
   ```bash
   npm install
   ```

2. **Sunucuyu başlat:**
   ```bash
   npm start
   ```

3. **Geliştirme modunda çalıştır (nodemon ile):**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda aç:**
   ```
   http://localhost:3000
   ```

### Docker ile Çalıştırma

1. **Docker imajını oluştur:**
   ```bash
   docker build -t todo-app .
   ```

2. **Konteyneri çalıştır:**
   ```bash
   docker run -p 3000:3000 todo-app
   ```

3. **Docker Compose ile çalıştır:**
   ```bash
   docker-compose up
   ```

## 🧪 Test Çalıştırma

```bash
# Tüm testleri çalıştır
npm test

# Testleri watch modunda çalıştır
npm run test:watch
```

## 📡 API Endpoints

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/api/todos` | Tüm görevleri getir |
| GET | `/api/todos/:id` | Tek bir görevi getir |
| POST | `/api/todos` | Yeni görev ekle |
| PUT | `/api/todos/:id` | Görevi güncelle |
| DELETE | `/api/todos/:id` | Görevi sil |
| DELETE | `/api/todos` | Tamamlanan görevleri temizle |
| GET | `/health` | Health check |

### Örnek API Kullanımı

**Görev ekle:**
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Yeni görev"}'
```

**Tüm görevleri getir:**
```bash
curl http://localhost:3000/api/todos
```

**Görevi tamamla:**
```bash
curl -X PUT http://localhost:3000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

## 🛠️ Kullanılan Teknolojiler

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Test:** Jest, Supertest
- **Containerization:** Docker
- **CI/CD:** GitHub Actions

## 📚 Öğrenme Hedefleri

Bu projeyi inceleyerek şunları öğrenebilirsiniz:

1. RESTful API tasarımı
2. Express.js ile backend geliştirme
3. Jest ile test yazma
4. Docker ile konteynerizasyon
5. GitHub Actions ile CI/CD kurulumu
6. Git workflow ve branch stratejileri

## 🤝 Katkıda Bulunma

Bu bir eğitim projesidir. İyileştirme önerileri ve katkılarınızı bekliyoruz!

## 📄 Lisans

MIT License - Detaylar için ana dizindeki LICENSE dosyasına bakın.

