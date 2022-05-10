import path from 'node:path'
import { NodePlopAPI } from "node-plop";
import { GeneratorConfig } from 'partials/config';

const CURRENT_DIR = path.resolve(__dirname);

const moduleGenerator = (
	config: Partial<GeneratorConfig>,
	plop: NodePlopAPI
) => {
  const description = 'Module generator';
  const prompts = [
    {
      type: 'input',
      name: 'name',
      message: 'Name of module please ?',
    },
  ];
  const actions = [
    {
      type: 'add',
      path: 'src/{{camelCase name}}/{{camelCase name}}.module.ts',
      templateFile: CURRENT_DIR + '/templates/module/module.ts',
    },
  ]

  return { description, prompts, actions }
};

export default moduleGenerator;