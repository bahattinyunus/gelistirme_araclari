# Yazılım Geliştirme Araçları Ders Notu

## 1. Giriş

Yazılım geliştirme araçları, bir yazılım projesinin planlama, kodlama, test etme, hata ayıklama ve dağıtım aşamalarında kullanılan programlardır.  
Amaç; yazılım geliştirme sürecini **hızlandırmak**, **hataları azaltmak** ve **verimliliği artırmaktır**.

---

## 2. Yazılım Geliştirme Süreci (Software Development Life Cycle - SDLC)

Yazılım geliştirme araçları, genellikle bu sürecin adımlarına göre sınıflandırılır:

1. **Analiz** → Gereksinimlerin belirlenmesi  
2. **Tasarım** → Yazılım mimarisinin planlanması  
3. **Kodlama** → Yazılımın geliştirilmesi  
4. **Test** → Hata ve performans kontrolü  
5. **Dağıtım (Deployment)** → Yazılımın kullanıma sunulması  
6. **Bakım (Maintenance)** → Güncellemeler ve hata düzeltmeleri  

---

## 3. Yazılım Geliştirme Araçlarının Türleri

### 3.1. Entegre Geliştirme Ortamları (IDE)
Bir yazılımı geliştirmek için gerekli tüm araçları tek çatı altında toplayan uygulamalardır.

**Örnekler:**
- Visual Studio (C#, .NET)
- IntelliJ IDEA (Java)
- PyCharm (Python)
- Eclipse (Java)
- VS Code (Çoklu dil desteği)

**Avantajları:**
- Kod tamamlama (auto-complete)
- Hata ayıklama (debugger)
- Entegre terminal ve proje yönetimi
- Eklenti desteği

---

### 3.2. Sürüm Kontrol Sistemleri (Version Control Systems)

Kodun farklı sürümlerini yönetmek, ekip çalışmasını kolaylaştırmak için kullanılır.

**En yaygın araç:**  
- **Git** → Dağıtık versiyon kontrol sistemi  
- **GitHub / GitLab / Bitbucket** → Git projeleri için bulut depolar

**Kavramlar:**
- `commit`: Değişiklik kaydı  
- `branch`: Farklı geliştirme dalı  
- `merge`: Dalları birleştirme  
- `push` ve `pull`: Kod gönderme / çekme işlemleri  

---

### 3.3. Proje Yönetim Araçları

Proje sürecini planlamak, görevleri dağıtmak ve ilerlemeyi takip etmek için kullanılır.

**Örnekler:**
- Trello  
- Jira  
- Asana  
- Notion  

**Faydaları:**
- Takım içi iletişimi güçlendirir  
- Görevlerin durumunu takip etmeyi kolaylaştırır  
- Zaman yönetimini geliştirir

---

### 3.4. Derleyiciler ve Yorumlayıcılar

Yazılım kodunu çalıştırılabilir forma dönüştürürler.

| Tür | Açıklama | Örnek Diller |
|-----|-----------|--------------|
| **Derleyici (Compiler)** | Kodu tamamını derleyip tek seferde çalıştırır | C, C++ |
| **Yorumlayıcı (Interpreter)** | Kodu satır satır okur ve çalıştırır | Python, JavaScript |

---

### 3.5. Hata Ayıklama (Debugging) Araçları

Kodda oluşan hataları tespit etmek ve çözmek için kullanılır.

**Örnekler:**
- Visual Studio Debugger  
- Chrome DevTools  
- PyCharm Debugger  
- GDB (C/C++ için)

---

### 3.6. Test Araçları

Yazılımın beklenen şekilde çalışıp çalışmadığını kontrol eder.

**Örnekler:**
- JUnit (Java)
- PyTest (Python)
- Selenium (Web otomasyon testleri)
- Postman (API testleri)

---

### 3.7. Sürekli Entegrasyon ve Dağıtım (CI/CD) Araçları

Kod değişikliklerinin otomatik test edilmesi ve sunucuya aktarılması için kullanılır.

**Örnekler:**
- Jenkins  
- GitHub Actions  
- Travis CI  
- GitLab CI/CD  

**Amaç:**  
Kod değişikliklerinden sonra hatasız, hızlı ve otomatik bir yayın süreci oluşturmak.

---

### 3.8. Paket Yönetim Sistemleri

Kütüphane ve bağımlılık yönetimini kolaylaştırır.

| Dil | Araç | Komut |
|-----|------|-------|
| Python | pip | `pip install paket_adi` |
| JavaScript | npm / yarn | `npm install paket_adi` |
| Java | Maven / Gradle | `mvn install` |
| C# | NuGet | `dotnet add package paket_adi` |

---

## 4. Yazılım Geliştirme Ortamı Kurulumu (Örnek)

Python ile yazılım geliştirmek için:

1. Python kurulumu yapılır.  
2. VS Code veya PyCharm yüklenir.  
3. `pip install` komutu ile kütüphaneler eklenir.  
4. Git kurulup GitHub hesabı bağlanır.  
5. Geliştirme, test ve sürüm yönetimi yapılır.  

---

## 5. Sonuç

Yazılım geliştirme araçları, bir yazılımcının **verimli**, **hatasız** ve **ekip uyumlu** şekilde çalışabilmesini sağlar.  
Geliştirici için asıl amaç, bu araçları **doğru zamanda, doğru kombinasyonla** kullanabilmektir.

---

## Ek Kaynaklar

- [Git Resmi Dokümantasyonu](https://git-scm.com/doc)  
- [Visual Studio Code Rehberi](https://code.visualstudio.com/docs)  
- [Jira Project Management](https://www.atlassian.com/software/jira)  
- [Postman API Testing](https://www.postman.com/)


Harika — o zaman dersin devamına, yani **“yazılım geliştirme araçlarının profesyonel kullanımı ve entegre ekosistemler”** kısmına geçelim.
Artık temel tanımları geçtik, şimdi biraz daha *“işin mutfağına”* iniyoruz.

---

# Yazılım Geliştirme Araçları 

## 6. Entegre Ekosistemler

Yazılım geliştirme, tek başına bir araçla değil, **bir ekosistemle** yürür.  
Bu ekosistem; kod editöründen bulut ortamına, test aracından versiyon kontrol sistemine kadar her şeyi kapsar.

### 6.1. Örnek Bir Ekosistem: VS Code + GitHub + Docker

- **VS Code:** Kodlama, hata ayıklama, terminal  
- **GitHub:** Sürüm kontrolü ve takım çalışması  
- **Docker:** Uygulamayı sanal bir konteyner içinde çalıştırma  

💡 *Avantajı:*  
“Bilgisayarımda çalışıyor ama sizde neden hata veriyor?” cümlesi tarih olur.  
Çünkü Docker ile herkes aynı ortamda çalışır.

---

## 7. Yazılımda Otomasyonun Rolü

Modern yazılım dünyasında **otomasyon**, üretkenliğin anahtarıdır.  
Yani artık yazılımcılar sadece kod yazmaz, **süreci de kodlar.**

### 7.1. CI/CD Süreci Nasıl İşler?

1. Kod GitHub’a push edilir  
2. CI/CD aracı (ör. GitHub Actions) devreye girer  
3. Otomatik testler çalışır  
4. Hatalı kod varsa uyarı gider  
5. Başarılı kod, otomatik olarak sunucuya dağıtılır  

Bu sistem, özellikle **büyük ekiplerde hata oranını minimuma indirir.**

---

## 8. API Geliştirme ve Test Araçları

Yazılım dünyasının en popüler alanlarından biri **API (Application Programming Interface)** geliştirmedir.  
API’ler, farklı yazılımların birbiriyle konuşmasını sağlar.

### 8.1. API Geliştirmede Kullanılan Araçlar

- **Postman:** API’leri test eder  
- **Swagger:** API dokümantasyonu oluşturur  
- **Insomnia:** Alternatif API test aracı  

🧠 *İpucu:*  
Yazılım geliştirirken bir API'yi test etmek, arayüzü test etmekten genellikle daha önemlidir.  
Çünkü arayüz değişebilir ama API yapısı sistemin kalbidir.

---

## 9. Kod Kalitesi ve Analiz Araçları

Kod sadece “çalışmak” için değil, **bakımı kolay** ve **anlaşılır** olmalıdır.

### 9.1. Statik Kod Analizi Nedir?

Kodun çalıştırılmadan önce hatalar, gereksiz satırlar veya güvenlik açıkları için analiz edilmesidir.

**Örnek Araçlar:**
- **SonarQube** → Kod kalitesi ölçer  
- **ESLint** → JavaScript kodlarını denetler  
- **Pylint** → Python projeleri için analiz  

---

## 10. Yazılım Geliştirme Sürecinde Takım Çalışması

### 10.1. Kod İnceleme (Code Review)

Takımda bir geliştiricinin yazdığı kod, başka biri tarafından gözden geçirilir.  
Amaç: **hataları erkenden yakalamak** ve **standartları korumak**.

**GitHub’da:**  
- Pull Request (PR) açılır  
- Diğer geliştiriciler yorum yapar  
- Kod onaylanır ve birleştirilir (merge)

Bu süreç sadece kaliteyi artırmaz, **öğrenmeyi de hızlandırır.**

---

## 11. Yazılımda Dokümantasyon Araçları

İyi bir yazılımcı sadece kod yazmaz, **kendini ve kodunu anlatır.**

### 11.1. Dokümantasyon Nedir?

Yazılımın nasıl çalıştığını, hangi adımlarla kurulacağını, hangi fonksiyonları içerdiğini açıklayan rehberdir.

**Araçlar:**
- **Markdown** (README dosyaları için)  
- **Sphinx** (Python projeleri için)  
- **Javadoc** (Java projeleri için)  
- **Doxygen** (C/C++ için)  

💡 *Gerçek dünya notu:*  
Büyük şirketlerde bir proje, dokümantasyonu eksikse “bitmiş sayılmaz.”

---

## 12. Yazılım Geliştirme Sürecinde Güvenlik

Yazılım güvenliği artık ayrı bir alan değil, **her geliştiricinin sorumluluğu.**

### 12.1. Güvenlik Araçları

- **OWASP ZAP:** Web uygulama güvenlik testi  
- **Burp Suite:** Penetrasyon testi aracı  
- **Dependabot:** GitHub üzerindeki bağımlılıkları tarar  

🧩 *Mini tavsiye:*  
API anahtarlarını `.env` dosyasında tut, asla GitHub’a yükleme.  
(Çünkü “hacker’lar da GitHub kullanıyor” 😎)

---

## 13. Bulut Tabanlı Geliştirme Araçları

Artık yazılım sadece yerel bilgisayarda değil, **bulutta** da geliştirilir.

**Örnekler:**
- GitHub Codespaces → Tarayıcıdan doğrudan VS Code ortamı  
- Replit → Online kod geliştirme platformu  
- Google Colab → Python ve veri bilimi projeleri için  

🌐 *Avantaj:*  
Her cihazdan aynı ortamda çalışmak, özellikle öğrenciler ve uzaktan ekipler için büyük kolaylık sağlar.

---

## 14. Sonuç

Yazılım geliştirme araçları, sadece “yardımcı” değil, **yazılımın omurgasıdır.**  
Bir geliştirici ne kadar çok aracı tanırsa, o kadar güçlü bir üretim altyapısı kurabilir.

> “Bir yazılımcı, kullandığı araçlarla sınırlı değildir; ama onları nasıl kullandığıyla tanımlanır.”

---

## 15. Ekstra: Öğrenciler İçin Öneri Yol Haritası

1. **VS Code** veya **IntelliJ IDEA** kullanmayı öğren  
2. **Git & GitHub** temel komutlarını uygula  
3. **Postman** ile API test et  
4. **Docker** ile bir projeni konteyner içinde çalıştır  
5. **Markdown** ile kendi notlarını düzenle  
6. **CI/CD (GitHub Actions)** akışını dene  

Bu 6 adım seni yazılım dünyasında hem teknik hem de profesyonel olarak bir adım öne taşır 🚀




# Gerçek Bir Yazılım Projesinde Araçların Kullanımı
## Örnek Proje: Todo (Görev Listesi) Uygulaması

Bu projede kullanıcılar görev ekleyip, tamamlayıp, silebilecek.  
Ama burada odak, **yazılım geliştirme araçlarının birlikte nasıl çalıştığı** olacak.

---

## 1. Planlama Aşaması 🗂️

### Kullanılan Araçlar:
- **Trello / Notion / Jira:** Görevleri planlamak ve görev dağıtımı yapmak için
- **Google Docs veya Figma:** Arayüz tasarımını ve akışı planlamak için

### Yapılan İşlemler:
- “Yapılacaklar Listesi” projesi oluşturulur.  
- Görevler belirlenir:
  - UI tasarımı
  - Backend API geliştirme
  - Veritabanı bağlantısı
  - Testler
  - Dağıtım (Deployment)

💡 *Pro tip:* “Yazmaya başlamadan önce düşün, planla, sonra kodla.”

---

## 2. Kodlama Aşaması 💻

### Araçlar:
- **VS Code** veya **IntelliJ IDEA** → Kod editörü  
- **Git** + **GitHub** → Sürüm kontrolü  
- **Node.js** (backend) veya **React** (frontend)  

### Süreç:
1. Yeni bir GitHub deposu açılır: `todo-app`
2. Terminalden proje başlatılır:  
   ```bash
   git clone https://github.com/kullaniciadi/todo-app.git
   cd todo-app
   npm init -y
```

3. Her özellik (örneğin “görev silme”) için **yeni bir branch** açılır:

   ```bash
   git checkout -b feature/delete-task
   ```
4. Kod yazılır, test edilir, commit yapılır:

   ```bash
   git add .
   git commit -m "Görev silme özelliği eklendi"
   git push origin feature/delete-task
   ```
5. GitHub üzerinden **Pull Request (PR)** açılır ve takım arkadaşından **code review** istenir.

---

## 3. Test Aşaması 🧪

### Araçlar:

* **Jest** → JavaScript test framework’ü
* **Postman** → API testleri
* **Selenium** → Arayüz testleri

### Süreç:

* Her fonksiyon için birim test (unit test) yazılır.
* API endpoint'leri Postman ile kontrol edilir.
* UI testleri Selenium üzerinden otomatikleştirilir.

```bash
npm test
```

🧠 *Not:* Otomatik testler, projenin “her push işleminde” çalıştırılacak şekilde CI/CD sürecine eklenir.

---

## 4. CI/CD Süreci ⚙️

### Araçlar:

* **GitHub Actions** veya **Jenkins**

### Süreç:

1. Kod GitHub’a push edildiğinde CI süreci tetiklenir.
2. Testler otomatik çalışır.
3. Başarılıysa otomatik olarak staging sunucusuna dağıtılır.

`.github/workflows/deploy.yml` dosyası örneği:

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Node kurulum
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm test
```

🎯 *Amaç:* Her değişikliğin güvenli şekilde çalıştığından emin olmak.

---

## 5. Dağıtım (Deployment) ☁️

### Araçlar:

* **Docker** → Uygulamayı konteynerize eder
* **Render / Vercel / Heroku / AWS** → Yayınlama ortamı

### Süreç:

1. Dockerfile oluşturulur:

   ```dockerfile
   FROM node:18
   WORKDIR /app
   COPY . .
   RUN npm install
   CMD ["npm", "start"]
   ```
2. Uygulama imajı oluşturulur:

   ```bash
   docker build -t todo-app .
   docker run -p 3000:3000 todo-app
   ```
3. Test edildikten sonra bulut ortamına aktarılır.

🚀 Artık proje herkese açık bir şekilde yayında!

---

## 6. Bakım ve Güncelleme 🔧

### Araçlar:

* **Dependabot (GitHub)** → Kütüphane güncellemelerini izler
* **Sentry / LogRocket** → Hata raporlama ve izleme
* **SonarQube** → Kod kalitesi ölçümü

### Süreç:

* Kodda güvenlik açığı varsa Dependabot uyarı verir.
* Kullanıcıdan gelen hata raporları izlenir.
* Gerektiğinde yeni branch açılıp düzeltme yapılır.

---

## 7. Dokümantasyon 📘

### Araçlar:

* **Markdown (README.md)** → Projenin açıklaması
* **Swagger** → API dokümantasyonu
* **GitHub Wiki** → Geliştirici rehberi

### README Örneği:

# Todo App 📝
Bu proje, basit bir görev yönetim uygulamasıdır.

## Özellikler
- Görev ekleme / silme / tamamlama
- API tabanlı yapı
- Docker ile dağıtım

## Kurulum
```bash
git clone https://github.com/kullaniciadi/todo-app.git
npm install
npm start





## 8. Sonuç 🎯

Bu örnekte gördüğün gibi, bir yazılım projesi **tek bir araçtan ibaret değil** — bir **ekosistem senfonisi**.  
Her araç, sürecin belirli bir aşamasında **sistemin çarkı** gibi görev yapar:

| Aşama | Araç | Amaç |
|-------|------|------|
| Planlama | Trello, Notion | Görev yönetimi |
| Kodlama | VS Code, Git | Geliştirme |
| Test | Jest, Postman | Hata kontrolü |
| CI/CD | GitHub Actions | Otomasyon |
| Dağıtım | Docker, Render | Yayınlama |
| Bakım | Sentry, Dependabot | Hata takibi |
| Dokümantasyon | Markdown, Swagger | Bilgi paylaşımı |

---

> 🔥 “Gerçek yazılımcı, kullandığı araçları değil; bu araçların birlikte nasıl dans ettiğini bilir.”

.