/**
 * Tipos globales que se usan en múltiples modules de la aplicación
 * Solo incluir tipos que son verdaderamente compartidos
 */

// Tipos de respuesta comunes de API
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code: string;
  details?: unknown;
}

// Tipos de estado comunes
export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface AsyncState<T> {
  data: T | null;
  loading: LoadingState;
  error: string | null;
}

// Tipos de navegación
export interface NavItem {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
}

// Tipos de UI comunes
export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface ComponentWithClassName {
  className?: string;
}

// Tipos de color para componentes UI
export type ColorVariant = 'blue' | 'green' | 'purple' | 'orange' | 'gray';
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';
export type StatusVariant = 'active' | 'inactive' | 'pending' | 'success' | 'error' | 'warning';
