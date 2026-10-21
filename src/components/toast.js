export class ToastManager {
  constructor() {
    this.container = null;
    this.initContainer();
  }

  initContainer() {
    if (this.container) return;
    this.container = document.createElement("div");
    this.container.id = "toast-container";
    this.container.style.cssText = `
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      pointer-events: none;
      max-width: 380px;
      width: calc(100% - 48px);
    `;
    document.body.appendChild(this.container);
  }

  show({ title, message, type = "success", duration = 3500 }) {
    this.initContainer();

    const toast = document.createElement("div");
    toast.style.cssText = `
      pointer-events: auto;
      background: var(--color-surface, #ffffff);
      color: var(--color-ink, #0f172a);
      border-radius: var(--radius-md, 12px);
      border: 1px solid var(--color-border, #e2e8f0);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
      padding: 14px 18px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-family: var(--font-body, system-ui, sans-serif);
      font-size: 14px;
      animation: toastSlideIn 0.25s ease-out;
      transition: all 0.2s ease;
    `;

    const iconColor = type === "success" ? "var(--color-success, #10B981)" : type === "error" ? "var(--color-error, #EF4444)" : "var(--color-primary, #2563EB)";
    const iconSvg = type === "success"
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
      : type === "error"
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';

    toast.innerHTML = `
      <div style="color: ${iconColor}; flex-shrink: 0; margin-top: 2px;">
        ${iconSvg}
      </div>
      <div style="flex: 1; min-width: 0;">
        ${title ? `<div style="font-weight: 600; font-size: 14px; margin-bottom: 2px; color: var(--color-ink, #0f172a);">${title}</div>` : ""}
        <div style="font-size: 13px; color: var(--color-ink-muted, #64748b); line-height: 1.4;">${message}</div>
      </div>
      <button style="background: none; border: none; color: var(--color-ink-muted, #94a3b8); cursor: pointer; padding: 2px; line-height: 1;" title="Tutup">
        ✕
      </button>
    `;

    const closeBtn = toast.querySelector("button");
    const removeToast = () => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-8px)";
      setTimeout(() => toast.remove(), 200);
    };

    closeBtn.addEventListener("click", removeToast);
    setTimeout(removeToast, duration);

    this.container.appendChild(toast);
  }
}

export const toast = new ToastManager();
