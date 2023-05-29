import logo from '../Images/Logo2.png';

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div>
                    <img src={logo}></img>
                </div>
                <div>
                    <h2>Doormat Nav</h2>
                    <ul>
                        <li>
                            <a aria-label='Home' href="">Home</a>
                        </li>
                        <li>
                            <a aria-label='About' href="">About</a>
                        </li>
                        <li>
                            <a aria-label='Menu' href="">Menu</a>
                        </li>
                        <li>
                            <a aria-label='Reservations' href="">Reservations</a>
                        </li>
                        <li>
                            <a aria-label='Order Online' href="">Order Online</a>
                        </li>
                        <li>
                            <a aria-label='Login' href="">Login</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li>
                            <a aria-label='Address' href="">Address</a>
                        </li>
                        <li>
                            <a aria-label='Phone Number' href="">Phone Number</a>
                        </li>
                        <li>
                            <a aria-label='Email' href="">Email</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Social media</h2>
                    <div class="social-icons">
  <a href="#"  title="facebook">
    <i class="fa fa-facebook-square" aria-hidden="true"></i>
  </a>
  <a href="#" title="twitter">
    <i class="fa fa-twitter-square" aria-hidden="true"></i>
  </a>
  <a href="#" title="instagram">
    <i class="fa fa-instagram" aria-hidden="true"></i>
  </a>
</div>
                </div>
                </div>
        </footer>
    );
}

export default Footer;