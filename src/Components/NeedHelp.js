import React, {Component} from 'react';
import {Grid, Card, Container, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

export default class NeedHelp extends Component {
    render() {
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Container>
                            <Card.Group itemsPerRow={4} centered>
                                <Card 
                                    color='yellow' 
                                    link 
                                    raised 
                                    as={'a'} 
                                    href={window.location.origin + '/login'} 
                                >
                                    <Image src={'./solo casa.png'}/>
                                    <Card.Content>
                                        <Card.Header>
                                            Social Care
                                        </Card.Header>
                                    </Card.Content>
                                </Card>
                                <Card 
                                    color='orange' 
                                    link 
                                    raised 
                                    as={'a'} 
                                    href={window.location.origin + '/login'} 
                                >
                                    <Image src={'./assistenza sanitaria.png'} />
                                    <Card.Content>
                                        <Card.Header>
                                            Health Care
                                        </Card.Header>  
                                    </Card.Content>
                                </Card>
                                <Card 
                                    color='teal' 
                                    link 
                                    raised 
                                    as={'a'} 
                                    href={window.location.origin + '/login'} 
                                    src={'./gps-call.png'}
                                >
                                    <Image src={'./gps-call.png'} />
                                    <Card.Content>
                                        <Card.Header>
                                            Listening Skills
                                        </Card.Header>
                                    </Card.Content>
                                </Card>
                                <Card 
                                    color='green' 
                                    link 
                                    raised
                                    as={'a'} 
                                    href={window.location.origin + '/login'} 
                                >
                                    <Image src={'./assistenza economica.png'} />
                                    <Card.Content>
                                        <Card.Header>
                                            Economic Support
                                        </Card.Header>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}