import React, {Component} from 'react'
import {Grid, Card, Image, Message, Statistic} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'

export default class DumbComponent extends Component {
    render() {
        return(
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Card.Group centered doubling>
                            <Card key={'givehelp'} link raised>
                                <Image src='./icona-sos.png' fluid />
                                <Card.Content textAlign={'center'}>
                                    <Statistic label='' value='Give Help' text />
                                </Card.Content>
                            </Card>
                            <Card key={'needhelp'} link raised>
                                <Image src='./icona-megafono2.png' fluid />
                                <Card.Content textAlign={'center'} color={'red'}>
                                    <Statistic label='' value='Need Help' text />
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}