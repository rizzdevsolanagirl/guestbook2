'use client'

import { useCurrentWallet } from '@/components/auth/hooks/use-current-wallet'
import { Card } from '@/components/common/card'
import { useCreatorsInvite } from '@/components/suggested-and-creators-invite/hooks/use-creators-invite'
import { useSuggested } from '@/components/suggested-and-creators-invite/hooks/use-suggested'
import { SuggestedEntry } from '@/components/suggested-and-creators-invite/suggested-entry'
import { useEffect } from 'react'

export function DisplaySuggestedAndInvite() {
  const { walletAddress } = useCurrentWallet()
  const { profiles: suggestedProfiles, getSuggested } = useSuggested()

  const { profiles: creatorsInviteProfiles, getCreatorsInvite } =
    useCreatorsInvite()

  useEffect(() => {
    if (walletAddress) {
      getSuggested(walletAddress)
      getCreatorsInvite(walletAddress)
    }
  }, [walletAddress, getSuggested, getCreatorsInvite])

  return (
    <div className="w-1/2">
      <Card className="min-h-[700px]">
        <div>
          <div className="flex flex-col items-center justify-center space-y-4 pt-14 pb-16">
            <p className="text-xl font-bold">Invite your friends</p>
            <p className="text-xs text-muted-foreground">
              Connect with friends to get started!
            </p>
          </div>

          <SuggestedEntry
            title="Suggested friends"
            data={suggestedProfiles}
            type="follow"
          />

          <SuggestedEntry
            title="Friends to invite"
            data={creatorsInviteProfiles}
            type="invite"
          />
        </div>
      </Card>
    </div>
  )
}
