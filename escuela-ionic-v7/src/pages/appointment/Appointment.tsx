import { IonButton, IonCard, IonCardContent, IonContent, IonDatetime, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/foother/Footer'

const Agenda: React.FC = () => {

    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedDoctor, setSelectedDoctor] = useState<string>('');
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
    const [showToast, setShowToast] = useState<boolean>(false);

    const handleReserve = () => {
        if (selectedDate && selectedDoctor && selectedSpecialty) {
            setShowToast(true);
        } else {
            alert('Por favor complete todos los campos.');
        }
    };

    return (
        <IonPage>
            <Header />
            <Footer />
            <IonContent color='light'>
                <IonCard>
                    <IonDatetime
                        locale="es-ES"
                        hourCycle="h23"
                        value={selectedDate}
                        onIonChange={e => setSelectedDate(e.detail.value!)}
                    />
                    <IonList>
                        <IonItem>
                            <IonLabel>Especialidad</IonLabel>
                            <IonSelect
                                value={selectedSpecialty}
                                placeholder="Seleccionar especialidad"
                                onIonChange={e => setSelectedSpecialty(e.detail.value)}
                            >
                                <IonSelectOption value="cardiologia">Cardiología</IonSelectOption>
                                <IonSelectOption value="dermatologia">Dermatología</IonSelectOption>
                                <IonSelectOption value="pediatria">Pediatría</IonSelectOption>
                                {/* Agrega más opciones según sea necesario */}
                            </IonSelect>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Médico</IonLabel>
                            <IonSelect
                                value={selectedDoctor}
                                placeholder="Seleccionar médico"
                                onIonChange={e => setSelectedDoctor(e.detail.value)}
                            >
                                <IonSelectOption value="drPerez">Dr. Pérez</IonSelectOption>
                                <IonSelectOption value="draGomez">Dra. Gómez</IonSelectOption>
                                <IonSelectOption value="drFernandez">Dr. Fernández</IonSelectOption>
                                {/* Agrega más opciones según sea necesario */}
                            </IonSelect>
                        </IonItem>
                        <IonCardContent>
                            <IonButton slot="center" expand="full" onClick={handleReserve} >Confirmar Reserva</IonButton>

                        </IonCardContent>
                    </IonList>

                </IonCard>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message="Turno reservado con éxito!"
                    duration={2000}
                />
            </IonContent>
        </IonPage >
    );
};

export default Agenda;