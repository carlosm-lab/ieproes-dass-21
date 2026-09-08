// =====================================================================
// config.js -- Configuracion de Supabase para DASS-21 IEPROES
// =====================================================================
// Las credenciales ya estan incrustadas directamente en index.html y panel.html.
// Este archivo es referencia para cambiar las credenciales manualmente.
// NUNCA uses la service_role key en codigo de cliente.
// =====================================================================

// URL del proyecto Supabase
var SUPABASE_URL = "https://fenuukbefxysrelplnhy.supabase.co";
// Publishable key (solo lectura publica, segura para el cliente)
var SUPABASE_KEY = "sb_publishable_R1DuCAhCH9zLPiMZwHc2Fw_awegzclw";

// Exponer en window por compatibilidad
window.SUPABASE_URL = SUPABASE_URL;
window.SUPABASE_KEY = SUPABASE_KEY;
