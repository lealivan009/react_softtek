import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonImg, IonInput, IonItem, IonPage, IonRow, IonToast } from '@ionic/react'
import React, { useState } from 'react'
import { resetPassword } from '../../services/firebaseService'
import { useHistory } from 'react-router'
import { validateEmail } from '../../utilities/validations'
import './ForgotPassword.css'

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');
    const history = useHistory();

    const handleResetPassword = async () => {
        if (!validateEmail(email)) {
            setToastMessage('Invalid email format');
            setToastColor('danger');
            setShowToast(true);
            return;
        }

        try {
            const result = await resetPassword(email);
            setToastMessage('Password reset email sent successfully.');
            setToastColor('success');

        } catch (error) {
            setToastMessage('Error sending password reset email.');
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
                    <IonGrid >
                        <IonRow>
                            <IonCol sizeLg='4' sizeSm='12' offsetLg='4'>
                                <IonCard className="login-card">
                                    <IonImg
                                        src="src/assets/assets/logo_osde.svg"
                                        className="logo-img-login"
                                    />
                                    <IonCardHeader>
                                        <IonCardTitle className="ion-text-center">Reset password</IonCardTitle>
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
                                        <IonButton expand="block" onClick={handleResetPassword}>
                                            Reset Password
                                        </IonButton>
                                        <IonButton
                                            expand="block"
                                            color="medium"
                                            routerLink="/login"
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
        </IonPage >
    )
}

export default ForgotPassword
