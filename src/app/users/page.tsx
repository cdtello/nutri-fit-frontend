'use client';

import { useState, useEffect } from 'react';
import { UserCard, UserForm } from '../../components/users';
import { User, CreateUserRequest } from '../../modules/users/types';
import { getAllUsers, createUser } from '../../modules/users/services/usersService';

/**
 * Página principal de usuarios con funcionalidad de agregar nuevos usuarios
 */
export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Cargar usuarios al montar el componente
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const usersData = await getAllUsers();
            setUsers(usersData);
        } catch (error) {
            console.error('Error loading users:', error);
            setError('Error al cargar los usuarios. Verifica que el backend esté corriendo en localhost:3001');
            setUsers([]); // Set empty array on error
        } finally {
            setIsLoading(false);
        }
    };

    // Manejar la creación de un nuevo usuario
    const handleCreateUser = async (userData: CreateUserRequest) => {
        try {
            setIsCreating(true);
            const newUser = await createUser(userData);
            
            // Recargar la lista completa desde el backend
            await loadUsers();
            setIsFormOpen(false);
            
            // Mostrar mensaje de éxito (puedes agregar una librería de toast aquí)
            alert(`✅ Usuario "${newUser.name}" creado exitosamente!`);
        } catch (error) {
            console.error('Error creating user:', error);
            alert('❌ Error al crear el usuario. Verifica que el backend esté corriendo y funcionando correctamente.');
        } finally {
            setIsCreating(false);
        }
    };

    if (isLoading) {
        return (
            <div className="p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-gray-600">Cargando usuarios...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="p-6">
            <div className="max-w-7xl mx-auto">
                {/* Error Banner */}
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="text-red-500 text-xl">⚠️</div>
                            <div>
                                <h3 className="font-medium text-red-800">Error de Conexión</h3>
                                <p className="text-red-600 text-sm mt-1">{error}</p>
                                <button 
                                    onClick={loadUsers}
                                    className="mt-2 text-sm bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded transition-colors"
                                >
                                    🔄 Intentar de nuevo
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Header con botón de agregar */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">👥 Equipo</h1>
                        <p className="text-gray-600 mt-1">
                            Gestiona tu equipo de trabajo ({users.length} {users.length === 1 ? 'miembro' : 'miembros'})
                        </p>
                    </div>
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
                    >
                        ➕ Agregar Usuario
                    </button>
                </div>

                {/* Lista de usuarios */}
                {users.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">👤</div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">
                            {error ? 'No se pudieron cargar los usuarios' : 'No hay usuarios registrados'}
                        </h3>
                        <p className="text-gray-500 mb-6">
                            {error 
                                ? 'Verifica la conexión con el backend y vuelve a intentar' 
                                : 'Comienza agregando tu primer usuario al equipo'
                            }
                        </p>
                        {!error && (
                            <button
                                onClick={() => setIsFormOpen(true)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                            >
                                ➕ Agregar Primer Usuario
                            </button>
                        )}
                    </div>
                )}

                {/* Modal de formulario */}
                <UserForm
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                    onSubmit={handleCreateUser}
                    isLoading={isCreating}
                />
            </div>
        </div>
    );
}