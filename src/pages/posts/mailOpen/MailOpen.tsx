import { IonItem, IonIcon, IonLabel } from "@ionic/react";
import { mailOpen } from "ionicons/icons";
import '../Posts.css';

interface PropMail {
    subject: string,
    email: string
    hora?: string
}

const MailUnread: React.FC<PropMail> = ({ subject, email, hora }) => {
    return (
        <IonItem>
            <div className="mail"  >
                <div className="content" >
                    <div className="icon">
                        <IonIcon slot="start" icon={mailOpen} color="dark" size="large" />
                    </div>
                    <IonLabel>
                        <h3>{subject}:</h3>
                        <p>{email}</p>
                    </IonLabel>
                </div>
                <IonLabel>
                    <h4>{hora}</h4>
                </IonLabel>
            </div>
        </IonItem >
    );
}
export default MailUnread;