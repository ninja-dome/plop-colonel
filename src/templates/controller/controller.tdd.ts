import { Test, TestingModule } from '@nestjs/testing';
import { {{properPlural model}}Controller } from './{{plural model}}.controller';
import { Prisma, {{pascalCase model}} } from '@prisma/client';
import { {{properPlural model}}Service } from './services/{{plural model}}.service';
import { DatabaseModule } from '../database/database.module';

describe('{{properPlural model}}Controller', () => {
  let controller: {{properPlural model}}Controller;
  let service: {{properPlural model}}Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [{{properPlural model}}Controller],
      providers: [{{properPlural model}}Service],
      imports: [DatabaseModule],
    }).compile();

    service = await module.resolve<{{properPlural model}}Service>({{properPlural model}}Service);
    controller = module.get<{{properPlural model}}Controller>({{properPlural model}}Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('creates a {{model}}', async () => {
    const test: Prisma.{{pascalCase model}}CreateInput = {
      /* @TODO update default test model to fit */
      name: 'Test',
    };
    const result = test as {{pascalCase model}};

    jest
      .spyOn(service, 'create{{pascalCase model}}')
      .mockImplementation(async () => await result);

    expect(await controller.create(test)).toBe(result);
  });

  it('should return an array of {{plural model}}', async () => {
    const result = [{ name: 'Groupe W' }] as {{pascalCase model}}[];
    jest
      .spyOn(service, '{{plural model}}')
      .mockImplementation(async () => await result);

    expect(await controller.list()).toBe(result);
  });

  it('should return a {{model}}', async () => {
    const result = { name: 'Groupe W' } as {{pascalCase model}};
    jest.spyOn(service, '{{camelCase model}}').mockImplementation(async () => await result);

    expect(await controller.show('id')).toBe(result);
  });

  it('should update a {{model}}', async () => {
    const result = { name: 'Groupe W' } as {{pascalCase model}};
    jest
      .spyOn(service, 'update{{pascalCase model}}')
      .mockImplementation(async () => await result);

    expect(await controller.update('id', result)).toBe(result);
  });

  it('should delete a {{model}}', async () => {
    const result = { name: 'Groupe W' } as {{pascalCase model}};
    jest
      .spyOn(service, 'delete{{pascalCase model}}')
      .mockImplementation(async () => await result);

    expect(await controller.destroy('id')).toBe(result);
  });
});
