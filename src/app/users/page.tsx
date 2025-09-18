// Importamos Link para crear botones que navegan a otras páginas
import Link from 'next/link';

// Definimos cómo se ve un usuario (esto es TypeScript!)
interface User {
    id: number;           // Número único para identificar cada usuario
    name: string;         // Nombre completo del usuario
    email: string;        // Correo electrónico
    role: string;         // Qué rol tiene (Admin, User, etc.)
    avatar?: string;      // Foto de perfil (el ? significa que es opcional)
    status: 'active' | 'inactive';  // Solo puede ser 'active' o 'inactive'
    joinedDate: string;   // Fecha cuando se unió al equipo
}

// Array de usuarios de ejemplo para la clase
const SAMPLE_USERS: User[] = [
    {
        id: 1,
        name: "Carlos Tello",
        email: "carlos@nutri-fit.com",
        role: "Admin",
        status: "active",
        joinedDate: "2024-01-15",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "María González",
        email: "maria@nutri-fit.com",
        role: "Nutritionist",
        status: "active",
        joinedDate: "2024-02-20",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 3,
        name: "Juan Pérez",
        email: "juan@nutri-fit.com",
        role: "User",
        status: "active",
        joinedDate: "2024-03-10",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 4,
        name: "Ana Rodríguez",
        email: "ana@nutri-fit.com",
        role: "Trainer",
        status: "inactive",
        joinedDate: "2024-01-05",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 5,
        name: "Diego Martín",
        email: "diego@nutri-fit.com",
        role: "User",
        status: "active",
        joinedDate: "2024-03-25",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
        id: 6,
        name: "Sofia López",
        email: "sofia@nutri-fit.com",
        role: "Nutritionist",
        status: "active",
        joinedDate: "2024-02-14",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    }
];

// Esta es nuestra función principal que muestra la página de usuarios
export default function Users(props: { users?: User[] }) {
    // Si no nos pasan usuarios desde afuera, usamos nuestros datos de ejemplo
    const users = props.users || SAMPLE_USERS;
    
    return (
        <div className="p-6">
            <div className="max-w-7xl mx-auto">

                {/* Aquí mostramos todos los usuarios en una cuadrícula (grid) */}
                {users.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* .map() toma cada usuario y crea una tarjeta para él */}
                        {users.map((user) => (
                            <div 
                                key={user.id} 
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1"
                            >
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <img 
                                                src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0ea5e9&color=fff&size=60`}
                                                alt={user.name}
                                                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                                            />
                                            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                                                user.status === 'active' ? 'bg-green-400' : 'bg-gray-400'
                                            }`}></div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                                                {user.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm">{user.email}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="px-6 pb-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            user.role === 'Admin' ? 'bg-purple-100 text-purple-700' :
                                            user.role === 'Nutritionist' ? 'bg-green-100 text-green-700' :
                                            user.role === 'Trainer' ? 'bg-blue-100 text-blue-700' :
                                            'bg-gray-100 text-gray-700'
                                        }`}>
                                            {user.role}
                                        </span>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            user.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'
                                        }`}>
                                            {user.status}
                                        </span>
                                    </div>
                                    
                                    <div className="text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-2">
                                            📅 Joined: {new Date(user.joinedDate).toLocaleDateString('es-ES')}
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <Link 
                                            href={`/users/${user.id}`}
                                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg transition-colors font-medium text-center"
                                        >
                                            View Profile
                                        </Link>
                                        <button className="px-4 py-2 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-700 text-sm rounded-lg transition-colors">
                                            ⚙️
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">👤</div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No users found</h3>
                        <p className="text-gray-500">Add some users to get started</p>
                    </div>
                )}
            </div>
        </div>
    )
}