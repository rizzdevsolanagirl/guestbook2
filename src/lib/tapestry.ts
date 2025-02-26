import { fetchTapestry } from '@/utils/api'

export const getFollowers = async ({ username }: { username: string }) => {
  // return await socialfi.profiles.followersDetail({
  //   id: username,
  // })

  try {
    return await fetchTapestry({
      endpoint: `profiles/${username}/followers`,
    })
  } catch (error: any) {
    throw new Error(error.message || 'Failed get followers list')
  }
}

export const getFollowing = async ({ username }: { username: string }) => {
  // return await socialfi.profiles.followingDetail({
  //   id: username,
  // })
  try {
    return await fetchTapestry({
      endpoint: `profiles/${username}/following`,
    })
  } catch (error: any) {
    throw new Error(error.message || 'Failed get following list')
  }
}
