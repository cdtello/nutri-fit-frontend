'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    // Generar breadcrumbs basados en la ruta
    const generateBreadcrumbs = () => {
        const pathSegments = pathname.split('/').filter(segment => segment !== '');
        const breadcrumbs = [];
        
        // Siempre incluir Home
        breadcrumbs.push({ name: '🏠 Inicio', href: '/' });
        
        // Agregar Users si estamos en esa sección
        if (pathSegments.includes('users')) {
            breadcrumbs.push({ name: '👥 Equipo', href: '/users' });
            
            // Si hay más segmentos después de users, agregarlos
            const usersIndex = pathSegments.indexOf('users');
            if (pathSegments.length > usersIndex + 1) {
                const profileSegments = pathSegments.slice(usersIndex + 1);
                breadcrumbs.push({ 
                    name: `👤 Perfil: ${profileSegments.join(' / ')}`, 
                    href: pathname,
                    isActive: true 
                });
            }
        }
        
        return breadcrumbs;
    };
    
    const breadcrumbs = generateBreadcrumbs();
    
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
            {/* Team Management Navigation Header */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    {/* Breadcrumbs */}
                    <nav className="mb-4">
                        <ol className="flex items-center gap-2 text-sm">
                            {breadcrumbs.map((crumb, index) => (
                                <li key={crumb.href} className="flex items-center gap-2">
                                    {index > 0 && (
                                        <span className="text-gray-400">→</span>
                                    )}
                                    {crumb.isActive ? (
                                        <span className="text-blue-600 font-medium">{crumb.name}</span>
                                    ) : (
                                        <Link 
                                            href={crumb.href}
                                            className="text-gray-500 hover:text-blue-600 transition-colors"
                                        >
                                            {crumb.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                    
                    {/* Section Navigation */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <Link 
                                href="/users"
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    pathname === '/users' 
                                        ? 'bg-blue-100 text-blue-700 shadow-sm' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                👥 Ver Equipo
                            </Link>
                            <Link 
                                href="/users/roles"
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    pathname === '/users/roles' 
                                        ? 'bg-blue-100 text-blue-700 shadow-sm' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                🏷️ Roles
                            </Link>
                            <Link 
                                href="/users/settings"
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    pathname === '/users/settings' 
                                        ? 'bg-blue-100 text-blue-700 shadow-sm' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                ⚙️ Configuración
                            </Link>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                                <span>➕</span>
                                Agregar Usuario
                            </button>
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                                📊 Reportes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Team Statistics Dashboard (solo en página principal de users) */}
            {pathname === '/users' && (
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-colors">
                                <div className="text-2xl font-bold">6</div>
                                <div className="text-sm opacity-90">Total Miembros</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-colors">
                                <div className="text-2xl font-bold">5</div>
                                <div className="text-sm opacity-90">Activos</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-colors">
                                <div className="text-2xl font-bold">3</div>
                                <div className="text-sm opacity-90">Roles Diferentes</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-colors">
                                <div className="text-2xl font-bold">83%</div>
                                <div className="text-sm opacity-90">Tasa Actividad</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Main Content Area */}
            <div className={pathname === '/users' ? '' : 'pt-6'}>
                {children}
            </div>
        </div>
    )
}