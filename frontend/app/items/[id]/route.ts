// frontend/app/items/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = 'http://backend:3001/items'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`${BACKEND_URL}/${params.id}`)
  
  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch item' }, { status: res.status })
  }
  
  const data = await res.json()
  return NextResponse.json(data)
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json()
  
  const res = await fetch(`${BACKEND_URL}/${params.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to update item' }, { status: res.status })
  }

  const data = await res.json()
  return NextResponse.json(data)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const res = await fetch(`${BACKEND_URL}/${params.id}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to delete item' }, { status: res.status })
  }

  return new NextResponse(null, { status: 204 }) // No Content
}