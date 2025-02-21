import { IProfileList } from '@/models/profile.models'
import { FetchMethod, fetchTapestry } from '@/utils/api'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // const response = await socialfi.api.profiles.profilesList({
    //   page: '0',
    //   pageSize: '10',
    // })

    const response = await fetchTapestry<IProfileList[]>({
      endpoint: 'profiles',
      method: FetchMethod.GET,
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
