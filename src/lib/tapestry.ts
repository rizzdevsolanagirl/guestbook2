import { fetchTapestry } from '@/utils/api'
import { socialfi } from '@/utils/socialfi'

export const getProfileInfo = async ({ username }: { username: string }) => {
  try {
    return await socialfi.getProfile(username)
  } catch (error: any) {
    throw new Error(error.message || 'Failed get profile info')
  }
}

export async function getProfilesList() {
  try {
    return await socialfi.api.profiles.profilesList({
      page: '0',
      pageSize: '10',
    })
  } catch (error: any) {
    throw new Error(error.message || 'Failed get profiles')
  }
}

export const getFollowers = async ({ username }: { username: string }) => {
  const response = await fetchTapestry({
    endpoint: `profiles/${username}/followers`,
  })

  return response
}

export const getFollowing = async ({ username }: { username: string }) => {
  const response = await fetchTapestry({
    endpoint: `profiles/${username}/following`,
  })

  return response
}
