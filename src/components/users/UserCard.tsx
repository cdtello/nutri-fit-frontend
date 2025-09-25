import Link from 'next/link';
import Image from 'next/image';
import { UserCardProps } from '../../modules/users/types';

/**
 * Componente UserCard - Tarjeta individual para mostrar información de un usuario
 * Se usa específicamente en la página de listado de usuarios (/users)
 */
export default function UserCard({ user }: UserCardProps) {
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

  // Función para obtener el color del status
  const getStatusColor = (status: 'active' | 'inactive') => {
    return status === 'active' 
      ? 'bg-green-50 text-green-600' 
      : 'bg-gray-50 text-gray-600';
  };

  // Función para obtener el avatar del usuario o generar uno dinámico
  const getUserAvatar = () => {
    return user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0ea5e9&color=fff&size=60`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1">
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image 
              src={getUserAvatar()}
              alt={user.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              loading="lazy"
            />
            {/* Status indicator */}
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
          {/* Role badge */}
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
            {user.role}
          </span>
          {/* Status badge */}
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
            {user.status}
          </span>
        </div>
        
        {/* Joined date */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-2">
            📅 Se unió: {new Date(user.joinedDate).toLocaleDateString('es-ES')}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link 
            href={`/users/${user.id}`}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg transition-colors font-medium text-center"
          >
            Ver Perfil
          </Link>
          <button className="px-4 py-2 border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-700 text-sm rounded-lg transition-colors">
            ⚙️
          </button>
        </div>
      </div>
    </div>
  );
}
