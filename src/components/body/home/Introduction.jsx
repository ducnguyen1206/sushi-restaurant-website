import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import {
    Container,
    Title,
    SubTitle,
    Button,
    IntroBackground,
} from '../../styles/Introduction.style';

function Introduction() {
    const context = useContext(AppContext);
    return (
        <IntroBackground>
            <Container extendNavBar={context.extendedNavbar}>
                <Title>Sushi Tuyenbeoo</Title>
                <SubTitle>
                    Welcome to Sushi Tuyenbeoo, where you can find the best
                    sushi in town. Don't wait to make a reservation below
                </SubTitle>
                <Link to='/reservation'>
                    <Button>Book Now</Button>
                </Link>
            </Container>
        </IntroBackground>
    );
}

export default Introduction;
