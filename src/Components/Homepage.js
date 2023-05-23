import bruchetta from '../Images/bruchetta.svg';
import greeksalad from '../Images/greek salad.jpg';
import dessert from '../Images/lemon dessert.jpg';

function Homepage() {
    return(
        <main className="container">
            <section id="hero">
                <article>
                    <div className='banner'>
                        <h1>The Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor. Nunc et sapien fringilla, sodales dui eget, volutpat nunc.</p>
                        <button>Book a table</button>
                    </div>
                </article>
            </section>
            <section id="highlights">
                <div>
                    <h1>Specials</h1>
                </div>
                <div>
                    <button>Full Menu</button>
                </div>
            </section>

            <section id="highlights2">
                <article>
                        <img src={bruchetta} className='artImg' alt='bruchetta'></img>
                    <div className='artText'>
                        <h1>Dish 1 <span>$10</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor.</p>
                        <a href=''>Order</a>
                    </div>
                </article>
                <article>
                        <img src={greeksalad} className='artImg' alt='greeksalad'></img>
                    <div className='artText'>
                        <h1>Dish 1 <span>$10</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor.</p>
                        <a href=''>Order</a>
                    </div>
                </article>
                <article>
                        <img src={dessert} className='artImg' alt='dessert'></img>
                    <div className='artText'>
                        <h1>Dish 1 <span>$10</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor.</p>
                        <a href=''>Order</a>
                    </div>
                </article>
            </section>
            <h1 className='testTitle'>Testimonials</h1>
            <section id="testimonials">
                <article>
                    <div className='artText'>
                        <h1>Rating</h1>
                        <div className='testInfo'>
                            <div>
                                <img src={bruchetta} width="100px" alt='profile'></img>
                            </div>
                            <div>
                                <h3>Name</h3>
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
                                <img src={bruchetta} width="100px" alt='profile'></img>
                            </div>
                            <div>
                                <h3>Name</h3>
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
                                <img src={bruchetta} width="100px" alt='profile'></img>
                            </div>
                            <div>
                                <h3>Name</h3>
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
                                <img src={bruchetta} width="100px" alt='profile'></img>
                            </div>
                            <div>
                                <h3>Name</h3>
                            </div>
                        </div>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                    </div>
                </article>
            </section>
            <section id="about">
                <article className='aboutText'>
                    <h1>The Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor. Nunc et sapien fringilla, sodales dui eget, volutpat nunc.</p>
                </article>
                <article>
                    <img src={bruchetta} alt='about'></img>
                </article>
            </section>
        </main>
    );
}

export default Homepage;