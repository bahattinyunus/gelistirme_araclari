# JavaScript Kod Örnekleri

Bu klasör, JavaScript ile yazılım geliştirme araçlarının kullanımını gösteren örnekler içerir.

## 📁 Dosyalar

- `todo-app.js` - ES6+ class yapısı ile Todo uygulaması
- `test-todo-app.js` - Jest ile test örnekleri
- `package.json` - npm paket yönetimi

## 🚀 Kullanım

### 1. Bağımlılıkları Yükleme

```bash
npm install
```

### 2. Testleri Çalıştırma

```bash
# Tüm testleri çalıştır
npm test

# Watch modunda
npm run test:watch

# Coverage ile
npm run test:coverage
```

### 3. Browser'da Kullanım

```html
<!DOCTYPE html>
<html>
<head>
    <title>Todo App</title>
</head>
<body>
    <script src="todo-app.js"></script>
    <script>
        const app = new TodoApp();
        app.addTodo('İlk görev');
        console.log(app.getTodos());
    </script>
</body>
</html>
```

## 🛠️ Kullanılan Araçlar

- **npm** - Paket yönetimi
- **Jest** - Test framework
- **ESLint** - Kod analizi
- **Git** - Sürüm kontrolü

## 📝 Git Kullanımı

```bash
git add kod-ornekleri/javascript/
git commit -m "JavaScript örnekleri eklendi"
git push origin main
```

## 💡 Öğrenilen Konular

1. ES6+ özellikleri (classes, arrow functions)
2. Jest ile test yazma
3. npm ile paket yönetimi
4. LocalStorage kullanımı
5. Module pattern

