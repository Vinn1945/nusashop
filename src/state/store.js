import { products } from './products.js';

const STORAGE_KEY = 'nusashop_store_v2';

export const DEMO_USER_ALYA = {
  name: "Alya Putri",
  email: "alya.putri@email.com",
  phone: "0812 3456 7890",
  avatar: "/assets/images/avatar/alya.png",
  initials: "AP",
  status: "Anggota Prioritas NusaShop",
  isLoggedIn: true
};

export const DEFAULT_ALYA_ADDRESSES = [
  {
    id: "addr-1",
    fullName: "Alya Putri",
    phone: "0812 3456 7890",
    street: "Jl. Melati No. 18, Tebet Barat",
    province: "DKI Jakarta",
    city: "Jakarta Selatan",
    district: "Tebet",
    postalCode: "12810",
    notes: "Rumah pagar putih, titipkan ke satpam jika tidak di rumah.",
    tag: "Rumah • Alamat Utama",
    isDefault: true
  },
  {
    id: "addr-2",
    fullName: "Alya Putri (Kantor)",
    phone: "0812 3456 7890",
    street: "Gedung Pacific Tower Lt. 12, SCBD Lot 8, Jl. Jend. Sudirman",
    province: "DKI Jakarta",
    city: "Jakarta Selatan",
    district: "Kebayoran Baru",
    postalCode: "12190",
    notes: "Titipkan ke resepsionis lobi utama.",
    tag: "Kantor",
    isDefault: false
  }
];

export const DEFAULT_ALYA_ORDERS = [
  {
    id: "NS-261005-0184",
    date: "18 Oktober 2026, 14:22 WIB",
    status: "Dalam Perjalanan",
    statusCode: "SHIPPED",
    statusDescription: "Paket dalam perjalanan ke alamat tujuanmu.",
    courier: "JNE Express",
    service: "Reguler (2-3 Hari)",
    awb: "JNE-88294719201",
    paymentMethod: "BCA Virtual Account",
    paymentStatus: "Lunas",
    address: {
      fullName: "Alya Putri",
      phone: "0812 3456 7890",
      street: "Jl. Melati No. 18, Tebet Barat",
      city: "Jakarta Selatan, DKI Jakarta 12810"
    },
    items: [
      {
        productId: "nusasound-air-anc",
        name: "NusaSound Air ANC",
        variant: "Midnight Blue",
        qty: 1,
        price: 899000,
        image: "/assets/images/products/nusasound-air-anc.jpg"
      },
      {
        productId: "daily-flask-600",
        name: "Daily Flask 600ml Tumbler",
        variant: "Pastel Lilac",
        qty: 1,
        price: 219000,
        image: "/assets/images/products/daily-flask-600.jpg"
      }
    ],
    pricing: {
      subtotal: 1118000,
      discount: 100000,
      voucherCode: "NUSA100",
      shipping: 18000,
      total: 1036000
    },
    timeline: [
      { title: "Pesanan Dibuat", date: "18 Okt 2026, 14:22 WIB", desc: "Pesanan berhasil dibuat oleh pembeli.", done: true },
      { title: "Pembayaran Diterima", date: "18 Okt 2026, 14:25 WIB", desc: "Transfer BCA Virtual Account telah diverifikasi.", done: true },
      { title: "Sedang Dikemas", date: "19 Okt 2026, 09:15 WIB", desc: "Barang diperiksa dan dikemas rapi di gudang NusaShop Jakarta.", done: true },
      { title: "Dalam Perjalanan", date: "19 Okt 2026, 15:40 WIB", desc: "Paket diserahkan kepada kurir JNE Express [JNE-88294719201].", done: true },
      { title: "Terkirim ke Alamat", date: "Estimasi: 21 Okt 2026", desc: "Kurir mengantarkan paket ke alamat penerima.", done: false }
    ],
    refund: null
  }
];

export function getInitialState() {
  return {
    theme: "light",
    user: null, // Starts as guest by default!
    registeredUsers: [
      { ...DEMO_USER_ALYA, password: "password123" }
    ],
    addresses: DEFAULT_ALYA_ADDRESSES,
    selectedAddress: DEFAULT_ALYA_ADDRESSES[0],
    selectedShipping: {
      carrier: "JNE Express",
      service: "Reguler (2-3 Hari)",
      cost: 18000,
      estimatedDays: "2-3 hari kerja"
    },
    selectedPayment: {
      method: "va_bca",
      name: "BCA Virtual Account",
      vaNumber: "8277 0812 3456 7890",
      instructions: "Transfer ke nomor Virtual Account BCA melalui BCA Mobile, KlikBCA, atau ATM BCA."
    },
    cart: [],
    wishlist: [],
    voucher: null,
    orders: []
  };
}

export class Store {
  constructor() {
    this.listeners = new Set();
    this.state = this.loadState();
  }

  loadState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...getInitialState(), ...parsed };
      }
    } catch (err) {
      console.warn("Gagal memuat local storage:", err);
    }
    return getInitialState();
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (err) {
      console.warn("Gagal menyimpan local storage:", err);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  getState() {
    return this.state;
  }

  formatRupiah(amount) {
    if (typeof amount !== "number") return "Rp0";
    return "Rp" + amount.toLocaleString("id-ID");
  }

  // --- THEME ---
  setTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    this.saveState();
  }

  toggleTheme() {
    const nextTheme = this.state.theme === "dark" ? "light" : "dark";
    this.setTheme(nextTheme);
    return nextTheme;
  }

  // --- AUTHENTICATION ---
  login(email, password) {
    email = (email || "").trim().toLowerCase();
    
    // Check if demo Alya
    if (email === "alya.putri@email.com" || email === "alya@email.com") {
      this.state.user = { ...DEMO_USER_ALYA, isLoggedIn: true };
      this.state.addresses = DEFAULT_ALYA_ADDRESSES;
      this.state.selectedAddress = DEFAULT_ALYA_ADDRESSES[0];
      this.state.cart = [];
      this.state.wishlist = [];
      this.state.orders = [];
      this.state.appliedCoupon = null;
      this.saveState();
      return { success: true, user: this.state.user };
    }

    // Check registered users
    const found = (this.state.registeredUsers || []).find(u => u.email.toLowerCase() === email);
    if (found) {
      this.state.user = { ...found, isLoggedIn: true };
      this.state.cart = [];
      this.state.wishlist = [];
      this.state.appliedCoupon = null;
      this.saveState();
      return { success: true, user: this.state.user };
    }

    // Allow dummy login with any email/password
    const namePart = email.split('@')[0].replace(/[._-]/g, ' ');
    const displayName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    const initials = displayName.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    
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
    this.state.cart = [];
    this.state.wishlist = [];
    this.state.appliedCoupon = null;
    if (!this.state.registeredUsers) this.state.registeredUsers = [];
    this.state.registeredUsers.push({ ...newUser, password });
    this.saveState();
    return { success: true, user: newUser };
  }

  register(name, email, phone, password) {
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
    this.state.registeredUsers.push({ ...newUser, password });

    this.state.user = newUser;
    this.state.cart = [];
    this.state.wishlist = [];
    this.state.appliedCoupon = null;

    // Create default address
    const defaultAddress = {
      id: "addr-" + Date.now(),
      fullName: name,
      phone: phone,
      street: "Jl. Jenderal Sudirman No. 45",
      province: "DKI Jakarta",
      city: "Jakarta Pusat",
      district: "Tanah Abang",
      postalCode: "10220",
      notes: "Alamat utama penerima.",
      tag: "Rumah • Alamat Utama",
      isDefault: true
    };

    this.state.addresses = [defaultAddress];
    this.state.selectedAddress = defaultAddress;

    this.saveState();
    return { success: true, user: newUser };
  }

  logout() {
    this.state.user = null;
    this.saveState();
  }

  updateProfile(name, phone, email) {
    if (!this.state.user) return;
    this.state.user.name = name;
    this.state.user.phone = phone;
    this.state.user.email = email;
    this.state.user.initials = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() || "NS";
    this.saveState();
  }

  // --- CART ---
  getCartTotals() {
    const cart = this.state.cart || [];
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    let discount = 0;
    if (this.state.voucher) {
      if (this.state.voucher.type === 'fixed') {
        discount = Math.min(this.state.voucher.value, subtotal);
      } else if (this.state.voucher.type === 'percent') {
        discount = Math.round(subtotal * (this.state.voucher.value / 100));
      }
    }

    const shipping = subtotal > 0 ? (this.state.selectedShipping ? this.state.selectedShipping.cost : 18000) : 0;
    const total = Math.max(0, subtotal - discount + shipping);
    const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

    return {
      subtotal,
      discount,
      shipping,
      total,
      itemCount,
      voucherCode: this.state.voucher ? this.state.voucher.code : null
    };
  }

  addToCart(productId, variantName = null, qty = 1) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return false;

    if (!this.state.cart) this.state.cart = [];
    const chosenVariant = variantName || (prod.variants && prod.variants[0] ? prod.variants[0].name : "Standard");
    
    const existingIndex = this.state.cart.findIndex(
      item => item.productId === productId && item.variant === chosenVariant
    );

    if (existingIndex >= 0) {
      this.state.cart[existingIndex].qty += qty;
    } else {
      this.state.cart.push({
        productId: prod.id,
        name: prod.name,
        variant: chosenVariant,
        price: prod.price,
        originalPrice: prod.originalPrice,
        qty: qty,
        image: prod.images && prod.images[0] ? prod.images[0] : ""
      });
    }

    this.saveState();
    return true;
  }

  updateCartQty(index, newQty) {
    if (!this.state.cart || !this.state.cart[index]) return;
    if (newQty <= 0) {
      this.removeFromCart(index);
    } else {
      this.state.cart[index].qty = Math.min(newQty, 99);
      this.saveState();
    }
  }

  removeFromCart(index) {
    if (!this.state.cart || !this.state.cart[index]) return;
    this.state.cart.splice(index, 1);
    this.saveState();
  }

  applyCoupon(code) {
    code = (code || "").trim().toUpperCase();
    if (code === "NUSA100") {
      this.state.voucher = { code: "NUSA100", type: "fixed", value: 100000, label: "Potongan Rp 100.000" };
      this.saveState();
      return { success: true, message: "Kupon NUSA100 berhasil digunakan! Hemat Rp100.000." };
    } else if (code === "DISKON10") {
      this.state.voucher = { code: "DISKON10", type: "percent", value: 10, label: "Diskon 10%" };
      this.saveState();
      return { success: true, message: "Kupon DISKON10 berhasil digunakan! Potongan 10%." };
    } else if (code === "HEMAT50") {
      this.state.voucher = { code: "HEMAT50", type: "fixed", value: 50000, label: "Potongan Rp 50.000" };
      this.saveState();
      return { success: true, message: "Kupon HEMAT50 berhasil digunakan! Hemat Rp50.000." };
    }
    return { success: false, message: "Kode promo tidak valid atau telah kedaluwarsa." };
  }

  removeCoupon() {
    this.state.voucher = null;
    this.saveState();
  }

  // --- WISHLIST ---
  toggleWishlist(productId) {
    if (!this.state.wishlist) this.state.wishlist = [];
    const idx = this.state.wishlist.indexOf(productId);
    let added = false;
    if (idx >= 0) {
      this.state.wishlist.splice(idx, 1);
    } else {
      this.state.wishlist.push(productId);
      added = true;
    }
    this.saveState();
    return added;
  }

  isInWishlist(productId) {
    return (this.state.wishlist || []).includes(productId);
  }

  // --- ADDRESSES ---
  setAddress(address) {
    this.state.selectedAddress = address;
    this.saveState();
  }

  addAddress(address) {
    if (!this.state.addresses) this.state.addresses = [];
    if (address.isDefault) {
      this.state.addresses.forEach(a => a.isDefault = false);
    }
    this.state.addresses.push(address);
    if (address.isDefault || this.state.addresses.length === 1) {
      this.state.selectedAddress = address;
    }
    this.saveState();
  }

  deleteAddress(id) {
    if (!this.state.addresses) return;
    this.state.addresses = this.state.addresses.filter(a => a.id !== id);
    if (this.state.selectedAddress && this.state.selectedAddress.id === id) {
      this.state.selectedAddress = this.state.addresses[0] || null;
    }
    this.saveState();
  }

  // --- CHECKOUT & ORDER ---
  setCourier(courier) {
    this.state.selectedShipping = courier;
    this.saveState();
  }

  setPaymentMethod(payment) {
    this.state.selectedPayment = payment;
    this.saveState();
  }

  placeOrder() {
    const cart = this.state.cart || [];
    if (cart.length === 0) return null;

    const totals = this.getCartTotals();
    const now = new Date();
    const dateFormatted = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) +
      ', ' + now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `NS-${now.getFullYear().toString().slice(-2)}${(now.getMonth()+1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${randomSuffix}`;

    const courier = this.state.selectedShipping || {
      carrier: "JNE Express",
      service: "Reguler (2-3 Hari)",
      cost: 18000,
      estimatedDays: "2-3 hari"
    };

    const payment = this.state.selectedPayment || {
      name: "BCA Virtual Account",
      vaNumber: "8277 0812 3456 7890"
    };

    const shippingAddress = this.state.selectedAddress || {
      fullName: this.state.user ? this.state.user.name : "Tamu NusaShop",
      phone: this.state.user ? this.state.user.phone : "0812 3456 7890",
      street: "Jl. Melati No. 18, Tebet Barat",
      city: "Jakarta Selatan, DKI Jakarta 12810"
    };

    const newOrder = {
      id: orderId,
      date: dateFormatted,
      status: "Diproses",
      statusCode: "PROCESSING",
      statusDescription: "Pesanan sedang disiapkan dan diperiksa oleh tim NusaShop.",
      courier: courier.carrier,
      service: courier.service,
      awb: "AWB-" + Math.floor(10000000000 + Math.random() * 90000000000),
      paymentMethod: payment.name,
      paymentStatus: "Lunas",
      address: shippingAddress,
      items: [...cart],
      pricing: { ...totals },
      timeline: [
        { title: "Pesanan Dibuat", date: dateFormatted, desc: "Pesanan Anda berhasil dikonfirmasi.", done: true },
        { title: "Pembayaran Diterima", date: dateFormatted, desc: `Pembayaran via ${payment.name} telah lunas.`, done: true },
        { title: "Sedang Dikemas", date: "Estimasi: Hari ini", desc: "Barang diperiksa dan dikemas rapi di gudang NusaShop.", done: true },
        { title: "Dalam Perjalanan", date: "Menunggu penyerahan kurir", desc: "Kurir akan mengambil paket dari gudang.", done: false },
        { title: "Terkirim ke Alamat", date: `Estimasi: ${courier.estimatedDays}`, desc: "Paket tiba di alamat tujuan.", done: false }
      ],
      refund: null
    };

    if (!this.state.orders) this.state.orders = [];
    this.state.orders.unshift(newOrder);

    // Empty cart and reset voucher
    this.state.cart = [];
    this.state.voucher = null;

    this.saveState();
    return newOrder;
  }

  updateOrderStatus(orderId, nextStatus) {
    const order = (this.state.orders || []).find(o => o.id === orderId);
    if (!order) return;
    order.status = nextStatus;
    if (nextStatus === "Dalam Perjalanan") {
      order.statusCode = "SHIPPED";
      order.timeline[3].done = true;
      order.timeline[3].date = "Hari ini";
    } else if (nextStatus === "Selesai") {
      order.statusCode = "DELIVERED";
      order.timeline.forEach(t => t.done = true);
      order.timeline[4].date = "Hari ini";
    }
    this.saveState();
  }

  submitReturnRequest(orderId, items, reason, bank) {
    const order = (this.state.orders || []).find(o => o.id === orderId);
    if (!order) return false;
    order.refund = {
      requestedDate: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      status: "Sedang Ditinjau Tim NusaShop",
      reason: reason,
      bank: bank,
      items: items
    };
    order.status = "Pengajuan Retur";
    this.saveState();
    return true;
  }

  // --- REVIEWS ---
  addProductReview(productId, rating, comment, userName) {
    const prod = products.find(p => p.id === productId);
    if (!prod) return;
    if (!prod.reviews) prod.reviews = [];
    prod.reviews.unshift({
      id: "rev-" + Date.now(),
      user: userName || (this.state.user ? this.state.user.name : "Pembeli Terverifikasi"),
      rating: rating,
      date: "Hari ini",
      comment: comment
    });
    prod.reviewsCount = prod.reviews.length;
    const avg = prod.reviews.reduce((acc, r) => acc + r.rating, 0) / prod.reviews.length;
    prod.rating = parseFloat(avg.toFixed(1));
    this.notify();
  }
}

export const store = new Store();
