import bruchetta from '../Images/bruchetta.svg';
import greeksalad from '../Images/greek salad.jpg';
import dessert from '../Images/lemon dessert.jpg';

function Main() {
    return (
        <main className="container">
            <section id="hero">
                <article>
                 <h1>The Little Lemon</h1>
                 <h2>Chicago</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor. Nunc et sapien fringilla, sodales dui eget, volutpat nunc.</p>
                 <button>Book a table</button>
                </article>
            </section>
            <section id="highlights">
                <article>
                    <h1>Specials</h1>
                </article>
                <article>
                    <button>Full Menu</button>
                </article>
            </section>
            <section id="highlights2">
                <article>
                    <img src={bruchetta} width="100%" height="185px"></img>
                    <h1>Dish 1 <span>$10</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor.</p>
                    <button>Order</button>
                </article>
                <article>
                    <img src={greeksalad} width="100%" height="185px"></img>
                    <h1>Dish 1 <span>$10</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor.</p>
                    <button>Order</button>
                </article>
                <article>
                    <img src={dessert} width="100%" height="185px"></img>
                    <h1>Dish 1 <span>$10</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor.</p>
                    <button>Order</button>
                </article>
            </section>
            <h1>Testimonials</h1>
            <section id="testimonials">
                <article>
                    <h1>Rating</h1>
                    <img src={bruchetta} width="100px"></img>
                    <span>Name</span>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                </article>
                <article>
                    <h1>Rating</h1>
                    <img src={bruchetta} width="100px"></img>
                    <span>Name</span>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                </article><article>
                    <h1>Rating</h1>
                    <img src={bruchetta} width="100px"></img>
                    <span>Name</span>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                </article><article>
                    <h1>Rating</h1>
                    <img src={bruchetta} width="100px"></img>
                    <span>Name</span>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
                </article>
            </section>
            <section id="about">
                <article>
                    <h1>The Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus dui. Nam vel mi at elit aliquet gravida non sit amet tortor. Nunc et sapien fringilla, sodales dui eget, volutpat nunc.</p>
                </article>
                <article>
                <img src={bruchetta}></img>
                </article>
            </section>
        </main>
    );
}

export default Main;