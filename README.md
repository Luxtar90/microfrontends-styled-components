# 🚀 Microfrontends con Styled Components

Una arquitectura de microfrontends moderna y escalable construida con React, Vite y Styled Components. Cada microfrontend opera de forma independiente mientras se integra perfectamente en una aplicación contenedora (Shell).

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz con gradientes vibrantes y efectos glass-morphism
- ⚡ **Rendimiento Óptimo**: Construido con Vite para desarrollo y compilación ultrarrápida
- 🧩 **Arquitectura Modular**: Microfrontends independientes y desacoplados
- 🎯 **Comunicación Eficiente**: Sistema de mensajería entre microfrontends
- 💅 **Styled Components**: CSS-in-JS para estilos mantenibles y dinámicos
- 📱 **Responsive Design**: Adaptado para todos los dispositivos

## 🏗️ Arquitectura

```
styled-components/
├── shell/           # Aplicación contenedora principal
├── productos/       # Catálogo de productos
├── usuarios/        # Gestión de usuarios
└── compras/         # Sistema de compras
```

## 🎨 Microfrontends

### 🛍️ Productos
- **URL**: http://localhost:5174
- **Descripción**: Catálogo interactivo de productos con diseño moderno
- **Características**:
  - Grid responsive con cards animados
  - Gradientes vibrantes y efectos hover
  - Catálogo de productos Apple
  - Integración con sistema de compras

### 👤 Usuarios  
- **URL**: http://localhost:5175
- **Descripción**: Perfil de usuario con diseño premium
- **Características**:
  - Avatar animado con rotación
  - Efectos glass-morphism
  - Gradientes dinámicos
  - Información personalizable

### 🛒 Compras
- **URL**: http://localhost:5176
- **Descripción**: Sistema de gestión de compras
- **Características**:
  - Integración con catálogo de productos
  - Historial de compras
  - Información de usuarios

### 🐚 Shell (Contenedor)
- **URL**: http://localhost:5173
- **Descripción**: Aplicación principal que orquesta todos los microfrontends
- **Características**:
  - Diseño oscuro elegante
  - Efectos de profundidad
  - Comunicación entre microfrontends
  - Layout responsive

## 🚀 Comenzando

### Prerrequisitos
- Node.js 18+
- pnpm (recomendado)

### Instalación

1. **Clonar el repositorio**:
```bash
git clone https://github.com/Luxtar90/microfrontends-styled-components.git
cd microfrontends-styled-components
```

2. **Instalar dependencias**:
```bash
# Instalar dependencias de todos los microfrontends
cd productos && pnpm install && cd ..
cd usuarios && pnpm install && cd ..
cd compras && pnpm install && cd ..
cd shell && pnpm install && cd ..
```

3. **Iniciar desarrollo**:
```bash
# Iniciar todos los microfrontends en paralelo
cd productos && pnpm dev &
cd usuarios && pnpm dev &
cd compras && pnpm dev &
cd shell && pnpm dev &
```

4. **Acceder a las aplicaciones**:
- **Shell Principal**: http://localhost:5173
- **Productos**: http://localhost:5174
- **Usuarios**: http://localhost:5175
- **Compras**: http://localhost:5176

## 🎨 Diseño y Estilos

### Paleta de Colores
- **Gradiente Principal**: `#667eea → #764ba2 → #f093fb`
- **Acentos Púrpura**: `#8b5cf6`, `#a78bfa`
- **Azules Modernos**: `#3b82f6`, `#60a5fa`
- **Neutros**: `#1e293b`, `#f1f5f9`

### Efectos Visuales
- **Glass-morphism**: Fondos semitransparentes con blur
- **Gradientes Dinámicos**: Transiciones suaves entre colores
- **Micro-interacciones**: Hover states y animaciones fluidas
- **Sombras Profundas**: Efectos de profundidad realistas

## 🔄 Comunicación entre Microfrontends

Los microfrontends se comunican a través de `postMessage`:

```javascript
// Usuario → Shell
window.parent.postMessage({
  type: 'USUARIO_ACTUAL',
  payload: usuarioData
}, '*')

// Productos → Shell → Compras
window.parent.postMessage({
  type: 'PRODUCTO_COMPRADO',
  payload: productoData
}, '*')
```

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 19.2.0 | Biblioteca principal de UI |
| Vite | 7.3.1 | Herramienta de build y desarrollo |
| Styled Components | 6.3.8 | CSS-in-JS para estilos |
| pnpm | 10.27.0 | Gestor de paquetes |

## 📱 Capturas de Pantalla

### Shell Principal
![Shell](https://via.placeholder.com/800x400/1e293b/f1f5f9?text=Shell+Microfrontends)

### Catálogo de Productos
![Productos](https://via.placeholder.com/800x400/667eea/ffffff?text=Catálogo+de+Productos)

### Perfil de Usuario
![Usuarios](https://via.placeholder.com/800x400/764ba2/ffffff?text=Perfil+de+Usuario)

## 🚀 Despliegue

### Producción
```bash
# Compilar cada microfrontend
cd productos && pnpm build
cd ../usuarios && pnpm build  
cd ../compras && pnpm build
cd ../shell && pnpm build
```

### Preview
```bash
# Previsualizar producción
cd productos && pnpm preview
cd ../usuarios && pnpm preview
cd ../compras && pnpm preview
cd ../shell && pnpm preview
```

## 🤝 Contribuir

1. Fork del proyecto
2. Crear rama (`git checkout -b feature/amazing-feature`)
3. Commit cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Luiggi Arteaga**
- GitHub: [@Luxtar90](https://github.com/Luxtar90)
- Desarrollador Frontend especializado en microfrontends

## 🙏 Agradecimientos

- Inspirado en las mejores prácticas de arquitectura de microfrontends
- Construido con herramientas modernas del ecosistema React
- Diseñado con pasión por las experiencias de usuario excepcionales

---

⭐ Si este proyecto te ayudó, ¡dale una estrella!
