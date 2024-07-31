import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem } from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Share } from '@capacitor/share';
import { Network } from '@capacitor/network';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Clipboard } from '@capacitor/clipboard';
import { Browser } from '@capacitor/browser';

//npm install @capacitor/core @capacitor/cli @capacitor/camera @capacitor/geolocation @capacitor/filesystem @capacitor/local-notifications @capacitor/share @capacitor/network @capacitor/storage @capacitor/haptics @capacitor/clipboard @capacitor/browser


const Capacitor1: React.FC = () => {

    const takePhoto = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri
        });
        const imageUrl = image.webPath;
        console.log('Photo taken:', imageUrl);
    };

    const getCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current position:', coordinates);
    };

    const writeFile = async () => {
        await Filesystem.writeFile({
            path: 'secrets/text.txt',
            data: 'This is a secret text',
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
        });
    };

    const readFile = async () => {
        const contents = await Filesystem.readFile({
            path: 'secrets/text.txt',
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
        });
        console.log('File contents:', contents.data);
    };

    const scheduleNotification = async () => {
        await LocalNotifications.schedule({
            notifications: [
                {
                    title: "Title",
                    body: "Notification body",
                    id: 1,
                    schedule: { at: new Date(Date.now() + 1000 * 5) },
                    sound: null,
                    attachments: null,
                    actionTypeId: "",
                    extra: null,
                },
            ],
        });
    };

    const shareContent = async () => {
        await Share.share({
            title: 'See cool stuff',
            text: 'Really awesome thing you need to see right meow',
            url: 'http://ionicframework.com/',
            dialogTitle: 'Share with buddies',
        });
    };

    const checkNetworkStatus = async () => {
        const status = await Network.getStatus();
        console.log('Network status:', status);
    };


    const triggerVibration = async () => {
        await Haptics.impact({ style: ImpactStyle.Heavy });
    };

    const writeToClipboard = async () => {
        await Clipboard.write({
            string: "Hello World!"
        });
    };

    const readFromClipboard = async () => {
        const { value } = await Clipboard.read();
        console.log('Clipboard content:', value);
    };

    const openUrl = async () => {
        await Browser.open({ url: 'http://capacitorjs.com/' });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Capacitor Examples</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonButton expand="full" onClick={takePhoto}>Take Photo</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" onClick={getCurrentPosition}>Get Current Position</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" onClick={writeFile}>Write File</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" onClick={readFile}>Read File</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" onClick={scheduleNotification}>Schedule Notification</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" onClick={shareContent}>Share Content</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" onClick={checkNetworkStatus}>Check Network Status</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" onClick={triggerVibration}>Trigger Vibration</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" onClick={writeToClipboard}>Write to Clipboard</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" onClick={readFromClipboard}>Read from Clipboard</IonButton>
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full" onClick={openUrl}>Open URL</IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Capacitor1;
