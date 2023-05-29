import logo from '../Images/Logo.svg';
import Nav from './Nav';

function Header() {
    return (
        <header>
            <div className="container">
                <img src={logo}></img>
                <Nav></Nav>
            </div>
        </header>
    );
}

export default Header;