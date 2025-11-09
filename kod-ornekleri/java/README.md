# Java Kod Örnekleri

Bu klasör, Java ile yazılım geliştirme araçlarının kullanımını gösteren örnekler içerir.

## 📁 Dosyalar

- `TodoApp.java` - Java class yapısı ile Todo uygulaması
- `TodoAppTest.java` - JUnit 5 ile test örnekleri
- `pom.xml` - Maven proje yapılandırması

## 🚀 Kullanım

### 1. Maven ile Derleme

```bash
# Projeyi derle
mvn compile

# Testleri çalıştır
mvn test

# Paket oluştur
mvn package
```

### 2. IDE ile Çalıştırma

- IntelliJ IDEA veya Eclipse'de projeyi açın
- `TodoApp.java` dosyasındaki `main` metodunu çalıştırın
- Testleri IDE'den çalıştırabilirsiniz

### 3. Komut Satırından Çalıştırma

```bash
# Derle
javac -d target/classes TodoApp.java

# Çalıştır
java -cp target/classes TodoApp
```

## 🛠️ Kullanılan Araçlar

- **Maven** - Proje yönetimi ve build
- **JUnit 5** - Test framework
- **JavaDoc** - Dokümantasyon
- **Git** - Sürüm kontrolü

## 📝 Git Kullanımı

```bash
git add kod-ornekleri/java/
git commit -m "Java örnekleri eklendi"
git push origin main
```

## 💡 Öğrenilen Konular

1. Java class ve object yapısı
2. Maven ile proje yönetimi
3. JUnit 5 ile test yazma
4. JavaDoc ile dokümantasyon
5. Exception handling
6. Stream API kullanımı

## 📦 Maven Komutları

```bash
mvn clean          # Temizle
mvn compile        # Derle
mvn test           # Test çalıştır
mvn package        # JAR oluştur
mvn install        # Local repository'ye yükle
```

