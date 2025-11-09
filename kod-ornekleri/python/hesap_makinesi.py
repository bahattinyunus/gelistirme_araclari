"""
Python Örnek: Basit Hesap Makinesi
Yazılım Geliştirme Araçları Eğitimi - Python Örneği

Bu örnek şunları gösterir:
- Python fonksiyon tanımlama
- Modül yapısı
- Test yazma (pytest ile)
- Docstring kullanımı
"""

def topla(a, b):
    """
    İki sayıyı toplar.
    
    Args:
        a (float): İlk sayı
        b (float): İkinci sayı
    
    Returns:
        float: İki sayının toplamı
    
    Example:
        >>> topla(5, 3)
        8
    """
    return a + b


def cikar(a, b):
    """İki sayıyı çıkarır."""
    return a - b


def carp(a, b):
    """İki sayıyı çarpar."""
    return a * b


def bol(a, b):
    """
    İki sayıyı böler.
    
    Raises:
        ValueError: b sıfır ise hata fırlatır
    """
    if b == 0:
        raise ValueError("Sıfıra bölme hatası!")
    return a / b


def main():
    """Ana program fonksiyonu."""
    print("=== Python Hesap Makinesi ===")
    print("1. Toplama")
    print("2. Çıkarma")
    print("3. Çarpma")
    print("4. Bölme")
    
    secim = input("Seçiminiz (1-4): ")
    sayi1 = float(input("İlk sayı: "))
    sayi2 = float(input("İkinci sayı: "))
    
    if secim == '1':
        sonuc = topla(sayi1, sayi2)
    elif secim == '2':
        sonuc = cikar(sayi1, sayi2)
    elif secim == '3':
        sonuc = carp(sayi1, sayi2)
    elif secim == '4':
        sonuc = bol(sayi1, sayi2)
    else:
        print("Geçersiz seçim!")
        return
    
    print(f"Sonuç: {sonuc}")


if __name__ == "__main__":
    main()

