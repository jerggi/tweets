import React, { PropTypes } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'

import { reduce, map, forEach } from 'lodash'

const StatsForm = ({ tweets, setStatsShowed }) => {
    function sumOfLikes() {
        return reduce(tweets, (sum, tweet) => {
            return sum + tweet.favorite_count
        }, 0)
    }

    function averageLikes() {
        return Math.round((sumOfLikes() / tweets.length) * 10) / 10
    }

    function getMentions() {
        let mentions = {}
        
        forEach(tweets, (tweet) => {
            forEach(tweet.entities.user_mentions, (mention) => {
                mentions[mention.screen_name] = mentions[mention.screen_name] ? mentions[mention.screen_name] + 1 : 1
            })
        })

        return map(mentions, (value, key) => (
            <tr key={key}>
                <td>@{key}</td>
                <td>{value}</td>
            </tr>
        ))
    }

    return (
        <Modal show={true} onHide={() => setStatsShowed(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Statistics of all loaded tweets</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <td>Sum of all likes</td>
                            <td>{sumOfLikes().toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td>Avarage likes per tweet</td>
                            <td>{averageLikes().toLocaleString()}</td>
                        </tr>
                        <tr>
                            <th>Mentions</th>
                        </tr>
                        {getMentions()}
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setStatsShowed(false)} >Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

StatsForm.propTypes = {
    tweets: PropTypes.array,
    setStatsShowed: PropTypes.func,
}

export default StatsForm
