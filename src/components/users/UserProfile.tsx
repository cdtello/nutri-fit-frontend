import Link from 'next/link';
import Image from 'next/image';
import { UserProfileProps } from '../../modules/users/types';

/**
 * Componente UserProfile - Vista completa del perfil de un usuario
 * Se usa específicamente en la página de perfil individual (/users/[id])
 */
export default function UserProfile({ user }: UserProfileProps) {
  // Función para obtener el color del rol
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-purple-100 text-purple-700';
      case 'Nutritionist':
        return 'bg-green-100 text-green-700';
      case 'Trainer':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  // Función para obtener el avatar del usuario o generar uno dinámico
  const getUserAvatar = () => {
    return user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0ea5e9&color=fff&size=120`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 h-32"></div>
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row gap-6 -mt-16">
            {/* Avatar */}
            <div className="relative">
              <Image 
                src={getUserAvatar()}
                alt={user.name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full border-6 border-white shadow-lg object-cover"
                loading="lazy"
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
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(user.role)}`}>
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
                {user.specialties.map((specialty: string, index: number) => (
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
  );
}
