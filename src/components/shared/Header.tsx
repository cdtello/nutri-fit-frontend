import Link from 'next/link';
import { NavItem } from '../../types';

/**
 * Componente Header/Navbar principal de la aplicación
 * Layout component que se usa en todas las páginas
 */
export default function Header() {
  // Enlaces de navegación principales
  const navigationLinks: NavItem[] = [
    { href: "/", label: "Inicio", icon: "🏠" },
    { href: "/users", label: "Equipo", icon: "👥" },
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/nutrition", label: "Nutrición", icon: "🍎" }
  ];

  return (
    <header className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="text-2xl">🥗</div>
            <div className="text-xl font-bold">
              <span className="text-blue-600">Nutri</span>
              <span className="text-green-600">Fit</span>
            </div>
          </Link>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {link.icon} {link.label}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-gray-600 hover:text-blue-600 transition-colors">
              🔔
            </button>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              CT
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600 hover:text-blue-600 transition-colors">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {link.icon} {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
