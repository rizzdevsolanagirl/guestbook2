'use client'

import { useCurrentWallet } from '@/components/auth/hooks/use-current-wallet'
import { usePrivy } from '@privy-io/react-auth'
import { Wallet, CheckCircle, XCircle } from 'lucide-react'

export function WalletStatus() {
  const { walletAddress } = useCurrentWallet()
  const { ready, authenticated } = usePrivy()

  if (!ready) {
    return (
      <div className="flex items-center gap-2 text-gray-400">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-500"></div>
        <span className="text-sm">Initializing...</span>
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="flex items-center gap-2 text-gray-400">
        <XCircle className="h-4 w-4 text-red-500" />
        <span className="text-sm">Not Connected</span>
      </div>
    )
  }

  if (!walletAddress) {
    return (
      <div className="flex items-center gap-2 text-yellow-400">
        <Wallet className="h-4 w-4" />
        <span className="text-sm">Connecting...</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-green-400">
      <CheckCircle className="h-4 w-4" />
      <span className="text-sm">Connected</span>
    </div>
  )
} 