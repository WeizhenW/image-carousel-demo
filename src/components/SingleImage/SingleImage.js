import React, { Component } from 'react';

//semantic ui
import { Image, Segment } from 'semantic-ui-react';

class SingleImage extends Component {
  render() {
    return (
            <Segment>
              <Image src={this.props.image.url} />
            </Segment>
    );
  }
}

export default SingleImage;
