import { reducerActionType } from "../types/reducerActionType";

export type ThemeType = {
    status: {
        theme: string,
        background: string,
        firstplan: string,
        txtsecundary: string,
        txtprimary: string
    }
}
export const themeInitialState: ThemeType = {
    status: {
        theme: 'light',
        background: '#fff',
        firstplan: '#fff',
        txtsecundary: '#acacac',
        txtprimary: '#262626'
    }
}
export const themeReducer = (state: ThemeType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_STATUS': 
            return {...state, status: action.payload.status}
            break;
    }
    return state;
}