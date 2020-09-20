import React from "react";
import photo1 from '../../../../assets/photos/1.JPG'
import photo3 from '../../../../assets/photos/3.JPG'
import photo7 from '../../../../assets/photos/7.JPG'
import photo6 from '../../../../assets/photos/6.JPG'
import photo11 from '../../../../assets/photos/11.JPG'
import photo12 from '../../../../assets/photos/12.JPG'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./styles";
import {isMobile} from 'react-device-detect';


const slides = [
    {
        photo: photo11,
        title: "title1",
        description: "desc1"
    },
    {
        photo: photo6,
        title: "title1",
        description: "desc1"
    },
    {
        photo: photo12,
        title: "title1",
        description: "desc1"
    }
]

const mobileSlides = [
    {
        photo: photo1,
        title: "Mobile title1",
        description: "desc1"
    },
    {
        photo: photo3,
        title: "Mobile title1",
        description: "desc1"
    },
    {
        photo: photo7,
        title: "Mobile title1",
        description: "desc1"
    }
]


const Carouselaki = () => {
    return(
        <Carousel style={styles.windowSize}>
            {
                (isMobile ? mobileSlides : slides).map(slide =>
                    <Carousel.Item style={styles.windowSize}>
                        <img style={styles.windowSize}
                             className="d-block w-100"
                             src={slide.photo}
                             alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    )
}

export default Carouselaki;