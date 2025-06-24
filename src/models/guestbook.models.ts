import { IPaginatedResponse } from '@/models/common.models'

export interface IGuestbookEntry {
  id: string
  created_at: number
  updated_at: number
  text: string
  cohort: string
  week: number
  experience: string
  highlights: string[]
  tags: string[]
  mood: 'excited' | 'inspired' | 'challenged' | 'accomplished' | 'grateful'
  isPublic: boolean
}

export interface IGuestbookAuthor {
  id: string
  namespace: string
  created_at: number
  username: string
  bio: string
  image: string
  walletAddress: string
}

export interface IGuestbookSocialCounts {
  likeCount: number
  commentCount: number
}

export interface IGuestbookEntryWithAuthor {
  entry: IGuestbookEntry
  author: IGuestbookAuthor
  socialCounts: IGuestbookSocialCounts
  requestingProfileSocialInfo: {
    hasLiked: boolean
  }
}

export interface IGuestbookResponse extends IPaginatedResponse {
  entries: IGuestbookEntryWithAuthor[]
}

export interface ICreateGuestbookEntryRequest {
  profileId: string
  text: string
  cohort: string
  week: number
  experience: string
  highlights: string[]
  tags: string[]
  mood: 'excited' | 'inspired' | 'challenged' | 'accomplished' | 'grateful'
  isPublic: boolean
}

export interface IUpdateGuestbookEntryRequest {
  entryId: string
  profileId: string
  text?: string
  cohort?: string
  week?: number
  experience?: string
  highlights?: string[]
  tags?: string[]
  mood?: 'excited' | 'inspired' | 'challenged' | 'accomplished' | 'grateful'
  isPublic?: boolean
}

export interface IGuestbookStats {
  totalEntries: number
  totalCohorts: number
  totalWeeks: number
  averageMood: string
  topTags: Array<{ tag: string; count: number }>
  recentActivity: number
} 