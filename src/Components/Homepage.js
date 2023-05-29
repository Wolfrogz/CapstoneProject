import bruchetta from '../Images/bruchetta.svg';
import greeksalad from '../Images/greek salad.jpg';
import dessert from '../Images/lemon dessert.jpg';
import restaurantChef from '../Images/restaurantchef.jpg'
import { useEffect, useState } from 'react';

function Homepage() {
    const [randomUsers,setRandomUsers] = useState([]);
    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=4")
        .then((response) => response.json())
        .then((data) => setRandomUsers(data))
        .catch(() => console.log("Fetching failed"))
    }

    useEffect(() => {
        fetchData();
    },[])
    return(
        <main>
            <section id="hero">
                <article className="container">
                    <div className='banner'>
                        <h1>The Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor. Nunc et sapien fringilla, sodales dui eget, volutpat nunc.</p>
                        <button aria-label='Reserve a table'>Reserve a table</button>
                    </div>
                </article>
            </section>
            <div className='highlights'>
                <section className="container" id="highlights">
                    <div>
                        <h1>Specials</h1>
                    </div>
                    <div>
                        <button aria-label='Full menu'>Full Menu</button>
                    </div>
                </section>

                <section className="container" id="highlights2">
                    <article>
                            <img src={bruchetta} className='artImg' alt='bruchetta'></img>
                        <div className='artText'>
                            <h1>Bruchetta <span>$10</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor.</p>
                            <a aria-label='Order' href=''>Order</a>
                        </div>
                    </article>
                    <article>
                            <img src={greeksalad} className='artImg' alt='greeksalad'></img>
                        <div className='artText'>
                            <h1>Greek salad <span>$15</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor.</p>
                            <a aria-label='Order' href=''>Order</a>
                        </div>
                    </article>
                    <article>
                            <img src={dessert} className='artImg' alt='dessert'></img>
                        <div className='artText'>
                            <h1>Lemon dessert <span>$12</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor.</p>
                            <a aria-label='Order' href=''>Order</a>
                        </div>
                    </article>
                </section>
            <h1 className='testTitle'>Testimonials</h1>
            <section className="container" id="testimonials">
                <article>
                    <div className='artText'>
                        <h1>Rating</h1>
                        <div className='testInfo'>
                            <div>
                                <img src={Object.keys(randomUsers).length > 0 ? randomUsers.results[0].picture.large:""} width="100px" alt='profile'></img>
                            </div>
                            <div>
                                {Object.keys(randomUsers).length > 0 ? <h3>{randomUsers.results[0].name.first} {randomUsers.results[0].name.last}</h3> :<h3>Name</h3>}
                            </div>
                        </div>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                    </div>
                </article>
                <article>
                    <div className='artText'>
                        <h1>Rating</h1>
                        <div className='testInfo'>
                            <div>
                                <img src={Object.keys(randomUsers).length > 0 ? randomUsers.results[1].picture.large:""} width="100px" alt='profile'></img>
                            </div>
                            <div>
                                {Object.keys(randomUsers).length > 0 ? <h3>{randomUsers.results[1].name.first} {randomUsers.results[1].name.last}</h3> :<h3>Name</h3>}
                            </div>
                        </div>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                    </div>
                </article>
                <article>
                    <div className='artText'>
                        <h1>Rating</h1>
                        <div className='testInfo'>
                            <div>
                                <img src={Object.keys(randomUsers).length > 0 ? randomUsers.results[2].picture.large:""} width="100px" alt='profile'></img>
                            </div>
                            <div>
                                {Object.keys(randomUsers).length > 0 ? <h3>{randomUsers.results[2].name.first} {randomUsers.results[2].name.last}</h3> :<h3>Name</h3>}
                            </div>
                        </div>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                    </div>
                </article>
                <article>
                    <div className='artText'>
                        <h1>Rating</h1>
                        <div className='testInfo'>
                            <div>
                                <img src={Object.keys(randomUsers).length > 0 ? randomUsers.results[3].picture.large:""} width="100px" alt='profile'></img>
                            </div>
                            <div>
                                {Object.keys(randomUsers).length > 0 ? <h3>{randomUsers.results[3].name.first} {randomUsers.results[3].name.last}</h3> :<h3>Name</h3>}
                            </div>
                        </div>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                    </div>
                </article>
            </section>
            </div>
            <section className="container" id="about">
                <article className='aboutText'>
                    <h1>The Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor. Nunc et sapien fringilla, sodales dui eget, volutpat nunc.</p>
                </article>
                <article>
                    <img src={restaurantChef} alt='about'></img>
                </article>
            </section>
        </main>
    );
}

export default Homepage;