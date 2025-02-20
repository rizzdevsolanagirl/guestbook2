// app/api/profiles/findAllProfiles/route.ts

import { socialfi } from '@/utils/socialfi'
import { NextResponse } from 'next/server'

// Prevent this route from being built statically
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    if (!process.env.TAPESTRY_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 503 },
      )
    }

    const data = await socialfi.api.profiles.profilesList({
      page: '0',
      pageSize: '10',
    })
    return NextResponse.json(data)
  } catch (error: any) {
    console.error('Error fetching profiles:', error)

    // Handle specific error cases
    if (error.response?.status === 401) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 401 })
    }

    return NextResponse.json(
      { error: 'Failed to fetch profiles' },
      { status: 500 },
    )
  }
}
