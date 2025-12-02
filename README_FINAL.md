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

## Notas para entrega (rúbrica)

- `src/` contiene los archivos fuente de la app React (`components/`, `pages/`, `data/`).
- `react-app/package.json` incluye las dependencias necesarias (`react`, `react-dom`, `react-router-dom`, `vite`).
- Asegúrate de que `.gitignore` excluya `node_modules/` antes de subir.
- Capturas/GIF: por indicación del autor no se añadieron capturas; si el profesor las solicita, se pueden agregar en `IMG/` y referenciarlas aquí.

## Commits y buenas prácticas

Debes tener un historial de commits descriptivos durante el desarrollo (mínimo 8 commits). Ejemplos de buenos commits:

- `chore: inicializar proyecto React con Vite`
- `feat: crear componente CreditCard con props`
- `feat: implementar búsqueda en tiempo real`
- `feat: agregar filtros y ordenamiento en simulador`
- `fix: validaciones del formulario (email, montos)`
- `feat: cálculo de cuota mensual funcionando`
- `style: ajustes responsive`
- `docs: agregar README con instrucciones`

Verificar número de commits localmente:

```powershell
# Cuenta total de commits
git rev-list --count HEAD

# Ver últimos commits
git log --oneline -n 12
```

## Último push (comandos mínimos)

Si solo quieres agregar el `README.md` final y subirlo (último commit), usa estos comandos desde la raíz del repo `CrediSmart`:

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

Si prefieres agrupar todo en un único commit final (más simple):

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

- Asegúrate de no subir `node_modules/`. Si no tienes `.gitignore`, créalo y añade `node_modules/`.

---

Hansel Raul Zambrano Lizarazo
