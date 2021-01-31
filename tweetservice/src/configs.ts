const configs = {
  API_KEY_1: process.env.API_KEY_1 || '',
  API_SECRET_KEY: process.env.API_SECRET_KEY || '',
  API_BEARER_TOKEN: process.env.API_BEARER_TOKEN || '',
  TWITTER_API_URL_V2: 'https://api.twitter.com/2',
}

export const REQUEST_HEADERS = {
  Authorization: `Bearer ${configs.API_BEARER_TOKEN}`,
}

export default configs
