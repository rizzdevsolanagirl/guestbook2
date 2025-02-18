import { TapestryClient } from 'socialfi'

const TAPESTRY_API_KEY = process.env.TAPESTRY_API_KEY
const TAPESTRY_URL =
  process.env.NODE_ENV === 'development' ? process.env.TAPESTRY_URL : undefined

if (!TAPESTRY_API_KEY) {
  throw new Error('TAPESTRY_API_KEY is not set')
}

export const socialfi = new TapestryClient({
  apiKey: TAPESTRY_API_KEY,
  ...(TAPESTRY_URL && { baseURL: TAPESTRY_URL }),
})
