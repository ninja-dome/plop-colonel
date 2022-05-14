import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { {{properPlural model}}Service } from './services/{{plural model}}.service';

@Controller('{{plural model}}')
export class {{properPlural model}}Controller {
  constructor(private readonly service: {{properPlural model}}Service) {}

  @Get()
  async list(
    @Body('params')
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.{{pascalCase model}}WhereUniqueInput;
      where?: Prisma.{{pascalCase model}}WhereInput;
      orderBy?: Prisma.{{pascalCase model}}OrderByWithRelationInput;
    } = { where: {} },
  ) {
    return await this.service.{{plural model}}(params);
  }

  @Get('/:id')
  async show(@Param('id') id: string) {
    return await this.service.{{ camelCase model }}({ id });
  }

  @Post()
  async create(@Body('params') params: Prisma.{{pascalCase model}}CreateInput) {
    return await this.service.create{{pascalCase model}}(params);
  }

  @Delete('/:id')
  async destroy(@Param('id') id: string) {
    return await this.service.delete{{pascalCase model}}({ id });
  }

  @Put('/:id')
  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body('params') data: Prisma.{{pascalCase model}}UpdateInput,
  ) {
    return await this.service.update{{pascalCase model}}({ where: { id }, data });
  }
}
