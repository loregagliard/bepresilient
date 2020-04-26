import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderBePresilient from './Components/HeaderBePresilient';
import MenuBePresilient from './Components/MenuBePresilient';
import DumbComponent from './Components/DumbComponent';
import './App.css';
import { Grid } from 'semantic-ui-react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: {
        role: 'admin'
      }
    }
  }

  render() {
    let {user} = this.state;
    let webappdir = "/";
    return(
      <Router basename={webappdir}>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <HeaderBePresilient />
              <MenuBePresilient user={user} path={webappdir} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Route exact={true} path={"/"} component={DumbComponent} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
      )
  }

}

export default App;
