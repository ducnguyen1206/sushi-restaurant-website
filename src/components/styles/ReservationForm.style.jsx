import styled from 'styled-components';
import bookingImg from '../assets/Booking.jpg';

export const FormBooking = styled.div`
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
    position: absolute;
    width: 100%;
    height: fit-content;
`;

export const FormBackground = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    background-color: #fff;
    padding: 20px 20px;
    width: fit-content;
    max-height: fit-content;
    -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    transform: translate(80%, 0%);
    @media (max-width: 700px) {
        padding: 10px 10px;
        font-size: 13px;
        width: 70%;
        transform: translate(20%, 0%);
    }
`;

export const Title = styled.div`
    text-align: center;
    font-size: 16px;
    margin-block-end: 10px;
`;

export const ErrorMessage = styled.p`
    font-size: 10px;
    color: red;
`;
