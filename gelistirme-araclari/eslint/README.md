# ESLint

Bu klasör, JavaScript/TypeScript projelerinde kod kalitesini artırmak için kullanılan **ESLint** aracıyla ilgili örnekleri içerir.

## Kurulum (JavaScript Projesi)
```bash
npm install --save-dev eslint
npx eslint --init
```

## Basit `.eslintrc.json` Örneği
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}
```

Çalıştırma:
```bash
npx eslint .
```
