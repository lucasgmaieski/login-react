import { Link, useNavigate } from 'react-router-dom';
import * as C from './styles';
import { ChangeEvent, useContext, useState } from 'react';
import { Context } from '../../contexts/Context';

export const FormRegister = () => {
    const {state, dispatch} = useContext(Context);
    const [nameInput, setNameInput] = useState('');
    const [dateofbirthInput, setDateofbirthInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [registerSucess, setRegisterSucess] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.id == 'name') {
            setNameInput(e.target.value);
        }
        if(e.target.id == 'dateofbirth') {
            setDateofbirthInput(e.target.value);
        }
        if(e.target.id == 'email') {
            setEmailInput(e.target.value);
        }
        if(e.target.id == 'password') {
            setPasswordInput(e.target.value);
        }
    }

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        let usersBeforeAdd = state.authentication.users.length;
        console.log("usuarios antes do cadastro: "+usersBeforeAdd);
        await dispatch({
            type: 'ADD_USER',
            payload: {
                users: [
                    {
                        name: nameInput,
                        email: emailInput,
                        password: passwordInput,
                        dateofbirth: dateofbirthInput
                    }
                ],
                logged: false,
                userLogged: ''
            }
        });

        if(state.authentication.users.length > usersBeforeAdd) {
            console.log("usuarios depois do cadastro:" + state.authentication.users.length);
            setRegisterSucess(true);
            setNameInput('');
            setEmailInput('');
            setPasswordInput('');
            setDateofbirthInput('');
            setTimeout(() => {
                navigate('/login');
                setRegisterSucess(false);
            }, 3000);
        }
    }
    return (
        <C.Container state={state.theme}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome Completo:</label>
                <input type="text" name="name" id="name" onChange={handleInputChange} value={nameInput}/>
                <label htmlFor="dateofbirth">Data de Nascimento</label>
                <input type="text" name="dateofbirth" id="dateofbirth" onChange={handleInputChange} value={dateofbirthInput}/>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" onChange={handleInputChange} value={emailInput}/>
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" onChange={handleInputChange} value={passwordInput}/>
                <input type="submit"  value={'Enviar'}/>
                {registerSucess && 
                    <div>Cadastro realizado com sucesso!</div>
                }
                <div>
                    Já tem uma conta? <Link to={'/login'}>Fazer Login</Link>
                </div>
            </form>
            <div>usuarios: 
                {state.authentication.users.map((item, index) =>( 
                    <p key={index}>{item.name}</p>
                ))}
            </div>
        </C.Container>
    );
}