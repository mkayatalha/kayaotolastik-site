// İşletme bilgileri tek yerde. Google İşletme Profili, Yandex, Apple, Bing ve dizinlerle
// harfi harfine aynı tutun (NAP tutarlılığı).

export const business = {
  name: 'Kaya Oto Lastik Mobil Yol Yardım',
  shortName: 'Kaya Oto Lastik',
  // Resmi ünvan yalnızca altbilgi ve yasal metinlerde görünür.
  legalName: 'Tuzla Oto Lastik 7.24 Mobil Yardım',
  phone: '0552 242 41 60',
  phoneE164: '+905522424160',
  // wa.me için 90 ile başlayan numara.
  whatsapp: '905522424160',
  base: 'Tuzla',
  city: 'İstanbul',
  // Hizmet bölgesi işletmesi: açık adres yayımlanmaz.
  email: '',
  instagram: '',
  googleProfile: '', // İşletme Profili açılınca "https://maps.app.goo.gl/..." linki buraya
  // İşletme Profili > "Yorum iste" düğmesinin verdiği link ("https://g.page/r/.../review").
  // Doluysa sitede "Google'da değerlendirin" bölümü ve kayaotolastik724.com/yorum/ kısa linki çalışır.
  googleReviewUrl: '',
  // Google'daki gerçek puan ve yorum sayısı. Elle güncellenir; 0 bırakılırsa puan gösterilmez.
  // Uydurma ya da tahmini rakam yazılmaz.
  googleRating: 0,
  googleReviewCount: 0,
};

// Ölçüm kodları. Boş bırakılan servis siteye hiç yüklenmez.
export const analytics = {
  ga4Id: '', // ör. 'G-XXXXXXXXXX'. Doluysa çerez onay kutusu da açılır.
  cloudflareToken: '', // Cloudflare Web Analytics (çerezsiz)
};

// Onaylanan varış süreleri (Tuzla üssünden, ortalama). "Her yere 30 dk" yazılmaz.
export type Band = { id: string; label: string; note: string };
export const bands: Band[] = [
  { id: 'yakin', label: '20–30 dk', note: 'Tuzla üssüne yakın' },
  { id: 'orta', label: '30–40 dk', note: 'Orta mesafe' },
  { id: 'uzak', label: '45–60 dk', note: 'Uzak uçlar' },
];

// Kendi sayfası olmayan ama hizmet verilen ilçeler (2. aşamada sayfa açılacak).
export const otherAreas = ['Ümraniye', 'Sancaktepe', 'Sultanbeyli', 'Çekmeköy', 'Beykoz', 'Darıca', 'Dilovası', 'Derince'];

export const nav = [
  { href: '/#hizmetler', label: 'Hizmetler' },
  { href: '/bolgeler/', label: 'Bölgeler' },
  { href: '/#rehberler', label: 'Rehber' },
  { href: '/hakkimizda/', label: 'Hakkımızda' },
];
