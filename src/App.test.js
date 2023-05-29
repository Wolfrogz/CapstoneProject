import { render, screen } from '@testing-library/react';
import {fetchAPI, submitAPI} from './API/bookingAPI.js'

test('renders learn react link', () => {
const today = new Date();
const initializeTimes = fetchAPI(today);
expect(initializeTimes).not.toHaveLength(0);
});
