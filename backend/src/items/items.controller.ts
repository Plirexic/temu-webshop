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
  import { ItemsService } from './items.service';
  import { CreateItemDto } from './dto/create-item.dto';
  import { UpdateItemDto } from './dto/update-item.dto';
  import { Item } from './entities/item.entity';
  
  @Controller('items')
  export class ItemsController {
    constructor(private readonly svc: ItemsService) {}
  
    @Get()
    getAll(): Promise<Item[]> {
      return this.svc.findAll();
    }
  
    @Get(':id')
    getOne(@Param('id') id: string): Promise<Item | null> {
      return this.svc.findOne(+id);
    }
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createOrUpdate(@Body() dto: CreateItemDto): Promise<Item> {
      return this.svc.createOrUpdate(dto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() dto: UpdateItemDto,
    ): Promise<Item | null> {
      return this.svc.update(+id, dto);
    }
  
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: string): Promise<boolean> {
      return this.svc.delete(+id);
    }
  }
  