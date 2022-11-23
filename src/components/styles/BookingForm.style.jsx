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
        background: rgba(243, 176, 176, 0.6);
    }
    font-family: Arial, Helvetica, sans-serif;
    background-image: url(${bookingImg});
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    height: 87vh;
`;

export const BookingSection = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 80%;
`;
