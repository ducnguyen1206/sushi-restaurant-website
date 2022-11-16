import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavBar ? '100vh' : '80px')};
    background: #21243d;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    flex: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
`;

export const RightContainer = styled.div`
    flex: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;

export const NavbarBrandLink = styled(Link)`
    color: white;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
`;

export const Logo = styled.img`
    width: 46px;
    height: 46px;
    margin-right: 1px;
`;

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
    @media (min-width: 700px) {
        display: none;
    }
`;
export const NavbarExtendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 700px) {
        display: none;
    } ;
`;
