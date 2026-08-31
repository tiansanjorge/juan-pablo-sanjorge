# Juan Pablo Sanjorge — Sitio web

Sitio institucional del Lic. Juan Pablo Sanjorge (psicólogo, UBA), con información sobre el enfoque terapéutico, artículos, contacto y turnos por terapia a distancia.

**Producción:** https://psicologosanjorge.com.ar

## Stack

- **React 18** + **Vite 6** — build y dev server
- **React Router 7** — ruteo (`Home`, `Info`, `Articles`, `Contact`, redirect de artículos)
- **Sass** — estilos (`src/styles`, organizados por sección + `_tokens.scss` para la paleta/tipografía)
- **Bootstrap 5** — grid y utilidades base
- **Framer Motion** — animaciones y transiciones
- **react-helmet-async** — meta tags dinámicos por página (SEO)
- **EmailJS** — envío del formulario de contacto sin backend propio
- **react-toastify** — notificaciones de éxito/error en el formulario
- **Font Awesome / react-icons** — iconografía

No hay backend propio: es un sitio 100% estático (SPA) servido desde Netlify.

## Requisitos

- Node.js 18+
- npm

## Desarrollo local

```bash
npm install
npm run dev       # levanta Vite en modo desarrollo
```

## Scripts

| Comando           | Qué hace                                      |
| ------------------ | ---------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo (Vite)                 |
| `npm run build`     | Build de producción → genera `dist/`          |
| `npm run preview`   | Sirve localmente el resultado de `npm run build` |

## Estructura

```
src/
  components/   # NavBar, Footer, Faq, Article, ArticleCard, Marquee, Reveal, UserLayout, etc.
  pages/        # Home, Info, Articles, Contact, ArticleRedirect
  styles/       # SCSS por sección + _tokens.scss (paleta y tipografía del rediseño)
  utils/        # helpers (slug.js)
public/
  fonts/        # General Sans y Proza Libre (self-hosted, .woff/.woff2)
  img/          # imágenes del sitio
  _redirects    # reglas de redirect de Netlify (301 de artículos viejos + fallback SPA)
```

## Deploy — Netlify

El deploy es automático vía **Git integration**: cada push a la rama de producción configurada en Netlify dispara un build y publica el resultado.

- **Build command:** `npm run build`
- **Publish directory:** `dist`

> ⚠️ El proyecto migró de Create React App a Vite (commit `26182d7`). CRA generaba el build en `build/`; Vite lo genera en `dist/`. Si el sitio en Netlify quedó configurado con `Publish directory: build` de la época de CRA, hay que actualizarlo a `dist` en el panel (**Site settings → Build & deploy → Build settings**), o el deploy va a fallar o servir contenido desactualizado.

`dist/` no se versiona (está en `.gitignore`) — lo genera Netlify en cada build, no se sube a mano.

El archivo `public/_redirects` maneja:
- Redirects 301 de URLs viejas de artículos hacia `/articles?articulo=...`
- Fallback SPA (`/* → /index.html`) para que el ruteo de React Router funcione en refresh/deep links

## Formulario de contacto (EmailJS)

El envío de mails se hace client-side con EmailJS (`src/pages/Contact.jsx`). El `service ID`, `template ID` y `public key` están hardcodeados en el componente — es el modelo de uso estándar de EmailJS (la public key está pensada para exponerse en el cliente), pero si en algún momento se quiere rotar credenciales o tener distintos templates por ambiente, conviene moverlos a variables de entorno (`import.meta.env.VITE_*`) en vez de tenerlos hardcodeados.

## SEO / Analytics

- Google Tag Manager instalado en `index.html` (`GTM-KD2NK4DH`)
- `robots.txt` y `sitemap.xml` en `public/`
- Meta tags (title, description, og:*, twitter:card) manejados por página vía `react-helmet-async`

## Ramas

- `main` — producción
- `develop` — integración
- `redesign` — rediseño visual en curso (paleta, tipografía, componentes nuevos)
- `release` — releases
