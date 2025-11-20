# GitLab CI/CD

Bu klasör, **GitLab CI/CD** aracı ile pipeline oluşturma konusunda kısa bir özet içerir.

## Temel Kavramlar
- `.gitlab-ci.yml`
- Pipeline
- Job
- Stage (build, test, deploy)

## Basit Node.js Pipeline Örneği
```yaml
stages:
  - test

test_job:
  stage: test
  image: node:18
  script:
    - npm install
    - npm test
```

Bu dosya depo köküne `.gitlab-ci.yml` olarak eklenir.
