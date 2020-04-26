import React, {Component} from "react";
import {Grid, Menu, Button} from "semantic-ui-react"

export default class MenuBePresilient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            path: props.path,
            user: props.user,
            activeItem: 'Home'
        }
        this.handleClickOnMenuItem = this.handleClickOnMenuItem.bind(this);
    }

    handleClickOnMenuItem = (e, {name}) => {
        this.setState({ activeItem: name })
        let {path} = this.state;
        switch (name) {
            case "Home": 
                window.location.href = path + "/home";
                break;
            case "Volunteers":
                window.location.href = path + "/volunteers";
                break;
            default:
                break;
        }
    }

    getMenu(user) {
        let {path} = this.state;
        return (
            <Menu fluid  size='large' fixed='top' style={{'backgroundColor':'#e71c64'}}>
                <Menu.Item
                    name={'Home'}
                    link={true}
                    onClick={this.handleClickOnMenuItem}
                    active={window.location.pathname === path}
                >
                    Home
                </Menu.Item>
                <Menu.Item
                    name={'Volunteers'}
                    link={true}
                    onClick={this.handleClickOnMenuItem}
                    active={window.location.pathname === path + "volunteers"}
                >
                    Volunteers
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted secondary>
                    Log in
                  </Button>
                  <Button as='a' inverted primary style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
            </Menu>
        )
    }

    render() {
        let {user} = this.state;
        return (<Grid>
            <Grid.Row>
                <Grid.Column>
                    {this.getMenu()}
                </Grid.Column>
            </Grid.Row>
        </Grid>)
    }

}