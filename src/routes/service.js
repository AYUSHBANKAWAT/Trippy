import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image from "../assets/10.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function service(){
    return (
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg={Image}
        title="Service Page"
        btnClass="hero-text .hide"
        />
        <Trip/>
        <Footer/>
        </>
    );
}

export default service;