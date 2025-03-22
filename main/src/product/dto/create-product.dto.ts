import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Product name',
  })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({
    example: 'Product price',
  })
  @IsNotEmpty({ message: 'Price is required' })
  price: number;

  @ApiProperty({
    example: 'Product description',
  })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @ApiProperty({
    example: 'User identifier',
  })
  @IsNotEmpty({ message: 'UserId is required' })
  userId: string;
}
