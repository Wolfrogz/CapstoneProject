import { useState } from "react";
import { useNavigate } from "react-router-dom";
import restaurant from '../Images/restaurant.jpg'

function BookingForm( props ) {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [time, setTime] = useState("17:00");
    const [occasion, setOccasion] = useState("Birthday");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.submitAPI(date, time, guests, occasion)){
            navigate("/bookingInfo")
        }
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    }

    const filled = ()  => {
        return (date && guests && time && occasion);
    }

    return(
        <main className="container booking">
            <div className="bookingForm">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="res-date">Choose date</label>
                    <input required type="date" id="res-date" value={date} onChange={e => {
                        setDate(e.target.value)
                        props.dispatch({
                        type:"time",
                        date: e.target.valueAsDate
                        })
                        }}/>
                    <label htmlFor="res-time">Choose time</label>
                    <select required id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                        {props.availableTimes?.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input required type="number" placeholder="1" min="1" max="8" id="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
                    <label htmlFor="occasion">Occasion</label>
                    <select required id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <input className="button" aria-label='Next step' disabled={!filled()} type="submit" value="Next step"/>
                </form>
            </div>
            <div className="bookingImg">
                <img src={restaurant}></img>
            </div>
        </main>
    );
}

export default BookingForm;