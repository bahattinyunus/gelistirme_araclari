# Jest

Bu klasör, JavaScript projelerinde test yazmak için kullanılan **Jest** test aracına dair örnekleri içerir.

## Kurulum
```bash
npm install --save-dev jest
```

`package.json` içine script ekleyin:
```json
"scripts": {
  "test": "jest"
}
```

## Basit Test Örneği
```javascript
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Çalıştırma: `npm test`
