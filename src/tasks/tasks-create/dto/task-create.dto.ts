import { ApiProperty } from '@nestjs/swagger';

export class TaskCreateDTO {
  @ApiProperty({
    name: `name`,
  })
  name: string;
}
