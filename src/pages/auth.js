import { store } from '../state/store.js';
import { toast } from '../components/toast.js';

export function renderAuth(mode = 'login', storeInstance = null) {
  const isLogin = mode === 'login';
  const activeStore = storeInstance || store;
  const currentUser = activeStore ? activeStore.getState().user : null;

  return `
    <div class="auth-page-wrapper auth-mode-${mode}">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="Navigasi rekam jejak" style="margin-bottom: var(--space-20);">
          <a href="#/">Beranda</a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">${isLogin ? "Masuk ke Akun" : "Daftar Akun Baru"}</span>
        </nav>

        ${currentUser ? `
          <!-- Notice jika pengguna sudah masuk -->
          <div class="card" style="margin-bottom: var(--space-24); background: var(--color-primary-subtle); border-color: rgba(37,99,235,0.25); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; padding: 16px 20px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--color-primary); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px;">
                ${currentUser.initials || "AP"}
              </div>
              <div>
                <div style="font-weight: 600; font-size: 14px; color: var(--color-ink);">
                  Halo, ${currentUser.name}! Anda saat ini sedang masuk.
                </div>
                <div style="font-size: 12.5px; color: var(--color-ink-muted);">
                  ${currentUser.email} (${currentUser.status || 'Anggota NusaShop'})
                </div>
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <a href="#/akun" class="btn btn-sm btn-primary">Buka Dashboard Akun</a>
              <button type="button" id="auth-switch-logout-btn" class="btn btn-sm btn-outline">Keluar Akun</button>
            </div>
          </div>
        ` : ''}

        <!-- Mobile Navigation Tabs (Masuk vs Daftar) -->
        <div class="auth-tabs-mobile">
          <a href="#/masuk" class="auth-tab-btn ${isLogin ? 'active' : ''}">
            Masuk ke Akun
          </a>
          <a href="#/daftar" class="auth-tab-btn ${!isLogin ? 'active' : ''}">
            Baru di NusaShop? Daftar
          </a>
        </div>

        <!-- 3-Column Layout: Showcase | Masuk | Buat Akun -->
        <div class="auth-layout-3col">
          <!-- Kolom 1: Showcase Banner Merek NusaShop -->
          <div class="auth-showcase-panel">
            <span class="badge badge-primary" style="align-self: flex-start; font-size: 11px; padding: 3px 8px;">NusaShop ID</span>
            
            <h1 class="auth-showcase-title" style="margin: 0; font-size: 28px; line-height: 1.2; font-weight: 800;">
              Pilihanmu.<br/>Favoritmu.<br/>Satu akun.
            </h1>
            
            <p class="auth-showcase-desc" style="margin: 0; font-size: 13.5px; color: var(--color-ink-muted); line-height: 1.55;">
              Simpan wishlist, lihat riwayat belanja, dan pantau pesanan tanpa perlu mencari email.
            </p>

            <div class="auth-showcase-img-wrap" style="position: relative; border-radius: var(--radius-md); overflow: hidden; margin-top: 4px;">
              <img 
                src="/assets/images/banners/auth-showcase.jpg" 
                alt="Produk Pilihan NusaShop" 
                class="auth-showcase-img"
                style="width: 100%; height: 260px; object-fit: cover; display: block;"
                onerror="this.src='/assets/images/banners/hero-desk.jpg'"
              />
            </div>

            <p class="auth-showcase-footer" style="margin: 0; font-size: 12px; color: var(--color-ink-muted); line-height: 1.5; padding-top: 10px; border-top: 1px solid rgba(37,99,235,0.12);">
              Data akun digunakan untuk memproses pesanan dan memberi layanan pelanggan.
            </p>
          </div>

          <!-- Kolom 2: Selamat Datang Kembali (Masuk / Login) -->
          <div class="auth-card ${isLogin ? 'auth-card-active' : ''}" id="card-masuk">
            <div style="margin-bottom: 4px;">
              <h2 class="auth-card-title">Selamat datang kembali</h2>
              <p class="auth-card-subtitle">Masuk untuk melanjutkan belanjamu.</p>
            </div>

            <form id="auth-login-form" style="display:flex; flex-direction:column; gap:16px;">
              <div class="form-group">
                <label class="label-text" for="login-email">Email</label>
                <input 
                  type="text" 
                  id="login-email" 
                  class="input-text" 
                  placeholder="alya.putri@email.com atau nama@email.com" 
                  value="${isLogin && !currentUser ? 'alya.putri@email.com' : ''}"
                  required 
                  autocomplete="username"
                />
              </div>

              <div class="form-group">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                  <label class="label-text" for="login-password" style="margin:0;">Kata sandi</label>
                  <a href="javascript:void(0)" id="login-forgot-pwd" style="font-size:12px; color:var(--color-primary); font-weight:500;">Lupa kata sandi?</a>
                </div>
                <div class="password-input-wrapper">
                  <input 
                    type="password" 
                    id="login-password" 
                    class="input-text" 
                    placeholder="Masukkan kata sandi" 
                    value="${isLogin && !currentUser ? 'password123' : ''}"
                    required 
                    autocomplete="current-password"
                  />
                  <button type="button" class="password-toggle-btn" data-target="login-password" aria-label="Lihat kata sandi">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>
              </div>

              <label class="checkbox-label" style="font-size:13px; color:var(--color-ink-muted);">
                <input type="checkbox" id="login-remember" checked />
                <span>Ingat saya</span>
              </label>

              <button type="submit" class="btn btn-primary" id="login-submit-btn" style="width:100%; height:44px; font-weight:600; font-size:14px; margin-top:2px;">
                Masuk
              </button>

              <div class="auth-divider">
                <span>atau gunakan akun lain</span>
              </div>

              <!-- Login dengan Google -->
              <button type="button" id="google-login-btn" class="btn-google-login">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.43 7.34 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.57 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"/>
                </svg>
                <span>Lanjutkan dengan Google</span>
              </button>

              <!-- Quick Demo Helper -->
              <div class="auth-helper-box">
                <div style="display:flex; align-items:center; justify-content:space-between;">
                  <span style="font-weight:600; color:var(--color-ink); font-size:12px;">Akun Demo Cepat</span>
                  <span class="badge badge-success" style="font-size:10px; padding:2px 6px;">Siap Digunakan</span>
                </div>
                <button type="button" id="quick-login-alya-btn" class="auth-helper-btn" style="width:100%;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <line x1="20" y1="8" x2="20" y2="14"/>
                    <line x1="23" y1="11" x2="17" y2="11"/>
                  </svg>
                  Masuk Cepat sebagai Alya Putri (Demo)
                </button>
              </div>

              <p style="margin: 0; font-size: 11.5px; color: var(--color-ink-muted); line-height: 1.45; text-align: center;">
                Dengan masuk, kamu menyetujui <a href="#/syarat" style="color:var(--color-ink); text-decoration:underline;">Syarat & Ketentuan</a> serta <a href="#/privasi" style="color:var(--color-ink); text-decoration:underline;">Kebijakan Privasi</a> NusaShop.
              </p>
            </form>
          </div>

          <!-- Kolom 3: Baru di NusaShop? (Buat Akun / Register) -->
          <div class="auth-card ${!isLogin ? 'auth-card-active' : ''}" id="card-daftar">
            <div style="margin-bottom: 4px;">
              <h2 class="auth-card-title">Baru di NusaShop?</h2>
              <p class="auth-card-subtitle">Buat akun dan simpan semua pilihanmu.</p>
            </div>

            <form id="auth-register-form" style="display:flex; flex-direction:column; gap:14px;">
              <div class="form-group">
                <label class="label-text" for="reg-name">Nama lengkap</label>
                <input 
                  type="text" 
                  id="reg-name" 
                  class="input-text" 
                  placeholder="Nama sesuai penerima" 
                  required 
                  autocomplete="name"
                />
              </div>

              <div class="form-group">
                <label class="label-text" for="reg-email">Email</label>
                <input 
                  type="email" 
                  id="reg-email" 
                  class="input-text" 
                  placeholder="nama@email.com" 
                  required 
                  autocomplete="email"
                />
              </div>

              <div class="form-group">
                <label class="label-text" for="reg-phone">No. Handphone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="reg-phone" 
                  class="input-text" 
                  placeholder="0812 3456 7890" 
                  value="0812 8888 9999"
                  autocomplete="tel"
                />
              </div>

              <div class="form-group">
                <label class="label-text" for="reg-password">Kata sandi</label>
                <div class="password-input-wrapper">
                  <input 
                    type="password" 
                    id="reg-password" 
                    class="input-text" 
                    placeholder="Buat kata sandi" 
                    minlength="6" 
                    required 
                    autocomplete="new-password"
                  />
                  <button type="button" class="password-toggle-btn" data-target="reg-password" aria-label="Lihat kata sandi">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>
                <div style="font-size:12px; color:var(--color-ink-muted); margin-top:4px;">
                  Minimal 8 karakter, gunakan huruf dan angka.
                </div>
              </div>

              <label class="checkbox-label" style="font-size:12.5px; color:var(--color-ink-muted); align-items:center; margin-top:4px; cursor:pointer;">
                <input type="checkbox" id="reg-agree" checked />
                <span class="checkbox-custom">✓</span>
                <span>Saya setuju dengan <a href="#/syarat" style="color:var(--color-primary); font-weight:500;">ketentuan</a> dan <a href="#/privasi" style="color:var(--color-primary); font-weight:500;">kebijakan privasi</a></span>
              </label>

              <!-- Tombol Buat Akun Purple (#7C3AED) sesuai desain Figma -->
              <button type="submit" class="btn btn-auth-register" id="reg-submit-btn" style="width:100%; height:44px; margin-top:4px;">
                Buat akun
              </button>

              <p style="margin: 0; font-size: 11.5px; color: var(--color-ink-muted); line-height: 1.45; text-align: center;">
                Kami akan mengirim email verifikasi. Pilihan promo lewat email bersifat opsional.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function setupAuthEvents(mode = 'login', storeInstance = null) {
  const activeStore = storeInstance || store;

  // Toggle lihat kata sandi
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (ev) => {
      ev.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;
      const isPwd = input.type === 'password';
      input.type = isPwd ? 'text' : 'password';
      btn.innerHTML = isPwd
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    });
  });

  // Submit Login Form
  const loginForm = document.getElementById('auth-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const pwd = document.getElementById('login-password').value.trim();
      if (!email || !pwd) {
        toast.show({ title: 'Gagal Masuk', message: 'Silakan isi email dan kata sandi.', type: 'error' });
        return;
      }

      const res = activeStore.login(email, pwd);
      toast.show({
        title: 'Berhasil Masuk!',
        message: `Selamat datang kembali, ${res.user.name}!`,
        type: 'success'
      });

      // Handle redirect parameter (misal dari checkout)
      const hash = window.location.hash || '';
      const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
      const redirect = params.get('redirect');
      if (redirect === 'checkout') {
        window.location.hash = '#/checkout/alamat';
      } else {
        window.location.hash = '#/akun';
      }
    });
  }

  // Quick fill Alya Putri
  const quickBtn = document.getElementById('quick-login-alya-btn');
  if (quickBtn) {
    quickBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('login-email');
      const pwdInput = document.getElementById('login-password');
      if (emailInput) emailInput.value = 'alya.putri@email.com';
      if (pwdInput) pwdInput.value = 'password123';

      const res = activeStore.login('alya.putri@email.com', 'password123');
      toast.show({
        title: 'Berhasil Masuk!',
        message: `Selamat datang kembali, ${res.user.name}! (Demo Akun Alya Putri)`,
        type: 'success'
      });

      const hash = window.location.hash || '';
      const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
      const redirect = params.get('redirect');
      if (redirect === 'checkout') {
        window.location.hash = '#/checkout/alamat';
      } else {
        window.location.hash = '#/akun';
      }
    });
  }

  // Google Login Simulation
  const googleBtn = document.getElementById('google-login-btn');
  if (googleBtn) {
    googleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const res = activeStore.login('alya.putri@email.com', 'password123');
      toast.show({
        title: 'Masuk dengan Google',
        message: `Terhubung dengan Google. Selamat datang, ${res.user.name}!`,
        type: 'success'
      });

      const hash = window.location.hash || '';
      const params = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
      const redirect = params.get('redirect');
      if (redirect === 'checkout') {
        window.location.hash = '#/checkout/alamat';
      } else {
        window.location.hash = '#/akun';
      }
    });
  }

  // Submit Register Form
  const handleRegister = (e) => {
    if (e) e.preventDefault();
    const nameInput = document.getElementById('reg-name');
    const emailInput = document.getElementById('reg-email');
    const phoneInput = document.getElementById('reg-phone');
    const pwdInput = document.getElementById('reg-password');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const phone = (phoneInput?.value || '0812 8888 9999').trim();
    const pwd = pwdInput ? pwdInput.value.trim() : '';

    if (!name) {
      toast.show({ title: 'Nama Wajib Diisi', message: 'Silakan masukkan nama lengkap Anda.', type: 'error' });
      nameInput?.focus();
      return;
    }
    if (!email) {
      toast.show({ title: 'Email Wajib Diisi', message: 'Silakan masukkan alamat email yang valid.', type: 'error' });
      emailInput?.focus();
      return;
    }
    if (!pwd || pwd.length < 6) {
      toast.show({ title: 'Kata Sandi Kurang', message: 'Kata sandi minimal 6 karakter.', type: 'error' });
      pwdInput?.focus();
      return;
    }

    const res = activeStore.register(name, email, phone, pwd);
    toast.show({
      title: 'Pendaftaran Berhasil!',
      message: `Selamat datang di NusaShop, ${name}! Akunmu telah berhasil dibuat dan siap digunakan.`,
      type: 'success'
    });
    window.location.hash = '#/akun';
  };

  const regForm = document.getElementById('auth-register-form');
  if (regForm) {
    regForm.addEventListener('submit', handleRegister);
  }
  const regSubmitBtn = document.getElementById('reg-submit-btn');
  if (regSubmitBtn) {
    regSubmitBtn.addEventListener('click', (e) => {
      // If form doesn't trigger native submit (e.g. mobile virtual keyboard)
      const formEl = document.getElementById('auth-register-form');
      if (formEl && !formEl.checkValidity()) {
        formEl.reportValidity();
        return;
      }
      handleRegister(e);
    });
  }

  // Forgot password
  const forgotBtn = document.getElementById('login-forgot-pwd');
  if (forgotBtn) {
    forgotBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toast.show({
        title: 'Pemulihan Kata Sandi',
        message: 'Tautan reset kata sandi dummy telah dikirimkan ke email Anda. Silakan periksa kotak masuk.',
        type: 'info'
      });
    });
  }

  // Switch / Logout from current account
  const switchLogoutBtn = document.getElementById('auth-switch-logout-btn');
  if (switchLogoutBtn) {
    switchLogoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      activeStore.logout();
      toast.show({
        title: 'Telah Keluar',
        message: 'Anda berhasil keluar. Silakan masuk dengan akun yang berbeda.',
        type: 'info'
      });
      window.location.hash = '#/masuk';
      // Re-render auth page
      const main = document.getElementById('main-content');
      if (main) {
        main.innerHTML = renderAuth(mode, activeStore);
        setupAuthEvents(mode, activeStore);
      }
    });
  }

  // Auto focus input
  setTimeout(() => {
    if (mode === 'login') {
      const emailInput = document.getElementById('login-email');
      if (emailInput && !emailInput.value) emailInput.focus();
    } else {
      const nameInput = document.getElementById('reg-name');
      if (nameInput) nameInput.focus();
    }
  }, 100);
}
