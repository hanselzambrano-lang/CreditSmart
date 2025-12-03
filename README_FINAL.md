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

## Notas

- `src/` contiene los archivos fuente de la app React (`components/`, `pages/`, `data/`).
- `react-app/package.json` incluye las dependencias necesarias (`react`, `react-dom`, `react-router-dom`, `vite`).


- `chore: inicializar proyecto React con Vite`
- `feat: crear componente CreditCard con props`
- `feat: implementar búsqueda en tiempo real`
- `feat: agregar filtros y ordenamiento en simulador`
- `fix: validaciones del formulario (email, montos)`
- `feat: cálculo de cuota mensual funcionando`
- `style: ajustes responsive`
- `docs: agregar README con instrucciones`


```powershell
# Traer cambios remotos y rebase para evitar conflictos
git fetch origin
git pull --rebase origin main

# Añadir y commitear solo el README actualizado
git add README.md
git commit -m "docs: actualizar README para rúbrica (instrucciones, tecnologías, commits)"

# Enviar al remoto
git push origin main
```
```powershell
git add .
git commit -m "chore(react): commit final - README y ajustes finales"
git push origin main
```

## Problemas comunes

- Si `git push` es rechazado porque el remoto avanzó, ejecuta:

```powershell
git pull --rebase origin main
# resolver conflictos si aparecen
git push origin main
```

