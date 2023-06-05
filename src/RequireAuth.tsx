import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from './contexts/Context';

type Props = {
    children: JSX.Element
}
export const RequireAuth = ({children}: Props) => {
    const {state} = useContext(Context);

    if(!state.authentication.logged) {
        return <Navigate to="/login" />;
    }
    return children;
}