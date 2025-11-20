# Git

Bu klasör, yazılım geliştirme sürecinde sürüm kontrolü için kullanılan **Git** aracı ile ilgili temel notları ve komut örneklerini içerir.

## Temel Kavramlar
- Depo (repository)
- Commit
- Branch
- Merge
- Remote (origin)

## Sık Kullanılan Komutlar
- `git init`
- `git status`
- `git add .`
- `git commit -m "mesaj"`
- `git log --oneline --graph`
- `git branch` / `git checkout -b feature-x`
- `git merge feature-x`
- `git push origin main`
- `git pull origin main`

## Örnek Akış
1. Yeni repo oluştur
2. Değişiklik yap ve `git status` ile kontrol et
3. Dosyaları stage et: `git add .`
4. Commit: `git commit -m "ilk commit"`
5. Uzak repoya gönder: `git push origin main`
