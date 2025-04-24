// frontend/src/app/page.tsx
import { ItemManager } from '../components/ItemManager'

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Temu Webshop</h1>
      <ItemManager />
    </main>
  )
}
