import { Context } from '../contexts/Context';
import { useContext } from 'react';
import * as C from '../styles';

export const Contact = () => {
    const {state} = useContext(Context);
    return (
        <C.ContainerInternal state={state.theme}>
            <h1>Fale conosco</h1>
            <p>formulario de contato</p>
        </C.ContainerInternal>
    );
}