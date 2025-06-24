import { IGuestbookStats } from '@/models/guestbook.models'
import useSWR from 'swr'

export function useGuestbookStats() {
  const { data, error, isLoading, mutate } = useSWR<IGuestbookStats>(
    '/api/guestbook/stats',
    async (url: string) => {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch guestbook stats')
      }
      return response.json()
    }
  )

  return {
    stats: data,
    isLoading,
    error,
    mutate,
  }
} 