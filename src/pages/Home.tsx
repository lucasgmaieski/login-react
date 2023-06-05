import { Context } from '../contexts/Context';
import { useContext } from 'react';
import * as C from '../styles';

export const Home = () => {
    const { state } = useContext(Context);
    return (
        <C.ContainerInternal state={state.theme}>
            <h1>Home</h1>
            
            <section>
                Planos
            </section>

            <section>
                Depoimentos
            </section>

        </C.ContainerInternal>
    );
}