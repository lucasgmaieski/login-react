import React, { createContext, useReducer } from "react";
import { reducerActionType } from "../types/reducerActionType";
import { themeInitialState, ThemeType, themeReducer } from '../reducers/themeReducer';

type initialStateType = {
    theme: ThemeType;
}
type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    theme: themeInitialState
}
// Context é a variavel que recebe o metodo createContext que cria o Provider e também permite consumir o Dados Globais
export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

//mainReducer ao invés de executar uma função como é o de costume vai chamar uma das funções dos reducers que realmente fazem uma ação
const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    theme: themeReducer(state.theme, action)
});

// Componente Provider para passar os valores para os Childrens
export const ContextProvider = ({children}: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    
    return (
        // como context recebe um método então ele tem acesso a função Provider
        <Context.Provider value={{ state, dispatch}}>
            {children}
        </Context.Provider>
    );
}