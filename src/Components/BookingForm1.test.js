import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { BrowserRouter } from 'react-router-dom';


test('Form input Date', () => {
render(
    <BrowserRouter>
        <BookingForm/>
    </BrowserRouter>)
const input = screen.getByLabelText(/Choose date/);
fireEvent.change(input, {'target': {'value': ''}})
expect(input).toBeInTheDocument();
});

test('Form input Time', () => {
render(
    <BrowserRouter>
        <BookingForm/>
    </BrowserRouter>)
const input2 = screen.getByLabelText(/Choose time/);
expect(input2).toBeInTheDocument();
});

test('Form input Guests', () => {
render(
    <BrowserRouter>
        <BookingForm/>
    </BrowserRouter>)
const input3 = screen.getByLabelText(/Number of guests/);
   expect(input3).toBeInTheDocument();
});

test('Form input Occassion', () => {
render(
    <BrowserRouter>
        <BookingForm/>
    </BrowserRouter>)
const input3 = screen.getByLabelText(/Occasion/);
   expect(input3).toBeInTheDocument();
});