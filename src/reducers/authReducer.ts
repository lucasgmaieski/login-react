import { reducerActionType } from "../types/reducerActionType";

type Users = {
    name: string;
    email: string;
    password: string;
    dateofbirth: string
}
export type AuthType = {
    users: Users[];
    logged: boolean;
    userLogged: string
}
export const authInitialState = {
    users: [
        {
            name: 'Admin',
            email: 'admin@admin.com',
            password: '123456',
            dateofbirth: '13121996'
        }
    ],
    logged: false,
    userLogged: ''

}
export const authReducer = (state: AuthType , action: reducerActionType) => {
    switch (action.type) {
        case 'ADD_USER':
            const userExists = state.users.map((user) => (
                user.email === action.payload.users[0].email
            ));

            const newUser = {...state};
            if(userExists.includes(true)) {
                console.log('usuario já existe');
                console.log(state);
                return state;
            } else {
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
            const auxState = {...state};
            state.users.forEach(user => {
                if(user.email === action.payload.users[0].email && user.email !== '') {
                    if(user.password === action.payload.users[0].password && user.password !== '') {
                        state.logged = true;
                        state.userLogged = action.payload.users[0].email;
                        return {...state};
                    } else {
                        state.logged = false;
                        state.userLogged = '';
                        return {...state};
                    }
                }
            });
            return {...state};

        case 'LOGOUT_USER':
            state.logged = false;
            state.userLogged = '';
            return {...state};
        default:
            return state;
    }
}