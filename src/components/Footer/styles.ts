import { styled } from 'styled-components';
import { ThemeType } from '../../reducers/themeReducer';
type MainProps = {
    state: ThemeType
}
export const Footer = styled.footer<MainProps>`
    background-color: ${props => props.state.status.firstplan};
    color: ${props => props.state.status.txtprimary};
    text-align: center;
`;
