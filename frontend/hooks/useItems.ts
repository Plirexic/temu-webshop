// frontend/hooks/useItems.ts
import useSWR, { mutate } from 'swr'
import { getAllItems, createOrUpdateItem, updateItem, deleteItem } from '../lib/itemsApi'
import { Item } from '../models/item'
import { CreateItemDto, UpdateItemDto } from '../models/dto'


export function useItems() {
  const { data, error } = useSWR<Item[]>('items', () => getAllItems())
  return {
    items: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export async function addItem(dto: CreateItemDto) {
  const newItem = await createOrUpdateItem(dto)
  // revalidate die Liste
  mutate('items')
  return newItem
}

export async function editItem(id: number, dto: UpdateItemDto) {
  const updated = await updateItem(id, dto)
  mutate('items')
  return updated
}

export async function removeItem(id: number) {
  await deleteItem(id)
  mutate('items')
}
