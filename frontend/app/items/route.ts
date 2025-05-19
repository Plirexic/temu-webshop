// frontend/app/items/route.ts
import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = 'http://backend:3001/items'

export async function GET() {
  const res = await fetch(BACKEND_URL)
  const data = await res.json()
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const res = await fetch(BACKEND_URL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })

  const data = await res.json()
  return NextResponse.json(data)
}