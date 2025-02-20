import { socialfi } from '@/utils/socialfi'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await socialfi.api.profiles.profilesList({
      page: '0',
      pageSize: '10',
    })

    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Error fetching profiles:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch profiles' },
      { status: 500 },
    )
  }
}
