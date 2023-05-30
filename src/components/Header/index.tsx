import { Context } from '../../contexts/Context';
import { useContext } from 'react';
import * as C from './styles';
import { Link } from 'react-router-dom';

export const Header = () => {
    const {state, dispatch} = useContext(Context);
    
    const handleTheme = () => {
        if(state.theme.status.theme === 'light') {
            dispatch({
                type: 'CHANGE_STATUS',
                payload: {
                    status: {
                        theme: 'dark',
                        background: '#000',
                        firstplan: '#363636',
                        txtsecundary: '#a7a6a6',
                        txtprimary: '#eeeeee'
                    }
                }
            });
        } else {
            dispatch({
                type: 'CHANGE_STATUS',
                payload: {
                    status: {
                        theme: 'light',
                        background: '#fff',
                        firstplan: '#eeeeee',
                        txtsecundary: '#acacac',
                        txtprimary: '#262626'
                    }
                }
            });
        }
        
    }
    return (
        <C.Header state={state.theme}>
            <C.Logo>
                <Link to={'/'}><img src="./src/assets/octo-logo.png" alt="Logo" /></Link>
            </C.Logo>
            <p>{state.theme.status.theme}</p>
            <C.Nav state={state.theme}>
                <ul>
                    <li><Link to={'/about'}>Sobre</Link></li>
                    <li><Link to={'/plans'}>Planos</Link></li>
                    <li><Link to={'/contact'}>Contato</Link></li>
                    <li><Link to={'/members'}>Área de Membros</Link></li>
                    <li><button onClick={handleTheme}>Trocar Tema</button></li>
                </ul>
            </C.Nav>
        </C.Header>
    );
}