import { store } from '../state/store.js';

export function showInvoiceModal(orderId) {
  const state = store.getState();
  const order = (state.orders || []).find(o => o.id === orderId) || state.orders[0];
  if (!order) return;

  const existing = document.getElementById("invoice-modal-overlay");
  if (existing) existing.remove();

  const modal = document.createElement("div");
  modal.id = "invoice-modal-overlay";
  modal.style.cssText = `
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(15, 23, 42, 0.65);
    backdrop-filter: blur(4px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;

  modal.innerHTML = `
    <div style="
      background: var(--color-surface, #ffffff);
      color: var(--color-ink, #0f172a);
      border-radius: var(--radius-lg, 16px);
      border: 1px solid var(--color-border, #e2e8f0);
      box-shadow: var(--shadow-xl);
      max-width: 650px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      padding: 32px;
      position: relative;
      font-family: var(--font-body);
    ">
      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px; border-bottom:1px solid var(--color-border); padding-bottom:18px;">
        <div>
          <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:22px;">
            <span style="color:var(--color-primary);">NusaShop</span>
            <span style="font-size:12px; font-weight:normal; color:var(--color-ink-muted);">• Faktur Resmi</span>
          </div>
          <p style="font-size:12px; color:var(--color-ink-muted); margin-top:4px;">PT Nusa Niaga Nusantara • NPWP: 01.345.678.9-012.000</p>
        </div>
        <button id="close-invoice-modal" style="background:none; border:none; font-size:20px; cursor:pointer; color:var(--color-ink-muted); padding:4px;">✕</button>
      </div>

      <!-- Info Meta -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px; font-size:13px;">
        <div>
          <span style="color:var(--color-ink-muted);">Nomor Pesanan:</span>
          <div style="font-weight:600; font-family:monospace; font-size:14px; margin-top:2px;">${order.id}</div>
          <span style="color:var(--color-ink-muted); display:block; margin-top:8px;">Tanggal Transaksi:</span>
          <div style="font-weight:500;">${order.date}</div>
        </div>
        <div>
          <span style="color:var(--color-ink-muted);">Penerima:</span>
          <div style="font-weight:600;">${order.address ? order.address.fullName : "Pelanggan NusaShop"}</div>
          <div style="color:var(--color-ink-muted); font-size:12px; margin-top:2px;">${order.address ? order.address.street : "-"}, ${order.address ? order.address.city : ""}</div>
        </div>
      </div>

      <!-- Items Table -->
      <table style="width:100%; border-collapse:collapse; margin-bottom:24px; font-size:13px;">
        <thead>
          <tr style="border-bottom:2px solid var(--color-border); text-align:left; color:var(--color-ink-muted);">
            <th style="padding:8px 0;">Item Produk</th>
            <th style="padding:8px; text-align:center;">Qty</th>
            <th style="padding:8px 0; text-align:right;">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${(order.items || []).map(it => `
            <tr style="border-bottom:1px solid var(--color-border);">
              <td style="padding:10px 0;">
                <div style="font-weight:600;">${it.name}</div>
                <div style="font-size:12px; color:var(--color-ink-muted);">${it.variant || "Standard"}</div>
              </td>
              <td style="padding:10px; text-align:center;">${it.qty}</td>
              <td style="padding:10px 0; text-align:right; font-weight:600;">${store.formatRupiah(it.price * it.qty)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Totals -->
      <div style="border-top:1px solid var(--color-border); padding-top:12px; margin-bottom:24px; font-size:13px; display:flex; flex-direction:column; gap:6px;">
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--color-ink-muted);">Subtotal Produk</span>
          <span>${store.formatRupiah(order.pricing ? order.pricing.subtotal : 0)}</span>
        </div>
        ${order.pricing && order.pricing.discount > 0 ? `
          <div style="display:flex; justify-content:space-between; color:var(--color-success);">
            <span>Diskon (${order.pricing.voucherCode || 'Voucher'})</span>
            <span>-${store.formatRupiah(order.pricing.discount)}</span>
          </div>
        ` : ''}
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--color-ink-muted);">Biaya Pengiriman (${order.courier || 'Kurir'})</span>
          <span>${store.formatRupiah(order.pricing ? order.pricing.shipping : 0)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-weight:700; font-size:16px; border-top:1px solid var(--color-border); padding-top:8px; margin-top:4px;">
          <span>Total Pembayaran</span>
          <span style="color:var(--color-primary);">${store.formatRupiah(order.pricing ? order.pricing.total : 0)}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display:flex; justify-content:flex-end; gap:12px;">
        <button id="print-invoice-btn" class="btn btn-outline" style="font-size:13px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          Cetak Faktur
        </button>
        <button id="close-invoice-btn" class="btn btn-primary" style="font-size:13px;">Selesai</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModal = () => modal.remove();
  modal.querySelector("#close-invoice-modal").addEventListener("click", closeModal);
  modal.querySelector("#close-invoice-btn").addEventListener("click", closeModal);
  modal.querySelector("#print-invoice-btn").addEventListener("click", () => window.print());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}
