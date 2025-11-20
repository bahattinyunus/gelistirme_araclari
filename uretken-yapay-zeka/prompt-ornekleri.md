# Üretken Yapay Zeka Prompt Örnekleri

Aşağıdaki prompt'lar, geliştirme sürecinde üretken yapay zekayı verimli kullanmak için örnek olarak kullanılabilir.

## 1. Kod Açıklatma
"Aşağıdaki JavaScript fonksiyonunun ne yaptığını adım adım açıkla ve daha iyi bir isim öner:

```js
function handleData(arr) {
  return arr.filter(x => x.active).map(x => x.value);
}
```"

## 2. Refactoring
"Şu Python kodunu daha okunabilir hale getir ve gerekirse fonksiyonlara böl:

```python
def process(items):
    r = []
    for i in items:
        if i.get("status") == "ok":
            r.append(i["value"]) 
    return r
```"

## 3. Test Üretimi
"Bu fonksiyon için pytest kullanarak 5 tane unit test yaz:

```python
def topla(a, b):
    return a + b
```"

## 4. Hata Analizi
"Şu hatayı alıyorum, neden kaynaklanıyor olabilir? Bana olası senaryoları ve çözüm yollarını anlat:

```text
TypeError: Cannot read properties of undefined (reading 'map')
```"

## 5. Dokümantasyon
"Bu Express.js endpoint'leri için Markdown formatında kısa bir API dokümantasyonu hazırla:

- GET /api/todos
- POST /api/todos
- PUT /api/todos/:id
- DELETE /api/todos/:id
"
