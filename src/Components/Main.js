import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import About from './About';

function Main() {
    return (
        <main className="container">
            <CallToAction></CallToAction>
            <Specials></Specials>
            <CustomersSay></CustomersSay>
            <About></About>
        </main>
    );
}

export default Main;