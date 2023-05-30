import { useContext } from 'react';
import * as C from './styles';
import { Context } from '../../contexts/Context';


export const Footer = () => {
    const {state} = useContext(Context)
    return (
        <C.Footer state={state.theme}>
            LLTech &copy; Todos os direitos reservados
        </C.Footer>
    );
}