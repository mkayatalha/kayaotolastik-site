// Hizmet sayfaları (kökte: /aku-takviyesi/ vb.). Fiyat rakamı yazılmaz.

export type Faq = { q: string; a: string };

export type Hizmet = {
  slug: string;
  name: string;
  card: string; // ana sayfa kartındaki kısa açıklama
  problem: string; // "Sorununuzu seçin" kartındaki başlık
  icon: 'lastik' | 'aku-takviye' | 'aku' | 'yeni-lastik' | 'cikma';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  when: string[]; // hangi durumda gerekir
  steps: { t: string; d: string }[]; // yerinde nasıl yapılır
  duration: string; // ne kadar sürer
  limits: string; // ne zaman yerinde çözülemez
  extra?: { h: string; p: string[] };
  photo: { t: string; d: string; src?: string }; // src: ör. /foto/lastik.webp — boşsa bölüm görünmez
  faq: Faq[];
  guide?: string; // ilgili rehber slug'ı
};

export const hizmetler: Hizmet[] = [
  {
    slug: 'lastik-tamiri',
    name: 'Lastik tamiri',
    card: 'Çivi, vida ve sibop kaçağı yerinde tamir; yedek lastik takma.',
    problem: 'Lastik patladı',
    icon: 'lastik',
    metaTitle: 'Seyyar Lastikçi 7/24 · Yerinde Lastik Tamiri | Kaya Oto Lastik',
    metaDescription: 'Lastiğiniz patladı ya da indi mi? Seyyar lastikçi ekibimiz Anadolu Yakası, Gebze ve İzmit\'te 7/24 yanınıza gelir; yerinde tamir eder ya da yedeği takar.',
    h1: 'Seyyar lastikçi: yerinde lastik tamiri, 7/24',
    lead: 'Lastiğiniz yolda indiyse ya da patladıysa aracı hareket ettirmeyin. Servis aracımızla bulunduğunuz yere geliyor, lastiği yerinde tamir ediyor ya da yedeğinizi takıyoruz. Gece, hafta sonu ve bayramda da aynı numaradan ulaşırsınız.',
    when: [
      'Lastik yavaş yavaş iniyor, sabahları basık buluyorsunuz',
      'Lastiğe çivi ya da vida batmış',
      'Yolda lastik patladı, yedeği takacak alet ya da güç yok',
      'Yedek lastik var ama bijon sökülmüyor',
      'Sibop (hava subabı) kaçırıyor',
    ],
    steps: [
      { t: 'Konum ve lastik bilgisi', d: 'Arayın ya da WhatsApp\'tan konum gönderin. Lastiğin yanağındaki ölçüyü (ör. 205/55 R16) biliyorsanız söyleyin.' },
      { t: 'Kontrol', d: 'Usta lastiği söker, hasarın yerini ve büyüklüğünü kontrol eder. Tamir edilebilir mi, size dürüstçe söyler.' },
      { t: 'Tamir ya da değişim', d: 'Tamir edilebiliyorsa yerinde onarılır ve doğru basınçla şişirilir. Edilemiyorsa yedeğiniz takılır ya da yeni veya çıkma lastik önerilir.' },
    ],
    duration: 'Varıştan sonra tek lastikte tamir ya da yedek takma genelde 15–30 dakika sürer.',
    limits: 'Yanaktaki (yan yüzdeki) kesik ve yırtıklar, uzun süre basıksız gidildiği için ezilmiş lastikler ve büyük patlaklar güvenle tamir edilemez. Bu durumda lastiği değiştirmeniz gerekir; yeni ya da çıkma lastiği aynı gelişte getirebiliriz.',
    photo: { t: 'Lastik tamiri', d: 'Gece, otoparkta yerinde lastik işi', src: '/foto/lastik-yerinde.webp' },
    faq: [
      { q: 'Patlak lastik her zaman tamir edilebilir mi?', a: 'Hayır. Taban kısmındaki çivi ve vida delikleri çoğunlukla tamir edilir. Yanaktaki kesikler ve basıksız gidilerek ezilmiş lastikler güvenli değildir; bunlarda değişim öneririz.' },
      { q: 'Yedek lastiğim yok, ne olacak?', a: 'Lastiğiniz tamir edilebiliyorsa yerinde onarırız. Edilemiyorsa aracınızın ölçüsünde yeni ya da çıkma lastik getirebiliriz. Ölçüyü aradığınızda sorarız.' },
      { q: 'Kilitli bijonum var, anahtarı kayıp. Yine de gelir misiniz?', a: 'Bunu aradığınızda mutlaka söyleyin. Aracınıza göre yerinde açılıp açılamayacağını baştan söyleriz; boşuna beklemezsiniz.' },
      { q: 'Lastik tamirinin fiyatı ne kadar?', a: 'Fiyat lastiğin durumuna ve bulunduğunuz yere göre değişir. Aradığınızda net fiyatı telefonda söyleriz; gelince sürpriz ücret çıkmaz.' },
    ],
    guide: 'lastik-patlayinca-ne-yapmali',
  },
  {
    slug: 'aku-takviyesi',
    name: 'Akü takviyesi',
    card: 'Araç marş basmıyorsa takviye cihazıyla yerinde çalıştırma.',
    problem: 'Araç çalışmıyor',
    icon: 'aku-takviye',
    metaTitle: 'Akü Takviyesi 7/24 · Marş Basmayan Araca Yerinde Destek | Kaya Oto Lastik',
    metaDescription: 'Aküsü biten araca 7/24 akü takviyesi. Anadolu Yakası, Gebze ve İzmit\'te takviye cihazıyla gelip aracınızı yerinde çalıştırıyoruz. Hemen arayın.',
    h1: 'Akü takviyesi: marş basmayan aracınıza 7/24 destek',
    lead: 'Kontağı çevirdiniz, marş basmıyor ya da sadece tık sesi geliyor mu? Akü takviyesi için takviye cihazıyla geliyor, aracınızı yerinde çalıştırıyoruz. Gerekirse akünüzü ölçüp değişim gerekip gerekmediğini de söylüyoruz.',
    when: [
      'Farlar açık ya da kapı aralık kaldı, sabah araç çalışmadı',
      'Kontakta göstergeler sönük, marş hiç dönmüyor',
      'Marş çok yavaş dönüyor, araç zorlanıyor',
      'Soğuk havada uzun süre çalıştırılmayan araç',
      'Otoparkta, sitede ya da iş yerinde kalan araç',
    ],
    steps: [
      { t: 'Arayın ya da konum atın', d: 'Aracın markasını ve neler olduğunu kısaca anlatın: ışıklar yanıyor mu, tık sesi var mı?' },
      { t: 'Takviye', d: 'Takviye cihazı aküye doğru kutupla bağlanır, araç çalıştırılır. Başka bir araca ya da kabloya ihtiyacınız olmaz.' },
      { t: 'Kontrol', d: 'Araç çalışınca akü ve şarj değeri ölçülür. Akü bitmek üzereyse size söylenir; isterseniz yeni akü aynı gelişte takılır.' },
    ],
    duration: 'Varıştan sonra takviye ve ölçüm genelde 10–15 dakika sürer.',
    limits: 'Takviyeye rağmen araç çalışmıyorsa sorun akü değil marş motoru, şarj dinamosu ya da yakıt sistemi olabilir. Bunlar yol kenarında onarılmaz; size dürüstçe söyler, aracın bir servise götürülmesini öneririz. Çekici hizmetimiz yoktur.',
    extra: {
      h: 'Takviyeden sonra ne yapmalı?',
      p: [
        'Takviyeyle çalışan aracı hemen kapatmayın. Akünün bir miktar dolması için 20–30 dakika kadar sürmeniz ya da çalışır halde bırakmanız iyi olur.',
        'Akü yaşlıysa (genelde 4–5 yıl) ya da kısa sürede tekrar biterse takviye geçici bir çözümdür. Bu durumda yerinde akü değişimi daha güvenli olur.',
      ],
    },
    photo: { t: 'Akü takviyesi', d: 'Kaput açık, takviye cihazı bağlı' },
    faq: [
      { q: 'Akü takviyesi aküye zarar verir mi?', a: 'Doğru kutupla ve uygun cihazla yapıldığında zarar vermez. Kendi takviye cihazımızla geliyoruz; başka bir aracın aküsüne bağlanmanıza gerek kalmaz.' },
      { q: 'Otomatik vites ya da hibrit araçlara takviye yapıyor musunuz?', a: 'Otomatik vitesli araçlara evet. Hibrit ve elektrikli araçlarda durum modele göre değişir; aradığınızda aracınızı söyleyin, yapılabilir mi telefonda net söyleriz.' },
      { q: 'Kapalı otoparktayım, gelebilir misiniz?', a: 'Evet. Otopark girişinin yüksekliğini ve kat bilgisini söylerseniz aracın yanına kadar geliriz.' },
      { q: 'Takviyenin fiyatı nedir?', a: 'Bulunduğunuz yere göre değişir. Aradığınızda fiyatı baştan söyleriz.' },
    ],
    guide: 'aku-mu-bitti-mars-mi',
  },
  {
    slug: 'aku-degisimi',
    name: 'Akü değişimi',
    card: 'Aracınıza uygun yeni akü getirilir, yerinde takılır.',
    problem: 'Akü öldü',
    icon: 'aku',
    metaTitle: 'Yerinde Akü Değişimi 7/24 · Nöbetçi Akücü | Kaya Oto Lastik',
    metaDescription: 'Aküsü ölen araca yerinde akü değişimi. Aracınıza uygun yeni aküyü getirip takıyoruz; Anadolu Yakası, Gebze ve İzmit\'te 7/24 nöbetçi akücü.',
    h1: 'Yerinde akü değişimi: nöbetçi akücü kapınızda',
    lead: 'Akünüz tamamen bittiyse ya da takviyeyle çalışıp tekrar ölüyorsa, akü değişimi için servise gitmenize gerek yok. Aracınıza uygun aküyü getiriyor, eski aküyü söküp yenisini yerinde takıyoruz.',
    when: [
      'Takviyeyle çalışan araç bir süre sonra yine çalışmıyor',
      'Akü 4–5 yaşını geçti, kışın her sabah zorlanıyor',
      'Akünün kutup başlarında beyaz pas ya da şişme var',
      'Akü göstergesi uyarı veriyor',
    ],
    steps: [
      { t: 'Akünüzü öğrenelim', d: 'Telefonda aracın marka, model ve yılını sorarız. Mümkünse mevcut akünün üstündeki etiketin fotoğrafını WhatsApp\'tan atın.' },
      { t: 'Uygun aküyle geliş', d: 'Aracınıza uygun amper ve ölçüdeki aküyü yanımıza alıp yola çıkarız.' },
      { t: 'Söküm, takma ve kontrol', d: 'Eski akü sökülür, yenisi takılır, şarj değeri ölçülür. Eski akünüzü biz alırız.' },
    ],
    duration: 'Varıştan sonra çoğu araçta akü değişimi 15–25 dakika sürer.',
    limits: 'Aküsü bagajda ya da koltuk altında olan bazı araçlarda işlem uzayabilir. Start-stop sistemli araçlara uygun (AGM/EFB) akü gerekir; bunu telefonda konuşur, uygun aküyle geliriz.',
    photo: { t: 'Akü değişimi', d: 'Yeni akü takılırken' },
    faq: [
      { q: 'Hangi marka akü takıyorsunuz?', a: 'Aracınıza ve bütçenize uygun seçenekleri telefonda söyleriz. Marka ve garanti bilgisini akü takılmadan önce net olarak öğrenirsiniz.' },
      { q: 'Eski aküm ne olacak?', a: 'Eski aküyü sökerek biz alırız. Atık akü çevreye zararlıdır, çöpe atılmamalıdır.' },
      { q: 'Start-stop araçlara akü takıyor musunuz?', a: 'Evet. Start-stop sistemli araçlar için uygun AGM ya da EFB aküyle geliriz. Aracınızı telefonda söylemeniz yeterli.' },
      { q: 'Akü değişiminin fiyatı ne kadar?', a: 'Fiyat aracınızın akü ölçüsüne ve seçtiğiniz aküye göre değişir. Aradığınızda net fiyatı söyleriz.' },
    ],
    guide: 'aku-mu-bitti-mars-mi',
  },
  {
    slug: 'yeni-lastik',
    name: 'Yeni lastik',
    card: 'Ölçünüzü söyleyin, yeni lastiği getirip yerinde takalım.',
    problem: 'Yeni lastik',
    icon: 'yeni-lastik',
    metaTitle: 'Yerinde Yeni Lastik Satışı ve Takma 7/24 | Kaya Oto Lastik',
    metaDescription: 'Lastiğiniz tamir edilemiyorsa yeni lastiği ayağınıza getiriyoruz. Ölçünüzü söyleyin, yerinde takalım. Anadolu Yakası, Gebze ve İzmit\'te 7/24.',
    h1: 'Yeni lastik ayağınıza gelsin, yerinde takalım',
    lead: 'Lastiğiniz yolda tamir edilemeyecek kadar hasar gördüyse lastikçi aramanıza gerek yok. Aracınızın ölçüsündeki yeni lastiği getiriyor, bulunduğunuz yerde takıyoruz.',
    when: [
      'Lastiğin yanağı kesildi ya da yırtıldı',
      'Patlak lastikle bir süre gidildi, lastik ezildi',
      'Yedek lastik yok ya da o da kullanılamaz durumda',
      'Lastik diş derinliği bitmiş, güvenli değil',
    ],
    steps: [
      { t: 'Ölçüyü öğrenelim', d: 'Lastiğin yanağında yazan ölçüyü (ör. 205/55 R16 91V) söyleyin ya da fotoğrafını WhatsApp\'tan atın.' },
      { t: 'Seçenek ve fiyat', d: 'Uygun seçenekleri ve net fiyatı telefonda söyleriz. Siz onaylayınca lastikle yola çıkarız.' },
      { t: 'Yerinde takma', d: 'Eski lastik sökülür, yenisi jantınıza takılır, havası ayarlanır.' },
    ],
    duration: 'Lastiğin bulunma süresine göre değişir. Takma işlemi varıştan sonra genelde 20–30 dakika sürer.',
    limits: 'Her ölçü her an araçta bulunmayabilir. Az bulunan ölçülerde lastiğin getirilmesi zaman alabilir; bunu baştan söyleriz. Tam balans ayarı için daha sonra bir lastikçiye uğramanızı öneririz.',
    photo: { t: 'Yeni lastik', d: 'Servis aracındaki lastik stoğu' },
    faq: [
      { q: 'Hangi marka lastikleri getiriyorsunuz?', a: 'Ölçünüze göre farklı fiyat seçenekleri sunarız. Marka ve model bilgisini fiyatla birlikte telefonda söyleriz.' },
      { q: 'Tek lastik mi, çift mi değiştirmeliyim?', a: 'Aynı akstaki iki lastiğin diş derinliği birbirine yakın olmalı. Diğer lastik çok aşınmışsa ikisini birlikte değiştirmeyi öneririz.' },
      { q: 'Yeni lastiğin fiyatı ne kadar?', a: 'Ölçüye ve markaya göre değişir. Ölçünüzü söyleyin, net fiyatı hemen verelim.' },
    ],
    guide: 'lastik-patlayinca-ne-yapmali',
  },
  {
    slug: 'cikma-lastik',
    name: 'Çıkma lastik',
    card: 'Bütçe dostu, diş derinliği kontrol edilmiş ikinci el lastik.',
    problem: 'Çıkma lastik',
    icon: 'cikma',
    metaTitle: 'Çıkma Lastik · Yerinde Takılan 2. El Lastik 7/24 | Kaya Oto Lastik',
    metaDescription: 'Uygun fiyatlı, diş derinliği kontrol edilmiş çıkma lastik. Yolda kaldıysanız 2. el lastiği getirip yerinde takıyoruz. Anadolu Yakası, Gebze ve İzmit.',
    h1: 'Çıkma lastik: uygun fiyatlı, kontrol edilmiş, yerinde takılır',
    lead: 'Yolda kaldınız ve hemen yeni lastik almak istemiyorsanız çıkma lastik iyi bir ara çözümdür. Diş derinliğini ve yanağını kontrol ettiğimiz ikinci el lastiği getirip yerinde takıyoruz.',
    when: [
      'Lastik tamir edilemiyor ama yeni lastik bütçenizi aşıyor',
      'Yedek lastiğiniz yok, eve ya da işe dönmeniz gerek',
      'Kısa süre sonra lastiklerin hepsini değiştirmeyi düşünüyorsunuz',
    ],
    steps: [
      { t: 'Ölçü', d: 'Lastiğin yanağındaki ölçüyü söyleyin ya da fotoğrafını atın.' },
      { t: 'Kontrol edilmiş lastik', d: 'Uygun ölçüde, diş derinliği yeterli ve yanağında hasar olmayan çıkma lastiği seçeriz.' },
      { t: 'Yerinde takma', d: 'Lastik jantınıza takılır, havası ayarlanır. Ne kadar süre kullanabileceğinizi de söyleriz.' },
    ],
    duration: 'Takma işlemi varıştan sonra genelde 20–30 dakika sürer.',
    limits: 'Çıkma lastik stoğu ölçüye göre değişir; her ölçüde bulunmayabilir. Çok eski (üretim tarihi yıllar önce olan) lastikleri önermeyiz, yeni lastik seçeneğini de söyleriz.',
    extra: {
      h: 'Çıkma lastik alırken nelere bakılmalı?',
      p: [
        'Diş derinliği: yasal sınır 1,6 mm\'dir; güvenli kullanım için bunun belirgin şekilde üstünde olmalıdır.',
        'Üretim tarihi: lastiğin yanağındaki dört haneli DOT kodu hafta ve yılı gösterir (ör. 2322 = 2022\'nin 23. haftası).',
        'Yanak ve iç yüzey: çatlak, kabarma ya da yama izi olmamalıdır. Bunları sizin yerinize kontrol ederiz.',
      ],
    },
    photo: { t: 'Çıkma lastik', d: 'Kontrol edilmiş çıkma lastikler' },
    faq: [
      { q: 'Çıkma lastik güvenli mi?', a: 'Diş derinliği yeterli, yanağı sağlam ve çok eski olmayan bir çıkma lastik güvenle kullanılabilir. Bu kontrolleri yapmadan lastik takmıyoruz.' },
      { q: 'Çıkma lastik fiyatları ne kadar?', a: 'Ölçüye ve lastiğin durumuna göre değişir. Ölçünüzü söyleyin, elimizdeki seçenekleri ve fiyatı telefonda söyleyelim.' },
      { q: 'Çıkma lastiği ne kadar kullanabilirim?', a: 'Lastiğin diş derinliğine ve yaşına bağlıdır. Taktığımız lastik için tahmini kullanım süresini size söyleriz.' },
    ],
    guide: 'lastik-patlayinca-ne-yapmali',
  },
];

export const hizmetBySlug = (slug: string) => hizmetler.find((h) => h.slug === slug)!;
