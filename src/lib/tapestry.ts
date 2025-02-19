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
  try {
    return await socialfi.api.profiles.followersDetail({ id: username })
  } catch (error: any) {
    throw new Error(error.message || 'Failed get followers list')
  }
}

export const getFollowing = async ({ username }: { username: string }) => {
  try {
    return await socialfi.api.profiles.followingDetail({ id: username })
  } catch (error: any) {
    throw new Error(error.message || 'Failed get following list')
  }
}
