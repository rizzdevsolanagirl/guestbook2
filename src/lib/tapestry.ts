import {
  ICreateCommentInput,
  ICreateCommentResponse,
} from '@/models/comment.models'
import { IProfileResponse, ISuggestedProfiles } from '@/models/profile.models'

import { FetchMethod, fetchTapestry } from '@/utils/api'
import { socialfi } from '@/utils/socialfi'

export const createProfile = async ({
  username,
  ownerWalletAddress,
}: {
  username: string
  ownerWalletAddress: string
}) => {
  const createProfileResponse = await fetchTapestry({
    endpoint: 'profiles/findOrCreate',
    method: FetchMethod.POST,
    data: {
      walletAddress: ownerWalletAddress,
      username,
      blockchain: 'SOLANA',
    },
  })

  return createProfileResponse
}

export const getSuggestedProfiles = async ({
  ownerWalletAddress,
}: {
  ownerWalletAddress: string
}) => {
  const response = await fetchTapestry<ISuggestedProfiles[]>({
    endpoint: `profiles/suggested/${ownerWalletAddress}`,
  })

  return response
}

export const getProfileInfo = async ({ username }: { username: string }) => {
  try {
    return await fetchTapestry<IProfileResponse>({
      endpoint: `profiles/${username}`,
    })
  } catch (error) {
    console.error('[getProfileInfo Error]', error)
    return null
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

export const createComment = async ({
  profileId,
  contentId,
  text,
  commentId,
}: ICreateCommentInput) => {
  const createCommentResponse = await fetchTapestry<
    ICreateCommentResponse,
    ICreateCommentInput
  >({
    endpoint: 'comments',
    method: FetchMethod.POST,
    data: {
      contentId,
      profileId,
      text,
      commentId,
    },
  })

  return createCommentResponse
}
