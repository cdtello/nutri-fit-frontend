# 🏗️ Arquitectura NutriFit

Este documento describe la arquitectura del proyecto NutriFit, organizada siguiendo las mejores prácticas de Next.js 2024.

## 📁 Estructura General

```
nutri-fit/
├── app/                        # ⚡ Next.js App Router
│   ├── layout.tsx             # Layout global (delega a core)
│   ├── page.tsx               # Homepage (usa core + modules)
│   ├── users/
│   │   ├── page.tsx           # Lista usuarios (delega a modules/users)
│   │   └── [id]/
│   │       └── page.tsx       # Perfil usuario (delega a modules/users)
│   └── globals.css            # Estilos globales
├── core/                       # ✨ Elementos verdaderamente compartidos
│   ├── components/
│   │   ├── layout/            # Header, Footer (usados en todas las páginas)
│   │   ├── marketing/         # FeatureCard, StatsCard (homepage)
│   │   └── ui/                # Componentes base (futuro)
│   ├── lib/
│   │   └── utils.ts           # Utilidades globales
│   ├── types/
│   │   └── index.ts           # Tipos globales
│   └── index.ts               # Exportaciones del core
├── modules/                    # 🎯 Features organizados por funcionalidad
│   ├── users/                 # 👥 Módulo completo de usuarios
│   │   ├── components/        # UserCard, UserProfile
│   │   ├── services/          # Lógica de negocio
│   │   ├── types/             # Tipos específicos
│   │   ├── data.ts            # Datos de ejemplo
│   │   └── index.ts           # Exportaciones del módulo
│   ├── dashboard/             # 📊 Preparado para futuro
│   └── nutrition/             # 🍎 Preparado para futuro
└── public/                     # 📁 Archivos estáticos
```

## 🎯 Principios Arquitectónicos

### 1. **Separación por Features (Modules)**
- Cada módulo es completamente independiente
- Un módulo = una funcionalidad específica
- No hay importaciones directas entre módulos hermanos

### 2. **Core vs Modules**
- **Core**: Solo elementos usados por 3+ features diferentes
- **Modules**: Todo lo específico de una funcionalidad
- **Regla clara**: Si solo lo usa un feature → va en modules

### 3. **Delegación en App Router**
```tsx
// app/users/page.tsx - Solo delega, lógica mínima
import { UsersPage } from '../../modules/users';
export default UsersPage;

// modules/users/components/UsersPage.tsx - Implementación real
export function UsersPage() {
  return <UsersList users={SAMPLE_USERS} />;
}
```

## 🏛️ Arquitectura por Capas

### **1. Capa de Presentación (App Router)**
- **Responsabilidad**: Routing y delegación
- **Archivos**: `app/**/*.tsx`
- **Principio**: Mínima lógica, máxima delegación

### **2. Capa de Módulos (Features)**
- **Responsabilidad**: Lógica de negocio específica
- **Archivos**: `modules/**/*`
- **Principio**: Independencia total entre módulos

### **3. Capa de Core (Shared)**
- **Responsabilidad**: Elementos verdaderamente compartidos
- **Archivos**: `core/**/*`
- **Principio**: Solo lo que usan múltiples módulos

## 📊 Flujo de Datos

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   App Router    │───▶│    Modules      │───▶│      Core       │
│  (Pages/Layout) │    │   (Features)    │    │   (Shared)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
      │                          │                        │
      ▼                          ▼                        ▼
  • Routing              • Business Logic          • Utilities
  • Delegation           • Components              • UI Components
  • Minimal Logic        • Services                • Global Types
                        • Feature Types
```

## 🔧 Patrones de Desarrollo

### **1. Patrón de Módulo**
```
modules/[feature]/
├── components/         # React components
├── services/          # Business logic
├── types/             # TypeScript types
├── hooks/             # Custom hooks (opcional)
├── data.ts            # Mock/seed data
└── index.ts           # Exports
```

### **2. Patrón de Core**
```
core/
├── components/
│   ├── layout/        # Layout components
│   ├── marketing/     # Marketing components
│   └── ui/            # Base UI components
├── lib/               # Global utilities
├── types/             # Global types
└── index.ts           # Global exports
```

### **3. Patrón de Importación**
```tsx
// ✅ Imports correctos
import { Header, Footer } from '../core/components/layout';
import { UserCard, UserProfile } from '../../modules/users';

// ❌ Imports incorrectos
import { UserCard } from '../../modules/dashboard'; // Cross-module
import { Header } from '../../modules/users';       // Wrong layer
```

## 🚀 Ventajas de esta Arquitectura

### **Escalabilidad** 🏗️
- Fácil agregar nuevos módulos
- Desarrollo paralelo por equipos
- Código base limpio y organizado

### **Mantenibilidad** 🔧
- Cambios aislados por funcionalidad
- Testing específico por módulo
- Debugging más sencillo

### **Performance** ⚡
- Tree shaking más efectivo
- Lazy loading por módulo
- Bundles optimizados

### **Colaboración** 👥
- Equipos pueden trabajar independientemente
- Menos conflictos de merge
- Responsabilidades claras

## 🎨 Convenciones de Código

### **Naming Conventions:**
- Módulos: `kebab-case` (users, dashboard, nutrition)
- Componentes: `PascalCase` (UserCard, FeatureCard)
- Archivos: `camelCase.tsx` (userService.ts)
- Tipos: `PascalCase` (User, UserRole)

### **File Organization:**
- Un componente por archivo
- Index files para exportaciones
- Tipos separados de componentes
- Servicios separados de componentes

### **Import Order:**
1. React/Next.js imports
2. External libraries
3. Core imports
4. Module imports
5. Relative imports

## 🔮 Roadmap Arquitectónico

### **Fase 1: Base (Completada)**
- ✅ Estructura core/modules
- ✅ Módulo users completo
- ✅ Layout components
- ✅ Sistema de tipos

### **Fase 2: Features Principales**
- Dashboard con métricas
- Módulo nutrition completo
- Sistema de autenticación

### **Fase 3: Optimizaciones**
- Lazy loading por módulo
- Service Workers
- Bundle optimization

Esta arquitectura asegura que NutriFit sea escalable, mantenible y fácil de desarrollar por equipos grandes, siguiendo las mejores prácticas de Next.js 2024.
