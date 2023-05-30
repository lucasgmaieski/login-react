import { styled } from "styled-components";
import { ThemeType } from "./reducers/themeReducer";

type MainProps = {
    state: ThemeType
}

export const Container = styled.div<MainProps>`
    background-color: ${props => props.state.status.background};
    color: ${props => props.state.status.txtprimary};
`;