# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- DEPENDENCIAS INSTALADAS SON:

npm install
npm install react-helmet                       -- PARA TENER BUEN SEO
npm install --save react-snap    "CONFIGURAR AL FINAL" -- PARA PRE RENDERIZADO Y MEJORAR LA INDEXACION

# Instalación y Configuración de React-Snap

- Instalación: Primero, instala React-Snap como una dependencia de desarrollo. Abre tu terminal y ejecuta:

npm install --save react-snap (ESENCIAL PARA EL PRERENDERIZADO)

# Configurar el script de build: En tu archivo package.json, agrega un script que ejecute React-Snap después de construir tu aplicación. Así es como se ve la sección de scripts:

{
  "scripts": {
    "build": "react-scripts build",
    "postbuild": "react-snap"
  }
}

# Modificar la entrada de tu aplicación: Para asegurarte de que React-Snap funcione correctamente, hay que hacer algunos ajustes en tu archivo src/index.js. Cambia el contenido del archivo para verificar si el contenido ha sido pre-renderizado:

import React from 'react';
import './index.css';
import App from './App';
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}


#  Agrega la configuración de react-snap: A continuación, puedes personalizar algunos aspectos de react-snap directamente en el package.json. Por ejemplo, puedes especificar las rutas que deseas pre-renderizar:

{
  "reactSnap": {
    "inlineCss": true
  }
}

# Ejecutar el build: Ahora que todo está configurado, ejecuta el comando para construir tu aplicación:
npm run build

# Configuración avanzada para asegurarte de cubrir todas las rutas deseadas
Si tienes rutas dinámicas o necesitas asegurar que ciertas páginas sean prerenderizadas, puedes hacer una lista en package.json para react-snap:

"reactSnap": {
  "inlineCss": true,
  "puppeteerArgs": ["--no-sandbox"],
  "removeBlobs": true,
  "minifyHtml": {
    "collapseWhitespace": true,
    "removeComments": true
  },
  "source": "dist",
  "include": ["/", "/about", "/services", "/contact"]
}


<!--  -->

Posibles problemas
Durante la implementación, encontré algunos problemas:

Contenido dinámico: Algunas rutas cargan contenido dinámico que puede no estar disponible en el momento de la pre-renderización. Es importante asegurarse de que cualquier dato necesario esté disponible antes de que React-Snap realice su trabajo.
Configuración del CSS: Al usar React-Snap, es crucial tener en cuenta el CSS crítico. Si usas bibliotecas de CSS en JS, puede haber un "destello de contenido sin estilo" (FOUC) mientras el JavaScript se carga. Considera usar la opción experimental inlineCss en tu configuración para evitar esto.
Rendimiento en tiempo de carga: Aunque React-Snap mejora el rendimiento de carga, si tu aplicación es pesada o carga muchos recursos, deberías implementar algunas optimizaciones, como el lazy loading y la división de código.

Reflexiones finales
Implementar React-Snap mejora significativamente el rendimiento y SEO de las aplicaciones. No solo hace que el contenido esté disponible de manera instantánea, sino que también optimiza la aplicación.