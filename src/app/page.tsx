// Importamos Link de Next.js para navegación rápida entre páginas
import Link from 'next/link';

// Esta es nuestra página principal (Home) - se muestra en la ruta "/"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Sección principal con título y descripción */}
      <div className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            {/* Título principal de nuestra app */}
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              🥗 <span className="text-blue-600">Nutri</span><span className="text-green-600">Fit</span>
            </h1>
            {/* Descripción de lo que hace nuestra app */}
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Tu plataforma integral para un estilo de vida saludable. 
              Nutrición personalizada, entrenamientos efectivos y seguimiento completo.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/users" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              👥 Ver Equipo
            </Link>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              📊 Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Por qué elegir NutriFit?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Nutrición Personalizada</h3>
              <p className="text-gray-600">
                Planes alimentarios adaptados a tus necesidades, objetivos y preferencias dietéticas.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Entrenamientos Efectivos</h3>
              <p className="text-gray-600">
                Rutinas de ejercicio diseñadas por profesionales para maximizar tus resultados.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Seguimiento Completo</h3>
              <p className="text-gray-600">
                Monitorea tu progreso con métricas detalladas y análisis inteligentes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Preview Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nuestro Equipo de Expertos
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contamos con nutricionistas certificados, entrenadores personales y especialistas 
            en bienestar para acompañarte en tu journey hacia una vida más saludable.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex -space-x-4">
              <img 
                className="w-12 h-12 rounded-full border-4 border-white shadow-md" 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                alt="Team member" 
              />
              <img 
                className="w-12 h-12 rounded-full border-4 border-white shadow-md" 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                alt="Team member" 
              />
              <img 
                className="w-12 h-12 rounded-full border-4 border-white shadow-md" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                alt="Team member" 
              />
              <div className="w-12 h-12 rounded-full border-4 border-white shadow-md bg-gray-100 flex items-center justify-center text-gray-600 font-semibold text-sm">
                +3
              </div>
            </div>
          </div>
          
          <Link 
            href="/users" 
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Conocer al equipo completo
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Usuarios Activos</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Planes Nutricionales</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Soporte Disponible</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
