# Üretken Yapay Zeka (GenAI)

Bu klasör, **ChatGPT, Copilot, Codeium** gibi üretken yapay zeka araçlarının yazılım geliştirme sürecinde nasıl kullanılabileceğine dair kısa notlar ve örnekler içerir.

## Ne İşe Yarar?
- Kod tamamlama ve refactoring
- Dokümantasyon ve README yazımı
- Test senaryosu üretimi
- Hata analizi ve debug sürecinde öneriler

## Dikkat Edilmesi Gerekenler
- Üretilen kodu **mutlaka oku ve anla**, doğrudan kopyalama.
- Güvenlik açısından gizli bilgileri (API key, müşteri verisi vb.) sohbette paylaşma.
- Lisans uyumluluğunu kontrol et (özellikle kopya koda benziyorsa).

## Kullanım Örnekleri
- Kod açıklat: "Bu fonksiyon ne yapıyor?"
- Refactor iste: "Bu kodu daha okunur hale getir."
- Test yazdır: "Bu fonksiyon için 5 tane unit test örneği üret."
- Doküman: "Bu API için kısa bir README hazırla."

## Prompt Engineering Temelleri

- **Bağlam ver:** Projenin dili, framework'ü, versiyonu, dosya adı gibi bilgileri mutlaka ekle.
- **Rol tanımla:** "Kıdemli backend geliştirici gibi davran" gibi net bir rol ver.
- **Çıktı formatını söyle:** "Sadece kod ver", "Madde madde açıkla", "Markdown tablo olarak yaz" gibi.
- **Adım adım iste:** "Önce analiz et, sonra çözümü öner, en sonda kodu yaz" gibi aşamalandır.
- **Örnek ver:** İstediğin stile yakın 1 küçük örnek ekle, model o stili kopyalasın.

Daha detaylı egzersizler için bu klasördeki `PROMPT-LAB.md` dosyasına bak.
