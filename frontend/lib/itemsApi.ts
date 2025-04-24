// lib/itemsApi.ts
import { fetcher } from './apiClient'
import { Item } from '../models/item'
import { CreateItemDto, UpdateItemDto } from '../models/dto'


export async function getAllItems(): Promise<Item[]> {
  return fetcher('/items')
}

export async function getItem(id: number): Promise<Item | null> {
  return fetcher(`/items/${id}`)
}

export async function createOrUpdateItem(dto: CreateItemDto): Promise<Item> {
  return fetcher('/items', {
    method: 'POST',
    body: JSON.stringify(dto),
  })
}

export async function updateItem(id: number, dto: UpdateItemDto): Promise<Item | null> {
  return fetcher(`/items/${id}`, {
    method: 'PUT',
    body: JSON.stringify(dto),
  })
}

export async function deleteItem(id: number): Promise<boolean> {
  return fetcher(`/items/${id}`, {
    method: 'DELETE',
  })
}
