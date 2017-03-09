import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

const Form = (props) => (
    <div>Form</div>
)

Form.propTypes = {

}

const FilterForm = reduxForm({
  form: 'filterForm',
})(Form)

export default FilterForm;
