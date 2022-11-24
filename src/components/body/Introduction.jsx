import { Link } from 'react-router-dom';

import {
    Container,
    Title,
    SubTitle,
    Button,
} from '../styles/Introduction.style';

function Introduction({ isUpdate }) {
    return (
        <Container isUpdate={isUpdate}>
            <Title>Sushi Tuyenbeoo</Title>
            <SubTitle>
                Welcome to Sushi Tuyenbeoo, where you can find the best sushi in
                town. Don't wait to make a reservation below
            </SubTitle>
            <Link to='/reservation'>
                <Button>Book Now</Button>
            </Link>
        </Container>
    );
}

export default Introduction;
