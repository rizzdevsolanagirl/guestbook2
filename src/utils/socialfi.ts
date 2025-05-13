import { SocialFi } from 'socialfi'

// const TAPESTRY_API_KEY = process.env.TAPESTRY_API_KEY

const TAPESTRY_URL =
  process.env.NODE_ENV === 'production' ? undefined : process.env.TAPESTRY_URL

//

export const socialfi = new SocialFi({
  baseURL: TAPESTRY_URL,
})
