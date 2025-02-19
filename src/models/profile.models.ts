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

export interface IProfile {
  id: string
  namespace: string
  created_at: number
  username: string
  bio?: string | null
  image?: string | null
}

export interface INamespace {
  id: number
  name: string
  readableName: string | null
  faviconURL: string | null
  created_at: string
  updatedAt: string
  isDefault: boolean
  team_id: number
}

export type IProfileList = {
  profile: IProfile
  wallet: {
    address: string
  }
  namespace: INamespace
}
export interface IGetSocialResponse extends IPaginatedResponse {
  profiles: IProfile[]
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

export interface ISearch {
  profile: IProfile
  socialCounts: ISocialCounts
  walletAddress: string
  namespaces: INamespace
}
