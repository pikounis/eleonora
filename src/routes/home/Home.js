import React from 'react';
import Carouselaki from './components/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import pstyle from './styles';
import ComplexButton from './components/complexButton';
import ContactForm from './components/contactForm';

const Home = () => (
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
);

export default Home;
