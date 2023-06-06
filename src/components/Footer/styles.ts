import { styled } from 'styled-components';
import { ThemeType } from '../../reducers/themeReducer';
type MainProps = {
    state: ThemeType
}
export const Footer = styled.footer<MainProps>`
    /* background-color: ${props => props.state.status.firstplan}; */
    background-image: conic-gradient(from -90deg at 110% 100%,${props => props.state.status.firstplan} -10deg,#2c4197 110deg,#ebecf0 1turn);
    color: ${props => props.state.status.txtprimary};
    text-align: center;
    padding: 20px 0;
    
`;
