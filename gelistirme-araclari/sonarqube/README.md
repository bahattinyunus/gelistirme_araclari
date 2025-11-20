# SonarQube

Bu klasör, kod kalitesi ve statik analiz aracı **SonarQube** hakkında kısa notlar içerir.

## Ne İşe Yarar?
- Kod kokularını (code smells) tespit eder
- Güvenlik açıklarını raporlar
- Test coverage ölçer

## Temel Bileşenler
- SonarQube Server
- Sonar Scanner (CLI veya CI entegrasyonu)

## Örnek CLI Kullanımı
```bash
sonar-scanner \
  -Dsonar.projectKey=todo-app \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=<TOKEN>
```

Gerçek projede bu komut CI pipeline içine eklenir.
