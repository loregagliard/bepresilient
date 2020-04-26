import React, {Component} from 'react';
import {Grid, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

export default class HeaderBePresilient extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Image 
                            src={'/bepresilient-logo.png'}
                            as={'a'}
                            width={'200px'}
                            href={'/'}
                            target={'_blank'}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
