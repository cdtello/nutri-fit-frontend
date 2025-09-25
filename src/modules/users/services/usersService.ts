/**
 * Servicios del módulo de usuarios
 * Contiene toda la lógica de negocio relacionada con usuarios
 * Conecta con el backend en localhost:3001/users
 */

import { User, CreateUserRequest, UpdateUserRequest, UserFilters } from '../types';

const API_BASE_URL = 'http://localhost:3001';
const USERS_ENDPOINT = `${API_BASE_URL}/users`;

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
    const response = await fetch(USERS_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
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
    const response = await fetch(USERS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    return await handleResponse<User>(response);
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

/**
 * Actualiza un usuario en el backend
 */
export async function updateUser(userData: UpdateUserRequest): Promise<User | null> {
  try {
    const response = await fetch(`${USERS_ENDPOINT}/${userData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (response.status === 404) {
      return null;
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
    const response = await fetch(`${USERS_ENDPOINT}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.status === 404) {
      return false;
    }
    
    return response.ok;
  } catch (error) {
    console.error(`Error deleting user ${id}:`, error);
    throw error;
  }
}
