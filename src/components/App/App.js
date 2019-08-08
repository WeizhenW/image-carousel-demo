import React, { Component } from 'react';
import './App.css';

import SingleImage from '../SingleImage/SingleImage';
import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';

//semantic ui
import { Grid, Icon, Image, Modal } from 'semantic-ui-react';

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
    fontSize: "36px",
  },
  pageNum: {
    fontSize: "24px",
  }
}

class App extends Component {
  //local state to store the image related information
  state = {
    imageArray: [
      {
        id: 0,
        url: '/images/Chicago.JPG',
        description: 'this is Chicago',
      },
      {
        id: 1,
        url: '/images/Iceland.JPG',
        description: 'this is Iceland',
      },
      {
        id: 2,
        url: '/images/Singapore.JPG',
        description: 'this is Singapore',
      },
    ],
    pointer: 0, //pointer to record the current displayed image
    numberOfImages: 3,
    autoPlay: false,
    showModal: false,
  }

  //function to handle moving to the next image
  handleForward = () => {
    if (this.state.pointer !== 2) {
      this.setState({
        pointer: this.state.pointer + 1,
      })
    } else {
      return;
    }
  }
  //function to handle moving to the previous image
  handleBackward = () => {
    if (this.state.pointer !== 0) {
      this.setState({
        pointer: this.state.pointer - 1,
      })
    } else {
      return;
    }
  }

  //function to close the modal display
  handleToggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  }



  render() {
    return (
      <div className="App">
        <h1 style={styles.header}>Carousel Demo</h1>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
        <Grid>
          {/* section to display full size image */}
          <Grid.Row>
            <Grid.Column mobile={16} tablet={4} computer={3}>
              <Icon style={styles.icon} name="angle left" disabled={this.state.pointer === 0} onClick={this.handleBackward} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={10}>
              <SingleImage image={this.state.imageArray[this.state.pointer]} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={4} computer={3}>
              <Icon style={styles.icon} name="angle right" disabled={this.state.pointer === 2} onClick={this.handleForward} />
            </Grid.Column>
          </Grid.Row>

          {/* section for auto play and zoom in */}
          <Grid.Row>
            <Grid.Column mobile={16} tablet={4} computer={3}>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={10}>
              <Grid columns={3}>
                <Grid.Column>
                  {this.state.autoPlay ?
                    <Icon style={{ fontSize: "24px" }} name="stop" />
                    :
                    <Icon style={{ fontSize: "24px" }} name="play" />
                  }
                </Grid.Column>
                <Grid.Column>
                  <Icon style={{ fontSize: "24px" }} name="zoom in" onClick={this.handleToggleModal}/>
                </Grid.Column>
                <Grid.Column>
                  <p style={styles.pageNum}>{this.state.pointer + 1}/{this.state.numberOfImages}</p>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={4} computer={3}>
            </Grid.Column>
          </Grid.Row>

          {/* section for image thumbnail */}
          <Grid.Row>
            <Grid.Column mobile={16} tablet={4} computer={3}>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={10}>
              <ImageThumbnail imageArray={this.state.imageArray} pointer={this.state.pointer} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={4} computer={3}>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* below is the modal for showing full screen image */}

        <Modal
          open={this.state.showModal}
          onClose={this.handleToggleModal}
          basic
          size='large'
        >
          <Modal.Content image>
            <Image src={this.state.imageArray[this.state.pointer].url} />
          </Modal.Content>
        </Modal>

      </div>
    );
  }

}

export default App;
