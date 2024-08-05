import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/foother/Footer';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { getInLocalStorage } from '../../utilities';
import './home.css';
import { personOutline, helpCircleOutline, notificationsOutline, shareSocial, copy, calendarOutline, medicalOutline, walletOutline } from 'ionicons/icons';

const Home: React.FC = () => {
    const user = getInLocalStorage('email');

    return (
        <IonPage>
            <Header />
            <Footer />
            <IonContent>
                {/*<h3 className="ion-text-center">
                    <strong>Welcome {user}!</strong>
                </h3> */}

                <IonCard color='primary'>
                    <IonCardHeader>
                        <IonCardTitle>
                            <strong>IVAN ELIAS LEAL</strong>
                        </IonCardTitle>
                        <IonCardSubtitle>
                            <strong>1234567 7891234 123456 </strong><IonIcon icon={copy} />
                        </IonCardSubtitle>
                        <IonCardSubtitle><strong>Plan: </strong>Sb04</IonCardSubtitle>
                        <IonCardSubtitle><strong>Cartilla: </strong>Global</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <div className="card-content">
                            <IonButton slot='end' fill="clear" color="light"  >
                                <strong>Generar token </strong>
                                <IonIcon icon={shareSocial} />
                            </IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>

                <GridMenu />

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Últimos Movimientos</IonCardTitle>
                        <IonCardSubtitle>Movimientos recientes en tu cuenta</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <ul>
                            <li>Pago de cuota - $3000 - 01/08/2024</li>
                            <li>Reembolso - $150 - 25/07/2024</li>
                            <li>Consulta médica - $500 - 20/07/2024</li>
                        </ul>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Próximas Consultas</IonCardTitle>
                        <IonCardSubtitle>Consultas agendadas</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <ul>
                            <li>Consulta con Dr. Pérez - 05/08/2024</li>
                            <li>Consulta con Dra. Gómez - 10/08/2024</li>
                            <li>Consulta con Dr. Fernández - 15/08/2024</li>
                        </ul>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Home;


const GridMenu: React.FC = () => {
    return (
        <>
            <IonGrid fixed={true}>
                <IonRow>
                    <IonCol size="4">
                        <ButtonCard icon={personOutline} label="Mi Perfil" />
                    </IonCol>
                    <IonCol size="4">
                        <ButtonCard icon={medicalOutline} label="Consultas" />
                    </IonCol>
                    <IonCol size="4">
                        <ButtonCard icon={walletOutline} label="Pagos" />
                    </IonCol>
                    <IonCol size="4">
                        <ButtonCard icon={calendarOutline} label="Agenda" />
                    </IonCol>
                    <IonCol size="4">
                        <ButtonCard icon={helpCircleOutline} label="Ayuda" />
                    </IonCol>
                    <IonCol size="4">
                        <ButtonCard icon={notificationsOutline} label="Notificaciones" />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}



/*-------------Componente boton--------------------------------*/
interface ButtonCardProps {
    icon: string;
    label: string;
}
const ButtonCard: React.FC<ButtonCardProps> = ({ icon, label }) => {
    return (
        <div className="button-card">
            <IonButton className="menu-button" expand="block" fill="clear" color="dark">
                <IonIcon icon={icon} />
            </IonButton>
            <IonLabel className="button-label">{label}</IonLabel>
        </div>
    );
};