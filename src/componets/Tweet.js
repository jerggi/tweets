import React from 'react'

const Tweet = ({ tweet }) => {
    return (
        <div>
            <p>{tweet.text}</p>
        </div>
    )
}

export default Tweet
