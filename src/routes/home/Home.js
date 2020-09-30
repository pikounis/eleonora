import React from "react";
import Carouselaki from "./components/carousel";
// import Grid from "@material-ui/core/Grid";
// import ArtCard from "../gallery/components/artCard";
import photo1 from '../../assets/photos/1.JPG'
import photo6 from '../../assets/photos/6.JPG'
import photo7 from '../../assets/photos/7.JPG'
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import MuiCarousel from './components/muiCarousel';
import pstyle from "./styles";
import {colors} from "@material-ui/core";
import ComplexButton from "./components/complexButton";
import ContactForm from "./components/contactForm";

const Home = () => {
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
            <ContactForm/>
            <p style={{marginBottom: 100}}>

            </p>
        </div>

    )
}

export default Home;