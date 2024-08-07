import { IonCard, IonCol, IonContent, IonGrid, IonList, IonPage, IonRow, IonSearchbar } from "@ionic/react"
import React from "react"
import "./Posts.css"
import Footer from "../../components/foother/Footer";
import Header from "../../components/header/Header";
import MailUnread from "./mailUnread/MailUnread";
import MailOpen from "./mailOpen/MailOpen";


const Posts: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <Footer />
            <IonContent color="light">
                <IonGrid>
                    <IonRow>
                        <IonCol sizeLg='10' sizeSm='12' offsetLg='1'>
                            <div className="settings-container">
                                <IonSearchbar showCancelButton="focus" placeholder="Search" ></IonSearchbar>
                                <IonCard className="settings-card">
                                    <IonList inset={true} >
                                        <Mails />
                                    </IonList>
                                </IonCard>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default Posts;

const Mails: React.FC = () => {
    return (
        <>
            <MailUnread subject="Meeting Reminder" email="Don't forget the meeting today." hora="09:30" />
            <MailUnread subject="Project Update" email="The project deadline is next week." hora="14:45" />
            <MailUnread subject="Weekly Report" email="Submit your report by Friday." hora="11:00" />
            <MailUnread subject="Discount Offer" email="Get 20% off on all items today." hora="16:20" />
            <MailUnread subject="Travel Itinerary" email="Your flight details are attached." hora="08:15" />
            <MailOpen subject="Lunch Invitation" email="Join us for lunch at 1 PM." hora="15:20" />
            <MailOpen subject="Invoice Due" email="Your invoice is due tomorrow." hora="10:30" />
            <MailOpen subject="Job Opportunity" email="A new position has opened up." hora="19:30" />
            <MailOpen subject="Newsletter" email="This month's edition is now available." hora="20:30" />
            <MailOpen subject="Appointment Confirmation" email="Your appointment is confirmed for Monday." hora="20:30" />
            <MailUnread subject="Password Reset" email="Click here to reset your password." hora="13:05" />
            <MailOpen subject="Welcome to the Team" email="We're excited to have you onboard." hora="22:30" />
            <MailUnread subject="Event RSVP" email="Please RSVP by the end of the week." hora="19:45" />
            <MailOpen subject="Subscription Renewal" email="Your subscription renews next month." hora="21:30" />
            <MailUnread subject="Feedback Request" email="We'd love to hear your thoughts." hora="17:30" />
            <MailOpen subject="Photo Album" email="Check out the latest photos." hora="22:40" />
            <MailUnread subject="Birthday Reminder" email="Don't forget to wish John a happy birthday." hora="10:50" />
        </>
    )
}
