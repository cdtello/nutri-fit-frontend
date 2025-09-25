'use client';

import Link from 'next/link';
import { HeroSectionProps } from '../../modules/home/types';

/**
 * Componente HeroSection - Sección hero reutilizable para páginas principales
 * Incluye título, subtítulo y botones de call-to-action
 * NOTA: Client Component para manejar interactividad (onClick)
 */
export default function HeroSection({ 
  title,
  subtitle,
  primaryCta,
  secondaryCta
}: HeroSectionProps) {
  return (
    <div className="relative py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link 
            href={primaryCta.href}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {primaryCta.icon && <span className="mr-2">{primaryCta.icon}</span>}
            {primaryCta.text}
          </Link>
          
          {secondaryCta && (
            secondaryCta.href ? (
              <Link 
                href={secondaryCta.href}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {secondaryCta.icon && <span className="mr-2">{secondaryCta.icon}</span>}
                {secondaryCta.text}
              </Link>
            ) : (
              <button 
                onClick={secondaryCta.onClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {secondaryCta.icon && <span className="mr-2">{secondaryCta.icon}</span>}
                {secondaryCta.text}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
