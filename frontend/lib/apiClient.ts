// lib/apiClient.ts
const BASE = process.env.NEXT_PUBLIC_API_BASE_URL!

export async function fetcher<T>(path: string, opts?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  })
  if (!res.ok) throw new Error(`API Error ${res.status}`)
  return res.json()
}
