'use client'

import { useCurrentWallet } from '@/components/auth/hooks/use-current-wallet'
import { Alert } from '@/components/common/alert'
import { Button } from '@/components/common/button'
import { LoadCircle } from '@/components/common/load-circle'
import { Input } from '@/components/form/input'
import { SubmitButton } from '@/components/form/submit-button'
import { useCreateProfile } from '@/components/profile/hooks/use-create-profile'
import { useGetIdentities } from '@/components/profile/hooks/use-get-identities'
import { IIdentity, IProfileList } from '@/models/profile.models'
import { cn } from '@/utils/utils'
import { User } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  setCreateProfileDialog: (isOpen: boolean) => void
}

export function CreateProfile({ setCreateProfileDialog }: Props) {
  const { walletAddress, loadingMainUsername, walletDisconnect } =
    useCurrentWallet()

  const [username, setUsername] = useState('')

  const [selectProfile, setSelectProfile] = useState<IProfileList | null>(null)

  const {
    createProfile,
    loading: creationLoading,
    error,
    response,
  } = useCreateProfile()

  const { data: identities, loading: profilesLoading } = useGetIdentities({
    walletAddress: walletAddress || '',
  })

  console.log({ identities })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (walletAddress && username) {
      await createProfile({ username, walletAddress })
      setCreateProfileDialog(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    const validValue = value.toLowerCase().replace(/[^a-z0-9]/g, '')
    setUsername(validValue)
  }

  const handleClick = async (profile: IIdentity) => {
    if (!walletAddress) {
      return
    }

    await createProfile({
      username: profile.profile.username,
      walletAddress: profile.wallet.address,
    })

    setCreateProfileDialog(false)
  }

  if (loadingMainUsername && profilesLoading) {
    return (
      <div className="flex items-center justify-center w-full py-32">
        <LoadCircle />
      </div>
    )
  }

  return (
    <>
      <div className="w-full">
        <h2 className="text-xl mb-3">Create Profile</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex items-center">
            <Input
              value={username}
              onChange={handleInputChange}
              name="username"
              placeholder="username"
            />
          </div>
          <SubmitButton>
            {creationLoading ? 'Creating...' : 'Create Profile'}
          </SubmitButton>
        </form>

        {error && <Alert type="error" message={error} />}
        {response && (
          <Alert type="success" message="Profile created successfully!" />
        )}
        <div className="bg-foreground h-[1px] w-full my-4" />
        <div className="flex flex-col space-y-4 items-center w-full">
          <div className="w-full">
            {!!identities?.profiles?.length ? (
              <div className="w-full h-[200px] overflow-auto">
                {identities?.profiles?.map((entry, index) => (
                  <Button
                    key={index}
                    disabled={profilesLoading}
                    variant="ghost"
                    onClick={() => setSelectProfile(entry)}
                    className="flex items-start justify-start w-full"
                  >
                    <div
                      className={cn(
                        'flex items-center border-2 rounded-sm w-full p-2 space-y-2',
                        {
                          'border border-accent': selectProfile === entry,
                          'border border-mutedLight': selectProfile !== entry,
                        },
                      )}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="relative rounded-full w-11 h-11 bg-muted-foreground shrink-0 flex items-center justify-center">
                          {entry.profile.image ? (
                            <div>
                              <Image
                                width={30}
                                height={30}
                                alt="avatar"
                                className="rounded-full object-cover"
                                src={entry.profile.image}
                                unoptimized
                              />
                            </div>
                          ) : (
                            <User />
                          )}
                        </div>
                        <div className="w-2/3 flex flex-col items-start text-left">
                          <h4 className="text-md font-bold truncate w-full">
                            {entry.profile.username}
                          </h4>
                          <div className="w-[200px]">
                            <p className="line-clamp-2 font-light">
                              {entry.profile.bio}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-center">
                We could not find any profiles on Tapestry.
                <br /> Create one to get started!
              </p>
            )}
          </div>

          <Button
            className="w-full justify-center"
            variant="secondary"
            disabled={selectProfile === null}
            onClick={() => {
              if (selectProfile) {
                handleClick(selectProfile)
              }
            }}
          >
            Import profile
          </Button>
          <Button
            className="w-full text-xs underline justify-center"
            variant="ghost"
            onClick={() => {
              walletDisconnect()
              setCreateProfileDialog(false)
            }}
          >
            Disconnect wallet
          </Button>
        </div>
      </div>
    </>
  )
}
