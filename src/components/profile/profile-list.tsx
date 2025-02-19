import { Profile } from '@/components/profile/profile'
import { getProfilesList } from '@/lib/tapestry'

export async function ProfilesList() {
  const data = await getProfilesList()

  return (
    <div>
      {data.profiles.map((elem, index: number) => {
        return (
          <div className="mb-4" key={index}>
            <Profile username={elem.profile.username} />
          </div>
        )
      })}
    </div>
  )
}
