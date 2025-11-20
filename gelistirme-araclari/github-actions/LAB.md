# GitHub Actions Mini Lab

Bu lab ile basit bir Node.js projesi için CI workflow'u kuracaksın.

## 1. Projeyi Hazırla

1. Yeni bir klasör oluştur ve içinde aşağıdakileri yap:
   - `npm init -y`
   - `npm install jest --save-dev`
2. `sum.js` ve `sum.test.js` oluştur (jest klasöründeki örneği kullanabilirsin).
3. `package.json` içine şu script'i ekle:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

## 2. Depoyu GitHub'a Gönder

1. `git init`
2. GitHub'da boş bir repo aç.
3. Aşağıdaki komutlarla ilk push'u yap:
   ```bash
   git remote add origin <REPO_URL>
   git add .
   git commit -m "ilk commit"
   git push -u origin main
   ```

## 3. GitHub Actions Workflow Oluştur

1. Projede `.github/workflows/` klasörü oluştur.
2. Bu klasöre `ci.yml` ekle ve aşağıdaki içeriği kullan:
   ```yaml
   name: Node.js CI
   on:
     push:
       branches: [ "main" ]
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 18
         - run: npm install
         - run: npm test
   ```
3. Dosyayı commit edip GitHub'a gönder:
   ```bash
   git add .github/workflows/ci.yml
   git commit -m "CI workflow eklendi"
   git push
   ```

## 4. Sonucu İncele

1. GitHub repo sayfanda **Actions** sekmesine git.
2. Push'tan sonra otomatik tetiklenen workflow'u gör.
3. Log'ları inceleyerek adımların başarılı çalıştığını kontrol et.

## 5. Deney Yap

- Bilerek testi boz (örneğin beklenen sonucu değiştir) ve push et.
- Actions sekmesinde pipeline'ın kırmızıya düştüğünü ve hata mesajlarını gözlemle.

Bu lab ile temel bir CI akışının baştan sona nasıl kurulduğunu görmüş oluyorsun.
