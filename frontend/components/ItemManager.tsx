// frontend/components/ItemManager.tsx
'use client'

import { useState } from 'react'
import { useItems, addItem, editItem, removeItem } from '../hooks/useItems'
import { Item } from '../models/item'

export function ItemManager() {
  const { items, isLoading, isError } = useItems()
  const [name, setName] = useState('')
  const [qty, setQty] = useState(0)

  if (isLoading) return <p>Loading…</p>
  if (isError) return <p>Fehler beim Laden</p>

  const handleAdd = async () => {
    if (!name) return
    await addItem({ name, quantity: qty })
    setName('')
    setQty(0)
  }

  return (
    <div className="p-4 space-y-6">
      <div className="flex space-x-2">
        <input
          className="border p-2 flex-1"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          className="border p-2 w-24"
          value={qty}
          onChange={e => setQty(+e.target.value)}
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {items?.map((it: Item) => (
          <li key={it.id} className="flex items-center justify-between border p-2 rounded">
            <span>{it.name} (x{it.quantity})</span>
            <div className="space-x-2">
              <button
                onClick={() => editItem(it.id, { quantity: it.quantity + 1 })}
                className="px-2 bg-green-400 rounded"
              >
                +1
              </button>
              <button
                onClick={() => removeItem(it.id)}
                className="px-2 bg-red-400 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
