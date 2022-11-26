import styled from 'styled-components';
import bookingImg from '../assets/Booking.jpg';

export const Booking = styled.div`
    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: rgba(221, 225, 230, 0.315);
    }
    background-image: url(${bookingImg});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100vw;
    height: 87vh;
    @media (max-width: 700px) {
        height: 87vh;
    }
`;

export const SectionCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translate(50%, -50%);
    width: 50vw;
    @media (max-width: 700px) {
        top: 30%;
        width: 80vw;
        height: 20vh;
        transform: translate(15%, -35%);
    }
`;

export const FormBackground = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background-color: #fff;
    padding: 20px 20px;
    -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    @media (max-width: 700px) {
        padding: 10px 10px;
        font-size: 13px;
        transform: translate(-10%, -20%);
    }
`;

export const FormTitle = styled.div`
    text-align: center;
    font-size: 16px;
    margin-block-end: 10px;
`;
