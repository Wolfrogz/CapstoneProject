import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import BookingForm from './Components/BookingForm';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='reservations' element={<BookingForm/>}/>
        <Route path='footer' element={<Footer/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
