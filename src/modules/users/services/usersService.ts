/**
 * Servicios del módulo de usuarios
 * Contiene toda la lógica de negocio relacionada con usuarios
 * Conecta con el backend en localhost:3001/users
 */

import { User, CreateUserRequest, UpdateUserRequest, UserFilters } from '../types';

// Usar proxy de Next.js para evitar CORS
const USERS_ENDPOINT = '/api/users';

/**
 * Mapeo de roles del frontend al backend
 * Roles aceptados por el backend: admin, trainer, nutritionist, user, guest
 */
const ROLE_MAPPING = {
  'Admin': 'admin',           // 👑 Administrador del sistema
  'Trainer': 'trainer',       // 🏋️ Entrenador personal
  'Nutritionist': 'nutritionist', // 🥗 Nutricionista
  'User': 'user',             // 👤 Usuario regular (valor por defecto)
  'Guest': 'guest'            // 👥 Usuario invitado
} as const;

/**
 * Transforma los datos del frontend al formato que espera el backend
 */
function transformUserDataForBackend(userData: CreateUserRequest) {
  return {
    name: userData.name,
    email: userData.email,
    role: ROLE_MAPPING[userData.role],
    ...(userData.bio && { bio: userData.bio }),
    ...(userData.phone && { phone: userData.phone }),
    ...(userData.location && { location: userData.location }),
    ...(userData.specialties && userData.specialties.length > 0 && { 
      specialties: userData.specialties 
    })
  };
}

/**
 * Manejo de errores de la API
 */
class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Helper para manejar respuestas de fetch
 */
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
    throw new ApiError(errorMessage, response.status);
  }
  
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  
  throw new Error('Response is not JSON');
}

/**
 * Obtiene todos los usuarios del backend
 */
export async function getAllUsers(): Promise<User[]> {
  try {
    console.log('📤 GET:', USERS_ENDPOINT);
    
    const response = await fetch(USERS_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new ApiError(`Backend error: ${response.status} - ${errorText}`, response.status);
    }
    
    return await handleResponse<User[]>(response);
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

/**
 * Obtiene un usuario específico por ID del backend
 */
export async function getUserById(id: number): Promise<User | null> {
  try {
    console.log(`📤 GET: ${USERS_ENDPOINT}/${id}`);
    
    const response = await fetch(`${USERS_ENDPOINT}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.status === 404) {
      return null;
    }
    
    return await handleResponse<User>(response);
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
}

/**
 * Simula filtrar usuarios
 */
export function filterUsers(users: User[], filters: UserFilters): User[] {
  let filteredUsers = [...users];

  if (filters.role) {
    filteredUsers = filteredUsers.filter(user => user.role === filters.role);
  }

  if (filters.status) {
    filteredUsers = filteredUsers.filter(user => user.status === filters.status);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filteredUsers = filteredUsers.filter(user => 
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower)
    );
  }

  return filteredUsers;
}

/**
 * Crea un nuevo usuario en el backend
 */
export async function createUser(userData: CreateUserRequest): Promise<User> {
  try {
    console.log('📤 POST:', USERS_ENDPOINT);
    
    // Transformar datos al formato del backend
    const backendData = transformUserDataForBackend(userData);
    
    const response = await fetch(USERS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(backendData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new ApiError(`Backend error: ${response.status} - ${errorText}`, response.status);
    }
    
    return await handleResponse<User>(response);
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

/**
 * Transforma los datos de actualización al formato del backend
 */
function transformUpdateDataForBackend(userData: UpdateUserRequest) {
  const { id: _id, ...updateData } = userData;
  return {
    ...updateData,
    ...(updateData.role && { role: ROLE_MAPPING[updateData.role] })
  };
}

/**
 * Actualiza un usuario en el backend
 */
export async function updateUser(userData: UpdateUserRequest): Promise<User | null> {
  try {
    console.log(`📤 PUT: ${USERS_ENDPOINT}/${userData.id}`);
    
    // Transformar datos al formato del backend
    const backendData = transformUpdateDataForBackend(userData);
    
    const response = await fetch(`${USERS_ENDPOINT}/${userData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(backendData),
    });
    
    if (response.status === 404) {
      return null;
    }
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new ApiError(`Backend error: ${response.status} - ${errorText}`, response.status);
    }
    
    return await handleResponse<User>(response);
  } catch (error) {
    console.error(`Error updating user ${userData.id}:`, error);
    throw error;
  }
}

/**
 * Elimina un usuario del backend
 */
export async function deleteUser(id: number): Promise<boolean> {
  try {
    console.log(`📤 DELETE: ${USERS_ENDPOINT}/${id}`);
    
    const response = await fetch(`${USERS_ENDPOINT}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.status === 404) {
      return false;
    }
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new ApiError(`Backend error: ${response.status} - ${errorText}`, response.status);
    }
    
    return true;
  } catch (error) {
    console.error(`Error deleting user ${id}:`, error);
    throw error;
  }
}
