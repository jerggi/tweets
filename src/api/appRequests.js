import { authRequestBearer, authRequestBasic } from './Request'
import * as c from './data'
import { TOKEN, put } from '../utils/storage'

export function getTweets(screen_name, count = 50) {
    return new Promise((resolve, reject) => {
        authRequestBearer()
            .get('/1.1/statuses/user_timeline.json')
            .query({ screen_name, count })
            .end((err, res) => err ? reject(err.response) : resolve(res.body))
    })
}

export function getToken() {
    return new Promise((resolve, rejcet) => {
        authRequestBasic()
            .post('/oauth2/token')
            .send('grant_type=client_credentials')
            .end((err, res) => err ? reject(err.response) : resolve(res.body))
    })
}
