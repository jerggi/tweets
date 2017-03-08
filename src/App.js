import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { get, TOKEN } from '../../utils/storage';
import * as Api from './api/Twitter.js'

import Tweets from './pages/Tweets.js'
import * as AppActions from './actions/appActions';

class App extends React.Component {
    componentWillMount() {
        const { actions: { getTweets } } = this.props

        let token = JSON.parse(get(TOKEN))

        getTweets()
    }

    render() {
        const { tweets } = this.props

        return (
            <Tweets tweetList={tweets} />
        )
    }
}

function mapStateToProps(state) {
    return {
        tweets: state.app.tweets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
