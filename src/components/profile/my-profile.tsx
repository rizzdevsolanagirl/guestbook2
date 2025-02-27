'use client'

import { Card } from '@/components/common/card'
import { CopyPaste } from '@/components/common/copy-paste'
import { FollowButton } from '@/components/profile/follow-button'
import { useGetProfileInfo } from '@/components/profile/hooks/use-get-profile-info'
import { useUpdateProfileInfo } from '@/components/profile/hooks/use-update-profile'
import { useState } from 'react'

interface Props {
  username: string
}

export function MyProfile({ username }: Props) {
  const { data, refetch } = useGetProfileInfo({ username })
  const { updateProfile, loading } = useUpdateProfileInfo({ username })
  const [bio, setBio] = useState(data?.profile?.bio || '')
  const [isEditing, setIsEditing] = useState(false)

  console.log({ data })

  const handleSaveBio = async () => {
    console.log({ bio })
    await updateProfile({ username, bio })
    refetch()
    setIsEditing(false)
  }
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center space-y-2 w-full h-full">
          <h2 className="w-full font-bold text-xl">{username}</h2>
          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-light">{data?.walletAddress}</p>
            {data?.walletAddress && <CopyPaste content={data?.walletAddress} />}
          </div>
          <p>
            {data?.socialCounts.followers} followers |{' '}
            {data?.socialCounts.following} following
          </p>
          <div className="mt-4">
            {isEditing ? (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="border p-2 w-full"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={handleSaveBio}
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save'}
                </button>
              </div>
            ) : (
              <p
                className="cursor-pointer text-gray-600"
                onClick={() => setIsEditing(true)}
              >
                {data?.profile?.bio || 'Click to add a bio'}
              </p>
            )}
          </div>
        </div>
        <FollowButton username={username} />
      </div>
    </Card>
  )
}
