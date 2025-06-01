// decorators/swagger-items.decorator.ts
import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { Item } from '../items/entities/item.entity';
import { CreateItemDto } from '../items/dto/create-item.dto';
import { UpdateItemDto } from '../items/dto/update-item.dto';

export const ApiGetAllItems = () =>
  applyDecorators(
    ApiOperation({ 
      summary: 'Alle Items abrufen',
      description: 'Gibt eine Liste aller verfügbaren Items zurück.'
    }),
    ApiOkResponse({
      description: 'Liste der Items erfolgreich abgerufen.',
      type: [Item],
    })
  );

export const ApiGetOneItem = () =>
  applyDecorators(
    ApiOperation({ 
      summary: 'Ein Item nach ID abrufen',
      description: 'Gibt ein spezifisches Item anhand seiner ID zurück.'
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Die eindeutige ID des Items',
      example: 1,
    }),
    ApiOkResponse({
      description: 'Item erfolgreich gefunden.',
      type: Item,
    }),
    ApiNotFoundResponse({
      description: 'Item mit der angegebenen ID wurde nicht gefunden.',
    })
  );

export const ApiCreateItem = () =>
  applyDecorators(
    ApiOperation({ 
      summary: 'Neues Item erstellen',
      description: 'Erstellt ein neues Item oder aktualisiert ein bestehendes.'
    }),
    ApiBody({
      type: CreateItemDto,
      description: 'Die Daten für das zu erstellende Item',
    }),
    ApiCreatedResponse({
      description: 'Item erfolgreich erstellt.',
      type: Item,
    }),
    ApiBadRequestResponse({
      description: 'Ungültige Eingabedaten.',
    })
  );

export const ApiUpdateItem = () =>
  applyDecorators(
    ApiOperation({ 
      summary: 'Item aktualisieren',
      description: 'Aktualisiert ein bestehendes Item anhand seiner ID.'
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Die eindeutige ID des zu aktualisierenden Items',
      example: 1,
    }),
    ApiBody({
      type: UpdateItemDto,
      description: 'Die aktualisierten Daten für das Item',
    }),
    ApiOkResponse({
      description: 'Item erfolgreich aktualisiert.',
      type: Item,
    }),
    ApiNotFoundResponse({
      description: 'Item mit der angegebenen ID wurde nicht gefunden.',
    }),
    ApiBadRequestResponse({
      description: 'Ungültige Eingabedaten.',
    })
  );

export const ApiDeleteItem = () =>
  applyDecorators(
    ApiOperation({ 
      summary: 'Item löschen',
      description: 'Löscht ein Item anhand seiner ID.'
    }),
    ApiParam({
      name: 'id',
      type: 'number',
      description: 'Die eindeutige ID des zu löschenden Items',
      example: 1,
    }),
    ApiNoContentResponse({
      description: 'Item erfolgreich gelöscht.',
    }),
    ApiNotFoundResponse({
      description: 'Item mit der angegebenen ID wurde nicht gefunden.',
    })
  );