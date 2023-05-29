import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link aria-label='Home' to='/'>Home</Link>
                </li>
                <li>
                    <Link aria-label='About' to='/'>About</Link>
                </li>
                <li>
                    <Link aria-label='Menu' to='/'>Menu</Link>
                </li>
                <li>
                    <Link aria-label='Reservations' to='/reservations'>Reservations</Link>
                </li>
                <li>
                    <Link aria-label='Order Online' to='/'>Order Online</Link>
                </li>
                <li>
                    <Link aria-label='Login' to='/'>Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;