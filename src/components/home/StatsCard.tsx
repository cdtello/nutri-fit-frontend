import { StatsCardProps } from '../../modules/home/types';
import { ColorVariant } from '../../types';

/**
 * Componente StatsCard - Tarjeta para mostrar estadísticas numéricas
 * Se usa principalmente en la página principal para mostrar métricas importantes
 */
export default function StatsCard({ value, label, color }: StatsCardProps) {
  // Función para obtener las clases de color
  const getColorClasses = (colorName: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600',
      gray: 'bg-gray-50 text-gray-600'
    };
    
    return colorMap[colorName] || colorMap.blue;
  };

  return (
    <div className={`${getColorClasses(color)} rounded-xl p-6 text-center`}>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}
