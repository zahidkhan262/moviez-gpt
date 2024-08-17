import React, { createContext, useContext, useState } from 'react'

type AuthContextType = {
  handleSetAuth: (user: string | any) => void;
  auth: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);



export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<any>();

  const handleSetAuth = (user: any) => {
    setAuth(user);
  }

  const value: AuthContextType = {
    handleSetAuth,
    auth
  }


  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
