import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputGroup, ControlLabel, Button, Panel } from 'react-bootstrap'

import DateFilter from './filters/DateFilter'
import LengthFilter from './filters/LengthFilter'
import HashtagCountFilter from './filters/HashtagCountFilter'
import MentionCountFilter from './filters/MentionCountFilter'
import TextMatchFilter from  './filters/TextMatchFilter'
import MentionMatchFilter from './filters/MentionMatchFilter'
import HashtagMatchFilter from  './filters/HashtagMatchFilter'


const Form = ({ submitFilter, resetFilter }) => (
    <Panel 
        header={(
            <div>
                <span>Tweet filter</span>
                <Button style={{ float: 'right' }} onClick={resetFilter}>Reset filter</Button>
                <div className="clearfix"></div>
            </div>
        )} 
        footer={(
            <div>
                <Button bsStyle="primary" style={{ float: 'right' }} onClick={submitFilter}>Filter</Button>
                <div className="clearfix"></div>
            </div>
    )}>
        <DateFilter />
        <LengthFilter />
        <HashtagCountFilter />
        <MentionCountFilter />
        <TextMatchFilter />
        <MentionMatchFilter />
        <HashtagMatchFilter />
    </Panel>
)

Form.propTypes = {
    submitFilter: PropTypes.func,
    resetFilter: PropTypes.func,
}

const FilterForm = reduxForm({
  form: 'filterForm',
})(Form)

export default FilterForm;
