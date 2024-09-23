// PrivateRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { validateToken } from '../api-client';

const PrivateRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await validateToken(); // Use validateToken to check authentication
                if (response && response.userId) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.log("Error during token validation", error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;