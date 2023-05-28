import * as C from './styles';

export const Header = () => {
    return (
        <C.Header>
            <C.Logo>
                <img src="./src/assets/octo-logo.png" alt="Logo" />
            </C.Logo>
            <C.Nav>
                <ul>
                    <li>Sobre</li>
                    <li>Planos</li>
                    <li>Contato</li>
                </ul>
            </C.Nav>
        </C.Header>
    );
}