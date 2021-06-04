import React, { useContext, useState } from "react";

const UserContext = React.createContext([]);

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
};

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  return <UserContext.Provider value={[user, setUser]} {...props} />;
};

export { useUser, UserProvider };
