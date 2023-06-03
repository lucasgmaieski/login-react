import { reducerActionType } from "../types/reducerActionType";

type Users = {
    name: string;
    email: string;
    password: string;
    dateofbirth: string
}
export type AuthType = {
    users: Users[];
    auth: boolean
}
export const authInitialState = {
    users: [
        {
            name: 'lu',
            email: 'lu@cas.com',
            password: '123',
            dateofbirth: '13121996'
        }
    ],
    auth: false
}
export const authReducer = (state: AuthType , action: reducerActionType) => {
    switch (action.type) {
        case 'ADD_USER':
            console.log('name enviado: ' + action.payload.users[0].name);
            //verificar se o usuario já existe
            const userExists = state.users.map((user) => (
                user.email === action.payload.users.email
            ));
            const newUser = {...state};
            if(userExists.includes(true)) {
                console.log('usuario já existe');
                console.log(state);
                return state;
            } else {
                console.log('ta entrando aqui e não existe esse usuario ainda');
                newUser.users.push({
                    name: action.payload.users[0].name,
                    email: action.payload.users[0].email,
                    password: action.payload.users[0].password,
                    dateofbirth: action.payload.users[0].dateofbirth,
                });
            }

            //adicionar caso ainda não exista
            return {...state, users:newUser.users}

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