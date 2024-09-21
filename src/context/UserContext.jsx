import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const handleRegister = (email, password) => {
    setUser({ email, password });
  };
  const [token, setToken] =useState(true)
  const navigate = useNavigate();

  const logout = ()=>{
   setToken(false)
   navigate("/")
  }

return (
  <UserContext.Provider
    value={{
      user,
      setUser,
      handleRegister,
      logout,
      token, 
      setToken
    }}
  >
    {children}
  </UserContext.Provider>
);
}
export default UserProvider;