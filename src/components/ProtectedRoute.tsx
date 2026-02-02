import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children, isLoggedIn}: {children: any, isLoggedIn: boolean}) {
    if(!isLoggedIn) return <Navigate to="/login" replace state={{from: location.pathname}}/>
    return children;
}