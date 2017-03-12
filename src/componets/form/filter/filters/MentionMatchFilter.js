import React from 'react'
import { ControlLabel, Row, Col } from 'react-bootstrap'
import { Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { findIndex } from 'lodash'

import { registerFilter } from '../../../../actions/appActions'
import { RenderTextField } from '../../field/Field'

class MentionMatchFilter extends React.Component {
    componentWillMount() {
        const { actions: { registerFilter } } = this.props

        registerFilter({
            key: 'mentionMatch',
            filter: (tweet, value) => {
                const index = findIndex(tweet.entities.user_mentions, (mention) => {
                    return mention.screen_name.toLowerCase() === value.toLowerCase()
                })

                return index !== -1
            }
        })
    }

    render () {
        return (
            <Row>
                <Col sm={4} >
                    <ControlLabel>Mention</ControlLabel>
                </Col>
                <Col sm={4} >
                    <Field name="mentionMatch" component={RenderTextField} />
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
)(MentionMatchFilter)
