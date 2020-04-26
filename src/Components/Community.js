import React, {Component} from 'react';
import {Grid, Button, Segment, Item, Image, Header, Message, Container, Modal, Divider, Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

const imagesProfiles = [
    {source: './1 copia.png'},
    {source: './2 copia.png'},
    {source: './3 copia.png'},
    {source: './4 copia.png'},
    {source: './5 copia.png'},
    {source: './6 copia.png'},
    {source: './7 copia.png'},
    {source: './8 copia.png'},
    {source: './9 copia.png'},
    {source: './10 copia.png'},
    {source: './11 copia.png'},
    {source: './12 copia.png'},
    {source: './13 copia.png'},
    {source: './14 copia.png'},
]


export default class Community extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            modalImage: '',
            modalKey: ''
        }
    }


    renderMessages() {
        return (
            <Segment>
                <Header textAlign={'center'}>EMERGENCY CALLS</Header>
            <Segment.Group horizontal raised style={{'background-color':'lightskyblue!important'}}>
                <Segment style={{'background-color':'lightskyblue!important'}}>
                    <Message key={'covid'} floating compact color={'red'} size={'huge'} >
                        <Message.Header>Covid-19</Message.Header>
                        <p>Help us to deliver food and medicines to people in need!</p>
                        <Button fluid inverted color={'red'}>
                            Click here to help!
                        </Button>
                    </Message>
                </Segment>
                <Segment style={{'background-color':'lightskyblue!important'}}>
                    <Message key={'blood'} floating compact color={'red'} size={'huge'} >
                        <Message.Header>Blood Donation</Message.Header>
                        <p>Blood donation is need due to earthquake emergency!</p>
                        <Button fluid inverted color={'red'}>
                            Click here to help!
                        </Button>
                    </Message>
                </Segment>
            </Segment.Group>
            </Segment>
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
                            <Header textAlign={'center'}>ROUND TABLES</Header>
                            <Divider />
                            <Item.Group divided>
                                <Item>
                                    <Item.Image size='small' src='/1-withbg-preview.png' />
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
                            <Header textAlign={'center'}>COMMUNITY</Header>
                            <Divider />
                            <Card.Group itemsPerRow={2}>
                                {imagesProfiles.map(each => {
                                    return(
                                        <Card link raised key={each.source + 'card'}>
                                            <Image as={'a'} size={'medium'} key={each.source} src={each.source} />
                                        </Card>)
                                })}
                            </Card.Group>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Modal>
                
            </Modal>
            </Container>
        )
    }
}