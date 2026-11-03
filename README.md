# kayaotolastik-site

Kaya Oto Lastik Mobil Yol Yardım için statik web sitesi (https://kayaotolastik724.com).
Astro ile üretilir, Cloudflare Pages'te ücretsiz yayınlanır. Sayfalarda neredeyse hiç JavaScript yoktur;
yalnızca "Konumumu gönder" düğmesi ve (açılırsa) ölçüm/çerez onayı için küçük bir satır içi betik çalışır.

## İçeriği değiştirmek
Tüm metinler `src/data/` altında, sayfa şablonları `src/pages/` altında:

| Dosya | İçerik |
|---|---|
| `src/data/site.ts` | İşletme adı, telefon, WhatsApp, varış süresi bantları, ölçüm kodları |
| `src/data/hizmetler.ts` | 5 hizmet sayfası (`/aku-takviyesi/` vb.) |
| `src/data/bolgeler.ts` | 11 ilçe sayfası (`/bolgeler/tuzla/` vb.) |
| `src/data/yollar.ts` | 3 yol sayfası (`/yollar/tem-otoyolu/` vb.) |
| `src/data/rehber.ts` | 3 rehber (`/rehber/...`) |

Kurallar: sitede fiyat rakamı yazılmaz; "her yere 30 dk" yazılmaz (bölgeye göre süre); emniyet şeridinde iş
yapılacağı sözü verilmez; çekici, yakıt, kapı açma hizmeti yoktur.

### Fotoğraf eklemek
Fotoğraflar gelene kadar kesik çizgili yer tutucular görünür (`src/components/Foto.astro`).
Fotoğrafı `public/foto/` altına koyup ilgili `<Foto>` bileşenine `src="/foto/dosya.webp"` ve `alt="..."` verin.

### Ölçüm
`src/data/site.ts` içinde `analytics.ga4Id` doldurulursa Google Analytics ve çerez onay kutusu açılır;
`cloudflareToken` doldurulursa çerezsiz Cloudflare Web Analytics yüklenir. Telefon ve WhatsApp tıklamaları
`iletisim_tiklama` olayı olarak gönderilir.

## Yerelde çalıştırma
    npm install
    npm run dev      # http://localhost:4321
    npm run build    # çıktı: dist/

## Yayın (Cloudflare Pages)
1. Cloudflare paneli > Workers & Pages > Create > Pages > Connect to Git, bu depoyu seçin.
2. Framework preset: Astro. Build command: `npm run build`, output directory: `dist`.
3. Custom domains: `kayaotolastik724.com` ve `www.kayaotolastik724.com`.
4. www → çıplak alan adı yönlendirmesi için Cloudflare > Rules > Redirect Rules kullanın.

Her `git push` sonrası site otomatik güncellenir.
