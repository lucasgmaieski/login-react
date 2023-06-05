import { styled } from 'styled-components';
import { ThemeType } from '../../reducers/themeReducer';
type MainProps = {
    state: ThemeType
}
export const Container = styled.div<MainProps>`
    width: 600px;
    margin: 0 auto;
    flex-grow: 1;
    a {
        color: ${props => props.state.status.theme === 'dark' ? '#fff' :  '#000'};
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;