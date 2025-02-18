import { IPaginatedResponse } from '@/models/common.models'

export interface ISocialCounts {
  followers: number
  following: number
}

export interface IProfileResponse {
  [x: string]: any
  walletAddress?: string | undefined
  socialCounts: ISocialCounts
}

export type IProfile = {
  profile: {
    namespace: string
    id: string
    username: string
    crypto: string
    bio?: string
    image?: string
  }
  wallet: {
    address: string
  }
  namespace: {
    id: number
    name: string
    readableName: string | null
    faviconURL: string | null
    created_at: string
    updatedAt: string
    isDefault: boolean
    team_id: number
  }
}
export interface IGetSocialResponse extends IPaginatedResponse {
  profiles: IProfile['profile'][]
}

export interface IGetFollowersStateResponse {
  isFollowing: boolean
}
export interface ISuggestedProfile {
  namespaces: {
    name: string
    readableName: string
    faviconURL: string
  }[]
  profile: {
    blockchain: string
    namespace: string
    id: string
    username: string
    image: string
  }
  wallet: { address: string }
}

export interface ISuggestedProfiles {
  [key: string]: ISuggestedProfile
}
