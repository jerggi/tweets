import Defaults from 'superagent-defaults'
import { TOKEN, get } from '../utils/storage'
import { HEADER_BASIC } from './data'

export function authRequestBearer() {
    // const token = 'AAAAAAAAAAAAAAAAAAAAAOQgzgAAAAAAZW5S%2BNhTPZm3rMeCMcYUWrxlJlg%3DWLAj0ozcBc2DPcCPQhPwMMN9GaOrLBi97PeIXGcSuklfFNIE3l'
    let token = get(TOKEN)

    const auth = 'Bearer ' + token
    const superagent = new Defaults()
    superagent.set('Authorization', auth)

    return superagent
}

export function authRequestBasic() {
    const superagent = new Defaults()
    superagent.set('Authorization', HEADER_BASIC)
    superagent.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')

    return superagent
}
