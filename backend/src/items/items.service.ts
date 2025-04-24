import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly repo: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.repo.find();
  }

  findOne(id: number): Promise<Item | null> {
    return this.repo.findOneBy({ id });
  }

  async createOrUpdate(dto: CreateItemDto): Promise<Item> {
    // existierendes Item nach Name suchen
    const existing = await this.repo.findOneBy({ name: dto.name });
    if (existing) {
      existing.increaseQuantity(dto.quantity);
      return this.repo.save(existing);
    }
    // neu anlegen
    const item = this.repo.create(dto);
    return this.repo.save(item);
  }

  async update(id: number, dto: UpdateItemDto): Promise<Item | null> {
    const item = await this.repo.findOneBy({ id });
    if (!item) return null;
    Object.assign(item, dto);
    return this.repo.save(item);
  }

  async delete(id: number): Promise<boolean> {
    const res = await this.repo.delete(id);
    return res.affected! > 0;
  }
}
