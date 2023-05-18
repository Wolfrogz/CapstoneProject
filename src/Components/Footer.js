import logo from '../Images/Logo.svg';

function Footer() {
    return (
        <footer className="container">
            <div>
                <img src={logo}></img>
            </div>
            <div>
                <h2>Doormat Nav</h2>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">Reservations</a>
                    </li>
                    <li>
                        <a href="">Order Online</a>
                    </li>
                    <li>
                        <a href="">Login</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Contact</h2>
                <ul>
                    <li>
                        <a href="">Address</a>
                    </li>
                    <li>
                        <a href="">Phone Number</a>
                    </li>
                    <li>
                        <a href="">Email</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Social media</h2>
                <img src={logo} width="40px"></img>
                <img src={logo} width="40px"></img>
                <img src={logo} width="40px"></img>
                <img src={logo} width="40px"></img>
            </div>
        </footer>
    );
}

export default Footer;