import React, {Component} from 'react'
import {Grid, Card} from 'semantic-ui-react'

const src = './icona-sos.png'

export default class NeedHelp extends Component {
    render() {
        return(
            <Grid>
                <Card.Group>
                    <Card color='yellow' image={src} header='Assistenza Sociale' />
                    <Card color='orange' image={src} header='Assistenza Sanitaria' />
                    <Card color='teal' image={src} header='Ascolto' />
                    <Card color='green' image={src} header='Assistenza Economica' />
                </Card.Group>
            </Grid>
        )
    }
}