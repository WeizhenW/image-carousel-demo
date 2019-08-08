import React, { Component } from 'react';
import './App.css';

//semantic ui
import { Grid, Image, Icon, Segment } from 'semantic-ui-react';

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

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 style={styles.header}>Carousel Demo</h1>
        <Grid>
          <Grid.Column mobile={16} tablet={4} computer={3}>
          <Icon style={styles.icon} name="angle left" />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={10}>
            <Segment>
              <Image src='/images/Chicago.JPG' />
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={4} computer={3}>
            <Icon style={styles.icon} name="angle right" />
          </Grid.Column>

        </Grid>
      </div>
    );
  }

}

export default App;
