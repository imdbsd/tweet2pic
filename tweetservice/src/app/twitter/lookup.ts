import axios from 'axios'
import configs, { REQUEST_HEADERS } from '../../configs'

type LookupResponse = {}

const lookupParams = {
  expansions: 'author_id',
  'user.fields': 'profile_image_url,verified',
}

const lookup = async (tweetId: string) => {
  const requestURL = `${configs.TWITTER_API_URL_V2}/tweets/${tweetId}`
  console.log({
    requestURL,
    REQUEST_HEADERS,
    configs,
    env: process.env.API_BEARER_TOKEN,
  })
  try {
    const response = await axios.get(requestURL, {
      params: lookupParams,
      headers: {
        Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
      },
    })
    console.log({ response: response.data })
  } catch (err) {
    console.log(err)
  }
}

export default lookup
