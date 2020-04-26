import React, {Component} from 'react'
import {Grid, Card, Image} from 'semantic-ui-react'

export default class DumbComponent extends Component {
    render() {
        return(
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Card.Group centered>
                            <Image src='./icona-sos.png' size={'tiny'} />
                            <Card key={'givehelp'} link>
                                <Card.Content>
                                    Give Help
                                </Card.Content>
                            </Card>
                            <Card key={'needhelp'} link>
                                <Image src='./icona-megafono.png' size={'tiny'} />
                                <Card.Header>
                                    Need Help
                                </Card.Header>
                            </Card>
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}