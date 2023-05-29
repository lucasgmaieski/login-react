import * as C from './styles';

export const FormLogin = () => {
    return (
        <C.Container>
            <form action="">
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" />
            </form>
        </C.Container>
    );
}