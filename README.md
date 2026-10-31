# Fastline Proxy Exec - Firebase Setup

Bu ZIP dosyasının içindeki klasörleri GitHub deponuza yükleyerek `https://fastline-537f0.firebaseapp.com/exec?url=` proxy yönlendiricinizi aktif edebilirsiniz.

## Dosya Yapısı:
- `functions/index.js` -> URL yönlendirmesini yapan Firebase Cloud Function kodu
- `functions/package.json` -> Bağımlılıklar
- `firebase.json` -> Hosting yönlendirme ayarları (`/exec` -> `exec` fonksiyonu)
- `.github/workflows/deploy.yml` -> Otomatik GitHub Actions canlıya alma (deploy) ayarı
