// =====================================================================
// ui-components.js -- Componentes de UI Reutilizables para DASS-21
// Unidad de Psicopedagogía — IEPROES Centro Regional de San Miguel
// =====================================================================

(function () {
  var SEV_ORDEN = ['Normal', 'Leve', 'Moderada', 'Severa', 'Extremadamente severa'];

  // Determinar la clase de estilo glass para un nivel de severidad
  window.getSeverityClass = function (sev) {
    if (!sev) return 'sev-badge-normal';
    var s = sev.toLowerCase().trim();
    if (s === 'normal') return 'sev-badge-normal';
    if (s === 'leve') return 'sev-badge-leve';
    if (s === 'moderada') return 'sev-badge-moderada';
    if (s === 'severa') return 'sev-badge-severa';
    return 'sev-badge-extrema';
  };

  // Obtener ícono Lucide asociado al nivel de severidad
  window.getSeverityIconName = function (sev) {
    if (!sev) return 'check-circle';
    var s = sev.toLowerCase().trim();
    if (s === 'normal') return 'check-circle';
    if (s === 'leve') return 'info';
    if (s === 'moderada') return 'alert-circle';
    if (s === 'severa') return 'alert-triangle';
    return 'alert-octagon';
  };

  // Calcular severidad máxima entre las 3 escalas
  window.getMaxSeverity = function (res) {
    if (!res) return 'Normal';
    var niveles = [res.nivel_depresion, res.nivel_ansiedad, res.nivel_estres].filter(Boolean);
    if (!niveles.length) return 'Normal';
    return niveles.reduce(function (max, cur) {
      return SEV_ORDEN.indexOf(cur) > SEV_ORDEN.indexOf(max) ? cur : max;
    }, 'Normal');
  };

  // Verificar si un nivel de severidad es crítico
  window.isCriticalSeverity = function (sev) {
    return sev === 'Severa' || sev === 'Extremadamente severa';
  };

  // Formatear fechas en formato salvadoreño legible
  window.formatDateTime = function (isoStr) {
    if (!isoStr) return '---';
    var d = new Date(isoStr);
    return d.toLocaleDateString('es-SV', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Generar HTML de badge de severidad con ícono Lucide
  window.renderSeverityBadge = function (sev, extraCls) {
    var cls = window.getSeverityClass(sev);
    var icon = window.getSeverityIconName(sev);
    var isCrit = window.isCriticalSeverity(sev);
    return (
      '<span class="sev-badge-glass ' + cls + ' ' + (extraCls || '') + '">' +
        '<i data-lucide="' + icon + '" class="w-3.5 h-3.5 inline-block shrink-0"></i>' +
        '<span>' + (sev || 'Normal') + '</span>' +
      '</span>'
    );
  };
})();
