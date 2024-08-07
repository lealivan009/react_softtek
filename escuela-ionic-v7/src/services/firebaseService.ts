import { createUserWithEmailAndPassword, EmailAuthProvider, reauthenticateWithCredential, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updatePassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

// Registra un nuevo usuario con correo electrónico y contraseña en Firebase Authentication.
// Retorna una promesa con la información del usuario registrado.
export const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Inicia sesión con un usuario existente usando correo electrónico y contraseña.
// Retorna una promesa con la información del usuario autenticado.
export const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Cierra la sesión del usuario actualmente autenticado.
// Retorna una promesa que se resuelve cuando la sesión ha sido cerrada.
export const logout = () => {
    return signOut(auth);
};

// Envía un correo electrónico para restablecer la contraseña a la dirección de correo proporcionada.
// Retorna una promesa que se resuelve cuando el correo ha sido enviado.
export const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
};

// Cambia la contraseña del usuario actualmente autenticado.
// Retorna una promesa que se resuelve cuando la contraseña ha sido actualizada.
export const changePassword = (newPassword: string) => {
    const user = auth.currentUser;
    if (user) {
        return updatePassword(user, newPassword);
    } else {
        return Promise.reject(new Error("No user is currently signed in."));
    }
};

// Reautentica al usuario actualmente autenticado usando sus credenciales (correo electrónico y contraseña).
// Esto es necesario para operaciones sensibles como cambiar la contraseña.
// Retorna una promesa que se resuelve cuando el usuario ha sido reautenticado.
export const reauthenticate = async (email: string, password: string) => {
    const user = auth.currentUser;
    if (user) {
        const credential = EmailAuthProvider.credential(email, password);
        return reauthenticateWithCredential(user, credential);
    } else {
        throw new Error("No user is currently signed in.");
    }
};
