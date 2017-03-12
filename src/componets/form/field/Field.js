import React from 'react'
import { FormControl } from 'react-bootstrap'
import DatePicker from 'react-bootstrap-date-picker'

export const RenderTextField = ({ input, placeholder }) => (
    <div>
        <FormControl {...input} type="text" placeholder={placeholder} />
    </div>
)

export const RenderNumberField = ({ input, placeholder, min }) => (
    <div>
        <FormControl {...input} type="number" min={min} placeholder={placeholder} />
    </div>
)

export const RenderDatePicker = ({input, placeholder }) => (
  <div>
        <DatePicker {...input} placeholder={placeholder} />
  </div>
)
