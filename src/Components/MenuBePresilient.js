import React, {Component} from "react";
import {Grid, Menu, Dropdown, Button, Image} from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'


const languageOptions = [
    { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
    { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
    { key: 'Danish', text: 'Danish', value: 'Danish' },
    { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
    { key: 'English', text: 'English', value: 'English' },
    { key: 'French', text: 'French', value: 'French' },
    { key: 'German', text: 'German', value: 'German' },
    { key: 'Greek', text: 'Greek', value: 'Greek' },
    { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
    { key: 'Italian', text: 'Italian', value: 'Italian' },
    { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
    { key: 'Korean', text: 'Korean', value: 'Korean' },
    { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
    { key: 'Persian', text: 'Persian', value: 'Persian' },
    { key: 'Polish', text: 'Polish', value: 'Polish' },
    { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
    { key: 'Russian', text: 'Russian', value: 'Russian' },
    { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
    { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
    { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
    { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
  ]

export default class MenuBePresilient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            path: props.path,
            user: props.user,
            activeItem: 'Home'
        }
        this.handleClickOnMenuItem = this.handleClickOnMenuItem.bind(this);
        this.handleClickOnAssociation = this.handleClickOnAssociation.bind(this);
    }

    handleClickOnAssociation = () => {
        window.location.href = window.location.pathname + '/association'
    }

    handleClickOnMenuItem = (e, {name}) => {
        this.setState({ activeItem: name })
        let {path} = this.state;
        switch (name) {
            case "associations": 
                window.location.href = window.location.href + "/home";
                break;
            default:
                break;
        }
    }
    
    handleClickOnLogIn = () => {
        window.location.href = window.location.href + "login";
    }

    getMenu(user) {
        let {path} = this.state;
        return (
            <Menu fluid text size='large' fixed='top' style={{'backgroundColor':'#e71c64'}}>
                <Menu.Item>
                    <Button inverted>
                        I'm an Organization
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button inverted color={'white'}>
                        Who We Are
                    </Button>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Image src={'./logo bianco.png'} size={'small'} />
                </Menu.Item>
                <Menu.Item position='right'>
                <Dropdown
                    button
                    className='icon'
                    floating
                    labeled
                    icon='world'
                    options={languageOptions}
                    search
                    text='Select Language'
                    style={{'color': '#e4e4e4', 'background-color':'#e71c64'}}
                />
                </Menu.Item>
                <Menu.Item>
                    <Button
                        inverted
                        secondary
                        onClick={this.handleClickOnLogIn}
                    >
                        Log In
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