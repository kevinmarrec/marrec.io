import { createHmac, HexBase64Latin1Encoding } from 'crypto'

function hmac (key: string, string: string, encoding?: HexBase64Latin1Encoding) {
  return createHmac('sha256', key)
    .update(string, 'utf8')
    .digest(encoding!)
}

// function toTime(time: string) {
//   return new Date().toISOString().replace(/[:\-]|\.\d{3}/g, "");
// }

// function toDate(time: string) {
//   return toTime(time).substring(0, 8);
// }

const ACCESS_KEY_ID = 'XXX'
const SECRET_ACCESS_KEY = 'XXX'
const REGION = 'fr-par'

const DATE = '20200729'
const X_AMZ_DATE = '20200729T000000Z'
const EXPIRATION = '2020-07-30T02:00:00.000Z'

const policy = {
  expiration: EXPIRATION,
  conditions: [
    { bucket: 'bucktests' },
    ['starts-with', '$key', 'bonsoir'],
    { 'x-amz-credential': ACCESS_KEY_ID + '/' + DATE + '/' + REGION + '/s3/aws4_request' },
    { 'x-amz-algorithm': 'AWS4-HMAC-SHA256' },
    { 'x-amz-date': X_AMZ_DATE }
  ]
}

const token = Buffer.from(JSON.stringify(policy, undefined, 1), 'utf-8').toString('base64')
console.log(token)
console.log('\n')
const signature = hmac(hmac(hmac(hmac(hmac('AWS4' + SECRET_ACCESS_KEY, DATE), REGION), 's3'), 'aws4_request'), token, 'hex')

console.log(signature)
