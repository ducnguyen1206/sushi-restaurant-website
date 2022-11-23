import { useState } from 'react';
import logo from '../assets/logo.jpg';
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

function Navbar({ isNavbarExtend }) {
    const [extendNavBar, setExtendNavBar] = useState(false);

    return (
        <div style={{ height: '13vh' }}>
            <NavbarContainer extendNavBar={extendNavBar}>
                <NavbarInnerContainer>
                    <LeftContainer>
                        <Logo src={logo}></Logo>
                        <NavbarBrandLink to='/'>Sushi Babeo</NavbarBrandLink>
                    </LeftContainer>

                    <RightContainer>
                        <NavbarLinkContainer>
                            <NavbarLink to='/'>Home</NavbarLink>

                            <NavbarLink to='/reservation'>
                                Reservations
                            </NavbarLink>
                            <NavbarLink to='/about'>About</NavbarLink>
                            <NavbarLink to='/contact'>Contact</NavbarLink>
                            <OpenLinksButton
                                onClick={() => {
                                    const status = (curr) => !curr;
                                    setExtendNavBar(status);
                                    isNavbarExtend(status);
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

                        <NavbarLinkExtended to='/reservation'>
                            Reservations
                        </NavbarLinkExtended>
                        <NavbarLinkExtended to='/about'>
                            About
                        </NavbarLinkExtended>
                        <NavbarLinkExtended to='/contact'>
                            Contact
                        </NavbarLinkExtended>
                    </NavbarExtendContainer>
                )}
            </NavbarContainer>
        </div>
    );
}

export default Navbar;
