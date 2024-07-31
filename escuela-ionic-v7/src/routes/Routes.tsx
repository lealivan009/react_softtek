import React from "react";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { mail, person, settings } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import Posts from "../pages/posts/Posts";
import Settings from "../pages/settings/Settings";
import UserDetail from "../pages/userDetail/UserDetail";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Capacitor from "../pages/capacitor/Capacitor";
import Contacts from "../pages/contacts/Contacts";
import AuthCheck from "../security/AuthCheck";
import ForgetPassword from "../pages/forgetPassword/ForgotPassword";
import Capacitor1 from "../pages/capacitor1/Capacitor1";

const Routes: React.FC = () => {
    //const username = localStorage.getItem("username");

    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <AuthCheck>
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/user" component={UserDetail} />
                    <Route exact path="/posts" component={Posts} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/forgotpassword" component={ForgetPassword} />
                    <Route path="/capacitor" component={Capacitor1} />
                    <Redirect exact from="/" to="/contacts" />
                </AuthCheck>
            </IonRouterOutlet>
        </IonReactRouter>
    );
};

export default Routes;