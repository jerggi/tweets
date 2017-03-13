import React, { PropTypes } from 'react'

import Tweet from 'react-tweet'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { map } from 'lodash'

import SearchForm from './form/Search'
import SortForm from './form/Sort'
import { sortOptions } from '../utils/constants'
import FilterForm from './form/filter/Filter'
import StatsForm from './form/Stats'

const TweetsPage = (props) => {
    const {
        userNameChange,
        submitSearch,
        sortChange,
        submitFilter,
        resetFilter,
        setStatsShowed,
        tweets,
        allTweets,
        isLoading,
        showStats,
    } = props

    return (
        <div>
            <Grid>
                <Row>
                    <Col sm={12} md={8} mdPush={2}>
                        <SearchForm userNameChange={userNameChange} submitSearch={submitSearch} isLoading={isLoading} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={8} mdPush={2}>
                        <SortForm sortChange={sortChange} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={8} mdPush={2}>
                        <FilterForm submitFilter={submitFilter} resetFilter={resetFilter} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={8} mdPush={2}>
                        <Col md={8} >
                            <h3>Showing {tweets.length} {tweets.length === 1 ? 'tweet' : 'tweets'} from {allTweets.length}</h3>
                        </Col>
                        <Col md={4} >
                            {allTweets.length > 0 && <a style={{ float: 'right', cursor: 'pointer' }} onClick={() => setStatsShowed(true)}>Show stats</a>}
                        </Col>
                    </Col>
                </Row>
                {map(tweets, (t) => {
                    return (
                        <div key={t.id_str}>
                            <Row>
                                <Col sm={12} md={8} mdPush={2}>
                                    <Tweet data={t} />
                                </Col>
                            </Row>
                        </div>
                    )
                })}
            </Grid>
            {showStats && <StatsForm tweets={allTweets} setStatsShowed={setStatsShowed} />}
        </div>
    )
}

TweetsPage.propTypes = {
    userNameChange: PropTypes.func,
    submitSearch: PropTypes.func,
    sortChange: PropTypes.func,
    submitFilter: PropTypes.func,
    resetFilter: PropTypes.func,
    setStatsShowed: PropTypes.func,
    tweets: PropTypes.array,
    allTweets: PropTypes.array,
    isLoading: PropTypes.bool,
    showStats: PropTypes.bool,
}

export default TweetsPage
