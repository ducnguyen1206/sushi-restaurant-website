import styled from 'styled-components';
import background from '../assets/backround.png';

export const IntroBackground = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 87vh;
    display: block;
    background-position: center;
`;

export const Container = styled.div`
    display: ${(props) => (props.extendNavBar ? 'none' : 'block')};
    float: left;
    text-align: left;
    position: absolute;
    top: 40%;
    transform: translate(0, -40%);
    padding-left: 20px;
    width: 50%;
    @media (max-height: 400px) {
        transform: translate(-7px, -10%);
    }

    @media (max-width: 800px) {
        transform: translate(-25px, -30%);
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 80px;
    font-family: 'Arial';
    font-weight: bold;
    margin: 30px;
    transform: translate(-7px, 10%);

    @media (max-width: 800px) {
        transform: translate(-7px, 0%);
    }

    @media (max-height: 400px) {
        font-size: 40px;
        transform: translate(-7px, 5%);
    }
`;

export const SubTitle = styled.div`
    color: white;
    font-size: 30px;
    font-family: 'Arial';
    margin: 30px;
    width: 90%;
    text-align: justify;

    @media (max-width: 950px) {
        display: none;
    }

    @media (max-height: 400px) {
        transform: translate(-7px, 0);
        font-size: 15px;
    }
`;

export const Button = styled.button`
    font-size: 25px;
    font-weight: bold;
    border-radius: 25px;
    width: 200px;
    height: 50px;
    border: none;
    background-color: #21243d;
    color: white;
    margin-left: 30px;
    @media (max-height: 400px) {
        width: 120px;
        height: 30px;
        font-size: 15px;
    }
`;
