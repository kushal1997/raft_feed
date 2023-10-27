import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuth';

const ProtectedRoute = ({ children }) => {
  const { user, logIn, logOut } = useUserAuth();

  if (!user) {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      return null;
    } else {
      return <Navigate to="/account/login" />;
    }
  }

  const expirationTime = user && user.expirationTime;
  const now = new Date().getTime();
  
  if (expirationTime && now >= expirationTime - 60000) {
    logIn(user.email, user.password)
      .then(() => {
        return children;
      })
      .catch(error => {
        console.error("Token refresh failed:", error);
        logOut(); 
        return <Navigate to="/account/login" />; 
      });
  } else {
    return children;
  }
};

export default ProtectedRoute;
