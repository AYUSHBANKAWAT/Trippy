import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination"
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function home(){
    return (
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg="https://images.pexels.com/photos/3830880/pexels-photo-3830880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Your Journey Your Story"
        text="Choose your destination"
        btnClass="show"
        btnName="Travel Plan"
        url="/"
        />
        <Destination/>
        <Trip />
        <Footer/>
        </>
    );
}

export default home;