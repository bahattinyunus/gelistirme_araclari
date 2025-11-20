import argparse
import os
from pathlib import Path

# NOT: Bu dosya bir ÖRNEKTİR.
# Gerçek kullanım için Google Drive API yetkilendirme akışının
# eksiksiz uygulanması ve credentials.json dosyasının güvenli
# şekilde yönetilmesi gerekir.


def backup_to_drive(source_dir: Path, folder_name: str) -> None:
    """Belirtilen klasördeki dosyaları Google Drive'a yedeklemek için iskelet fonksiyon.

    Bu fonksiyon şu anda sadece hangi dosyaların yedekleneceğini ekrana yazar.
    Google Drive API entegrasyonu için:
    - google-api-python-client
    - google-auth-httplib2
    - google-auth-oauthlib
    paketleri kullanılmalıdır.
    """

    if not source_dir.exists() or not source_dir.is_dir():
        raise SystemExit(f"Kaynak klasör bulunamadı: {source_dir}")

    print(f"[DRY RUN] '{source_dir}' içindeki dosyalar, Google Drive klasörü '{folder_name}' altına yedeklenecek:")

    for root, _, files in os.walk(source_dir):
        for name in files:
            file_path = Path(root) / name
            print(f" - {file_path}")

    print("\nGerçek Drive yükleme işlemi için Google Drive API kodunu buraya eklemelisin.")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Untitled Notebook Google Drive yedekleme aracı (örnek)")
    parser.add_argument("--source", type=str, required=True, help="Yedeklenecek not klasörünün yolu")
    parser.add_argument("--folder", type=str, required=True, help="Google Drive tarafındaki hedef klasör adı")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    source_dir = Path(args.source).expanduser().resolve()
    backup_to_drive(source_dir, args.folder)


if __name__ == "__main__":
    main()
