# Prompt Engineering Mini Lab

Bu lab, üretken yapay zekayı (GenAI) yazılım geliştirme sürecinde daha kontrollü ve verimli kullanmayı öğretmek için tasarlanmıştır.

## 1. Kötü Prompt vs İyi Prompt

### Görev
Basit bir fonksiyon için unit test yazdırmak istiyorsun.

### Adım 1: Kötü Prompt
"Bu fonksiyon için test yazar mısın?"

Fonksiyon:
```python
def topla(a, b):
    return a + b
```

> Bu tarz belirsiz bir prompt'un ne gibi sorunlara yol açtığını gözlemle (yanlış framework, eksik senaryolar vb.).

### Adım 2: İyi Prompt
Aşağıdaki gibi ayrıntılı bir prompt dene:

"Aşağıdaki Python fonksiyonu için **pytest** kullanarak en az 5 unit test yaz. Kenar durumlarını da ekle. Sadece kod bloğu ver.

```python
def topla(a, b):
    return a + b
```
"

> İki çıktıyı karşılaştır ve farkları not et.

---

## 2. Rol Verme ve Bağlam Ekleme

### Görev
Bir Express.js API endpoint'ini iyileştirmek istiyorsun.

Kullanılacak kod:
```js
app.get('/api/todos', (req, res) => {
  res.json(todos);
});
```

### Prompt
"Kıdemli bir Node.js backend geliştiricisi gibi davran. Aşağıdaki Express endpoint'ini daha iyi hata yönetimi ve response formatı ile yeniden yaz. Açıklamaları madde madde ekle.

```js
app.get('/api/todos', (req, res) => {
  res.json(todos);
});
```
"

> Rol vermenin ve bağlam eklemenin çıktı kalitesini nasıl değiştirdiğini incele.

---

## 3. Adım Adım Düşünme

### Görev
Bir hatayı analiz ettirmek.

Hata:
```text
TypeError: Cannot read properties of undefined (reading 'map')
```

### Prompt
"Aşağıdaki hatayı alıyorum. Önce olası nedenleri listele, ardından her neden için çözüm adımlarını yaz. En sonda bu hatayı tekrar üretmemek için 3 genel tavsiye ver.

```text
TypeError: Cannot read properties of undefined (reading 'map')
```
"

> Modelin önce analiz, sonra çözüm, sonra özet şeklinde adımlı cevap vermesini hedefle.

---

## 4. Çıktı Formatını Belirleme

### Görev
Bir API için dokümantasyon yazdırmak.

### Prompt
"Aşağıdaki endpoint'ler için Markdown formatında bir API dokümantasyonu hazırla. Çıktıyı tablo halinde ver.

- GET /api/todos
- POST /api/todos
- PUT /api/todos/:id
- DELETE /api/todos/:id
"

> Çıktının tablo olması, dokümanı direkt README'ye koyabilmeni sağlar.

---

## 5. İteratif İyileştirme

### Görev
İlk cevaptan memnun kalmadığında nasıl iyileştireceğini öğrenmek.

1. Bilerek çok genel bir prompt yaz.
2. Gelen cevaptan memnun olmadığın noktaları işaret et.
3. Yeni bir prompt'ta şu şekilde düzeltme iste:
   - "Test sayısını artır."
   - "Sadece Jest kullan."
   - "Türkçe açıklama ekle."

> Aynı konuyu birkaç turda iyileştirerek, iteratif prompt engineering pratiği yap.
