import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { {{pascalCase model}}, Prisma } from '@prisma/client';

@Injectable()
export class {{properPlural model}}Service {
  constructor(private readonly prisma: PrismaService) {}

  async count(): Promise<number> {
    return await this.prisma.{{camelCase model}}.count({
      where: {},
    });
  }

  async {{camelCase model}}(
    {{camelCase model}}WhereUniqueInput: Prisma.{{pascalCase model}}WhereUniqueInput,
  ): Promise<{{pascalCase model}} | null> {
    return await this.prisma.{{camelCase model}}.findUnique({
      where: {{camelCase model}}WhereUniqueInput,
    });
  }

  async {{plural model}}(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.{{pascalCase model}}WhereUniqueInput;
    where?: Prisma.{{pascalCase model}}WhereInput;
    orderBy?: Prisma.{{pascalCase model}}OrderByWithRelationInput;
  }): Promise<{{pascalCase model}}[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.{{camelCase model}}.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create{{pascalCase model}}(data: Prisma.{{pascalCase model}}CreateInput): Promise<{{pascalCase model}}> {
    return await this.prisma.{{camelCase model}}.create({ data });
  }

  async update{{pascalCase model}}(params: {
    where: Prisma.{{pascalCase model}}WhereUniqueInput;
    data: Prisma.{{pascalCase model}}UpdateInput;
  }): Promise<{{pascalCase model}}> {
    const { where, data } = params;
    return await this.prisma.{{camelCase model}}.update({
      data,
      where,
    });
  }

  async delete{{pascalCase model}}(where: Prisma.{{pascalCase model}}WhereUniqueInput): Promise<{{pascalCase model}}> {
    return await this.prisma.{{camelCase model}}.delete({
      where,
    });
  }
}
