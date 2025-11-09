# Portfolio de Benja 🚀

## Desarrollador Web Full-Stack

Bienvenido al repositorio de mi portfolio personal. Este proyecto representa mi trayectoria como desarrollador web, combinando mi experiencia previa como modelista industrial con mis habilidades actuales en desarrollo de software moderno.

## 🎯 Sobre el Proyecto

Este portfolio está diseñado para mostrar mis habilidades técnicas, proyectos realizados y experiencia profesional de manera moderna y atractiva. Utiliza tecnologías web estándar con un enfoque en performance, accesibilidad y experiencia de usuario.

### ✨ Características Principales

- **Diseño Responsive**: Adaptado para todos los dispositivos
- **Tema Claro/Oscuro**: Sistema de temas con persistencia local
- **Animaciones Suaves**: Transiciones y efectos CSS optimizados
- **Formulario de Contacto**: Con validación en tiempo real
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Compatible con lectores de pantalla
- **Performance**: Core Web Vitals optimizados

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Variables CSS, Grid, Flexbox, animaciones
- **JavaScript ES6+**: Módulos, async/await, DOM manipulation
- **Responsive Design**: Mobile-first approach

### Características Técnicas
- **Progressive Enhancement**: Funcionalidad básica sin JavaScript
- **Local Storage**: Persistencia de preferencias del usuario
- **Intersection Observer**: Animaciones optimizadas al scroll
- **Form Validation**: Validación nativa y personalizada
- **Theme System**: Sistema de temas dinámico

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html              # Página principal
├── styles.css             # Estilos principales
├── script.js              # Funcionalidades JavaScript
├── README.md              # Documentación del proyecto
├── images/                # Imágenes del portfolio
│   ├── logo.png
│   ├── profile.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── github-icon.png
│   └── linkedin-icon.png
└── assets/                # Recursos adicionales
    ├── favicon.ico
    └── CV-BenjaHR.pdf
```

## 📱 Responsive Design

El portfolio está optimizado para:
- **Desktop**: 1280px+
- **Tablet**: 768px - 1279px
- **Mobile**: < 768px

### Breakpoints Principales

```css
/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }
```

## ♿ Accesibilidad

- **Navegación por teclado**: Todos los elementos interactivos
- **Lectores de pantalla**: Etiquetas ARIA y estructura semántica
- **Contraste de colores**: WCAG 2.1 AA compliant
- **Escalabilidad**: Soporte para zoom hasta 200%

## 🎨 Sistema de Temas

### Tema Claro (Por defecto)
```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1f2937;
}
```

### Tema Oscuro
```css
[data-theme="dark"] {
  --bg-primary: #111827;
  --text-primary: #f9fafb;
}
```

## 📊 Performance

### Métricas Objetivo
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Optimizaciones Implementadas
- Imágenes optimizadas y lazy loading
- CSS y JavaScript minificados
- Fonts preloaded
- Critical CSS inline
- Service Worker para caching

## 🐛 Resolución de Problemas

### Problema: Imágenes no se cargan
- **Solución**: Verifica que las rutas en `images/` sean correctas
- **Tip**: Usa rutas relativas (`./images/`) en lugar de absolutas

### Problema: JavaScript no funciona
- **Solución**: Verifica la consola del navegador para errores
- **Tip**: Asegúrate de que el script.js se carga correctamente

### Problema: Estilos no se aplican
- **Solución**: Verifica que styles.css esté enlazado correctamente
- **Tip**: Usa herramientas de desarrollador para debug CSS

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

**Benja**
- Email: contacto@benrios.dev
- LinkedIn: [bhr](https://www.linkedin.com/in/)
- GitHub: [benjadevs](https://github.com/benriosdev)

---

## 🎉 Agradecimientos

- Formación en **ILERNA** - Desarrollo de Aplicaciones Web
- Comunidad de desarrolladores por inspiración y feedback

---

**Desarrollado con ❤️ por benjadevs**

*"Transformando mi experiencia industrial en soluciones web innovadoras"*
