// Utility function to fetch assets (NFTs & tokens) using Helius DAS API
export async function fetchAssets(walletAddress: string) {
  // Get API key from environment variable
  const heliusApiKey = process.env.NEXT_PUBLIC_HELIUS_API_KEY

  if (!heliusApiKey) {
    console.error('Helius API key not found')
    return { items: [] }
  }

  const url = `https://mainnet.helius-rpc.com/?api-key=${heliusApiKey}`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'my-id',
        method: 'searchAssets',
        params: {
          ownerAddress: walletAddress,
          tokenType: 'all',
          displayOptions: {
            showCollectionMetadata: true,
          },
        },
      }),
    })

    const data = await response.json()
    return { items: data.result }
  } catch (error) {
    console.error('Error fetching assets:', error)
    return { items: [] }
  }
}
