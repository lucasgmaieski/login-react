import { Link } from 'react-router-dom';
import * as C from './styles';

export const FormLogin = () => {
    return (
        <C.Container>
            <form action="">
                <h2>Fazer login</h2>

                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="Fazer login" />

                <div>
                    Ainda não possui uma conta ? <Link to={'/register'}> CADASTRE-SE</Link>
                </div>
            </form>
        </C.Container>
    );
}