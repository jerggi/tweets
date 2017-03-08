import { authRequest } from './Request'

export function getTweets() {
    return new Promise((resolve, reject) => {
        authRequest()
            .get(`/1.1/statuses/user_timeline.json`)
            .query({
                screen_name: 'jeremyclarkson',
                count: 2
            })
            .end((err, res) => err ? reject(err.response) : resolve(res.body))
    })
}
