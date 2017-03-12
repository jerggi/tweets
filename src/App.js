import React from 'react'

import { get, put, TOKEN } from './utils/storage'
import * as Api from './api/appRequests'

import Tweets from './pages/Tweets.js'

class App extends React.Component {
    componentWillMount() {
        let token = get(TOKEN)

        if (token === null) {
            Api.getToken().then((res) => {
                put(TOKEN, res.access_token)
            }).catch((err) => {
                console.error(err)
            })
        }
    }

    render() {
        return (
            <Tweets />
        )
    }
}

export default App
