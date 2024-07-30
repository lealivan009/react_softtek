import { IonContent, IonItem, IonLabel, IonList, IonPage, IonCard, IonSearchbar, IonIcon, IonToggle, IonButton } from "@ionic/react";
import React from "react";
import Header from "../../components/header/Header";
import './Settings.css';
import { accessibility, airplane, bluetooth, build, cellular, hourglass, keypad, list, logIn, logoCapacitor, logOut, moon, notifications, personAdd, radio, sunny, volumeHigh, warning, wifi } from "ionicons/icons";
import Footer from "../../components/foother/Footer";
import { removeFromLocalStorage } from "../../utilities";
import { useHistory } from "react-router-dom";

const Settings: React.FC = () => {
    const history = useHistory();

    const handleLogOut = () => {
        removeFromLocalStorage('email');
        history.push('/login');
    }

    return (
        <IonPage>
            <Header />
            <Footer />
            <IonContent color="light">
                <div className="settings-container">
                    <IonSearchbar showCancelButton="focus" placeholder="Search" ></IonSearchbar>
                    <IonCard className="settings-card">
                        <IonList inset={true}>
                            <IonItem>
                                <div className="icon warning-background">
                                    <IonIcon slot="start" icon={airplane} color="light" />
                                </div>
                                <IonLabel>Airplane Mode</IonLabel>
                                <IonToggle slot="end" color={"success"} />
                            </IonItem>

                            <IonItem button>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={wifi} color="light" />
                                </div>
                                <IonLabel>Wifi</IonLabel>
                                <div className="end-label">
                                    <IonLabel>Leal</IonLabel>
                                </div>
                            </IonItem>

                            <IonItem button>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={bluetooth} color="light" />
                                </div>
                                <IonLabel>Bluetooth</IonLabel>
                                <div className="end-label">
                                    <IonLabel>On</IonLabel>
                                </div>
                            </IonItem>

                            <IonItem button>
                                <div className="icon success-background">
                                    <IonIcon slot="start" icon={cellular} color="light" />
                                </div>
                                <IonLabel>Cellular</IonLabel>
                            </IonItem>

                            <IonItem button>
                                <div className="icon success-background">
                                    <IonIcon slot="start" icon={radio} color="light" />
                                </div>
                                <IonLabel>Personal Hotspot</IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCard>

                    <IonCard className="settings-card">
                        <IonList inset={true}>
                            <IonItem button>
                                <div className="icon danger-background">
                                    <IonIcon slot="start" icon={notifications} color="light" />
                                </div>
                                <IonLabel>Notifications</IonLabel>
                            </IonItem>

                            <IonItem button>
                                <div className="icon danger-background">
                                    <IonIcon slot="start" icon={volumeHigh} color="light" />
                                </div>
                                <IonLabel>Sounds & Haptics</IonLabel>
                            </IonItem>

                            <IonItem button>
                                <div className="icon tertiary-background">
                                    <IonIcon slot="start" icon={moon} color="light" />
                                </div>
                                <IonLabel>Focus</IonLabel>
                            </IonItem>

                            <IonItem button>
                                <div className="icon tertiary-background">
                                    <IonIcon slot="start" icon={hourglass} color="light" />
                                </div>
                                <IonLabel>Screen Time</IonLabel>
                            </IonItem>

                        </IonList>
                    </IonCard>

                    <IonCard className="settings-card">
                        <IonList inset={true}>
                            <IonItem button>
                                <div className="icon medium-background">
                                    <IonIcon slot="start" icon={build} color="light" />
                                </div>
                                <IonLabel>General</IonLabel>
                            </IonItem>
                            <IonItem button>
                                <div className="icon medium-background">
                                    <IonIcon slot="start" icon={list} color="light" />
                                </div>
                                <IonLabel>Control Center</IonLabel>
                            </IonItem>
                            <IonItem button>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={sunny} color="light" />
                                </div>
                                <IonLabel>Display & Brightness</IonLabel>
                            </IonItem>
                            <IonItem button>
                                <div className="icon primary-background">
                                    <IonIcon slot="start" icon={accessibility} color="light" />
                                </div>
                                <IonLabel>Accessibility</IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCard>

                    <IonCard className="settings-card">
                        <IonList inset={true}>
                            {/* 
                             <IonItem button routerLink="/register">
                                <div className="icon success-background">
                                    <IonIcon slot="start" icon={personAdd} color="light" />
                                </div>
                                <IonLabel>Register</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/login">
                                <div className="icon success-background">
                                    <IonIcon slot="start" icon={logIn} color="light" />
                                </div>
                                <IonLabel>Log in</IonLabel>
                            </IonItem>
                            */}
                            <IonItem button onClick={handleLogOut}>
                                <div className="icon danger-background">
                                    <IonIcon slot="start" icon={logOut} color="light" />
                                </div>
                                <IonLabel>Log out</IonLabel>
                            </IonItem>
                            <IonItem button routerLink="/capacitor">
                                <div className="icon warning-background">
                                    <IonIcon slot="start" icon={logoCapacitor} color="light" />
                                </div>
                                <IonLabel>Capacitor</IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCard>
                </div>
            </IonContent >
        </IonPage >
    );
}

export default Settings;
