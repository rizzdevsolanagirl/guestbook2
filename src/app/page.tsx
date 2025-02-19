import { CreateProfileContainer } from '@/components/create-profile/create-profile-container'
import { ProfilesList } from '@/components/profile/profile-list'
import { SearchBar } from '@/components/search-bar/search-bar'
import { SuggestedAndCreatorsInvite } from '@/components/suggested-and-creators-invite/suggested-and-creators-invite'

export default async function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <SearchBar />
      <div className="flex justify-between space-x-4">
        <SuggestedAndCreatorsInvite />
      </div>
      <div className="w-full">
        <h2 className="text-xl mb-3">Profiles</h2>
        <ProfilesList />
      </div>
      <CreateProfileContainer />
    </div>
  )
}
