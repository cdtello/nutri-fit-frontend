import Link from 'next/link';

/**
 * Componente Footer principal de la aplicación
 * Layout component que se usa en todas las páginas
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: "Sobre Nosotros" },
    { href: "/services", label: "Servicios" },
    { href: "/contact", label: "Contacto" },
    { href: "/blog", label: "Blog" }
  ];

  const supportLinks = [
    { href: "/help", label: "Centro de Ayuda" },
    { href: "/privacy", label: "Privacidad" },
    { href: "/terms", label: "Términos" },
    { href: "/faq", label: "FAQ" }
  ];

  const socialButtons = [
    { icon: "📘", href: "#", label: "Facebook" },
    { icon: "📷", href: "#", label: "Instagram" },
    { icon: "🐦", href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">🥗</div>
              <div className="text-xl font-bold">
                <span className="text-blue-400">Nutri</span>
                <span className="text-green-400">Fit</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Tu plataforma integral para un estilo de vida saludable. 
              Nutrición personalizada, entrenamientos efectivos y seguimiento completo.
            </p>
            <div className="flex gap-4">
              {socialButtons.map((social, index) => (
                <button 
                  key={index}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Soporte</h3>
            <div className="flex flex-col gap-2">
              {supportLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} NutriFit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
