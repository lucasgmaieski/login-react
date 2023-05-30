import { styled } from 'styled-components';
import { ThemeType } from '../../reducers/themeReducer';

type MainProps = {
    state: ThemeType
}
export const Header = styled.div<MainProps>`
    color: ${props => props.state.status.txtprimary};
    background-color: ${props => props.state.status.firstplan};
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.div`
    width: 120px;
    &:hover {
        background-color: #2a2828;
    }
    img {
        width: 100%;
    }
`;

export const Nav = styled.nav<MainProps>`
    
    ul {
        display: flex;
        list-style: none;
        gap: 50px;
        li {
            a{
                color: ${props => props.state.status.txtprimary};
            }
        }
    }
`;


