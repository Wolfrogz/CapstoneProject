import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm2 from './BookingForm2';
import { BrowserRouter } from 'react-router-dom';

test('Form input First Name', () => {
render(
    <BrowserRouter>
        <BookingForm2/>
    </BrowserRouter>)
const input = screen.getByLabelText(/First Name/);
fireEvent.change(input, {'target': {'value': ''}})
expect(input).toBeInTheDocument();
});

test('Form input Last Name', () => {
render(
    <BrowserRouter>
        <BookingForm2/>
    </BrowserRouter>)
const input2 = screen.getByLabelText(/Last Name/);
expect(input2).toBeInTheDocument();
});

test('Form input Email', () => {
render(
    <BrowserRouter>
        <BookingForm2/>
    </BrowserRouter>)
const input3 = screen.getByLabelText(/Email/);
   expect(input3).toBeInTheDocument();
});

test('Form input Additional info', () => {
render(
    <BrowserRouter>
        <BookingForm2/>
    </BrowserRouter>)
const input3 = screen.getByLabelText(/Additional information/);
   expect(input3).toBeInTheDocument();
});