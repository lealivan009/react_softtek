import { IonContent, IonPage, IonList, IonItem, IonAvatar, IonCard, IonCardContent, IonSkeletonText } from "@ionic/react";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { getAllPerson } from "../../services/randomUserService";
import "./Contacs.css";
import { useHistory } from "react-router-dom";
import Footer from "../../components/foother/Footer";
import { getInLocalStorage } from "../../utilities";
import Refresher from "../../components/refresher/Refresher";

const Home: React.FC = () => {
    const [persons, setPersons] = useState<User[]>([]);
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();


    const fetchPersons = async (nro_personas: string) => {
        const data = await getAllPerson(nro_personas);
        setPersons(data);
        setLoaded(true);
    };

    useEffect(() => {
        const randomValue = Math.floor(Math.random() * 20) + 1;
        fetchPersons(randomValue.toString());
    }, []);

    const handleRefresh = (event: CustomEvent) => {
        //Activar refresher hasta que carguen las personas
        setLoaded(false);

        //Traer un numero aleatorio de personas de la api
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
                <Refresher onRefresh={handleRefresh} />

                {loaded && (
                    <IonCard>
                        <IonCardContent>
                            <IonList inset={true} lines="none">
                                {persons.map((person, index) => (
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
                                    </IonItem>
                                ))}
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                )}
                {!loaded && (
                    <SkeletonList numItem={10} />
                )}
            </IonContent>
        </IonPage>
    );
};

export default Home;



//Skeletor
interface skeletorProps {
    numItem: number;
}

const SkeletonList: React.FC<skeletorProps> = ({ numItem }) => {
    const skeletonItem = Array.from({ length: numItem });
    return (
        <>
            <IonCard >
                <IonCardContent>
                    <IonList inset={true} lines="none">
                        {skeletonItem.map(() => (
                            <IonItem>
                                <IonAvatar slot="start">
                                    <IonSkeletonText animated={true} style={{ width: '40px' }} />
                                </IonAvatar>
                                <div className="person-info">
                                    <IonSkeletonText animated={true} style={{ width: '60px' }} />
                                    <IonSkeletonText animated={true} style={{ width: '200px' }} />
                                </div>
                            </IonItem>
                        ))}
                    </IonList>
                </IonCardContent>
            </IonCard>
        </>
    )
}









