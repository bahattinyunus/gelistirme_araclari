# Lab 01 - Kod Açıklatma Prompt'u

## Amaç
Kısa, belirsiz bir prompt ile ayrıntılı, iyi tasarlanmış bir prompt arasındaki farkı görmek.

## Adım 1 - Kötü Prompt
- Prompt: "Bu fonksiyon ne yapıyor? Açıkla."
- Fonksiyon örneği olarak depodaki bir fonksiyonu kullan (veya basit bir JS/Python fonksiyonu yaz).

## Adım 2 - İyi Prompt
- Prompt'u şu şekilde genişlet:
  - Dil + framework + dosya adı
  - Bağlam (hangi projeden, nerede kullanılıyor)
  - Çıktı formatı (madde madde, örneklerle)
  - Gerekirse isimlendirme/iyileştirme isteği

Örnek:
"Kıdemli bir JavaScript geliştiricisi gibi davran. Aşağıdaki fonksiyonun ne yaptığını adım adım açıkla, olası edge-case'leri belirt ve daha iyi bir isim öner. Cevabı madde madde yaz.

```js
function handleData(arr) {
  return arr.filter(x => x.active).map(x => x.value);
}
```"

## Adım 3 - Karşılaştırma
- İki cevabı yan yana koy.
- Farkları not et: detay seviyesi, doğruluk, ek öneriler.

Son satıra kendi yorumlarını ekle (neler iyi çalıştı / neyi değiştirmek istersin).
