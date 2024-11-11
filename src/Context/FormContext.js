'use client';

import { createContext, useState } from 'react';

const defaultValues = {
  userData: {
    name: null,
    email: null,
    phone: null,
    service: null,
    heardAbout: null,
    size: null,
    location: null,
    postcode: null,
  },
};

export const UserDetailsContext = createContext(defaultValues);

export const UserDetailsProvider = ({ children }) => {
  const [userData, setUserData] = useState(defaultValues.userData);
  return (
    <UserDetailsContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDetailsContext.Provider>
  );
};
