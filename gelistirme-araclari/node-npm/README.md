# Node.js & npm

Bu klasör, **Node.js** ve paket yöneticisi **npm** kullanımına dair temel notları içerir.

## Başlangıç
- Versiyon kontrolü: `node -v`, `npm -v`
- Proje başlatma: `npm init -y`
- Paket kurma: `npm install express`

## `package.json` Temel Alanlar
- `name`
- `version`
- `scripts`
- `dependencies`
- `devDependencies`

## Örnek Scripts Bölümü
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "jest"
}
```
