/**
 * Tipos específicos del módulo de usuarios
 * Todo lo relacionado con la funcionalidad de usuarios
 */

// Interfaz principal del usuario
export interface User {
    id: number;              // ID único del usuario
    name: string;            // Nombre completo
    email: string;           // Email
    role: UserRole;          // Rol del usuario
    avatar?: string;         // URL de la foto de perfil (opcional)
    status: UserStatus;      // Estado del usuario
    joinedDate: string;      // Cuándo se unió al equipo (ISO string)
    bio?: string;            // Biografía/descripción (opcional)
    phone?: string;          // Teléfono (opcional)
    location?: string;       // Ubicación (opcional)
    specialties?: string[];  // Lista de especialidades (opcional)
    stats?: UserStats;       // Estadísticas del usuario (opcional)
}

// Roles específicos del sistema
export type UserRole = 'Admin' | 'Nutritionist' | 'Trainer' | 'User';

// Estados específicos del usuario
export type UserStatus = 'active' | 'inactive';

// Estadísticas específicas del usuario
export interface UserStats {
    clients: number;     // Número de clientes
    sessions: number;    // Número de sesiones
    rating: number;      // Calificación promedio (1-5)
}

// Props para componentes de usuarios
export interface UserCardProps {
    user: User;
}

export interface UserProfileProps {
    user: User;
}

export interface UserListProps {
    users?: User[];
}

// Props para páginas de usuarios
export interface UserProfilePageProps {
    params: Promise<{
        profile: string[];
    }>;
}

// DTOs para API de usuarios
export interface CreateUserRequest {
    name: string;
    email: string;
    role: UserRole;
    bio?: string;
    phone?: string;
    location?: string;
    specialties?: string[];
}

export interface UpdateUserRequest extends Partial<CreateUserRequest> {
    id: number;
}

export interface UserFilters {
    role?: UserRole;
    status?: UserStatus;
    search?: string;
}
