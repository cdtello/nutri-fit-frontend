// Importamos Link para navegación y notFound para mostrar error 404
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Esta interfaz define toda la información que puede tener un usuario
interface User {
    id: number;              // ID único del usuario
    name: string;            // Nombre completo
    email: string;           // Email
    role: string;            // Rol (Admin, User, etc.)
    avatar?: string;         // URL de la foto de perfil (opcional)
    status: 'active' | 'inactive';  // Estado del usuario
    joinedDate: string;      // Cuándo se unió al equipo
    bio?: string;            // Biografía/descripción (opcional)
    phone?: string;          // Teléfono (opcional)
    location?: string;       // Ubicación (opcional)
    specialties?: string[];  // Lista de especialidades (opcional)
    stats?: {                // Estadísticas del usuario (opcional)
        clients: number;     // Número de clientes
        sessions: number;    // Número de sesiones
        rating: number;      // Calificación promedio
    };
}

// Array de usuarios (mismos datos que en la página principal)
const SAMPLE_USERS: User[] = [
    {
        id: 1,
        name: "Carlos Tello",
        email: "carlos@nutri-fit.com",
        role: "Admin",
        status: "active",
        joinedDate: "2024-01-15",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        bio: "Administrador del sistema con más de 10 años de experiencia en desarrollo de software y gestión de equipos tecnológicos.",
        phone: "+57 300 123 4567",
        location: "Bogotá, Colombia",
        specialties: ["Gestión de Sistemas", "Desarrollo Web", "Leadership"],
        stats: { clients: 25, sessions: 150, rating: 4.9 }
    },
    {
        id: 2,
        name: "María González",
        email: "maria@nutri-fit.com",
        role: "Nutritionist",
        status: "active",
        joinedDate: "2024-02-20",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        bio: "Nutricionista certificada especializada en nutrición deportiva y planes de alimentación personalizados.",
        phone: "+57 301 234 5678",
        location: "Medellín, Colombia",
        specialties: ["Nutrición Deportiva", "Planes Alimentarios", "Pérdida de Peso"],
        stats: { clients: 45, sessions: 280, rating: 4.8 }
    },
    {
        id: 3,
        name: "Juan Pérez",
        email: "juan@nutri-fit.com",
        role: "User",
        status: "active",
        joinedDate: "2024-03-10",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Usuario activo enfocado en mantener un estilo de vida saludable y alcanzar sus objetivos fitness.",
        phone: "+57 302 345 6789",
        location: "Cali, Colombia",
        specialties: ["Fitness Personal", "Rutinas de Ejercicio"],
        stats: { clients: 0, sessions: 45, rating: 4.6 }
    },
    {
        id: 4,
        name: "Ana Rodríguez",
        email: "ana@nutri-fit.com",
        role: "Trainer",
        status: "inactive",
        joinedDate: "2024-01-05",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        bio: "Entrenadora personal certificada con experiencia en entrenamiento funcional y rehabilitación.",
        phone: "+57 303 456 7890",
        location: "Barranquilla, Colombia",
        specialties: ["Entrenamiento Funcional", "Rehabilitación", "CrossFit"],
        stats: { clients: 30, sessions: 200, rating: 4.7 }
    },
    {
        id: 5,
        name: "Diego Martín",
        email: "diego@nutri-fit.com",
        role: "User",
        status: "active",
        joinedDate: "2024-03-25",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        bio: "Nuevo usuario motivado por lograr un cambio positivo en su estilo de vida y salud general.",
        phone: "+57 304 567 8901",
        location: "Cartagena, Colombia",
        specialties: ["Motivación Personal", "Objetivos de Salud"],
        stats: { clients: 0, sessions: 12, rating: 4.5 }
    },
    {
        id: 6,
        name: "Sofia López",
        email: "sofia@nutri-fit.com",
        role: "Nutritionist",
        status: "active",
        joinedDate: "2024-02-14",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        bio: "Nutricionista especializada en alimentación vegetariana, vegana y dietas para condiciones específicas de salud.",
        phone: "+57 305 678 9012",
        location: "Bucaramanga, Colombia",
        specialties: ["Alimentación Vegetariana", "Dietas Terapéuticas", "Nutrición Clínica"],
        stats: { clients: 38, sessions: 190, rating: 4.9 }
    }
];

interface UserProfilesProps {
    params: Promise<{
        profile: string[];
    }>;
}

// Esta función se ejecuta cuando alguien visita /users/1 o /users/2, etc.
export default async function UserProfile(props: UserProfilesProps) {
    // En Next.js 15+, los params son promesas, así que esperamos a que lleguen
    const params = await props.params;
    
    // params.profile es un array. Si la URL es /users/1, entonces profile = ["1"]
    // Si la URL es /users/1/settings, entonces profile = ["1", "settings"]
    const userId = parseInt(params.profile[0]); // Convertimos "1" a número 1
    
    // Buscamos en nuestro array el usuario que tenga ese ID
    const user = SAMPLE_USERS.find(u => u.id === userId);
    
    // Si no encontramos el usuario, mostramos una página 404
    if (!user) {
        notFound(); // Esta función de Next.js muestra un error 404
    }
    
    // Estos console.log nos ayudan a ver qué está pasando en desarrollo
    console.log('Profile params:', params.profile);
    console.log('User found:', user.name);
    
    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Profile Header */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 h-32"></div>
                <div className="px-6 pb-6">
                    <div className="flex flex-col md:flex-row gap-6 -mt-16">
                        {/* Avatar */}
                        <div className="relative">
                            <img 
                                src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0ea5e9&color=fff&size=120`}
                                alt={user.name}
                                className="w-32 h-32 rounded-full border-6 border-white shadow-lg object-cover"
                            />
                            <div className={`absolute bottom-2 right-2 w-6 h-6 rounded-full border-3 border-white ${
                                user.status === 'active' ? 'bg-green-400' : 'bg-gray-400'
                            }`}></div>
                        </div>
                        
                        {/* Basic Info */}
                        <div className="flex-1 pt-4">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                                    <p className="text-gray-600 text-lg">{user.email}</p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            user.role === 'Admin' ? 'bg-purple-100 text-purple-700' :
                                            user.role === 'Nutritionist' ? 'bg-green-100 text-green-700' :
                                            user.role === 'Trainer' ? 'bg-blue-100 text-blue-700' :
                                            'bg-gray-100 text-gray-700'
                                        }`}>
                                            {user.role}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            user.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'
                                        }`}>
                                            {user.status === 'active' ? '✅ Activo' : '⏸️ Inactivo'}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                        📧 Contactar
                                    </button>
                                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                                        ⚙️ Editar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Profile Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* About Section */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">📝 Acerca de</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {user.bio || "No hay información biográfica disponible para este usuario."}
                        </p>
                    </div>
                    
                    {/* Specialties */}
                    {user.specialties && user.specialties.length > 0 && (
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">🎯 Especialidades</h2>
                            <div className="flex flex-wrap gap-2">
                                {user.specialties.map((specialty, index) => (
                                    <span 
                                        key={index}
                                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {specialty}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {/* Activity Timeline */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">📈 Actividad Reciente</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Perfil actualizado</p>
                                    <p className="text-xs text-gray-500">Hace 2 días</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Sesión completada</p>
                                    <p className="text-xs text-gray-500">Hace 1 semana</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Se unió al equipo</p>
                                    <p className="text-xs text-gray-500">{new Date(user.joinedDate).toLocaleDateString('es-ES')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Stats & Contact */}
                <div className="space-y-6">
                    {/* Stats Card */}
                    {user.stats && (
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">📊 Estadísticas</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">👥 Clientes</span>
                                    <span className="font-bold text-blue-600">{user.stats.clients}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">🏃 Sesiones</span>
                                    <span className="font-bold text-green-600">{user.stats.sessions}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">⭐ Rating</span>
                                    <span className="font-bold text-yellow-600">{user.stats.rating}/5</span>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Contact Info */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">📞 Contacto</h2>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-gray-500">📧</span>
                                <span className="text-gray-700">{user.email}</span>
                            </div>
                            {user.phone && (
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-500">📱</span>
                                    <span className="text-gray-700">{user.phone}</span>
                                </div>
                            )}
                            {user.location && (
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-500">📍</span>
                                    <span className="text-gray-700">{user.location}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-3">
                                <span className="text-gray-500">📅</span>
                                <span className="text-gray-700">
                                    Desde {new Date(user.joinedDate).toLocaleDateString('es-ES', { 
                                        year: 'numeric', 
                                        month: 'long' 
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">⚡ Acciones Rápidas</h2>
                        <div className="space-y-3">
                            <Link 
                                href="/users"
                                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors text-center block"
                            >
                                ← Volver al Equipo
                            </Link>
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors">
                                💬 Enviar Mensaje
                            </button>
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
                                📅 Agendar Cita
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}