// =====================================================================
// icons.js -- Gestor de Iconografía SVG Lucide para DASS-21 IEPROES
// Unidad de Psicopedagogía — IEPROES Centro Regional de San Miguel
// =====================================================================

(function () {
  // Inicialización de Lucide Icons de forma segura
  window.refreshIcons = function () {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  };

  // Escuchar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.refreshIcons);
  } else {
    setTimeout(window.refreshIcons, 50);
  }
})();
