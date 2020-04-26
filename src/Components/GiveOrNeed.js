import React, {Component} from 'react'
import {Grid, Card, Image, Statistic} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'

export default class GiveOrNeed extends Component {
    render() {
        return(
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Card.Group centered>
                            <Card key={'givehelp'} link raised as={'a'} href={window.location.href + 'givehelp'}>
                                <Image src='./icona-sos.png' fluid />
                                <Card.Content textAlign={'center'}>
                                    <Statistic label='' value='Give Help' text />
                                </Card.Content>
                            </Card>
                            <Card key={'needhelp'} link raised as={'a'} href={window.location.href + 'needhelp'}>
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