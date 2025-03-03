'use client'

import { TokenResponse } from '@/models/sse.models'
import { useEffect, useState } from 'react'

export function useTokenInfo(id: string) {
  const [tokenInfo, setTokenInfo] = useState<TokenResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function fetchTokenInfo() {
      try {
        const response = await fetch(`/api/sse?id=${id}`)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: TokenResponse = await response.json()

        if (isMounted) {
          setTokenInfo(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchTokenInfo()

    return () => {
      isMounted = false
    }
  }, [id])

  return { tokenInfo, loading, error }
}
