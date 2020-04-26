import React, {Component} from 'react';
import {Grid, Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';



export default class MySkills extends Component {
    render() {
        return(
            <Grid>
                <Grid.Row centered>
                    <Grid.Column>
                        <Card.Group itemsPerRow={3}>
                            <Card key={'cardtime'} link raised>
                                <Card.Content>
                                    <Card.Header textAlign={'center'}>
                                        Time
                                    </Card.Header>
                                </Card.Content>
                            </Card>
                            <Card key={'carddrivinglicense'} link raised>
                                <Card.Content>
                                    <Card.Header textAlign={'center'}>
                                        Driving License
                                    </Card.Header>
                                </Card.Content>
                            </Card>
                            <Card key={'cardempathy'} link raised>
                                <Card.Content>
                                    <Card.Header textAlign={'center'}>
                                        Empathy
                                    </Card.Header>
                                </Card.Content>
                            </Card>
                            <Card key={'otherlanguage'} link raised>
                                <Card.Content>
                                    <Card.Header textAlign={'center'}>
                                        Other Language
                                    </Card.Header>
                                </Card.Content>
                            </Card>
                            <Card key={'cardsignlanguage'} link raised>
                                <Card.Content>
                                    <Card.Header textAlign={'center'}>
                                        Sign Language
                                    </Card.Header>
                                </Card.Content>
                            </Card>
                            <Card key={'cardbls'} link raised>
                                <Card.Content>
                                    <Card.Header textAlign={'center'}>
                                        BLS
                                    </Card.Header>
                                </Card.Content>
                            </Card>
                            <Card key={'cardcoordination'} link raised>
                                <Card.Content>
                                    <Card.Header textAlign={'center'}>
                                        Coordination
                                    </Card.Header>
                                </Card.Content>
                            </Card>
                            <Card key={'cardlisteningskills'} link raised>
                                <Card.Content>
                                    <Card.Header textAlign={'center'}>
                                        Listening Skills
                                    </Card.Header>
                                </Card.Content>
                            </Card>
                            <Card key={'cardsocialcare'} link raised>
                                <Card.Content>
                                    <Card.Header textAlign={'center'}>
                                        Social Care
                                    </Card.Header>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}