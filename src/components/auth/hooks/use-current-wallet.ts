'use client'

import { useGetProfiles } from '@/components/auth/hooks/use-get-profiles'
import { usePrivy } from '@privy-io/react-auth'
import { useEffect, useState } from 'react'

export function useCurrentWallet() {
  const [walletAddress, setWalletAddress] = useState<string>('')
  const { user } = usePrivy()

  const { profiles, loading } = useGetProfiles({
    walletAddress: walletAddress || '',
  })

  useEffect(() => {
    if (user && user.wallet) {
      setWalletAddress(user.wallet?.address)
    }
  }, [user])

  return {
    walletIsConnected: !(walletAddress === ''),
    walletAddress,
    mainUsername: profiles?.[0]?.profile?.username,
    loadingMainUsername: loading,
    setWalletAddress,
  }
}
