import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, reload, getUser } from "../config/user";

const UserContext = createContext();

export const UserContextProvider = ({
  children,
  initialState = { user: null, isLoading: true, error: null },
}) => {
  const [state, setState] = useState(initialState);

  // Listen to Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setState({ user, isLoading: false, error: null });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleReload = async () => {
    try {
      await reload();
      const user = getUser();
      setState({ user, isLoading: false, error: null });
    } catch (error) {
      setState({ user: null, isLoading: false, error });
    }
  };

  const value = {
    ...state,
    reload: handleReload,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  return userContext;
};
