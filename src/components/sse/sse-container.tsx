import { RPCResponse, TokenInfo, TokenResponse } from '@/models/sse.models'

const RPC_URL = process.env.RPC_URL || ''

export async function fetchTokenInfo(
  id: string,
): Promise<TokenResponse | null> {
  try {
    if (!RPC_URL) {
      throw new Error('RPC_URL is not configured')
    }

    const response = await fetch(RPC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'my-id',
        method: 'getAsset',
        params: {
          id: id,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: RPCResponse = await response.json()

    // Check for RPC error response
    if (data.error) {
      throw new Error(`RPC error: ${data.error.message}`)
    }

    // Validate that we have a result
    if (!data.result) {
      throw new Error('No token data found')
    }

    return {
      jsonrpc: data.jsonrpc,
      id: data.id,
      result: data.result,
    }
  } catch (error) {
    console.error(
      'Error fetching token info:',
      error instanceof Error ? error.message : 'Unknown error',
    )
    return null
  }
}

export async function SseContainer() {
  let tokenInfo: TokenInfo | null = null

  const id = 'H4phNbsqjV5rqk8u6FUACTLB6rNZRTAPGnBb8KXJpump'

  try {
    tokenInfo = await fetchTokenInfo(id)
  } catch (error) {
    console.error('Error fetching token info:', error)
    return <p>no infos</p>
  }

  if (!tokenInfo) {
    return <p>Loading...</p>
  }
  console.log('tokenInfo', tokenInfo)

  let price = 0
  let supply = 0
  let decimals = 0

  if (tokenInfo.result && 'token_info' in tokenInfo.result) {
    price = tokenInfo.result.token_info.price_info?.price_per_token || 0
    supply = tokenInfo.result.token_info.supply || 0
    decimals = tokenInfo.result.token_info.decimals || 0
  }

  const marketCap = (supply * price) / 10 ** decimals

  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-900 p-4 rounded-lg">
      <div className="p-4 border border-green-600 rounded-md">
        <p className="text-gray-400">Price</p>
        <p className="text-green-400 text-lg font-bold">${price.toFixed(6)}</p>
      </div>
      <div className="p-4 border border-green-600 rounded-md">
        <p className="text-gray-400">Market Cap</p>
        <p className="text-green-400 text-lg font-bold">
          ${(marketCap / 1_000_000).toFixed(2)}M
        </p>
      </div>
      <div className="p-4 border border-green-600 rounded-md">
        <p className="text-gray-400">24h Volume</p>
        <p className="text-green-400 text-lg font-bold">N/A</p>
      </div>
      <div className="p-4 border border-green-600 rounded-md">
        <p className="text-gray-400">Liquidity</p>
        <p className="text-green-400 text-lg font-bold">N/A</p>
      </div>
    </div>
  )
}
