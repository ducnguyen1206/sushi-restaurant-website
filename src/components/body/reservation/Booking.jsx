import {
    Booking,
    SectionCenter,
    FormBackground,
    FormTitle,
} from '../../styles/ReservationForm.style';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Reservation() {
    const className = 'col-sm';

    return (
        <Booking>
            <SectionCenter>
                <FormBackground>
                    <FormTitle>
                        <h3 style={{ fontWeight: '700px' }}>
                            MAKE YOUR RESERVATION
                        </h3>
                    </FormTitle>
                    <Form>
                        <div className='row'>
                            <Form.Group className='col-sm-6'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='First Name'
                                />
                            </Form.Group>
                            <Form.Group className='col-sm-6'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Last Name'
                                />
                            </Form.Group>
                        </div>
                        <Form.Group className={className}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='mail'
                                placeholder='Enter your email'
                            />
                        </Form.Group>
                        <Form.Group className={className}>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your phone number'
                            />
                        </Form.Group>
                        <Form.Group className={className}>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type='date' />
                        </Form.Group>
                        <Form.Group className={className}>
                            <Form.Label>Time</Form.Label>
                            <Form.Control type='time' />
                        </Form.Group>
                        <Form.Group className={className}>
                            <Form.Label>How many people</Form.Label>
                            <Form.Control type='number' min={0} />
                        </Form.Group>
                    </Form>
                </FormBackground>
            </SectionCenter>
        </Booking>
    );
}

export default Reservation;
