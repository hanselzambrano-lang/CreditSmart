# CreditSmart — S20 EA1: Guía para la versión React
Estudiante: Hansel Raul Zambrano Lizarazo

Este documento contiene las instrucciones rápidas para ejecutar la aplicación React (Vite) incluida en `react-app/`, y la guía para hacer commits y push desde PowerShell.

## Ejecutar la aplicación React (local, PowerShell)

1. Abrir PowerShell y moverse al directorio `react-app`:

```powershell
cd "react-app"
```

2. Instalar dependencias (incluye `react-router-dom`):

```powershell
npm install
```

3. Levantar el servidor de desarrollo:

```powershell
npm run dev
```

4. Abrir la app en el navegador en la URL que muestre Vite (por defecto `http://localhost:5173`).

5. Comandos útiles:

```powershell
# Previsualizar producción (después de build)
npm run build
npm run preview
```

## Guía breve para commits y push (PowerShell)

Recomiendo hacer commits por fases (cada punto). Ejemplos:

```powershell
# Punto 1: lista dinámica (CreditCard + credits.js)
git add react-app/src/data/credits.js react-app/src/components/CreditCard.jsx
git commit -m "feat(react): Punto 1 - lista dinámica de productos"

# Punto 2: simulador (búsqueda, filtros, orden)
git add react-app/src/pages/SimulatorPage.jsx react-app/src/App.jsx react-app/src/index.css
git commit -m "feat(react): Punto 2 - simulador con búsqueda y filtros"

# Punto 3: formulario (validaciones, cálculo cuota)
git add react-app/src/components/RequestForm.jsx react-app/src/pages/RequestPage.jsx
git commit -m "feat(react): Punto 3 - formulario funcional con cálculo de cuota"

# Finalmente, subir al remoto
git push origin main
```

Si prefieres agrupar todo en un solo commit:

```powershell
git add .
git commit -m "chore(react): ajustes finales - formato moneda, router y páginas"
git push origin main
```

## Notas

- Asegúrate de ejecutar `npm install` dentro de `react-app` antes de `npm run dev`.
- Si quieres que prepare los commits por etapas (sólo preparar los comandos), dímelo y los dejo listos.

---
Crédito: Hansel Raul Zambrano Lizarazo
