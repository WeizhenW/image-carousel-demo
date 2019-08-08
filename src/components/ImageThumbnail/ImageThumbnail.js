import React, { Component } from 'react';

//semantic ui
import { Image, Grid } from 'semantic-ui-react';

import './ImageThumbnail.css';

const styles = {
    image: {
        height: "100px",
        margin: "20px",
    }
}

class ImageThumbnail extends Component {
    render() {
        return (
            <Grid columns={6}>
                {this.props.imageArray.map(image =>
                    <Grid.Column>
                        {/* check if the thumbnail id is the same as the pointer location => highlight the thumbnail */}
                        {image.id === this.props.pointer ?
                            <Image style={styles.image} className="imageHighlighted" key={image.id} src={image.url} alt={image.description} />
                            :
                            <Image style={styles.image} key={image.id} src={image.url} alt={image.description} />
                        }
                    </Grid.Column>
                )}
            </Grid>
        );
    }
}

export default ImageThumbnail;
