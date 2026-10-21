export const products = [
  {
    id: "nusasound-air-anc",
    name: "NusaSound Air ANC",
    category: "Elektronik",
    subcategory: "Audio",
    categoryKey: "elektronik",
    type: "Headphone wireless",
    tagline: "Headphone wireless untuk fokus dan waktu santai.",
    price: 899000,
    originalPrice: 1099000,
    badge: "Hemat 18%",
    badgeType: "discount",
    rating: 4.8,
    reviewsCount: 24,
    sku: "NS-AIR-01",
    origin: "Jakarta • Dikirim dari NusaShop",
    description: "Active noise cancellation, koneksi Bluetooth 5.3, dan baterai hingga 40 jam dalam satu perangkat ringkas.",
    longDescription: "NusaSound Air ANC dirancang untuk mendampingi ritme harianmu—dari fokus bekerja di meja, perjalanan komuter yang ramai, hingga istirahat santai di rumah. Dilengkapi dengan peredam bising aktif hibrida, bantalan telinga berbusa memori yang empuk, serta mikrofon dengan peredam derau angin untuk panggilan suara yang jernih.",
    features: [
      "Peredam bising aktif hibrida (ANC) hingga 35dB",
      "Daya tahan baterai hingga 40 jam (ANC mati) / 28 jam (ANC aktif)",
      "Pengisian daya cepat: 10 menit untuk 4 jam pemutaran",
      "Koneksi Bluetooth 5.3 multipoint ke dua perangkat sekaligus",
      "Driver dinamis 40mm beresolusi tinggi dengan diafragma komposit",
      "Bantalan telinga memory foam yang breathable untuk pemakaian berjam-jam"
    ],
    specs: {
      "Tipe Driver": "40mm Dynamic Driver",
      "Konektivitas": "Bluetooth 5.3 + Kabel AUX 3.5mm",
      "Kapasitas Baterai": "600 mAh (hingga 40 jam)",
      "Port Pengisian": "USB Type-C (kabel disertakan)",
      "Bobot": "245 gram",
      "Mikrofon": "4 mikrofon beamforming dengan ENC",
      "Garansi": "12 Bulan Resmi NusaShop (Ganti Baru)"
    },
    images: [
      "/assets/images/products/nusasound-air-anc.jpg",
      "/assets/images/details/nusasound-1.jpg",
      "/assets/images/details/nusasound-2.jpg",
      "/assets/images/details/nusasound-3.jpg",
      "/assets/images/details/nusasound-4.jpg"
    ],
    variants: [
      { id: "midnight-blue", name: "Midnight Blue", color: "#1E293B", stock: 14, inStock: true },
      { id: "sand-white", name: "Sand White", color: "#F1F5F9", stock: 8, inStock: true },
      { id: "matte-black", name: "Matte Black", color: "#0F172A", stock: 0, inStock: false }
    ],
    reviews: [
      { id: "r1", user: "Dimas A.", rating: 5, date: "14 Oktober 2026", comment: "ANC-nya benar-benar kedap untuk kerja di coffee shop. Suara vokal jelas dan bass tidak berlebihan." },
      { id: "r2", user: "Rara K.", rating: 5, date: "10 Oktober 2026", comment: "Bantalannya sangat nyaman dipakai 4 jam nonstop kacamata saya tidak terjepit sama sekali." },
      { id: "r3", user: "Budi S.", rating: 4, date: "5 Oktober 2026", comment: "Build quality kokoh, koneksi ke laptop dan HP sangat mulus tanpa delay." }
    ]
  },
  {
    id: "keyspace-k75",
    name: "KeySpace K75 Wireless Keyboard",
    category: "Elektronik",
    subcategory: "Keyboard",
    categoryKey: "elektronik",
    type: "Mechanical keyboard",
    tagline: "Keyboard mekanikal 75% ringkas dengan gasket mount senyap.",
    price: 1250000,
    originalPrice: 1450000,
    badge: "Terlaris",
    badgeType: "popular",
    rating: 4.9,
    reviewsCount: 38,
    sku: "NS-KEY-75",
    origin: "Tangerang • Dikirim dari NusaShop",
    description: "Layout 75% hemat tempat dengan kenop volume, switch linear lembut terlumasi pabrik, dan konektivitas tri-mode.",
    longDescription: "KeySpace K75 menghadirkan pengalaman mengetik yang presisi dan memuaskan tanpa mengorbankan ketenangan ruang kerja Anda. Desain gasket mount dan peredam silikon lima lapis menghasilkan suara ketikan 'thock' yang padat dan lembut.",
    features: [
      "Layout 75% (82 tombol) + Kenop Volume CNC Aluminium",
      "Struktur Gasket Mount dengan bantalan peredam 5 lapis",
      "Switch Linear Nusa Linear V2 (pre-lubed pabrik)",
      "Koneksi Tri-Mode: Bluetooth 5.0, 2.4GHz Wireless, dan USB-C",
      "Baterai 4000mAh tahan hingga 200 jam pemakaian",
      "Hot-swappable 5-pin PCB & Keycaps PBT Dye-sub profil Cherry"
    ],
    specs: {
      "Layout": "75% ANSI (82 tombol)",
      "Tipe Switch": "Nusa Linear V2 (Pre-lubed)",
      "Bahan Keycaps": "PBT Dye-sublimation",
      "Konektivitas": "2.4GHz, Bluetooth 5.0, USB-C",
      "Baterai": "4000 mAh Li-ion",
      "Kompatibilitas": "Windows, macOS, iOS, Android"
    },
    images: [
      "/assets/images/products/keyspace-k75.jpg"
    ],
    variants: [
      { id: "retro-gray", name: "Retro Classic Gray", color: "#94A3B8", stock: 12, inStock: true },
      { id: "ivory-brown", name: "Ivory Cream", color: "#F8FAFC", stock: 6, inStock: true }
    ],
    reviews: [
      { id: "rk1", user: "Andi W.", rating: 5, date: "16 Oktober 2026", comment: "Suara ketikan sangat empuk, tidak cempreng. Gasket mount-nya benar-benar terasa fleksibel." },
      { id: "rk2", user: "Farah M.", rating: 5, date: "12 Oktober 2026", comment: "Desain minimalis dan tombol volume CNC-nya sangat praktis untuk meeting harian." }
    ]
  },
  {
    id: "luma-desk-mini",
    name: "Luma Desk Mini LED Lamp",
    category: "Rumah & gaya hidup",
    subcategory: "Meja & Lampu",
    categoryKey: "rumah",
    type: "Lampu meja kerja",
    tagline: "Pencahayaan ramah mata dengan wireless charger terintegrasi.",
    price: 349000,
    originalPrice: 429000,
    badge: "Pilihan Editor",
    badgeType: "editorial",
    rating: 4.7,
    reviewsCount: 19,
    sku: "NS-LUM-01",
    origin: "Jakarta • Dikirim dari NusaShop",
    description: "Cahaya lembut bebas kedip dengan 3 temperatur warna dan pad wireless charging 15W di alas lampu.",
    longDescription: "Luma Desk Mini dirancang untuk kenyamanan mata saat bekerja lembur atau membaca santai di malam hari. Menggunakan LED CRI>95 yang memancarkan warna objek secara alami tanpa silau.",
    features: [
      "LED CRI > 95 ramah mata bebas kedip (flicker-free)",
      "3 Pilihan Suhu Warna (3000K, 4500K, 6000K) + Stepless Dimming",
      "Fast Wireless Charging Pad 15W bawaan di dasar lampu",
      "Leher lampu fleksibel dengan engsel aluminium presisi",
      "Timer mati otomatis 45 menit untuk sesi kerja Pomodoro"
    ],
    specs: {
      "Konsumsi Daya": "12W (Lampu) + 15W (Wireless Charger)",
      "Indeks Warna": "CRI > 95",
      "Tingkat Kecerahan": "Hingga 650 Lumens",
      "Bahan": "Aluminium Anodized + Polikarbonat"
    },
    images: [
      "/assets/images/products/luma-desk-mini.jpg"
    ],
    variants: [
      { id: "space-gray", name: "Space Gray", color: "#475569", stock: 15, inStock: true },
      { id: "pure-white", name: "Pure White", color: "#FFFFFF", stock: 10, inStock: true }
    ],
    reviews: [
      { id: "rl1", user: "Reza P.", rating: 5, date: "18 Oktober 2026", comment: "Sangat praktis, meja jadi rapi karena lampu sekalian jadi charger HP tanpa kabel tambahan." }
    ]
  },
  {
    id: "daily-flask-600",
    name: "Daily Flask 600ml Tumbler",
    category: "Rumah & gaya hidup",
    subcategory: "Tas & Botol",
    categoryKey: "rumah",
    type: "Tumbler stainless",
    tagline: "Jaga minuman dingin 24 jam atau panas 12 jam setiap hari.",
    price: 219000,
    originalPrice: 259000,
    badge: "Hemat 15%",
    badgeType: "discount",
    rating: 4.9,
    reviewsCount: 42,
    sku: "NS-FLK-600",
    origin: "Bandung • Dikirim dari NusaShop",
    description: "Insulasi dinding ganda baja tahan karat 316 tingkat medis dengan lapisan powder-coat anti-selip.",
    longDescription: "Temani rutinitas hidrasimu dengan Daily Flask 600ml. Bebas BPA, anti-bocor 360 derajat, dan tidak meninggalkan bau atau rasa logam pada minuman kopi, teh, maupun air mineral dingin.",
    features: [
      "Insulasi vakum ganda: Dingin 24 Jam, Panas 12 Jam",
      "Material Baja Tahan Karat SUS 316 (Medical Grade Interior)",
      "Tutup anti-bocor dengan pengunci satu tangan yang aman",
      "Finishing Powder Coating tahan gores dan nyaman digenggam",
      "Diameter pas untuk cup holder mobil dan ransel"
    ],
    specs: {
      "Kapasitas": "600 ml",
      "Material": "SUS 316 Stainless Steel (Dalam), SUS 304 (Luar)",
      "Bobot Kosong": "310 gram",
      "Dimensi": "Tinggi 23.5 cm, Diameter 7.2 cm"
    },
    images: [
      "/assets/images/products/daily-flask-600.jpg"
    ],
    variants: [
      { id: "forest-green", name: "Forest Green", color: "#166534", stock: 20, inStock: true },
      { id: "pastel-purple", name: "Pastel Lilac", color: "#C084FC", stock: 14, inStock: true },
      { id: "charcoal", name: "Charcoal Black", color: "#1F2937", stock: 25, inStock: true }
    ],
    reviews: [
      { id: "rf1", user: "Siti N.", rating: 5, date: "17 Oktober 2026", comment: "Es batu masih utuh setelah saya tinggal semalaman di mobil. Finishing catnya doff dan mewah." }
    ]
  },
  {
    id: "urban-daypack-18l",
    name: "Urban Daypack 18L Commute",
    category: "Fashion",
    subcategory: "Tas & Botol",
    categoryKey: "fashion",
    type: "Ransel laptop",
    tagline: "Ransel ergonomis tahan cuaca untuk laptop 16 inci dan esensial harian.",
    price: 549000,
    originalPrice: 649000,
    badge: "Rekomendasi",
    badgeType: "editorial",
    rating: 4.8,
    reviewsCount: 31,
    sku: "NS-BAG-18",
    origin: "Bandung • Dikirim dari NusaShop",
    description: "Kain Cordura tahan air, kompartemen laptop suspensi empuk, dan strap pundak dengan busa ergonomis.",
    longDescription: "Urban Daypack 18L dirancang untuk Anda yang dinamis berpindah tempat antara kantor, kafe, dan perjalanan akhir pekan. Penataan saku internal yang cerdas memastikan setiap kabel, charger, dan botol minum tersimpan pada tempatnya.",
    features: [
      "Bahan Nylon Cordura 500D Water-Repellent",
      "Kompartemen laptop suspensi hingga ukuran 16 inci",
      "Saku tersembunyi anti-maling untuk paspor dan dompet di panel punggung",
      "Strap koper (luggage pass-through) untuk kemudahan bepergian",
      "Ritsleting YKK tahan air dengan tarikan kabel paracord"
    ],
    specs: {
      "Kapasitas": "18 Liter",
      "Kompartemen Laptop": "Hingga MacBook Pro 16 inci",
      "Material": "Cordura 500D Nylon + Ritsleting YKK",
      "Bobot": "680 gram",
      "Dimensi": "45 x 30 x 14 cm"
    },
    images: [
      "/assets/images/products/urban-daypack-18l.jpg"
    ],
    variants: [
      { id: "obsidian-black", name: "Obsidian Black", color: "#0F172A", stock: 11, inStock: true },
      { id: "slate-gray", name: "Slate Gray", color: "#64748B", stock: 7, inStock: true }
    ],
    reviews: [
      { id: "rb1", user: "Hendra T.", rating: 5, date: "15 Oktober 2026", comment: "Beban terasa jauh lebih enteng dibanding ransel saya sebelumnya. Jahitan rapi dan tahan cipratan hujan." }
    ]
  },
  {
    id: "nusabeat-pocket",
    name: "NusaBeat Pocket Speaker",
    category: "Elektronik",
    subcategory: "Audio",
    categoryKey: "elektronik",
    type: "Speaker Bluetooth",
    tagline: "Speaker saku tahan air IP67 dengan bass bertenaga.",
    price: 329000,
    originalPrice: 399000,
    badge: "Hemat 17%",
    badgeType: "discount",
    rating: 4.7,
    reviewsCount: 15,
    sku: "NS-SPK-01",
    origin: "Jakarta • Dikirim dari NusaShop",
    description: "Ukuran sekepal tangan dengan ketahanan air IP67, daya tahan baterai 12 jam, dan strap silikon gantung.",
    longDescription: "NusaBeat Pocket membuktikan bahwa suara megah tidak memerlukan bodi besar. Dilengkapi radiator pasif ganda dan chip DSP kustom untuk karakter audio yang kaya di segala tingkat volume.",
    features: [
      "Sertifikasi Tahan Air dan Debu IP67 (bisa mengapung di air)",
      "Daya tahan baterai 12 jam pemutaran nonstop",
      "Fitur TWS Stereo Pairing: hubungkan 2 speaker untuk suara stereo",
      "Mikrofon internal untuk panggilan telepon handsfree",
      "Strap silikon tahan sobek untuk digantung di ransel atau stang sepeda"
    ],
    specs: {
      "Daya Output": "8 Watt RMS",
      "Versi Bluetooth": "Bluetooth 5.3",
      "Kapasitas Baterai": "1800 mAh",
      "Standar Proteksi": "IP67 Tahan Air & Debu",
      "Bobot": "195 gram"
    },
    images: [
      "/assets/images/products/nusabeat-pocket.jpg"
    ],
    variants: [
      { id: "sand-beige", name: "Sand Beige", color: "#E2E8F0", stock: 18, inStock: true },
      { id: "deep-ocean", name: "Deep Ocean", color: "#0369A1", stock: 9, inStock: true }
    ],
    reviews: [
      { id: "rs1", user: "Maya L.", rating: 5, date: "19 Oktober 2026", comment: "Kecil-kecil suaranya bulat dan tidak cempreng. Praktis dibawa ke mana-mana." }
    ]
  }
];

export const articles = [
  {
    id: "headphone-fokus",
    title: "Headphone untuk fokus",
    tag: "Audio & Kerja",
    summary: "Kenali ANC, daya tahan baterai, dan kenyamanan sebelum membeli perangkat andalanmu.",
    image: "/assets/images/banners/article-headphone.jpg",
    readTime: "3 menit membaca",
    content: "Suasana kerja yang kondusif seringkali membutuhkan keheningan yang terkurasi. Fitur Active Noise Cancellation (ANC) pada headphone modern bekerja dengan mendeteksi frekuensi suara luar dan memancarkan gelombang inversi untuk meredam kebisingan secara real-time. Dipadukan dengan bantalan memory-foam yang ramah di telinga, sesi kerja mendalam jadi jauh lebih produktif."
  },
  {
    id: "meja-kecil-ide-besar",
    title: "Meja kecil, ide besar",
    tag: "Inspirasi Ruang",
    summary: "Tiga cara membuat sudut kerja lebih nyaman tanpa banyak barang berantakan.",
    image: "/assets/images/banners/article-desk.jpg",
    readTime: "4 menit membaca",
    content: "Ruang yang terbatas bukan halangan untuk produktivitas maksimal. Kuncinya ada pada pemilihan barang yang multifungsi: keyboard mekanikal dengan layout 75% yang menyisakan ruang bebas untuk mouse, lampu meja LED dengan arm terintegrasi, dan pengaturan kabel minimalis yang tersembunyi rapi di balik meja."
  },
  {
    id: "isi-tas-harianmu",
    title: "Isi tas harianmu",
    tag: "Gaya Hidup",
    summary: "Pilihan ringan dan fungsional untuk rutinitas di luar rumah yang tetap rapi dan siap.",
    image: "/assets/images/banners/article-bag.jpg",
    readTime: "2 menit membaca",
    content: "Membawa barang penting harian tidak harus membuat tas terasa berat. Pilih ransel dengan material tahan air ringan, tumbler stainless berinsulasi untuk kebutuhan hidrasi sepanjang hari, dan pouch kecil penyimpan kabel dan headphone lipat yang siap digunakan di kafe maupun transportasi umum."
  }
];

export const faqs = [
  {
    id: "faq-1",
    category: "pesanan",
    question: "Bagaimana cara melacak pesanan saya?",
    answer: "Buka menu Akun -> Riwayat Pesanan -> Lacak Paket. Nomor resi kurir dan status berkala akan otomatis tertera segera setelah pesanan diserahkan kepada kurir pengiriman."
  },
  {
    id: "faq-2",
    category: "pesanan",
    question: "Berapa lama estimasi pengiriman pesanan?",
    answer: "Untuk pengiriman Instant/Same Day di area Jabodetabek berkisar 3–6 jam. Pengiriman Reguler (JNE/SiCepat) memakan waktu 1–3 hari kerja untuk Pulau Jawa dan 2–5 hari kerja untuk luar Pulau Jawa."
  },
  {
    id: "faq-3",
    category: "retur",
    question: "Bagaimana kebijakan pengembalian barang (retur)?",
    answer: "NusaShop memberikan garansi pengembalian 7 hari sejak barang diterima untuk produk yang cacat pabrik, salah kirim, atau tidak sesuai deskripsi. Anda cukup mengajukan retur melalui halaman Riwayat Pesanan."
  },
  {
    id: "faq-4",
    category: "pembayaran",
    question: "Metode pembayaran apa saja yang didukung?",
    answer: "Kami menerima Virtual Account (BCA, Mandiri, BNI, BRI), QRIS (GoPay, OVO, Dana, ShopeePay), dan Kartu Kredit/Debit berlogo Visa dan Mastercard."
  },
  {
    id: "faq-5",
    category: "retur",
    question: "Kapan dana pengembalian (refund) akan cair?",
    answer: "Setelah barang retur diterima dan diverifikasi oleh tim NusaShop (maksimal 1x24 jam), dana refund akan langsung ditransfer ke rekening bank atau dompet digital Anda."
  }
];
