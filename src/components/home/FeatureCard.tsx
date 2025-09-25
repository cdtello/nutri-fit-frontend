import { FeatureCardProps } from '../../modules/home/types';

/**
 * Componente FeatureCard - Tarjeta para mostrar características de la aplicación
 * Se usa principalmente en la página principal para mostrar los beneficios de NutriFit
 */
export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
