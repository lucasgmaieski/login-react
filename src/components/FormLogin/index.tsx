import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useContext, useState} from 'react';
import * as C from './styles';
import { Context } from '../../contexts/Context';

export const FormLogin = () => {
    const {state, dispatch} = useContext(Context);
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [loginSucess, setLoginSucess] = useState(false);
    const navigate = useNavigate();

    const handleInput = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <C.Container>
            <form action="">
                <h2>Fazer login</h2>

                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" onChange={handleInput} value={emailInput} />
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" onChange={handleInput} value={passwordInput} />
                <input type="submit" value="Fazer login" />

                <div>
                    Ainda não possui uma conta ? <Link to={'/register'}> CADASTRE-SE</Link>
                </div>
            </form>
        </C.Container>
    );
}