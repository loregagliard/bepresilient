import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderBePresilient from './Components/HeaderBePresilient';
import MenuBePresilient from './Components/MenuBePresilient';
import DumbComponent from './Components/DumbComponent';
import GiveOrNeed from './Components/GiveOrNeed';
import LogIn from './Components/LogIn';
import About from './Components/About';
import NeedHelp from './Components/NeedHelp';
import GiveHelp from './Components/GiveHelp';
import MySkills from './Components/MySkills';
import './App.css';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

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
    let webappdir = '';
    return(
      <Router basename={webappdir}>
        <Grid padded>
          <Grid.Row columns={1} padded>
            <Grid.Column padded>
              <MenuBePresilient user={user} path={webappdir} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid padded>
          <Grid.Row padded>
            <Grid.Column padded>
              <Route exact={true} path={"/"} component={GiveOrNeed} />
              <Route exact={true} path={"/needhelp"} component={NeedHelp} />
              <Route exact={true} path={"/login"} component={LogIn}/>
              <Route exact={true} path={"/home"} component={DumbComponent} />
              <Route exact={true} path={"/volunteers"} component={DumbComponent} />
              <Route exact={true} path={"/myskills"} component={MySkills} />
              <Route exact={true} path={"/about"} component={About} />
              <Route exact={true} path={"/givehelp"} component={GiveHelp} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
      )
  }

}

export default App;
