import { render, screen } from '@testing-library/react';
import App from './App';
import {fetchAPI, submitAPI} from './API/bookingAPI.js'
import { useReducer } from 'react';

test('renders learn react link', () => {
const today = new Date('May 25, 2023 16:17:30');
const initializeTimes = fetchAPI(today);
expect(initializeTimes).not.toHaveLength(0);
});
