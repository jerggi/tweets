import React from 'react'
import { ControlLabel, Row, Col } from 'react-bootstrap'
import { Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { registerFilter } from '../../../../actions/appActions'
import { RenderTextField } from '../../field/Field'

class TextMatchFilter extends React.Component {
    componentWillMount() {
        const { actions: { registerFilter } } = this.props

        registerFilter({
            key: 'textMatch',
            filter: (tweet, value) => tweet.text.toLowerCase().includes(value.toLowerCase()), 
        })
    }

    render () {
        return (
            <Row>
                <Col sm={4} >
                    <ControlLabel>Text</ControlLabel>
                </Col>
                <Col sm={4} >
                    <Field name="textMatch" component={RenderTextField} />
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
)(TextMatchFilter)
