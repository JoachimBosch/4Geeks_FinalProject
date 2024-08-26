import axios from "axios";
import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken_] = useState(localStorage.getItem("token"));

    const setToken = (newToken) => {
        setToken_(newToken);
        if (newToken) {
          localStorage.setItem('token', newToken);
        } else {
          localStorage.removeItem('token');
        }
      };

      axios.interceptors.response.use(
        (response) => {
          if (response.data && response.data.access_token) {
            const newAccessToken = response.data.access_token;
            localStorage.setItem('token', newAccessToken);
            axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          }
          return response;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      
  

      const contextValue = useMemo(
        () => ({
          token,
          setToken,
        }),
        [token]
      );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthProvider;