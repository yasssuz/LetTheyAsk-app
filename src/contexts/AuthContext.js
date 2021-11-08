import { createContext, useEffect, useState } from "react";

import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "@firebase/auth";
import { auth } from "../services/firebase.config";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function handleSignIn() {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);

    if (!res.user.displayName || !res.user.photoURL)
      throw new Error("missing google information");

    const formattedUser = {
      name: res.user.displayName,
      avatar: res.user.photoURL,
      id: res.user.uid,
    };

    setUser(formattedUser);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user.displayName || !user.photoURL)
        throw new Error("missing google information");

      const formattedUser = {
        name: user.displayName,
        avatar: user.photoURL,
        id: user.uid,
      };

      setUser(formattedUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
