import React, {Component} from 'react'
import {Grid, Card, Container, Image, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class GiveHelp extends Component {


    handleClickOnImABeginner = () => {
        window.location.href = window.location.origin + '/myskills'
    }

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
                                    href={window.location.origin + '/myskills'} 
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
                                    href={window.location.origin + '/myskills'} 
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
                                    href={window.location.origin + '/myskills'} 
                                    src={'./gps-call.png'}
                                >
                                    <Image src={'./ascolto.png'} />
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
                                    href={window.location.origin + '/myskills'} 
                                >
                                    <Image src={'./assistenza economica.png'} />
                                    <Card.Content>
                                        <Card.Header>
                                            Economic Support
                                        </Card.Header>
                                    </Card.Content>
                                </Card>
                            </Card.Group>
                            <br />
                            <br />
                            <Button 
                                fluid  
                                style={{'color': 'white', 'background-color':'#e71c64'}}
                                onClick={this.handleClickOnImABeginner}
                            >
                                I'm a beginner!
                            </Button>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}