import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonButton, IonIcon, IonAccordion, IonAccordionGroup, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import { call, mail, helpCircle } from 'ionicons/icons';
import Header from '../../components/header/Header';
import Footer from '../../components/foother/Footer';

const Help: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent>

                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Help</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Frequently Asked Questions (FAQ)</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonAccordionGroup>
                            <IonAccordion value="question1">
                                <IonItem slot="header" color="light">
                                    <IonLabel>How can I book an appointment?</IonLabel>
                                </IonItem>
                                <div className="ion-padding" slot="content">
                                    You can book an appointment from our app in the "Book Appointment" section.
                                </div>
                            </IonAccordion>
                            <IonAccordion value="question2">
                                <IonItem slot="header" color="light">
                                    <IonLabel>What to do in case of an emergency?</IonLabel>
                                </IonItem>
                                <div className="ion-padding" slot="content">
                                    In case of an emergency, call the OSDE emergency number or go to the nearest medical center.
                                </div>
                            </IonAccordion>
                            <IonAccordion value="question3">
                                <IonItem slot="header" color="light">
                                    <IonLabel>How can I check my payments?</IonLabel>
                                </IonItem>
                                <div className="ion-padding" slot="content">
                                    You can check your payments in the "Payments" section within the app.
                                </div>
                            </IonAccordion>
                            {/* Add more questions as needed */}
                        </IonAccordionGroup>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Contact Information</IonCardTitle>
                        <IonCardSubtitle>We are here to help you</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonIcon icon={call} slot="start" />
                                <IonLabel>Phone: 0800-123-4567</IonLabel>
                                <IonButton fill="outline" slot="end" href="tel:08001234567">Call</IonButton>
                            </IonItem>
                            <IonItem>
                                <IonIcon icon={mail} slot="start" />
                                <IonLabel>Email: support@osde.com.ar</IonLabel>
                                <IonButton fill="outline" slot="end" href="mailto:support@osde.com.ar">Send Email</IonButton>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Useful Links</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem button routerLink="/appointment">
                                <IonIcon icon={helpCircle} slot="start" />
                                <IonLabel>Book Appointment</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/consultation">
                                <IonIcon icon={helpCircle} slot="start" />
                                <IonLabel>Consultations</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/pay">
                                <IonIcon icon={helpCircle} slot="start" />
                                <IonLabel>Payments</IonLabel>
                            </IonItem>
                            {/* Add more links as needed */}
                        </IonList>
                    </IonCardContent>
                </IonCard>

            </IonContent>
            <Footer />
        </IonPage>
    );
};

export default Help;
