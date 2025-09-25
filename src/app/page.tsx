// Importamos los componentes específicos de la página de inicio
import { 
  FeatureCard, 
  StatsCard, 
  TeamPreview, 
  SectionContainer, 
  HeroSection 
} from '../components/home';

// Esta es nuestra página principal (Home) - se muestra en la ruta "/"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section - Ahora usando componente reutilizable */}
      <HeroSection 
        title={<>🥗 <span className="text-blue-600">Nutri</span><span className="text-green-600">Fit</span></>}
        subtitle="Tu plataforma integral para un estilo de vida saludable. Nutrición personalizada, entrenamientos efectivos y seguimiento completo."
        primaryCta={{
          text: "Ver Equipo",
          href: "/users",
          icon: "👥"
        }}
        secondaryCta={{
          text: "Dashboard", 
          icon: "📊",
          href: "/dashboard"
        }}
      />

      {/* Features Section - Ahora usando contenedor reutilizable */}
      <SectionContainer 
        title="¿Por qué elegir NutriFit?"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🍎"
            title="Nutrición Personalizada"
            description="Planes alimentarios adaptados a tus necesidades, objetivos y preferencias dietéticas."
          />
          <FeatureCard 
            icon="💪"
            title="Entrenamientos Efectivos"
            description="Rutinas de ejercicio diseñadas por profesionales para maximizar tus resultados."
          />
          <FeatureCard 
            icon="📈"
            title="Seguimiento Completo"
            description="Monitorea tu progreso con métricas detalladas y análisis inteligentes."
          />
        </div>
      </SectionContainer>

      {/* Team Preview Section - Ahora usando componente reutilizable */}
      <TeamPreview />

      {/* Stats Section - Ahora usando contenedor reutilizable */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <StatsCard 
            value="1000+"
            label="Usuarios Activos"
            color="blue"
          />
          <StatsCard 
            value="50+"
            label="Planes Nutricionales"
            color="green"
          />
          <StatsCard 
            value="24/7"
            label="Soporte Disponible"
            color="purple"
          />
          <StatsCard 
            value="95%"
            label="Satisfacción"
            color="orange"
          />
        </div>
      </SectionContainer>
    </main>
  );
}
