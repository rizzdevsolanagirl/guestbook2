'use client'

import { useCurrentWallet } from '@/components/auth/hooks/use-current-wallet'
import { Button } from '@/components/common/button'
import { abbreviateWalletAddress } from '@/components/common/tools'
import { UnifiedWalletButton } from '@jup-ag/wallet-adapter'
import {
  Check,
  Clipboard,
  HandCoins,
  House,
  LogOut,
  MoreVertical,
  User,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export function Header() {
  const { walletAddress, mainUsername, walletDisconnect } = useCurrentWallet()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const dropdownRef = useRef(null)
  const router = useRouter()

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        (dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        return
      }
      setIsDropdownOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="border-b-1 border-muted flex items-center justify-center w-full p-1">
      <div className="max-w-6xl w-full flex items-center justify-between">
        <Link href="/" className="hover:opacity-80">
          <h1 className="text-2xl font-bold">Tapestry Template</h1>
        </Link>
        <div className="flex items-center space-x-6">
          {mainUsername && walletAddress ? (
            <div className="flex items-center relative" ref={dropdownRef}>
              <div className="flex flex-col space-y-1 w-[100px]">
                <Link
                  href={`/${mainUsername}`}
                  className="underline hover:opacity-80"
                >
                  <p className="truncate font-bold">{mainUsername}</p>
                </Link>
              </div>
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <MoreVertical size={20} />
                </Button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-muted shadow-lg rounded-md overflow-hidden z-50">
                    <div className="border-b border-muted-light">
                      <Button
                        variant="ghost"
                        className="px-4 py-2 hover:bg-muted-light w-full"
                        onClick={() => handleCopy(walletAddress)}
                      >
                        {copied ? (
                          <Check size={16} className="mr-2" />
                        ) : (
                          <Clipboard size={16} className="mr-2" />
                        )}
                        {abbreviateWalletAddress({ address: walletAddress })}
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        router.push('/')
                        setIsDropdownOpen(false)
                      }}
                      className="px-4 py-2 hover:bg-muted-light w-full"
                    >
                      <House size={16} className="mr-2" /> home
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={() => {
                        router.push(`/${mainUsername}`)
                        setIsDropdownOpen(false)
                      }}
                      className="px-4 py-2 hover:bg-muted-light w-full"
                    >
                      <User size={16} className="mr-2" /> my profile
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={() => {
                        router.push('/sse')
                        setIsDropdownOpen(false)
                      }}
                      className="px-4 py-2 hover:bg-muted-light w-full"
                    >
                      <HandCoins size={16} className="mr-2" /> sse
                    </Button>

                    <Button
                      variant="ghost"
                      className="px-4 py-2 hover:bg-muted-light w-full !text-red-500"
                      onClick={walletDisconnect}
                    >
                      <LogOut size={16} className="mr-2" /> log out
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <UnifiedWalletButton />
          )}

          <Link
            href="https://github.com/Primitives-xyz/tapestry-template"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 flex items-center"
          >
            <Image
              width={20}
              height={20}
              alt="Github link"
              src="/logos/github-mark.svg"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
