import { styled } from "styled-components";
import { ThemeType } from "./reducers/themeReducer";

type MainProps = {
    state: ThemeType
}

export const Container = styled.div<MainProps>`
    /* background-color: ${props => props.state.status.background}; */
    background-image: conic-gradient(from 145deg at -30% 100%,#bcc1cd 0deg,#58637d 90deg, ${props => props.state.status.background} 1turn);

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