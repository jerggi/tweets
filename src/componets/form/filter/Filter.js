import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputGroup, ControlLabel, Button } from 'react-bootstrap'

import DateFilter from './filters/DateFilter'
import LengthFilter from './filters/LengthFilter'
import HashtagCountFilter from './filters/HashtagCountFilter'
import MentionCountFilter from './filters/MentionCountFilter'
import TextMatchFilter from  './filters/TextMatchFilter'
import MentionMatchFilter from './filters/MentionMatchFilter'
import HashtagMatchFilter from  './filters/HashtagMatchFilter'


const Form = ({ submitFilter, resetFilter }) => (
    <div>
        <DateFilter />
        <LengthFilter />
        <HashtagCountFilter />
        <MentionCountFilter />
        <TextMatchFilter />
        <MentionMatchFilter />
        <HashtagMatchFilter />

        <Button bsStyle="primary" onClick={submitFilter}>Filter</Button>
        <Button bsStyle="primary" onClick={resetFilter}>Reset filter</Button>
    </div>
)

Form.propTypes = {
    submitFilter: PropTypes.func,
    resetFilter: PropTypes.func,
}

const FilterForm = reduxForm({
  form: 'filterForm',
})(Form)

export default FilterForm;
