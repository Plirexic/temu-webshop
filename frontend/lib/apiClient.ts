// lib/apiClient.ts
const BASE = process.env.NEXT_PUBLIC_API_URL!

export async function fetcher(input: RequestInfo, init?: RequestInit) {
  let url = typeof input === 'string' ? input : input.toString()

  // If relative path, prepend absolute base URL for SSR
  if (url.startsWith('/')) {
    const base =
      typeof window === 'undefined'
        ? BASE ?? 'http://backend:3001'
        : ''
    url = base + url
  }

  const res = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  })

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`)
  }

  return res.json()
}

