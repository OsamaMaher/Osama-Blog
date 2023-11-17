import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const register = async (input) => {
    return await axios
      .post("register", input)
      .then((res) => setCurrentUser(res.data));
  };

  const login = async (input) => {
    return await axios
      .post("login", input)
      .then((res) => setCurrentUser(res.data));
  };

  const logout = async () => {
    await axios.post("logout").then((res) => {
      setCurrentUser(null);
    });
  };

  const auth = async () => {
    return await axios.post("auth").then((res) => setCurrentUser(res.data));
  };
  auth();
  return (
    <UserContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
