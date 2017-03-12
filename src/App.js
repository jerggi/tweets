import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { get, put, TOKEN } from './utils/storage'
import * as Api from './api/appRequests'

import Tweets from './pages/Tweets.js'
import * as AppActions from './actions/appActions'

class App extends React.Component {
    componentWillMount() {
        const { actions: { getTweetsFromData } } = this.props

        let token = get(TOKEN)

        if (token === null) {
            Api.getToken().then((res) => {
                put(TOKEN, res.access_token)
                getTweetsFromData() //temp
            }).catch((err) => {
                console.error(err)
            })
        } else {
            getTweetsFromData() //temp
        }
    }

    render() {
        return (
            <Tweets />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
