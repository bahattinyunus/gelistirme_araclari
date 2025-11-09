"""
Python Test Örneği - pytest kullanımı
Test çalıştırmak için: pytest test_hesap_makinesi.py
"""

import pytest
from hesap_makinesi import topla, cikar, carp, bol


class TestHesapMakinesi:
    """Hesap makinesi test sınıfı."""
    
    def test_topla(self):
        """Toplama işlemi testi."""
        assert topla(5, 3) == 8
        assert topla(-1, 1) == 0
        assert topla(0, 0) == 0
    
    def test_cikar(self):
        """Çıkarma işlemi testi."""
        assert cikar(10, 3) == 7
        assert cikar(5, 5) == 0
        assert cikar(0, 5) == -5
    
    def test_carp(self):
        """Çarpma işlemi testi."""
        assert carp(5, 3) == 15
        assert carp(-2, 3) == -6
        assert carp(0, 100) == 0
    
    def test_bol(self):
        """Bölme işlemi testi."""
        assert bol(10, 2) == 5
        assert bol(9, 3) == 3
        assert bol(1, 2) == 0.5
    
    def test_bol_sifira_bolme_hatasi(self):
        """Sıfıra bölme hatası testi."""
        with pytest.raises(ValueError, match="Sıfıra bölme hatası"):
            bol(10, 0)


# Parametrik test örneği
@pytest.mark.parametrize("a,b,beklenen", [
    (2, 3, 5),
    (10, 20, 30),
    (-5, 5, 0),
])
def test_topla_parametrik(a, b, beklenen):
    """Parametrik toplama testi."""
    assert topla(a, b) == beklenen

