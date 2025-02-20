'use client'

import { Profile } from '@/components/profile/profile'
import { useEffect, useState } from 'react'

export function ProfilesList() {
  const [profiles, setProfiles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProfiles() {
      try {
        const response = await fetch('/api/profiles')
        if (!response.ok) {
          throw new Error('Failed to fetch profiles')
        }
        const data = await response.json()
        setProfiles(data.profiles || [])
      } catch (err) {
        setError('Failed to load profiles')
        console.error('Error loading profiles:', err)
      } finally {
        setLoading(false)
      }
    }

    loadProfiles()
  }, [])

  if (loading) {
    return <div>Loading profiles...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (profiles.length === 0) {
    return <div>No profiles found</div>
  }

  return (
    <div>
      {profiles.map((elem, index: number) => {
        return (
          <div className="mb-4" key={elem.profile.username || index}>
            <Profile username={elem.profile.username} />
          </div>
        )
      })}
    </div>
  )
}
