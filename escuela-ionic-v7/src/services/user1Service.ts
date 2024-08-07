// Importa el modelo de datos User1 desde el archivo correspondiente.
import { User1 } from "../models/User1.model";

// Define una función asíncrona para obtener una lista de usuarios.
// La función retorna una promesa que se resuelve con un array de objetos User1.
export const getAllUsers = async (): Promise<User1[]> => {
    // Crea y retorna una nueva promesa.
    return new Promise((resolve) => {
        // Simula un retraso de 2 segundos antes de resolver la promesa.
        setTimeout(() => {
            // Resuelve la promesa con la lista de usuarios.
            resolve(usuarios);
        }, 2000);
    });
};

// Define un array de usuarios que se utilizará como datos simulados.
// Cada objeto en el array debe cumplir con la estructura definida en el modelo User1.
const usuarios: User1[] = [
    {
        name: 'LIONEL ANDRES MESSI',
        numberCard: '1234567 7891234 123456',
        plan: 'Sb04',
        cartilla: 'Global',
        isPrimary: true
    },
    {
        name: 'ANTONELA ROCCUZZO',
        numberCard: '1234567 7891234 123456',
        plan: 'Sb04',
        cartilla: 'Global',
        isPrimary: false
    },
    {
        name: 'THIAGO MESSI',
        numberCard: '1234567 7891234 123456',
        plan: 'Sb04',
        cartilla: 'Global',
        isPrimary: false
    },
    {
        name: 'MATEO MESSI',
        numberCard: '1234567 7891234 123456',
        plan: 'Sb04',
        cartilla: 'Global',
        isPrimary: false
    }
];