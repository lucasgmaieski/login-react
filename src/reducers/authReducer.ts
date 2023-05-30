import { reducerActionType } from "../types/reducerActionType";

export type AuthType = {
    name: string;
    email: string;
    password: string;
    dateofbirth: FormData
}
export const authReducer = (state: AuthType , action: reducerActionType) => {
    
}