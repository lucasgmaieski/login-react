import * as C from './styles';

export const FormRegister = () => {

    return (
        <C.Container >
            <form action="">
                <label htmlFor="name">Nome Completo:</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="dateofbirth">Data de Nascimento</label>
                <input type="date" name="dateofbirth" id="dateofbirth" />
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value={'Enviar'}/>
            </form>
        </C.Container>
    );
}