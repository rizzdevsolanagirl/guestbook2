import { IPaginatedResponse } from '@/models/common.models'

export interface ISocialCounts {
  followers: number
  following: number
}

export interface IProfileResponse {
  walletAddress?: string
  socialCounts: ISocialCounts
  profile: IProfile
  namespace: INamespace
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
  contact: {
    id: string
    type: string
  }
  wallet: { address: string }
}

export interface ISearch {
  profile: IProfile
  socialCounts: ISocialCounts
  walletAddress: string
  namespaces: INamespace
}

export interface IIdentitiesResponse {
  profiles: IIdentity[]
  page: number
  pageSize: number
  totalCount: number
}

export interface IIdentity {
  profile: IProfile
  wallet: {
    address: string
  }
  namespace: INamespace
}
