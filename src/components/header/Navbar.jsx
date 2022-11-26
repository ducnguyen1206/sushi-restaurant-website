import { useState, useContext } from 'react';
import logo from '../assets/logo.jpg';
import AppContext from '../../context/AppContext';
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
    const context = useContext(AppContext);

    return (
        <div>
            <NavbarContainer extendNavBar={extendNavBar}>
                <NavbarInnerContainer>
                    <LeftContainer>
                        <Logo src={logo}></Logo>
                        <NavbarBrandLink to='/'>
                            Sushi Tuyenbeoo
                        </NavbarBrandLink>
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
                                    context.extendOnclick(status);
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
