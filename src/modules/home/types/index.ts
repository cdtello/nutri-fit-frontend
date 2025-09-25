/**
 * Tipos específicos para componentes de la página de inicio
 */

import { ColorVariant } from '../../../types';

// Props para tarjetas de características/beneficios
export interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

// Props para tarjetas de estadísticas numéricas
export interface StatsCardProps {
    value: string | number;
    label: string;
    color: ColorVariant;
}

// Props para sección de preview del equipo
export interface TeamPreviewProps {
    title?: string;
    description?: string;
    teamMembers?: string[];           // Array de URLs de fotos
    additionalCount?: number;         // Número adicional de miembros ("+3")
    ctaText?: string;                // Texto del botón call-to-action
    ctaHref?: string;                // Enlace del botón
    backgroundColor?: string;         // Color de fondo de la sección
}

// Props para sección hero principal
export interface HeroSectionProps {
    title: React.ReactNode;           // Permite JSX y strings
    subtitle: string;
    primaryCta: {
        text: string;
        href: string;
        icon?: string;
    };
    secondaryCta?: {
        text: string;
        href?: string;                // Para navegación con Link
        onClick?: () => void;         // Para interactividad client-side
        icon?: string;
    };
}

// Props para contenedor de sección
export interface SectionContainerProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    backgroundColor?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl';
}
