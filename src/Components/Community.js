import React, {Component} from 'react';
import {Grid, Button, Segment, Item, Card, Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

export default class DumbComponent extends Component {
    render() {
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Grid centered>
                            <Grid.Row columns={2} padded>
                                <Grid.Column width={4}>
                                    <Segment raised style={{"background-color": "red", "border-radius": "0"}}>
                                        <Button size={'huge'} style={{"color":"white", "background-color": "red"}} fluid>
                                            Covid-19
                                        </Button>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Segment raised style={{"background-color": "red", "border-radius": "0"}}>
                                        <Button size={'huge'} style={{"color":"white", "background-color": "red"}} fluid>
                                            Blood Donation
                                        </Button>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row column={2} padded>
                                <Grid.Column width={4} floated={'left'}>
                                    <Container>
                                        <Segment>
                                            <Item.Group>
                                                <Item>
                                                    Item
                                                </Item>
                                            </Item.Group>
                                        </Segment>
                                    </Container>
                                </Grid.Column>
                                <Grid.Column width={12} floated={'right'}>
                                    <Segment>
                                        <Card.Group itemsPerRow={3}>
                                        <Card style={{'border': 'solid thick lightskyblue!important'}}>
                                            <Card.Content>
                                                <Card.Header>Matthew Harris</Card.Header>
                                                <Card.Meta>Co-Worker</Card.Meta>
                                                <Card.Description>
                                                    Matthew is a pianist living in Nashville.
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                        <Card style={{'border': 'solid thick lightskyblue!important'}}>
                                            <Card.Content>
                                                <Card.Header content='Jake Smith' />
                                                <Card.Meta content='Musicians' />
                                                <Card.Description content='Jake is a drummer living in New York.' />
                                            </Card.Content>
                                            </Card>

                                        <Card style={{'border': 'solid thick lightskyblue!important'}}>
                                            <Card.Content
                                                header='Elliot Baker'
                                                meta='Friend'
                                                description='Elliot is a music producer living in Chicago.'
                                            />
                                        </Card>

                                        <Card
                                            style={{'border': 'solid thick lightskyblue!important'}}
                                            header='Jenny Hess'
                                            meta='Friend'
                                            description='Jenny is a student studying Media Management at the New School'
                                        />
                                        </Card.Group>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}