import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/foother/Footer';
import { User1 } from '../../models/User1.model';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { personOutline, helpCircleOutline, notificationsOutline, calendarOutline, medicalOutline, walletOutline } from 'ionicons/icons';


import './home.css';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { Autoplay } from 'swiper/modules';
import { getAllUsers } from '../../services/user1Service';
import { CardSocio, CardSocioSkeletor } from '../../components/cardSocio/CardSocio';

const Home: React.FC = () => {

    const [users, setUsers] = useState<User1[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userData = await getAllUsers();
                setUsers(userData);
                setLoaded(true);
            } catch (error) {
                console.error("Error fetching users: " + error);
            } finally {
                //nada por ahora
            }
        }

        fetchUsers();
    }, []);

    return (
        <IonPage>
            <Header />
            <Footer />
            <IonContent color='light'>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeLg='4' sizeSm='12' offsetLg='4'>
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                loop={true} >
                                {loaded &&
                                    users.map((usuario, index) =>
                                        <SwiperSlide key={index}>
                                            <CardSocio
                                                name={usuario.name}
                                                numberCard={usuario.numberCard}
                                                plan={usuario.plan}
                                                cartilla={usuario.cartilla}
                                                color={usuario.isPrimary ? 'primary' : 'secondary'}
                                            />
                                        </SwiperSlide>
                                    )}
                                {!loaded &&
                                    <SwiperSlide >
                                        <CardSocioSkeletor />
                                    </SwiperSlide>
                                }
                            </Swiper>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol sizeLg='6' sizeSm='12' offsetLg='3'>
                            <GridMenu />
                        </IonCol>
                    </IonRow>
                    <IonRow>

                        <IonCol sizeLg='6' sizeSm='12' offsetLg='3'>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Recent Transactions</IonCardTitle>
                                    <IonCardSubtitle>Recent movements in your account</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <ul>
                                        <li>Subscription payment - $3000 - 01/08/2024</li>
                                        <li>Refund - $150 - 25/07/2024</li>
                                        <li>Medical consultation - $500 - 20/07/2024</li>
                                    </ul>
                                </IonCardContent>
                            </IonCard>

                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Upcoming Consultations</IonCardTitle>
                                    <IonCardSubtitle>Scheduled consultations</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <ul>
                                        <li>Consultation with Dr. Pérez - 05/08/2024</li>
                                        <li>Consultation with Dr. Gómez - 10/08/2024</li>
                                        <li>Consultation with Dr. Fernández - 15/08/2024</li>
                                    </ul>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>




            </IonContent>
        </IonPage >
    );
};

export default Home;




//-----------menu de botones redondos
const GridMenu: React.FC = () => {
    return (
        <IonGrid fixed={true}>
            <IonRow>
                <IonCol size="4">
                    <ButtonCard icon={personOutline} label="Profile" url='/profile' />
                </IonCol>
                <IonCol size="4">
                    <ButtonCard icon={medicalOutline} label="Consultation" url='/consultation' />
                </IonCol>
                <IonCol size="4">
                    <ButtonCard icon={walletOutline} label="Payments" url='/Payments' />
                </IonCol>
                <IonCol size="4">
                    <ButtonCard icon={calendarOutline} label="Appointment" url='/appointment' />
                </IonCol>
                <IonCol size="4">
                    <ButtonCard icon={helpCircleOutline} label="Help" url='/help' />
                </IonCol>
                <IonCol size="4">
                    <ButtonCard icon={notificationsOutline} label="Notifications" />
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}


/*-------------Componente boton--------------------------------*/
interface ButtonCardProps {
    icon: string;
    label: string;
    url?: string;
}
const ButtonCard: React.FC<ButtonCardProps> = ({ icon, label, url }) => {
    return (
        <div className="button-card">
            <IonButton shape='round' routerLink={url} >
                <IonIcon slot="icon-only" icon={icon} style={{ padding: '15px' }} />
            </IonButton>
            <IonLabel className="button-label">{label}</IonLabel>
        </div>
    );
};






