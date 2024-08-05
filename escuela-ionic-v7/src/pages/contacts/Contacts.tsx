import { IonContent, IonPage, IonRefresher, IonRefresherContent, IonList, IonItem, IonAvatar, IonCard, IonHeader, IonLabel, IonCardHeader, IonCardContent, IonBadge } from "@ionic/react";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { chevronDownCircleOutline, informationCircleOutline } from "ionicons/icons";
import { getAllPerson } from "../../services/randomUserService";
import "./Contacs.css";
import { useHistory } from "react-router-dom";
import Footer from "../../components/foother/Footer";
import { getInLocalStorage } from "../../utilities";

const Home: React.FC = () => {
    const [persons, setPersons] = useState<User[]>([]);
    const history = useHistory();

    const user = getInLocalStorage('email');

    const fetchPersons = async (nro_personas: string) => {
        const data = await getAllPerson(nro_personas);
        setPersons(data);
    };

    useEffect(() => {
        const randomValue = Math.floor(Math.random() * 20) + 1;
        fetchPersons(randomValue.toString());

    }, []);

    const handleRefresh = (event: CustomEvent) => {
        const randomValue = Math.floor(Math.random() * 20) + 1;
        fetchPersons(randomValue.toString()).then(() => {
            console.log("Datos actualizados");
            event.detail.complete();
        });
    };

    const handleItemClick = (user: User) => {
        history.push({
            pathname: "/user",
            state: { user },
        });
    };

    return (
        <IonPage>
            <Header />
            <Footer />
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent
                        pullingIcon={chevronDownCircleOutline}
                        pullingText="Pull to refresh"
                        refreshingSpinner="circles"
                        refreshingText="Refreshing..."
                    ></IonRefresherContent>
                </IonRefresher>
                <IonCard>
                    <IonCardHeader className="ion-text-center">
                        <strong>Welcome {user}!</strong>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList inset={true} lines="none">
                            {persons.map((person) => (
                                <IonItem
                                    key={person.id.value || person.login.uuid}
                                    button
                                    onClick={() => handleItemClick(person)}
                                >
                                    <IonAvatar slot="start">
                                        <img alt={person.name.first} src={person.picture.thumbnail} />
                                    </IonAvatar>
                                    <div className="person-info">
                                        <h4>{person.name.first}</h4>
                                        <p>{person.email}</p>
                                    </div>
                                    <IonBadge slot="end">11</IonBadge>
                                </IonItem>
                            ))}
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Home;
