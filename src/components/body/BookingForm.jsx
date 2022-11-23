import { Form, Container } from 'react-bootstrap';
import { Booking, BookingSection } from '../styles/BookingForm.style';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookingForm() {
    return (
        <Booking>
            <BookingSection>
                <Form>
                    <div className='row'>
                        <Form.Group className='col-md-3'>
                            <label for='firstName'>First Name</label>
                            <input
                                className='form-control'
                                id='firstName'
                                placeholder='First Name'
                            />
                        </Form.Group>
                        <Form.Group className='col-md-3'>
                            <label for='LastName'>Last Name</label>
                            <input
                                type='password'
                                className='form-control'
                                id='LastName'
                                placeholder='Last Name'
                            />
                        </Form.Group>
                    </div>
                </Form>
            </BookingSection>
        </Booking>
    );
}

export default BookingForm;
