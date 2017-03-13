import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reset } from 'redux-form';
import { filter, forEach } from 'lodash'

import * as AppActions from '../actions/appActions'
import TweetsPage from '../componets/Tweets'
import { sortOptions } from '../utils/constants'

class Tweets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            tweets: props.tweets,
            showStats: false,
            isLoading: false,
        }
        this.userNameChange = this.userNameChange.bind(this)
        this.submitSearch = this.submitSearch.bind(this)
        this.sortChange = this.sortChange.bind(this)
        this.submitFilter = this.submitFilter.bind(this)
        this.resetFilter = this.resetFilter.bind(this)
        this.setStatsShowed = this.setStatsShowed.bind(this)
    }

    userNameChange(userName) {
        this.setState({ userName })
    }

    submitSearch() {
        const { actions: { getTweets } } = this.props
        const userName = this.state.userName
        
        if (userName) {
            this.setState({ isLoading: true })
            getTweets(userName).then((tweets) => {
                this.setState({
                    tweets: this.props.tweets,
                    isLoading: false
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

    setStatsShowed(showed) {
        this.setState({
            showStats: showed
        })
    }

    render() {
        const { tweets, showStats, isLoading } = this.state
        const allTweets = this.props.tweets

        const pageProps = {
            userNameChange: this.userNameChange,
            submitSearch: this.submitSearch,
            sortChange: this.sortChange,
            submitFilter: this.submitFilter,
            resetFilter: this.resetFilter,
            setStatsShowed: this.setStatsShowed,
            tweets,
            allTweets,
            isLoading,
            showStats,
        }

        return <TweetsPage {...pageProps} />
    }
}

Tweets.propTypes = {
    tweets: PropTypes.array,
    filters: PropTypes.object,
    from: PropTypes.object,
    actions: PropTypes.object,
    resetForm: PropTypes.func,
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
