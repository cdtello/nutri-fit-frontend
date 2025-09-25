import Link from 'next/link';
import Image from 'next/image';
import { TeamPreviewProps } from '../../modules/home/types';

/**
 * Componente TeamPreview - Sección para mostrar el equipo de expertos
 * Se puede usar en homepage, about, landing pages, etc.
 */
export default function TeamPreview({ 
  title = "Nuestro Equipo de Expertos",
  description = "Contamos con nutricionistas certificados, entrenadores personales y especialistas en bienestar para acompañarte en tu journey hacia una vida más saludable.",
  teamMembers = [
    "https://ui-avatars.com/api/?name=Carlos+Tello&size=150&background=6366f1&color=ffffff&rounded=true",
    "https://ui-avatars.com/api/?name=Maria+Gonzalez&size=150&background=10b981&color=ffffff&rounded=true", 
    "https://ui-avatars.com/api/?name=Juan+Perez&size=150&background=3b82f6&color=ffffff&rounded=true"
  ],
  additionalCount = 3,
  ctaText = "Conocer al equipo completo",
  ctaHref = "/users",
  backgroundColor = "bg-white"
}: TeamPreviewProps) {
  return (
    <div className={`py-16 px-6 ${backgroundColor}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex -space-x-4">
            {teamMembers.map((memberPhoto, index) => (
              <Image 
                key={index}
                src={memberPhoto}
                alt={`Team member ${index + 1}`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-4 border-white shadow-md"
                loading="lazy"
              />
            ))}
            {additionalCount > 0 && (
              <div className="w-12 h-12 rounded-full border-4 border-white shadow-md bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-sm">
                +{additionalCount}
              </div>
            )}
          </div>
        </div>
        
        <Link 
          href={ctaHref}
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          {ctaText}
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
