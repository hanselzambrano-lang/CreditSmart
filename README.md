

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






