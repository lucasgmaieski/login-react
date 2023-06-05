import { Context } from '../contexts/Context';
import { useContext } from 'react';
import * as C from '../styles';

export const About = () => {
    const {state} = useContext(Context)
    return (
        <C.ContainerInternal state={state.theme}>
            <h1>Sobre nós</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam, aut sequi veritatis itaque ullam rerum minus quaerat quia magni nisi molestiae similique id doloribus qui explicabo aperiam sit dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque similique dolor iure doloribus rerum ducimus, ut consectetur hic. Quaerat officia nihil praesentium qui magni at ad odit quidem tenetur repellendus?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum tempora accusamus eligendi deserunt, illum, molestiae repellendus sequi aut explicabo nihil harum hic officiis quod eveniet consequatur inventore? Vitae, aperiam.</p>
        </C.ContainerInternal>
    );
}