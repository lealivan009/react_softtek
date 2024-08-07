import { IonPage, IonContent, IonToast, IonGrid, IonRow, IonCol, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { changePassword, reauthenticate } from '../../services/firebaseService';
import { validatePassword } from '../../utilities/validations';

const ChangePassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');
    const history = useHistory();

    const handleResetPassword = async () => {

        /*if (!validatePassword(password)) {
                    setToastMessage('Invalid password format');
                    setToastColor('danger');
                    setShowToast(true);
                    return;
                }*/

        try {
            // Reautenticar al usuario
            await reauthenticate(email, currentPassword);
            console.log("Reauthentication successful");

            // Cambiar la contraseña
            await changePassword(newPassword);
            setToastMessage('Password changed successfully.');
            setToastColor('success');
        } catch (error: any) {
            console.error("Error changing password:", error);
            if (error.code === 'auth/wrong-password') {
                setToastMessage('The password is invalid or the user does not have a password.');
            } else {
                setToastMessage('Error changing password.');
            }
            setToastColor('danger');
        }
        setShowToast(true);
    };

    return (
        <IonPage>
            <IonContent color='primary'>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    color={toastColor}
                />
                <div className='full-height'>
                    <IonGrid>
                        <IonRow>
                            <IonCol sizeLg='4' sizeSm='12' offsetLg='4'>
                                <IonCard className="login-card">
                                    <IonImg
                                        src="src/assets/assets/logo_osde.svg"
                                        className="logo-img-login"
                                    />
                                    <IonCardHeader>
                                        <IonCardTitle className="ion-text-center">Change password</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonItem>
                                            <IonInput
                                                value={email}
                                                placeholder="Enter your email"
                                                label='Email'
                                                labelPlacement='floating'
                                                type='email'
                                                onIonChange={(e) => setEmail(e.detail.value!)}
                                            />
                                        </IonItem>
                                        <IonItem>
                                            <IonInput
                                                value={currentPassword}
                                                placeholder="Enter your current password"
                                                label='Current Password'
                                                labelPlacement='floating'
                                                type='password'
                                                onIonChange={(e) => setCurrentPassword(e.detail.value!)}
                                            />
                                        </IonItem>
                                        <IonItem>
                                            <IonInput
                                                value={newPassword}
                                                placeholder="Enter your new password"
                                                label='New Password'
                                                labelPlacement='floating'
                                                type='password'
                                                onIonChange={(e) => setNewPassword(e.detail.value!)}
                                            />
                                        </IonItem>
                                        <IonButton expand="block" onClick={handleResetPassword}>
                                            Change Password
                                        </IonButton>
                                        <IonButton
                                            expand="block"
                                            color="medium"
                                            routerLink="/settings"
                                            fill='outline'>
                                            Cancel
                                        </IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ChangePassword;
