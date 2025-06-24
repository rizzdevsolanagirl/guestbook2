import { IGuestbookResponse } from '@/models/guestbook.models'
import useSWR from 'swr'

interface UseGuestbookEntriesParams {
  requestingProfileId?: string
  page?: number
  pageSize?: number
  cohort?: string
  week?: number
  mood?: string
}

interface GuestbookResponseWithPagination extends IGuestbookResponse {
  totalCount: number
  totalPages: number
}

export function useGuestbookEntries({
  requestingProfileId,
  page = 1,
  pageSize = 10,
  cohort,
  week,
  mood,
}: UseGuestbookEntriesParams = {}) {
  const params = new URLSearchParams()
  
  if (requestingProfileId) params.append('requestingProfileId', requestingProfileId)
  if (page) params.append('page', page.toString())
  if (pageSize) params.append('pageSize', pageSize.toString())
  if (cohort) params.append('cohort', cohort)
  if (week) params.append('week', week.toString())
  if (mood) params.append('mood', mood)

  const { data, error, isLoading, mutate } = useSWR<GuestbookResponseWithPagination>(
    `/api/guestbook?${params.toString()}`,
    async (url: string) => {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch guestbook entries')
      }
      return response.json()
    }
  )

  return {
    entries: data?.entries || [],
    pagination: {
      page: data?.page || 1,
      pageSize: data?.pageSize || 10,
      totalCount: data?.totalCount || 0,
      totalPages: data?.totalPages || 0,
    },
    isLoading,
    error,
    mutate,
  }
} 