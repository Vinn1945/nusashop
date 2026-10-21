import "./styles/main.css";



import { renderAuth, setupAuthEvents } from './pages/auth.js';



function z() {



  return {



    theme: "light",



    user: null, // Tamu (Guest) secara default



    registeredUsers: [



      {



        name: "Alya Putri",



        email: "alya.putri@email.com",



        phone: "0812 3456 7890",



        avatar: null,



        initials: "AP",



        status: "Anggota Prioritas NusaShop",



        password: "password123",



        isLoggedIn: true



      }



    ],



    address: {



      fullName: "Alya Putri",



      phone: "0812 3456 7890",



      street: "Jl. Melati No. 18, Tebet Barat",



      province: "DKI Jakarta",



      city: "Jakarta Selatan",



      district: "Tebet",



      postalCode: "12810",



      notes: "Rumah pagar putih, titipkan ke penerima.",



      tag: "Rumah · Alamat utama",



      isDefault: !0,



    },



    cart: [



      {



        productId: "nusasound-air-anc",



        name: "NusaSound Air ANC",



        variant: "Midnight Blue",



        price: 899e3,



        originalPrice: 1099e3,



        qty: 1,



        image: "/assets/images/products/nusasound-air-anc.jpg",



      },



      {



        productId: "keyspace-k75",



        name: "KeySpace K75",



        variant: "Ivory · Switch brown",



        price: 549e3,



        originalPrice: 649e3,



        qty: 1,



        image: "/assets/images/products/keyspace-k75.jpg",



      },



    ],



    appliedCoupon: "NUSA100",



    courier: {



      id: "reguler",



      name: "Reguler",



      estimation: "Estimasi tiba 7–8 Oktober 2026",



      cost: 2e4,



    },



    paymentMethod: {



      id: "va-bca",



      name: "BCA Virtual Account",



      type: "bank",



      accountNumber: "8077708123456789",



      instructions:



        "Transfer ke nomor Virtual Account BCA di atas sebelum 24 jam.",



    },



    wishlist: [



      "nusasound-air-anc",



      "keyspace-k75",



      "luma-desk-mini",



      "daily-flask-600",



    ],



    orders: [



      {



        id: "NS-261005-0184",



        date: "5 Oktober 2026",



        paidAt: "5 Oktober 2026 · 10.32 WIB",



        status: "dikirim",



        statusLabel: "Sedang dikirim",



        courierName: "Kurir reguler",



        resi: "NSREG2610050184",



        deliveryEstimate: "7–8 Oktober 2026",



        recipient: {



          name: "Alya Putri",



          phone: "0812 3456 7890",



          address:



            "Jl. Melati No. 18, Tebet Barat, Tebet, Jakarta Selatan, DKI Jakarta 12810",



        },



        items: [



          {



            id: "nusasound-air-anc",



            name: "NusaSound Air ANC",



            variant: "Midnight Blue",



            qty: 1,



            price: 899e3,



            originalPrice: 1099e3,



            image: "/assets/images/products/nusasound-air-anc.jpg",



          },



          {



            id: "keyspace-k75",



            name: "KeySpace K75",



            variant: "Ivory · Switch brown",



            qty: 1,



            price: 549e3,



            originalPrice: 649e3,



            image: "/assets/images/products/keyspace-k75.jpg",



          },



        ],



        subtotal: 1448e3,



        discount: 1e5,



        discountCode: "NUSA100",



        shipping: 2e4,



        total: 1368e3,



        timeline: [



          {



            title: "Sedang dikirim",



            time: "6 Oktober 2026 · 09.15",



            description:



              "Paket berangkat dari hub Jakarta Selatan menuju alamatmu.",



            active: !0,



          },



          {



            title: "Tiba di pusat sortir",



            time: "6 Oktober 2026 · 05.40",



            description: "Paket diterima di pusat sortir Jakarta.",



            active: !1,



          },



          {



            title: "Diserahkan ke kurir",



            time: "5 Oktober 2026 · 16.20",



            description: "NusaShop telah menyerahkan paket kepada kurir.",



            active: !1,



          },



          {



            title: "Pesanan dikemas",



            time: "5 Oktober 2026 · 13.10",



            description: "Barang diperiksa dan dikemas oleh NusaShop.",



            active: !1,



          },



          {



            title: "Pembayaran diterima",



            time: "5 Oktober 2026 · 10.32",



            description: "Transfer bank senilai Rp1.368.000 telah diterima.",



            active: !1,



          },



        ],



        refund: null,



      },



      {



        id: "NS-260920-0062",



        date: "20 September 2026",



        paidAt: "20 September 2026 · 14.10 WIB",



        status: "selesai",



        statusLabel: "Selesai",



        courierName: "Kurir reguler",



        resi: "NSREG2609200062",



        deliveryEstimate: "22 September 2026",



        recipient: {



          name: "Alya Putri",



          phone: "0812 3456 7890",



          address:



            "Jl. Melati No. 18, Tebet Barat, Tebet, Jakarta Selatan, DKI Jakarta 12810",



        },



        items: [



          {



            id: "daily-flask-600",



            name: "Daily Flask 600 ml",



            variant: "Pastel Purple",



            qty: 1,



            price: 149e3,



            originalPrice: 189e3,



            image: "/assets/images/products/daily-flask-600.jpg",



          },



        ],



        subtotal: 149e3,



        discount: 0,



        discountCode: null,



        shipping: 15e3,



        total: 164e3,



        timeline: [



          {



            title: "Paket telah diterima",



            time: "22 September 2026 · 11.20",



            description: "Paket diterima oleh Alya Putri (yang bersangkutan).",



            active: !0,



          },



        ],



        refund: null,



      },



      {



        id: "NS-260915-0031",



        date: "15 September 2026",



        paidAt: "-",



        status: "dibatalkan",



        statusLabel: "Dibatalkan",



        courierName: "Kurir reguler",



        resi: "-",



        deliveryEstimate: "-",



        recipient: {



          name: "Alya Putri",



          phone: "0812 3456 7890",



          address:



            "Jl. Melati No. 18, Tebet Barat, Tebet, Jakarta Selatan, DKI Jakarta 12810",



        },



        items: [



          {



            id: "luma-desk-mini",



            name: "Luma Desk Mini",



            variant: "Soft Blue",



            qty: 1,



            price: 299e3,



            originalPrice: 299e3,



            image: "/assets/images/products/luma-desk-mini.jpg",



          },



        ],



        subtotal: 299e3,



        discount: 0,



        discountCode: null,



        shipping: 0,



        total: 299e3,



        timeline: [



          {



            title: "Pesanan dibatalkan",



            time: "16 September 2026 · 10.00",



            description: "Waktu pembayaran telah melewati batas 24 jam.",



            active: !0,



          },



        ],



        refund: null,



      },



    ],



  };



}



const y = [



    {



      id: "nusasound-air-anc",



      name: "NusaSound Air ANC",



      category: "Elektronik",



      subcategory: "Audio",



      categoryKey: "elektronik",



      type: "Headphone wireless",



      tagline: "Headphone wireless untuk fokus dan waktu santai.",



      price: 899e3,



      originalPrice: 1099e3,



      badge: "Hemat 18%",



      badgeType: "discount",



      rating: 4.8,



      reviewsCount: 24,



      sku: "NS-AIR-01",



      origin: "Jakarta · Dikirim dari NusaShop",



      description:



        "Active noise cancellation, koneksi Bluetooth 5.3, dan baterai hingga 40 jam dalam satu perangkat ringkas.",



      stock: 24,



      colors: [



        {



          id: "midnight-blue",



          name: "Midnight Blue",



          hex: "#1e3a8a",



          default: !0,



        },



        { id: "sand-ivory", name: "Sand / Ivory", hex: "#e7dec8" },



        { id: "lavender", name: "Lavender", hex: "#a78bfa" },



      ],



      image: "/assets/images/products/nusasound-air-anc.jpg",



      gallery: [



        "/assets/images/details/nusasound-1.jpg",



        "/assets/images/details/nusasound-2.jpg",



        "/assets/images/details/nusasound-3.jpg",



        "/assets/images/details/nusasound-4.jpg",



      ],



      specs: {



        Konektivitas: "Bluetooth 5.3 · USB-C",



        Baterai: "Hingga 40 jam (ANC nonaktif)",



        Berat: "250 gram",



        "Dalam kotak": "Headphone, kabel USB-C, pouch, panduan",



      },



      reviews: [



        {



          author: "Rani A.",



          rating: 5,



          date: "September 2026 · Contoh",



          comment:



            "Nyaman dipakai sambil bekerja. Bantalan terasa lembut dan koneksinya mudah.",



        },



        {



          author: "Dimas R.",



          rating: 5,



          date: "September 2026 · Contoh",



          comment: "Warna sesuai ilustrasi dan desainnya ringkas saat dilipat.",



        },



        {



          author: "Bayu S.",



          rating: 4,



          date: "Agustus 2026 · Contoh",



          comment:



            "Suara jernih dan bass tergolong proporsional, peredam kebisingan berfungsi baik.",



        },



      ],



    },



    {



      id: "keyspace-k75",



      name: "KeySpace K75",



      category: "Elektronik",



      subcategory: "Keyboard mekanikal",



      categoryKey: "elektronik",



      type: "Keyboard mekanikal",



      tagline:



        "Keyboard mekanikal 75% dengan tata letak ringkas dan respons taktil yang presisi.",



      price: 549e3,



      originalPrice: 649e3,



      badge: "Baru",



      badgeType: "new",



      rating: 4.7,



      reviewsCount: 18,



      sku: "NS-KEY-75",



      origin: "Jakarta · Dikirim dari NusaShop",



      description:



        "Tata letak 75% ringkas hemat ruang meja, keycap PBT dye-sub, switch hot-swappable tactile, dan konektivitas tri-mode nirkabel.",



      stock: 18,



      colors: [



        {



          id: "ivory-brown",



          name: "Ivory · Switch brown",



          hex: "#f5ebe0",



          default: !0,



        },



        { id: "slate-red", name: "Slate Blue · Switch red", hex: "#334155" },



      ],



      image: "/assets/images/products/keyspace-k75.jpg",



      gallery: ["/assets/images/products/keyspace-k75.jpg"],



      specs: {



        "Tata Letak": "75% ANSI (84 tombol)",



        Switch: "Taktil Brown Switch (Hot-swap)",



        Koneksi: "Bluetooth 5.0, 2.4GHz Dongle, Kabel Type-C",



        "Kapasitas Baterai": "3.000 mAh rechargeable",



      },



      reviews: [



        {



          author: "Andi W.",



          rating: 5,



          date: "September 2026 · Contoh",



          comment:



            "Ketik seharian jadi jauh lebih memuaskan. Suara switch mantap tidak berisik.",



        },



      ],



    },



    {



      id: "luma-desk-mini",



      name: "Luma Desk Mini",



      category: "Rumah & living",



      subcategory: "Pencahayaan",



      categoryKey: "rumah",



      type: "Lampu meja LED",



      tagline:



        "Lampu meja LED dengan temperatur cahaya lembut untuk kenyamanan mata.",



      price: 299e3,



      originalPrice: 299e3,



      badge: "Baru",



      badgeType: "new",



      rating: 4.9,



      reviewsCount: 12,



      sku: "NS-LUM-01",



      origin: "Jakarta · Dikirim dari NusaShop",



      description:



        "Desain minimalis ramping dengan sudut pencahayaan fleksibel, 3 tingkat kecerahan, dan pengisian daya USB.",



      stock: 30,



      colors: [



        { id: "soft-blue", name: "Soft Blue", hex: "#93c5fd", default: !0 },



        { id: "pure-white", name: "Pure White", hex: "#ffffff" },



      ],



      image: "/assets/images/products/luma-desk-mini.jpg",



      gallery: ["/assets/images/products/luma-desk-mini.jpg"],



      specs: {



        Daya: "5 Watt LED hemat energi",



        "Temperatur Warna": "3000K - 5500K (Warm to Cool)",



        Bahan: "Aluminium matte & ABS tahan gores",



        Kabel: "USB Type-C (1.5 meter disertakan)",



      },



      reviews: [



        {



          author: "Maya K.",



          rating: 5,



          date: "Oktober 2026 · Contoh",



          comment:



            "Warnanya manis sekali di meja kerja. Pencahayaannya merata dan tidak silau.",



        },



      ],



    },



    {



      id: "daily-flask-600",



      name: "Daily Flask 600 ml",



      category: "Rumah & living",



      subcategory: "Perlengkapan minum",



      categoryKey: "rumah",



      type: "Tumbler stainless",



      tagline:



        "Tumbler stainless steel insulasi ganda tahan dingin dan panas seharian.",



      price: 149e3,



      originalPrice: 189e3,



      badge: "Hemat 21%",



      badgeType: "discount",



      rating: 4.8,



      reviewsCount: 31,



      sku: "NS-FLK-02",



      origin: "Jakarta · Dikirim dari NusaShop",



      description:



        "Bahan food-grade SUS304 vacuum insulated, anti bocor, dengan gagang ergonomis yang nyaman dibawa bepergian.",



      stock: 50,



      colors: [



        {



          id: "pastel-purple",



          name: "Pastel Purple",



          hex: "#c4b5fd",



          default: !0,



        },



        { id: "sage-green", name: "Sage Green", hex: "#a7f3d0" },



      ],



      image: "/assets/images/products/daily-flask-600.jpg",



      gallery: ["/assets/images/products/daily-flask-600.jpg"],



      specs: {



        Kapasitas: "600 ml",



        Material: "SUS 304 Stainless Steel Double Wall",



        Insulasi: "Panas hingga 12 jam, Dingin hingga 24 jam",



        Tutup: "BPA Free dengan seal silikon anti bocor",



      },



      reviews: [



        {



          author: "Budi T.",



          rating: 5,



          date: "September 2026 · Contoh",



          comment:



            "Es batu masih bertahan seharian penuh di kantor. Finishing catnya doff dan mantap digenggam.",



        },



      ],



    },



    {



      id: "urban-daypack-18l",



      name: "Urban Daypack 18L",



      category: "Fashion & aksesori",



      subcategory: "Tas sehari-hari",



      categoryKey: "fashion",



      type: "Tas sehari-hari",



      tagline:



        "Tas ransel harian tahan cipratan air dengan kompartemen laptop terlindungi.",



      price: 329e3,



      originalPrice: 399e3,



      badge: "Pilihan editor",



      badgeType: "editor",



      rating: 4.7,



      reviewsCount: 16,



      sku: "NS-BAG-18",



      origin: "Jakarta · Dikirim dari NusaShop",



      description:



        "Kapasitas 18 liter optimal untuk komuter modern. Dilengkapi slot laptop empuk hingga 14.5 inci dan kompartemen botol.",



      stock: 22,



      colors: [



        { id: "olive-green", name: "Olive Green", hex: "#4b5320", default: !0 },



        { id: "matte-black", name: "Matte Black", hex: "#1f2937" },



      ],



      image: "/assets/images/products/urban-daypack-18l.jpg",



      gallery: ["/assets/images/products/urban-daypack-18l.jpg"],



      specs: {



        Kapasitas: "18 Liter",



        Material: "Polyester DWR Water-Repellent",



        "Slot Laptop": "Hingga 14.5 inci dengan padding busa tebal",



        Dimensi: "42 x 29 x 14 cm",



      },



      reviews: [



        {



          author: "Siti N.",



          rating: 5,



          date: "Oktober 2026 · Contoh",



          comment:



            "Jahitan rapi, tidak bikin punggung pegal. Warnanya elegan saat dipakai kerja maupun ngopi.",



        },



      ],



    },



    {



      id: "nusabeat-pocket",



      name: "NusaBeat Pocket",



      category: "Elektronik",



      subcategory: "Audio portable",



      categoryKey: "elektronik",



      type: "Speaker portable",



      tagline:



        "Speaker bluetooth mungil dengan dentuman bass solid dan sertifikasi tahan air IPX5.",



      price: 249e3,



      originalPrice: 299e3,



      badge: "Hemat 17%",



      badgeType: "discount",



      rating: 4.6,



      reviewsCount: 20,



      sku: "NS-SPK-01",



      origin: "Jakarta · Dikirim dari NusaShop",



      description:



        "Kompak di genggaman tangan, waktu putar hingga 10 jam, dan dilengkapi lanyard anyam premium.",



      stock: 25,



      colors: [



        { id: "warm-sand", name: "Warm Sand", hex: "#d6c7b2", default: !0 },



        { id: "charcoal", name: "Charcoal Black", hex: "#262626" },



      ],



      image: "/assets/images/products/nusabeat-pocket.jpg",



      gallery: ["/assets/images/products/nusabeat-pocket.jpg"],



      specs: {



        "Daya Keluaran": "5 Watt RMS",



        Koneksi: "Bluetooth 5.3 jangkauan 10 meter",



        Ketahanan: "IPX5 Splash & Dust Resistant",



        Baterai: "1200 mAh (hingga 10 jam pemutaran)",



      },



      reviews: [



        {



          author: "Rizky P.",



          rating: 5,



          date: "September 2026 · Contoh",



          comment:



            "Kecil-kecil suaranya bulat dan tidak cempreng. Praktis dibawa ke mana-mana.",



        },



      ],



    },



  ],



  H = [



    {



      id: "headphone-fokus",



      title: "Headphone untuk fokus",



      tag: "Audio & Kerja",



      summary:



        "Kenali ANC, daya tahan baterai, dan kenyamanan sebelum membeli perangkat andalanmu.",



      image: "/assets/images/banners/article-headphone.jpg",



      readTime: "3 menit membaca",



      content:



        "Suasana kerja yang kondusif seringkali membutuhkan keheningan yang terkurasi. Fitur Active Noise Cancellation (ANC) pada headphone modern bekerja dengan mendeteksi frekuensi suara luar dan memancarkan gelombang inversi untuk meredam kebisingan secara real-time. Dipadukan dengan bantalan memory-foam yang ramah di telinga, sesi kerja mendalam jadi jauh lebih produktif.",



    },



    {



      id: "meja-kecil-ide-besar",



      title: "Meja kecil, ide besar",



      tag: "Inspirasi Ruang",



      summary:



        "Tiga cara membuat sudut kerja lebih nyaman tanpa banyak barang berantakan.",



      image: "/assets/images/banners/article-desk.jpg",



      readTime: "4 menit membaca",



      content:



        "Ruang yang terbatas bukan halangan untuk produktivitas maksimal. Kuncinya ada pada pemilihan barang yang multifungsi: keyboard mekanikal dengan layout 75% yang menyisakan ruang bebas untuk mouse, lampu meja LED dengan arm terintegrasi, dan pengaturan kabel minimalis yang tersembunyi rapi di balik meja.",



    },



    {



      id: "isi-tas-harianmu",



      title: "Isi tas harianmu",



      tag: "Gaya Hidup",



      summary:



        "Pilihan ringan dan fungsional untuk rutinitas di luar rumah yang tetap rapi dan siap.",



      image: "/assets/images/banners/article-bag.jpg",



      readTime: "2 menit membaca",



      content:



        "Membawa barang penting harian tidak harus membuat tas terasa berat. Pilih ransel dengan material tahan air ringan, tumbler stainless berinsulasi untuk kebutuhan hidrasi sepanjang hari, dan pouch kecil penyimpan kabel dan headphone lipat yang siap digunakan di kafe maupun transportasi umum.",



    },



  ],



  W = [



    {



      id: "faq-1",



      category: "pesanan",



      question: "Bagaimana cara melacak pesanan?",



      answer:



        "Buka menu Akun -> Pesanan saya -> Lacak paket. Resi pengiriman dan status berkala akan otomatis tertera segera setelah kurir melakukan pemindaian awal.",



    },



    {



      id: "faq-2",



      category: "pembayaran",



      question: "Kapan pembayaran saya dikonfirmasi?",



      answer:



        "Pembayaran melalui Virtual Account dikonfirmasi otomatis dalam 1–3 menit. Jika status belum berubah setelah 30 menit, hubungi tim bantuan NusaShop dengan menyertakan bukti transfer.",



    },



    {



      id: "faq-3",



      category: "pengembalian",



      question: "Berapa lama estimasi pengembalian dana?",



      answer:



        "Estimasi 3–5 hari kerja setelah barang tiba di pusat retur NusaShop dan lolos verifikasi kelayakan pengembalian.",



    },



    {



      id: "faq-4",



      category: "pesanan",



      question: "Bisa mengganti alamat setelah checkout?",



      answer:



        "Perubahan alamat hanya dapat dilakukan sebelum status pesanan beralih ke 'Pesanan dikemas'. Segera hubungi customer care NusaShop untuk bantuan koreksi alamat.",



    },



    {



      id: "faq-5",



      category: "pengembalian",



      question: "Apakah ongkir awal dikembalikan saat retur produk?",



      answer:



        "Ongkir awal tidak dikembalikan untuk pengembalian barang atas alasan perubahan preferensi. Untuk produk cacat pabrik atau salah kirim, ongkir akan diganti penuh oleh NusaShop.",



    },



  ],



  L = "nusashop_state_v1";



class O {



  login(email, pwd) {



    email = (email || "").trim().toLowerCase();



    if (email === "alya.putri@email.com" || email === "alya@email.com") {



      this.state.user = {



        name: "Alya Putri",



        email: "alya.putri@email.com",



        phone: "0812 3456 7890",



        avatar: null,



        initials: "AP",



        status: "Anggota Prioritas NusaShop",



        isLoggedIn: true



      };



      this.saveState();



      return { success: true, user: this.state.user };



    }



    const found = (this.state.registeredUsers || []).find(u => u.email.toLowerCase() === email);



    if (found) {



      this.state.user = { ...found, isLoggedIn: true };



      this.saveState();



      return { success: true, user: this.state.user };



    }



    const namePart = email.split('@')[0].replace(/[._-]/g, ' ');



    const displayName = namePart.charAt(0).toUpperCase() + namePart.slice(1);



    const initials = displayName.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() || "NS";



    const newUser = {



      name: displayName,



      email: email,



      phone: "0812 8888 9999",



      avatar: null,



      initials: initials,



      status: "Anggota NusaShop",



      isLoggedIn: true



    };



    this.state.user = newUser;



    if (!this.state.registeredUsers) this.state.registeredUsers = [];



    this.state.registeredUsers.push({ ...newUser, password: pwd });



    this.saveState();



    return { success: true, user: newUser };



  }







  register(name, email, phone, pwd) {



    name = (name || "").trim();



    email = (email || "").trim().toLowerCase();



    phone = (phone || "").trim();



    const initials = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() || "NS";



    const newUser = {



      name,



      email,



      phone,



      avatar: null,



      initials,



      status: "Anggota NusaShop",



      isLoggedIn: true



    };



    if (!this.state.registeredUsers) this.state.registeredUsers = [];



    this.state.registeredUsers.push({ ...newUser, password: pwd });



    this.state.user = newUser;



    this.saveState();



    return { success: true, user: newUser };



  }







  logout() {



    this.state.user = null;



    this.saveState();



  }







  constructor() {



    ((this.listeners = new Set()), (this.state = this.loadState()));



  }



  loadState() {



    try {



      const a = localStorage.getItem(L);



      if (a) {
        const parsed = JSON.parse(a);
        if (parsed?.user?.avatar && typeof parsed.user.avatar === "string" && parsed.user.avatar.includes("alya.png")) {
          parsed.user.avatar = null;
        }
        return parsed;
      }



    } catch (a) {



      console.warn("Failed to load local storage:", a);



    }



    return z();



  }



  saveState() {



    try {



      localStorage.setItem(L, JSON.stringify(this.state));



    } catch (a) {



      console.warn("Failed to save local storage:", a);



    }



    this.notify();



  }



  subscribe(a) {



    return (this.listeners.add(a), () => this.listeners.delete(a));



  }



  notify() {



    for (const a of this.listeners) a(this.state);



  }



  getState() {



    return this.state;



  }



  formatRupiah(a) {



    return typeof a != "number" ? "Rp0" : "Rp" + a.toLocaleString("id-ID");



  }



  setTheme(a) {



    ((this.state.theme = a),



      document.documentElement.setAttribute("data-theme", a),



      this.saveState());



  }



  toggleTheme() {



    const a = this.state.theme === "dark" ? "light" : "dark";



    return (this.setTheme(a), a);



  }



  getCartTotals() {



    var l;



    const a = this.state.cart || [],



      e = a.reduce((d, c) => d + c.price * c.qty, 0);



    let t = 0;



    this.state.appliedCoupon === "NUSA100" && e >= 1e6 && (t = 1e5);



    const i =



        a.length > 0



          ? (((l = this.state.courier) == null ? void 0 : l.cost) ?? 2e4)



          : 0,



      n = Math.max(0, e - t + i),



      r = a.reduce((d, c) => d + c.qty, 0);



    return {



      subtotal: e,



      discount: t,



      discountCode: t > 0 ? this.state.appliedCoupon : null,



      shipping: i,



      total: n,



      itemCount: r,



    };



  }



  addToCart(a, e = null, t = 1) {



    var l;



    const i = y.find((d) => d.id === a);



    if (!i) return !1;



    const n =



        e ||



        (i.colors && ((l = i.colors[0]) == null ? void 0 : l.name)) ||



        "Standar",



      r = this.state.cart.findIndex(



        (d) => d.productId === a && d.variant === n,



      );



    if (r > -1) {



      const d = Math.min(5, this.state.cart[r].qty + t);



      this.state.cart[r].qty = d;



    } else



      this.state.cart.push({



        productId: i.id,



        name: i.name,



        variant: n,



        price: i.price,



        originalPrice: i.originalPrice,



        qty: Math.min(5, t),



        image: i.image,



      });



    return (this.saveState(), !0);



  }



  updateCartQty(a, e) {



    a < 0 ||



      a >= this.state.cart.length ||



      (e <= 0



        ? this.removeFromCart(a)



        : ((this.state.cart[a].qty = Math.min(5, Math.max(1, e))),



          this.saveState()));



  }



  removeFromCart(a) {



    a >= 0 &&



      a < this.state.cart.length &&



      (this.state.cart.splice(a, 1), this.saveState());



  }



  applyCoupon(a) {



    const e = (a || "").trim().toUpperCase(),



      { subtotal: t } = this.getCartTotals();



    return e === "NUSA100"



      ? t < 1e6



        ? {



            success: !1,



            message: "Kode NUSA100 memerlukan minimal belanja Rp1.000.000.",



          }



        : ((this.state.appliedCoupon = "NUSA100"),



          this.saveState(),



          {



            success: !0,



            message: "Kode NUSA100 berhasil diterapkan! Potongan Rp100.000.",



          })



      : {



          success: !1,



          message: "Kode promo tidak valid atau sudah kedaluwarsa.",



        };



  }



  removeCoupon() {



    ((this.state.appliedCoupon = null), this.saveState());



  }



  toggleWishlist(a) {



    const e = this.state.wishlist || [],



      t = e.indexOf(a);



    let i = !1;



    return (



      t > -1 ? (e.splice(t, 1), (i = !1)) : (e.push(a), (i = !0)),



      (this.state.wishlist = e),



      this.saveState(),



      i



    );



  }



  isInWishlist(a) {



    return (this.state.wishlist || []).includes(a);



  }



  setAddress(a) {



    ((this.state.address = { ...this.state.address, ...a }), this.saveState());



  }



  setCourier(a) {



    ((this.state.courier = { ...this.state.courier, ...a }), this.saveState());



  }



  setPaymentMethod(a) {



    ((this.state.paymentMethod = { ...this.state.paymentMethod, ...a }),



      this.saveState());



  }



  placeOrder() {



    var h, j, v;



    const {



        subtotal: a,



        discount: e,



        discountCode: t,



        shipping: i,



        total: n,



      } = this.getCartTotals(),



      r = [...this.state.cart],



      k = {



        id: `NS-261005-${Math.floor(1e3 + Math.random() * 9e3)}`,



        date: "5 Oktober 2026",



        paidAt: "5 Oktober 2026 · 10.32 WIB",



        status: "dikirim",



        statusLabel: "Sedang dikirim",



        courierName:



          ((h = this.state.courier) == null ? void 0 : h.name) ||



          "Kurir reguler",



        resi: `NSREG${Date.now().toString().slice(-10)}`,



        deliveryEstimate:



          ((v = (j = this.state.courier) == null ? void 0 : j.estimation) ==



          null



            ? void 0



            : v.replace("Estimasi tiba ", "")) || "7–8 Oktober 2026",



        recipient: {



          name: this.state.address.fullName,



          phone: this.state.address.phone,



          address: `${this.state.address.street}, ${this.state.address.district}, ${this.state.address.city}, ${this.state.address.province} ${this.state.address.postalCode}`,



        },



        items: r,



        subtotal: a,



        discount: e,



        discountCode: t,



        shipping: i,



        total: n,



        timeline: [



          {



            title: "Sedang dikirim",



            time: "6 Oktober 2026 · 09.15",



            description:



              "Paket berangkat dari hub Jakarta Selatan menuju alamatmu.",



            active: !0,



          },



          {



            title: "Tiba di pusat sortir",



            time: "6 Oktober 2026 · 05.40",



            description: "Paket diterima di pusat sortir Jakarta.",



            active: !1,



          },



          {



            title: "Diserahkan ke kurir",



            time: "5 Oktober 2026 · 16.20",



            description: "NusaShop telah menyerahkan paket kepada kurir.",



            active: !1,



          },



          {



            title: "Pesanan dikemas",



            time: "5 Oktober 2026 · 13.10",



            description: "Barang diperiksa dan dikemas oleh NusaShop.",



            active: !1,



          },



          {



            title: "Pembayaran diterima",



            time: "5 Oktober 2026 · 10.32",



            description: `Transfer bank senilai ${this.formatRupiah(n)} telah diterima.`,



            active: !1,



          },



        ],



        refund: null,



      };



    return (



      this.state.orders.unshift(k),



      (this.state.cart = []),



      this.saveState(),



      k



    );



  }



  toggleOrderStatus(a) {



    const e = this.state.orders.find((t) => t.id === a);



    if (e)



      return (



        e.status === "dikirim"



          ? ((e.status = "selesai"),



            (e.statusLabel = "Selesai"),



            e.timeline.some((t) => t.title.includes("diterima")) ||



              e.timeline.unshift({



                title: "Paket telah diterima",



                time: "8 Oktober 2026 · 14.15",



                description:



                  "Paket diterima oleh Alya Putri (yang bersangkutan). Pengembalian dapat diajukan dalam 7 hari.",



                active: !0,



              }))



          : e.status === "selesai" &&



            ((e.status = "dikirim"),



            (e.statusLabel = "Sedang dikirim"),



            (e.timeline = e.timeline.filter(



              (t) => !t.title.includes("diterima"),



            ))),



        this.saveState(),



        e.status



      );



  }



  submitReturnRequest(



    a,



    { itemId: e, reason: t, description: i, photoName: n },



  ) {



    const r = this.state.orders.find((k) => k.id === a);



    if (!r) return null;



    const l = r.items.find((k) => k.id === e) || r.items[0],



      d = l.price * (l.qty || 1),



      c = r.subtotal > 0 ? Math.round((d / r.subtotal) * r.discount) : 0,



      b = Math.max(0, d - c);



    return (



      (r.refund = {



        submittedAt: "9 Oktober 2026 · 11.20 WIB",



        status: "sedang_ditinjau",



        statusLabel: "Sedang ditinjau tim NusaShop",



        itemId: l.id,



        itemName: l.name,



        itemPrice: l.price,



        discountAllocation: c,



        estimatedRefund: b,



        reason: t,



        description: i,



        photoName: n || "bukti-headphone.jpg (1,8 MB)",



      }),



      this.saveState(),



      r.refund



    );



  }



  resetDemoData() {



    ((this.state = z()), this.saveState());



  }



}



const o = new O();



class J {



  constructor() {



    ((this.container = null), this.init());



  }



  init() {



    let a = document.getElementById("toast-container");



    (a ||



      ((a = document.createElement("div")),



      (a.id = "toast-container"),



      (a.className = "toast-container"),



      document.body.appendChild(a)),



      (this.container = a));



  }



  show({ title: a, message: e, type: t = "success", duration: i = 3500 }) {



    this.container || this.init();



    const n = document.createElement("div");



    n.className = `toast toast-${t}`;



    let r =



      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';



    (t === "error"



      ? (r =



          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>')



      : t === "warning" &&



        (r =



          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'),



      (n.innerHTML = `



      <div style="color: inherit; display:flex; margin-top:2px;">${r}</div>



      <div class="toast-body">



        <div class="toast-title">${a}</div>



        <div class="toast-msg">${e}</div>



      </div>



      <button class="toast-close" aria-label="Tutup">&times;</button>



    `),



      n.querySelector(".toast-close").addEventListener("click", () => {



        this.remove(n);



      }),



      this.container.appendChild(n),



      setTimeout(() => {



        this.remove(n);



      }, i));



  }



  remove(a) {



    ((a.style.opacity = "0"),



      (a.style.transform = "translateY(10px) scale(0.95)"),



      setTimeout(() => {



        a.parentNode && a.parentNode.removeChild(a);



      }, 200));



  }



}



const m = new J();



function R() {



  const s = o.getState(),



    { itemCount: a } = o.getCartTotals(),



    e = (s.wishlist || []).length;







  const currentHash = window.location.hash || "#/";



  const isWishlist = currentHash.startsWith("#/wishlist");



  const isCart = currentHash.startsWith("#/keranjang");



  const isAccount = currentHash.startsWith("#/akun") || currentHash.startsWith("#/lacak") || currentHash.startsWith("#/retur");



  const isMasuk = currentHash.startsWith("#/masuk");



  const isDaftar = currentHash.startsWith("#/daftar");







  // Determine active category for subnav penanda



  let activeCat = "all";



  if (currentHash.includes("kategori=elektronik") || currentHash.startsWith("#/produk/nusasound") || currentHash.startsWith("#/produk/keyspace") || currentHash.startsWith("#/produk/nusabeat")) {



    activeCat = "elektronik";



  } else if (currentHash.includes("kategori=rumah") || currentHash.startsWith("#/produk/luma") || currentHash.startsWith("#/produk/daily")) {



    activeCat = "rumah";



  } else if (currentHash.includes("kategori=fashion") || currentHash.startsWith("#/produk/urban")) {



    activeCat = "fashion";



  } else if (currentHash.includes("promo=true")) {



    activeCat = "promo";



  } else {



    activeCat = "all";



  }



  return `



    <!-- Top Announcement Bar -->



    <aside class="announcement-bar" aria-label="Pengumuman promosi">



      <div class="container announcement-content">



        <div class="announcement-left">



          <span>Pilihan baru untuk keseharianmu. Kode <strong class="announcement-code" id="announcement-copy-code" title="Klik untuk menyalin">NUSA100</strong> untuk belanja pertama*</span>



        </div>



        <div class="announcement-right">



          <a href="#/bantuan">Pusat bantuan</a>



          <span>·</span>



          <span>Bahasa Indonesia</span>



        </div>



      </div>



    </aside>







    <!-- Main Navigation Bar -->



    <header class="navbar" role="banner">



      <div class="container navbar-inner">



        <!-- Brand Logo -->



        <a href="#/" class="brand-logo" aria-label="NusaShop Beranda">



          <div class="brand-icon">



            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">



              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>



              <line x1="3" y1="6" x2="21" y2="6"/>



              <path d="M16 10a4 4 0 0 1-8 0"/>



            </svg>



          </div>



          <span>NusaShop</span>



        </a>







        <!-- Search Input with Live Autocomplete -->



        <div class="search-container" id="nav-search-container">



          <div class="search-input-wrapper">



            <span class="search-icon">



              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <circle cx="11" cy="11" r="8"/>



                <line x1="21" y1="21" x2="16.65" y2="16.65"/>



              </svg>



            </span>



            <input 



              type="text" 



              class="search-input" 



              id="global-search-input" 



              placeholder="Cari yang kamu butuhkan (misal: headphone, keyboard, tumbler)..." 



              autocomplete="off"



            />



          </div>



          <div class="search-dropdown" id="search-dropdown-menu"></div>



        </div>







        <!-- Action Buttons -->



        <div class="navbar-actions">



          <!-- Theme Toggle Button -->



          <button class="theme-toggle-btn" id="theme-toggle-btn" title="Ganti Mode Gelap / Terang" aria-label="Ganti Tema">



            ${



              s.theme === "dark"



                ? `



              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <circle cx="12" cy="12" r="5"/>



                <line x1="12" y1="1" x2="12" y2="3"/>



                <line x1="12" y1="21" x2="12" y2="23"/>



                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>



                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>



                <line x1="1" y1="12" x2="3" y2="12"/>



                <line x1="21" y1="12" x2="23" y2="12"/>



                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>



                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>



              </svg>



            `



                : `



              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>



              </svg>



            `



            }



          </button>







          <!-- Wishlist -->



          <a href="#/wishlist" class="nav-action-btn ${isWishlist ? "active" : ""}" title="Wishlist pilihanmu" aria-label="Wishlist">



            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlist ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">



              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>



            </svg>



            ${e > 0 ? `<span class="badge-count">${e}</span>` : ""}



          </a>







          <!-- Cart -->



          <a href="#/keranjang" class="nav-action-btn ${isCart ? "active" : ""}" title="Keranjang belanja" aria-label="Keranjang Belanja">



            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



              <circle cx="9" cy="21" r="1"/>



              <circle cx="20" cy="21" r="1"/>



              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>



            </svg>



            ${a > 0 ? `<span class="badge-count">${a}</span>` : ""}



          </a>







          <!-- User Profile / Auth -->



          ${s.user && s.user.isLoggedIn ? `



            <div class="user-dropdown-container">
              <button class="user-profile-btn ${isAccount ? "active" : ""}" id="user-menu-trigger" aria-label="Menu Pengguna" aria-haspopup="true" aria-expanded="false">
                ${s.user.avatar && !s.user.avatar.includes('alya.png') ? `
                  <img src="${s.user.avatar}" alt="Avatar ${s.user.name}" class="user-avatar-mini" />
                ` : `
                  <div class="user-avatar-badge" aria-hidden="true">${s.user.initials || "AP"}</div>
                `}
                <span class="user-name">Halo, ${s.user.name.split(' ')[0]}</span>
                <svg class="user-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>

              <div class="user-dropdown-menu" id="user-dropdown-menu">
                <div class="user-dropdown-header">
                  <div class="user-dropdown-user-row">
                    ${s.user.avatar && !s.user.avatar.includes('alya.png') ? `
                      <img src="${s.user.avatar}" alt="Avatar ${s.user.name}" class="user-avatar-mini" style="width:36px; height:36px;" />
                    ` : `
                      <div class="user-avatar-badge user-avatar-badge-lg">${s.user.initials || "AP"}</div>
                    `}
                    <div class="user-dropdown-user-info">
                      <strong class="user-dropdown-name">${s.user.name}</strong>
                      <small class="user-dropdown-email">${s.user.email}</small>
                    </div>
                  </div>
                  <div class="user-status-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span>${s.user.status || "Anggota Prioritas NusaShop"}</span>
                  </div>
                </div>

                <div class="user-dropdown-divider"></div>

                <a href="#/akun?tab=profil" class="user-dropdown-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  Akun & Profil
                </a>

                <a href="#/akun?tab=pesanan" class="user-dropdown-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  Riwayat Pesanan
                </a>

                <a href="#/akun?tab=wishlist" class="user-dropdown-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  Wishlist Saya
                </a>

                <a href="#/akun?tab=alamat" class="user-dropdown-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Daftar Alamat
                </a>

                <a href="#/akun?tab=pengaturan" class="user-dropdown-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  Pengaturan
                </a>

                <div class="user-dropdown-divider"></div>

                <button id="nav-logout-btn" class="user-dropdown-item text-danger">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                  Keluar dari Akun
                </button>
              </div>
            </div>



          ` : `



            <div class="auth-nav-guest">



              <a href="#/masuk" class="btn btn-sm ${isMasuk ? "btn-primary" : "btn-ghost"}" style="font-weight:600;">Masuk</a>



              <a href="#/daftar" class="btn btn-sm ${isDaftar ? "btn-primary" : "btn-outline"}" style="font-weight:600;">Daftar</a>



            </div>



          `}



        </div>



      </div>







      <!-- Categories Subnav (Dengan penanda kategori aktif) -->



      <nav class="subnav" aria-label="Kategori utama">



        <div class="container subnav-inner">



          <a href="#/katalog" class="subnav-link ${activeCat === "all" ? "active" : ""}" data-cat="all">Semua kategori</a>



          <a href="#/katalog?kategori=elektronik" class="subnav-link ${activeCat === "elektronik" ? "active" : ""}" data-cat="elektronik">Elektronik</a>



          <a href="#/katalog?kategori=rumah" class="subnav-link ${activeCat === "rumah" ? "active" : ""}" data-cat="rumah">Rumah & gaya hidup</a>



          <a href="#/katalog?kategori=fashion" class="subnav-link ${activeCat === "fashion" ? "active" : ""}" data-cat="fashion">Fashion</a>



          <a href="#/katalog?promo=true" class="subnav-link ${activeCat === "promo" ? "active" : ""}" data-cat="promo" style="color: var(--color-secondary);">Promo pilihan</a>



        </div>



      </nav>



    </header>



  `;



}



function N() {



  const userMenuTrigger = document.getElementById("user-menu-trigger");
  const userDropdownContainer = userMenuTrigger ? userMenuTrigger.closest(".user-dropdown-container") : null;
  const userMenu = document.getElementById("user-dropdown-menu");

  if (userMenuTrigger && userMenu && userDropdownContainer) {
    userMenuTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = userDropdownContainer.classList.toggle("open");
      userMenu.classList.toggle("show", isOpen);
      userMenuTrigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", (e) => {
      if (!userDropdownContainer.contains(e.target)) {
        userDropdownContainer.classList.remove("open");
        userMenu.classList.remove("show");
        userMenuTrigger.setAttribute("aria-expanded", "false");
      }
    });

    userMenu.querySelectorAll(".user-dropdown-item:not(#nav-logout-btn)").forEach(item => {
      item.addEventListener("click", () => {
        userDropdownContainer.classList.remove("open");
        userMenu.classList.remove("show");
        userMenuTrigger.setAttribute("aria-expanded", "false");
      });
    });
  }







  const navLogoutBtn = document.getElementById("nav-logout-btn");



  if (navLogoutBtn) {



    navLogoutBtn.addEventListener("click", () => {



      o.logout();



      m.show({



        title: "Berhasil Keluar",



        message: "Anda telah keluar dari akun.",



        type: "info"



      });



      window.location.hash = "#/";



    });



  }



  const s = document.getElementById("theme-toggle-btn");



  s &&



    s.addEventListener("click", () => {



      o.toggleTheme();



    });



  const a = document.getElementById("announcement-copy-code");



  a &&



    a.addEventListener("click", () => {



      var n;



      ((n = navigator.clipboard) == null || n.writeText("NUSA100"),



        m.show({



          title: "Kode Promo Disalin!",



          message: "Kode NUSA100 siap digunakan di halaman keranjang.",



          type: "success",



        }));



    });



  const e = document.getElementById("global-search-input"),



    t = document.getElementById("search-dropdown-menu");



  e &&



    t &&



    (e.addEventListener("input", (n) => {



      const r = (n.target.value || "").trim().toLowerCase();



      if (!r) {



        (t.classList.remove("open"), (t.innerHTML = ""));



        return;



      }



      const l = y.filter(



        (d) =>



          d.name.toLowerCase().includes(r) ||



          d.category.toLowerCase().includes(r) ||



          d.type.toLowerCase().includes(r) ||



          d.tagline.toLowerCase().includes(r),



      );



      (l.length === 0



        ? (t.innerHTML = `



          <div style="padding: 12px; font-size: 13px; color: var(--color-ink-muted); text-align: center;">



            Tidak ditemukan produk untuk "${r}".



          </div>



        `)



        : ((t.innerHTML =



            l



              .map(



                (d) => `



          <div class="search-item" data-id="${d.id}">



            <img src="${d.image}" class="search-item-img" alt="${d.name}" />



            <div>



              <div class="search-item-title">${d.name}</div>



              <div class="search-item-price">${o.formatRupiah(d.price)}</div>



            </div>



          </div>



        `,



              )



              .join("") +



            `



          <div style="padding: 8px 12px; border-top: 1px solid var(--color-border); margin-top: 4px;">



            <a href="#/katalog?q=${encodeURIComponent(r)}" style="font-size: 12px; color: var(--color-primary); font-weight: 600; display: block; text-align: right;">



              Lihat semua hasil (${l.length}) &rarr;



            </a>



          </div>



        `),



          t.querySelectorAll(".search-item").forEach((d) => {



            d.addEventListener("click", () => {



              const c = d.getAttribute("data-id");



              (t.classList.remove("open"),



                (e.value = ""),



                (window.location.hash = `#/produk/${c}`));



            });



          })),



        t.classList.add("open"));



    }),



    e.addEventListener("keydown", (n) => {



      if (n.key === "Enter") {



        const r = e.value.trim();



        (t.classList.remove("open"),



          r && (window.location.hash = `#/katalog?q=${encodeURIComponent(r)}`));



      } else n.key === "Escape" && t.classList.remove("open");



    }),



    document.addEventListener("click", (n) => {



      n.target.closest("#nav-search-container") || t.classList.remove("open");



    }));



  const currentHash = window.location.hash || "#/";







  // Update active state on subnav links (penanda kategori navbar)



  document.querySelectorAll(".subnav-link").forEach((n) => {



    const cat = n.getAttribute("data-cat");



    let isActive = false;



    if (cat === "elektronik" && (currentHash.includes("kategori=elektronik") || currentHash.startsWith("#/produk/nusasound") || currentHash.startsWith("#/produk/keyspace") || currentHash.startsWith("#/produk/nusabeat"))) {



      isActive = true;



    } else if (cat === "rumah" && (currentHash.includes("kategori=rumah") || currentHash.startsWith("#/produk/luma") || currentHash.startsWith("#/produk/daily"))) {



      isActive = true;



    } else if (cat === "fashion" && (currentHash.includes("kategori=fashion") || currentHash.startsWith("#/produk/urban"))) {



      isActive = true;



    } else if (cat === "promo" && currentHash.includes("promo=true")) {



      isActive = true;



    } else if (cat === "all" && (currentHash === "#/" || currentHash === "" || currentHash === "#" || currentHash === "#/katalog" || (!currentHash.includes("kategori=") && !currentHash.includes("promo=true") && !currentHash.startsWith("#/produk/")))) {



      isActive = true;



    }



    n.classList.toggle("active", isActive);



  });







  // Update active state on action buttons



  const wishNavBtn = document.querySelector('a[href="#/wishlist"].nav-action-btn');



  if (wishNavBtn) {



    wishNavBtn.classList.toggle("active", currentHash.startsWith("#/wishlist"));



  }







  const cartNavBtn = document.querySelector('a[href="#/keranjang"].nav-action-btn');



  if (cartNavBtn) {



    cartNavBtn.classList.toggle("active", currentHash.startsWith("#/keranjang"));



  }







  const userProfileBtn = document.getElementById("user-menu-trigger");



  if (userProfileBtn) {



    userProfileBtn.classList.toggle("active", currentHash.startsWith("#/akun") || currentHash.startsWith("#/lacak") || currentHash.startsWith("#/retur"));



  }



}



function U() {



  return `



    <footer class="site-footer" role="contentinfo">



      <div class="container">



        <div class="footer-grid">



          <!-- Col 1: Brand Info -->



          <div>



            <div class="brand-logo" style="margin-bottom: 8px;">



              <div class="brand-icon">



                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">



                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>



                  <line x1="3" y1="6" x2="21" y2="6"/>



                  <path d="M16 10a4 4 0 0 1-8 0"/>



                </svg>



              </div>



              <span>NusaShop</span>



            </div>



            <p class="footer-brand-desc">



              Pilihan yang pas untuk hidup yang lebih nyaman. Temukan kebutuhanmu, dalam satu tempat.



            </p>



            <div style="font-size: 12px; color: var(--color-ink-muted);">



              Commerce Indonesia dengan pendekatan manusiawi.



            </div>



          </div>







          <!-- Col 2: Jelajahi -->



          <div>



            <div class="footer-heading">Jelajahi</div>



            <ul class="footer-links">



              <li><a href="#/katalog" class="footer-link">Semua produk</a></li>



              <li><a href="#/katalog?kategori=elektronik" class="footer-link">Elektronik & audio</a></li>



              <li><a href="#/katalog?kategori=rumah" class="footer-link">Rumah & gaya hidup</a></li>



              <li><a href="#/katalog?kategori=fashion" class="footer-link">Fashion & aksesoris</a></li>



              <li><a href="#/katalog?promo=true" class="footer-link">Promo pilihan</a></li>



            </ul>



          </div>







          <!-- Col 3: Layanan Pelanggan -->



          <div>



            <div class="footer-heading">Layanan pelanggan</div>



            <ul class="footer-links">



              <li><a href="#/bantuan" class="footer-link">Pusat bantuan</a></li>



              <li><a href="#/lacak/NS-261005-0184" class="footer-link">Pengiriman & pelacakan</a></li>



              <li><a href="#/retur/NS-261005-0184" class="footer-link">Kebijakan pengembalian</a></li>



              <li><a href="#/bantuan#hubungi" class="footer-link">Hubungi kami</a></li>



            </ul>



          </div>







          <!-- Col 4: Tentang NusaShop -->



          <div>



            <div class="footer-heading">Tentang NusaShop</div>



            <ul class="footer-links">



              <li><a href="#/tentang" class="footer-link">Tentang kami</a></li>



              <li><a href="#/syarat" class="footer-link">Syarat & ketentuan</a></li>



              <li><a href="#/privasi" class="footer-link">Kebijakan privasi</a></li>



              <li><a href="#/akun" class="footer-link">Akun saya</a></li>



            </ul>



          </div>



        </div>







        <!-- Footer Bottom Bar -->



        <div class="footer-bottom">



          <div>



            &copy; 2026 NusaShop. Konsep desain, bukan toko aktif. Hak cipta dilindungi.



          </div>



          <div class="footer-payments">



            <span>Metode pembayaran terverifikasi:</span>



            <strong>Transfer bank · E-wallet · Kartu debit/kredit</strong>



          </div>



        </div>



      </div>



    </footer>



  `;



}



function q() {



  const s = window.location.hash || "#/",



    e = (o.getState().wishlist || []).length,



    t = s === "#/" || s === "",



    i = s.startsWith("#/katalog") || s.startsWith("#/produk"),



    n = s.startsWith("#/wishlist"),



    r =



      s.startsWith("#/akun") ||



      s.startsWith("#/lacak") ||



      s.startsWith("#/retur");



  return `



    <nav class="mobile-bottom-nav" aria-label="Navigasi Bawah Seluler">



      <div class="mobile-bottom-inner">



        <a href="#/" class="mobile-nav-item ${t ? "active" : ""}">



          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>



            <polyline points="9 22 9 12 15 12 15 22"/>



          </svg>



          <span>Beranda</span>



        </a>



        <a href="#/katalog" class="mobile-nav-item ${i ? "active" : ""}">



          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



            <circle cx="11" cy="11" r="8"/>



            <line x1="21" y1="21" x2="16.65" y2="16.65"/>



          </svg>



          <span>Jelajahi</span>



        </a>



        <a href="#/wishlist" class="mobile-nav-item ${n ? "active" : ""}">



          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>



          </svg>



          <span>Wishlist</span>



          ${e > 0 ? `<span class="badge-count" style="top:2px; right:20px;">${e}</span>` : ""}



        </a>



        <a href="#/akun" class="mobile-nav-item ${r ? "active" : ""}">



          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>



            <circle cx="12" cy="7" r="4"/>



          </svg>



          <span>Akun</span>



        </a>



      </div>



    </nav>



  `;



}



function D() {



  const s = o.getState(),



    a = window.location.hash || "#/",



    e = s.orders.find((i) => i.id === "NS-261005-0184") || s.orders[0],



    t = (e == null ? void 0 : e.status) || "dikirim";



  return `



    <div class="demo-bar" id="demo-presenter-bar" role="toolbar" aria-label="Alat Presentasi Demo">



      <span class="demo-bar-badge">Demo Mode</span>







      <!-- Jump to Page Dropdown -->



      <label style="display:flex; align-items:center; gap:6px;">



        <span style="font-size:11px; opacity:0.8;">Halaman:</span>



        <select class="demo-bar-select" id="demo-page-jump">



          <option value="#/" ${a === "#/" ? "selected" : ""}>1. Beranda</option>



          <option value="#/katalog" ${a.startsWith("#/katalog") ? "selected" : ""}>2. Katalog & Pencarian</option>



          <option value="#/produk/nusasound-air-anc" ${a.includes("nusasound") ? "selected" : ""}>3. Detail Produk (NusaSound)</option>



          <option value="#/keranjang" ${a === "#/keranjang" ? "selected" : ""}>4. Keranjang Belanja</option>



          <option value="#/checkout/alamat" ${a === "#/checkout/alamat" ? "selected" : ""}>5. Checkout (1. Alamat)</option>



          <option value="#/checkout/pengiriman" ${a === "#/checkout/pengiriman" ? "selected" : ""}>6. Checkout (2. Pengiriman)</option>



          <option value="#/checkout/pembayaran" ${a === "#/checkout/pembayaran" ? "selected" : ""}>7. Checkout (3. Pembayaran)</option>



          <option value="#/checkout/sukses" ${a === "#/checkout/sukses" ? "selected" : ""}>8. Pesanan Berhasil</option>



          <option value="#/lacak/NS-261005-0184" ${a.startsWith("#/lacak") ? "selected" : ""}>9. Lacak Pesanan</option>



          <option value="#/retur/NS-261005-0184" ${a.startsWith("#/retur") ? "selected" : ""}>10. Pengajuan Retur & Refund</option>



          <option value="#/akun" ${a === "#/akun" ? "selected" : ""}>11. Akun & Riwayat</option>



          <option value="#/wishlist" ${a === "#/wishlist" ? "selected" : ""}>12. Wishlist</option>



          <option value="#/bantuan" ${a === "#/bantuan" ? "selected" : ""}>13. Pusat Bantuan & FAQ</option>



          <option value="#/masuk" ${a.startsWith("#/masuk") ? "selected" : ""}>14. Masuk ke Akun</option>



          <option value="#/daftar" ${a.startsWith("#/daftar") ? "selected" : ""}>15. Daftar Akun Baru</option>



        </select>



      </label>







      <!-- Toggle Status Pesanan for Live Refund Demonstration -->



      <button class="demo-bar-btn" id="demo-toggle-order-btn" title="Ubah status pesanan untuk demo fitur retur">



        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>



        </svg>



        <span>Status: <b>${t === "dikirim" ? "Sedang Dikirim" : "Paket Diterima"}</b></span>



      </button>







      <!-- Theme Switcher -->



      <button class="demo-bar-btn" id="demo-theme-btn" title="Ganti Mode Gelap/Terang">



        <span>${s.theme === "dark" ? "☀️ Light" : "🌙 Dark"}</span>



      </button>







      <!-- Reset Demo State Button -->



      <button class="demo-bar-btn" id="demo-reset-btn" title="Kembalikan semua data ke state awal handoff">



        <span>↺ Reset Data</span>



      </button>







      <!-- Minimize Button -->



      <button class="demo-bar-toggle-min" id="demo-toggle-min-btn" title="Sembunyikan / Tampilkan">



        ▼



      </button>



    </div>



  `;



}



function M() {



  const s = document.getElementById("demo-page-jump");



  s &&



    s.addEventListener("change", (r) => {



      window.location.hash = r.target.value;



    });



  const a = document.getElementById("demo-toggle-order-btn");



  a &&



    a.addEventListener("click", () => {



      const r = o.toggleOrderStatus("NS-261005-0184");



      m.show({



        title: "Status Pesanan Diperbarui",



        message:



          r === "selesai"



            ? "Status kini 'Selesai (Paket Diterima)'. Tombol pengajuan retur kini aktif!"



            : "Status kembali ke 'Sedang Dikirim'.",



        type: "info",



      });



    });



  const e = document.getElementById("demo-theme-btn");



  e &&



    e.addEventListener("click", () => {



      o.toggleTheme();



    });



  const t = document.getElementById("demo-reset-btn");



  t &&



    t.addEventListener("click", () => {



      (o.resetDemoData(),



        m.show({



          title: "Data Presentasi Direset",



          message:



            "Keranjang, kupon, alamat, dan pesanan telah dikembalikan ke kondisi awal handoff.",



          type: "success",



        }),



        (window.location.hash = "#/"));



    });



  const i = document.getElementById("demo-toggle-min-btn"),



    n = document.getElementById("demo-presenter-bar");



  i &&



    n &&



    i.addEventListener("click", () => {



      (n.classList.toggle("minimized"),



        (i.textContent = n.classList.contains("minimized") ? "▲ Demo" : "▼"));



    });



}



function F() {



  const s = y.slice(0, 4),



    a = [y[1], y[2], y[4], y[5]];



  function e(t) {



    const i = o.isInWishlist(t.id);



    let n = "badge-discount";



    return (



      t.badgeType === "new" && (n = "badge-new"),



      t.badgeType === "editor" && (n = "badge-editor"),



      `



      <div class="product-card" data-product-id="${t.id}">



        <div class="product-card-visual">



          ${t.badge ? `<span class="badge ${n} product-card-badge">${t.badge}</span>` : ""}



          <button class="product-wishlist-btn ${i ? "active" : ""}" data-wishlist-id="${t.id}" title="${i ? "Hapus dari wishlist" : "Simpan ke wishlist"}" aria-label="Wishlist">



            <svg width="18" height="18" viewBox="0 0 24 24" fill="${i ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">



              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>



            </svg>



          </button>



          <a href="#/produk/${t.id}">



            <img src="${t.image}" alt="${t.name}" class="product-card-img" loading="lazy" />



          </a>



        </div>



        <div class="product-card-body">



          <div class="product-type">${t.type}</div>



          <h3 class="product-name">



            <a href="#/produk/${t.id}">${t.name}</a>



          </h3>



          <div class="product-rating">



            <span class="product-star">★</span>



            <span>${t.rating} · ${t.reviewsCount} ulasan contoh</span>



          </div>



          <div class="product-price-row">



            <span class="product-price">${o.formatRupiah(t.price)}</span>



            ${t.originalPrice > t.price ? `<span class="product-original-price">${o.formatRupiah(t.originalPrice)}</span>` : ""}



          </div>



          <div class="product-origin">${t.origin}</div>



        </div>



      </div>



    `



    );



  }



  return `



    <div class="container">



      <!-- Hero Section -->



      <section class="hero-section" aria-label="Bagian Hero">



        <div class="hero-card">



          <div class="hero-content">



            <span class="badge badge-new" style="margin-bottom: 12px;">PILIHAN UNTUK KESEHARIAN</span>



            <h1 class="hero-title">Hal kecil, dampak besar untuk harimu.</h1>



            <p class="hero-desc">



              Dari sudut kerja sampai waktu santai. Temukan pilihan fungsional dengan desain yang kamu suka.



            </p>



            <div class="hero-actions">



              <a href="#/katalog" class="btn btn-primary btn-lg">Jelajahi pilihan</a>



              <a href="#/katalog?promo=true" class="btn btn-outline btn-lg">Lihat promo</a>



            </div>



            <div class="hero-coupon-note">



              <span>Diskon Rp100.000 · Min. belanja Rp1.000.000 · Kode <strong style="color:var(--color-primary); cursor:pointer;" id="hero-code-copy">NUSA100</strong></span>



            </div>



          </div>



          <div class="hero-visual">



            <img src="/assets/images/banners/hero-desk.jpg" alt="Sudut kerja dengan produk NusaShop" />



            <a href="#/katalog" class="hero-visual-badge">



              <span>THE EVERYDAY EDIT</span>



              <span style="font-weight:400; color:var(--color-ink-muted);">· Sudut kerja, versi kamu &rarr;</span>



            </a>



          </div>



        </div>



      </section>







      <!-- Value Propositions Bar -->



      <section class="value-props-bar" aria-label="Keunggulan Berbelanja">



        <div class="value-prop-item">



          <div class="value-prop-icon">



            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



              <rect x="1" y="3" width="15" height="13"/>



              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>



              <circle cx="5.5" cy="18.5" r="2.5"/>



              <circle cx="18.5" cy="18.5" r="2.5"/>



            </svg>



          </div>



          <div>



            <div class="value-prop-title">Pilihan pengiriman</div>



            <div class="value-prop-subtitle">Estimasi jelas sebelum checkout</div>



          </div>



        </div>







        <div class="value-prop-item">



          <div class="value-prop-icon">



            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



              <polyline points="1 4 1 10 7 10"/>



              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>



            </svg>



          </div>



          <div>



            <div class="value-prop-title">Pengembalian mudah</div>



            <div class="value-prop-subtitle">Ajukan sesuai kebijakan toko</div>



          </div>



        </div>







        <div class="value-prop-item">



          <div class="value-prop-icon">



            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



              <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>



              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>



            </svg>



          </div>



          <div>



            <div class="value-prop-title">Bantuan saat dibutuhkan</div>



            <div class="value-prop-subtitle">Senin–Sabtu, 09.00–18.00 WIB</div>



          </div>



        </div>







        <div class="value-prop-item">



          <div class="value-prop-icon">



            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



              <rect x="2" y="5" width="20" height="14" rx="2"/>



              <line x1="2" y1="10" x2="22" y2="10"/>



            </svg>



          </div>



          <div>



            <div class="value-prop-title">Pembayaran fleksibel</div>



            <div class="value-prop-subtitle">Bank, e-wallet, dan kartu</div>



          </div>



        </div>



      </section>







      <!-- Category Quick Filter Selection -->



      <section class="categories-section" aria-label="Mulai dari yang kamu butuhkan">



        <h2 style="font-size: var(--text-h3); margin-bottom: 4px;">Mulai dari yang kamu butuhkan</h2>



        <div class="categories-grid">



          <a href="#/katalog?kategori=elektronik" class="category-chip-card">



            <div class="category-chip-icon">



              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>



                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>



              </svg>



            </div>



            <span class="category-chip-name">Elektronik</span>



          </a>







          <a href="#/katalog?kategori=rumah" class="category-chip-card">



            <div class="category-chip-icon">



              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>



              </svg>



            </div>



            <span class="category-chip-name">Rumah & living</span>



          </a>







          <a href="#/katalog?kategori=fashion" class="category-chip-card">



            <div class="category-chip-icon">



              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>



              </svg>



            </div>



            <span class="category-chip-name">Fashion</span>



          </a>







          <a href="#/katalog?kategori=perawatan" class="category-chip-card">



            <div class="category-chip-icon">



              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>



              </svg>



            </div>



            <span class="category-chip-name">Perawatan diri</span>



          </a>







          <a href="#/katalog?kategori=hobi" class="category-chip-card">



            <div class="category-chip-icon">



              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <circle cx="12" cy="12" r="10"/>



                <polygon points="12 8 8 12 12 16 16 12 12 8"/>



              </svg>



            </div>



            <span class="category-chip-name">Hobi & olahraga</span>



          </a>







          <a href="#/katalog?kategori=hadiah" class="category-chip-card">



            <div class="category-chip-icon">



              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <polyline points="20 12 20 22 4 22 4 12"/>



                <rect x="2" y="7" width="20" height="5"/>



                <line x1="12" y1="22" x2="12" y2="7"/>



                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>



                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>



              </svg>



            </div>



            <span class="category-chip-name">Ide hadiah</span>



          </a>



        </div>



      </section>







      <!-- Curated: Harga Pas, Pilihan Tepat -->



      <section style="margin-bottom: var(--space-48);">



        <div class="section-header">



          <div class="section-title-wrap">



            <h2 style="font-size: var(--text-h3);">Harga pas, pilihan tepat</h2>



            <span class="badge badge-editor">Promo 5–11 Oktober</span>



          </div>



          <a href="#/katalog" class="section-link">Lihat semua &rarr;</a>



        </div>



        <div class="products-grid">



          ${s.map(e).join("")}



        </div>



      </section>







      <!-- Split Promo Banners -->



      <section class="split-banners">



        <div class="promo-banner-card">



          <div class="promo-banner-body">



            <h3 class="promo-banner-title">Upgrade sudut kerjamu</h3>



            <p class="promo-banner-desc">Fokus lebih nyaman, dari meja yang rapi.</p>



            <a href="#/katalog?kategori=elektronik" class="btn btn-outline btn-sm">Temukan koleksi &rarr;</a>



          </div>



          <img src="/assets/images/banners/promo-workspace.jpg" alt="Sudut kerja rapi" class="promo-banner-img" />



        </div>







        <div class="promo-banner-card">



          <div class="promo-banner-body">



            <h3 class="promo-banner-title">Bawa nyaman ke mana saja</h3>



            <p class="promo-banner-desc">Pilihan ringkas untuk hari yang aktif.</p>



            <a href="#/katalog?kategori=fashion" class="btn btn-outline btn-sm">Temukan koleksi &rarr;</a>



          </div>



          <img src="/assets/images/banners/promo-commute.jpg" alt="Perlengkapan harian" class="promo-banner-img" />



        </div>



      </section>







      <!-- Section: Baru Datang -->



      <section style="margin-bottom: var(--space-48);">



        <div class="section-header">



          <h2 style="font-size: var(--text-h3);">Baru datang, siap menemani</h2>



          <a href="#/katalog" class="section-link">Lihat produk baru &rarr;</a>



        </div>



        <div class="products-grid">



          ${a.map(e).join("")}



        </div>



      </section>







      <!-- Brand Narrative Spotlight -->



      <section class="brand-story-card">



        <img src="/assets/images/banners/brand-story.jpg" alt="Filosofi NusaShop" class="brand-story-img" />



        <div class="brand-story-body">



          <span class="badge badge-new" style="margin-bottom: 12px;">RUANG UNTUK IDE BARU</span>



          <h2 style="font-size: var(--text-h2); margin-bottom: 16px;">Bukan sekadar barang. Bagian dari keseharian.</h2>



          <p style="font-size: var(--text-body); line-height: 1.6; margin-bottom: 24px;">



            Kami mengkurasi barang yang menggabungkan fungsi, kenyamanan, dan karakter. Mulai dari kebutuhan yang benar-benar kamu pakai.



          </p>



          <a href="#/katalog" class="btn btn-primary">Kenali NusaShop</a>



        </div>



      </section>







      <!-- Articles: Inspirasi Sebelum Memilih -->



      <section style="margin-bottom: var(--space-48);">



        <h2 style="font-size: var(--text-h3); margin-bottom: 20px;">Sedikit inspirasi sebelum memilih</h2>



        <div class="articles-grid">



          ${H.map(



            (t) => `



            <div class="article-card" data-story-id="${t.id}">



              <img src="${t.image}" alt="${t.title}" class="article-img" />



              <div class="article-body">



                <span class="badge badge-primary" style="margin-bottom: 8px;">${t.tag}</span>



                <h3 class="article-title">${t.title}</h3>



                <p class="article-desc">${t.summary}</p>



                <span class="section-link">Baca panduan &rarr;</span>



              </div>



            </div>



          `,



          ).join("")}



        </div>



      </section>







      <!-- 3 Feature Steps Banner -->



      <section class="steps-checklist">



        <div class="step-check-item">



          <div class="step-check-icon">



            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



              <circle cx="11" cy="11" r="8"/>



              <line x1="21" y1="21" x2="16.65" y2="16.65"/>



            </svg>



          </div>



          <div>



            <div style="font-weight:700; font-size:14px; margin-bottom:2px;">Temukan pilihanmu</div>



            <div style="font-size:12px; color:var(--color-ink-muted);">Cari produk dan bandingkan detailnya.</div>



          </div>



        </div>







        <div class="step-check-item">



          <div class="step-check-icon">



            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



              <rect x="1" y="3" width="15" height="13"/>



              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>



            </svg>



          </div>



          <div>



            <div style="font-weight:700; font-size:14px; margin-bottom:2px;">Checkout dengan jelas</div>



            <div style="font-size:12px; color:var(--color-ink-muted);">Tinjau alamat, pengiriman, dan total.</div>



          </div>



        </div>







        <div class="step-check-item">



          <div class="step-check-icon">



            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>



              <polyline points="22 4 12 14.01 9 11.01"/>



            </svg>



          </div>



          <div>



            <div style="font-weight:700; font-size:14px; margin-bottom:2px;">Pantau sampai tiba</div>



            <div style="font-size:12px; color:var(--color-ink-muted);">Ikuti status pesanan di akunmu.</div>



          </div>



        </div>



      </section>







      <!-- Newsletter Box -->



      <section class="newsletter-card">



        <div>



          <h2 style="font-size: var(--text-h3); margin-bottom: 6px;">Pilihan baru, langsung ke inbox.</h2>



          <p style="font-size: var(--text-small);">Inspirasi dan penawaran pilihan. Kamu bisa berhenti kapan saja.</p>



        </div>



        <form class="newsletter-form" id="newsletter-form">



          <input type="email" class="input-text" placeholder="Alamat email kamu" required id="newsletter-input" />



          <button type="submit" class="btn btn-primary" style="flex-shrink:0;">Berlangganan</button>



        </form>



      </section>



    </div>



  `;



}



function V() {



  document.querySelectorAll("[data-wishlist-id]").forEach((e) => {



    e.addEventListener("click", (t) => {



      (t.preventDefault(), t.stopPropagation());



      const i = e.getAttribute("data-wishlist-id"),



        n = o.toggleWishlist(i);



      e.classList.toggle("active", n);



      const r = e.querySelector("svg");



      r && r.setAttribute("fill", n ? "currentColor" : "none");



      const l = y.find((d) => d.id === i);



      m.show({



        title: n ? "Ditambahkan ke Wishlist" : "Dihapus dari Wishlist",



        message: n



          ? `${(l == null ? void 0 : l.name) || "Produk"} tersimpan di wishlist kamu.`



          : `${(l == null ? void 0 : l.name) || "Produk"} dihapus dari wishlist.`,



        type: n ? "success" : "info",



      });



    });



  });



  const s = document.getElementById("hero-code-copy");



  s &&



    s.addEventListener("click", () => {



      var e;



      ((e = navigator.clipboard) == null || e.writeText("NUSA100"),



        m.show({



          title: "Kode Promo Disalin!",



          message: "Kode NUSA100 siap digunakan di keranjang belanja.",



          type: "success",



        }));



    });



  const a = document.getElementById("newsletter-form");



  a &&



    a.addEventListener("submit", (e) => {



      e.preventDefault();



      const t = document.getElementById("newsletter-input"),



        i = t.value.trim();



      i &&



        (m.show({



          title: "Berhasil Berlangganan!",



          message: `Terima kasih! Kami telah mengirimkan email konfirmasi ke ${i}.`,



          type: "success",



        }),



        (t.value = ""));



    });



}



function G(s = {}) {



  const a = s.kategori || "all",



    e = s.promo === "true",



    t = (s.q || "").toLowerCase();



  return `



    <div class="container" style="padding-top: var(--space-24);">



      <!-- Breadcrumb -->



      <nav class="breadcrumb" aria-label="Breadcrumb">



        <a href="#/">Beranda</a>



        <span class="breadcrumb-separator">/</span>



        <span style="color:var(--color-ink);">Semua pilihan</span>



      </nav>







      <!-- Page Header -->



      <div style="margin-bottom: var(--space-32);">



        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Pilihan untuk keseharian</h1>



        <p style="font-size: var(--text-body);">Barang fungsional, desain yang kamu suka. Temukan yang paling pas untukmu.</p>



      </div>







      <!-- Catalog Main Layout: Sidebar Filter + Results Grid -->



      <div class="catalog-layout">



        <!-- Filter Sidebar -->



        <aside class="filter-sidebar" aria-label="Penyaring produk">



          <div class="filter-header">



            <span style="font-size: var(--text-h4); font-weight: var(--fw-bold);">Filter</span>



            <button class="filter-reset-btn" id="filter-reset-btn">Reset</button>



          </div>







          <!-- Kategori -->



          <div class="filter-group">



            <div class="filter-group-title">Kategori</div>



            <div class="filter-options-list">



              <label class="checkbox-label">



                <input type="checkbox" name="cat" value="all" ${a === "all" ? "checked" : ""} class="filter-check" />



                <span class="checkbox-custom">✓</span>



                <span>Semua pilihan</span>



              </label>



              <label class="checkbox-label">



                <input type="checkbox" name="cat" value="elektronik" ${a === "elektronik" ? "checked" : ""} class="filter-check" />



                <span class="checkbox-custom">✓</span>



                <span>Elektronik</span>



              </label>



              <label class="checkbox-label">



                <input type="checkbox" name="cat" value="rumah" ${a === "rumah" ? "checked" : ""} class="filter-check" />



                <span class="checkbox-custom">✓</span>



                <span>Rumah & living</span>



              </label>



              <label class="checkbox-label">



                <input type="checkbox" name="cat" value="fashion" ${a === "fashion" ? "checked" : ""} class="filter-check" />



                <span class="checkbox-custom">✓</span>



                <span>Fashion & aksesori</span>



              </label>



            </div>



          </div>







          <!-- Rentang Harga -->



          <div class="filter-group">



            <div class="filter-group-title">Rentang harga</div>



            <div style="font-size:12px; color:var(--color-ink-muted); margin-bottom:6px;">Minimum</div>



            <input type="number" class="input-text" id="filter-price-min" value="100000" step="50000" />



            <div style="font-size:12px; color:var(--color-ink-muted); margin: 8px 0 6px;">Maksimum</div>



            <input type="number" class="input-text" id="filter-price-max" value="1100000" step="50000" />



            



            <input type="range" id="filter-price-slider" min="100000" max="1100000" value="1100000" step="50000" style="width:100%; margin-top:12px; accent-color:var(--color-primary);" />



          </div>







          <!-- Pilihan Lainnya -->



          <div class="filter-group">



            <div class="filter-group-title">Pilihan lainnya</div>



            <div class="filter-options-list">



              <label class="checkbox-label">



                <input type="checkbox" id="filter-stock-only" checked class="filter-check" />



                <span class="checkbox-custom">✓</span>



                <span>Stok tersedia</span>



              </label>



              <label class="checkbox-label">



                <input type="checkbox" id="filter-promo-only" ${e ? "checked" : ""} class="filter-check" />



                <span class="checkbox-custom">✓</span>



                <span>Sedang promo</span>



              </label>



              <label class="checkbox-label">



                <input type="checkbox" id="filter-rating-4" class="filter-check" />



                <span class="checkbox-custom">✓</span>



                <span>Rating 4 ke atas</span>



              </label>



            </div>



          </div>



        </aside>







        <!-- Catalog Main Area -->



        <main class="catalog-main">



          <!-- Top Bar: Counter & Sorting -->



          <div class="catalog-main-header">



            <div style="font-size: var(--text-small); color: var(--color-ink-muted);" id="catalog-count-label">



              Menampilkan 6 produk



            </div>



            <div style="display:flex; align-items:center; gap:8px;">



              <select class="input-select" id="catalog-sort-select" style="width: auto; min-width: 170px;">



                <option value="relevance">Paling relevan</option>



                <option value="price-asc">Harga terendah</option>



                <option value="price-desc">Harga tertinggi</option>



                <option value="rating">Rating tertinggi</option>



              </select>



            </div>



          </div>







          <!-- Active Filter Chips -->



          <div class="active-filter-chips" id="active-filter-chips">



            <span class="filter-chip" id="chip-stock">Stok tersedia <span class="filter-chip-remove">&times;</span></span>



            <span class="filter-chip" id="chip-price">Rp100rb–Rp1,1jt <span class="filter-chip-remove">&times;</span></span>



            ${a !== "all" ? `<span class="filter-chip" id="chip-cat">${a} <span class="filter-chip-remove">&times;</span></span>` : ""}



            ${t ? `<span class="filter-chip" id="chip-q">"${t}" <span class="filter-chip-remove">&times;</span></span>` : ""}



          </div>







          <!-- Products Grid -->



          <div class="catalog-products-grid" id="catalog-grid"></div>







          <!-- Pagination -->



          <div class="pagination-bar">



            <div style="font-size: var(--text-small); color: var(--color-ink-muted);" id="pagination-info">



              1–6 dari 6 produk



            </div>



            <div style="display:flex; gap:8px;">



              <button class="btn btn-outline btn-sm" disabled>Sebelumnya</button>



              <button class="btn btn-primary btn-sm">1</button>



              <button class="btn btn-outline btn-sm" disabled>Berikutnya</button>



            </div>



          </div>



        </main>



      </div>



    </div>



  `;



}



function Q(s = {}) {



  var f, C, P, E;



  const a = document.getElementById("catalog-grid"),



    e = document.getElementById("catalog-count-label"),



    t = document.getElementById("pagination-info"),



    i = document.getElementById("catalog-sort-select"),



    n = document.getElementById("filter-price-min"),



    r = document.getElementById("filter-price-max"),



    l = document.getElementById("filter-price-slider"),



    d = document.getElementById("filter-promo-only"),



    c = document.getElementById("filter-stock-only"),



    b = document.getElementById("filter-rating-4"),



    k = document.getElementById("filter-reset-btn");



  function h() {



    let p = [...y];



    const x = (s.q || "").toLowerCase();



    x &&



      (p = p.filter(



        (g) =>



          g.name.toLowerCase().includes(x) ||



          g.category.toLowerCase().includes(x) ||



          g.type.toLowerCase().includes(x),



      ));



    const u = Array.from(



      document.querySelectorAll('input[name="cat"]:checked'),



    ).map((g) => g.value);



    !u.includes("all") &&



      u.length > 0 &&



      (p = p.filter((g) => u.includes(g.categoryKey)));



    const $ = parseInt(n.value) || 0,



      S = parseInt(r.value) || 99999999;



    ((p = p.filter((g) => g.price >= $ && g.price <= S)),



      c.checked && (p = p.filter((g) => g.stock > 0)),



      d.checked &&



        (p = p.filter(



          (g) => g.badgeType === "discount" || g.originalPrice > g.price,



        )),



      b.checked && (p = p.filter((g) => g.rating >= 4)));



    const B = i.value;



    (B === "price-asc"



      ? p.sort((g, w) => g.price - w.price)



      : B === "price-desc"



        ? p.sort((g, w) => w.price - g.price)



        : B === "rating" && p.sort((g, w) => w.rating - g.rating),



      j(p));



  }



  function j(p) {



    var x;



    if (



      ((e.textContent = `Menampilkan ${p.length} produk`),



      (t.textContent = `1–${p.length} dari ${p.length} produk`),



      p.length === 0)



    ) {



      ((a.innerHTML = `



        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--color-surface); border: 1px dashed var(--color-border); border-radius: var(--radius-md);">



          <div style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Tidak ada produk yang cocok</div>



          <p style="font-size: 14px; margin-bottom: 16px;">Coba ubah kata kunci atau longgarkan filter pencarianmu.</p>



          <button class="btn btn-outline btn-sm" id="empty-reset-btn">Reset Semua Filter</button>



        </div>



      `),



        (x = document.getElementById("empty-reset-btn")) == null ||



          x.addEventListener("click", () => {



            v();



          }));



      return;



    }



    ((a.innerHTML = p



      .map((u) => {



        const $ = o.isInWishlist(u.id);



        let S = "badge-discount";



        return (



          u.badgeType === "new" && (S = "badge-new"),



          u.badgeType === "editor" && (S = "badge-editor"),



          `



        <div class="product-card" data-product-id="${u.id}">



          <div class="product-card-visual">



            ${u.badge ? `<span class="badge ${S} product-card-badge">${u.badge}</span>` : ""}



            <button class="product-wishlist-btn ${$ ? "active" : ""}" data-wishlist-id="${u.id}" title="${$ ? "Hapus dari wishlist" : "Simpan ke wishlist"}">



              <svg width="18" height="18" viewBox="0 0 24 24" fill="${$ ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">



                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>



              </svg>



            </button>



            <a href="#/produk/${u.id}">



              <img src="${u.image}" alt="${u.name}" class="product-card-img" loading="lazy" />



            </a>



          </div>



          <div class="product-card-body">



            <div class="product-type">${u.type}</div>



            <h3 class="product-name">



              <a href="#/produk/${u.id}">${u.name}</a>



            </h3>



            <div class="product-rating">



              <span class="product-star">★</span>



              <span>${u.rating} · ${u.reviewsCount} ulasan contoh</span>



            </div>



            <div class="product-price-row">



              <span class="product-price">${o.formatRupiah(u.price)}</span>



              ${u.originalPrice > u.price ? `<span class="product-original-price">${o.formatRupiah(u.originalPrice)}</span>` : ""}



            </div>



            <div class="product-origin">${u.origin}</div>



          </div>



        </div>



      `



        );



      })



      .join("")),



      a.querySelectorAll("[data-wishlist-id]").forEach((u) => {



        u.addEventListener("click", ($) => {



          ($.preventDefault(), $.stopPropagation());



          const S = u.getAttribute("data-wishlist-id"),



            B = o.toggleWishlist(S);



          u.classList.toggle("active", B);



          const g = u.querySelector("svg");



          g && g.setAttribute("fill", B ? "currentColor" : "none");



          const w = y.find((K) => K.id === S);



          m.show({



            title: B ? "Ditambahkan ke Wishlist" : "Dihapus dari Wishlist",



            message: `${(w == null ? void 0 : w.name) || "Produk"} diperbarui di wishlist.`,



            type: B ? "success" : "info",



          });



        });



      }));



  }



  function v() {



    (document



      .querySelectorAll('input[name="cat"]')



      .forEach((p) => (p.checked = p.value === "all")),



      (n.value = 1e5),



      (r.value = 11e5),



      (l.value = 11e5),



      (d.checked = !1),



      (c.checked = !0),



      (b.checked = !1),



      (i.value = "relevance"),



      (window.location.hash = "#/katalog"));



  }



  (document.querySelectorAll('input[name="cat"]').forEach((p) => {



    p.addEventListener("change", (x) => {



      if (x.target.value === "all" && x.target.checked)



        document.querySelectorAll('input[name="cat"]').forEach((u) => {



          u.value !== "all" && (u.checked = !1);



        });



      else if (x.target.checked) {



        const u = document.querySelector('input[name="cat"][value="all"]');



        u && (u.checked = !1);



      }



      h();



    });



  }),



    l.addEventListener("input", (p) => {



      ((r.value = p.target.value), h());



    }),



    n.addEventListener("change", h),



    r.addEventListener("change", h),



    d.addEventListener("change", h),



    c.addEventListener("change", h),



    b.addEventListener("change", h),



    i.addEventListener("change", h),



    k.addEventListener("click", v),



    (f = document.getElementById("chip-stock")) == null ||



      f.addEventListener("click", () => {



        var p;



        ((c.checked = !1),



          (p = document.getElementById("chip-stock")) == null || p.remove(),



          h());



      }),



    (C = document.getElementById("chip-price")) == null ||



      C.addEventListener("click", () => {



        var p;



        ((n.value = 0),



          (r.value = 2e6),



          (l.value = 2e6),



          (p = document.getElementById("chip-price")) == null || p.remove(),



          h());



      }),



    (P = document.getElementById("chip-cat")) == null ||



      P.addEventListener("click", () => {



        window.location.hash = "#/katalog";



      }),



    (E = document.getElementById("chip-q")) == null ||



      E.addEventListener("click", () => {



        window.location.hash = "#/katalog";



      }),



    h());



}



function Y(s) {



  const a = y.find((l) => l.id === s) || y[0],



    e = o.isInWishlist(a.id),



    t = a.gallery || [a.image],



    i = a.colors || [



      { id: "default", name: "Standar", hex: "#2563eb", default: !0 },



    ],



    n = i.find((l) => l.default) || i[0],



    r = y.filter((l) => l.id !== a.id).slice(0, 4);



  return `



    <div class="container" style="padding-top: var(--space-24);">



      <!-- Breadcrumb -->



      <nav class="breadcrumb" aria-label="Breadcrumb">



        <a href="#/">Beranda</a>



        <span class="breadcrumb-separator">/</span>



        <a href="#/katalog?kategori=${a.categoryKey}">${a.category}</a>



        <span class="breadcrumb-separator">/</span>



        <span>${a.subcategory || a.type}</span>



        <span class="breadcrumb-separator">/</span>



        <span style="color:var(--color-ink);">${a.name}</span>



      </nav>







      <!-- Main Detail Layout -->



      <div class="detail-layout">



        <!-- Left: Image Gallery -->



        <div class="gallery-container">



          <div class="gallery-main-view">



            <img src="${t[0]}" alt="${a.name}" class="gallery-main-img" id="detail-main-img" />



          </div>



          <div class="gallery-thumbnails">



            ${t



              .map(



                (l, d) => `



              <div class="gallery-thumb ${d === 0 ? "active" : ""}" data-img-index="${d}">



                <img src="${l}" alt="${a.name} Thumbnail ${d + 1}" />



              </div>



            `,



              )



              .join("")}



          </div>



          <div style="font-size: 12px; color: var(--color-ink-muted);">



            Foto ilustrasi produk. Warna dapat sedikit berbeda di layar.



          </div>



        </div>







        <!-- Right: Buy Box & Product Info -->



        <div class="detail-info">



          <div>



            <div style="display:flex; gap:8px; align-items:center; margin-bottom:8px;">



              <span class="badge badge-primary">Pilihan ${a.subcategory || "audio"}</span>



              ${a.badge ? `<span class="badge badge-discount">${a.badge}</span>` : ""}



            </div>



            <h1 style="font-size: var(--text-h2); margin-bottom: 8px;">${a.name}</h1>



            <p style="font-size: var(--text-body); color: var(--color-ink-muted); margin-bottom: 12px;">



              ${a.tagline}



            </p>



            <div style="display:flex; align-items:center; gap:12px; font-size:13px; color:var(--color-ink-muted);">



              <span>★ <b>${a.rating}</b> (${a.reviewsCount} ulasan contoh)</span>



              <span>·</span>



              <span>SKU: ${a.sku}</span>



            </div>



          </div>







          <!-- Price Display -->



          <div style="display:flex; align-items:baseline; gap:12px;">



            <span style="font-size: 32px; font-weight: 800; font-family: var(--font-heading); color: var(--color-ink);">



              ${o.formatRupiah(a.price)}



            </span>



            ${



              a.originalPrice > a.price



                ? `



              <span style="font-size: 16px; color: var(--color-ink-muted); text-decoration: line-through;">



                ${o.formatRupiah(a.originalPrice)}



              </span>



            `



                : ""



            }



          </div>







          <p style="font-size: 14px; line-height: 1.6; color: var(--color-ink-muted);">



            ${a.description}



          </p>







          <!-- Color Swatches -->



          <div>



            <div style="font-size: 13px; font-weight: 600; color: var(--color-ink);">



              Warna: <span id="selected-variant-label" style="font-weight: 400; color: var(--color-ink-muted);">${n.name}</span>



            </div>



            <div class="color-swatches-row">



              ${i



                .map(



                  (l) => `



                <div 



                  class="color-swatch ${l.id === n.id ? "active" : ""}" 



                  style="background-color: ${l.hex};" 



                  data-variant-name="${l.name}"



                  title="${l.name}"



                ></div>



              `,



                )



                .join("")}



            </div>



          </div>







          <!-- Stock Level -->



          <div>



            <span class="badge badge-success">Tersedia · ${a.stock} unit</span>



          </div>







          <!-- Quantity Stepper -->



          <div class="stepper-row">



            <div class="stepper">



              <button class="stepper-btn" id="qty-minus" aria-label="Kurangi jumlah">-</button>



              <span class="stepper-value" id="qty-value">1</span>



              <button class="stepper-btn" id="qty-plus" aria-label="Tambah jumlah">+</button>



            </div>



            <span style="font-size: 12px; color: var(--color-ink-muted);">Maks. 5 barang per pesanan</span>



          </div>







          <!-- Action Buttons -->



          <div class="detail-actions-row">



            <button class="btn btn-primary btn-lg" id="add-to-cart-btn" style="flex: 1.5; min-width: 200px;">



              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <circle cx="9" cy="21" r="1"/>



                <circle cx="20" cy="21" r="1"/>



                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>



              </svg>



              Tambah ke keranjang



            </button>



            <button class="btn btn-outline btn-lg" id="buy-now-btn" style="flex: 1;">



              Beli sekarang



            </button>



            <button class="btn btn-outline btn-lg ${e ? "active" : ""}" id="wishlist-btn" title="Simpan ke Wishlist">



              <svg width="18" height="18" viewBox="0 0 24 24" fill="${e ? "var(--color-error)" : "none"}" stroke="${e ? "var(--color-error)" : "currentColor"}" stroke-width="2">



                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>



              </svg>



              <span>${e ? "Tersimpan" : "Simpan"}</span>



            </button>



          </div>







          <!-- Shipping Summary Card -->



          <div class="shipping-summary-card">



            <div style="color:var(--color-primary); margin-top:2px;">



              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <rect x="1" y="3" width="15" height="13"/>



                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>



                <circle cx="5.5" cy="18.5" r="2.5"/>



                <circle cx="18.5" cy="18.5" r="2.5"/>



              </svg>



            </div>



            <div>



              <div style="font-weight:600; color:var(--color-ink); margin-bottom:2px;">Dikirim ke Jakarta Selatan 12810</div>



              <div style="color:var(--color-ink-muted);">Reguler Rp20.000 · Estimasi tiba 7–8 Oktober 2026</div>



              <div style="font-size:12px; color:var(--color-ink-muted); margin-top:4px;">Pengembalian dalam 7 hari sejak diterima, sesuai kebijakan toko.</div>



            </div>



          </div>



        </div>



      </div>







      <!-- Specifications & Support Cards -->



      <section class="specs-reviews-grid">



        <!-- Specs -->



        <div class="card">



          <h2 style="font-size: var(--text-h3); margin-bottom: 8px;">Detail yang membuat perbedaan</h2>



          <p style="font-size: 14px; margin-bottom: 16px;">



            Bantalan lembut, desain lipat, dan pengaturan ANC membantu kamu memilih seberapa banyak suara sekitar yang ingin didengar.



          </p>



          <table class="specs-table">



            <tbody>



              ${Object.entries(a.specs || {})



                .map(



                  ([l, d]) => `



                <tr>



                  <td>${l}</td>



                  <td>${d}</td>



                </tr>



              `,



                )



                .join("")}



            </tbody>



          </table>



        </div>







        <!-- Help Support Box -->



        <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">



          <div>



            <h3 style="font-size: var(--text-h4); margin-bottom: 8px;">Perlu bantuan memilih?</h3>



            <p style="font-size: 14px; line-height: 1.5; margin-bottom: 20px;">



              Tanyakan kompatibilitas, cara pakai, atau kebijakan pengembalian sebelum memesan.



            </p>



            <a href="#/bantuan" class="btn btn-outline btn-block">



              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>



              </svg>



              Tanya tim NusaShop



            </a>



          </div>



          <div style="font-size: 12px; color: var(--color-ink-muted); margin-top: 24px; border-top: 1px solid var(--color-border); padding-top: 12px;">



            Senin–Sabtu · 09.00–18.00 WIB<br/>Spesifikasi pada konsep ini bersifat ilustratif.



          </div>



        </div>



      </section>







      <!-- Customer Reviews -->



      <section style="margin-bottom: var(--space-64);">



        <div class="card">



          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px;">



            <div>



              <h2 style="font-size: var(--text-h3); margin-bottom: 4px;">Ulasan pembeli</h2>



              <div class="reviews-score-box">



                <div class="reviews-score-number">4,8</div>



                <div>



                  <div style="color:#F59E0B; font-size:18px;">★★★★★</div>



                  <div style="font-size:12px; color:var(--color-ink-muted);">${a.reviewsCount} ulasan ilustratif</div>



                </div>



              </div>



            </div>



            <span class="badge badge-primary">Konten contoh, bukan ulasan terverifikasi</span>



          </div>







          <div class="reviews-list">



            ${(a.reviews || [])



              .map(



                (l) => `



              <div class="review-item">



                <div style="display:flex; justify-content:space-between; margin-bottom:4px;">



                  <strong style="font-size:14px;">${l.author}</strong>



                  <span style="font-size:12px; color:var(--color-ink-muted);">${l.date}</span>



                </div>



                <div style="color:#F59E0B; font-size:13px; margin-bottom:6px;">${"★".repeat(l.rating)}</div>



                <p style="font-size:14px; line-height:1.5;">${l.comment}</p>



              </div>



            `,



              )



              .join("")}



          </div>



        </div>



      </section>







      <!-- Related Recommendations: Lengkapi sudut kerjamu -->



      <section style="margin-bottom: var(--space-64);">



        <div class="section-header">



          <h2 style="font-size: var(--text-h3);">Lengkapi sudut kerjamu</h2>



          <a href="#/katalog" class="section-link">Lihat semua &rarr;</a>



        </div>



        <div class="products-grid">



          ${r



            .map(



              (l) => `



            <div class="product-card" data-product-id="${l.id}">



              <div class="product-card-visual">



                ${l.badge ? `<span class="badge badge-discount product-card-badge">${l.badge}</span>` : ""}



                <a href="#/produk/${l.id}">



                  <img src="${l.image}" alt="${l.name}" class="product-card-img" />



                </a>



              </div>



              <div class="product-card-body">



                <div class="product-type">${l.type}</div>



                <h3 class="product-name"><a href="#/produk/${l.id}">${l.name}</a></h3>



                <div class="product-rating">★ ${l.rating} · ${l.reviewsCount} ulasan</div>



                <div class="product-price-row">



                  <span class="product-price">${o.formatRupiah(l.price)}</span>



                  ${l.originalPrice > l.price ? `<span class="product-original-price">${o.formatRupiah(l.originalPrice)}</span>` : ""}



                </div>



                <div class="product-origin">${l.origin}</div>



              </div>



            </div>



          `,



            )



            .join("")}



        </div>



      </section>



    </div>



  `;



}



function _(s) {



  var j;



  const a = y.find((v) => v.id === s) || y[0],



    e = a.gallery || [a.image];



  let t =



      (a.colors && ((j = a.colors[0]) == null ? void 0 : j.name)) || "Standar",



    i = 1;



  const n = document.getElementById("detail-main-img");



  document.querySelectorAll(".gallery-thumb").forEach((v) => {



    v.addEventListener("click", () => {



      (document



        .querySelectorAll(".gallery-thumb")



        .forEach((C) => C.classList.remove("active")),



        v.classList.add("active"));



      const f = parseInt(v.getAttribute("data-img-index"));



      n && e[f] && (n.src = e[f]);



    });



  });



  const r = document.getElementById("selected-variant-label");



  document.querySelectorAll(".color-swatch").forEach((v) => {



    v.addEventListener("click", () => {



      (document



        .querySelectorAll(".color-swatch")



        .forEach((f) => f.classList.remove("active")),



        v.classList.add("active"),



        (t = v.getAttribute("data-variant-name")),



        r && (r.textContent = t));



    });



  });



  const l = document.getElementById("qty-minus"),



    d = document.getElementById("qty-plus"),



    c = document.getElementById("qty-value");



  l &&



    d &&



    c &&



    (l.addEventListener("click", () => {



      i > 1 && (i--, (c.textContent = i));



    }),



    d.addEventListener("click", () => {



      i < 5



        ? (i++, (c.textContent = i))



        : m.show({



            title: "Batas Jumlah",



            message: "Maksimal pemesanan adalah 5 unit per pesanan.",



            type: "warning",



          });



    }));



  const b = document.getElementById("add-to-cart-btn");



  b &&



    b.addEventListener("click", () => {



      (o.addToCart(a.id, t, i),



        m.show({



          title: "Dimasukkan ke Keranjang!",



          message: `${i}x ${a.name} (${t}) berhasil ditambahkan.`,



          type: "success",



        }));



    });



  const k = document.getElementById("buy-now-btn");



  k &&



    k.addEventListener("click", () => {



      (o.addToCart(a.id, t, i), (window.location.hash = "#/checkout/alamat"));



    });



  const h = document.getElementById("wishlist-btn");



  h &&



    h.addEventListener("click", () => {



      const v = o.toggleWishlist(a.id);



      h.classList.toggle("active", v);



      const f = h.querySelector("svg"),



        C = h.querySelector("span");



      (f &&



        (f.setAttribute("fill", v ? "var(--color-error)" : "none"),



        f.setAttribute("stroke", v ? "var(--color-error)" : "currentColor")),



        C && (C.textContent = v ? "Tersimpan" : "Simpan"),



        m.show({



          title: v ? "Tersimpan di Wishlist" : "Dihapus dari Wishlist",



          message: `${a.name} ${v ? "berhasil disimpan" : "telah dihapus"}.`,



          type: v ? "success" : "info",



        }));



    });



}



function X() {



  const s = o.getState(),



    a = s.cart || [],



    {



      subtotal: e,



      discount: t,



      shipping: i,



      total: n,



      itemCount: r,



    } = o.getCartTotals(),



    l = s.appliedCoupon;



  return a.length === 0



    ? `



      <div class="container" style="padding-top: var(--space-48); text-align: center; min-height: 50vh;">



        <div style="max-width: 440px; margin: 0 auto; padding: 48px 24px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md);">



          <div style="font-size: 40px; margin-bottom: 16px;">🛒</div>



          <h1 style="font-size: var(--text-h3); margin-bottom: 8px;">Keranjangmu masih kosong</h1>



          <p style="font-size: 14px; color: var(--color-ink-muted); margin-bottom: 24px;">



            Temukan barang fungsional dan desain yang kamu suka di katalog pilihan kami.



          </p>



          <a href="#/katalog" class="btn btn-primary">Mulai Belanja</a>



        </div>



      </div>



    `



    : `



    <div class="container" style="padding-top: var(--space-24);">



      <!-- Breadcrumb -->



      <nav class="breadcrumb" aria-label="Breadcrumb">



        <a href="#/">Beranda</a>



        <span class="breadcrumb-separator">/</span>



        <span style="color:var(--color-ink);">Keranjang</span>



      </nav>







      <!-- Page Title -->



      <div style="margin-bottom: var(--space-32);">



        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Keranjang belanjamu</h1>



        <p style="font-size: var(--text-body);">Dua pilihan bagus untuk hari yang lebih nyaman.</p>



      </div>







      <!-- Cart Layout: Items + Summary -->



      <div class="cart-layout">



        <!-- Left: Cart Items & Promo -->



        <div>



          <div class="cart-items-card">



            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--color-border);">



              <h2 style="font-size: var(--text-h4);">NusaShop</h2>



              <span class="badge badge-success">${a.length} barang tersedia</span>



            </div>







            <!-- Item Rows -->



            <div id="cart-item-list">



              ${a



                .map(



                  (d, c) => `



                <div class="cart-item-row" data-cart-index="${c}">



                  <img src="${d.image}" alt="${d.name}" class="cart-item-thumb" />



                  <div class="cart-item-info">



                    <h3 style="font-size: 15px; font-weight: 700; margin-bottom: 4px;">



                      <a href="#/produk/${d.productId}">${d.name}</a>



                    </h3>



                    <div style="font-size: 13px; color: var(--color-ink-muted); margin-bottom: 8px;">



                      ${d.variant} · ${d.qty} barang



                    </div>



                    <div style="font-weight: 700; font-size: 16px; color: var(--color-ink); margin-bottom: 10px;">



                      ${o.formatRupiah(d.price)}



                    </div>



                    



                    <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">



                      <div class="stepper">



                        <button class="stepper-btn cart-qty-minus" data-idx="${c}">-</button>



                        <span class="stepper-value">${d.qty}</span>



                        <button class="stepper-btn cart-qty-plus" data-idx="${c}">+</button>



                      </div>







                      <div class="cart-item-actions">



                        <button class="cart-action-save" data-id="${d.productId}" data-idx="${c}">Simpan</button>



                        <span>·</span>



                        <button class="cart-action-remove" data-idx="${c}">Hapus</button>



                      </div>



                    </div>



                  </div>



                </div>



              `,



                )



                .join("")}



            </div>



          </div>







          <!-- Promo Code Card -->



          <div class="coupon-card">



            <h3 style="font-size: var(--text-h4); margin-bottom: 4px;">Kode promo</h3>



            <div class="coupon-input-group">



              <input 



                type="text" 



                class="input-text" 



                id="cart-coupon-input" 



                placeholder="Masukkan kode promo (misal: NUSA100)" 



                value="${l || ""}" 



              />



              <button class="btn btn-outline" id="cart-coupon-apply-btn" style="flex-shrink:0;">



                Terapkan



              </button>



            </div>



            



            <div id="coupon-feedback-message" style="margin-top: 10px; font-size: 12px;">



              ${



                l === "NUSA100" && t > 0



                  ? `



                <div style="color: var(--color-success); font-weight: 600; margin-bottom: 2px;">



                  ✓ Informasi sudah sesuai.



                </div>



                <div style="color: var(--color-ink-muted);">



                  Potongan Rp100.000 untuk belanja pertama, minimum Rp1.000.000.



                </div>



              `



                  : `



                <div style="color: var(--color-ink-muted);">



                  Gunakan kode <b>NUSA100</b> untuk potongan Rp100.000 (min. belanja Rp1jt).



                </div>



              `



              }



            </div>



          </div>







          <!-- Continue Shopping Link -->



          <div style="margin-top: 24px;">



            <a href="#/katalog" style="font-size: 14px; color: var(--color-ink-muted); display: inline-flex; align-items: center; gap: 6px;">



              &larr; Lanjut belanja



            </a>



          </div>



        </div>







        <!-- Right: Sticky Order Summary -->



        <aside class="order-summary-card">



          <h2 style="font-size: var(--text-h3); margin-bottom: 16px;">Ringkasan belanja</h2>







          <!-- Item list breakdown -->



          <div style="font-size: 13px; color: var(--color-ink-muted); margin-bottom: 16px; border-bottom: 1px solid var(--color-border); padding-bottom: 12px;">



            ${a



              .map(



                (d) => `



              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">



                <span>${d.name} × ${d.qty}</span>



                <span>${o.formatRupiah(d.price * d.qty)}</span>



              </div>



            `,



              )



              .join("")}



          </div>







          <div class="summary-row">



            <span>Subtotal (${r} barang)</span>



            <span>${o.formatRupiah(e)}</span>



          </div>







          ${



            t > 0



              ? `



            <div class="summary-row" style="color: var(--color-success); font-weight: 600;">



              <span>Diskon ${l}</span>



              <span>-${o.formatRupiah(t)}</span>



            </div>



          `



              : ""



          }







          <div class="summary-row">



            <span>Pengiriman reguler</span>



            <span>${o.formatRupiah(i)}</span>



          </div>







          <div class="summary-row total-row">



            <span>Total pembayaran</span>



            <span class="summary-total-price">${o.formatRupiah(n)}</span>



          </div>







          ${



            t > 0



              ? `



            <div style="margin-top: 12px; margin-bottom: 16px;">



              <span class="badge badge-success" style="width: 100%; justify-content: center; padding: 6px 12px;">



                ✓ ${l} berhasil diterapkan



              </span>



            </div>



          `



              : ""



          }







          <div style="margin-top: 20px;">



            <a href="#/checkout/alamat" class="btn btn-primary btn-block btn-lg" id="proceed-to-checkout-btn">



              Checkout (${r} barang)



            </a>



          </div>







          <div style="font-size: 11px; color: var(--color-ink-muted); margin-top: 14px; line-height: 1.4; text-align: center;">



            Harga sudah termasuk pajak. Tidak ada biaya tambahan pada langkah berikutnya.



          </div>



        </aside>



      </div>



    </div>



  `;



}



function Z() {



  const a = o.getState().cart || [];



  (document.querySelectorAll(".cart-qty-minus").forEach((i) => {



    i.addEventListener("click", () => {



      var l;



      const n = parseInt(i.getAttribute("data-idx")),



        r = ((l = a[n]) == null ? void 0 : l.qty) || 1;



      o.updateCartQty(n, r - 1);



    });



  }),



    document.querySelectorAll(".cart-qty-plus").forEach((i) => {



      i.addEventListener("click", () => {



        var l;



        const n = parseInt(i.getAttribute("data-idx")),



          r = ((l = a[n]) == null ? void 0 : l.qty) || 1;



        r < 5



          ? o.updateCartQty(n, r + 1)



          : m.show({



              title: "Batas Maksimal",



              message: "Maksimal 5 barang per item.",



              type: "warning",



            });



      });



    }),



    document.querySelectorAll(".cart-action-remove").forEach((i) => {



      i.addEventListener("click", () => {



        var l;



        const n = parseInt(i.getAttribute("data-idx")),



          r = ((l = a[n]) == null ? void 0 : l.name) || "Barang";



        (o.removeFromCart(n),



          m.show({



            title: "Barang Dihapus",



            message: `${r} telah dikeluarkan dari keranjang.`,



            type: "info",



          }));



      });



    }),



    document.querySelectorAll(".cart-action-save").forEach((i) => {



      i.addEventListener("click", () => {



        var d;



        const n = i.getAttribute("data-id"),



          r = parseInt(i.getAttribute("data-idx")),



          l = ((d = a[r]) == null ? void 0 : d.name) || "Barang";



        (o.toggleWishlist(n),



          o.removeFromCart(r),



          m.show({



            title: "Dipindahkan ke Wishlist",



            message: `${l} telah disimpan ke wishlist kamu.`,



            type: "success",



          }));



      });



    }));



  const e = document.getElementById("cart-coupon-apply-btn"),



    t = document.getElementById("cart-coupon-input");



  e &&



    t &&



    e.addEventListener("click", () => {



      const i = t.value.trim(),



        n = o.applyCoupon(i);



      n.success



        ? m.show({



            title: "Kode Promo Diterapkan",



            message: n.message,



            type: "success",



          })



        : m.show({ title: "Kupon Gagal", message: n.message, type: "error" });



    });



}



function aa() {

  const s = o.getState(),

    defaultAddr = {

      fullName: (s.user && s.user.name) || "Alya Putri",

      phone: (s.user && s.user.phone) || "0812 3456 7890",

      street: "Jl. Melati No. 18, Tebet Barat",

      province: "DKI Jakarta",

      city: "Jakarta Selatan",

      district: "Tebet",

      postalCode: "12810",

      notes: "Rumah pagar putih, titipkan ke penerima.",

      tag: "Rumah · Alamat utama",

      isDefault: true,

    },

    a = s.address ? { ...defaultAddr, ...s.address } : defaultAddr,

    {

      subtotal: e,

      discount: t,

      shipping: i,

      total: n,

      itemCount: r,

    } = o.getCartTotals(),

    l = s.appliedCoupon,

    d = s.cart || [];



  const guestBanner = (!s.user || !s.user.isLoggedIn) ? `

    <div class="guest-checkout-banner" style="margin-bottom: 24px;">

      <div>

        <strong style="color: var(--color-ink); font-size: 14px;">Sudah punya akun NusaShop?</strong>

        <p style="margin: 0; font-size: 13px; color: var(--color-ink-muted);">Masuk untuk menggunakan alamat tersimpan Anda, atau lanjutkan pengisian di bawah sebagai Tamu.</p>

      </div>

      <a href="#/masuk?redirect=checkout" class="btn btn-sm btn-outline" style="font-weight: 600; flex-shrink: 0;">Masuk ke Akun</a>

    </div>

  ` : '';



  return `

    <div class="container" style="padding-top: var(--space-24); padding-bottom: var(--space-64);">

      ${guestBanner}

      <!-- Stepper Indicator -->

      <div class="checkout-stepper">

        <div class="step-indicator active">

          <div class="step-circle">1</div>

          <span>Alamat</span>

        </div>

        <div class="step-indicator">

          <div class="step-circle">2</div>

          <span>Pengiriman</span>

        </div>

        <div class="step-indicator">

          <div class="step-circle">3</div>

          <span>Pembayaran</span>

        </div>

      </div>



      <!-- Page Header -->

      <div style="margin-bottom: var(--space-28);">

        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Ke mana pesananmu dikirim?</h1>

        <p style="font-size: var(--text-body);">Langkah 1 dari 3 · Pastikan alamat dan nomor telepon sudah benar.</p>

      </div>



      <!-- 2-Column Layout -->

      <div class="cart-layout">

        <!-- Left: Address Form & Saved Address -->

        <div>

          <!-- Saved Address Preview Card -->

          <div class="card" style="margin-bottom: var(--space-24);">

            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">

              <h2 style="font-size: var(--text-h4);">Alamat pengiriman</h2>

              <button type="button" class="btn btn-outline btn-sm" id="btn-toggle-edit-address">Ubah</button>

            </div>

            <div style="font-weight: 700; font-size: 15px; margin-bottom: 4px;">

              ${a.fullName} · ${a.phone}

            </div>

            <div style="font-size: 14px; color: var(--color-ink-muted); line-height: 1.5; margin-bottom: 12px;">

              ${a.street}, ${a.district}<br/>

              ${a.city}, ${a.province} ${a.postalCode}

            </div>

            <span class="badge badge-primary">${a.tag || "Rumah · Alamat utama"}</span>

          </div>



          <!-- Recipient Details Form -->

          <form class="card" id="address-form" style="display: flex; flex-direction: column; gap: var(--space-16);">

            <h3 style="font-size: var(--text-h4); margin-bottom: 4px;">Detail penerima</h3>



            <div class="checkout-form-grid-2">

              <div class="form-group" style="margin-bottom: 0;">

                <label class="form-label" for="addr-name">Nama penerima <span class="required" style="color:var(--color-error);">*</span></label>

                <input type="text" class="input-text" id="addr-name" value="${a.fullName}" required />

              </div>

              <div class="form-group" style="margin-bottom: 0;">

                <label class="form-label" for="addr-phone">Nomor telepon <span class="required" style="color:var(--color-error);">*</span></label>

                <input type="tel" class="input-text" id="addr-phone" value="${a.phone}" required placeholder="08xxxxxxxxxx" />

                <span class="form-helper" style="font-size: 11.5px; color: var(--color-ink-muted); margin-top: 4px; display: block;">Contoh: 0812 3456 7890</span>

              </div>

            </div>



            <div class="form-group" style="margin-bottom: 0;">

              <label class="form-label" for="addr-street">Alamat lengkap <span class="required" style="color:var(--color-error);">*</span></label>

              <textarea class="input-textarea" id="addr-street" required style="min-height: 72px;">${a.street}</textarea>

            </div>



            <div class="checkout-form-grid-2">

              <div class="form-group" style="margin-bottom: 0;">

                <label class="form-label" for="addr-province">Provinsi <span class="required" style="color:var(--color-error);">*</span></label>

                <select class="input-select" id="addr-province" required>

                  <option value="DKI Jakarta" ${a.province === "DKI Jakarta" ? "selected" : ""}>DKI Jakarta</option>

                  <option value="Jawa Barat" ${a.province === "Jawa Barat" ? "selected" : ""}>Jawa Barat</option>

                  <option value="Banten" ${a.province === "Banten" ? "selected" : ""}>Banten</option>

                  <option value="Jawa Tengah" ${a.province === "Jawa Tengah" ? "selected" : ""}>Jawa Tengah</option>

                  <option value="DI Yogyakarta" ${a.province === "DI Yogyakarta" ? "selected" : ""}>DI Yogyakarta</option>

                  <option value="Jawa Timur" ${a.province === "Jawa Timur" ? "selected" : ""}>Jawa Timur</option>

                </select>

              </div>



              <div class="form-group" style="margin-bottom: 0;">

                <label class="form-label" for="addr-city">Kota / kabupaten <span class="required" style="color:var(--color-error);">*</span></label>

                <select class="input-select" id="addr-city" required>

                  <option value="Jakarta Selatan" ${a.city === "Jakarta Selatan" ? "selected" : ""}>Jakarta Selatan</option>

                  <option value="Jakarta Pusat" ${a.city === "Jakarta Pusat" ? "selected" : ""}>Jakarta Pusat</option>

                  <option value="Jakarta Barat" ${a.city === "Jakarta Barat" ? "selected" : ""}>Jakarta Barat</option>

                  <option value="Jakarta Timur" ${a.city === "Jakarta Timur" ? "selected" : ""}>Jakarta Timur</option>

                  <option value="Jakarta Utara" ${a.city === "Jakarta Utara" ? "selected" : ""}>Jakarta Utara</option>

                </select>

              </div>

            </div>



            <div class="checkout-form-grid-2">

              <div class="form-group" style="margin-bottom: 0;">

                <label class="form-label" for="addr-district">Kecamatan <span class="required" style="color:var(--color-error);">*</span></label>

                <select class="input-select" id="addr-district" required>

                  <option value="Tebet" ${a.district === "Tebet" ? "selected" : ""}>Tebet</option>

                  <option value="Setiabudi" ${a.district === "Setiabudi" ? "selected" : ""}>Setiabudi</option>

                  <option value="Kebayoran Baru" ${a.district === "Kebayoran Baru" ? "selected" : ""}>Kebayoran Baru</option>

                  <option value="Mampang Prapatan" ${a.district === "Mampang Prapatan" ? "selected" : ""}>Mampang Prapatan</option>

                  <option value="Pancoran" ${a.district === "Pancoran" ? "selected" : ""}>Pancoran</option>

                </select>

              </div>



              <div class="form-group" style="margin-bottom: 0;">

                <label class="form-label" for="addr-postal">Kode pos <span class="required" style="color:var(--color-error);">*</span></label>

                <input type="text" class="input-text" id="addr-postal" value="${a.postalCode || '12810'}" required maxlength="5" />

                <span class="form-helper" style="font-size: 11.5px; color: var(--color-ink-muted); margin-top: 4px; display: block;">Kode pos 5 digit</span>

              </div>

            </div>



            <div class="form-group" style="margin-bottom: 0;">

              <label class="form-label" for="addr-notes">Catatan kurir (opsional)</label>

              <input type="text" class="input-text" id="addr-notes" value="${a.notes || ''}" placeholder="Misal: Warna pagar, patokan gang" />

            </div>



            <div>

              <label class="checkbox-label" style="font-size: 13px;">

                <input type="checkbox" id="addr-default" checked />

                <span>Simpan sebagai alamat utama</span>

              </label>

            </div>



            <!-- Tombol submit di dalam form khusus tampilan seluler/mobile -->

            <div class="mobile-checkout-action-wrap" style="margin-top: 8px;">

              <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-next-to-shipping-mobile">

                Lanjut ke pengiriman &rarr;

              </button>

            </div>



            <div style="font-size: 11.5px; color: var(--color-ink-muted);">

              * Wajib diisi. Informasi ini hanya digunakan untuk pengiriman pesananmu.

            </div>

          </form>

        </div>



        <!-- Right: Order Summary -->

        <aside class="order-summary-card">

          <h2 style="font-size: var(--text-h3); margin-bottom: 16px;">Ringkasan belanja</h2>



          <div style="font-size: 13px; color: var(--color-ink-muted); margin-bottom: 16px; border-bottom: 1px solid var(--color-border); padding-bottom: 12px;">

            ${d

              .map(

                (c) => `

              <div style="display:flex; justify-content:space-between; margin-bottom:6px;">

                <span>${c.name} &times; ${c.qty}</span>

                <span style="font-weight:600; color:var(--color-ink);">${o.formatRupiah(c.price * c.qty)}</span>

              </div>

            `,

              )

              .join("")}

          </div>



          <div class="summary-row">

            <span>Subtotal (${r} barang)</span>

            <span>${o.formatRupiah(e)}</span>

          </div>



          ${

            t > 0

              ? `

            <div class="summary-row" style="color: var(--color-success); font-weight: 600;">

              <span>Diskon ${l}</span>

              <span>-${o.formatRupiah(t)}</span>

            </div>

          `

              : ""

          }



          <div class="summary-row">

            <span>Pengiriman reguler</span>

            <span>${o.formatRupiah(i)}</span>

          </div>



          <div class="summary-row total-row">

            <span>Total pembayaran</span>

            <span class="summary-total-price">${o.formatRupiah(n)}</span>

          </div>



          ${

            t > 0

              ? `

            <div style="margin-top: 12px; margin-bottom: 16px;">

              <span class="badge badge-success" style="width: 100%; justify-content: center; padding: 6px 12px;">

                ✓ ${l} berhasil diterapkan

              </span>

            </div>

          `

              : ""

          }



          <div style="margin-top: 20px;">

            <button type="button" class="btn btn-primary btn-block btn-lg" id="btn-next-to-shipping">

              Lanjut ke pengiriman

            </button>

          </div>



          <div style="font-size: 11px; color: var(--color-ink-muted); margin-top: 14px; line-height: 1.4; text-align: center;">

            Harga sudah termasuk pajak. Tidak ada biaya tambahan pada langkah berikutnya.

          </div>

        </aside>

      </div>

    </div>

  `;

}



function ea() {

  const form = document.getElementById("address-form");

  const nextBtn = document.getElementById("btn-next-to-shipping");

  const nextBtnMobile = document.getElementById("btn-next-to-shipping-mobile");

  const editToggleBtn = document.getElementById("btn-toggle-edit-address");



  if (editToggleBtn) {

    editToggleBtn.addEventListener("click", () => {

      const nameInput = document.getElementById("addr-name");

      if (nameInput) {

        nameInput.focus();

        nameInput.scrollIntoView({ behavior: "smooth", block: "center" });

      }

    });

  }



  function proceed() {

    const name = (document.getElementById("addr-name")?.value || "").trim();

    const rawPhone = (document.getElementById("addr-phone")?.value || "").trim();

    const street = (document.getElementById("addr-street")?.value || "").trim();

    const province = document.getElementById("addr-province")?.value || "DKI Jakarta";

    const city = document.getElementById("addr-city")?.value || "Jakarta Selatan";

    const district = document.getElementById("addr-district")?.value || "Tebet";

    const rawPostal = (document.getElementById("addr-postal")?.value || "").trim();

    const notes = (document.getElementById("addr-notes")?.value || "").trim();

    const isDefault = document.getElementById("addr-default")?.checked ?? true;



    if (!name) {

      m.show({

        title: "Nama Penerima Kosong",

        message: "Silakan isi nama lengkap penerima paket.",

        type: "error",

      });

      document.getElementById("addr-name")?.focus();

      return;

    }



    const cleanPhone = rawPhone.replace(/[^0-9]/g, "");

    if (cleanPhone.length < 9) {

      m.show({

        title: "Nomor Telepon Kurang",

        message: "Silakan masukkan nomor telepon aktif minimal 9 digit.",

        type: "error",

      });

      document.getElementById("addr-phone")?.focus();

      return;

    }



    if (!street) {

      m.show({

        title: "Alamat Pengiriman Kosong",

        message: "Silakan masukkan nama jalan, nomor rumah, atau detail alamat.",

        type: "error",

      });

      document.getElementById("addr-street")?.focus();

      return;

    }



    const cleanPostal = rawPostal.replace(/[^0-9]/g, "") || "12810";



    o.setAddress({

      fullName: name,

      phone: rawPhone,

      street: street,

      province: province,

      city: city,

      district: district,

      postalCode: cleanPostal,

      notes: notes,

      tag: "Rumah · Alamat utama",

      isDefault: isDefault,

    });



    window.location.hash = "#/checkout/pengiriman";

  }



  if (nextBtn) {

    nextBtn.addEventListener("click", (e) => {

      e.preventDefault();

      proceed();

    });

  }



  if (nextBtnMobile) {

    nextBtnMobile.addEventListener("click", (e) => {

      e.preventDefault();

      proceed();

    });

  }



  if (form) {

    form.addEventListener("submit", (e) => {

      e.preventDefault();

      proceed();

    });

  }

}

function ta() {



  const s = o.getState(),



    a = s.address,



    e = s.courier || { id: "reguler", cost: 2e4 },



    { subtotal: t, discount: i, total: n, itemCount: r } = o.getCartTotals(),



    l = s.appliedCoupon,



    d = s.cart || [];



  return `



    <div class="container" style="padding-top: var(--space-24);">



      ${guestBanner}



        <!-- Stepper Indicator -->



      <div class="checkout-stepper">



        <div class="step-indicator completed">



          <div class="step-circle">✓</div>



          <span>Alamat</span>



        </div>



        <div class="step-indicator active">



          <div class="step-circle">2</div>



          <span>Pengiriman</span>



        </div>



        <div class="step-indicator">



          <div class="step-circle">3</div>



          <span>Pembayaran</span>



        </div>



      </div>







      <!-- Page Header -->



      <div style="margin-bottom: var(--space-32);">



        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Pilih cara pesananmu tiba</h1>



        <p style="font-size: var(--text-body);">Langkah 2 dari 3 · Estimasi dihitung untuk alamat di ${a.district}, ${a.city}.</p>



      </div>







      <div class="cart-layout">



        <!-- Left: Address Summary & Courier Selection -->



        <div>



          <!-- Address Summary Card -->



          <div class="card" style="margin-bottom: var(--space-24);">



            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">



              <h2 style="font-size: var(--text-h4);">Alamat pengiriman</h2>



              <a href="#/checkout/alamat" class="btn btn-outline btn-sm">Ubah</a>



            </div>



            <div style="font-weight: 700; font-size: 15px; margin-bottom: 4px;">



              ${a.fullName} · ${a.phone}



            </div>



            <div style="font-size: 14px; color: var(--color-ink-muted); line-height: 1.5; margin-bottom: 8px;">



              ${a.street}, ${a.district}, ${a.city} ${a.postalCode}



            </div>



            <span class="badge badge-primary">${a.tag}</span>



          </div>







          <!-- Courier Options -->



          <div class="card" style="margin-bottom: var(--space-24);">



            <h3 style="font-size: var(--text-h4); margin-bottom: 16px;">Layanan pengiriman</h3>







            <!-- Reguler -->



            <div class="courier-option ${e.id === "reguler" ? "active" : ""}" data-courier-id="reguler">



              <label class="radio-label" style="flex:1; cursor:pointer;">



                <input type="radio" name="courier" value="reguler" ${e.id === "reguler" ? "checked" : ""} />



                <span class="radio-custom"></span>



                <span style="font-weight: 700;">Reguler</span>



                <span style="color: var(--color-ink-muted); margin-left: 12px; font-size: 13px;">Estimasi tiba 7–8 Oktober 2026</span>



              </label>



              <div style="font-weight: 700; font-size: 15px;">Rp20.000</div>



            </div>







            <!-- Express -->



            <div class="courier-option ${e.id === "express" ? "active" : ""}" data-courier-id="express">



              <label class="radio-label" style="flex:1; cursor:pointer;">



                <input type="radio" name="courier" value="express" ${e.id === "express" ? "checked" : ""} />



                <span class="radio-custom"></span>



                <span style="font-weight: 700;">Express</span>



                <span style="color: var(--color-ink-muted); margin-left: 12px; font-size: 13px;">Estimasi tiba 6 Oktober 2026</span>



              </label>



              <div style="font-weight: 700; font-size: 15px;">Rp35.000</div>



            </div>







            <div style="font-size: 12px; color: var(--color-ink-muted); margin-top: 12px;">



              Estimasi bukan jaminan waktu tiba. Status terbaru tersedia di halaman pesanan.



            </div>



          </div>







          <!-- Package Items Summary -->



          <div class="card">



            <h3 style="font-size: var(--text-h4); margin-bottom: 16px;">Dikirim dalam satu paket</h3>



            ${d



              .map(



                (c) => `



              <div style="display:flex; align-items:center; gap:16px; padding: 12px 0; border-bottom: 1px solid var(--color-border);">



                <img src="${c.image}" alt="${c.name}" style="width:60px; height:60px; border-radius:8px; object-fit:cover; background:var(--color-subtle);" />



                <div style="flex:1;">



                  <div style="font-weight:700; font-size:14px;">${c.name}</div>



                  <div style="font-size:12px; color:var(--color-ink-muted);">${c.variant} · ${c.qty} barang</div>



                  <div style="font-weight:600; font-size:14px; margin-top:2px;">${o.formatRupiah(c.price * c.qty)}</div>



                </div>



              </div>



            `,



              )



              .join("")}



          </div>







          <div style="margin-top: 24px;">



            <a href="#/checkout/alamat" style="font-size: 14px; color: var(--color-ink-muted); display: inline-flex; align-items: center; gap: 6px;">



              &larr; Kembali ke alamat



            </a>



          </div>



        </div>







        <!-- Right: Order Summary -->



        <aside class="order-summary-card">



          <h2 style="font-size: var(--text-h3); margin-bottom: 16px;">Ringkasan belanja</h2>







          <div style="font-size: 13px; color: var(--color-ink-muted); margin-bottom: 16px; border-bottom: 1px solid var(--color-border); padding-bottom: 12px;">



            ${d



              .map(



                (c) => `



              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">



                <span>${c.name} × ${c.qty}</span>



                <span>${o.formatRupiah(c.price * c.qty)}</span>



              </div>



            `,



              )



              .join("")}



          </div>







          <div class="summary-row">



            <span>Subtotal (${r} barang)</span>



            <span>${o.formatRupiah(t)}</span>



          </div>







          ${



            i > 0



              ? `



            <div class="summary-row" style="color: var(--color-success); font-weight: 600;">



              <span>Diskon ${l}</span>



              <span>-${o.formatRupiah(i)}</span>



            </div>



          `



              : ""



          }







          <div class="summary-row">



            <span>Pengiriman (${e.name || "Reguler"})</span>



            <span id="summary-shipping-cost">${o.formatRupiah(e.cost || 2e4)}</span>



          </div>







          <div class="summary-row total-row">



            <span>Total pembayaran</span>



            <span class="summary-total-price" id="summary-total-price">${o.formatRupiah(n)}</span>



          </div>







          ${



            i > 0



              ? `



            <div style="margin-top: 12px; margin-bottom: 16px;">



              <span class="badge badge-success" style="width: 100%; justify-content: center; padding: 6px 12px;">



                ✓ ${l} berhasil diterapkan



              </span>



            </div>



          `



              : ""



          }







          <div style="margin-top: 20px;">



            <a href="#/checkout/pembayaran" class="btn btn-primary btn-block btn-lg" id="btn-next-to-payment">



              Lanjut ke pembayaran



            </a>



          </div>







          <div style="font-size: 11px; color: var(--color-ink-muted); margin-top: 14px; line-height: 1.4; text-align: center;">



            Harga sudah termasuk pajak. Tidak ada biaya tambahan pada langkah berikutnya.



          </div>



        </aside>



      </div>



    </div>



  `;



}



function ia() {



  document.querySelectorAll(".courier-option").forEach((s) => {



    s.addEventListener("click", () => {



      const a = s.getAttribute("data-courier-id"),



        e = a === "express";



      (o.setCourier({



        id: a,



        name: e ? "Express" : "Reguler",



        estimation: e



          ? "Estimasi tiba 6 Oktober 2026"



          : "Estimasi tiba 7–8 Oktober 2026",



        cost: e ? 35e3 : 2e4,



      }),



        document



          .querySelectorAll(".courier-option")



          .forEach((l) => l.classList.remove("active")),



        s.classList.add("active"));



      const t = s.querySelector('input[type="radio"]');



      t && (t.checked = !0);



      const i = o.getCartTotals(),



        n = document.getElementById("summary-shipping-cost"),



        r = document.getElementById("summary-total-price");



      (n && (n.textContent = o.formatRupiah(i.shipping)),



        r && (r.textContent = o.formatRupiah(i.total)));



    });



  });



}



function na() {



  const s = o.getState(),



    a = s.address,



    e = s.courier,



    {



      subtotal: t,



      discount: i,



      shipping: n,



      total: r,



      itemCount: l,



    } = o.getCartTotals(),



    d = s.appliedCoupon,



    c = s.cart || [];



  return `



    <div class="container" style="padding-top: var(--space-24);">



      ${guestBanner}



        <!-- Stepper Indicator -->



      <div class="checkout-stepper">



        <div class="step-indicator completed">



          <div class="step-circle">✓</div>



          <span>Alamat</span>



        </div>



        <div class="step-indicator completed">



          <div class="step-circle">✓</div>



          <span>Pengiriman</span>



        </div>



        <div class="step-indicator active">



          <div class="step-circle">3</div>



          <span>Pembayaran</span>



        </div>



      </div>







      <!-- Page Header -->



      <div style="margin-bottom: var(--space-32);">



        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Satu langkah lagi</h1>



        <p style="font-size: var(--text-body);">Langkah 3 dari 3 · Pilih pembayaran, lalu tinjau pesananmu.</p>



      </div>







      <div class="cart-layout">



        <!-- Left: Payment Options & Order Confirmation -->



        <div>



          <!-- Payment Options Card -->



          <div class="card" style="margin-bottom: var(--space-24);">



            <h2 style="font-size: var(--text-h4); margin-bottom: 16px;">Bayar dengan</h2>







            <!-- Option 1: Transfer Bank VA -->



            <div class="payment-option active" data-payment-type="bank" id="pay-opt-bank">



              <div style="display:flex; align-items:center; gap:12px;">



                <div style="color:var(--color-primary); font-size:20px;">🏛</div>



                <div>



                  <div style="font-weight:700;">Transfer bank</div>



                  <div style="font-size:12px; color:var(--color-ink-muted);">Virtual account · Verifikasi otomatis</div>



                </div>



              </div>



              <input type="radio" name="payment" value="bank" checked />



              <span class="radio-custom" style="border-width:5px; border-color:var(--color-primary);"></span>



            </div>







            <!-- Bank Selection Sub-dropdown -->



            <div id="bank-select-box" style="margin: 12px 0 20px 0; padding-left: 12px;">



              <label class="form-label" style="font-size: 13px;">Bank tujuan</label>



              <select class="input-select" id="bank-dropdown" style="margin-top: 4px;">



                <option value="BCA Virtual Account" selected>BCA Virtual Account</option>



                <option value="Mandiri Virtual Account">Mandiri Virtual Account</option>



                <option value="BNI Virtual Account">BNI Virtual Account</option>



                <option value="BRI Virtual Account">BRI Virtual Account</option>



              </select>



            </div>







            <!-- Option 2: E-Wallet -->



            <div class="payment-option" data-payment-type="ewallet" id="pay-opt-ewallet">



              <div style="display:flex; align-items:center; gap:12px;">



                <div style="color:var(--color-secondary); font-size:20px;">📱</div>



                <div>



                  <div style="font-weight:700;">E-wallet</div>



                  <div style="font-size:12px; color:var(--color-ink-muted);">GoPay / OVO / DANA</div>



                </div>



              </div>



              <input type="radio" name="payment" value="ewallet" />



              <span class="radio-custom"></span>



            </div>







            <!-- Option 3: Credit Card -->



            <div class="payment-option" data-payment-type="card" id="pay-opt-card">



              <div style="display:flex; align-items:center; gap:12px;">



                <div style="color:var(--color-ink); font-size:20px;">💳</div>



                <div>



                  <div style="font-weight:700;">Kartu debit / kredit</div>



                  <div style="font-size:12px; color:var(--color-ink-muted);">Visa / Mastercard</div>



                </div>



              </div>



              <input type="radio" name="payment" value="card" />



              <span class="radio-custom"></span>



            </div>







            <div style="font-size: 12px; color: var(--color-ink-muted); margin-top: 16px;">



              Nomor virtual account muncul setelah kamu membuat pesanan. Selesaikan pembayaran dalam 24 jam.



            </div>



          </div>







          <!-- Address Summary Review -->



          <div class="card" style="margin-bottom: var(--space-16);">



            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">



              <h3 style="font-size: var(--text-h4);">Alamat pengiriman</h3>



              <a href="#/checkout/alamat" class="btn btn-outline btn-sm">Ubah</a>



            </div>



            <div style="font-weight: 700; font-size: 14px; margin-bottom: 2px;">



              ${a.fullName} · ${a.phone}



            </div>



            <div style="font-size: 13px; color: var(--color-ink-muted); margin-bottom: 8px;">



              ${a.street}, ${a.district}, ${a.city} ${a.postalCode}



            </div>



            <span class="badge badge-primary">${a.tag}</span>



          </div>







          <!-- Shipping Summary Review -->



          <div class="card" style="margin-bottom: var(--space-24);">



            <div style="display:flex; justify-content:space-between; align-items:center;">



              <div>



                <strong style="font-size: 14px;">${e.name} · ${e.estimation}</strong>



                <div style="font-size: 12px; color: var(--color-ink-muted);">${o.formatRupiah(e.cost)}</div>



              </div>



              <a href="#/checkout/pengiriman" class="btn btn-outline btn-sm">Ubah</a>



            </div>



          </div>







          <div>



            <a href="#/checkout/pengiriman" style="font-size: 14px; color: var(--color-ink-muted); display: inline-flex; align-items: center; gap: 6px;">



              &larr; Kembali ke pengiriman



            </a>



          </div>



        </div>







        <!-- Right: Order Summary -->



        <aside class="order-summary-card">



          <h2 style="font-size: var(--text-h3); margin-bottom: 16px;">Ringkasan belanja</h2>







          <div style="font-size: 13px; color: var(--color-ink-muted); margin-bottom: 16px; border-bottom: 1px solid var(--color-border); padding-bottom: 12px;">



            ${c



              .map(



                (b) => `



              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">



                <span>${b.name} × ${b.qty}</span>



                <span>${o.formatRupiah(b.price * b.qty)}</span>



              </div>



            `,



              )



              .join("")}



          </div>







          <div class="summary-row">



            <span>Subtotal (${l} barang)</span>



            <span>${o.formatRupiah(t)}</span>



          </div>







          ${



            i > 0



              ? `



            <div class="summary-row" style="color: var(--color-success); font-weight: 600;">



              <span>Diskon ${d}</span>



              <span>-${o.formatRupiah(i)}</span>



            </div>



          `



              : ""



          }







          <div class="summary-row">



            <span>Pengiriman ${e.name}</span>



            <span>${o.formatRupiah(n)}</span>



          </div>







          <div class="summary-row total-row">



            <span>Total pembayaran</span>



            <span class="summary-total-price">${o.formatRupiah(r)}</span>



          </div>







          ${



            i > 0



              ? `



            <div style="margin-top: 12px; margin-bottom: 16px;">



              <span class="badge badge-success" style="width: 100%; justify-content: center; padding: 6px 12px;">



                ✓ ${d} berhasil diterapkan



              </span>



            </div>



          `



              : ""



          }







          <!-- Agreement Checkbox -->



          <div style="margin-top: 16px; margin-bottom: 16px;">



            <label class="checkbox-label" style="align-items: flex-start;">



              <input type="checkbox" id="terms-agree" checked style="margin-top: 3px;" />



              <span class="checkbox-custom" style="margin-top: 2px;">✓</span>



              <span style="font-size: 12px; line-height: 1.4;">Saya menyetujui ketentuan pemesanan dan kebijakan pengembalian.</span>



            </label>



          </div>







          <button class="btn btn-primary btn-block btn-lg" id="btn-submit-order">



            <span id="btn-submit-label">Buat pesanan</span>



          </button>







          <div style="font-size: 11px; color: var(--color-ink-muted); margin-top: 14px; line-height: 1.4; text-align: center;">



            Dengan membuat pesanan, kamu menyetujui Syarat & Ketentuan serta Kebijakan Pengembalian.



          </div>



        </aside>



      </div>



    </div>



  `;



}



function sa() {



  const s = document.querySelectorAll(".payment-option"),



    a = document.getElementById("bank-select-box");



  s.forEach((n) => {



    n.addEventListener("click", () => {



      (s.forEach((d) => {



        d.classList.remove("active");



        const c = d.querySelector(".radio-custom");



        c &&



          ((c.style.borderColor = "var(--color-border)"),



          (c.style.borderWidth = "1.5px"));



      }),



        n.classList.add("active"));



      const r = n.querySelector(".radio-custom");



      r &&



        ((r.style.borderColor = "var(--color-primary)"),



        (r.style.borderWidth = "5px"));



      const l = n.getAttribute("data-payment-type");



      a && (a.style.display = l === "bank" ? "block" : "none");



    });



  });



  const e = document.getElementById("btn-submit-order"),



    t = document.getElementById("btn-submit-label"),



    i = document.getElementById("terms-agree");



  e &&



    e.addEventListener("click", (n) => {



      if ((n.preventDefault(), !i.checked)) {



        m.show({



          title: "Persetujuan Diperlukan",



          message: "Harap setujui syarat dan ketentuan sebelum melanjutkan.",



          type: "warning",



        });



        return;



      }



      ((e.disabled = !0),



        (e.style.opacity = "0.7"),



        (t.innerHTML = `



        <span style="display:inline-flex; align-items:center; gap:8px;">



          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">



            <line x1="12" y1="2" x2="12" y2="6"/>



            <line x1="12" y1="18" x2="12" y2="22"/>



            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>



            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>



            <line x1="2" y1="12" x2="6" y2="12"/>



            <line x1="18" y1="12" x2="22" y2="12"/>



            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>



            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>



          </svg>



          Memproses pembayaran...



        </span>



      `),



        setTimeout(() => {



          (o.placeOrder(), (window.location.hash = "#/checkout/sukses"));



        }, 700));



    });



}



function ra(s) {



  const a = o.getState(),



    e = a.orders.find((n) => n.id === s) || a.orders[0];



  if (!e) return;



  const t = document.getElementById("invoice-modal-overlay");



  t && t.remove();



  const i = document.createElement("div");



  ((i.id = "invoice-modal-overlay"),



    (i.style.cssText = `



    position: fixed;



    top: 0; left: 0; right: 0; bottom: 0;



    background: rgba(15, 23, 42, 0.6);



    backdrop-filter: blur(4px);



    z-index: 10000;



    display: flex;



    align-items: center;



    justify-content: center;



    padding: 20px;



  `),



    (i.innerHTML = `



    <div style="



      background: var(--color-surface);



      color: var(--color-ink);



      border-radius: var(--radius-lg);



      border: 1px solid var(--color-border);



      box-shadow: var(--shadow-xl);



      max-width: 650px;



      width: 100%;



      max-height: 90vh;



      overflow-y: auto;



      padding: 36px;



      position: relative;



      font-family: var(--font-body);



    ">



      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px; border-bottom:1px solid var(--color-border); padding-bottom:18px;">



        <div>



          <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:22px;">



            <span style="color:var(--color-primary);">NusaShop</span>



            <span style="font-size:12px; font-weight:normal; color:var(--color-ink-muted);">· Faktur Resmi</span>



          </div>



          <p style="font-size:12px; color:var(--color-ink-muted); margin-top:4px;">



            PT Nusa Niaga Indonesia · Jakarta Selatan, DKI Jakarta



          </p>



        </div>



        <div style="text-align:right;">



          <div style="font-size:16px; font-weight:700;">#${e.id}</div>



          <div style="font-size:12px; color:var(--color-ink-muted);">${e.date}</div>



          <span class="badge badge-success" style="margin-top:4px;">Lunas</span>



        </div>



      </div>







      <div class="checkout-form-grid-2" style="font-size:13px; margin-bottom:20px;">



        <div>



          <div style="font-weight:700; color:var(--color-ink-muted); margin-bottom:4px; text-transform:uppercase; font-size:11px;">Penerima</div>



          <div style="font-weight:600;">${e.recipient.name}</div>



          <div>${e.recipient.phone}</div>



          <div style="color:var(--color-ink-muted); line-height:1.4;">${e.recipient.address}</div>



        </div>



        <div>



          <div style="font-weight:700; color:var(--color-ink-muted); margin-bottom:4px; text-transform:uppercase; font-size:11px;">Pengiriman & Pembayaran</div>



          <div>Metode: <b>${e.courierName}</b></div>



          <div>No. Resi: <b>${e.resi}</b></div>



          <div>Bayar: <b>Transfer Virtual Account</b></div>



          <div style="font-size:11px; color:var(--color-ink-muted);">${e.paidAt}</div>



        </div>



      </div>







      <div class="invoice-table-wrapper" style="overflow-x:auto; -webkit-overflow-scrolling:touch; margin-bottom:20px;"><table style="width:100%; min-width:380px; border-collapse:collapse; font-size:13px;">



        <thead>



          <tr style="border-bottom:2px solid var(--color-border); text-align:left; color:var(--color-ink-muted);">



            <th style="padding:8px 0;">Item</th>



            <th style="padding:8px 0; text-align:center;">Jumlah</th>



            <th style="padding:8px 0; text-align:right;">Harga Satuan</th>



            <th style="padding:8px 0; text-align:right;">Total</th>



          </tr>



        </thead>



        <tbody>



          ${e.items



            .map(



              (n) => `



            <tr style="border-bottom:1px solid var(--color-border);">



              <td style="padding:10px 0;">



                <div style="font-weight:600;">${n.name}</div>



                <div style="font-size:11px; color:var(--color-ink-muted);">${n.variant || ""}</div>



              </td>



              <td style="padding:10px 0; text-align:center;">${n.qty || 1}</td>



              <td style="padding:10px 0; text-align:right;">${o.formatRupiah(n.price)}</td>



              <td style="padding:10px 0; text-align:right; font-weight:600;">${o.formatRupiah(n.price * (n.qty || 1))}</td>



            </tr>



          `,



            )



            .join("")}



        </tbody>



      </table>







      <div style="display:flex; justify-content:flex-end; font-size:13px;">



        <div style="width:100%; max-width:260px;">



          <div style="display:flex; justify-content:space-between; margin-bottom:6px; color:var(--color-ink-muted);">



            <span>Subtotal:</span>



            <span>${o.formatRupiah(e.subtotal)}</span>



          </div>



          ${



            e.discount > 0



              ? `



            <div style="display:flex; justify-content:space-between; margin-bottom:6px; color:var(--color-success);">



              <span>Diskon (${e.discountCode}):</span>



              <span>-${o.formatRupiah(e.discount)}</span>



            </div>



          `



              : ""



          }



          <div style="display:flex; justify-content:space-between; margin-bottom:8px; color:var(--color-ink-muted);">



            <span>Biaya Pengiriman:</span>



            <span>${o.formatRupiah(e.shipping)}</span>



          </div>



          <div style="display:flex; justify-content:space-between; border-top:2px solid var(--color-border); padding-top:8px; font-weight:700; font-size:16px;">



            <span>Total Bayar:</span>



            <span style="color:var(--color-primary);">${o.formatRupiah(e.total)}</span>



          </div>



        </div>



      </div>







      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:28px; border-top:1px solid var(--color-border); padding-top:20px;">



        <button class="btn btn-outline" id="close-invoice-modal-btn">Tutup</button>



        <button class="btn btn-primary" id="print-invoice-modal-btn">



          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



            <polyline points="6 9 6 2 18 2 18 9"/>



            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>



            <rect x="6" y="14" width="12" height="8"/>



          </svg>



          Cetak Faktur



        </button>



      </div>



    </div>



  `),



    document.body.appendChild(i),



    document



      .getElementById("close-invoice-modal-btn")



      .addEventListener("click", () => {



        i.remove();



      }),



    document



      .getElementById("print-invoice-modal-btn")



      .addEventListener("click", () => {



        window.print();



      }),



    i.addEventListener("click", (n) => {



      n.target === i && i.remove();



    }));



}



function oa() {



  const s = o.getState(),



    a = s.orders[0] || {



      id: "NS-261005-0184",



      paidAt: "5 Oktober 2026, 10.32",



      recipient: s.address,



      items: [],



      subtotal: 1448e3,



      discount: 1e5,



      shipping: 2e4,



      total: 1368e3,



    };



  return `



    <div class="container" style="padding-top: var(--space-32); padding-bottom: var(--space-64);">



      <!-- Hero Celebration Header -->



      <section class="order-success-hero">



        <div class="success-check-icon">



          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">



            <polyline points="20 6 9 17 4 12"/>



          </svg>



        </div>



        <h1 style="font-size: var(--text-h2);">Terima kasih, Alya!</h1>



        <p style="font-size: var(--text-body); color: var(--color-ink-muted);">



          Pembayaran diterima. Kami akan menyiapkan pilihanmu.



        </p>



        <div style="margin-top: 4px;">



          <span class="badge badge-success">



            ✓ Pembayaran berhasil · ${a.paidAt}



          </span>



        </div>



      </section>







      <!-- 2-Column Summary -->



      <div class="cart-layout">



        <!-- Left: Order Items & Delivery Target -->



        <div>



          <div class="card" style="margin-bottom: var(--space-24);">



            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--color-border);">



              <h2 style="font-size: var(--text-h4);">Pesanan #${a.id}</h2>



              <button class="btn btn-outline btn-sm" id="btn-open-invoice" style="display:inline-flex; align-items:center; gap:4px;">



                <span>Unduh invoice</span>



                <span style="font-size:12px;">↗</span>



              </button>



            </div>







            <!-- Items -->



            <div style="margin-bottom: 24px;">



              ${a.items



                .map(



                  (e) => `



                <div style="display:flex; align-items:center; gap:16px; padding:12px 0; border-bottom:1px solid var(--color-border);">



                  <img src="${e.image}" alt="${e.name}" style="width:64px; height:64px; border-radius:8px; object-fit:cover; background:var(--color-subtle);" />



                  <div style="flex:1;">



                    <div style="font-weight:700; font-size:15px;">${e.name}</div>



                    <div style="font-size:13px; color:var(--color-ink-muted);">${e.variant} · ${e.qty || 1} barang</div>



                    <div style="font-weight:600; font-size:14px; margin-top:2px;">${o.formatRupiah(e.price)}</div>



                  </div>



                </div>



              `,



                )



                .join("")}



            </div>







            <!-- Destination & Shipping Details -->



            <div class="checkout-form-grid-2" style="font-size:13px; margin-bottom:24px;">



              <div>



                <div style="font-weight:700; color:var(--color-ink-muted); margin-bottom:4px; font-size:11px; text-transform:uppercase;">Dikirim untuk</div>



                <div style="font-weight:600;">${a.recipient.fullName || a.recipient.name}</div>



                <div style="color:var(--color-ink-muted); line-height:1.4;">${a.recipient.street || a.recipient.address}</div>



              </div>



              <div>



                <div style="font-weight:700; color:var(--color-ink-muted); margin-bottom:4px; font-size:11px; text-transform:uppercase;">Pengiriman</div>



                <div style="font-weight:600;">${a.courierName || "Reguler"} · ${a.deliveryEstimate}</div>



                <div style="color:var(--color-ink-muted); line-height:1.4;">Nomor resi akan muncul setelah paket diserahkan ke kurir.</div>



              </div>



            </div>







            <!-- Buttons -->



            <div style="display:flex; gap:12px; border-top:1px solid var(--color-border); padding-top:16px;">



              <a href="#/lacak/${a.id}" class="btn btn-primary">Lihat pesanan</a>



              <a href="#/katalog" class="btn btn-outline">Lanjut belanja</a>



            </div>



          </div>



        </div>







        <!-- Right: Order Summary -->



        <aside class="order-summary-card">



          <h2 style="font-size: var(--text-h3); margin-bottom: 16px;">Ringkasan belanja</h2>







          <div class="summary-row">



            <span>Subtotal</span>



            <span>${o.formatRupiah(a.subtotal)}</span>



          </div>







          ${



            a.discount > 0



              ? `



            <div class="summary-row" style="color: var(--color-success); font-weight: 600;">



              <span>Diskon ${a.discountCode || "NUSA100"}</span>



              <span>-${o.formatRupiah(a.discount)}</span>



            </div>



          `



              : ""



          }







          <div class="summary-row">



            <span>Pengiriman ${a.courierName || "reguler"}</span>



            <span>${o.formatRupiah(a.shipping)}</span>



          </div>







          <div class="summary-row total-row">



            <span>Total pembayaran</span>



            <span class="summary-total-price">${o.formatRupiah(a.total)}</span>



          </div>







          <div style="margin-top: 12px; margin-bottom: 16px;">



            <span class="badge badge-success" style="width: 100%; justify-content: center; padding: 6px 12px;">



              ✓ Lunas · Verifikasi otomatis



            </span>



          </div>







          <div style="font-size: 11px; color: var(--color-ink-muted); margin-top: 14px; line-height: 1.4; text-align: center;">



            Konfirmasi pesanan telah dikirim ke email kamu.



          </div>



        </aside>



      </div>







      <div style="text-align: center; font-size: 13px; color: var(--color-ink-muted); margin-top: 32px;">



        Konfirmasi dikirim ke <b>${s.user.email}</b>. Butuh bantuan? <a href="#/bantuan" style="color:var(--color-primary); text-decoration:underline;">Hubungi tim NusaShop</a> dengan nomor pesanan di atas.



      </div>



    </div>



  `;



}



function la() {



  var e;



  const a = o.getState().orders[0];



  (e = document.getElementById("btn-open-invoice")) == null ||



    e.addEventListener("click", () => {



      ra((a == null ? void 0 : a.id) || "NS-261005-0184");



    });



}



function da(s) {



  const a = o.getState(),



    e = a.orders.find((i) => i.id === s) || a.orders[0],



    t = e.status === "selesai";



  return `



    <div class="container" style="padding-top: var(--space-24); padding-bottom: var(--space-64);">



      <!-- Breadcrumb -->



      <nav class="breadcrumb" aria-label="Breadcrumb">



        <a href="#/">Beranda</a>



        <span class="breadcrumb-separator">/</span>



        <a href="#/akun">Akun</a>



        <span class="breadcrumb-separator">/</span>



        <a href="#/akun">Pesanan</a>



        <span class="breadcrumb-separator">/</span>



        <span style="color:var(--color-ink);">${e.id}</span>



      </nav>







      <!-- Page Title -->



      <div style="margin-bottom: var(--space-24);">



        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Pesanan #${e.id}</h1>



        <p style="font-size: var(--text-body);">Dibuat ${e.date} · Pembayaran transfer bank diterima pada 10.32 WIB.</p>



      </div>







      <!-- Top Status Banner -->



      <div class="card" style="background-color: var(--color-primary-subtle); border-color: rgba(37, 99, 235, 0.2); margin-bottom: var(--space-32); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">



        <div style="display: flex; align-items: center; gap: 16px;">



          <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary); color: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">



            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">



              <rect x="1" y="3" width="15" height="13"/>



              <polygon points="16 8 20 8 23 11 23 16 16 16 8"/>



              <circle cx="5.5" cy="18.5" r="2.5"/>



              <circle cx="18.5" cy="18.5" r="2.5"/>



            </svg>



          </div>



          <div>



            <div style="font-size: 18px; font-weight: 700; color: var(--color-ink); margin-bottom: 2px;">



              ${t ? "Paket telah diterima" : "Sedang menuju alamatmu"}



            </div>



            <div style="font-size: 14px; color: var(--color-ink-muted);">



              ${t ? "Diterima pada 8 Oktober 2026 · Reguler" : "Estimasi tiba 7–8 Oktober 2026 · Reguler"}



            </div>



          </div>



        </div>



        <a href="#/bantuan" class="btn btn-outline" style="background: var(--color-surface);">



          Hubungi bantuan



        </a>



      </div>







      <div class="cart-layout">



        <!-- Left: Tracking Timeline & Items -->



        <div>



          <!-- Timeline Card -->



          <div class="card" style="margin-bottom: var(--space-24);">



            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">



              <div>



                <h2 style="font-size: var(--text-h4); margin-bottom: 2px;">Lacak pengiriman</h2>



                <div style="font-size: 13px; color: var(--color-ink-muted);">



                  ${e.courierName} · Resi ${e.resi} (ilustrasi)



                </div>



              </div>



              <button class="btn btn-outline btn-sm" id="btn-copy-resi">Salin resi</button>



            </div>







            <!-- Vertical Timeline Events -->



            <div class="timeline-list">



              ${e.timeline



                .map(



                  (i) => `



                <div class="timeline-event ${i.active ? "active" : ""}">



                  <div class="timeline-dot"></div>



                  <div class="timeline-title">${i.title}</div>



                  <div class="timeline-time">${i.time}</div>



                  <div class="timeline-desc">${i.description}</div>



                </div>



              `,



                )



                .join("")}



            </div>



          </div>







          <!-- Items in order -->



          <div class="card">



            <h3 style="font-size: var(--text-h4); margin-bottom: 16px;">Barang dalam pesanan</h3>



            ${e.items



              .map(



                (i) => `



              <div style="display:flex; align-items:center; gap:16px; padding: 14px 0; border-bottom: 1px solid var(--color-border);">



                <img src="${i.image}" alt="${i.name}" style="width:64px; height:64px; border-radius:8px; object-fit:cover; background:var(--color-subtle);" />



                <div style="flex:1;">



                  <div style="font-weight:700; font-size:15px;">${i.name}</div>



                  <div style="font-size:13px; color:var(--color-ink-muted);">${i.variant} · ${i.qty || 1} barang</div>



                  <div style="font-weight:600; font-size:14px; margin-top:2px;">${o.formatRupiah(i.price)}</div>



                </div>



              </div>



            `,



              )



              .join("")}



          </div>



        </div>







        <!-- Right: Address & Summary & Return CTA -->



        <aside style="display:flex; flex-direction:column; gap: var(--space-24);">



          <!-- Address Card -->



          <div class="card">



            <h3 style="font-size: var(--text-h4); margin-bottom: 12px;">Alamat pengiriman</h3>



            <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px;">



              ${e.recipient.fullName || e.recipient.name} · ${e.recipient.phone}



            </div>



            <div style="font-size: 13px; color: var(--color-ink-muted); line-height: 1.5; margin-bottom: 10px;">



              ${e.recipient.street || e.recipient.address}



            </div>



            <span class="badge badge-primary">Rumah · Alamat utama</span>



          </div>







          <!-- Summary Card -->



          <div class="card">



            <h3 style="font-size: var(--text-h4); margin-bottom: 16px;">Ringkasan belanja</h3>



            <div style="font-size: 13px; color: var(--color-ink-muted); margin-bottom: 12px; border-bottom: 1px solid var(--color-border); padding-bottom: 8px;">



              ${e.items



                .map(



                  (i) => `



                <div style="display:flex; justify-content:space-between; margin-bottom:4px;">



                  <span>${i.name} × ${i.qty || 1}</span>



                  <span>${o.formatRupiah(i.price * (i.qty || 1))}</span>



                </div>



              `,



                )



                .join("")}



            </div>







            <div class="summary-row">



              <span>Subtotal (${e.items.length} barang)</span>



              <span>${o.formatRupiah(e.subtotal)}</span>



            </div>







            ${



              e.discount > 0



                ? `



              <div class="summary-row" style="color: var(--color-success); font-weight: 600;">



                <span>Diskon ${e.discountCode || "NUSA100"}</span>



                <span>-${o.formatRupiah(e.discount)}</span>



              </div>



            `



                : ""



            }







            <div class="summary-row">



              <span>Pengiriman reguler</span>



              <span>${o.formatRupiah(e.shipping)}</span>



            </div>







            <div class="summary-row total-row">



              <span>Total pembayaran</span>



              <span class="summary-total-price">${o.formatRupiah(e.total)}</span>



            </div>







            <div style="margin-top: 12px;">



              <span class="badge badge-success" style="width: 100%; justify-content: center; padding: 6px 12px;">



                ✓ NUSA100 berhasil diterapkan



              </span>



            </div>



          </div>







          <!-- Return CTA Card -->



          <div class="card">



            <h3 style="font-size: var(--text-h4); margin-bottom: 8px;">Setelah paket tiba</h3>



            <p style="font-size: 13px; color: var(--color-ink-muted); line-height: 1.5; margin-bottom: 16px;">



              Periksa barang sebelum mengonfirmasi pesanan. Pengembalian tersedia selama 7 hari sejak diterima.



            </p>



            



            <a 



              href="${t ? `#/retur/${e.id}` : "javascript:void(0)"}" 



              class="btn ${t ? "btn-primary" : "btn-outline"} btn-block" 



              id="btn-return-action"



            >



              Ajukan pengembalian



            </a>







            <div style="font-size: 11px; color: var(--color-ink-muted); margin-top: 10px; text-align: center;">



              ${t ? "Batas pengajuan retur hingga 15 Oktober 2026." : "Tersedia setelah status pesanan diterima. (Gunakan tombol 'Ubah Status' di Demo Bar untuk mencoba)"}



            </div>



          </div>



        </aside>



      </div>



    </div>



  `;



}



function ca(s) {



  var i;



  const a = o.getState(),



    e = a.orders.find((n) => n.id === s) || a.orders[0];



  (i = document.getElementById("btn-copy-resi")) == null ||



    i.addEventListener("click", () => {



      var n;



      ((n = navigator.clipboard) == null || n.writeText(e.resi),



        m.show({



          title: "Nomor Resi Disalin",



          message: `Resi ${e.resi} telah disalin ke clipboard.`,



          type: "success",



        }));



    });



  const t = document.getElementById("btn-return-action");



  t &&



    e.status !== "selesai" &&



    t.addEventListener("click", () => {



      m.show({



        title: "Paket Masih Dikirim",



        message:



          "Pengajuan retur hanya dapat dilakukan setelah paket berstatus diterima. Kamu dapat mengubah status melalui bilah Demo Bar di bagian bawah.",



        type: "warning",



      });



    });



}



function pa(s) {



  const a = o.getState(),



    e = a.orders.find((r) => r.id === s) || a.orders[0],



    t = e.items[0] || {



      name: "NusaSound Air ANC",



      variant: "Midnight Blue",



      price: 899e3,



      image: "/assets/images/products/nusasound-air-anc.jpg",



    },



    i =



      e.subtotal > 0



        ? Math.round((t.price / e.subtotal) * (e.discount || 0))



        : 0,



    n = t.price - i;



  return `



    <div class="container" style="padding-top: var(--space-24); padding-bottom: var(--space-64);">



      <!-- Breadcrumb -->



      <nav class="breadcrumb" aria-label="Breadcrumb">



        <a href="#/">Beranda</a>



        <span class="breadcrumb-separator">/</span>



        <a href="#/akun">Akun</a>



        <span class="breadcrumb-separator">/</span>



        <a href="#/lacak/${e.id}">Pesanan #${e.id}</a>



        <span class="breadcrumb-separator">/</span>



        <span style="color:var(--color-ink);">Pengembalian</span>



      </nav>







      <!-- Page Header -->



      <div style="margin-bottom: var(--space-32);">



        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Bantu kami memahami kendalanya</h1>



        <p style="font-size: var(--text-body);">



          Pengembalian untuk #${e.id} · Skenario lanjutan: diterima 8 Oktober, diajukan 9 Oktober 2026.



        </p>



      </div>







      <div class="cart-layout">



        <!-- Left: Return Form -->



        <div>



          <form class="card" id="return-form" style="display:flex; flex-direction:column; gap: var(--space-20);">



            <h2 style="font-size: var(--text-h4);">Barang yang dikembalikan</h2>







            <!-- Item Row -->



            <div style="display:flex; align-items:center; gap:16px; padding:12px; border:1px solid var(--color-border); border-radius:var(--radius-sm); background:var(--color-subtle);">



              <img src="${t.image}" alt="${t.name}" style="width:64px; height:64px; border-radius:8px; object-fit:cover; background:#fff;" />



              <div>



                <div style="font-weight:700; font-size:15px;">${t.name}</div>



                <div style="font-size:13px; color:var(--color-ink-muted);">${t.variant} · 1 barang</div>



                <div style="font-weight:600; font-size:14px; margin-top:2px;">${o.formatRupiah(t.price)}</div>



              </div>



            </div>







            <!-- Qty -->



            <div class="form-group" style="margin-bottom: 0;">



              <label class="form-label">Jumlah</label>



              <select class="input-select" id="return-qty">



                <option value="1" selected>1 barang</option>



              </select>



            </div>







            <!-- Reason -->



            <div class="form-group" style="margin-bottom: 0;">



              <label class="form-label">Alasan pengembalian <span class="required">*</span></label>



              <select class="input-select" id="return-reason" required>



                <option value="Produk tidak berfungsi dengan baik" selected>Produk tidak berfungsi dengan baik</option>



                <option value="Barang cacat atau rusak saat pengiriman">Barang cacat atau rusak saat pengiriman</option>



                <option value="Spesifikasi tidak sesuai deskripsi">Spesifikasi tidak sesuai deskripsi</option>



                <option value="Barang salah kirim">Barang salah kirim</option>



              </select>



            </div>







            <!-- Description -->



            <div class="form-group" style="margin-bottom: 0;">



              <label class="form-label">Ceritakan kendalanya <span class="required">*</span></label>



              <textarea class="input-textarea" id="return-desc" required placeholder="Jelaskan kendala secara singkat dan jelas">Sisi kanan headphone tidak mengeluarkan suara saat digunakan.</textarea>



            </div>







            <!-- Photo Attachment -->



            <div class="form-group" style="margin-bottom: 0;">



              <label class="form-label">Foto / video pendukung <span class="required">*</span></label>



              <div style="border: 2px dashed var(--color-border); border-radius: var(--radius-sm); padding: 24px; text-align: center; background: var(--color-subtle); cursor: pointer;" id="dropzone-box">



                <div style="font-size: 24px; margin-bottom: 6px;">📤</div>



                <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px;">Pilih file atau letakkan di sini</div>



                <div style="font-size: 12px; color: var(--color-ink-muted);">JPG, PNG, MP4 · Maks. 10 MB/file · Maks. 5 file</div>



              </div>







              <div style="margin-top: 10px;" id="attachment-chip-wrap">



                <span class="badge badge-primary" style="padding: 6px 12px; font-size: 12px; gap: 8px;">



                  <span>bukti-headphone.jpg · 1,8 MB</span>



                  <span style="cursor:pointer;" id="remove-file-chip">&times;</span>



                </span>



              </div>



            </div>







            <!-- Refund Destination -->



            <div>



              <label class="radio-label">



                <input type="radio" name="refund-dest" checked />



                <span class="radio-custom" style="border-width:5px; border-color:var(--color-primary);"></span>



                <span style="font-weight: 600;">Pengembalian dana ke rekening asal</span>



              </label>



            </div>







            <!-- Confirmation Checkbox -->



            <div>



              <label class="checkbox-label" style="align-items: flex-start;">



                <input type="checkbox" id="return-agree" checked style="margin-top: 3px;" />



                <span class="checkbox-custom" style="margin-top: 2px;">✓</span>



                <span style="font-size: 13px;">Informasi dan bukti yang saya berikan benar.</span>



              </label>



            </div>







            <div>



              <button type="submit" class="btn btn-primary btn-lg" id="btn-submit-return">



                Kirim pengajuan



              </button>



            </div>



          </form>



        </div>







        <!-- Right: Refund Calculation & Policy -->



        <aside style="display:flex; flex-direction:column; gap: var(--space-24);">



          <!-- Math Breakdown Card -->



          <div class="card">



            <h3 style="font-size: var(--text-h4); margin-bottom: 16px;">Estimasi pengembalian dana</h3>







            <div class="summary-row">



              <span>Harga barang</span>



              <span>${o.formatRupiah(t.price)}</span>



            </div>







            <div class="summary-row" style="color: var(--color-error);">



              <span>Alokasi diskon</span>



              <span>-${o.formatRupiah(i)}</span>



            </div>







            <div class="summary-row">



              <span>Ongkir awal</span>



              <span style="color: var(--color-ink-muted);">Tidak dikembalikan</span>



            </div>







            <div class="summary-row total-row">



              <span>Estimasi pengembalian</span>



              <span class="summary-total-price" style="color: var(--color-primary);">${o.formatRupiah(n)}</span>



            </div>







            <div style="font-size: 11px; color: var(--color-ink-muted); margin-top: 12px; line-height: 1.4;">



              Diskon pesanan dibagi proporsional terhadap harga barang. Nilai akhir dikonfirmasi setelah pemeriksaan.



            </div>



          </div>







          <!-- Policy Box -->



          <div class="card">



            <h3 style="font-size: var(--text-h4); margin-bottom: 12px;">Apa yang terjadi selanjutnya?</h3>



            <ol style="font-size: 13px; color: var(--color-ink-muted); padding-left: 18px; line-height: 1.6; display: flex; flex-direction: column; gap: 8px;">



              <li>Tim meninjau pengajuan dalam 1–2 hari kerja.</li>



              <li>Jika disetujui, ikuti petunjuk pengiriman barang ke alamat retur.</li>



              <li>Dana dikembalikan dalam 3–5 hari kerja setelah pemeriksaan barang selesai.</li>



            </ol>



            <div style="font-size: 11px; color: var(--color-ink-muted); margin-top: 14px; border-top: 1px solid var(--color-border); padding-top: 8px;">



              Barang dan kelengkapan wajib disertakan. Kebijakan pada konsep ini bersifat ilustratif.



            </div>



          </div>



        </aside>



      </div>



    </div>



  `;



}



function ua(s) {



  const a = document.getElementById("return-form"),



    e = document.getElementById("attachment-chip-wrap"),



    t = document.getElementById("remove-file-chip");



  (t == null ||



    t.addEventListener("click", () => {



      e.style.display = "none";



    }),



    a == null ||



      a.addEventListener("submit", (i) => {



        i.preventDefault();



        const n = document.getElementById("return-reason").value,



          r = document.getElementById("return-desc").value.trim(),



          l = document.getElementById("return-agree").checked;



        if (!r) {



          m.show({



            title: "Keterangan Wajib",



            message: "Harap jelaskan kendala produk.",



            type: "error",



          });



          return;



        }



        if (!l) {



          m.show({



            title: "Konfirmasi Diperlukan",



            message: "Centang pernyataan kebenaran informasi.",



            type: "warning",



          });



          return;



        }



        (o.submitReturnRequest(s, {



          itemId: "nusasound-air-anc",



          reason: n,



          description: r,



          photoName: "bukti-headphone.jpg · 1,8 MB",



        }),



          m.show({



            title: "Pengajuan Terkirim!",



            message:



              "Permintaan pengembalianmu sedang ditinjau oleh tim NusaShop.",



            type: "success",



          }),



          setTimeout(() => {



            window.location.hash = `#/lacak/${s}`;



          }, 1200));



      }));



}



function ma(activeTab = "pesanan") {

  const s = o.getState();



  if (!s.user || !s.user.isLoggedIn) {

    return `

      <div class="container" style="padding: var(--space-48) var(--space-16); max-width: 580px; text-align: center;">

        <div class="card" style="padding: 40px 32px; box-shadow: var(--shadow-md);">

          <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--color-primary-subtle); color: var(--color-primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">

            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>

              <circle cx="12" cy="7" r="4"/>

            </svg>

          </div>

          <h1 style="font-size: var(--text-h3); margin-bottom: 8px;">Masuk ke Akun NusaShop</h1>

          <p style="color: var(--color-ink-muted); font-size: 14px; margin-bottom: 24px; line-height: 1.5;">

            Untuk melihat riwayat pesanan, mengelola alamat pengiriman, dan mengakses profil Anda, silakan masuk atau daftar terlebih dahulu.

          </p>

          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">

            <a href="#/masuk" class="btn btn-primary" style="min-width: 140px; height: 44px; display: inline-flex; align-items: center; justify-content: center;">Masuk ke Akun</a>

            <a href="#/daftar" class="btn btn-outline" style="min-width: 140px; height: 44px; display: inline-flex; align-items: center; justify-content: center;">Daftar Akun Baru</a>

          </div>

          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px dashed var(--color-border);">

            <p style="font-size: 12px; color: var(--color-ink-muted); margin-bottom: 10px;">Ingin langsung mencoba dengan akun contoh?</p>

            <button type="button" id="account-guest-quick-login-btn" class="auth-helper-btn" style="width: 100%;">

              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>

              Masuk Cepat sebagai Alya Putri (Demo)

            </button>

          </div>

        </div>

      </div>

    `;

  }



  const u = s.user,

    orders = s.orders || [],

    wishlistIds = s.wishlist || [],

    wishlistItems = y.filter(item => wishlistIds.includes(item.id)),

    addr = s.address || {

      fullName: u.name,

      phone: u.phone || "0812 3456 7890",

      street: "Jl. Melati No. 18, Tebet Barat",

      province: "DKI Jakarta",

      city: "Jakarta Selatan",

      district: "Tebet",

      postalCode: "12810",

      tag: "Rumah · Alamat utama",

    };



  const tabLabels = {

    pesanan: "Pesanan saya",

    profil: "Profil saya",

    wishlist: "Wishlist",

    alamat: "Alamat tersimpan",

    pengaturan: "Pengaturan"

  };



  const currentTabLabel = tabLabels[activeTab] || "Pesanan saya";



  // Panel 1: Pesanan saya

  const renderOrdersTab = () => `

    <div>

      <div style="margin-bottom: var(--space-24);">

        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Halo, ${u.name.split(' ')[0]}</h1>

        <p style="font-size: var(--text-body); color: var(--color-ink-muted);">Semua pilihan dan perjalanan pesananmu, dalam satu tempat.</p>

      </div>



      <!-- Status Filter Tabs -->

      <div style="display:flex; gap:16px; border-bottom:1px solid var(--color-border); margin-bottom:var(--space-20); overflow-x:auto; white-space:nowrap; padding-bottom:4px;">

        <button class="order-tab-btn active" data-status="all" style="background:none; border:none; padding:8px 4px; font-size:14px; font-weight:700; color:var(--color-primary); border-bottom:2px solid var(--color-primary); cursor:pointer;">

          Semua (${orders.length})

        </button>

        <button class="order-tab-btn" data-status="diproses" style="background:none; border:none; padding:8px 4px; font-size:14px; color:var(--color-ink-muted); cursor:pointer;">

          Diproses (0)

        </button>

        <button class="order-tab-btn" data-status="dikirim" style="background:none; border:none; padding:8px 4px; font-size:14px; color:var(--color-ink-muted); cursor:pointer;">

          Dikirim (${orders.filter((t) => t.status === "dikirim").length})

        </button>

        <button class="order-tab-btn" data-status="selesai" style="background:none; border:none; padding:8px 4px; font-size:14px; color:var(--color-ink-muted); cursor:pointer;">

          Selesai (${orders.filter((t) => t.status === "selesai").length})

        </button>

        <button class="order-tab-btn" data-status="dibatalkan" style="background:none; border:none; padding:8px 4px; font-size:14px; color:var(--color-ink-muted); cursor:pointer;">

          Dibatalkan (0)

        </button>

      </div>



      <!-- Order Search -->

      <div class="search-input-wrapper" style="margin-bottom: var(--space-20);">

        <span class="search-icon">

          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">

            <circle cx="11" cy="11" r="8"/>

            <line x1="21" y1="21" x2="16.65" y2="16.65"/>

          </svg>

        </span>

        <input type="text" class="search-input" id="order-search-input" placeholder="Cari nomor pesanan atau nama produk..." style="padding-left: 40px;" />

      </div>



      <!-- Order Cards List -->

      <div id="orders-list-container" style="display:flex; flex-direction:column; gap: var(--space-16);">

        ${orders

          .map(

            (t) => `

          <div class="card order-card" data-order-status="${t.status}" style="padding: var(--space-24);">

            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--color-border); flex-wrap:wrap; gap:8px;">

              <div>

                <span style="font-weight:700; color:var(--color-ink); font-size:14px;">#${t.id}</span>

                <span style="color:var(--color-ink-muted); font-size:13px; margin-left:8px;">· ${t.date}</span>

              </div>

              <span class="badge ${t.status === "dikirim" ? "badge-primary" : t.status === "selesai" ? "badge-success" : "badge-subtle"}">

                ${t.status === "dikirim" ? "Sedang dikirim" : t.status === "selesai" ? "Selesai" : "Diproses"}

              </span>

            </div>



            <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">

              ${t.items

                .map(

                  (i) => `

                <div style="display:flex; gap:16px; align-items:center;">

                  <img src="${i.image}" alt="${i.name}" style="width:64px; height:64px; border-radius:var(--radius-sm); object-fit:cover; background:var(--color-subtle); flex-shrink:0;" />

                  <div style="flex:1;">

                    <div style="font-weight:600; font-size:14px; margin-bottom:2px;">${i.name}</div>

                    <div style="font-size:12px; color:var(--color-ink-muted); margin-bottom:4px;">${i.variant || "Standar"} · ${i.qty} barang</div>

                    <div style="font-weight:600; font-size:13.5px; color:var(--color-ink);">${o.formatRupiah(i.price)}</div>

                  </div>

                </div>

              `,

                )

                .join("")}

            </div>



            <div style="display:flex; justify-content:space-between; align-items:center; padding-top:12px; border-top:1px dashed var(--color-border); flex-wrap:wrap; gap:12px;">

              <div>

                <span style="font-size:12px; color:var(--color-ink-muted);">Total Belanja:</span>

                <span style="font-weight:700; font-size:15px; margin-left:6px; color:var(--color-ink);">${o.formatRupiah(t.total)}</span>

              </div>

              <div style="display:flex; gap:8px;">

                <button type="button" class="btn btn-outline btn-sm order-invoice-btn" data-order-id="${t.id}">Faktur Digital</button>

                <a href="#/lacak/${t.id}" class="btn btn-primary btn-sm">Lacak Paket</a>

              </div>

            </div>

          </div>

        `,

          )

          .join("")}

      </div>

    </div>

  `;



  // Panel 2: Profil saya

  const renderProfileTab = () => `

    <div>

      <div style="margin-bottom: var(--space-24);">

        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Profil Saya</h1>

        <p style="font-size: var(--text-body); color: var(--color-ink-muted);">Kelola data pribadi dan informasi akun NusaShop Anda.</p>

      </div>



      <div class="card" style="padding: var(--space-32); max-width: 680px;">

        <form id="account-profile-form" style="display:flex; flex-direction:column; gap:20px;">

          <div style="display:flex; align-items:center; gap:20px; padding-bottom:20px; border-bottom:1px solid var(--color-border);">

            <div style="width:72px; height:72px; border-radius:50%; background:var(--color-primary-subtle); color:var(--color-primary); font-weight:800; font-size:26px; display:flex; align-items:center; justify-content:center;">

              ${u.initials || "AP"}

            </div>

            <div>

              <div style="font-weight:700; font-size:17px; margin-bottom:2px;">${u.name}</div>

              <div style="font-size:13px; color:var(--color-ink-muted); margin-bottom:6px;">${u.email}</div>

              <span class="badge badge-primary">${u.status || "Anggota Prioritas NusaShop"}</span>

            </div>

          </div>



          <div class="form-group" style="margin-bottom:0;">

            <label class="form-label" for="profile-name-input">Nama Lengkap</label>

            <input type="text" class="input-text" id="profile-name-input" value="${u.name}" required />

          </div>



          <div class="form-group" style="margin-bottom:0;">

            <label class="form-label" for="profile-email-input">Alamat Email</label>

            <input type="email" class="input-text" id="profile-email-input" value="${u.email}" required />

          </div>



          <div class="form-group" style="margin-bottom:0;">

            <label class="form-label" for="profile-phone-input">Nomor WhatsApp / HP</label>

            <input type="tel" class="input-text" id="profile-phone-input" value="${u.phone || '0812 3456 7890'}" required />

          </div>



          <div style="padding-top:12px;">

            <button type="submit" class="btn btn-primary" style="height:44px; min-width:180px;">

              Simpan Perubahan

            </button>

          </div>

        </form>

      </div>

    </div>

  `;



  // Panel 3: Wishlist di Dashboard Akun

  const renderWishlistTab = () => `

    <div>

      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--space-24); flex-wrap:wrap; gap:12px;">

        <div>

          <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Pilihan yang kamu simpan</h1>

          <p style="font-size: var(--text-body); color: var(--color-ink-muted);">${wishlistItems.length} produk menunggu untuk jadi bagian dari harimu.</p>

        </div>

        <a href="#/wishlist" class="btn btn-outline btn-sm">Buka Halaman Wishlist Penuh &rarr;</a>

      </div>



      ${wishlistItems.length === 0 ? `

        <div class="card" style="text-align:center; padding:48px 24px;">

          <div style="font-size:40px; margin-bottom:12px;">🤍</div>

          <h2 style="font-size:var(--text-h3); margin-bottom:8px;">Wishlist kamu masih kosong</h2>

          <p style="color:var(--color-ink-muted); font-size:14px; margin-bottom:20px;">Simpan produk favoritmu agar mudah ditemukan kembali sewaktu-waktu.</p>

          <a href="#/katalog" class="btn btn-primary">Jelajahi Produk</a>

        </div>

      ` : `

        <div class="account-wishlist-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--space-16);">

          ${wishlistItems.map(item => `

            <div class="card" style="display:flex; flex-direction:column; padding:16px; position:relative;">

              <img src="${item.image}" alt="${item.name}" style="width:100%; height:180px; object-fit:cover; border-radius:var(--radius-sm); margin-bottom:12px; background:var(--color-subtle);" />

              <div style="font-size:12px; color:var(--color-ink-muted); margin-bottom:2px;">${item.category || "Produk"}</div>

              <h3 style="font-size:15px; font-weight:700; margin-bottom:4px; line-height:1.3;">

                <a href="#/produk/${item.id}" style="color:var(--color-ink);">${item.name}</a>

              </h3>

              <div style="font-weight:700; font-size:15px; color:var(--color-primary); margin-bottom:12px;">${o.formatRupiah(item.price)}</div>

              <div style="margin-top:auto; display:flex; flex-direction:column; gap:6px;">

                <button type="button" class="btn btn-primary btn-sm account-add-cart-btn" data-id="${item.id}" style="width:100%;">

                  + Tambah ke Keranjang

                </button>

                <button type="button" class="btn btn-ghost btn-sm account-remove-wishlist-btn" data-id="${item.id}" style="color:var(--color-error); font-size:12px;">

                  Hapus dari Wishlist

                </button>

              </div>

            </div>

          `).join("")}

        </div>

      `}

    </div>

  `;



  // Panel 4: Alamat tersimpan

  const renderAlamatTab = () => `

    <div>

      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:var(--space-24); flex-wrap:wrap; gap:12px;">

        <div>

          <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Alamat Pengiriman Tersimpan</h1>

          <p style="font-size: var(--text-body); color: var(--color-ink-muted);">Kelola alamat untuk pengiriman belanja yang lebih cepat.</p>

        </div>

        <button type="button" class="btn btn-primary btn-sm" id="btn-add-new-address-modal">+ Tambah Alamat Baru</button>

      </div>



      <div style="display:flex; flex-direction:column; gap:16px; max-width:720px;">

        <!-- Alamat Utama -->

        <div class="card" style="padding:24px; border:2px solid var(--color-primary);">

          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">

            <div style="display:flex; align-items:center; gap:8px;">

              <span class="badge badge-primary">Rumah · Alamat utama</span>

              <span class="badge badge-success" style="font-size:11px;">Aktif</span>

            </div>

            <button type="button" class="btn btn-outline btn-sm" id="btn-edit-main-addr">Ubah</button>

          </div>

          <div style="font-weight:700; font-size:15px; margin-bottom:4px;">${addr.fullName} · ${addr.phone}</div>

          <div style="font-size:14px; color:var(--color-ink-muted); line-height:1.5;">

            ${addr.street}, ${addr.district}<br/>

            ${addr.city}, ${addr.province} ${addr.postalCode}

          </div>

          <div style="font-size:12.5px; color:var(--color-ink-muted); margin-top:8px;">

            Catatan: ${addr.notes || "Rumah pagar putih, titipkan ke penerima."}

          </div>

        </div>



        <!-- Alamat Kedua (Kantor) -->

        <div class="card" style="padding:24px;">

          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">

            <span class="badge badge-subtle">Kantor</span>

            <button type="button" class="btn btn-outline btn-sm" id="btn-set-office-main">Jadikan Utama</button>

          </div>

          <div style="font-weight:700; font-size:15px; margin-bottom:4px;">${addr.fullName} · 0812 8888 9999</div>

          <div style="font-size:14px; color:var(--color-ink-muted); line-height:1.5;">

            Gedung Nusa Tower Lt. 5, Jl. Jend. Sudirman Kav. 21<br/>

            Setiabudi, Jakarta Selatan, DKI Jakarta 12920

          </div>

          <div style="font-size:12.5px; color:var(--color-ink-muted); margin-top:8px;">

            Catatan: Titipkan di resepsionis lobi utama lantai dasar.

          </div>

        </div>

      </div>

    </div>

  `;



  // Panel 5: Pengaturan

  const renderPengaturanTab = () => `

    <div>

      <div style="margin-bottom: var(--space-24);">

        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Pengaturan Akun</h1>

        <p style="font-size: var(--text-body); color: var(--color-ink-muted);">Atur preferensi tampilan, notifikasi, dan keamanan akun Anda.</p>

      </div>



      <div style="display:flex; flex-direction:column; gap:20px; max-width:680px;">

        <div class="card" style="padding:24px;">

          <h3 style="font-size:var(--text-h4); margin-bottom:12px;">Tampilan Aplikasi</h3>

          <div style="display:flex; justify-content:space-between; align-items:center;">

            <div>

              <div style="font-weight:600; font-size:14px;">Mode Gelap / Terang</div>

              <div style="font-size:12.5px; color:var(--color-ink-muted);">Sesuaikan kontras tampilan sesuai kenyamanan mata Anda.</div>

            </div>

            <button type="button" class="btn btn-outline btn-sm" id="account-theme-toggle-btn">

              ${s.theme === "dark" ? "☀️ Ganti ke Mode Terang" : "🌙 Ganti ke Mode Gelap"}

            </button>

          </div>

        </div>



        <div class="card" style="padding:24px;">

          <h3 style="font-size:var(--text-h4); margin-bottom:16px;">Notifikasi & Komunikasi</h3>

          <div style="display:flex; flex-direction:column; gap:14px;">

            <label class="checkbox-label" style="font-size:13.5px;">

              <input type="checkbox" checked />

              <span>Kirimkan pembaruan status pesanan via WhatsApp & Email</span>

            </label>

            <label class="checkbox-label" style="font-size:13.5px;">

              <input type="checkbox" checked />

              <span>Dapatkan informasi promo spesial dan voucher belanja mingguan</span>

            </label>

          </div>

        </div>



        <div class="card" style="padding:24px;">

          <h3 style="font-size:var(--text-h4); margin-bottom:12px;">Keamanan Akun</h3>

          <p style="font-size:13px; color:var(--color-ink-muted); margin-bottom:16px;">

            Kata sandi terakhir diubah 30 hari yang lalu. Pastikan menggunakan kombinasi kata sandi yang kuat.

          </p>

          <button type="button" class="btn btn-outline btn-sm" id="account-change-pwd-btn">

            Ubah Kata Sandi

          </button>

        </div>

      </div>

    </div>

  `;



  let mainPanelHtml = "";

  if (activeTab === "profil") mainPanelHtml = renderProfileTab();

  else if (activeTab === "wishlist") mainPanelHtml = renderWishlistTab();

  else if (activeTab === "alamat") mainPanelHtml = renderAlamatTab();

  else if (activeTab === "pengaturan") mainPanelHtml = renderPengaturanTab();

  else mainPanelHtml = renderOrdersTab();



  return `

    <div class="container" style="padding-top: var(--space-24); padding-bottom: var(--space-64);">

      <!-- Breadcrumb -->

      <nav class="breadcrumb" aria-label="Breadcrumb" style="margin-bottom: var(--space-20);">

        <a href="#/">Beranda</a>

        <span class="breadcrumb-separator">/</span>

        <a href="#/akun">Akun</a>

        <span class="breadcrumb-separator">/</span>

        <span style="color:var(--color-ink); font-weight:600;">${currentTabLabel}</span>

      </nav>



      <!-- 2-Column Responsive Account Layout -->

      <div class="account-layout">

        <!-- Left Sidebar -->

        <aside class="card account-sidebar-card" style="padding: var(--space-20);">

          <div class="account-user-header" style="display:flex; align-items:center; gap:12px; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--color-border);">

            <div style="width:48px; height:48px; border-radius:50%; background:var(--color-primary-subtle); color:var(--color-primary); font-weight:700; font-size:18px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">

              ${u.initials || "AP"}

            </div>

            <div>

              <div style="font-weight:700; font-size:15px; color:var(--color-ink);">${u.name}</div>

              <div style="font-size:12px; color:var(--color-ink-muted);">${u.status || "Anggota Prioritas NusaShop"}</div>

            </div>

          </div>



          <div class="account-sidebar-nav" style="display:flex; flex-direction:column; gap:4px; font-size:14px;">

            <button type="button" class="btn ${activeTab === 'profil' ? 'btn-primary' : 'btn-subtle'} btn-block account-tab-trigger" data-tab="profil" style="justify-content:flex-start; ${activeTab !== 'profil' ? 'background:none;' : ''}">

              Profil saya

            </button>

            <button type="button" class="btn ${activeTab === 'pesanan' ? 'btn-primary' : 'btn-subtle'} btn-block account-tab-trigger" data-tab="pesanan" style="justify-content:flex-start; ${activeTab !== 'pesanan' ? 'background:none;' : ''}">

              Pesanan saya

            </button>

            <button type="button" class="btn ${activeTab === 'wishlist' ? 'btn-primary' : 'btn-subtle'} btn-block account-tab-trigger" data-tab="wishlist" style="justify-content:flex-start; ${activeTab !== 'wishlist' ? 'background:none;' : ''}">

              Wishlist

            </button>

            <button type="button" class="btn ${activeTab === 'alamat' ? 'btn-primary' : 'btn-subtle'} btn-block account-tab-trigger" data-tab="alamat" style="justify-content:flex-start; ${activeTab !== 'alamat' ? 'background:none;' : ''}">

              Alamat tersimpan

            </button>

            <button type="button" class="btn ${activeTab === 'pengaturan' ? 'btn-primary' : 'btn-subtle'} btn-block account-tab-trigger" data-tab="pengaturan" style="justify-content:flex-start; ${activeTab !== 'pengaturan' ? 'background:none;' : ''}">

              Pengaturan

            </button>

            <button type="button" class="btn btn-subtle btn-block" id="btn-account-logout" style="justify-content:flex-start; font-weight:500; background:none; color:var(--color-error); margin-top:16px; border-top:1px solid var(--color-border); padding-top:12px;">

              Keluar

            </button>

          </div>

        </aside>



        <!-- Right Main Panel -->

        <main id="account-main-panel">

          ${mainPanelHtml}

        </main>

      </div>

    </div>

  `;

}



function va(activeTab = "pesanan") {

  // Guest Quick Login Handler

  const guestQuickBtn = document.getElementById("account-guest-quick-login-btn");

  if (guestQuickBtn) {

    guestQuickBtn.addEventListener("click", () => {

      o.login("alya.putri@email.com", "password123");

      m.show({

        title: "Berhasil Masuk!",

        message: "Selamat datang kembali, Alya Putri!",

        type: "success"

      });

      A();

    });

  }



  // Sidebar Tab Switching

  document.querySelectorAll(".account-tab-trigger").forEach(btn => {

    btn.addEventListener("click", (e) => {

      e.preventDefault();

      const tab = btn.getAttribute("data-tab");

      window.location.hash = `#/akun?tab=${tab}`;

    });

  });



  // Logout Handler

  const logoutBtn = document.getElementById("btn-account-logout");

  if (logoutBtn) {

    logoutBtn.addEventListener("click", (e) => {

      e.preventDefault();

      o.logout();

      m.show({

        title: "Berhasil Keluar",

        message: "Anda telah keluar dari akun NusaShop.",

        type: "info"

      });

      window.location.hash = "#/";

    });

  }



  // Orders Tab handlers

  if (activeTab === "pesanan") {

    const tabBtns = document.querySelectorAll(".order-tab-btn");

    const cards = document.querySelectorAll(".order-card");

    const searchInput = document.getElementById("order-search-input");



    function filterOrders() {

      const activeBtn = document.querySelector(".order-tab-btn.active");

      const status = activeBtn?.getAttribute("data-status") || "all";

      const q = (searchInput?.value || "").toLowerCase().trim();



      cards.forEach(card => {

        const orderStatus = card.getAttribute("data-order-status");

        const cardText = card.textContent.toLowerCase();

        const statusMatch = status === "all" || orderStatus === status;

        const textMatch = !q || cardText.includes(q);

        card.style.display = statusMatch && textMatch ? "block" : "none";

      });

    }



    tabBtns.forEach(btn => {

      btn.addEventListener("click", () => {

        tabBtns.forEach(b => {

          b.classList.remove("active");

          b.style.fontWeight = "400";

          b.style.color = "var(--color-ink-muted)";

          b.style.borderBottom = "none";

        });

        btn.classList.add("active");

        btn.style.fontWeight = "700";

        btn.style.color = "var(--color-primary)";

        btn.style.borderBottom = "2px solid var(--color-primary)";

        filterOrders();

      });

    });



    if (searchInput) {

      searchInput.addEventListener("input", filterOrders);

    }



    // Invoice Modal Trigger

    document.querySelectorAll(".order-invoice-btn").forEach(btn => {

      btn.addEventListener("click", () => {

        const orderId = btn.getAttribute("data-order-id");

        const order = (o.getState().orders || []).find(x => x.id === orderId);

        if (order) {

          showInvoiceModal(order, o.getState().user);

        }

      });

    });

  }



  // Profile Tab handlers

  if (activeTab === "profil") {

    const profileForm = document.getElementById("account-profile-form");

    if (profileForm) {

      profileForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const newName = document.getElementById("profile-name-input")?.value?.trim();

        const newEmail = document.getElementById("profile-email-input")?.value?.trim();

        const newPhone = document.getElementById("profile-phone-input")?.value?.trim();



        if (newName && o.state.user) {

          o.state.user.name = newName;

          o.state.user.email = newEmail || o.state.user.email;

          o.state.user.phone = newPhone || o.state.user.phone;

          const initials = newName.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();

          o.state.user.initials = initials;

          o.saveState();



          m.show({

            title: "Profil Diperbarui",

            message: "Data profil Anda berhasil disimpan.",

            type: "success"

          });

          A();

        }

      });

    }

  }



  // Wishlist Tab handlers in Account

  if (activeTab === "wishlist") {

    document.querySelectorAll(".account-add-cart-btn").forEach(btn => {

      btn.addEventListener("click", () => {

        const id = btn.getAttribute("data-id");

        o.addToCart(id, 1);

        m.show({

          title: "Dimasukkan ke Keranjang",

          message: "Produk berhasil ditambahkan ke keranjang belanja Anda.",

          type: "success"

        });

      });

    });



    document.querySelectorAll(".account-remove-wishlist-btn").forEach(btn => {

      btn.addEventListener("click", () => {

        const id = btn.getAttribute("data-id");

        o.toggleWishlist(id);

        m.show({

          title: "Dihapus dari Wishlist",

          message: "Produk telah dihapus dari daftar simpanan Anda.",

          type: "info"

        });

        A();

      });

    });

  }



  // Alamat Tab handlers

  if (activeTab === "alamat") {

    const addAddrBtn = document.getElementById("btn-add-new-address-modal");

    if (addAddrBtn) {

      addAddrBtn.addEventListener("click", () => {

        m.show({

          title: "Tambah Alamat Baru",

          message: "Fitur tambah alamat tambahan siap digunakan. Alamat utama saat ini aktif.",

          type: "info"

        });

      });

    }

    const editMainBtn = document.getElementById("btn-edit-main-addr");

    if (editMainBtn) {

      editMainBtn.addEventListener("click", () => {

        window.location.hash = "#/checkout/alamat";

      });

    }

    const setOfficeMainBtn = document.getElementById("btn-set-office-main");

    if (setOfficeMainBtn) {

      setOfficeMainBtn.addEventListener("click", () => {

        m.show({

          title: "Alamat Diubah",

          message: "Alamat kantor telah dijadikan sebagai alamat utama pengiriman.",

          type: "success"

        });

      });

    }

  }



  // Pengaturan Tab handlers

  if (activeTab === "pengaturan") {

    const themeBtn = document.getElementById("account-theme-toggle-btn");

    if (themeBtn) {

      themeBtn.addEventListener("click", () => {

        const newTheme = o.toggleTheme();

        m.show({

          title: "Tema Berhasil Diubah",

          message: `Tampilan aplikasi kini menggunakan Mode ${newTheme === "dark" ? "Gelap" : "Terang"}.`,

          type: "success"

        });

        A();

      });

    }

    const changePwdBtn = document.getElementById("account-change-pwd-btn");

    if (changePwdBtn) {

      changePwdBtn.addEventListener("click", () => {

        m.show({

          title: "Ubah Kata Sandi",

          message: "Tautan konfirmasi ganti kata sandi dikirimkan ke email Anda.",

          type: "info"

        });

      });

    }

  }

}

function ha() {



  const a = o.getState().wishlist || [],



    e = y.filter((t) => a.includes(t.id));



  return e.length === 0



    ? `



      <div class="container" style="padding-top: var(--space-48); text-align: center; min-height: 50vh;">



        <div style="max-width: 440px; margin: 0 auto; padding: 48px 24px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md);">



          <div style="font-size: 40px; margin-bottom: 16px;">🤍</div>



          <h1 style="font-size: var(--text-h3); margin-bottom: 8px;">Wishlist kamu masih kosong</h1>



          <p style="font-size: 14px; color: var(--color-ink-muted); margin-bottom: 24px;">



            Simpan produk favoritmu untuk dibeli nanti atau dipantau ketersediaannya.



          </p>



          <a href="#/katalog" class="btn btn-primary">Jelajahi Katalog</a>



        </div>



      </div>



    `



    : `



    <div class="container" style="padding-top: var(--space-24); padding-bottom: var(--space-64);">



      <!-- Breadcrumb -->



      <nav class="breadcrumb" aria-label="Breadcrumb">



        <a href="#/">Beranda</a>



        <span class="breadcrumb-separator">/</span>



        <span style="color:var(--color-ink);">Wishlist</span>



      </nav>







      <!-- Page Header -->



      <div style="margin-bottom: var(--space-32);">



        <h1 style="font-size: var(--text-h2); margin-bottom: 6px;">Pilihan yang kamu simpan</h1>



        <p style="font-size: var(--text-body);">${e.length} produk menunggu untuk jadi bagian dari harimu.</p>



      </div>







      <!-- Action Sub-bar -->



      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-24);">



        <div style="font-size:14px; color:var(--color-ink-muted);">



          Semua produk · ${e.length} tersedia



        </div>



        <button class="btn btn-outline btn-sm" id="btn-share-wishlist" style="display:inline-flex; align-items:center; gap:6px;">



          <span>Bagikan wishlist</span>



          <span>↗</span>



        </button>



      </div>







      <!-- Products Grid (4 columns) -->



      <div class="products-grid">



        ${e



          .map((t) => {



            let i = "badge-discount";



            return (



              t.badgeType === "new" && (i = "badge-new"),



              t.badgeType === "editor" && (i = "badge-editor"),



              `



            <div class="product-card">



              <div class="product-card-visual">



                ${t.badge ? `<span class="badge ${i} product-card-badge">${t.badge}</span>` : ""}



                <a href="#/produk/${t.id}">



                  <img src="${t.image}" alt="${t.name}" class="product-card-img" />



                </a>



              </div>



              <div class="product-card-body">



                <div class="product-type">${t.type}</div>



                <h3 class="product-name"><a href="#/produk/${t.id}">${t.name}</a></h3>



                <div class="product-rating">★ ${t.rating} · ${t.reviewsCount} ulasan contoh</div>



                <div class="product-price-row">



                  <span class="product-price">${o.formatRupiah(t.price)}</span>



                  ${t.originalPrice > t.price ? `<span class="product-original-price">${o.formatRupiah(t.originalPrice)}</span>` : ""}



                </div>



                <div class="product-origin" style="margin-bottom: 16px;">${t.origin}</div>







                <button class="btn btn-primary btn-block btn-wishlist-add" data-id="${t.id}" style="margin-bottom: 8px;">



                  Tambah ke keranjang



                </button>



                <button class="btn btn-outline btn-block btn-sm btn-wishlist-remove" data-id="${t.id}" style="border:none; color:var(--color-ink-muted);">



                  Hapus dari wishlist



                </button>



              </div>



            </div>



          `



            );



          })



          .join("")}



      </div>







      <!-- Bottom Tip -->



      <div class="card" style="display:flex; align-items:center; gap:16px; margin-top:var(--space-32); background:var(--color-subtle); border-color:transparent;">



        <div style="color:var(--color-primary); font-size:24px;">♡</div>



        <div style="font-size:13px; color:var(--color-ink-muted);">



          Wishlist disimpan di akunmu. Harga dan ketersediaan dapat berubah sebelum checkout.



        </div>



      </div>



    </div>



  `;



}



function ba() {



  var s;



  (document.querySelectorAll(".btn-wishlist-add").forEach((a) => {



    a.addEventListener("click", () => {



      const e = a.getAttribute("data-id"),



        t = y.find((i) => i.id === e);



      (o.addToCart(e),



        m.show({



          title: "Dimasukkan ke Keranjang",



          message: `${(t == null ? void 0 : t.name) || "Produk"} telah ditambahkan ke keranjang belanja.`,



          type: "success",



        }));



    });



  }),



    document.querySelectorAll(".btn-wishlist-remove").forEach((a) => {



      a.addEventListener("click", () => {



        const e = a.getAttribute("data-id"),



          t = y.find((i) => i.id === e);



        (o.toggleWishlist(e),



          m.show({



            title: "Dihapus dari Wishlist",



            message: `${(t == null ? void 0 : t.name) || "Produk"} telah dihapus.`,



            type: "info",



          }),



          (window.location.hash = "#/wishlist"));



      });



    }),



    (s = document.getElementById("btn-share-wishlist")) == null ||



      s.addEventListener("click", () => {



        var a;



        ((a = navigator.clipboard) == null || a.writeText(window.location.href),



          m.show({



            title: "Tautan Disalin!",



            message: "Tautan wishlist berhasil disalin ke clipboard.",



            type: "success",



          }));



      }));



}



function ya() {



  const a = o.getState().user;



  return `



    <div class="container" style="padding-top: var(--space-24); padding-bottom: var(--space-64);">



      <!-- Hero Help Header -->



      <div class="card" style="background-color: var(--color-primary-subtle); border-color: rgba(37, 99, 235, 0.2); padding: 48px 36px; margin-bottom: var(--space-32); text-align: center;">



        <h1 style="font-size: var(--text-h2); margin-bottom: 8px;">Ada yang bisa kami bantu?</h1>



        <p style="font-size: var(--text-body); max-width: 540px; margin: 0 auto 24px;">



          Cari jawaban atau ceritakan kendalamu kepada tim NusaShop.



        </p>



        <div style="max-width: 580px; margin: 0 auto;">



          <input 



            type="text" 



            class="input-text" 



            id="faq-search-input" 



            placeholder="Cari bantuan: pengiriman, pembayaran, pengembalian..." 



            style="padding: 14px 20px; font-size: 15px; border-radius: var(--radius-full);"



          />



        </div>



      </div>







      <!-- 4 Category Cards -->



      <div class="help-categories-grid">



        <div class="card card-hover" style="cursor: pointer;">



          <div style="font-size: 24px; margin-bottom: 8px;">📦</div>



          <h3 style="font-size: var(--text-h4); margin-bottom: 4px;">Pesanan & pengiriman</h3>



          <p style="font-size: 12px;">Pantau status dan estimasi paket.</p>



        </div>







        <div class="card card-hover" style="cursor: pointer;">



          <div style="font-size: 24px; margin-bottom: 8px;">💳</div>



          <h3 style="font-size: var(--text-h4); margin-bottom: 4px;">Pembayaran</h3>



          <p style="font-size: 12px;">Metode dan konfirmasi pembayaran.</p>



        </div>







        <div class="card card-hover" style="cursor: pointer;">



          <div style="font-size: 24px; margin-bottom: 8px;">🔄</div>



          <h3 style="font-size: var(--text-h4); margin-bottom: 4px;">Pengembalian</h3>



          <p style="font-size: 12px;">Syarat, proses, dan status refund.</p>



        </div>







        <div class="card card-hover" style="cursor: pointer;">



          <div style="font-size: 24px; margin-bottom: 8px;">👤</div>



          <h3 style="font-size: var(--text-h4); margin-bottom: 4px;">Akun & keamanan</h3>



          <p style="font-size: 12px;">Kelola profil dan akses akun.</p>



        </div>



      </div>







      <!-- 2-Column: FAQs + Inquiry Form -->



      <div class="help-content-grid">



        <!-- Left: Accordion FAQs -->



        <div>



          <h2 style="font-size: var(--text-h3); margin-bottom: var(--space-20);">Pertanyaan yang sering ditanyakan</h2>



          <div id="faq-list" style="display: flex; flex-direction: column; gap: var(--space-12);">



            ${W.map(



              (e, t) => `



              <div class="card faq-item" style="padding: 18px 20px; cursor: pointer;">



                <div style="display:flex; justify-content:space-between; align-items:center;">



                  <strong style="font-size: 15px; color: var(--color-ink);">${e.question}</strong>



                  <span class="faq-icon" style="font-size: 18px; color: var(--color-ink-muted); transition: transform 0.2s;">



                    ${t === 0 ? "−" : "+"}



                  </span>



                </div>



                <div class="faq-answer" style="margin-top: 10px; font-size: 14px; line-height: 1.5; color: var(--color-ink-muted); display: ${t === 0 ? "block" : "none"};">



                  ${e.answer}



                </div>



              </div>



            `,



            ).join("")}



          </div>



        </div>







        <!-- Right: Inquiry Form -->



        <aside class="card" id="hubungi">



          <h2 style="font-size: var(--text-h4); margin-bottom: 4px;">Ceritakan kendalamu</h2>



          <p style="font-size: 12px; margin-bottom: 20px;">



            Senin–Sabtu, 09.00–18.00 WIB. Balasan lewat email dalam 1–2 hari kerja.



          </p>







          <form id="inquiry-form" style="display: flex; flex-direction: column; gap: var(--space-12);">



            <div class="form-group" style="margin-bottom:0;">



              <label class="form-label">Nama</label>



              <input type="text" class="input-text" value="${a.name}" required />



            </div>







            <div class="form-group" style="margin-bottom:0;">



              <label class="form-label">Email balasan</label>



              <input type="email" class="input-text" value="${a.email}" required />



            </div>







            <div class="form-group" style="margin-bottom:0;">



              <label class="form-label">Topik</label>



              <select class="input-select">



                <option value="pengiriman" selected>Pengiriman pesanan</option>



                <option value="pembayaran">Konfirmasi pembayaran</option>



                <option value="retur">Pengembalian barang / refund</option>



                <option value="produk">Pertanyaan seputar produk</option>



                <option value="lainnya">Lainnya</option>



              </select>



            </div>







            <div class="form-group" style="margin-bottom:0;">



              <label class="form-label">Nomor pesanan (opsional)</label>



              <input type="text" class="input-text" value="NS-261005-0184" />



            </div>







            <div class="form-group" style="margin-bottom:0;">



              <label class="form-label">Pesan <span class="required">*</span></label>



              <textarea class="input-textarea" placeholder="Jelaskan kendalamu di sini..." required style="min-height: 90px;"></textarea>



            </div>







            <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top: 8px;">



              Kirim pesan



            </button>







            <div style="font-size: 11px; color: var(--color-ink-muted); text-align: center; margin-top: 4px;">



              Jangan sertakan kata sandi, PIN, atau nomor kartu lengkap.



            </div>



          </form>



        </aside>



      </div>



    </div>



  `;



}



function ka() {



  var a;



  document.querySelectorAll(".faq-item").forEach((e) => {



    e.addEventListener("click", () => {



      const t = e.querySelector(".faq-answer"),



        i = e.querySelector(".faq-icon"),



        n = t.style.display === "block";



      ((t.style.display = n ? "none" : "block"),



        (i.textContent = n ? "+" : "−"));



    });



  });



  const s = document.getElementById("faq-search-input");



  (s == null ||



    s.addEventListener("input", (e) => {



      const t = e.target.value.toLowerCase().trim();



      document.querySelectorAll(".faq-item").forEach((i) => {



        const n = i.textContent.toLowerCase();



        i.style.display = !t || n.includes(t) ? "block" : "none";



      });



    }),



    (a = document.getElementById("inquiry-form")) == null ||



      a.addEventListener("submit", (e) => {



        (e.preventDefault(),



          m.show({



            title: "Pesan Terkirim!",



            message:



              "Tim NusaShop akan menghubungi Anda melalui email dalam 1–2 hari kerja.",



            type: "success",



          }),



          e.target.reset());



      }));



}



function A() {



  const s = window.location.hash || "#/",



    a = document.getElementById("main-content");



  if (!a) return;



  window.scrollTo(0, 0);



  const [e, t] = s.split("?"),



    i = {};



  if (



    (t &&



      new URLSearchParams(t).forEach((r, l) => {



        i[l] = r;



      }),



    e === "#/" || e === "" || e === "#")



  )



    ((a.innerHTML = F()), V());



  else if (e === "#/katalog") ((a.innerHTML = G(i)), Q(i));



  else if (e.startsWith("#/produk/")) {



    const r = e.replace("#/produk/", "");



    ((a.innerHTML = Y(r)), _(r));



  } else if (e === "#/keranjang") ((a.innerHTML = X()), Z());



  else if (e === "#/checkout/alamat") ((a.innerHTML = aa()), ea());



  else if (e === "#/checkout/pengiriman") ((a.innerHTML = ta()), ia());



  else if (e === "#/checkout/pembayaran") ((a.innerHTML = na()), sa());



  else if (e === "#/checkout/sukses") ((a.innerHTML = oa()), la());



  else if (e.startsWith("#/lacak/")) {



    const r = e.replace("#/lacak/", "") || "NS-261005-0184";



    ((a.innerHTML = da(r)), ca(r));



  } else if (e.startsWith("#/retur/")) {



    const r = e.replace("#/retur/", "") || "NS-261005-0184";



    ((a.innerHTML = pa(r)), ua(r));



  } else if (e === "#/masuk" || e === "#/login") {



    a.innerHTML = renderAuth("login", o);



    setupAuthEvents("login", o);



  } else if (e === "#/daftar" || e === "#/register") {



    a.innerHTML = renderAuth("register", o);



    setupAuthEvents("register", o);



  } else if (e === "#/akun") {



    const activeTab = i.tab || "pesanan";
    a.innerHTML = ma(activeTab);
    va(activeTab);



  } else if (e === "#/wishlist") {



    a.innerHTML = ha();



    ba();



  } else if (e === "#/bantuan") {



    a.innerHTML = ya();



    ka();



  } else if (e === "#/tentang" || e === "#/syarat" || e === "#/privasi") {



    a.innerHTML = `



      <div class="container" style="padding-top: var(--space-48); padding-bottom: var(--space-64); max-width: 800px;">



        <h1 style="font-size: var(--text-h2); margin-bottom: 16px;">



          ${e === "#/tentang" ? "Tentang NusaShop" : e === "#/syarat" ? "Syarat & Ketentuan" : "Kebijakan Privasi"}



        </h1>



        <div class="card" style="line-height: 1.7; font-size: 15px; color: var(--color-ink-muted);">



          <p style="margin-bottom: 16px; color: var(--color-ink); font-weight: 600;">



            Pilihan yang pas untuk keseharian. Commerce Indonesia, dengan pendekatan manusiawi.



          </p>



          <p style="margin-bottom: 12px;">



            Jelas sebelum indah. Indah tanpa berlebihan. Harga dan status selalu mudah ditemukan. Satu aksi utama per konteks. Gunakan bahasa Indonesia yang langsung, ramah, dan tidak menjanjikan hal yang belum dapat diverifikasi.



          </p>



          <p style="margin-bottom: 12px;">



            Seluruh data, katalog, dan pesanan pada situs web ini disiapkan secara khusus untuk demonstrasi alur desain NusaShop.



          </p>



          <div style="margin-top: 24px;">



            <a href="#/" class="btn btn-primary">Kembali ke Beranda</a>



          </div>



        </div>



      </div>



    `;



  } else {



    a.innerHTML = `



      <div class="container" style="text-align: center; padding: 64px 0;">



        <h1 style="font-size: var(--text-h1); margin-bottom: 8px;">404</h1>



        <p style="margin-bottom: 24px;">Halaman yang kamu cari tidak ditemukan.</p>



        <a href="#/" class="btn btn-primary">Kembali ke Beranda</a>



      </div>



    `;



  }



  const n = document.getElementById("demo-page-jump");



  n && (n.value = e);



}



function fa() {



  const s = document.getElementById("app");



  if (!s) return;



  const path = window.location.pathname.replace(/\/$/, "");



  if (path === "/masuk" || path === "/login") {



    window.location.hash = "#/masuk";



  } else if (path === "/daftar" || path === "/register") {



    window.location.hash = "#/daftar";



  }



  const a = o.getState();



  document.documentElement.setAttribute("data-theme", a.theme || "light");



  s.innerHTML = `



    <div id="navbar-wrapper">



      ${R()}



    </div>



    <main id="main-content" role="main"></main>



    <div id="footer-wrapper">



      ${U()}



    </div>



    <div id="bottom-nav-wrapper">



      ${q()}



    </div>



  `;



  N();



  A();



  window.addEventListener("hashchange", () => {



    A();



    T();



    I();



  });



  o.subscribe((e) => {



    document.documentElement.setAttribute("data-theme", e.theme || "light");



    T();



    I();



    if (window.location.hash === "#/keranjang") {



      const main = document.getElementById("main-content");



      if (main) {



        main.innerHTML = X();



        Z();



      }



    }



  });



}







function T() {



  const s = document.getElementById("navbar-wrapper");



  if (s) {



    s.innerHTML = R();



    N();



  }



}







function I() {



  const s = document.getElementById("bottom-nav-wrapper");



  if (s) {



    s.innerHTML = q();



  }



}







document.addEventListener("DOMContentLoaded", fa);



