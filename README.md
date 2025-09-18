# 🚀 Curso de Next.js - NutriFit App

¡Bienvenidos al curso de Next.js! Vamos a aprender a crear una aplicación web moderna paso a paso.

## 🎯 ¿Qué vamos a construir?

Una aplicación llamada **NutriFit** - una plataforma para gestión de equipos de nutrición y fitness con:
- 🏠 Página principal atractiva
- 👥 Sistema de gestión de usuarios  
- 🔗 Navegación entre páginas
- 📱 Diseño responsive y moderno
- 🛣️ Rutas dinámicas y estáticas

## 📚 Índice de Sesiones

- [Sesión 1: Creando nuestro primer proyecto Next.js](#sesión-1-creando-nuestro-primer-proyecto-nextjs)
- [Sesión 2: Layouts y Navegación](#sesión-2-layouts-y-navegación)
- [Sesión 3: Páginas y Componentes](#sesión-3-páginas-y-componentes)
- [Sesión 4: Rutas Dinámicas](#sesión-4-rutas-dinámicas)
- [Sesión 5: Styling con Tailwind CSS](#sesión-5-styling-con-tailwind-css)

---

## Sesión 1: Creando nuestro primer proyecto Next.js

### 🎯 Objetivos de la sesión
- Entender qué es Next.js
- Crear nuestro primer proyecto
- Conocer la estructura de archivos
- Correr la aplicación

### 📖 ¿Qué es Next.js?
Next.js es como un "súper poder" para React que nos ayuda a:
- Crear páginas web muy rápidas
- Organizar nuestro código de manera ordenada
- Tener navegación automática entre páginas

### 🚀 Paso 1: Crear el proyecto

```bash
# 1. Crear un nuevo proyecto de Next.js
npx create-next-app@latest nutri-fit

# 2. Responder las preguntas:
✅ Would you like to use TypeScript? → **Yes**
✅ Would you like to use ESLint? → **Yes** 
✅ Would you like to use Tailwind CSS? → **Yes**
✅ Would you like your code inside a `src/` directory? → **Yes**
✅ Would you like to use App Router? → **Yes**
✅ Would you like to use Turbopack for `next dev`? → **Yes**
✅ Would you like to customize the default import alias? → **No**

# 3. Entrar a la carpeta del proyecto
cd nutri-fit

# 4. Abrir VS Code
code .

# 5. Ejecutar la aplicación
npm run dev
```

### 🗂️ Paso 2: Entender la estructura del proyecto

```
nutri-fit/
├── src/
│   └── app/           # 📁 Aquí van nuestras páginas
│       ├── page.tsx   # 🏠 Página principal (/)
│       ├── layout.tsx # 🏗️ Layout principal
│       └── globals.css # 🎨 Estilos globales
├── public/            # 📁 Imágenes y archivos públicos
├── package.json       # 📦 Información del proyecto
└── README.md         # 📝 Documentación
```

### 🔍 Paso 3: Explorar los archivos importantes

#### `src/app/page.tsx` - Nuestra página principal
```tsx
// Esta es nuestra página de inicio
export default function Home() {
  return (
    <main>
      <h1>¡Hola Mundo desde Next.js!</h1>
    </main>
  );
}
```

#### `src/app/layout.tsx` - El diseño principal
```tsx
// Este archivo envuelve TODAS nuestras páginas
export default function RootLayout({
  children, // El contenido de cada página
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children} {/* Aquí se renderiza cada página */}
      </body>
    </html>
  );
}
```

### ✅ ¿Qué aprendimos?
- ✅ Crear un proyecto Next.js
- ✅ Entender la estructura de carpetas
- ✅ Identificar archivos importantes
- ✅ Correr la aplicación en desarrollo

---

## Sesión 2: Layouts y Navegación

### 🎯 Objetivos de la sesión
- Crear un header con navegación
- Entender cómo funcionan los layouts
- Agregar un footer
- Usar el componente Link de Next.js

### 🏗️ Paso 1: Crear un header con navegación

Vamos a modificar nuestro `layout.tsx` principal:

```tsx
// src/app/layout.tsx
import Link from 'next/link'; // Importamos Link para navegación
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Header con navegación */}
        <header className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="text-2xl">🥗</div>
                <div className="text-xl font-bold">
                  <span className="text-blue-600">Nutri</span>
                  <span className="text-green-600">Fit</span>
                </div>
              </Link>

              {/* Menú de navegación */}
              <div className="flex items-center gap-8">
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  🏠 Inicio
                </Link>
                <Link href="/users" className="text-gray-600 hover:text-blue-600">
                  👥 Equipo
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Contenido principal */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">
            <p>&copy; 2024 NutriFit. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
```

### 🔗 ¿Por qué usamos `Link` en lugar de `<a>`?

```tsx
// ❌ Manera incorrecta (recarga toda la página)
<a href="/users">Ir a Usuarios</a>

// ✅ Manera correcta con Next.js (navegación rápida)
<Link href="/users">Ir a Usuarios</Link>
```

**Ventajas de `Link`:**
- ⚡ Navegación súper rápida
- 🔄 No recarga la página completa
- 📱 Mejor experiencia de usuario

### ✅ ¿Qué aprendimos?
- ✅ Crear un header con navegación
- ✅ Usar el componente Link
- ✅ Entender la diferencia entre Link y <a>
- ✅ Crear un layout que se aplica a todas las páginas

---

## Sesión 3: Páginas y Componentes

### 🎯 Objetivos de la sesión
- Crear múltiples páginas
- Entender el sistema de rutas de Next.js
- Mejorar nuestra página principal
- Crear la página de usuarios

### 📄 Paso 1: Mejorar la página principal

```tsx
// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Sección principal */}
      <div className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            🥗 <span className="text-blue-600">Nutri</span><span className="text-green-600">Fit</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Tu plataforma integral para un estilo de vida saludable. 
            Nutrición personalizada, entrenamientos efectivos y seguimiento completo.
          </p>

          {/* Botones de acción */}
          <div className="flex gap-4 justify-center">
            <Link 
              href="/users" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold"
            >
              👥 Ver Equipo
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
```

### 👥 Paso 2: Crear la página de usuarios

Primero creamos la carpeta y el archivo:

```bash
# Crear la carpeta users dentro de app
mkdir src/app/users

# El archivo se llama page.tsx
touch src/app/users/page.tsx
```

```tsx
// src/app/users/page.tsx
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

// Array de usuarios de ejemplo
const SAMPLE_USERS: User[] = [
  {
    id: 1,
    name: "Carlos Tello",
    email: "carlos@nutri-fit.com",
    role: "Admin",
    status: "active"
  },
  {
    id: 2,
    name: "María González", 
    email: "maria@nutri-fit.com",
    role: "Nutritionist",
    status: "active"
  },
  {
    id: 3,
    name: "Juan Pérez",
    email: "juan@nutri-fit.com", 
    role: "User",
    status: "active"
  }
];

export default function Users() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          👥 Equipo NutriFit
        </h1>

        {/* Grid de usuarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_USERS.map((user) => (
            <div key={user.id} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg text-gray-800">
                {user.name}
              </h3>
              <p className="text-gray-500 text-sm">{user.email}</p>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                {user.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### 🛣️ ¿Cómo funcionan las rutas en Next.js?

```
src/app/
├── page.tsx          → / (página principal)
├── users/
│   └── page.tsx      → /users (página de usuarios)
└── about/
    └── page.tsx      → /about (página sobre nosotros)
```

**¡Es súper fácil!** 
- Cada carpeta = una ruta
- El archivo `page.tsx` = el contenido de esa página

### ✅ ¿Qué aprendimos?
- ✅ Crear múltiples páginas
- ✅ Entender el sistema de rutas automático
- ✅ Usar arrays de datos en React
- ✅ Renderizar listas con .map()

---

## Sesión 4: Rutas Dinámicas

### 🎯 Objetivos de la sesión
- Entender qué son las rutas dinámicas
- Crear páginas de perfil individual
- Usar parámetros de URL
- Manejar casos cuando no existe un usuario

### 🔄 ¿Qué son las rutas dinámicas?

Imagina que quieres una página diferente para cada usuario:
- `/users/1` → Perfil de Carlos
- `/users/2` → Perfil de María  
- `/users/3` → Perfil de Juan

¡No podemos crear 1000 archivos diferentes! Usamos rutas dinámicas.

### 📁 Paso 1: Crear la estructura de rutas dinámicas

```bash
# Crear carpeta con corchetes (muy importante!)
mkdir "src/app/users/[...profile]"

# Crear el archivo page.tsx
touch "src/app/users/[...profile]/page.tsx"
```

**¿Por qué `[...profile]`?**
- `[]` = parámetro dinámico
- `...` = puede capturar múltiples segmentos
- `profile` = nombre del parámetro

### 👤 Paso 2: Crear la página de perfil

```tsx
// src/app/users/[...profile]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  bio: string;
  phone: string;
  location: string;
}

// Los mismos usuarios pero con más información
const SAMPLE_USERS: User[] = [
  {
    id: 1,
    name: "Carlos Tello",
    email: "carlos@nutri-fit.com",
    role: "Admin", 
    bio: "Administrador del sistema con experiencia en desarrollo.",
    phone: "+57 300 123 4567",
    location: "Bogotá, Colombia"
  },
  // ... más usuarios
];

// Esta interfaz define qué recibe nuestra página
interface UserProfileProps {
  params: Promise<{
    profile: string[]; // Array con los segmentos de la URL
  }>;
}

export default async function UserProfile(props: UserProfileProps) {
  // Esperamos a que lleguen los parámetros
  const params = await props.params;
  
  // El primer segmento es el ID del usuario
  const userId = parseInt(params.profile[0]);
  
  // Buscamos el usuario por ID
  const user = SAMPLE_USERS.find(u => u.id === userId);
  
  // Si no existe, mostramos error 404
  if (!user) {
    notFound();
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header del perfil */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {user.role}
        </span>
      </div>

      {/* Información detallada */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">📝 Acerca de</h2>
        <p className="text-gray-600 mb-4">{user.bio}</p>
        
        <div className="space-y-2">
          <p>📱 <strong>Teléfono:</strong> {user.phone}</p>
          <p>📍 <strong>Ubicación:</strong> {user.location}</p>
        </div>
        
        {/* Botón para volver */}
        <Link 
          href="/users"
          className="mt-6 inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg"
        >
          ← Volver al Equipo
        </Link>
      </div>
    </div>
  );
}
```

### 🧠 ¿Cómo funciona esto?

1. **Usuario hace click** en "Ver Perfil" del usuario con ID 1
2. **Next.js navega** a `/users/1`
3. **Se activa** el archivo `[...profile]/page.tsx`
4. **params.profile** = `["1"]` (array con los segmentos)
5. **Extraemos el ID** con `parseInt(params.profile[0])`
6. **Buscamos el usuario** en nuestro array
7. **Mostramos su información** o error 404

### ✅ ¿Qué aprendimos?
- ✅ Crear rutas dinámicas con `[...nombre]`
- ✅ Recibir parámetros de URL
- ✅ Buscar datos basados en parámetros
- ✅ Manejar casos de error (404)
- ✅ Conectar páginas con navegación

---

## Sesión 5: Styling con Tailwind CSS

### 🎯 Objetivos de la sesión
- Entender qué es Tailwind CSS
- Crear diseños responsive
- Usar colores y espaciado
- Agregar efectos hover y transiciones

### 🎨 ¿Qué es Tailwind CSS?

Tailwind es como tener una caja de herramientas con "clases útiles" para hacer que nuestro sitio se vea bonito:

```tsx
// En lugar de escribir CSS:
<div style={{
  backgroundColor: 'blue',
  color: 'white', 
  padding: '16px',
  borderRadius: '8px'
}}>
  Hola
</div>

// Usamos clases de Tailwind:
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hola
</div>
```

### 📱 Clases más útiles de Tailwind

#### Colores
```tsx
className="bg-blue-500"     // Fondo azul
className="text-white"      // Texto blanco
className="text-gray-600"   // Texto gris
```

#### Espaciado
```tsx
className="p-4"      // Padding (espacio interno)
className="m-6"      // Margin (espacio externo)  
className="px-8"     // Padding horizontal
className="py-4"     // Padding vertical
```

#### Responsive Design
```tsx
// Se ve diferente en móvil vs desktop
className="grid grid-cols-1 md:grid-cols-3"
//         ↑ móvil: 1 columna  ↑ desktop: 3 columnas
```

### ✨ Efectos geniales que podemos agregar:

- `hover:shadow-xl` - Sombra más grande al pasar el mouse
- `transition-all duration-300` - Transiciones suaves de 300ms
- `hover:-translate-y-1` - Se mueve hacia arriba
- `group hover:text-blue-600` - El texto cambia de color cuando haces hover

### ✅ ¿Qué aprendimos?
- ✅ Usar clases de Tailwind CSS
- ✅ Crear efectos hover
- ✅ Hacer diseños responsive
- ✅ Aplicar transiciones suaves

---

## 🏆 ¡Felicitaciones!

### 🎉 ¿Qué hemos construido?

Al final de estas 5 sesiones, habrás creado:

1. **🏠 Página principal** con diseño atractivo
2. **👥 Sistema de usuarios** con lista y perfiles individuales
3. **🛣️ Navegación** entre páginas con Next.js Link
4. **📱 Diseño responsive** que se ve bien en móvil y desktop
5. **✨ Efectos visuales** con Tailwind CSS

### 🚀 Estructura final del proyecto

```
nutri-fit/
├── src/
│   └── app/
│       ├── page.tsx              # 🏠 Página principal
│       ├── layout.tsx            # 🏗️ Layout principal con header/footer
│       ├── globals.css           # 🎨 Estilos globales
│       └── users/
│           ├── page.tsx          # 👥 Lista de usuarios
│           └── [...profile]/
│               └── page.tsx      # 👤 Perfil individual
├── public/                       # 📁 Archivos públicos
└── package.json                  # 📦 Dependencias
```

### 🎯 Conceptos importantes que aprendiste

1. **📁 File-based Routing** - Las carpetas se convierten en rutas automáticamente
2. **🔗 Client-side Navigation** - Navegación rápida sin recargar la página
3. **🏗️ Layouts** - Diseños que se comparten entre páginas
4. **🔄 Dynamic Routes** - Páginas que cambian según parámetros de URL
5. **📱 Responsive Design** - Sitios que se ven bien en cualquier dispositivo

### 🚀 Siguientes pasos

Ahora puedes:
- ✅ Agregar más páginas
- ✅ Conectar con una base de datos real
- ✅ Agregar formularios
- ✅ Implementar autenticación
- ✅ Crear tu propia aplicación

### 📚 Recursos útiles

- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Guía de Tailwind CSS](https://tailwindcss.com/docs)
- [React para principiantes](https://react.dev/learn)

---

## 🛠️ Comandos útiles

```bash
# Ejecutar en desarrollo
npm run dev

# Construir para producción  
npm run build

# Ejecutar en producción
npm start

# Verificar código (linting)
npm run lint
```

## 💡 Consejos finales

1. **🧪 Experimenta** - Cambia colores, textos y estilos
2. **🔍 Inspecciona** - Usa las herramientas de desarrollador del navegador
3. **📖 Lee la documentación** - Next.js y Tailwind tienen excelentes docs
4. **🤝 Pide ayuda** - La comunidad de desarrolladores siempre está dispuesta a ayudar
5. **🚀 Construye proyectos** - La mejor manera de aprender es haciendo

¡Felicitaciones por completar el curso de Next.js! 🎊