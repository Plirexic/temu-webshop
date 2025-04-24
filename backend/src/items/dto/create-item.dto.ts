import { IsString, IsInt, Min } from 'class-validator';

export class CreateItemDto {
  @IsString()          // Validierung: muss String sein
  name: string;

  @IsInt()
  @Min(1)
  quantity: number;
}
