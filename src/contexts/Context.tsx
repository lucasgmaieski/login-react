import React, { createContext, useState, useReducer } from "react";

type initialStateType = {
    theme: 
}
const initialState = {
    theme:
}

type ContextType = {
    // state: initialStateType;
    // dispatch: React.Dispatch<any>;
    countClickButton: number;
    setCountClickButton: 
}

// Context é a variavel que recebe o metodo createContext que cria o Provider e também permite consumir o Dados Globais
export const Context = createContext<ContextType>({
    
})


// Componente Provider para passar os valores para os Childrens
export const ContextProvider = ({children}: React.PropsWithChildren) => {
    // const [state, dispatch] = useReducer(mainReducer, initialState);
    const[countClickButton, setCountClickButton] = useState<number>(0)

    return (
        // como context recebe um método então ele tem acesso a função Provider
        <Context.Provider value={{ countClickButton, setCountClickButton}}>
            {children}
        </Context.Provider>
    );
}