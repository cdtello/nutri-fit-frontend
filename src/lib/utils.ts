/**
 * Utilidades globales para toda la aplicación
 */

// Función para generar classNames condicionalmente
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Función para generar URLs de avatares dinámicos
export function generateAvatarUrl(name: string, size: number = 120): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0ea5e9&color=fff&size=${size}`;
}

// Función para formatear fechas en español
export function formatDateToSpanish(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(dateString);
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return date.toLocaleDateString('es-ES', { ...defaultOptions, ...options });
}

// Función para capitalizar la primera letra
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Función para truncar texto
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Función para validar emails básicamente
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para obtener iniciales de un nombre
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase();
}
