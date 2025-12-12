

# CreditSmart — S20 EA1: Diseño de Interfaces Web
Estudiante: Hansel Raul Zambrano Lizarazo

## Descripción

Aplicación para consultar productos crediticios, simular préstamos y solicitar créditos. Contiene una versión estática y una aplicación dinámica desarrollada con React (Vite) que implementa catálogo, simulador y formulario de solicitud.

## Tecnologías

- React 18 (Vite)
- React Router (`react-router-dom`)
- JavaScript (ES6+), HTML5, CSS3

## Estructura relevante

```
CrediSmart/
├── index.html                    # Versión estática (catálogo)
├── simulador.html                # Versión estática (simulador)
├── solicitar.html                # Versión estática (formulario)
├── react-app/                    # Aplicación React (Vite)
│   ├── package.json
│   └── src/
│       ├── components/
│       ├── pages/
│       └── data/
├── css.css                       # estilos (sitio estático)
├── IMG/                          # imágenes y recursos
└── README.md
```

## Instalación y ejecución (local, PowerShell)

1. Abrir PowerShell en la raíz del proyecto `CrediSmart`.
2. Ir a la carpeta de la aplicación React e instalar dependencias:

```powershell
cd "react-app"
npm install
```

3. Levantar el servidor de desarrollo:

```powershell
npm run dev
# Abrir la URL indicada por Vite (por defecto http://localhost:5173)
```

4. Para construir producción:

```powershell
npm run build
npm run preview
```

## Integración con Firebase (Firestore)

Opcional: para persistencia en la nube con Firestore sigue estos pasos.

1. Crea un proyecto en Firebase Console y añade una Web App.
2. Habilita Firestore Database en modo de pruebas (ajusta reglas luego).
3. En `react-app/` crea un archivo `.env` con las siguientes variables (no subir `.env` a Git):

```text
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Copia `react-app/.env.example` a `react-app/.env` y completa los valores.
5. Instala la dependencia `firebase` si no está instalada:

```powershell
cd "react-app"
npm install firebase
```

6. La app contiene `react-app/src/firebase/firebase.js` que inicializa Firestore usando `import.meta.env`. Una vez tengas `.env` con valores, la app cargará los créditos desde la colección `credits` (si existe) y las solicitudes se guardarán en la colección `requests`.

7. Prueba crear una solicitud desde la app y verifica en Firebase Console → Firestore que el documento se creó.

Notas de seguridad:
- Nunca subas `.env` con tus credenciales al repositorio público.
- Incluye `.env` en `.gitignore` (ya añadido en este repo).







