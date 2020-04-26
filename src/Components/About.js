import React, {Component} from 'react'
import {Grid, Container, Header, Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'

export default class About extends Component {
    render() {
        return(
            <Grid padded>
                <br />
                <br />
                <br />
                <br />
                <Container textAlign={'center'}>         
                    <Header>INSPIRATION</Header>
                    <Segment>
                    We are all helping if we know how do it. Emergency times show the world the bright side of people and their will to help the less fortunate. The issue is, most of them simply don&#39;t know how to effectively address their efforts to the recipients, working along with other willful volunteers, institutions and PA, this way dissipating energies, time and (not only financial) resources. As proud blood donors and volunteers, for example, we lived a critical situation with blood donation: during emergencies everyone would be pleased to give their blood for the will to help people hit by CoVid-19 pandemy, as well as earthquakes or other natural disasters, not being aware about timing, logistics and healthcare issues required by becoming a blood donor. Then we wondered: what if anyone willing to be helpful could easily find out how to commit in the most effective and necessary way, meeting other people and gaining knowledge and expertise all along the way?

Here comes our BePresilient dream we are about to turn into reality: more than an app, a step above a community, the &quot;most social&quot; of social networks. A platform with eyes wide open on the burning spots all around the world, matching the actual needs of who&#39;s hit with soon-to-be volunteers&#39; expectations and desire to make a difference.
                    </Segment>
                    <Header>HOW YOU CAN CONTRIBUTE</Header>
                    <Segment>
                    BePresilient connects aspiring volunteers with open challenges around the world and the people they face (charities, institutions, PAs, funds, etc.); meets expectations and needs, connecting people by sharing their vision of a better world and providing social and collaborative growth.

                    Through an open source system, each volunteer operator in Europe can integrate and adapt the platform according to their needs, creating a solid and reliable ecosystem, composed of the main actors who take steps to save us during emergencies.

                    A simple interface, which allows those who want to help and those who need a hand to meet thanks to technology in quick and clear ways, eliminating any impersonality that technology is likely to bring in these very empathic situations. The real response to emergencies is people!
                    </Segment>
                </Container>
            </Grid>
        )
    }
}