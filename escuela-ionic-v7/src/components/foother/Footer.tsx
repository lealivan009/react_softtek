import React from 'react';
import { IonFooter, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { mail, person, settings } from 'ionicons/icons';

const Footer: React.FC = () => {
    return (
        <IonFooter>
            <IonTabBar slot="bottom">
                <IonTabButton tab="contacts" href="/contacts">
                    <IonIcon aria-hidden="true" icon={person} />
                    <IonLabel>Contacts</IonLabel>
                </IonTabButton>
                <IonTabButton tab="posts" href="/posts">
                    <IonIcon aria-hidden="true" icon={mail} />
                    <IonLabel>Posts</IonLabel>
                </IonTabButton>
                <IonTabButton tab="settings" href="/settings">
                    <IonIcon aria-hidden="true" icon={settings} />
                    <IonLabel>Settings</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonFooter>
    );
};

export default Footer;
