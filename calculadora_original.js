// ─────────────────────────────────────────────
//  CALCULADORA DE POTENCIA — CÓDIGO ORIGINAL
//  Respaldo antes de obfuscación
//  Última actualización: 2026-05-25
// ─────────────────────────────────────────────
//
//  CÓMO ACTUALIZAR:
//  1. Edita este archivo con los cambios
//  2. Copia la función calcular() a https://obfuscator.io
//     Configuración recomendada:
//       - Compact: ON
//       - String Array: ON
//       - Rotate String Array: ON
//       - Self Defending: OFF (evita bugs)
//  3. Reemplaza el bloque <script> en index.html
//     (entre los comentarios <!-- CALCULADORA SCRIPT START/END -->)
//  4. Haz push
//
// ─────────────────────────────────────────────

function calcular() {
  const rendimiento = parseFloat(document.getElementById('tipoVE').value);
  const km = parseInt(document.getElementById('kmDia').value);
  const horas = parseInt(document.getElementById('horasCarga').value);

  document.getElementById('kmLabel').textContent = km + ' km';

  // Fórmula: consumo diario en kWh = km recorridos / rendimiento (km/kWh)
  const kwh = (km / rendimiento).toFixed(1);

  // Potencia necesaria = consumo con margen del 20% / horas disponibles
  const potencia = ((kwh * 1.2) / horas).toFixed(1);

  // Clasificación por potencia requerida (kW)
  let tipo;
  const p = parseFloat(potencia);
  if (p <= 2.2)       tipo = 'Enchufe doméstico';
  else if (p <= 11)   tipo = 'Wallbox Modo 3';
  else if (p <= 50)   tipo = 'Tótem Modo 3';
  else                tipo = 'Carga rápida DC';

  document.getElementById('resKwh').textContent      = kwh + ' kWh';
  document.getElementById('resPotencia').textContent = potencia + ' kW';
  document.getElementById('resTipo').textContent     = tipo;
}

calcular(); // Ejecutar al cargar la página
