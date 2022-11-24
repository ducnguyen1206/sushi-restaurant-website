import {
    Booking,
    SectionCenter,
    BookingCTA,
    FormBackground,
} from '../styles/ReservationForm.style';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReservationForm() {
    const h1Style = {
        fontSize: '52px',
        textTransform: 'uppercase',
        color: '#21243d',
        fontWeight: '700px',
    };

    const pStyle = {
        fontSize: '16px',
        color: '#21243d',
    };

    const lableStyle = {
        fontWeight: 'bold',
    };

    return (
        <Booking>
            <SectionCenter>
                <div className='containter'>
                    <div className='row'>
                        <div className='col-md-7 col-md-push-5 ms-4'>
                            <BookingCTA>
                                <h1 style={h1Style}>Make your reservation</h1>
                                <p style={pStyle}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Animi facere, soluta
                                    magnam consectetur molestias itaque ad sint
                                    fugit architecto incidunt iste culpa
                                    perspiciatis possimus voluptates aliquid
                                    consequuntur cumque quasi. Perspiciatis.
                                </p>
                            </BookingCTA>
                        </div>
                        <div class='col-md-4 col-md-pull-7 ms-5 mt-4'>
                            <FormBackground>
                                <Form>
                                    <div className='row'>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label style={lableStyle}>
                                                First Name
                                            </Form.Label>
                                            <Form.Control
                                                type='name'
                                                placeholder='First Name'
                                            />
                                        </Form.Group>
                                        <Form.Group className='col-sm-6'>
                                            <Form.Label style={lableStyle}>
                                                Last Name
                                            </Form.Label>
                                            <Form.Control
                                                type='name'
                                                placeholder='Last Name'
                                            />
                                        </Form.Group>
                                    </div>
                                    <Form.Group className='mt-3'>
                                        <Form.Label style={lableStyle}>
                                            Email
                                        </Form.Label>
                                        <Form.Control
                                            type='mail'
                                            placeholder='Enter your email'
                                        />
                                    </Form.Group>
                                    <Form.Group className='mt-3'>
                                        <Form.Label style={lableStyle}>
                                            Phone Number
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter your phone number'
                                        />
                                    </Form.Group>
                                </Form>
                            </FormBackground>
                        </div>
                    </div>
                </div>
            </SectionCenter>
        </Booking>
    );
}

export default ReservationForm;
