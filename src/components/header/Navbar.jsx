import { useState, useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
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
                            <NavbarLink to='/menu'>Menu</NavbarLink>
                            <NavbarLink to='/about'>About</NavbarLink>
                            <NavbarLink to='/contact'>Contact Us</NavbarLink>
                            <NavbarLink to='/order'>
                                <BsFillCartFill
                                    size={30}
                                    style={{ color: 'white', marginTop: -5 }}
                                />
                            </NavbarLink>
                            <OpenLinksButton
                                onClick={() => {
                                    const status = (curr) => !curr;
                                    setExtendNavBar(status);
                                    context.setExtendedNavbar(status);
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
                        <NavbarLinkExtended to='/menu'>Menu</NavbarLinkExtended>
                        <NavbarLinkExtended to='/about'>
                            About
                        </NavbarLinkExtended>
                        <NavbarLinkExtended to='/contact'>
                            Contact Us
                        </NavbarLinkExtended>
                        <NavbarLinkExtended to='/order'>
                            Order Here
                        </NavbarLinkExtended>
                    </NavbarExtendContainer>
                )}
            </NavbarContainer>
        </div>
    );
}

export default Navbar;
