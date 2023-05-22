import bruchetta from '../Images/bruchetta.svg';

function About() {
    return(
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
    );
}

export default About;