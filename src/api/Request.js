import Defaults from 'superagent-defaults'

export function authRequest() {
    const token = 'AAAAAAAAAAAAAAAAAAAAAOQgzgAAAAAAZW5S%2BNhTPZm3rMeCMcYUWrxlJlg%3DWLAj0ozcBc2DPcCPQhPwMMN9GaOrLBi97PeIXGcSuklfFNIE3l'
    const auth = 'Bearer ' + token;
    const superagent = new Defaults();
    superagent.set('Authorization', auth);

    return superagent;    
}
