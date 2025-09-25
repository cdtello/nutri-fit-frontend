import { SectionContainerProps } from '../../modules/home/types';

/**
 * Componente SectionContainer - Contenedor reutilizable para secciones
 * Proporciona estructura consistente con título, subtítulo y contenido
 */
export default function SectionContainer({ 
  title,
  subtitle,
  children,
  backgroundColor = "",
  maxWidth = "6xl"
}: SectionContainerProps) {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md', 
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };

  return (
    <div className={`py-16 px-6 ${backgroundColor}`}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto`}>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
