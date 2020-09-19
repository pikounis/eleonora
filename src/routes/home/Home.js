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

const Home = () => {
    return(
        <div>
            {/*<h1>hi</h1>*/}
            <Carouselaki />
        </div>

    )
}

export default Home;