import { styled } from "styled-components";
import { ThemeType } from "./reducers/themeReducer";

type MainProps = {
    state: ThemeType
}

export const Container = styled.div<MainProps>`
    background-color: ${props => props.state.status.background};
    color: ${props => props.state.status.txtprimary};
    /* min-height: 85vh; */
    /* height: 90vh; */
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const ContainerInternal = styled.div<MainProps>`
    flex-grow: 1;
`