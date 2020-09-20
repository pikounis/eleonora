import React from "react";
import Grid from "@material-ui/core/Grid";
import ArtCard from "./components/artCard";
import photo1 from '../../assets/photos/1.JPG'
import photo2 from '../../assets/photos/2.JPG'
import photo3 from '../../assets/photos/3.JPG'
import photo4 from '../../assets/photos/4.JPG'
import photo5 from '../../assets/photos/5.JPG'
import photo6 from '../../assets/photos/6.JPG'
import photo7 from '../../assets/photos/7.JPG'
import photo8 from '../../assets/photos/8.JPG'
import photo9 from '../../assets/photos/9.JPG'
import photo10 from '../../assets/photos/10.JPG'
import photo11 from '../../assets/photos/11.JPG'
import photo12 from '../../assets/photos/12.JPG'
import photo13 from '../../assets/photos/13.JPG'
import photo14 from '../../assets/photos/14.JPG'

const Gallery = () => {
    return (
        <div>
            {/*<h1>Gallery</h1>*/}
            <Grid
                container
                spacing={2}
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
            >
                <Grid item>
                    <ArtCard
                        title={"ergo 1"}
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
                        "unknown printer took a galley of type and scrambled it to make a type specimen book. " +
                        "It has survived not only five centuries, but also the leap into electronic typesetting, " +
                        "remaining essentially unchanged. It was popularised in the 1960s with the release of " +
                        "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing" +
                        " software like Aldus PageMaker including versions of Lorem Ipsum."}
                        image={photo1} />
                </Grid>
                <Grid item>
                    <ArtCard
                        title={"ergo 1"}
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
                        "unknown printer took a galley of type and scrambled it to make a type specimen book."}
                        image={photo2} />
                </Grid>
                <Grid item>
                    <ArtCard
                        title={"ergo 1"}
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
                        "unknown printer took a galley of type and scrambled it to make a type specimen book. " +
                        "It has survived not only five centuries, but also the leap into electronic typesetting, " +
                        "remaining essentially unchanged."}
                        image={photo3} />
                </Grid>
                <Grid item>
                    <ArtCard
                        title={"ergo 1"}
                        description={"This is artaki 1"}
                        image={photo4} />
                </Grid>
                <Grid item>
                    <ArtCard
                        title={"ergo 1"}
                        description={"This is artaki 1"}
                        image={photo5} />
                </Grid>
                <Grid item>
                    <ArtCard title={"ergo 1"} description={"This is artaki 1"} image={photo6} />
                </Grid>
                <Grid item>
                    <ArtCard title={"ergo 1"} description={"This is artaki 1"} image={photo7} />
                </Grid>
                <Grid item>
                    <ArtCard title={"ergo 1"} description={"This is artaki 1"} image={photo8} />
                </Grid>
                <Grid item>
                    <ArtCard title={"ergo 1"} description={"This is artaki 1"} image={photo9} />
                </Grid>
                <Grid item>
                    <ArtCard title={"ergo 1"} description={"This is artaki 1"} image={photo10} />
                </Grid>
                <Grid item>
                    <ArtCard title={"ergo 1"} description={"This is artaki 1"} image={photo11} />
                </Grid>
                <Grid item>
                    <ArtCard title={"ergo 1"} description={"This is artaki 1"} image={photo12} />
                </Grid>
                <Grid item>
                    <ArtCard title={"ergo 1"} description={"This is artaki 1"} image={photo13} />
                </Grid>
                <Grid item>
                    <ArtCard title={"ergo 1"} description={"This is artaki 1"} image={photo14} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Gallery;