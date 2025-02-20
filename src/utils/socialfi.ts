import { TapestryClient } from 'socialfi'

const TAPESTRY_API_KEY = process.env.TAPESTRY_API_KEY
const TAPESTRY_URL =
  process.env.NODE_ENV === 'production' ? undefined : process.env.TAPESTRY_URL

if (!TAPESTRY_API_KEY) {
  throw new Error('TAPESTRY_API_KEY is not set')
}

export const socialfi = new TapestryClient({
  apiKey: TAPESTRY_API_KEY,
  ...(TAPESTRY_URL && { baseURL: TAPESTRY_URL }),
})
