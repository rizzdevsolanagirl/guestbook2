'use client'

import { Card } from '@/components/common/card'
import { FollowButton } from '@/components/profile/follow-button'
import { useGetProfileInfo } from '@/components/profile/hooks/use-get-profile-info'
import { ProfileInfos } from '@/components/profile/profile-infos'

interface Props {
  username: string
}

export function Profile({ username }: Props) {
  const { data } = useGetProfileInfo({ username })

  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center space-y-2 w-full h-full">
          <ProfileInfos
            username={username}
            walletAddress={data?.walletAddress || ''}
          />
          <p>
            {data?.socialCounts.followers} followers |{' '}
            {data?.socialCounts.following} following
          </p>
        </div>
        <FollowButton username={username} />
      </div>
    </Card>
  )
}
