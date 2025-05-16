'use client'

import { Swap } from './swap'

interface StyledSwapProps {
  onTokenChange?: (address: string, symbol: string) => void
  onOutputTokenChange?: (address: string, symbol: string) => void
}

export function StyledSwap({
  onTokenChange,
  onOutputTokenChange,
}: StyledSwapProps) {
  return (
    <div className="w-full h-full">
      {/* Apply custom styling with CSS to override the Swap component's default styling */}
      <style jsx global>{`
        /* Override the swap container's spacing */
        .space-y-4 {
          --tw-space-y-reverse: 0;
          margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
          margin-bottom: calc(1rem * var(--tw-space-y-reverse));
        }

        /* Make the card match token chart */
        .border-glow-animation {
          background-color: rgb(9 9 11) !important; /* bg-zinc-950 */
          border-color: rgb(39 39 42) !important; /* border-zinc-800 */
          border-width: 1px;
          border-radius: 0.5rem;
        }

        /* Override the token input/output containers */
        .bg-background,
        .hover\\:bg-accent-hover {
          background-color: rgb(24 24 27) !important; /* bg-zinc-900 */
        }

        /* Style the swap button */
        button[class*='rounded-full'] {
          background: linear-gradient(
            to right,
            rgb(147 51 234),
            rgb(219 39 119)
          ) !important;
          border: none !important;
          color: white !important;
          margin-top: 0.5rem;
        }

        button[class*='rounded-full']:hover {
          background: linear-gradient(
            to right,
            rgb(126 34 206),
            rgb(190 24 93)
          ) !important;
        }

        /* Add height to match chart height */
        .card-content-container {
          min-height: 485px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>

      <div className="bg-zinc-950 rounded-lg border border-zinc-800 h-full flex flex-col">
        <div className="card-content-container p-4">
          <Swap
            onTokenChange={onTokenChange}
            onOutputTokenChange={onOutputTokenChange}
          />
        </div>
      </div>
    </div>
  )
}
