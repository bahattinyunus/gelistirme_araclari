# Python Kod Örnekleri

Bu klasör, Python ile yazılım geliştirme araçlarının kullanımını gösteren örnekler içerir.

## 📁 Dosyalar

- `hesap_makinesi.py` - Basit hesap makinesi uygulaması
- `test_hesap_makinesi.py` - pytest ile test örnekleri
- `requirements.txt` - Python paket bağımlılıkları

## 🚀 Kullanım

### 1. Sanal Ortam Oluşturma (Önerilen)

```bash
# Python 3.8+ gereklidir
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

### 2. Bağımlılıkları Yükleme

```bash
pip install -r requirements.txt
```

### 3. Uygulamayı Çalıştırma

```bash
python hesap_makinesi.py
```

### 4. Testleri Çalıştırma

```bash
# Tüm testleri çalıştır
pytest test_hesap_makinesi.py

# Detaylı çıktı ile
pytest test_hesap_makinesi.py -v

# Coverage ile
pytest --cov=hesap_makinesi test_hesap_makinesi.py
```

## 🛠️ Kullanılan Araçlar

- **pip** - Paket yönetimi
- **pytest** - Test framework
- **pylint** - Kod analizi
- **black** - Kod formatlama
- **mypy** - Tip kontrolü

## 📝 Git Kullanımı

```bash
# Değişiklikleri takip et
git add kod-ornekleri/python/

# Commit yap
git commit -m "Python örnekleri eklendi"

# Push et
git push origin main
```

## 💡 Öğrenilen Konular

1. Python modül yapısı
2. Docstring kullanımı
3. pytest ile test yazma
4. pip ile paket yönetimi
5. Virtual environment kullanımı

