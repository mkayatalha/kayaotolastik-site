// Yol sayfaları (/yollar/<slug>/). Emniyet şeridinde iş yapılacağı sözü VERİLMEZ;
// "yolun üzerinde ya da en yakın güvenli noktada" dili kullanılır (karar: 3 Kasım 2026).

import type { Faq } from './hizmetler';

export type Yol = {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  body: string[];
  kesimler: { b: string; s: string; band: 'yakin' | 'orta' | 'uzak' }[];
  bolgeler: string[];
  photo: string;
  photoSrc?: string;
  faq: Faq[];
};

export const yollar: Yol[] = [
  {
    slug: 'tem-otoyolu',
    name: 'TEM Otoyolu',
    short: 'Anadolu Otoyolu',
    metaTitle: 'TEM Otoyolu Yol Yardım 7/24 · Lastik ve Akü | Kaya Oto Lastik',
    metaDescription: 'TEM (Anadolu Otoyolu) üzerinde lastiğiniz patladı ya da aküniz bitti mi? Kozyatağı\'ndan İzmit\'e kadar 7/24 mobil lastik ve akü yardımı.',
    h1: "TEM Otoyolu'nda 7/24 lastik ve akü yardımı",
    lead: 'TEM\'in (Anadolu Otoyolu) Ataşehir\'den İzmit\'e kadar olan bölümünde lastiğiniz patladıysa ya da aracınız çalışmıyorsa, yolun üzerinde ya da en yakın güvenli noktada yanınızdayız.',
    body: [
      'Otoyolda yolda kalmak şehir içinden daha tehlikelidir. Önce kendinizi güvene alın: dörtlüleri yakın, reflektörü koyun, yolcularla birlikte bariyerin arkasına geçin. Sonra arayın ya da konumunuzu WhatsApp\'tan gönderin.',
      'Kasko ya da otoyol işletmesinin yol yardımını da arayabilirsiniz; bunlar çoğunlukla aracı çekiciyle götürmeye odaklıdır ve sıra beklenebilir. Sorun lastik ya da aküyse biz yerinde çözüp sizi yolunuza devam ettiririz.',
    ],
    kesimler: [
      { b: 'Kurtköy – Orhanlı – Şekerpınar', s: 'Üssümüze en yakın bölüm.', band: 'yakin' },
      { b: 'Gebze çıkışları', s: 'Organize sanayi ve Osmangazi bağlantısı yönü.', band: 'yakin' },
      { b: 'Ataşehir – Kozyatağı bağlantısı', s: 'Şehir içine giriş; trafik saatine göre süre değişir.', band: 'uzak' },
      { b: 'Dilovası – Körfez – İzmit', s: 'Kocaeli kesimi.', band: 'uzak' },
    ],
    bolgeler: ['atasehir', 'pendik', 'tuzla', 'cayirova', 'gebze', 'korfez', 'izmit'],
    photo: 'TEM çevresinde güvenli bir noktada çekilmiş iş fotoğrafı',
    faq: [
      { q: "TEM'de lastiğim patladı, ne yapmalıyım?", a: 'Dörtlüleri yakın, mümkünse en sağa çekin, reflektörü koyun ve araçtan inip bariyerin arkasına geçin. Sonra bizi arayın ya da konum gönderin.' },
      { q: "TEM'de yanıma gelebilir misiniz?", a: 'Konumunuza göre yolun üzerinde ya da en yakın güvenli noktada yanınıza geliriz. Aradığınızda nerede buluşacağımızı birlikte belirleriz.' },
      { q: 'Otoyolun kendi yol yardımı varken neden sizi arayayım?', a: 'İkisini de arayabilirsiniz. Sorun lastik ya da aküyse yerinde çözer, aracınızın çekilmesine gerek bırakmayız.' },
    ],
  },
  {
    slug: 'd-100',
    name: 'D-100 (E-5)',
    short: 'E-5 Karayolu',
    metaTitle: 'E-5 (D-100) Lastikçi ve Yol Yardım 7/24 | Kaya Oto Lastik',
    metaDescription: 'E-5 (D-100) üzerinde Kadıköy\'den İzmit\'e kadar 7/24 seyyar lastikçi ve akü takviyesi. Lastiğiniz patladıysa ya da aracınız çalışmıyorsa arayın.',
    h1: "E-5'te (D-100) 7/24 lastikçi ve akü yardımı",
    lead: 'Herkesin E-5 dediği D-100, hizmet bölgemizin omurgası. Kadıköy\'den Tuzla\'ya, Gebze\'den İzmit\'e kadar bu yol üzerinde yolda kaldıysanız yanınızdayız.',
    body: [
      'D-100 şehir içinden geçtiği için yan yollar, cep alanları ve benzin istasyonları çoktur. Lastiğiniz patladıysa mümkünse ana yoldan çıkıp bu noktalardan birine geçin; hem siz güvende olursunuz hem de iş daha hızlı biter.',
      'Üssümüz Tuzla\'da, D-100\'ün tam ortasında. Bu yüzden Pendik, Tuzla, Çayırova ve Gebze kesimine en hızlı ulaştığımız yol burası.',
    ],
    kesimler: [
      { b: 'Pendik – Tuzla – Çayırova – Gebze', s: 'Üssümüzün bulunduğu kesim.', band: 'yakin' },
      { b: 'Kartal – Maltepe', s: 'Yoğun şehir içi bölüm.', band: 'orta' },
      { b: 'Kozyatağı – Göztepe – Ünalan', s: 'Kadıköy ve Üsküdar kesimi.', band: 'uzak' },
      { b: 'Dilovası – Körfez – İzmit', s: 'Kocaeli kesimi.', band: 'uzak' },
    ],
    bolgeler: ['uskudar', 'kadikoy', 'maltepe', 'kartal', 'pendik', 'tuzla', 'cayirova', 'gebze', 'korfez', 'izmit'],
    photo: 'D-100 yan yolunda ya da cep alanında çekilmiş iş fotoğrafı',
    faq: [
      { q: 'E-5 ile D-100 aynı yol mu?', a: 'Evet. Resmi adı D-100\'dür, İstanbul\'da çoğunlukla E-5 denir.' },
      { q: "E-5'te lastiğim patladı, nereye çekmeliyim?", a: 'Mümkünse yan yola, cep alanına ya da bir benzin istasyonuna geçin. Bulunduğunuz yeri WhatsApp\'tan konum olarak gönderin.' },
      { q: "E-5'te en hızlı hangi bölgeye gelirsiniz?", a: 'Pendik, Tuzla, Çayırova ve Gebze kesimine genellikle 20–30 dakikada geliriz.' },
    ],
  },
  {
    slug: 'kuzey-marmara-otoyolu',
    name: 'Kuzey Marmara Otoyolu',
    short: 'Osmangazi bağlantısı dahil',
    metaTitle: 'Kuzey Marmara Otoyolu Yol Yardım · Lastik ve Akü 7/24 | Kaya Oto Lastik',
    metaDescription: 'Kuzey Marmara Otoyolu\'nun Kurtköy–İzmit kesiminde ve Osmangazi Köprüsü bağlantısında 7/24 mobil lastik ve akü yardımı.',
    h1: "Kuzey Marmara Otoyolu'nda lastik ve akü yardımı",
    lead: 'Kuzey Marmara Otoyolu\'nun Anadolu Yakası\'ndaki Kurtköy bölümünden Kocaeli kesimine kadar ve Osmangazi Köprüsü\'ne bağlanan yolda lastik ve akü sorununuzda yanınızdayız.',
    body: [
      'Kuzey Marmara Otoyolu yerleşim yerlerinden uzaktan geçer; yakında benzin istasyonu ya da cep alanı bulmak zor olabilir. Bu yüzden ilk iş güvenliğinizi sağlayın, sonra konumunuzu gönderin. Konum bilgisi, nerede olduğunuzu tarif etmekten çok daha hızlıdır.',
      'Bu yolun bazı kesimleri bize uzak olabilir. Aradığınızda konumunuza göre ne kadar sürede gelebileceğimizi açıkça söyleriz.',
    ],
    kesimler: [
      { b: 'Kurtköy bağlantısı', s: 'Pendik ve Sabiha Gökçen çevresi.', band: 'yakin' },
      { b: 'Gebze ve Osmangazi Köprüsü bağlantısı', s: 'Dilovası ve Gebze çevresi.', band: 'orta' },
      { b: 'Kocaeli kesimi (İzmit kuzeyi)', s: 'Mesafeye göre süre aradığınızda söylenir.', band: 'uzak' },
    ],
    bolgeler: ['pendik', 'gebze', 'korfez', 'izmit'],
    photo: 'Kuzey Marmara Otoyolu çevresinde güvenli bir noktada iş fotoğrafı',
    faq: [
      { q: 'Kuzey Marmara Otoyolu\'nda her yere geliyor musunuz?', a: 'Kurtköy\'den İzmit\'e kadar olan kesimde geliyoruz. Konumunuza göre süreyi aradığınızda söyleriz.' },
      { q: 'Osmangazi Köprüsü yolunda lastiğim patladı, gelir misiniz?', a: 'Evet, köprüye bağlanan otoyolun Gebze–Dilovası bölümünde yanınıza geliriz. Güvenli bir noktaya geçip konum gönderin.' },
      { q: 'Nerede olduğumu bilmiyorum, nasıl tarif edeyim?', a: 'Sitedeki "Konumumu gönder" düğmesine basın; konumunuz harita linki olarak WhatsApp\'a eklenir.' },
    ],
  },
];

export const yolBySlug = (slug: string) => yollar.find((y) => y.slug === slug)!;
