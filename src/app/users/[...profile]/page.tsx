// Importamos componentes específicos de usuarios y datos
import { notFound } from 'next/navigation';
import { UserProfile, UserProfilePageProps, SAMPLE_USERS } from '../../../modules/users';

// Esta función se ejecuta cuando alguien visita /users/1 o /users/2, etc.
export default async function UserProfilePage(props: UserProfilePageProps) {
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
    
    // Usamos nuestro componente UserProfile que tiene toda la lógica de presentación
    return <UserProfile user={user} />;
}