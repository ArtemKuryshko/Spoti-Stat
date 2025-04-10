import { signOut } from '@/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  await signOut({ redirect: false })
  return NextResponse.json({ success: true })
}