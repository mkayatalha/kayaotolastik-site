// Kısa rehberler (/rehber/<slug>/). İlk paragraf tek cümlelik net cevaptır
// (yapay zeka özetlerinde alıntılanabilecek netlikte).

import type { Faq } from './hizmetler';

export type Rehber = {
  slug: string;
  title: string; // H1
  cardText: string;
  minutes: number;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  steps: { t: string; d: string }[];
  sections: { h: string; p?: string[]; table?: { head: string[]; rows: string[][] } }[];
  whenCall: string;
  hizmet: string; // ilgili hizmet slug'ı
  faq: Faq[];
  published: string;
};

export const rehberler: Rehber[] = [
  {
    slug: 'otoyolda-arac-bozuldu',
    title: 'Otoyolda aracım bozuldu, ne yapmalıyım?',
    cardText: 'Dörtlüler, reflektör, bariyerin arkası ve yardım çağırma sırası.',
    minutes: 2,
    metaTitle: 'Otoyolda Araç Bozuldu: Ne Yapmalı? 5 Adımda Güvenlik | Kaya Oto Lastik',
    metaDescription: 'TEM ya da Kuzey Marmara\'da aracınız bozulduysa önce güvenlik: dörtlüler, sağa çekme, reflektör, bariyerin arkası. Sonra doğru yardımı çağırın.',
    answer: 'Otoyolda aracınız bozulursa önce dörtlüleri yakıp en sağa çekin, reflektörü koyun ve yolcularla birlikte bariyerin arkasına geçin; yardımı ancak güvende olduktan sonra çağırın.',
    steps: [
      { t: 'Dörtlüleri yakın, sağa çekin', d: 'Araç hâlâ ilerliyorsa yavaşça en sağ şeride, mümkünse emniyet şeridine ya da bir cep alanına geçin. Direksiyonu sağa kırık bırakın.' },
      { t: 'Reflektör yeleğini giyin', d: 'Araçtan inmeden önce, varsa reflektif yeleği giyin. Trafiğe bakan kapıdan değil, sağ taraftan inin.' },
      { t: 'Reflektörü koyun', d: 'Üçgen reflektörü aracın arkasına, gelen sürücülerin sizi erkenden görebileceği uzaklığa yerleştirin. Otoyolda genellikle en az 150 metre önerilir.' },
      { t: 'Bariyerin arkasına geçin', d: 'Yolcularla birlikte araçtan uzaklaşıp bariyerin arkasında bekleyin. Aracın içinde ya da önünde beklemeyin.' },
      { t: 'Doğru yardımı çağırın', d: 'Yaralı ya da tehlike varsa 112\'yi arayın. Sorun lastik ya da aküyse bizi arayın veya konumunuzu WhatsApp\'tan gönderin.' },
    ],
    sections: [
      {
        h: 'Hangi yardımı çağırmalıyım?',
        table: {
          head: ['Durum', 'Kimi aramalı'],
          rows: [
            ['Kaza, yaralı, yangın, duman', '112 Acil Çağrı'],
            ['Lastik patladı ya da indi', 'Mobil lastikçi (biz)'],
            ['Araç çalışmıyor, akü bitti', 'Akü takviyesi (biz)'],
            ['Motor, şanzıman ya da ciddi arıza', 'Kasko yol yardımı ya da çekici'],
          ],
        },
      },
      {
        h: 'Yapılmaması gerekenler',
        p: [
          'Otoyolda lastik değiştirmeye kendiniz çalışmayın; yanınızdan çok hızlı araçlar geçer. Patlak lastikle uzun mesafe gitmeyin; jant zarar görür ve araç kontrolü zorlaşır. Geri geri gitmeye ya da şerit içinde durmaya çalışmayın.',
        ],
      },
    ],
    whenCall: 'Güvendeyseniz ve sorun lastik ya da aküyse arayın. Konumunuza göre yolun üzerinde ya da en yakın güvenli noktada yanınıza geliriz.',
    hizmet: 'lastik-tamiri',
    faq: [
      { q: 'Otoyolda reflektör kaç metreye konur?', a: 'Gelen sürücülerin sizi erkenden görebileceği uzaklığa; otoyolda genellikle en az 150 metre önerilir. Reflektörü koyarken trafiğe karşı değil, bariyer tarafından yürüyün.' },
      { q: 'Emniyet şeridinde ne kadar bekleyebilirim?', a: 'Emniyet şeridi yalnızca zorunlu durumlar içindir. Araçta değil, bariyerin arkasında bekleyin ve yardımı hemen çağırın.' },
      { q: 'Konumumu nasıl gönderirim?', a: 'Bu sitedeki "Konumumu gönder" düğmesine basın. Telefonunuz izin isterse onaylayın; konumunuz harita linki olarak WhatsApp mesajına eklenir.' },
    ],
    published: '2026-11-03',
  },
  {
    slug: 'aku-mu-bitti-mars-mi',
    title: 'Akü mü bitti, marş mı bozuk?',
    cardText: 'Üç belirtiyle farkı anlayın, doğru yardımı çağırın.',
    minutes: 2,
    metaTitle: 'Akü mü Bitti, Marş mı Bozuk? Belirtiler ve Çözüm | Kaya Oto Lastik',
    metaDescription: 'Araç çalışmıyorsa akü mü bitti, marş motoru mu bozuk? Göstergeler, ses ve farlarla farkı anlayın. Akü bittiyse 7/24 takviye ve değişim.',
    answer: 'Kontağı çevirdiğinizde göstergeler sönük ve marş hiç dönmüyorsa ya da çok yavaş dönüyorsa büyük olasılıkla akü bitmiştir; ışıklar parlak ama araç yalnızca tek bir tık sesi çıkarıyorsa sorun marş motorunda olabilir.',
    steps: [
      { t: 'Göstergelere bakın', d: 'Kontağı açın. Gösterge paneli sönük, titrek ya da hiç yanmıyorsa akü zayıftır.' },
      { t: 'Sesi dinleyin', d: 'Hızlı tık-tık-tık sesi genelde zayıf aküdür. Tek ve güçlü bir tık, marş motorunu düşündürür.' },
      { t: 'Farları yakın', d: 'Farlar sönükse ya da marşa basınca neredeyse sönüyorsa akü bitmiştir.' },
    ],
    sections: [
      {
        h: 'Belirtiye göre olası neden',
        table: {
          head: ['Belirti', 'Olası neden', 'Çözüm'],
          rows: [
            ['Göstergeler sönük, marş dönmüyor', 'Akü bitmiş', 'Akü takviyesi'],
            ['Marş çok yavaş dönüyor', 'Akü zayıf ya da soğuk hava', 'Takviye, gerekirse değişim'],
            ['Hızlı tık-tık sesi', 'Akü zayıf', 'Akü takviyesi'],
            ['Işıklar parlak, tek tık sesi', 'Marş motoru', 'Servis (yerinde onarılmaz)'],
            ['Marş dönüyor ama araç çalışmıyor', 'Yakıt ya da ateşleme', 'Servis (yerinde onarılmaz)'],
            ['Takviyeyle çalışıyor, sonra yine bitiyor', 'Akü ömrünü doldurmuş ya da şarj sorunu', 'Akü değişimi, şarj kontrolü'],
          ],
        },
      },
      {
        h: 'Akü neden biter?',
        p: [
          'En sık nedenler: farın ya da iç lambanın açık kalması, aracın günlerce çalıştırılmaması, soğuk hava ve akünün yaşlanması. Bir akü genellikle 4–5 yıl dayanır; daha eski bir akü kışın ilk soğuklarda sorun çıkarmaya başlar.',
        ],
      },
    ],
    whenCall: 'Belirtiler aküyü gösteriyorsa arayın. Takviye cihazıyla gelir, aracı çalıştırır ve aküyü ölçeriz. Akü ömrünü doldurduysa yenisini yerinde takarız.',
    hizmet: 'aku-takviyesi',
    faq: [
      { q: 'Akü takviyeyle çalışınca sorun çözülmüş olur mu?', a: 'Akü sağlamsa evet; aracı 20–30 dakika çalıştırmanız yeterli olur. Akü yaşlıysa kısa süre sonra yine biter; bu durumda değişim gerekir.' },
      { q: 'Akünün ömrü ne kadardır?', a: 'Kullanıma ve iklime göre değişmekle birlikte genellikle 4–5 yıl.' },
      { q: 'Marş motoru yerinde değiştirilebilir mi?', a: 'Hayır, marş motoru arızası servis işidir. Biz akü ve lastik sorunlarını yerinde çözüyoruz; sorun marş ise bunu size dürüstçe söyleriz.' },
    ],
    published: '2026-11-03',
  },
  {
    slug: 'lastik-patlayinca-ne-yapmali',
    title: 'Lastik patlayınca ne yapmalı?',
    cardText: 'Jantı kurtarmak için durmanız gereken an ve tamir mi değişim mi.',
    minutes: 3,
    metaTitle: 'Lastik Patlayınca Ne Yapmalı? Tamir mi Değişim mi | Kaya Oto Lastik',
    metaDescription: 'Lastik patladığında aracı nasıl durdurmalı, patlak lastikle gidilir mi, lastik tamir edilebilir mi? Kısa ve net cevaplar, 7/24 yerinde lastik yardımı.',
    answer: 'Lastik patlayınca direksiyonu sıkı tutun, ani fren yapmadan yavaşlayın ve ilk güvenli noktada durun; patlak lastikle yola devam etmeyin, çünkü birkaç yüz metre bile jantı ve lastiği kullanılamaz hale getirebilir.',
    steps: [
      { t: 'Direksiyonu sıkı tutun', d: 'Araç patlak tarafa çekecektir. Direksiyonu düz tutun, sert manevra yapmayın.' },
      { t: 'Ani fren yapmayın', d: 'Gazı yavaşça bırakın, aracı kendi kendine yavaşlatın, sonra hafifçe fren yapın.' },
      { t: 'İlk güvenli noktada durun', d: 'Dörtlüleri yakın, sağa çekin. Mümkünse yan yola, cep alanına ya da benzin istasyonuna geçin.' },
      { t: 'Yedeği kontrol edin ya da arayın', d: 'Yedeğiniz, krikonuz ve bijon anahtarınız varsa ve güvenli bir yerdeyseniz takabilirsiniz. Değilse bizi arayın.' },
    ],
    sections: [
      {
        h: 'Lastik tamir edilir mi?',
        table: {
          head: ['Hasar', 'Sonuç'],
          rows: [
            ['Taban kısmında çivi ya da vida deliği', 'Çoğunlukla tamir edilir'],
            ['Sibop (hava subabı) kaçağı', 'Sibop değiştirilir'],
            ['Yanakta kesik, yırtık ya da kabarma', 'Tamir edilmez, değişim gerekir'],
            ['Basıksız gidilerek ezilmiş lastik', 'Tamir edilmez, değişim gerekir'],
          ],
        },
      },
      {
        h: 'Patlak lastikle kaç kilometre gidilir?',
        p: [
          'Normal bir lastikle hiç gidilmemelidir; en fazla, güvenli bir noktaya ulaşmak için birkaç yüz metre çok yavaş ilerlenebilir. Run-flat (patlasa da giden) lastikler üretici talimatına göre sınırlı hızda belirli bir mesafe gidebilir; bunun bilgisi aracın kullanım kılavuzundadır.',
        ],
      },
    ],
    whenCall: 'Yedeğiniz yoksa, takacak durumda değilseniz ya da yol güvenli değilse arayın. Lastiği yerinde tamir eder, yedeği takar ya da yeni veya çıkma lastik getiririz.',
    hizmet: 'lastik-tamiri',
    faq: [
      { q: 'Patlak lastikle gidilir mi?', a: 'Hayır. Birkaç yüz metre bile jantı ve lastiği kullanılamaz hale getirebilir; araç kontrolü de zorlaşır. İlk güvenli noktada durun.' },
      { q: 'Stepne (ince yedek) ile ne kadar gidebilirim?', a: 'İnce yedek lastikler geçicidir; genellikle 80 km/s üzerinde kullanılmamalıdır. Üzerindeki etikette sınır yazar. En kısa sürede lastiğinizi tamir ettirin ya da değiştirin.' },
      { q: 'Lastiğe çivi battı ama hava kaçırmıyor, ne yapmalıyım?', a: 'Çiviyi çıkarmayın; çıkarırsanız lastik hızla inebilir. En kısa sürede tamir ettirin.' },
    ],
    published: '2026-11-03',
  },
];

export const rehberBySlug = (slug: string) => rehberler.find((r) => r.slug === slug)!;
