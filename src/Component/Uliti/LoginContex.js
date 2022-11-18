import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

function LoginContextProviter({children}) {
    const [logged,setLogged] = useState(false)
    return(
        <LoginContext.Provider value={{logged,setLogged}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProviter