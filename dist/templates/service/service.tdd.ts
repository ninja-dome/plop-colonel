import { Test, TestingModule } from '@nestjs/testing';
import { {{properPlural model}}Service } from './{{plural model}}.service';
import { DatabaseModule } from '../../database/database.module';
import mock{{pascalCase model}} from '../mock/{{pascalCase model}}.mock';
import { prisma } from '../../../prisma/__mocks__/index';
import { {{pascalCase model}} } from '@prisma/client';

describe('{{properPlural model}}Service', () => {
  let service: {{properPlural model}}Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{{properPlural model}}Service],
      imports: [DatabaseModule],
    }).compile();

    service = module.get<{{properPlural model}}Service>({{properPlural model}}Service);

    await prisma.{{camelCase model}}.create({ data: mock{{pascalCase model}} });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a {{model}}', async () => {
    expect(await service.{{camelCase model}}({ id: mock{{pascalCase model}}.id })).toStrictEqual(
      mock{{pascalCase model}},
    );
  });

  it('should list {{properPlural model}}', async () => {
    const result: {{pascalCase model}}[] = [];
    result.push(mock{{pascalCase model}});
    expect(await service.{{plural model}}({})).toStrictEqual(result);
  });

  it('should update {{camelCase model}}', async () => {
    mock{{pascalCase model}}.id = 'Lille Ninja';
    expect(
      await service.update{{pascalCase model}}({
        where: { id: mock{{pascalCase model}}.id },
        data: mock{{pascalCase model}},
      }),
    ).toStrictEqual(mock{{pascalCase model}});
  });

  it('should delete {{camelCase model}}', async () => {
    expect(await service.delete{{pascalCase model}}({ id: mock{{pascalCase model}}.id })).toStrictEqual(
      mock{{pascalCase model}},
    );
  });
});
