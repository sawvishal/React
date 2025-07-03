import React, { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, sestUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, sestUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
