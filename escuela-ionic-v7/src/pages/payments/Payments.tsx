import React, { useState } from 'react';
import { IonContent, IonPage, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonListHeader } from '@ionic/react';
import Header from '../../components/header/Header';
import Footer from '../../components/foother/Footer';
import './Payments.css'

const Payments: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handlePayment = () => {
        // Logic to process the payment
        console.log('Make payment:', amount, description);
        setAmount('');
        setDescription('');
    };

    return (
        <IonPage>
            <Header />
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Make New Payment</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonInput
                                type="number"
                                value={amount}
                                onIonChange={e => setAmount(e.detail.value!)}
                                placeholder="Enter amount"
                            />
                        </IonItem>
                        <IonItem>
                            <IonInput
                                value={description}
                                onIonChange={e => setDescription(e.detail.value!)}
                                placeholder="Payment description"
                            />
                        </IonItem>
                        <IonButton expand="full" onClick={handlePayment} style={{ marginTop: '20px' }}>
                            Make Payment
                        </IonButton>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Recent Payments</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonListHeader>
                                <IonLabel>Recent Payments</IonLabel>
                            </IonListHeader>
                            {/* Example of recent payments, replace with real data */}
                            <IonItem>
                                <IonLabel>
                                    Membership fee payment - $3000 - 08/01/2024
                                </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    Reimbursement - $150 - 07/25/2024
                                </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    Medical consultation - $500 - 07/20/2024
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Payments;
