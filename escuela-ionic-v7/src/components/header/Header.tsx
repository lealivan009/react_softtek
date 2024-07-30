import { IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/react';
import './Header.css'; // Asegúrate de importar el archivo CSS

const Header = () => {
    return (
        <IonHeader >
            <IonToolbar color="primary"  >
                <IonImg
                    src="src/assets/assets/logo_osde.svg"
                    className="logo-img"
                />
            </IonToolbar>
        </IonHeader>
    );
}

export default Header;
