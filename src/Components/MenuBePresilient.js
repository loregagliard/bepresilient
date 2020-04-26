import React, {Component} from "react";
import {Grid, Menu} from "semantic-ui-react"

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
            <Menu pointing compact fluid>
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
                    active={window.location.pathname === path + "/volunteers"}
                >
                    Volunteers
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