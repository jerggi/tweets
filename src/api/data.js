const API_KEY = 'ey8i8tzjg0EUNiwySQLcIflAL'
const API_SECRET = 'k8485tH2InCP7zthxOKBNll1EEKWPPL7lm7xZqKblZbuqeDdst'
const BASE64 = new Buffer(API_KEY + ':' + API_SECRET).toString('base64')

export const HEADER_BASIC = 'Basic ' + BASE64
