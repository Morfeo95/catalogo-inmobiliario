📘 Catálogo Inmobiliario

Aplicación web para la gestión y visualización de propiedades inmobiliarias, pensada para inmobiliarias o asesores independientes que necesitan un catálogo claro, editable y visualmente atractivo.

El proyecto permite crear, editar, eliminar y mostrar propiedades, incluyendo carga de imágenes, filtros básicos y una interfaz moderna y responsiva.

## ☕ Apoya el proyecto

Si este proyecto te ayudó a ahorrar tiempo, aprender algo nuevo o te sirvió como inspiración, puedes apoyar mi trabajo aquí:

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/franciscovera72624)

Este proyecto está construido con un fuerte enfoque en la separación de responsabilidades, arquitectura limpia y una estructura amigable para desarrolladores, pensada para escalar y evolucionar con el tiempo.


## 🚀 Características principales

- 📋 Listado de propiedades
  - Visualización en formato de tarjetas
  - Información clave: precio, zona, tipo de operación, recámaras, baños, etc.
- ✏️ Gestión de propiedades (CRUD)
  - Crear nuevas propiedades
  - Editar propiedades existentes
  - Eliminar propiedades con confirmación
- 🖼️ Carga de imágenes
  - Subida múltiple de imágenes
  - Almacenamiento en Cloudinary
  - Organización automática por carpeta según el título de la propiedad
- 🧭 Modal de edición
  - Edición completa sin salir de la vista principal
  - Diseño limpio y enfocado en UX
- 🔔 Feedback al usuario
  - Uso de toasts para notificaciones (éxito, error, advertencia)
  - Reemplazo de alert y confirm tradicionales
- 🎨 Diseño moderno y responsivo
  - Construido con React + Vite
  - Estilos con Tailwind CSS
  - Configuración visual centralizada en config.json

## 🛠️ Tecnologías utilizadas

- Frontend
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
- Servicios
  - Cloudinary (gestión de imágenes)
- Otros
  - JSON como fuente de datos
  - Arquitectura de componentes reutilizables

## 📂 Estructura general del proyecto

```
src/
├── components/
│   ├── ui/
│   ├── EditModal.tsx
│   ├── HouseModal.tsx
│   └── ...
├── data/
│   └── config.json
├── types/
│   ├── House.ts
│   ├── EmptyHouse.ts
│   └── CreateEmptyHouse.ts
├── utils/
│   └── uploadToCloudinary.ts
└── pages/
```

## ⚙️ Instalación y uso

1. Clona el repositorio:

   ```shell
   git clone [https://github.com/tu-usuario/catalogo-inmobiliario.git](https://github.com/tu-usuario/catalogo-inmobiliario.git)

   ```

2. Instala dependencias:

   ```shell
   npm install
  
   ```
3. Ejecuta el proyecto en desarrollo:
 
   ```shell
   npm run dev

   ```

 4. Abre en el navegador:

     ```shell
     http://localhost:5173

     ```

  ## 🔐 Variables de entorno

Para la carga de imágenes en Cloudinary, necesitas configurar:

- `VITE_CLOUDINARY_CLOUD_NAME`: tu_cloud_name
- `VITE_CLOUDINARY_UPLOAD_PRESET`: tu_upload_preset

## 📌 Estado del proyecto

✔️ Funcional
✔️ Modular
✔️ Escalable

El proyecto está listo para:

- Integrarse con un backend
- Convertirse en un SaaS inmobiliario
- Añadir autenticación y roles de usuario
- Persistencia con base de datos

## 📄 Licencia

Este proyecto es de uso libre para fines educativos o comerciales. Puedes adaptarlo según tus necesidades.
