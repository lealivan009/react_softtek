import { IonButton, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonToast } from '@ionic/react';
import { useState } from 'react';
import './Register.css'
import { register } from '../../services/firebaseService';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastColor, setToastColor] = useState<'success' | 'danger'>('success');

    const handleRegister = async () => {
        if (!email || !password) {
            setToastMessage('Email and password are required');
            setToastColor('danger');
            setShowToast(true);
        }
        try {
            await register(email, password);
            setToastMessage('User created successful');
            setToastColor('success');
            setShowToast(true);
            history.push('/login');
        } catch (error) {
            setToastMessage('User created failed');
            setToastColor('danger');
            setShowToast(true);
        }
    }

    return (
        <IonPage>
            <IonContent>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                    color={toastColor}
                />
                <div className='register-content'>
                    <IonCard className='register-card'>
                        <IonImg
                            src="src/assets/assets/logo_osde.svg"
                            className="logo-img-login"
                        />
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center">Register</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                <IonItem>
                                    <IonInput
                                        value={email}
                                        label='Email'
                                        placeholder='Input your email'
                                        type='email'
                                        labelPlacement='floating'
                                        onIonChange={(e) => { setEmail(e.detail.value!); console.log(e.detail.value!); }}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonInput
                                        value={password}
                                        label='Password'
                                        placeholder='Input your password'
                                        type='password'
                                        labelPlacement='floating'
                                        onIonChange={(e) => { setPassword(e.detail.value!); }}
                                    />
                                </IonItem>
                            </IonList>
                            <div className='register-button'>
                                <IonButton
                                    expand="block"
                                    color="primary"
                                    onClick={handleRegister}>
                                    Register
                                </IonButton>
                                <IonButton
                                    expand="block"
                                    color="medium"
                                    routerLink="/login"
                                    fill='outline'>
                                    Cancel
                                </IonButton>
                            </div>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Register;