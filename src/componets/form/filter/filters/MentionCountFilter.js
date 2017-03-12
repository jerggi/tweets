import React from 'react'
import { ControlLabel, Row, Col } from 'react-bootstrap'
import { Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { registerFilter } from '../../../../actions/appActions'
import { RenderNumberField } from '../../field/Field'

class MentionCountFilter extends React.Component {
    componentWillMount() {
        const { actions: { registerFilter } } = this.props

        registerFilter({
            key: 'mentionCountFrom',
            filter: (tweet, value) => tweet.entities.user_mentions.length >= value,
        })

        registerFilter({
            key: 'mentionCountTo',
            filter: (tweet, value) => tweet.entities.user_mentions.length <= value, 
        })
    }
    
    render () {
        return (
            <Row>
                <Col sm={4}>
                    <ControlLabel>Number of mentions</ControlLabel>
                </Col>
                <Col sm={4}>
                    <Field name="mentionCountFrom" placeholder="from" type="number" min={0} component={RenderNumberField} />
                </Col>
                <Col sm={4}>
                    <Field name="mentionCountTo" placeholder="to" type="number" min={0} component={RenderNumberField} />
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
)(MentionCountFilter)

