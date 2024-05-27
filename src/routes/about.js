import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/night.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function about(){
    return (
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg={AboutImage}
        title="About Us"
        btnClass="hero-text .hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default about;