import React, { PropTypes } from 'react'
import { InputGroup, Form, FormControl, Button, Col } from 'react-bootstrap'

const SearchForm = ({ userNameChange, submit }) => {
    return (
        <div>
            <InputGroup>
                <FormControl
                    type="text"
                    placeholder="Enter user name"
                    onChange={(e) => userNameChange(e.target.value)}
                />
                <Button type="submit" bsStyle="primary" onClick={submit}>Search</Button>
            </InputGroup>
        </div>
    )
}

export default SearchForm
