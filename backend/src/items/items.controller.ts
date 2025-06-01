// items.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import {
  ApiGetAllItems,
  ApiGetOneItem,
  ApiCreateItem,
  ApiUpdateItem,
  ApiDeleteItem,
} from '../decorators/swagger-items.decorator';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly svc: ItemsService) {}

  @Get()
  @ApiGetAllItems()
  getAll(): Promise<Item[]> {
    return this.svc.findAll();
  }

  @Get(':id')
  @ApiGetOneItem()
  getOne(@Param('id') id: string): Promise<Item | null> {
    return this.svc.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreateItem()
  createOrUpdate(@Body() dto: CreateItemDto): Promise<Item> {
    return this.svc.createOrUpdate(dto);
  }

  @Put(':id')
  @ApiUpdateItem()
  update(
    @Param('id') id: string,
    @Body() dto: UpdateItemDto,
  ): Promise<Item | null> {
    return this.svc.update(+id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiDeleteItem()
  delete(@Param('id') id: string): Promise<boolean> {
    return this.svc.delete(+id);
  }
}