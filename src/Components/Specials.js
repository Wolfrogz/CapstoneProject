import bruchetta from '../Images/bruchetta.svg';
import greeksalad from '../Images/greek salad.jpg';
import dessert from '../Images/lemon dessert.jpg';

function Specials() {
    return (
        <>
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
        </>
    );
}

export default Specials;