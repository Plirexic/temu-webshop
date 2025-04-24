// frontend/models/dto.ts
export interface CreateItemDto {
    name: string
    quantity: number
  }
  
  export interface UpdateItemDto {
    name?: string
    quantity?: number
  }
  