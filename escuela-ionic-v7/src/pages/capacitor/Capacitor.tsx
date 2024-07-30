import { IonCard, IonCardContent, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage } from '@ionic/react'
import Header from '../../components/header/Header'
import Footer from '../../components/foother/Footer'
import { camera } from 'ionicons/icons'
import { useState } from 'react'
import { Camera, CameraResultType } from '@capacitor/camera';

const Capacitor: React.FC = () => {
    const [image, setImage] = useState<string>('');

    const takePicture = async () => {
        try {
            const photo = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            });
            setImage(photo.webPath || '');
            console.log(photo.webPath);
        } catch (error) {
            console.error('Error taking photo', error);
        }
    }


    return (
        <IonPage>
            <Header />
            <Footer />
            <IonContent >
                {
                    image !== ''
                        ? <img src={image} alt="Captured" />
                        : <p>Take a picture</p>
                }
                <IonFab vertical='bottom' horizontal='center' slot='fixed'>
                    <IonFabButton onClick={() => takePicture()}>
                        <IonIcon icon={camera} ></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}

export default Capacitor
