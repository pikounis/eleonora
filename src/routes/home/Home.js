import React from "react";
import Carouselaki from "./components/carousel";
// import Grid from "@material-ui/core/Grid";
// import ArtCard from "../gallery/components/artCard";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import MuiCarousel from './components/muiCarousel';
import pstyle from "./styles";
import {colors} from "@material-ui/core";
import ComplexButton from "./components/complexButton";
import ContactForm from "./components/contactForm";
import {useSelector} from "react-redux";

const Home = () => {
    const formSubmitted = useSelector(state => state.formSubmitted)
    return(
        <div>
            <Carouselaki />
            <h1 style={{marginTop: 150, textAlign: 'center', }}>About Me</h1>
            <h5 style={pstyle}>
                Hi, I am Eleonora Pikouni. I am 17 years old from Greece and recently moved the UK to study Business
                and hospitality at the University of Plymouth. I love art and these are some of the pieces I have made
                in my spare time.
            </h5>
            <ComplexButton />
            <h1 style={{marginTop: 150, marginBottom: 100, textAlign: 'center', }}>Contact</h1>
            {/*{ formSubmitted ? <p>Message successfully sent</p> : <ContactForm/> }*/}
            <ContactForm/>
            {/*{formSubmitted && <h2 style={{textAlign: "center"}}>Message successfully sent</h2> }*/}
            <p style={{marginBottom: 100}}>
            </p>
        </div>
    )
}

export default Home;