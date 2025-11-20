# Maven

Bu klasör, Java projelerinde yaygın kullanılan build ve bağımlılık yönetim aracı **Apache Maven** hakkında kısa notlar içerir.

## Temel Kavramlar
- `pom.xml`
- Dependency
- Plugin
- Lifecycle (compile, test, package, install)

## Faydalı Komutlar
```bash
mvn compile
mvn test
mvn package
mvn clean install
```

## Örnek `pom.xml` Parçası
```xml
<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
  </dependency>
</dependencies>
```
