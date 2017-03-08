import React from 'react'
import Tweet from 'react-tweet'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { map } from 'lodash'

class Tweets extends React.Component {
    render() {
        const { tweetList } = this.props

        return (
            <div>
                <Grid>
                    <Col sm={12} md={8} mdPush={2}>
                        <div>
                            {map(tweetList, (t) => {
                                return (
                                    <div key={t.id_str}>
                                        <Tweet data={t} />
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                </Grid>
            </div>
        )
    }
}

export default Tweets