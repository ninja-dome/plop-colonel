import path from 'node:path'
const CURRENT_DIR = path.resolve(__dirname);

const moduleGenerator = () => {
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