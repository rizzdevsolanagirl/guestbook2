'use client'

import { Card } from '@/components/common/card'
import { LoadCircle } from '@/components/common/load-circle'
import { useTokenInfo } from '@/components/sse/hooks/use-token-info'
import Image from 'next/image'

interface Props {
  id: string
}

export function TokenDetails({ id }: Props) {
  const { tokenInfo, loading } = useTokenInfo(id)

  if (loading)
    return (
      <Card className="min-h-[278px] flex items-center justify-center">
        {loading && <LoadCircle />}
      </Card>
    )

  if (!tokenInfo)
    return (
      <Card className="min-h-[278px] flex items-center justify-center">
        <p>No token data available</p>
      </Card>
    )

  let price = 0
  let supply = 0
  let decimals = 0
  let name = 'Unknown Token'
  let imageUrl = ''

  if (tokenInfo.result) {
    const content = tokenInfo.result.content
    name = content?.metadata?.name || 'Unknown Token'
    imageUrl = content?.links?.image || content?.files?.[0]?.uri || ''

    if ('token_info' in tokenInfo.result) {
      price = tokenInfo.result.token_info?.price_info?.price_per_token || 0
      supply = tokenInfo.result.token_info?.supply || 0
      decimals = tokenInfo.result.token_info?.decimals || 0
    }
  }

  const marketCap = (supply * price) / 10 ** decimals

  return (
    <Card>
      <div className="pb-6">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={80}
            height={80}
            className="rounded-full"
          />
        ) : (
          <div className="w-20 h-20 bg-muted-light rounded-full flex items-center justify-center">
            <span className="text-gray">...</span>
          </div>
        )}
        <p className="text-lg font-bold mt-2">{name}</p>
      </div>
      <p className="text-gray">Price</p>
      <p className="text-lg font-bold">${price.toFixed(6)}</p>
      <p className="text-gray">Market Cap</p>
      <p className="text-lg font-bold">
        ${(marketCap / 1_000_000).toFixed(2)}M
      </p>
    </Card>
  )
}
