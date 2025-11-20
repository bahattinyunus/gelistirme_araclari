# Pytest

Bu klasör, Python projelerinde test yazmak için kullanılan **pytest** aracıyla ilgili basit örnekler içerir.

## Kurulum
```bash
pip install pytest
```

## Basit Test Örneği
```python
# hesap.py
def topla(a, b):
    return a + b

# test_hesap.py
from hesap import topla

def test_topla():
    assert topla(1, 2) == 3
```

Çalıştırma:
```bash
pytest
```
