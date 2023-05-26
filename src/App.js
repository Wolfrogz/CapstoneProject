import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import BookingForm from './Components/BookingForm';
import ConfirmedBooking from './Components/ConfimedBooking';
import { useReducer } from 'react';
import {fetchAPI, submitAPI} from './API/bookingAPI.js'

const updateTimes = (state, action) => {
  switch (action.type){
    case "time":
      return (fetchAPI(action.date));
      default:
        return state;
  }
}
const today = new Date('May 25, 2023 16:17:30');
const initializeTimes = fetchAPI(today);

const submitForm = (formData) => {
  return(submitAPI(formData));
}

function App() {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
    <BrowserRouter>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='reservations' element={<BookingForm availableTimes = {state} time = {state.value} dispatch= {dispatch} submitAPI = {submitForm}/>}/>
        <Route path='confirmed' element={<ConfirmedBooking/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;