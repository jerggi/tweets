import React, { PropTypes } from 'react'
import { FormControl, Button, Col, Row } from 'react-bootstrap'

const SearchForm = ({ userNameChange, submitSearch }) => {
    return (
        <Row>
            <Col sm={8}>
                <FormControl
                    type="text"
                    placeholder="Enter user name"
                    onChange={(e) => userNameChange(e.target.value)}
                />
            </Col>
            <Col sm={4}>
                <Button bsStyle="primary" onClick={submitSearch}>Search</Button>
            </Col>
        </Row>
    )
}

export default SearchForm
