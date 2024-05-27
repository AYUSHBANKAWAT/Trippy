import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image from "../assets/3.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function contact(){
    return (
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg={Image}
        title="Contact"
        btnClass="hero-text .hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    );
}

export default contact;