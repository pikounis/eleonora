import {isMobile} from 'react-device-detect';

const height = window.innerHeight - (isMobile ? 56 : 64);

const styles = {
    windowSize: {
        height,
    },
    carouselItem: {
        height,
        width: 'auto',
        // height: 'auto',
        // width: '50%',

    }
}

export default styles;