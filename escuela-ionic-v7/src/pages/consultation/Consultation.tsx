import { IonPage, IonContent, IonCol, IonGrid, IonRow } from '@ionic/react'
import React from 'react'
import Footer from '../../components/foother/Footer'
import Header from '../../components/header/Header'

const Consultation: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent color='light' >
                <IonGrid>
                    <IonRow>
                        <IonCol sizeLg='4' sizeSm='12' offsetLg='4'>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <Footer />
        </IonPage>
    )
}

export default Consultation
