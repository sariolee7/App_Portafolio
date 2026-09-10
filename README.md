# Portafolio de Eliza Muñoz

SPA desarrollada con React y Vite para presentar el trabajo de Eliza Muñoz como diseñadora. La aplicación incluye una navegación responsive, un proyecto destacado, una galería de proyectos y enlaces a perfiles profesionales.

## Características

- Navegación principal con las secciones de proyectos, sobre mí, servicios y contacto.
- Menú adaptable para dispositivos móviles.
- Sección de proyecto destacado con descripción, imagen y botón de acceso.
- Cuadrícula con nueve tarjetas de proyectos.
- Pie de página con enlaces a Behance y LinkedIn.
- Componentes React reutilizables y estilos CSS organizados por componente.

## Tecnologías

- React 19
- Vite 8
- JavaScript (JSX)
- CSS
- ESLint

## Estructura principal

```text
src/
├── App.jsx
├── main.jsx
├── App.css
├── index.css
├── assets/
├── Componentes/
│   ├── Header.jsx
│   ├── Work.jsx
│   └── Footer.jsx
└── Styles/
    ├── Header.css
    ├── Work.css
    └── Footer.css
```

## Instalación y ejecución

Se requiere Node.js instalado. Para ejecutar el proyecto localmente:

```bash
npm install
npm run dev
```

Después, abre la URL que muestra Vite en la terminal, normalmente `http://localhost:5173`.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga automática. |
| `npm run build` | Genera la versión optimizada para producción. |
| `npm run preview` | Previsualiza localmente la compilación de producción. |
| `npm run lint` | Comprueba el código con ESLint. |

## Requerimientos cumplidos

- [x] Proyecto creado utilizando React + Vite.
- [x] SPA básica desarrollada con más de dos componentes: `Header`, `Work` y `Footer`.
- [ ] Repositorio creado en GitHub y proyecto subido.
- [ ] Repositorio conectado con Vercel.
- [ ] Aplicación desplegada.

## Enlaces de entrega

Completa estos enlaces después de publicar el proyecto:

- **Repositorio en GitHub:** [Agregar URL del repositorio](https://github.com/)
- **Aplicación publicada en Vercel:** [Agregar URL de la aplicación](https://vercel.com/)

## Despliegue en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. Inicia sesión en [Vercel](https://vercel.com/) y selecciona **Add New Project**.
3. Importa el repositorio de GitHub.
4. Mantén la configuración detectada por Vercel para Vite.
5. Pulsa **Deploy**.

Cada nuevo cambio enviado a la rama configurada podrá generar un nuevo despliegue automáticamente.