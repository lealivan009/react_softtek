import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/foother/Footer'

const ForgotPassword: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <Footer />
            <IonContent>
                Forgot your password?
            </IonContent>
        </IonPage>
    )
}

export default ForgotPassword
