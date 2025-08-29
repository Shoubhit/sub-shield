import React, { createContext, useEffect, useState, useContext } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebaseConfig";

type Ctx = { user: User | null; loading: boolean };
const AuthContext = createContext<Ctx>({ user: null, loading: true });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => { setUser(u); setLoading(false); });
    return unsub;
  }, []);
  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
