import React from 'react'
import { ControlLabel, Row, Col } from 'react-bootstrap'
import { Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { findIndex } from 'lodash'

import { registerFilter } from '../../../../actions/appActions'
import { RenderTextField } from '../../field/Field'

class HashtagMatchFilter extends React.Component {
    componentWillMount() {
        const { actions: { registerFilter } } = this.props

        registerFilter({
            key: 'hashtagMatch',
            filter: (tweet, value) => {
                const index = findIndex(tweet.entities.hashtags, (hashtag) => {
                    return hashtag.text.toLowerCase() === value.toLowerCase()
                })

                return index !== -1
            }
        })
    }

    render () {
        return (
            <Row>
                <Col sm={4} >
                    <ControlLabel>Hashtag</ControlLabel>
                </Col>
                <Col sm={8} >
                    <Field name="hashtagMatch" component={RenderTextField} />
                </Col>
            </Row>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ registerFilter }, dispatch)
    }
}

export default connect(
  null,
  mapDispatchToProps
)(HashtagMatchFilter)
