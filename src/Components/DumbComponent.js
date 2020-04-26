import React, {Component} from 'react'
import {Grid, Image} from 'semantic-ui-react'

export default class DumbComponent extends Component {
    render() {
        return(
            <Grid>
                <Image src={'https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/public/images/wireframe/image.png'} />
            </Grid>
        )
    }
}