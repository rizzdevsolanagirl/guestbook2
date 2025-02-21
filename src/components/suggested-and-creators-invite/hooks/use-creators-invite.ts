'use client'

import { ISuggestedProfile } from '@/models/profile.models'
import { useCallback, useState } from 'react'

export const useCreatorsInvite = () => {
  const [profiles, setProfiles] = useState<ISuggestedProfile[]>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getCreatorsInvite = useCallback(async (walletAddress: string) => {
    if (!walletAddress) {
      setError('Owner wallet address is required')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `/api/profiles/creators?walletAddress=${walletAddress}`,
      )

      if (!response.ok) {
        throw new Error('Failed to fetch creators invite profiles')
      }

      const data = await response.json()
      setProfiles(data)
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    profiles,
    loading,
    error,
    getCreatorsInvite,
  }
}
