'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { UserProfile } from '../../../components/users';
import { UserProfilePageProps, User } from '../../../modules/users/types';
import { getUserById } from '../../../modules/users/services/usersService';

// Esta función se ejecuta cuando alguien visita /users/1 o /users/2, etc.
export default function UserProfilePage(props: UserProfilePageProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Cargar params y usuario
    useEffect(() => {
        const loadUserProfile = async () => {
            try {
                // En Next.js 15+, los params son promesas, así que esperamos a que lleguen
                const params = await props.params;
                
                // params.profile es un array. Si la URL es /users/1, entonces profile = ["1"]
                const userIdFromParams = parseInt(params.profile[0]); // Convertimos "1" a número 1
                
                if (isNaN(userIdFromParams)) {
                    setError('ID de usuario inválido');
                    setIsLoading(false);
                    return;
                }

                setIsLoading(true);
                setError(null);

                console.log('📍 Cargando perfil para usuario ID:', userIdFromParams);

                // Consultar usuario desde el backend
                const userData = await getUserById(userIdFromParams);
                
                if (!userData) {
                    setError('Usuario no encontrado');
                    setUser(null);
                } else {
                    setUser(userData);
                    console.log('✅ Usuario cargado:', userData.name);
                }
            } catch (err) {
                console.error('Error loading user profile:', err);
                setError('Error al cargar el perfil del usuario. Verifica que el backend esté funcionando.');
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        loadUserProfile();
    }, [props.params]);

    // Estados de carga y error
    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Cargando perfil del usuario...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                    <div className="text-red-500 text-4xl mb-4">❌</div>
                    <h3 className="text-xl font-semibold text-red-800 mb-2">Error al cargar perfil</h3>
                    <p className="text-red-600 mb-4">{error}</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg transition-colors"
                    >
                        🔄 Intentar de nuevo
                    </button>
                </div>
            </div>
        );
    }

    if (!user) {
        notFound(); // Esta función de Next.js muestra un error 404
    }

    // Usamos nuestro componente UserProfile que tiene toda la lógica de presentación
    return <UserProfile user={user} />;
}