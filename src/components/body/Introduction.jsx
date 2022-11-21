import {
    Container,
    Title,
    SubTitle,
    Button,
} from '../styles/Introduction.style';

function Introduction({ isUpdate }) {
    return (
        <Container isUpdate={isUpdate}>
            <Title>Sushi Babeo</Title>
            <SubTitle>
                Welcome to Sushi Babeo, where you can find the best sushi in
                town. Don't wait to make a reservation below
            </SubTitle>
            <Button>Book Now</Button>
        </Container>
    );
}

export default Introduction;
