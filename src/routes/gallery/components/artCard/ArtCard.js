import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import ArtDialog from "../artDialog";


const ArtCard = ({ title, image, description }) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClose = () => setOpen(false);

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => setOpen(true)}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { title }
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        { description }
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => {setOpen(true)}} >
                    Learn More
                </Button>
            </CardActions>
            <ArtDialog open={open} handleClose={handleClose} image={image} title={title} description={description} />
        </Card>
    );
}

export default ArtCard;