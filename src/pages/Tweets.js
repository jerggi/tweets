import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reset } from 'redux-form';
import Tweet from 'react-tweet'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { map, filter, forEach } from 'lodash'

import * as AppActions from '../actions/appActions'
import SearchForm from '../componets/form/Search'
import SortForm from '../componets/form/Sort'
import { sortOptions } from '../utils/constants'
import FilterForm from '../componets/form/filter/Filter'

class Tweets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            tweets: props.tweets,
        }
        this.userNameChange = this.userNameChange.bind(this)
        this.submitSearch = this.submitSearch.bind(this)
        this.sortChange = this.sortChange.bind(this)
        this.submitFilter = this.submitFilter.bind(this)
        this.resetFilter = this.resetFilter.bind(this)
    }

    userNameChange(userName) {
        this.setState({ userName })
    }

    submitSearch() {
        const { actions: { getTweets } } = this.props
        const userName = this.state.userName
        
        if (userName) {
            getTweets(userName).then((tweets) => {
                this.setState({
                    tweets: this.props.tweets
                })
            })
        }
    }

    sortChange(option) {
        const { actions: { sortTweets } } = this.props
        const options = sortOptions[option]

        sortTweets(options.sortOption, options.orderOption)
        this.setState({
            tweets: this.getFilteredTweets()
        })
    }

    submitFilter() {
        const { tweets, form: { filterForm } } = this.props

        if (filterForm.values) {
            let filteredTweets = this.getFilteredTweets()

            this.setState({
                tweets: filteredTweets
            })
        } else if (tweets.length !== this.state.tweets.length) {
            this.setState({
                tweets: tweets
            })
        }
    }

    resetFilter() {
        const { resetForm, tweets} = this.props
        
        resetForm('filterForm')

        this.setState({
            tweets: tweets
        })
    }

    getFilteredTweets() {
        const { tweets, filters, form: { filterForm } } = this.props

        if (filterForm.values) {
            return filter(tweets, (tweet) => {
                let passed = true
                forEach(filterForm.values, (value, key) => {
                    if (value !== null) {
                        let filter = filters[key].filter

                        let result = filter(tweet, value)

                        if (!result) {
                            passed = false
                        }
                    }
                })

                return passed
            })
        } else {
            return tweets
        }
    }

    render() {
        const { tweets } = this.state

        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12} md={8} mdPush={2}>
                            <SearchForm userNameChange={this.userNameChange} submitSearch={this.submitSearch} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={8} mdPush={2}>
                            <SortForm sortChange={this.sortChange} options={sortOptions} />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={8} mdPush={2}>
                            <FilterForm submitFilter={this.submitFilter} resetFilter={this.resetFilter} />
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tweets: state.app.tweets,
        filters: state.app.filters,
        form: state.form,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch),
        resetForm: (form) => {
            dispatch(reset(form))
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tweets)
