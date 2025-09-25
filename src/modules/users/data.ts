import { User } from './types';

/**
 * Datos de ejemplo para usuarios
 * En una aplicación real, estos datos vendrían de una API/base de datos
 */
export const SAMPLE_USERS: User[] = [
    {
        id: 1,
        name: "Carlos Tello",
        email: "carlos@nutri-fit.com",
        role: "Admin",
        status: "active",
        joinedDate: "2024-01-15",
        avatar: "https://ui-avatars.com/api/?name=Carlos+Tello&size=150&background=6366f1&color=ffffff&rounded=true",
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
        avatar: "https://ui-avatars.com/api/?name=Maria+Gonzalez&size=150&background=10b981&color=ffffff&rounded=true",
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
        avatar: "https://ui-avatars.com/api/?name=Juan+Perez&size=150&background=3b82f6&color=ffffff&rounded=true",
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
        avatar: "https://ui-avatars.com/api/?name=Ana+Rodriguez&size=150&background=f59e0b&color=ffffff&rounded=true",
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
        avatar: "https://ui-avatars.com/api/?name=Diego+Martin&size=150&background=8b5cf6&color=ffffff&rounded=true",
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
        avatar: "https://ui-avatars.com/api/?name=Sofia+Lopez&size=150&background=ef4444&color=ffffff&rounded=true",
        bio: "Nutricionista especializada en alimentación vegetariana, vegana y dietas para condiciones específicas de salud.",
        phone: "+57 305 678 9012",
        location: "Bucaramanga, Colombia",
        specialties: ["Alimentación Vegetariana", "Dietas Terapéuticas", "Nutrición Clínica"],
        stats: { clients: 38, sessions: 190, rating: 4.9 }
    }
];
