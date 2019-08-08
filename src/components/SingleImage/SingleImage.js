import React, { Component } from 'react';

//semantic ui
import { Image, Icon, Segment } from 'semantic-ui-react';

const styles = {
  header: {
    fontSize: "32px",
    backgroundColor: "black",
    color: "white",
    padding: "20px"
  },
  icon: {
    margin: "50% auto",
    width: "50%",
    fontSize: "32px",
  }
}

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
