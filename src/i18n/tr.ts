export const tr = {
  meta: {
    lang: 'tr',
    locale: 'tr-TR',
    title: 'Revzen | Yatırımcı Sunumu',
    description: 'Revzen, hareketli gün ışığı. Dinamik yapay pencere için yatırımcı sunumu.',
  },
  brandLine: 'Revzen, hareketli gün ışığı',

  ui: {
    skipToContent: 'İçeriğe geç',
    primaryNav: 'Ana gezinme',
    menu: 'Bölümler',
    langSwitchLabel: 'Bu sayfayı İngilizce görüntüle',
    downloadDeck: 'Sunumu indir',
    downloadDeckPdf: 'Sunumu indir (PDF)',
    whatsapp: 'WhatsApp',
    whatsappCta: "WhatsApp'tan yaz",
    whatsappMessage: 'Merhaba, Revzen sunumu hakkında görüşmek istiyorum.',
    conceptCaption: 'Konsept şeması, gerçek ürün fotoğrafı değildir',
    opensInNewTab: '(yeni sekmede açılır)',
    backToTop: 'Başa dön',
  },

  nav: [
    { id: 'product', label: 'Ürün' },
    { id: 'category', label: 'Kategori' },
    { id: 'market', label: 'Satış' },
    { id: 'ask', label: 'Yatırım' },
    { id: 'model', label: 'Model' },
    { id: 'plan', label: 'Takvim' },
    { id: 'terms', label: 'Teklif' },
  ],

  sun: {
    figureLabel: 'Güneş saati: yapay pencereli bir odanın kesiti',
    svgTitle: 'Tavanında yapay pencere bulunan oda kesiti',
    svgDesc:
      'Tavandaki pencereden giren ışık huzmesi, zemindeki ışık izi ve bir saksı bitkisinin gölgesi. Saat değiştikçe ışığın açısı, rengi ve gölgenin yönü değişir.',
    sliderLabel: 'Günün saati',
    quickLabel: 'Hızlı seçim',
    play: 'Günü oynat',
    modeLegend: 'Karşılaştır',
    modeColour: 'Sadece renk değişen panel',
    modeDirectional: 'Yönü değişen ışık',
    modeNoteColour: 'Panel yalnızca rengini ve parlaklığını değiştirir. Işık izi ve gölge yerinde kalır.',
    modeNoteDirectional: 'Işığın açısı, zemindeki izi ve gölgenin yönü gün boyunca birlikte hareket eder.',
    readTime: 'Saat',
    readDirection: 'Işık yönü',
    readLevel: 'Işık seviyesi',
    readTone: 'Ton',
    dirEast: '{deg}° doğudan',
    dirWest: '{deg}° batıdan',
    dirOverhead: 'Tepeden',
    dirFixed: 'Sabit, tepeden',
    toneWarm: 'Sıcak amber',
    toneNeutral: 'Nötr beyaz',
    toneOrange: 'Turuncu',
    level: '%{n}',
    valueText: 'Saat {time}, ışık {dir}, seviye {level}, ton {tone}',
  },

  hero: {
    eyebrow: '90.000 USD yatırım planı',
    headline: 'Işığın ötesinde. Bir güneş deneyimi.',
    subhead:
      'Gün boyunca yalnızca rengini değil, ışığın geliş yönünü de değiştirmesi hedeflenen premium yapay pencere sisteminin Türkiye lansmanı.',
    metrics: [
      { value: '90.000 USD', label: 'Başlangıç yatırımı' },
      { value: '1.000 / 10.000', label: 'İki ölçek senaryosu' },
      { value: 'Hipotez', label: 'Doğrulanacak finansal model' },
    ],
  },

  why: {
    heading: 'Neden Revzen?',
    text: 'Revzen, Farsça kökenli bir kelime ve pencere anlamına geliyor. Selçuklu ve Osmanlı mimarisinde, alçı çerçeveler içine renkli camlar yerleştirilerek yapılan ve gün ışığını süzerek içeri taşıyan pencerelere bu ad verilir. Ustalar yüzyıllar önce ışığı sadece içeri almakla yetinmedi, onu biçimlendirdi. Biz de aynı fikri bugünün teknolojisiyle, penceresi olmayan mekânlara taşımak istiyoruz.',
  },

  product: {
    eyebrow: 'Ne satıyoruz?',
    headline: 'Dekoratif panel değil. Hareketli güneş hissi.',
    thesis:
      'Penceresiz bir odaya sadece mavi tavan değil, zamanla değişen yönlü gün ışığı deneyimi taşımak.',
    statesLabel: 'Günün üç anı',
    stateDirection: 'Yön',
    stateLevel: 'Işık seviyesi',
    stateTone: 'Ton',
    states: [
      { time: '08:00', minutes: 480, name: 'Sabah', direction: 'Doğudan, alçak açıyla', level: 'Orta', tone: 'Sıcak amber' },
      { time: '12:00', minutes: 720, name: 'Öğle', direction: 'Tepeden, dik', level: 'En yüksek', tone: 'Nötr beyaz' },
      { time: '17:00', minutes: 1020, name: 'Akşam', direction: 'Batıdan, alçak açıyla', level: 'Orta', tone: 'Turuncu' },
    ],
    acceptanceTitle: 'Teknik kabul şartı',
    acceptanceText:
      'Gerçek ürün, açı ve ışık izinin gün içinde fiziksel değişimini gösteren numune videosu / ölçümle doğrulanacak. Sadece CCT (ışık rengi) veya parlaklık değişimi bu vaadi karşılamaz.',
  },

  category: {
    eyebrow: 'Neden ayrı bir kategori?',
    headline: 'Rekabet var. Fark teknik olarak ispatlanmalı.',
    subhead:
      '“Türkiye’de hiç yok” iddiası değil; yön ve gölge hareketine sahip bir ürünü farklı bir seviyede konumlandırma hipotezi.',
    tableCaption: 'Ürün sınıflarının karşılaştırması',
    columns: ['Ürün sınıfı', 'Ne sunar', 'Yönlü ışık', 'Fırsat / sınır'],
    rows: [
      { cells: ['Baskılı gökyüzü', 'Görsel + genel aydınlatma', 'Tipik olarak hayır', 'Düşük fiyat / dekoratif'], highlight: false },
      { cells: ['Akıllı LED sky', 'Saat, renk, parlaklık', 'Genellikle hayır', 'Kolay erişim / taklit riski'], highlight: false },
      { cells: ['Premium optik', 'Gerçekçi güneş ve gölge', 'Evet; açı sabit olabilir', 'Yüksek optik kalite / pahalı'], highlight: false },
      { cells: ['Hedeflenen ürün', 'Yönü zamanla değişen ışık', 'Numune ile kanıtlanmalı', 'Hedef fark: hareketli ışık'], highlight: true },
    ],
    footnote:
      'CoeLux yönlü ışık ve keskin gölge gösterir. Innerscene Virtual Sun derinlik ve güneş illüzyonu gösterir; Innerscene SSS sayfası bazı modeller için sabit 30° açı belirtir.',
  },

  market: {
    eyebrow: 'Satış modeli',
    headline: 'Önce uygulamalı gösterim. Sonra ölçek.',
    lead: 'İlk pazar Türkiye: premium mimari projeler ve dönüşüm videolarıyla beslenen doğrudan satış.',
    channels: [
      {
        num: '01',
        title: 'B2B / Proje',
        text: 'Mimarlar, iç mimarlar, villalar, otel ve spa projeleri, butik ticari alanlar.',
        steps: ['Demo', 'Keşif', 'Teklif', 'Proje kazanımı'],
      },
      {
        num: '02',
        title: 'Doğrudan e-ticaret',
        text: 'Gerçek kurulum videoları, online teklif ve ödeme, performans kampanyaları.',
        steps: [],
      },
      {
        num: '03',
        title: 'Kanal ortakları',
        text: 'Elektrik tesisatçıları, mimarlık ofisleri, seçici distribütörler.',
        steps: [],
      },
    ],
    stepsLabel: 'Satış süreci',
    mixTitle: 'Satış karması',
    mix: [
      { label: 'B2B / Proje', share: 60, display: '%60' },
      { label: 'Doğrudan', share: 40, display: '%40' },
    ],
    note: 'ABD / Amazon ilk aşamada öncelik değil. Sertifikasyon, lojistik ve gerçek net marj doğrulandıktan sonra ikinci pazar olur.',
  },

  progress: {
    eyebrow: 'Bugüne kadar yapılanlar',
    headline: 'Sıfırdan başlanmıyor. Ancak ürün henüz doğrulanmadı.',
    doneTitle: 'Mevcut çalışma / ayni katkı',
    doneStatus: 'Tamamlandı',
    done: [
      { item: 'Pazar ve rakip haritası', status: 'Yapıldı, ön çalışma' },
      { item: 'Türkiye / ABD fiyat ve ithalat analizi', status: 'Yapıldı, teyide açık' },
      { item: 'Tedarikçi kısa listesi ve risk matrisi', status: 'Yapıldı, ilk tur' },
      { item: 'Birim ekonomi + yatırım modeli', status: 'Yapıldı, varsayıma dayalı' },
    ],
    nextTitle: 'Yatırım sonrası icra',
    nextStatus: 'Henüz başlamadı',
    next: [
      'Ürün yönü / optik numune doğrulaması',
      'E-ticaret, CRM, teklif altyapısı',
      'Marka, lansman filmi ve reklamlar',
      'Satış, satış sonrası ve raporlama',
    ],
    rangeValue: '230.000 - 530.000 TL',
    rangeText:
      'Dışarıdan satın alınacak toplam ilk kurulum hizmetlerinin önceki tahmini aralığıdır (KDV hariç). Bu işlerin tümü tamamlanmadı; nakit sermaye veya bugüne kadar harcanan para olarak yazılmıyor.',
  },

  ask: {
    eyebrow: 'Yatırım talebi',
    headline: '90.000 USD. Tek, net yatırım planı.',
    subhead:
      'Amaç 1.000 adet almak değil; ürünü teknik olarak onaylatmak, ilk stokla pazara girmek ve satış verisi üretmek.',
    chartTitle: 'Fon kullanımı (USD)',
    bars: [
      { label: 'İlk stok / ithalat, KDV hariç', value: 33000, display: '33.000 USD' },
      { label: 'Optik doğrulama, numuneler', value: 11000, display: '11.000 USD' },
      { label: 'İthalat KDV nakit tamponu', value: 11000, display: '11.000 USD' },
      { label: 'İlk performans kampanyaları', value: 10000, display: '10.000 USD' },
      { label: 'Test, uygunluk, danışmanlık', value: 8000, display: '8.000 USD' },
      { label: 'E-ticaret / CRM kurulumu', value: 6000, display: '6.000 USD' },
      { label: 'Rezerv / beklenmeyen giderler', value: 6000, display: '6.000 USD' },
      { label: 'Referans kurulum ve demo', value: 5000, display: '5.000 USD' },
    ],
    totalLabel: 'Toplam',
    totalDisplay: '90.000 USD',
    note: 'İlk parti ≈ 60-70 adet (varsayılan ithal maliyet ≈ 480 USD/adet). Gerçek adet, teklifler ve gümrük netleştiğinde belirlenecek.',
  },

  model: {
    eyebrow: 'Finansal model, 1.000 adet',
    headline: '1.000 satışta kârlılık potansiyeli.',
    subhead: 'Aynı 12 aylık satış dönemi için varsayım. Fiyatlar KDV hariç; kurulum ayrıca fiyatlandırılır.',
    metrics: [
      { label: 'Gelir', value: '1.070.000 USD', note: '1.000 × ortalama 1.070 USD' },
      { label: 'Katkı payı', value: '350.000 USD', note: 'Sabit giderler öncesi' },
      { label: 'Faaliyet sonucu', value: '185.000 USD', note: 'Vergi, finansman ve amortisman öncesi' },
    ],
    unitTableCaption: 'Birim başına, KDV hariç',
    unitColumns: ['', 'B2B %60', 'Doğrudan %40', 'Ağırlıklı'],
    unitRows: [
      ['Satış fiyatı', '1.150 USD', '950 USD', '1.070 USD'],
      ['Ürün, kanal ve servis sonrası katkı', '490 USD', '140 USD', '350 USD'],
    ],
    bridgeTitle: 'Birim katkı köprüsü',
    bridge: [
      { label: 'Satış fiyatı', value: 1070, display: '1.070 USD', kind: 'total' },
      { label: 'Ürün / ithalat', value: -480, display: '−480 USD', kind: 'step' },
      { label: 'Satış kanalı ve reklam', value: -170, display: '−170 USD', kind: 'step' },
      { label: 'Garanti / servis', value: -70, display: '−70 USD', kind: 'step' },
      { label: 'Katkı', value: 350, display: '350 USD', kind: 'result' },
    ],
    bridgeSum: [
      { text: '1.000 × 350 USD = 350.000 USD', kind: 'plain' },
      { text: '−165.000 USD yıllık sabit gider', kind: 'minus' },
      { text: '= 185.000 USD', kind: 'result' },
    ],
  },

  scale: {
    eyebrow: 'Ölçek senaryosu, 10.000 adet',
    headline: '10.000 adet satış: büyük fırsat, büyük operasyon.',
    subhead: 'Taahhüt değil, bir yıllık ölçek senaryosu. Daha düşük birim fiyat ve daha yüksek işletme maliyeti varsayılır.',
    metrics: [
      { label: 'Gelir', value: '10.000.000 USD', note: '10.000 × ortalama 1.000 USD' },
      { label: 'Katkı payı', value: '3.400.000 USD', note: 'Sabit giderler öncesi' },
      { label: 'Faaliyet sonucu', value: '2.150.000 USD', note: 'Vergi, finansman ve amortisman öncesi' },
    ],
    bridgeTitle: 'Birim katkı köprüsü',
    bridge: [
      { label: 'Ortalama fiyat', value: 1000, display: '1.000 USD', kind: 'total' },
      { label: 'İthal maliyet', value: -420, display: '−420 USD', kind: 'step' },
      { label: 'Kanal + reklam', value: -160, display: '−160 USD', kind: 'step' },
      { label: 'Garanti / servis', value: -80, display: '−80 USD', kind: 'step' },
      { label: 'Birim katkı', value: 340, display: '340 USD', kind: 'result' },
    ],
    bridgeSum: [
      { text: '10.000 × 340 USD = 3,40 milyon USD katkı', kind: 'plain' },
      { text: '−1,25 milyon USD sabit operasyon', kind: 'minus' },
      { text: '= 2,15 milyon USD', kind: 'result' },
    ],
    capitalTitle: 'Sermaye gerçeği',
    capitalText:
      '10.000 adet × 420 USD ithal maliyet ≈ 4,2 milyon USD satın alma demek. 90.000 USD tohum sermaye bunu tek başına finanse edemez; dönen stok, müşteri avansı, distribütör ve/veya kredi gerekir.',
  },

  stress: {
    eyebrow: 'Dayanıklılık testi',
    headline: 'Büyüklük tek başına yeterli değil. Marj korunmalı.',
    tableCaption: 'Faaliyet sonucu, üç durumda',
    columns: ['Durum', '1.000 adet', '10.000 adet', 'Varsayım'],
    rows: [
      { cells: ['Kötümser', '−71.500 USD', '−190.000 USD', 'Fiyat −%15; ürün maliyeti +%20'], tone: 'negative' },
      { cells: ['Baz', '185.000 USD', '2.150.000 USD', 'Baz fiyat ve maliyet'], tone: 'base' },
      { cells: ['İyimser', '340.000 USD', '3.570.000 USD', 'Fiyat +%10; ürün maliyeti −%10'], tone: 'positive' },
    ],
  },

  calc: {
    title: 'Senaryo hesaplayıcı',
    intro: 'Varsayımları kendiniz değiştirin. Baz değerler seçilen senaryodan otomatik gelir.',
    scenarioLegend: 'Senaryo',
    scenario1000: '1.000 adet',
    scenario10000: '10.000 adet',
    inputsLegend: 'Varsayımlar (USD, KDV hariç)',
    units: 'Adet',
    price: 'Ortalama satış fiyatı',
    landed: 'Ürün / ithal maliyet',
    channel: 'Kanal ve reklam, adet başı',
    service: 'Garanti ve servis, adet başı',
    fixed: 'Yıllık sabit gider',
    deviationLegend: 'Sapmalar',
    priceDev: 'Fiyat sapması',
    costDev: 'Ürün maliyeti sapması',
    costDevHint: 'Yalnızca ürün / ithal maliyete uygulanır.',
    presetsLabel: 'Hazır durumlar',
    presets: { downside: 'Kötümser', base: 'Baz', upside: 'İyimser' },
    resultsLabel: 'Sonuçlar',
    revenue: 'Gelir',
    contribution: 'Katkı payı',
    operatingResult: 'Faaliyet sonucu',
    unitContribution: 'Birim katkı',
    breakEven: 'Başabaş adedi',
    noBreakEven: 'Başabaş yok',
    unitsSuffix: 'adet',
    percent: '%{n}',
    formula: 'Birim katkı = fiyat × (1 + fiyat sapması) − ithal maliyet × (1 + maliyet sapması) − kanal − servis',
    note: 'Hesaplayıcı, sunumdaki modelin sadeleştirilmiş bir sürümüdür; vergi, finansman ve KDV nakit etkileri dahil değildir.',
  },

  costs: {
    eyebrow: 'Gider yapısı',
    headline: 'Gelirden faaliyet sonucuna. Bütün kalemler görünür.',
    bridgeTitle: 'Faaliyet köprüsü',
    fixedTitle: 'Yıllık sabit bütçe',
    columns: ['', '1.000 adet', '10.000 adet'],
    bridgeRows: [
      { cells: ['Gelir', '1,07 milyon USD', '10,0 milyon USD'], kind: 'plain' },
      { cells: ['Ürün ve ithalat', '−480 bin USD', '−4,20 milyon USD'], kind: 'minus' },
      { cells: ['Kanal ve reklam', '−170 bin USD', '−1,60 milyon USD'], kind: 'minus' },
      { cells: ['Garanti ve servis', '−70 bin USD', '−800 bin USD'], kind: 'minus' },
      { cells: ['Katkı payı', '350 bin USD', '3,40 milyon USD'], kind: 'subtotal' },
      { cells: ['Sabit gider sonrası', '185 bin USD', '2,15 milyon USD'], kind: 'total' },
    ],
    fixedRows: [
      { cells: ['Yönetim / iş geliştirme', '40 bin USD', '120 bin USD'], kind: 'plain' },
      { cells: ['Çekirdek ekip / operasyon', '42 bin USD', '500 bin USD'], kind: 'plain' },
      { cells: ['Marka, kalıcı içerik / PR', '24 bin USD', '120 bin USD'], kind: 'plain' },
      { cells: ['Yazılım / veri / CRM', '20 bin USD', '170 bin USD'], kind: 'plain' },
      { cells: ['Muhasebe, hukuk, ofis', '15 bin USD', '110 bin USD'], kind: 'plain' },
      { cells: ['Müşteri ve saha desteği', '24 bin USD', '230 bin USD'], kind: 'plain' },
      { cells: ['Toplam', '165 bin USD', '1,25 milyon USD'], kind: 'total' },
    ],
    noteTitle: 'Muhasebe ve ortaklık ayrımı',
    noteText:
      'Araştırma ve iş modelleme kurucu katkısıdır; daha önce ödenmiş fatura olarak gösterilmez. Yatırımdan sonra fiilen oluşan yazılım, içerik ve yönetim giderleri nakit akışına ve gelir tablosuna girer. KDV, kurumlar vergisi, finansman ve yatırım harcamaları ayrıca modellenmelidir.',
  },

  plan: {
    eyebrow: 'İcra takvimi',
    headline: 'Önce ispat. Sonra yatırımın hızlandırdığı satış.',
    subhead: 'Sermaye aşamalı kullanılır; teknik kabul başarısız olursa sipariş büyütülmez.',
    phases: [
      {
        days: 'Gün 0-30',
        title: 'Teknik ispat',
        scope: '3 numune / 2 üretici',
        text: 'Açı ve gölge hareketi, güç tüketimi, sertifikasyon ve garanti doğrulanır.',
      },
      {
        days: 'Gün 31-60',
        title: 'Pilot kurulum',
        scope: '2-4 demo kurulum',
        text: 'Mimar, otel veya villa ortamında canlı test; fiyat pazarlığı.',
      },
      {
        days: 'Gün 61-100',
        title: 'Pazar testi',
        scope: 'İlk parti ve siparişler',
        text: 'E-ticaret, teklif CRM’i, dönüşüm videosu ve performans reklamları.',
      },
    ],
    gateLabel: 'Karar kapısı',
    criteriaTitle: 'Devam / dur kriterleri',
    criteria: [
      'Gerçek yön / gölge hareketi video ve ölçümle doğrulandı mı?',
      'Ürün ithal edilebiliyor ve servis verilebiliyor mu?',
      'İlk B2B demodan fiyat kabulü var mı?',
      'En az bir kanalda pozitif birim katkıya ulaşıldı mı?',
    ],
  },

  terms: {
    eyebrow: 'Teklif ve şeffaflık',
    headline: '$90.000 şirkete girer. Ortaklık ayrıca müzakere edilir.',
    subhead:
      'Amaç, üçüncü bir ortağın yeni bir şirkete sermaye koyması. Pay oranı ve değerleme bu belgeyle önceden belirlenmez.',
    equityTitle: 'Örnek, teklif değildir',
    equityColumns: ['Yatırımcı payı', 'Yatırım sonrası değer', 'Yatırım öncesi değer'],
    equityRows: [
      ['%15', '600.000 USD', '510.000 USD'],
      ['%20', '450.000 USD', '360.000 USD'],
      ['%25', '360.000 USD', '270.000 USD'],
    ],
    rolesTitle: 'Sorumluluklar',
    roles: [
      { who: 'Kurucu', title: 'Ürün ve tedarik', text: 'Üretici, kalite, lojistik, satış operasyonu.' },
      {
        who: 'Kurucu',
        title: 'Büyüme ve teknoloji',
        text: 'Pazar araştırması, ürün yönetimi, e-ticaret / CRM, kreatif üretim ve reklam.',
      },
      { who: 'Yatırımcı', title: 'Sermaye', text: 'Sermaye ve anlaşılırsa yönetim desteği.' },
    ],
    limitsTitle: 'İddia sınırları',
    limitsText:
      'Mevcut optik yön değişimi, OEM fiyatı, Türkiye münhasırlığı, sertifikalar ve satış fiyatı doğrulanmış değildir. Tablolar varsayımsal bir modele dayanır; bağımsız uzman, hukuk, gümrük veya finans danışmanlığının yerini tutmaz.',
  },

  makers: {
    eyebrow: 'İncelenen üreticiler',
    headline: 'Üç aday. Seçimi numune testi belirleyecek.',
    linkLabel: 'Üreticinin sayfası',
    cards: [
      {
        name: 'Pesetech',
        city: 'Shenzhen',
        text: '60x60 cm 80W model. Kendi sitesinden doğrudan perakende satış, distribütör programı, 5 yıl garanti.',
        url: 'https://www.artificialsky.tech/shop/skylight-80w/',
      },
      {
        name: 'Ewinlight',
        city: 'Shenzhen',
        text: 'Ewindow serisi. Mimari projelere odaklı B2B üretici; paneller yan yana birleştirilebiliyor. Light+Building Frankfurt katılımcısı.',
        url: 'https://ewinlight.com/ewindow/',
      },
      {
        name: 'BBier Lighting',
        city: 'Shenzhen',
        text: '14 yıllık OEM üretici. Düşük minimum sipariş, kendi markayla üretime esnek.',
        url: 'https://bbiermfg.en.made-in-china.com/product/pAGRSdTyhlrj/China-Blue-Sky-LED-Skylight-Ceiling-Virtual-Natural-Sunlight-LED-Simulator-Artificial-Skylight.html',
      },
    ],
    note: 'Bu üreticilerin sayfaları gün içinde renk ve parlaklık değişiminden söz ediyor; hiçbiri güneşin yönünün fiziksel olarak hareket ettiğini açıkça belirtmiyor. Seçim, 0-30. günlerdeki numune testine bağlı olacak. Sitelerdeki fiyatlar liste fiyatıdır.',
  },

  next: {
    eyebrow: 'Sonraki adım',
    line: 'Örnek ürün / üretici teklifi, doğrulama, yatırım sözleşmesi.',
    stepsLabel: 'Sonraki üç adım',
    steps: ['Örnek ürün / üretici teklifi', 'Doğrulama', 'Yatırım sözleşmesi'],
  },

  footer: {
    text: 'Yatırımcı sunumu, Ekim 2026. Ön teklif / gizli. Finansal tahminler bağlayıcı değildir.',
  },
};
