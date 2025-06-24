import { ICreateGuestbookEntryRequest } from '@/models/guestbook.models'
import { useState } from 'react'

export function useCreateGuestbookEntry() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createEntry = async (entryData: ICreateGuestbookEntryRequest) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entryData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create guestbook entry')
      }

      const result = await response.json()
      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createEntry,
    isLoading,
    error,
  }
} 