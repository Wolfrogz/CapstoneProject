import image from '../Images/mario.jpg'

function ConfirmedBooking() {
    return(
        <main className="container" id="confirmed">
            <h1>¡Booking complete!</h1>
            <h2>Thank you for prefering us!</h2>
            <p>Check your email for more info</p>
            <img src={image}></img>
        </main>
    );
}

export default ConfirmedBooking;
