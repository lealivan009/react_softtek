import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonImg, IonIcon } from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Network } from '@capacitor/network';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Browser } from '@capacitor/browser';
import { wifi, warningOutline } from 'ionicons/icons';
import { PluginListenerHandle } from '@capacitor/core';

import './Capacitor.css';

//npm install @capacitor/core @capacitor/cli @capacitor/camera @capacitor/geolocation @capacitor/filesystem @capacitor/local-notifications @capacitor/share @capacitor/network @capacitor/storage @capacitor/haptics @capacitor/clipboard @capacitor/browser


const Capacitor1: React.FC = () => {

    const [photo, setPhoto] = useState<string>('');
    const [position, setPosition] = useState<Position>();
    const [isOnline, setIsOnline] = useState<boolean>(true);

    useEffect(() => {
        const checkNetworkStatus = async () => {
            const status = await Network.getStatus();
            setIsOnline(status.connected);
        };

        checkNetworkStatus();

        let networkListener: PluginListenerHandle;

        const addNetworkListener = async () => {
            networkListener = await Network.addListener('networkStatusChange', (status) => {
                setIsOnline(status.connected);
            });
        };

        addNetworkListener();

        return () => {
            if (networkListener) {
                networkListener.remove();
            }
        };
    }, []);


    const takePhoto = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri
        });
        const imageUrl = image.webPath;
        setPhoto(imageUrl || '');
        console.log('Photo taken:', imageUrl);
    };

    const getCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        setPosition(coordinates);
        console.log('Current position:', coordinates);
    };

    const triggerVibration = async () => {
        await Haptics.impact({ style: ImpactStyle.Heavy });
    };

    const openUrl = async () => {
        await Browser.open({ url: 'http://capacitorjs.com/' });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className='ion-text-center'>Capacitor</IonTitle>
                    <IonIcon
                        slot="end"
                        icon={isOnline ? wifi : warningOutline}
                        color={isOnline ? 'success' : 'danger'}
                        style={{ marginRight: '10px' }}
                    />
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <div className="divIonItem" >
                            <IonButton expand="full" onClick={takePhoto}>Take Photo</IonButton>
                            {photo !== ''
                                ? <IonImg src={photo} style={{ height: '300px' }} />
                                : ''}
                        </div>
                    </IonItem>
                    <IonItem>
                        <div className='divIonItem'>
                            <IonButton expand="full" onClick={getCurrentPosition}>Get Current Position</IonButton>
                            {position && (
                                <div>
                                    <p>Latitude: {position.coords.latitude}</p>
                                    <p>Longitude: {position.coords.longitude}</p>
                                    <p>Accuracy: {position.coords.accuracy}</p>
                                </div>
                            )}
                        </div>
                    </IonItem>
                    <IonItem>
                        <div className='divIonItem'>
                            <IonButton expand="full" onClick={triggerVibration}>Trigger Vibration</IonButton>
                        </div>
                    </IonItem>
                    <IonItem>
                        <div className='divIonItem'>
                            <IonButton expand="full" onClick={openUrl}>Open URL</IonButton>
                        </div>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Capacitor1;
