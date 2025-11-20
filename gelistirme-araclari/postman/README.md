# Postman

Bu klasör, API geliştirme ve test süreçlerinde kullanılan **Postman** aracına dair notları içerir.

## Kullanım Senaryoları
- REST API endpointlerini test etmek
- Collection oluşturmak
- Ortam değişkenleri (environment variables) ile farklı ortamları yönetmek

## Örnek İstek
- Method: `POST`
- URL: `http://localhost:3000/api/todos`
- Headers: `Content-Type: application/json`
- Body (JSON):
```json
{
  "title": "Yeni görev"
}
```

Bu istek, ornek-proje içindeki Todo API ile kullanılabilir.
