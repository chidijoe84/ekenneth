
import AboutUs from './AboutUs/AboutUs';
import './App.css';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Pricing from './OurPricing/Pricing';

function App() {
  return (
    <div className="App">
     <Hero/>
     <AboutUs/>
     <Pricing/>
     <ContactUs/>
     <Footer/>
    </div>
  );
}

export default App;
