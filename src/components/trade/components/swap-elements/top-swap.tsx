'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ArrowDownUp } from 'lucide-react'
import type { ESwapMode } from '../../models/jupiter/jup-api-models'
import { Pay } from './pay'
import { Receive } from './received'

interface Props {
  walletAddress: string
  inputTokenMint: string
  outputTokenMint: string
  displayInAmount: string
  displayInAmountInUsd: string
  inputTokenImageUri?: string
  inputTokenSymbol?: string
  displayOutAmount: string
  displayOutAmountInUsd: string
  outputTokenImageUri?: string
  outputTokenSymbol?: string
  setSwapMode: (mode: ESwapMode) => void
  handleInAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setShowInputTokenSearch: (show: boolean) => void
  handleInputAmountByPercentage: (percent: number) => void
  handleOutAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setShowOutputTokenSearch: (show: boolean) => void
  handleSwapDirection: () => void
}

export function TopSwap({
  walletAddress,
  inputTokenMint,
  outputTokenMint,
  displayInAmount,
  displayInAmountInUsd,
  inputTokenImageUri,
  inputTokenSymbol,
  displayOutAmount,
  displayOutAmountInUsd,
  outputTokenImageUri,
  outputTokenSymbol,
  handleSwapDirection,
  setSwapMode,
  handleInAmountChange,
  setShowInputTokenSearch,
  handleInputAmountByPercentage,
  handleOutAmountChange,
  setShowOutputTokenSearch,
}: Props) {
  return (
    <Card className="border-glow-animation flex-1">
      <CardContent className="p-4 flex flex-col gap-4">
        <Pay
          walletAddress={walletAddress}
          inputTokenMint={inputTokenMint}
          setSwapMode={setSwapMode}
          handleInAmountChange={handleInAmountChange}
          displayInAmount={displayInAmount}
          displayInAmountInUsd={displayInAmountInUsd}
          setShowInputTokenSearch={setShowInputTokenSearch}
          inputTokenImageUri={inputTokenImageUri}
          inputTokenSymbol={inputTokenSymbol}
          handleInputAmountByPercentage={handleInputAmountByPercentage}
        />

        <div className="flex items-center w-full justify-between text-muted space-x-2">
          <div className="bg-muted w-full h-[1px]" />
          <div className="p-2 bg-card rounded-full hover:bg-muted transition-colors">
            <ArrowDownUp
              size={24}
              className="cursor-pointer"
              onClick={handleSwapDirection}
            />
          </div>
          <div className="bg-muted w-full h-[1px]" />
        </div>

        <Receive
          outputTokenMint={outputTokenMint}
          setSwapMode={setSwapMode}
          handleOutAmountChange={handleOutAmountChange}
          displayOutAmount={displayOutAmount}
          displayOutAmountInUsd={displayOutAmountInUsd}
          setShowOutputTokenSearch={setShowOutputTokenSearch}
          outputTokenImageUri={outputTokenImageUri}
          outputTokenSymbol={outputTokenSymbol}
        />
      </CardContent>
    </Card>
  )
}
