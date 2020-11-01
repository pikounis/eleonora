import React from "react";
import Grid from "@material-ui/core/Grid";
import ArtCard from "./components/artCard";
import galleryData from '../../data/gallery.json';

const Gallery = () => {
    return (
        <div>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
                style={{ paddingTop: 20 }}
            >
                { galleryData.galleryImages.map(art  => art.author).map(artwork =>
                    <Grid item>
                        { console.log(artwork) }
                        <ArtCard
                            title={artwork.title}
                            description={artwork.description}
                            image={`${process.env.PUBLIC_URL}${artwork.photo}`} />
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default Gallery;