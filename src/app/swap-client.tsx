'use client'

import { StyledSwap } from '@/components/trade/components/styled-swap'

interface SwapClientProps {
  onTokenChange?: (address: string, symbol: string) => void
  onOutputTokenChange?: (address: string, symbol: string) => void
}

export default function SwapClient({
  onTokenChange,
  onOutputTokenChange,
}: SwapClientProps = {}) {
  return (
    <StyledSwap
      onTokenChange={onTokenChange}
      onOutputTokenChange={onOutputTokenChange}
    />
  )
}
