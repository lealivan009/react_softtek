import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, IonIcon, IonSkeletonText, IonAlert } from "@ionic/react"
import { copy, shareSocial } from "ionicons/icons"

interface cardSocioProp {
    name: string,
    numberCard: string,
    plan: string,
    cartilla: string,
    color: string
}

export const CardSocio: React.FC<cardSocioProp> = ({ name, numberCard, plan, cartilla, color }) => {
    return (
        <IonCard color={color} style={{ width: '90%', height: '200px' }}>
            <IonCardHeader>
                <IonCardTitle style={{ textAlign: 'left' }}>
                    <strong>{name}</strong>
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonCardSubtitle>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <strong>{numberCard}</strong>
                        <IonButton fill='clear' color='light' >
                            <IonIcon slot="icon-only" icon={copy} size='small' />
                        </IonButton>
                    </div>
                </IonCardSubtitle>
                <IonCardSubtitle style={{ textAlign: 'left' }}>
                    <strong>Plan: </strong>{plan}
                </IonCardSubtitle>
                <IonCardSubtitle style={{ textAlign: 'left' }}>
                    <strong>Scope: </strong>{cartilla}
                </IonCardSubtitle>
                <div className="card-content">
                    <IonButton id={name} slot='end' fill="clear" color="light"  >
                        <strong>Generate token </strong>
                        <IonIcon icon={shareSocial} />
                    </IonButton>
                    <IonAlert
                        trigger={name}
                        message="Token generated successfully"
                        buttons={['Understood']}
                    ></IonAlert>
                </div>
            </IonCardContent>
        </IonCard>
    )
}

export const CardSocioSkeletor: React.FC = () => {
    return (
        <IonCard color='primary' style={{ width: '90%', height: '200px' }}>
            <IonCardHeader>
                <IonCardTitle style={{ textAlign: 'left' }}>
                    <IonSkeletonText animated={true} style={{ width: '200px', height: '25px' }} />
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonCardSubtitle>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IonSkeletonText animated={true} style={{ width: '200px', height: '20px', margin: '0px 0px 10px 0px' }} />
                    </div>
                </IonCardSubtitle>
                <IonCardSubtitle style={{ textAlign: 'left' }}>
                    <IonSkeletonText animated={true} style={{ width: '80px', height: '15px' }} />
                </IonCardSubtitle>
                <IonCardSubtitle style={{ textAlign: 'left' }}>
                    <IonSkeletonText animated={true} style={{ width: '80px', height: '15px' }} />
                </IonCardSubtitle>
            </IonCardContent>
        </IonCard>
    )
}