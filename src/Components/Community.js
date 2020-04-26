import React, {Component} from 'react';
import {Grid, Button, Segment, Item, Card, Header, Message, Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

export default class Community extends Component {

    renderMessages() {
        return (
            <Segment.Group horizontal>
                <Segment>
                    <Message key={'covid'} floating compact color={'red'} size={'huge'} >
                        <Message.Header>Covid-19</Message.Header>
                        <p>Help us to deliver food and medicines to people in need!</p>
                        <Button fluid inverted color={'red'}>
                            Click here to help!
                        </Button>
                    </Message>
                </Segment>
                <Segment>
                    <Message key={'blood'} floating compact color={'red'} size={'huge'} >
                        <Message.Header>Blood Donation</Message.Header>
                        <p>Blood donation is need due to earthquake emergency!</p>
                        <Button fluid inverted color={'red'}>
                            Click here to help!
                        </Button>
                    </Message>
                </Segment>
            </Segment.Group>
        )
    }



    render() {
        return(
            <Container>
                {this.renderMessages()}
                <Grid divided='vertically'>
                <Grid.Row column={2} padded={"true"}>
                    <Grid.Column width={7} floated={'left'}>
                        <Segment>
                            <Header>Round Tables</Header>
                            <Item.Group divided>
                                <Item>
                                    <Item.Image size='small' src='/1-removebg-preview.png' />
                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header as='a'>How to use IPD</Item.Header>
                                        <Item.Meta>
                                            <span className='cinema'>30th April, 2020</span>
                                        </Item.Meta>
                                        Let us discuss on how to make tutorial and spread this knowledge
                                    </Item.Content>
                                </Item>
                                <Item>
                                    <Item.Image size='small' src='/2-removebg-preview.png' />
                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header as='a'>How to use IPD</Item.Header>
                                        <Item.Meta>
                                            <span className='cinema'>30th April, 2020</span>
                                        </Item.Meta>
                                        Let us discuss on how to make tutorial and spread this knowledge
                                    </Item.Content>
                                </Item>
                                <Item>
                                    <Item.Image size='small' src='/3-removebg-preview.png' />
                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header as='a'>How to use IPD</Item.Header>
                                        <Item.Meta>
                                            <span className='cinema'>30th April, 2020</span>
                                        </Item.Meta>
                                        Let us discuss on how to make tutorial and spread this knowledge
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={9} floated={'right'}>
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
            </Container>
        )
    }
}