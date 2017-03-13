import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import { ControlLabel, Col, Row } from 'react-bootstrap'
import { Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { registerFilter } from '../../../../actions/appActions'
import { RenderDatePicker } from '../../field/Field'

const getEndDayTime = (value) => {
    const day = Date.parse(value)
    const dateTo = new Date(day)
    const dd = dateTo.getUTCDate()
    const mm = dateTo.getUTCMonth()
    const yy = dateTo.getUTCFullYear()

    const dayTo = Date.UTC(yy, mm, dd + 1)
    
    return dayTo
}

class DateFilter extends React.Component {
    componentWillMount() {
        const { actions: { registerFilter } } = this.props

        registerFilter({
            key: 'dateFrom',
            filter: (tweet, value) => {
                let tweetTime = Date.parse(tweet.created_at)
                let valueTime = Date.parse(value)

                return tweetTime >= valueTime
            }, 
        })

        registerFilter({
            key: 'dateTo',
            filter: (tweet, value) => {
                let tweetTime = Date.parse(tweet.created_at)
                let valueTime = getEndDayTime(value)

                return tweetTime < valueTime
            }
        })
    }

    render () {
        return (
            <Row>
                <Col sm={4}>
                    <ControlLabel>Date from</ControlLabel>
                </Col>
                <Col sm={4}>
                    <Field name="dateFrom" type="text" placeholder="from" component={RenderDatePicker} />
                </Col>
                <Col sm={4}>
                    <Field name="dateTo" type="text" placeholder="to" component={RenderDatePicker} />
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
)(DateFilter)
