import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import './UserDetail.css';
import Footer from "../../components/foother/Footer";

const UserDetail: React.FC = () => {
    const location = useLocation();
    const user = location.state?.user;

    return (
        <IonPage>
            <Header />
            <Footer />
            <IonContent className="ion-padding">
                {user ? (
                    <IonCard>
                        <IonImg src={user.picture.large} alt={user.name.first} />
                        <IonCardHeader>
                            <IonCardTitle>
                                <IonLabel>
                                    {`${user.name.first} ${user.name.last}`}
                                </IonLabel>
                            </IonCardTitle>
                            <IonCardSubtitle className="info-row">
                                <IonLabel>Age: {user.dob.age}</IonLabel>
                                <IonLabel>{user.location.country}</IonLabel>
                            </IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonLabel>
                                {user.email}
                            </IonLabel>
                        </IonCardContent>
                    </IonCard>
                ) : (
                    <p>No user data</p>
                )}
            </IonContent>
        </IonPage >
    );
};

export default UserDetail;
