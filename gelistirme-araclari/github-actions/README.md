# GitHub Actions

Bu klasör, projelerde **CI/CD** süreçlerini otomatikleştirmek için kullanılan **GitHub Actions** hakkında örnekler içerir.

## Temel Kavramlar
- Workflow
- Job
- Step
- Trigger (on: push, pull_request, schedule)

## Basit Node.js CI Örneği
```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npm test
```

Bu dosya `.github/workflows/ci.yml` içine yerleştirilerek kullanılabilir.
