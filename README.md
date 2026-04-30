# CargaVerde — Instalación de Cargadores para Vehículos Eléctricos

Landing page de [CargaVerde](https://cargaverde.cl), empresa especializada en la instalación certificada SEC de cargadores para vehículos eléctricos en Chile.

## Características

- **Calculadora de potencia** — estima el cargador adecuado según vehículo, km diarios y horas disponibles
- **Formulario de cotización** — captura de leads con respuesta en menos de 2 horas hábiles
- **FAQ interactivo** — preguntas frecuentes sobre el proceso TE-6, empalmes y modos de carga
- **WhatsApp flotante** — acceso directo para consultas
- **Scroll reveal** — animaciones al desplazarse

## Stack

- HTML5 / CSS3 / JavaScript vanilla (sin dependencias ni frameworks)
- Google Fonts: [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- Envío de formulario vía [Formspree](https://formspree.io) (clave no expuesta en este repo)

## SEO y accesibilidad

- Meta description, canonical y Open Graph completos
- Twitter Card configurada
- Schema.org `LocalBusiness` + `FAQPage`
- Contraste WCAG AA en todos los elementos interactivos
- `font-size: 16px` en inputs para evitar zoom automático en iOS
- Botones con `min-height: 48px` (estándar táctil)

## Estructura del archivo

```
index.html
│
├── <head>          Meta SEO, Open Graph, Twitter Card, Schema.org, fuentes
├── <nav>           Barra de navegación fija
├── .hero           Hero con calculadora visual del cargador
├── .section-pain   Pain points del usuario
├── .section-process Proceso en 4 pasos
├── .section-services Servicios: hogar, empresa, flotas
├── .section-calc   Calculadora de potencia interactiva
├── .section-social Testimonios
├── .section-cta    Formulario de cotización
├── .section-faq    Preguntas frecuentes (acordeón)
└── <footer>        Links, badge SEC, copyright
```

## Desarrollo local

No requiere servidor ni build step. Abrir directamente en el navegador:

```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

## Configuración necesaria en producción

| Variable | Dónde | Descripción |
|---|---|---|
| Formspree endpoint | `index.html` (JS) | Reemplazar con el endpoint del proyecto |
| Teléfono de contacto | `index.html` (HTML) | Número WhatsApp para el botón flotante y footer |
| `og:image` | `<head>` | Subir imagen `og-image.jpg` (1200×630 px) a la raíz del dominio |
| `favicon.ico` | Raíz del servidor | Ícono del sitio |

## Normativa referenciada

- **TE-6** — Declaración de puesta en servicio de instalaciones para carga de VE ante la SEC
- **Pliego Técnico N°15** — Norma técnica de la SEC para instalaciones de carga de vehículos eléctricos
- Modos de carga IEC 61851: Modo 2 (2.2–11 kW), Modo 3 (3.5–50 kW), Modo 4 (DC ≥44 kW)

## Licencia

Propietario — © 2025 CargaVerde SpA. Todos los derechos reservados.
