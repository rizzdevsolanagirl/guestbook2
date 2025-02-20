'use client'

import { useGetProfilesList } from '@/components/profile/hooks/use-get-profiles-list'
import { Profile } from '@/components/profile/profile'

export function ProfilesList() {
  const { data: profiles, loading, error, refetch } = useGetProfilesList()

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
      <button
        onClick={refetch}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Refresh Profiles
      </button>
      {profiles.map((elem, index) => (
        <div className="mb-4" key={elem.profile?.username || index}>
          <Profile username={elem.profile?.username} />
        </div>
      ))}
    </div>
  )
}
