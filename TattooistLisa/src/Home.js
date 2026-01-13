import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import { useEffect } from 'react';
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="Home">
          
            <Header />
            <About />
            <Services />
            
            
            <Clients />
           

        </div>
    );
};

export default Home;
