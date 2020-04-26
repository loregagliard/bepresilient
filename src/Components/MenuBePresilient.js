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


}