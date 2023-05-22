import bruchetta from '../Images/bruchetta.svg';

function CustomersSay() {
    return (
        <>
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
            </>
    );
}

export default CustomersSay;