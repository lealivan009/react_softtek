import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import './UserDetail.css';
import Footer from "../../components/foother/Footer";
import { logoFacebook, logoInstagram, logoTwitter, logoX, menuOutline } from "ionicons/icons";

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
                            <IonCardTitle className="ion-text-center">
                                <IonLabel>
                                    {`${user.name.first} ${user.name.last} (${user.dob.age})`}
                                </IonLabel>
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <div className="user-info">
                                <IonLabel>
                                    <h2><strong>Email:</strong> {`${user.email}`}</h2>
                                    <h2><strong>Phone: </strong>{`${user.cell}`}</h2>
                                </IonLabel>
                            </div>
                            <div className="user-location">
                                <IonLabel>
                                    <h2><strong>Address: </strong>{`${user.location.street.name} ${user.location.street.number}`}</h2>
                                    <h2><strong>City: </strong>{`${user.location.city}, ${user.location.country}`}</h2>
                                    <h2><strong>Postcode: </strong>{`${user.location.postcode}`}</h2>
                                </IonLabel>
                            </div>
                            <div className="user-detail">
                                <IonLabel>
                                    <h2><i>"I love spending time playing sports with friends, as it keeps me active and social. Additionally, I enjoy going out for dinner, as it's a great way to unwind and enjoy good food."</i></h2>
                                </IonLabel>
                            </div>
                            <div className="user-button">
                                <IonButton className="user-icon" color='dark'>
                                    <IonIcon slot="icon-only" icon={logoFacebook} />
                                </IonButton>
                                <IonButton className="user-icon" color='dark'>
                                    <IonIcon slot="icon-only" icon={logoInstagram} />
                                </IonButton>
                                <IonButton className="user-icon" color='dark'>
                                    <IonIcon slot="icon-only" icon={logoX} />
                                </IonButton>
                            </div>
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
