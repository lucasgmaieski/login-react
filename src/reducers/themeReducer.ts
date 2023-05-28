import { reducerActionType } from "../types/reducerActionType";

export type ThemeType = {
    status: 'dark' | 'light';
}
export const themeInitialState: ThemeType = {
    status: 'light'
}
export const themeReducer = (state: ThemeType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_STATUS':
            if(state.status === 'dark') {
                return {...state, status: 'light'}
            } else {
                return {...state, status: 'dark'}
            }
            break;
    }
    return state;
}