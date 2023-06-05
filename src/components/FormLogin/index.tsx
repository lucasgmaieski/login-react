import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, MouseEventHandler, useContext, useState} from 'react';
import * as C from './styles';
import { Context } from '../../contexts/Context';

export const FormLogin = () => {
    const {state, dispatch} = useContext(Context);
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [loginSucess, setLoginSucess] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        if(e.target.id == 'email') {
            setEmailInput(e.target.value);
        }
        if(e.target.id == 'password') {
            setPasswordInput(e.target.value);
        }
    }

    const handleSubmit = async(e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoginError(false);
        console.log('ta clicando em fazer login');
        await dispatch({
            type: 'AUTH_USER',
            payload: {
                users: [
                    {
                        name: '',
                        email: emailInput,
                        password: passwordInput,
                        dateofbirth: ''
                    }
                ],
                logged: false,
                userlogged: ''
            }
        });
        if(state.authentication.logged) {
            setEmailInput(''),
            setPasswordInput('');
            setLoginSucess(true);
            console.log('logado!');
            setTimeout(() => {
                navigate('/members');
                setLoginSucess(false);
            }, 2000);
        }else {
            //mostrar msg de erro ao fazer login
            setLoginError(true);
        }
    }

    return (
        <C.Container state={state.theme}>
            <h2>Fazer login</h2>
            <form onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email" onChange={handleInputChange} value={emailInput} />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" onChange={handleInputChange} value={passwordInput} />
                    <input type="submit" value="Fazer login" />
                { loginSucess && <div>Login feito com sucesso!</div> }
                { loginError && <div>Falha ao efetuar login, tente novamente</div> }
            </form>
            <div>
                Ainda não possui uma conta ? <Link to={'/register'}> CADASTRE-SE</Link>
            </div>
            {  state.authentication.logged ? <span>logado "</span> : <span>Não logado</span> }
            { <span>{state.authentication.userLogged}</span> }
        </C.Container>
    );
}