import { IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonPage } from '@ionic/react'
import Header from '../../components/header/Header'

const Capacitor: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent >
                <div>
                    <IonCard color='light'>
                        <IonHeader>
                            <IonCardTitle className='ion-text-center'>
                                Capacitor
                            </IonCardTitle>
                        </IonHeader>
                        <IonCardContent>
                            Aca se haran pruebas de capacitor
                        </IonCardContent>
                    </IonCard>
                </div>

            </IonContent>
        </IonPage>
    )
}

export default Capacitor
