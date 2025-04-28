// frontend/src/app/page.tsx
import { getAllItems } from '../lib/itemsApi'
import { ItemManager } from '../components/ItemManager'

export const dynamic = 'force-dynamic' // Force server-side rendering
export const revalidate = 0 // Disable static generation

export default async function HomePage() {
  const items = await getAllItems(); // Fetch items on the server

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Temu Webshop</h1>
      <ItemManager initialItems={items} />
    </main>
  )
}
