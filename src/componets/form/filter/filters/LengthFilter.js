import React from 'react'
import { ControlLabel, Row, Col } from 'react-bootstrap'
import { Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { registerFilter } from '../../../../actions/appActions'
import { RenderNumberField } from '../../field/Field'

class LengthFilter extends React.Component {
    componentWillMount() {
        const { actions: { registerFilter } } = this.props

        registerFilter({
            key: 'tweetLengthFrom',
            filter: (tweet, value) => tweet.text.length >= value, 
        })

        registerFilter({
            key: 'tweetLengthTo',
            filter: (tweet, value) => tweet.text.length <= value, 
        })
    }

    render () {
        return (
            <Row>
                <Col sm={4} >
                    <ControlLabel>Tweet length</ControlLabel>
                </Col>
                <Col sm={4} >
                    <Field name="tweetLengthFrom" placeholder="from" component={RenderNumberField} />
                </Col>
                <Col sm={4} >
                    <Field name="tweetLengthTo" placeholder="to" component={RenderNumberField} />
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
)(LengthFilter)
