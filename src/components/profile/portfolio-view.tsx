'use client'

import { useGetProfilePortfolio } from '@/components/trade/hooks/birdeye/use-get-profile-portfolio'
import type { ITokenPortfolioItem } from '@/components/trade/models/birdeye/birdeye-api-models'
import { PublicKey } from '@solana/web3.js'
import { useEffect, useState } from 'react'

interface PortfolioViewProps {
  username: string
}

export function PortfolioView({ username }: PortfolioViewProps) {
  const [walletAddress, setWalletAddress] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  const [tokenType, setTokenType] = useState<'fungible' | 'nft'>('fungible')

  // Get wallet address from username or use the username if it's a wallet address
  useEffect(() => {
    async function getWalletAddress() {
      try {
        // Check if the username is a wallet address
        try {
          new PublicKey(username)
          setWalletAddress(username)
          setIsLoading(false)
          return
        } catch {
          // Not a wallet address, fetch the profile
          const response = await fetch(
            `/api/profiles/info?username=${username}`,
          )
          const data = await response.json()

          if (data?.profile?.wallet_address) {
            setWalletAddress(data.profile.wallet_address)
          }
        }
      } catch (error) {
        console.error('Error getting wallet address:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getWalletAddress()
  }, [username])

  // Use the existing hook to get portfolio data
  const {
    data: portfolioItems,
    loading: portfolioLoading,
    error,
  } = useGetProfilePortfolio({
    walletAddress,
  })

  if (isLoading || portfolioLoading) {
    return <div className="p-4">Loading portfolio...</div>
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">Error loading portfolio: {error}</div>
    )
  }

  if (!walletAddress) {
    return <div className="p-4">No wallet address found for this profile.</div>
  }

  const totalValue = portfolioItems.reduce(
    (sum, item) => sum + (item.valueUsd || 0),
    0,
  )

  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-800 p-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
        <p className="text-gray-400">
          Total Value: $
          {totalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </p>
      </div>

      <div className="mb-4">
        <div className="flex space-x-2">
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${
              tokenType === 'fungible'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-zinc-800 text-gray-300'
            }`}
            onClick={() => setTokenType('fungible')}
          >
            Tokens
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${
              tokenType === 'nft'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-zinc-800 text-gray-300'
            }`}
            onClick={() => setTokenType('nft')}
          >
            NFTs
          </button>
        </div>
      </div>

      {tokenType === 'fungible' ? (
        <div className="grid grid-cols-1 gap-4">
          {portfolioItems.length === 0 ? (
            <p className="text-gray-400">No tokens found in this wallet.</p>
          ) : (
            portfolioItems.map((token: ITokenPortfolioItem) => (
              <TokenCard key={token.address} token={token} />
            ))
          )}
        </div>
      ) : (
        <div className="p-4 text-gray-400">
          NFT portfolio view coming soon...
        </div>
      )}
    </div>
  )
}

function TokenCard({ token }: { token: ITokenPortfolioItem }) {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex items-center">
      <div className="flex-shrink-0 w-10 h-10 mr-4">
        {token.logoURI && (
          <img
            src={token.logoURI}
            alt={token.symbol}
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              // Replace broken image with a placeholder
              ;(e.target as HTMLImageElement).src =
                'https://via.placeholder.com/40'
            }}
          />
        )}
      </div>
      <div className="flex-grow">
        <h3 className="font-medium">{token.name}</h3>
        <p className="text-sm text-gray-400">{token.symbol}</p>
      </div>
      <div className="text-right">
        <p className="font-medium">
          {token.uiAmount.toLocaleString(undefined, {
            maximumFractionDigits: 6,
          })}
        </p>
        <p className="text-sm text-gray-400">
          $
          {token.valueUsd.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  )
}
