import { useState, useContext } from 'react';
import {
    FormBooking,
    FormBackground,
    Title,
    ErrorMessage,
} from '../../styles/ReservationForm.style';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../../../context/AppContext';

const { Group, Label, Control } = { ...Form };

function Booking() {
    const initalValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        date: '',
        time: '',
        quantity: 1,
    };
    const context = useContext(AppContext);
    const [formValues, setFormValues] = useState(initalValues);
    const [formErrors, setformErrors] = useState({});

    const className = 'col-sm';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
        context.submitClientInfo(formValues);
    };

    const validate = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'First Name is Required';
        }
        if (!values.lastName) {
            errors.lastName = 'Last Name is Required';
        }
        if (!values.email) {
            errors.email = 'Email is Required';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Phone Number is Required';
        }
        if (!values.date) {
            errors.date = 'Date is Required';
        }
        if (!values.time) {
            errors.time = 'Time is Required';
        }
        return errors;
    };

    return (
        <FormBooking>
            <FormBackground>
                <Title>
                    <h3 style={{ fontWeight: '700px' }}>
                        MAKE YOUR RESERVATION
                    </h3>
                </Title>
                <Form onSubmit={handleSubmit}>
                    <div className='row'>
                        <Group className='col-sm-6'>
                            <Label>First Name</Label>
                            <Control
                                type='text'
                                placeholder='First Name'
                                name='firstName'
                                value={formValues.firstName}
                                onChange={handleChange}
                            />
                            <ErrorMessage>{formErrors.firstName}</ErrorMessage>
                        </Group>
                        <Group className='col-sm-6'>
                            <Label>Last Name</Label>
                            <Control
                                type='text'
                                placeholder='Last Name'
                                name='lastName'
                                value={formValues.lastName}
                                onChange={handleChange}
                            />
                            <ErrorMessage>{formErrors.lastName}</ErrorMessage>
                        </Group>
                    </div>
                    <Group className={className}>
                        <Label>Email</Label>
                        <Control
                            type='text'
                            placeholder='Enter your email'
                            name='email'
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <ErrorMessage>{formErrors.email}</ErrorMessage>
                    </Group>
                    <Group className={className}>
                        <Label>Phone Number</Label>
                        <Control
                            type='text'
                            placeholder='Enter your phone number'
                            name='phoneNumber'
                            value={formValues.phoneNumber}
                            onChange={handleChange}
                        />
                        <ErrorMessage>{formErrors.phoneNumber}</ErrorMessage>
                    </Group>
                    <Group className={className}>
                        <Label>Date</Label>
                        <Control
                            type='date'
                            name='date'
                            value={formValues.date}
                            onChange={handleChange}
                        />
                        <ErrorMessage>{formErrors.date}</ErrorMessage>
                    </Group>
                    <Group className={className}>
                        <Label>Time</Label>
                        <Control
                            type='time'
                            name='time'
                            value={formValues.time}
                            onChange={handleChange}
                        />
                        <ErrorMessage>{formErrors.time}</ErrorMessage>
                    </Group>
                    <Group className={className}>
                        <Label>How many people</Label>
                        <Control
                            type='number'
                            min={1}
                            name='quantity'
                            value={formValues.quantity}
                            onChange={handleChange}
                        />
                    </Group>
                    <Button
                        type='submit'
                        style={{
                            color: 'white',
                            backgroundColor: 'black',
                            marginTop: 10,
                            border: 'none',
                        }}
                    >
                        Send
                    </Button>
                </Form>
            </FormBackground>
        </FormBooking>
    );
}

export default Booking;
