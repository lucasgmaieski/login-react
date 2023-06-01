import { reducerActionType } from "../types/reducerActionType";

export type AuthType = {
    users:{
            name: string;
            email: string;
            password: string;
            dateofbirth: FormData
    }[];
    
    auth: boolean
}
export const AuthInitialState = {
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
            const userExists = state.users.map((user) => (
                user.email === action.payload.users.email
            ));
            if(userExists.includes(true)) {
                return state;
            } else {
                
            }
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