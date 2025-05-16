import TokenChartSwapContainer from '@/components/trade/components/token-chart-swap-container'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// This is a server component (the default for page.tsx in Next.js App Router)
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        <section className="container py-8">
          <TokenChartSwapContainer
            defaultTokenAddress="So11111111111111111111111111111111111111112" // SOL address
            defaultTokenSymbol="SOL"
          />
        </section>
        <section className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Popular Tokens</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-3 px-4 text-zinc-400 font-medium">
                    #
                  </th>
                  <th className="text-left py-3 px-4 text-zinc-400 font-medium">
                    Token
                  </th>
                  <th className="text-right py-3 px-4 text-zinc-400 font-medium">
                    Price
                  </th>
                  <th className="text-right py-3 px-4 text-zinc-400 font-medium">
                    24h
                  </th>
                  <th className="text-right py-3 px-4 text-zinc-400 font-medium">
                    7d
                  </th>
                  <th className="text-right py-3 px-4 text-zinc-400 font-medium">
                    Volume (24h)
                  </th>
                  <th className="text-right py-3 px-4 text-zinc-400 font-medium">
                    Market Cap
                  </th>
                  <th className="text-right py-3 px-4 text-zinc-400 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    name: 'Solana',
                    symbol: 'SOL',
                    price: 147.82,
                    change24h: 2.45,
                    change7d: 8.32,
                    volume: '1.2B',
                    marketCap: '64.5B',
                  },
                  {
                    id: 2,
                    name: 'Jupiter',
                    symbol: 'JUP',
                    price: 1.24,
                    change24h: -1.23,
                    change7d: 5.67,
                    volume: '245.7M',
                    marketCap: '4.2B',
                  },
                  {
                    id: 3,
                    name: 'Raydium',
                    symbol: 'RAY',
                    price: 0.87,
                    change24h: 3.56,
                    change7d: -2.34,
                    volume: '98.3M',
                    marketCap: '1.8B',
                  },
                  {
                    id: 4,
                    name: 'Marinade',
                    symbol: 'MNDE',
                    price: 0.42,
                    change24h: 1.78,
                    change7d: 4.21,
                    volume: '45.6M',
                    marketCap: '840.5M',
                  },
                  {
                    id: 5,
                    name: 'Bonk',
                    symbol: 'BONK',
                    price: 0.00002345,
                    change24h: 12.34,
                    change7d: 28.45,
                    volume: '324.5M',
                    marketCap: '1.2B',
                  },
                ].map((token) => (
                  <tr
                    key={token.id}
                    className="border-b border-zinc-800 hover:bg-zinc-900/50"
                  >
                    <td className="py-4 px-4">{token.id}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <Image
                            src="/placeholder.svg?height=32&width=32"
                            width={32}
                            height={32}
                            alt={token.symbol}
                          />
                        </Avatar>
                        <div>
                          <div className="font-medium">{token.name}</div>
                          <div className="text-sm text-zinc-400">
                            {token.symbol}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      $
                      {typeof token.price === 'number' && token.price < 0.0001
                        ? token.price.toFixed(8)
                        : token.price.toFixed(2)}
                    </td>
                    <td
                      className={`py-4 px-4 text-right ${token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {token.change24h >= 0 ? '+' : ''}
                      {token.change24h.toFixed(2)}%
                    </td>
                    <td
                      className={`py-4 px-4 text-right ${token.change7d >= 0 ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {token.change7d >= 0 ? '+' : ''}
                      {token.change7d.toFixed(2)}%
                    </td>
                    <td className="py-4 px-4 text-right">${token.volume}</td>
                    <td className="py-4 px-4 text-right">${token.marketCap}</td>
                    <td className="py-4 px-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Recent Trades</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-zinc-950 border-zinc-800">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <Image
                          src="/placeholder.svg?height=24&width=24"
                          width={24}
                          height={24}
                          alt="Token"
                        />
                      </Avatar>
                      <span className="font-medium">SOL → USDC</span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-zinc-900 text-zinc-400 border-zinc-800"
                    >
                      {Math.floor(Math.random() * 10) + 1}m ago
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Amount</span>
                    <span>{(Math.random() * 10).toFixed(2)} SOL</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-zinc-400">Value</span>
                    <span>${(Math.random() * 1000).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-zinc-400">Price Impact</span>
                    <span className="text-green-500">
                      -0.{Math.floor(Math.random() * 10)}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-800 py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
            </div>
            <span className="font-bold">SolanaSwap</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Discord
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
