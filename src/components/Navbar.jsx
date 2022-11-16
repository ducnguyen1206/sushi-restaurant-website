import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './assets/logo.jpg';
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendContainer,
    NavbarLinkContainer,
    NavbarLink,
    NavbarBrandLink,
    OpenLinksButton,
    NavbarLinkExtended,
    Logo,
} from '../styles/Navbar.style';

function Navbar() {
    const [extendNavBar, setExtendNavBar] = useState(false);

    return (
        <>
            <NavbarContainer extendNavBar={extendNavBar}>
                <NavbarInnerContainer>
                    <LeftContainer>
                        <Logo src={logo}></Logo>
                        <NavbarBrandLink to='/'>
                            Sushi Restaurant
                        </NavbarBrandLink>
                    </LeftContainer>

                    <RightContainer>
                        <NavbarLinkContainer>
                            <NavbarLink to='/'>Home</NavbarLink>
                            <NavbarLink to='/menu'>Menu</NavbarLink>
                            <NavbarLink to='/about'>About</NavbarLink>
                            <NavbarLink to='/contact'>Contact</NavbarLink>
                            <OpenLinksButton
                                onClick={() => {
                                    setExtendNavBar((curr) => !curr);
                                }}
                            >
                                {extendNavBar ? <>&#10005;</> : <>&#8801;</>}
                            </OpenLinksButton>
                        </NavbarLinkContainer>
                    </RightContainer>
                </NavbarInnerContainer>

                {extendNavBar && (
                    <NavbarExtendContainer>
                        <NavbarLinkExtended to='/'>Home</NavbarLinkExtended>
                        <NavbarLinkExtended to='/menu'>Menu</NavbarLinkExtended>
                        <NavbarLinkExtended to='/about'>
                            About
                        </NavbarLinkExtended>
                        <NavbarLinkExtended to='/contact'>
                            Contact
                        </NavbarLinkExtended>
                    </NavbarExtendContainer>
                )}
            </NavbarContainer>
        </>
    );
}

export default Navbar;
