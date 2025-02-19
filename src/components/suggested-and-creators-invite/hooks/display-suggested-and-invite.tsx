'use client'

import { useCurrentWallet } from '@/components/auth/hooks/use-current-wallet'
import { Card } from '@/components/common/card'
import { useCreatorsInvite } from '@/components/suggested-and-creators-invite/hooks/use-creators-invite'
import { useSuggested } from '@/components/suggested-and-creators-invite/hooks/use-suggested'
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

  console.log(suggestedProfiles, creatorsInviteProfiles)

  return (
    <div className="flex w-full space-x-4 mt-4">
      <Card>test</Card>
    </div>
  )
}
