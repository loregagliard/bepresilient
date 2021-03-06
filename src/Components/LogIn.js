import React, {Component} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';


export default class LogIn extends Component {
    
    constructor(props) {
        super(props);
        this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this)
    }

    handleSubmitLogIn = () => {
        window.location.href = window.location.origin + '/community'
    }


    render() {
        return (
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Image src='/bepresilient-logo.png' size={'small'} size={'large'}  centered />
                    <Header as='h2' style={{'color': '#e71c64'}} textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='large' raised>
                        <Segment raised>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />
                            <Button inverted primary fluid size='large' onClick={this.handleSubmitLogIn}>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message raised>
                        New to us? <a href='/about'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        )
    }
}