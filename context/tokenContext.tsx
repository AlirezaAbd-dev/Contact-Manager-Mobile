import React, { ReactNode, createContext, useState } from 'react';

type TokenContextType = {
   token: string | null;
   setToken: (token: string | null) => void;
};

export const TokenContext = createContext<TokenContextType>({
   token: null,
   setToken: () => {},
});

export const TokenContextProvider = ({ children }: { children: ReactNode }) => {
   const [token, setToken] = useState<string | null>(null);

   function changeToken(token: string | null) {
      setToken(token);
   }

   return (
      <TokenContext.Provider value={{ token, setToken: changeToken }}>
         {children}
      </TokenContext.Provider>
   );
};
