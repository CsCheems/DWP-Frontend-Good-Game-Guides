import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [openLoginModal, setOpenLoginModal] = useState(false); // Estado para controlar el modal de login
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = JSON.parse(atob(token.split(".")[1]));
      setUser(userData);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  const openLoginModalHandler = () => setOpenLoginModal(true);
  const closeLoginModalHandler = () => setOpenLoginModal(false);

  return (
    <AuthContext.Provider value={{
      user, 
      setUser, 
      logout, 
      openLoginModal, 
      setOpenLoginModal,
      openLoginModalHandler, 
      closeLoginModalHandler
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
