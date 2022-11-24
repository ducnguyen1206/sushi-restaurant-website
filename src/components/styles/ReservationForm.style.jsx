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
        background: rgba(243, 176, 176, 0.774);
    }

    font-family: Arial, Helvetica, sans-serif;
    background-image: url(${bookingImg});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    height: 87vh;
`;

export const SectionCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translate(5%, -55%);
    width: 80%;
`;

export const BookingCTA = styled.div`
    margin-top: 80px;
    margin-bottom: 30px;
`;

export const FormBackground = styled.div`
    background-color: #fff;
    padding: 50px 20px;
    -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
`;
