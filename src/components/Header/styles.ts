import { styled } from 'styled-components';

export const Header = styled.div`
    color: #fff;
    background-color: #000;
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

export const Nav = styled.nav`
    
    ul {
        display: flex;
        list-style: none;
        gap: 50px;
    }
`;


