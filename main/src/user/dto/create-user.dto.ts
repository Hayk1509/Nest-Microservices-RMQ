import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Hayk' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Sarukhanyan' })
  @IsString()
  @IsNotEmpty()
  surename: string;
}
