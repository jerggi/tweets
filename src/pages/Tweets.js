import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Tweet from 'react-tweet'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { map } from 'lodash'

import * as AppActions from '../actions/appActions'
import SearchForm from '../componets/form/Search'

class Tweets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
        this.userNameChange = this.userNameChange.bind(this)
        this.submitSearch = this.submitSearch.bind(this)
    }

    userNameChange(userName) {
        this.setState({ userName })
    }

    submitSearch() {
        const { actions: { getTweets } } = this.props
        const userName = this.state.userName
        
        getTweets(userName)
    }

    render() {
        const { tweets } = this.props

        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12} md={8} mdPush={2}>
                            <SearchForm userNameChange={this.userNameChange} submit={this.submitSearch} />
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
)(Tweets)
