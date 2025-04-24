// frontend/models/item.ts
export interface Item {
  id: number
  name: string
  quantity: number
}

export interface CreateItemDto {
  name: string
  quantity: number
}

export interface UpdateItemDto {
  name?: string
  quantity?: number
}
