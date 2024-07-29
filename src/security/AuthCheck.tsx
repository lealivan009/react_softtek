import React, { useEffect, ReactNode } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface AuthCheckProps {
    children: ReactNode;
}

const AuthCheck: React.FC<AuthCheckProps> = ({ children }) => {
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const email = localStorage.getItem('email');
        const publicPaths = ['/login', '/forgotpassword', '/register'];
        if (!email && !publicPaths.includes(location.pathname)) {
            history.push('/login');
        }
    }, [history, location]);

    return <>{children}</>;
};

export default AuthCheck;
