import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class FindTaskParamsDTO {
  @ApiProperty({
    name: 'skip',
    description: `ignore items number`,
    required: false,
  })
  skip?: number;

  @ApiProperty({
    name: `take`,
    description: `items to take`,
    required: false,
  })
  take?: number;

  @ApiProperty({
    name: `cursor`,
    description: `cursor to execute query`,
    required: false,
  })
  cursor?: Prisma.TaskWhereUniqueInput;

  @ApiProperty({
    name: `where`,
    description: `filter response`,
    required: false,
  })
  where?: Prisma.TaskWhereInput;

  @ApiProperty({
    name: `where`,
    description: `order rule to filter response`,
    required: false,
  })
  orderBy?: Prisma.TaskOrderByWithRelationInput;
}
