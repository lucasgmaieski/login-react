import { Link } from 'react-router-dom';
import * as C from './styles';
import { ChangeEvent, useContext, useState } from 'react';
import { Context } from '../../contexts/Context';

export const FormRegister = () => {
    const {state, dispatch} = useContext(Context);
    const [nameInput, setNameInput] = useState('');
    const [dateofbirthInput, setDateofbirthInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
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
                auth: false
            }
        })

    }
    return (
        <C.Container >
            <form action="">
                <label htmlFor="name">Nome Completo:</label>
                <input type="text" name="name" id="name" onChange={handleInputChange} value={nameInput}/>
                <label htmlFor="dateofbirth">Data de Nascimento</label>
                <input type="date" name="dateofbirth" id="dateofbirth" onChange={handleInputChange} value={dateofbirthInput}/>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" onChange={handleInputChange} value={emailInput}/>
                <label htmlFor="password">Senha:</label>
                <input type="password" name="password" id="password" onChange={handleInputChange} value={passwordInput}/>
                <input type="submit" onSubmit={handleSubmit} value={'Enviar'}/>

                <div>
                    Já tem uma conta? <Link to={'/login'}>Fazer Login</Link>
                </div>
            </form>
        </C.Container>
    );
}