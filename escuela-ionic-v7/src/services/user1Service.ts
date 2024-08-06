import { User1 } from "../models/User1.mode";

export const getAllUsers = async (): Promise<User1[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usuarios);
        }, 1000)
    });
}




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