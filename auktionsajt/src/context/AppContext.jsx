import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ id: 1, name: "Test Användare", email: "test@example.com" });

  const logout = () => {
    setUser(null); 
  };

  return (
    <AppContext.Provider value={{ user, logout }}>
      {children}
    </AppContext.Provider>
  );
};
