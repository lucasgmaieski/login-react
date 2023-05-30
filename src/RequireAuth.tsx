import { Navigate } from 'react-router-dom';

type Props = {
    children: JSX.Element
}
export const RequireAuth = ({children}: Props) => {
    const isAuth = true;
    if(!isAuth) {
        console.log("ta entrando aqui ");
        return <Navigate to="/login" />;
    } 
    console.log('ta aqui fora do if');
    return children;
}