import { fetchTapestry } from '@/utils/api'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get('username')

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 })
  }

  try {
    // const response = await socialfi.profiles.profilesDetail({
    //   id: username,
    // })

    const response = await fetchTapestry({
      endpoint: `profiles/${username}`,
    })

    return NextResponse.json(response)
  } catch (error: any) {
    console.error('Error fetching profiles:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch profiles' },
      { status: 500 },
    )
  }
}
