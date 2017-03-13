import React, { PropTypes } from 'react'
import { InputGroup, ControlLabel, FormControl } from 'react-bootstrap'

const SortForm = ({ sortChange }) => {
    return (
        <div>
            <InputGroup>
                <ControlLabel>Sort by</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={(e) => sortChange(e.target.value)}>

                    <option value="date-asc">Date (newest)</option>
                    <option value="date-desc">Date (oldest)</option>
                    <option value="favorite-asc">Likes (ascending)</option>
                    <option value="favorite-desc">Likes (descending)</option>
                </FormControl>
            </InputGroup>
        </div>
    )
}

SortForm.propTypes = {
    sortChange: PropTypes.func
}

export default SortForm
