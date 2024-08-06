import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonAvatar, IonIcon } from '@ionic/react';
import Footer from '../../components/foother/Footer';
import Header from '../../components/header/Header';
import { personCircle, mail, phonePortrait } from 'ionicons/icons';

const Profile: React.FC = () => {
    const [name, setName] = useState<string>('Iván Elías Leal');
    const [email, setEmail] = useState<string>('ivan.leal@example.com');
    const [phone, setPhone] = useState<string>('123-456-7890');

    const handleSave = () => {
        // Logic to save changes
        console.log('Profile updated');
    };

    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle className='ion-text-center'>Personal Information</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <div style={{ textAlign: 'center' }}>
                            <IonAvatar style={{ marginBottom: '10px', margin: 'auto', height: '200px', width: '200px' }}>
                                <img src="https://www.kindpng.com/picc/m/9-99641_pensando-especialmente-en-las-personas-con-movilidad-persona.png" alt="Avatar" />
                            </IonAvatar>
                            <h2>{name}</h2>
                        </div>
                        <IonItem>
                            <IonIcon icon={mail} slot="start" />
                            <IonLabel><strong>Email: </strong></IonLabel>
                            <IonInput
                                value={email}
                                onIonChange={e => setEmail(e.detail.value!)}
                                placeholder="Email"
                            />
                        </IonItem>
                        <IonItem>
                            <IonIcon icon={phonePortrait} slot="start" />
                            <IonLabel><strong>Phone: </strong></IonLabel>
                            <IonInput
                                value={phone}
                                onIonChange={e => setPhone(e.detail.value!)}
                                placeholder="Phone"
                            />
                        </IonItem>
                        <IonButton expand="full" onClick={handleSave} style={{ marginTop: '20px' }}>
                            Save Changes
                        </IonButton>
                    </IonCardContent>
                </IonCard>

                {/* Additional sections can be added here as needed */}

            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Profile;
