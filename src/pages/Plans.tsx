import { Context } from '../contexts/Context';
import { useContext } from 'react';
import * as C from '../styles';

export const Plans = () => {
    const { state } =  useContext(Context);

    return (
        <C.ContainerInternal state={state.theme}>
            <h1>Área de Membros</h1>
            <p>Conheça nossos planos</p>
            
        </C.ContainerInternal>
    );
}