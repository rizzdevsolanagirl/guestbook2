'use client'

import { Comments } from '@/components/profile/comments/comments'
import { FollowList } from '@/components/profile/follow-list'
import { MyProfile } from '@/components/profile/my-profile'
import { DisplaySuggestedAndGlobal } from '@/components/suggested-and-creators-invite/hooks/display-suggested-and-global'
import { getFollowers, getFollowing } from '@/lib/tapestry'
import type { IGetSocialResponse } from '@/models/profile.models'
import { PublicKey } from '@solana/web3.js'
import { useEffect, useState } from 'react'
import { PortfolioView } from './portfolio-view'

interface Props {
  username: string
}

export function ProfileContent({ username }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [followers, setFollowers] = useState<IGetSocialResponse | null>(null)
  const [following, setFollowing] = useState<IGetSocialResponse | null>(null)
  const [profileUsername, setProfileUsername] = useState(username)
  const [selectedTab, setSelectedTab] = useState<'profile' | 'portfolio'>(
    'profile',
  )

  useEffect(() => {
    async function init() {
      setIsLoading(true)
      try {
        // Check if the input is a valid Solana public key
        let actualUsername = username

        try {
          // If this succeeds, it's a valid public key
          new PublicKey(username)

          // Look up profiles for this wallet address
          const profilesResponse = await fetch(
            `/api/profiles?walletAddress=${username}`,
          )
          const profiles = await profilesResponse.json()

          // If profiles exist, use the first one's username
          if (profiles && profiles.length > 0) {
            actualUsername = profiles[0].username
            setProfileUsername(actualUsername)
          }
        } catch {
          // Not a public key, use as username directly
          actualUsername = username
        }

        // Fetch followers and following
        const followersData = await getFollowers({
          username: actualUsername,
        })

        const followingData = await getFollowing({
          username: actualUsername,
        })

        setFollowers(followersData)
        setFollowing(followingData)
      } catch (error) {
        console.error('Error initializing profile:', error)
      } finally {
        setIsLoading(false)
      }
    }

    init()
  }, [username])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        Loading profile...
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <MyProfile username={profileUsername} />

      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        <button
          type="button"
          className={`px-4 py-2 rounded-md ${
            selectedTab === 'profile'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'bg-zinc-800 text-gray-300'
          }`}
          onClick={() => setSelectedTab('profile')}
        >
          Profile
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-md ${
            selectedTab === 'portfolio'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'bg-zinc-800 text-gray-300'
          }`}
          onClick={() => setSelectedTab('portfolio')}
        >
          Portfolio
        </button>
      </div>

      {selectedTab === 'profile' ? (
        <>
          <div className="flex w-full justify-between space-x-4">
            <FollowList
              followers={
                followers || {
                  profiles: [],
                  page: 0,
                  pageSize: 0,
                }
              }
              following={
                following || {
                  profiles: [],
                  page: 0,
                  pageSize: 0,
                }
              }
            />
            <DisplaySuggestedAndGlobal username={profileUsername} />
          </div>
          <Comments username={profileUsername} />
        </>
      ) : (
        <PortfolioView username={username} />
      )}
    </div>
  )
}
