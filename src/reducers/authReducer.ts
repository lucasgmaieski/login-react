import { reducerActionType } from "../types/reducerActionType";

export type AuthType = {
    users:[
        {
            name: string;
            email: string;
            password: string;
            dateofbirth: FormData
        }
    ]
    auth: boolean
}
export const AuthinitialState = {
    users: [
        {
            name: '',
            email: '',
            password: '',
            dateofbirth: ''
        }
    ],
    auth: false
}
export const authReducer = (state: AuthType , action: reducerActionType) => {
    switch (action.type) {
        case 'ADD_USER':
            const newUser = {}
            //verificar se o usuario já existe
            state.users.map()

            //adicionar caso ainda não exista
            return {...state, newUser}
            break;
        case 'AUTH_USER':
            //se o email e senha baterem 
            return {...state, auth: true};
            
            //se não
            return {...state, auth: false};
            break;
        default:
            return state;
    }
}