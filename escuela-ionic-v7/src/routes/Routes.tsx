import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import Posts from "../pages/posts/Posts";
import Settings from "../pages/settings/Settings";
import UserDetail from "../pages/userDetail/UserDetail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Contacts from "../pages/contacts/Contacts";
import AuthCheck from "../security/AuthCheck";
import ForgetPassword from "../pages/forgetPassword/ForgotPassword";
import Capacitor from "../pages/capacitor/Capacitor";
import home from "../pages/home/home";
import Help from "../pages/help/Help";
import Profile from "../pages/profile/Profile";
import Consultation from "../pages/consultation/Consultation";
import Payments from "../pages/payments/Payments";
import Appointment from "../pages/appointment/Appointment";
import ChangePassword from "../pages/changePassword/ChangePassword";

const Routes: React.FC = () => {
    //const username = localStorage.getItem("username");

    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <AuthCheck>
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/user" component={UserDetail} />
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/forgotpassword" component={ForgetPassword} />
                    <Route exact path="/capacitor" component={Capacitor} />
                    <Route exact path="/home" component={home} />
                    <Route exact path="/appointment" component={Appointment} />
                    <Route exact path="/help" component={Help} />
                    <Route exact path="/payments" component={Payments} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/consultation" component={Consultation} />
                    <Route exact path="/changePassword" component={ChangePassword} />
                    <Redirect exact from="/" to="/home" />
                </AuthCheck>
            </IonRouterOutlet>
        </IonReactRouter>
    );
};

export default Routes;