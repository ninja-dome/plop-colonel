import path from 'node:path'
import { NodePlopAPI } from "node-plop";
import { GeneratorConfig } from 'partials/config';

const CURRENT_DIR = path.resolve(__dirname);

const serviceGenerator = (
	config: Partial<GeneratorConfig>,
	plop: NodePlopAPI
) => {
  const description = 'Service generator';
  const prompts = [
    {
      type: 'input',
      name: 'module',
      message: 'In which module ? (folder name)',
    },
    {
      type: 'input',
      name: 'model',
      message: 'Name of service please ?',
    },
  ];
  const actions = [
    {
      type: 'add',
      path: 'src/{{camelCase module}}/services/{{plural model}}.service.ts',
      templateFile: CURRENT_DIR + '/templates/service/service.ts',
    },
    {
      type: 'add',
      path: 'src/{{camelCase module}}/services/{{plural model}}.service.spec.ts',
      templateFile: CURRENT_DIR + '/templates/service/service.tdd.ts',
    },
    {
      type: 'add',
      path: 'src/{{camelCase module}}/mock/{{camelCase model}}.mock.ts',
      templateFile: CURRENT_DIR + '/templates/mock/model.mock.ts',
    },
    {
      type: 'append',
      path: 'src/{{camelCase module}}/{{camelCase module}}.module.ts',
      pattern: /common';/g,
      template: `import { {{properPlural model}}Service } from './services/{{plural model}}.service';`,
    },
    {
      type: 'append',
      separator: '',
      path: 'src/{{camelCase module}}/{{camelCase module}}.module.ts',
      pattern: /providers: \[/g,
      template: `{{properPlural model}}Service, `,
    },
    {
      type: 'modify',
      path: 'src/{{camelCase module}}/{{camelCase module}}.module.ts',
      pattern: /, \]/g,
      template: `]`,
      abortOnFail: false,
    },
    {
      type: 'eslint',
      path: 'src/{{camelCase module}}/{{camelCase module}}.module.ts',
    },
    {
      type: 'eslint',
      path: 'src/{{camelCase module}}/services/{{plural model}}.service.ts',
    },
    {
      type: 'eslint',
      path: 'src/{{camelCase module}}/services/{{plural model}}.service.spec.ts',
    },
  ];

  return { description, prompts, actions }
}

export default serviceGenerator
