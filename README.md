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

## 🚀 Instalación y Configuración

### Opción 1: Servidor Local Simple

1. **Clona o descarga** este repositorio
2. **Abre una terminal** en la carpeta del proyecto
3. **Ejecuta un servidor local**:

```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si tienes live-server instalado)
npx live-server

# Con PHP
php -S localhost:8000
```

4. **Abre tu navegador** en `http://localhost:8000`

### Opción 2: Despliegue Directo

También puedes abrir directamente el archivo `index.html` en tu navegador, aunque algunas funcionalidades pueden requerir un servidor.

## 📝 Personalización

### Modificar Información Personal

1. **HTML**: Edita `index.html` para cambiar textos, enlaces y estructura
2. **CSS**: Modifica `styles.css` para cambiar colores, fuentes y estilos
3. **JavaScript**: Actualiza `script.js` para modificar funcionalidades

### Variables CSS Personalizables

```css
:root {
  --primary-color: #2563eb;      /* Color principal */
  --primary-dark: #1d4ed8;       /* Color principal oscuro */
  --accent-color: #10b981;       /* Color de acento */
  --text-primary: #1f2937;       /* Texto principal */
  --bg-primary: #ffffff;         /* Fondo principal */
}
```

### Añadir Nuevos Proyectos

1. **Copia una carta de proyecto** existente en `index.html`
2. **Actualiza el contenido**: título, descripción, tecnologías
3. **Añade la imagen** correspondiente en la carpeta `images/`
4. **Actualiza los enlaces** a demo y código fuente

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

## 🔧 Scripts Disponibles

### Validación HTML
```bash
# Usando validator.w3.org API
curl -H "Content-Type: text/html; charset=utf-8" --data-binary @index.html https://validator.w3.org/nu/?out=json
```

### Auditoría Lighthouse
```bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Ejecutar auditoría
lighthouse http://localhost:8000 --output html --output-path ./audit.html
```

## 🌐 Despliegue

### Netlify (Recomendado)
1. Conecta tu repositorio GitHub
2. Configura build settings:
   - Build command: (vacío)
   - Publish directory: `/`
3. Despliega automáticamente

### Vercel
1. Importa desde GitHub
2. Configuración automática
3. Dominio personalizado disponible

### GitHub Pages
1. Ve a Settings > Pages
2. Selecciona source: Deploy from branch
3. Branch: main, folder: / (root)

## 📧 Formulario de Contacto

El formulario actual incluye validación del lado del cliente. Para funcionalidad completa:

### Opciones de Backend
1. **Netlify Forms**: Añade `netlify` attribute al form
2. **Formspree**: Integración simple con API
3. **EmailJS**: Envío directo desde JavaScript
4. **Backend personalizado**: Node.js + Express

### Ejemplo con EmailJS
```javascript
// Añadir en script.js
emailjs.send("service_id", "template_id", {
  name: data.name,
  email: data.email,
  message: data.message
});
```

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

## 🤝 Contribuciones

Si encuentras bugs o tienes sugerencias de mejora:

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

**Albert Castro Albacete**
- Email: albertus1291@gmail.com
- LinkedIn: [bhr](https://www.linkedin.com/in/)
- GitHub: [benjadevs](https://github.com/benjadevs)

---

## 🎉 Agradecimientos

- Formación en **ILERNA** - Desarrollo de Aplicaciones Web
- Prácticas en **Kennwort Consulting & Technologies**
- Experiencia previa en **EDAG Engineering Spain S.L.**
- Comunidad de desarrolladores por inspiración y feedback

---

**Desarrollado con ❤️ por benjadevs**

*"Transformando mi experiencia industrial en soluciones web innovadoras"*