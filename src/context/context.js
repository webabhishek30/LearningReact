import { createContext, useContext, useState } from "react";

// STEP 1 : CREATE CONTEXT
const NameContext = createContext();

// STEP 2 : PROVIDER
export const NameProvider = ({children}) => {
    const [name, setName] = useState("Devki");
    return <NameContext value={{name, setName}}>{children}</NameContext>
}

// STEP 3 : CUSTOM HOOK
export const useNameHook = () => useContext(NameContext);