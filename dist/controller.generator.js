"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_path_1 = (0, tslib_1.__importDefault)(require("node:path"));
const CURRENT_DIR = node_path_1.default.resolve(__dirname);
const controllerGenerator = () => {
    const description = 'Adds a controller in a module';
    const prompts = [
        {
            type: 'input',
            name: 'module',
            message: 'Please state a module in which the controller should be created',
        },
        {
            type: 'input',
            name: 'model',
            message: 'Which model ?',
        },
    ];
    const actions = () => {
        const actions = [];
        actions.push({
            type: 'add',
            path: 'src/{{camelCase module}}/{{plural model}}.controller.ts',
            templateFile: CURRENT_DIR + '/templates/controller/controller.ts',
        });
        actions.push({
            type: 'add',
            path: 'src/{{camelCase module}}/{{plural model}}.controller.spec.ts',
            templateFile: CURRENT_DIR + '/templates/controller/controller.tdd.ts',
        });
        // lint new files
        actions.push({
            type: 'eslint',
            path: 'src/{{camelCase module}}/{{plural model}}.controller.ts',
        });
        actions.push({
            type: 'eslint',
            path: 'src/{{camelCase module}}/{{plural model}}.controller.spec.ts',
        });
        // import new controller in module
        actions.push({
            type: 'append',
            path: 'src/{{camelCase module}}/{{camelCase module}}.module.ts',
            pattern: /common';/g,
            template: `import { {{properPlural model}}Controller } from './{{plural model}}.controller';`,
        });
        // add controller in module config
        actions.push({
            type: 'append',
            separator: '',
            path: 'src/{{camelCase module}}/{{camelCase module}}.module.ts',
            pattern: /controllers: \[/g,
            template: `{{properPlural model}}Controller, `,
        });
        // in case there is a coma before ]
        actions.push({
            type: 'modify',
            path: 'src/{{camelCase module}}/{{camelCase module}}.module.ts',
            pattern: /, \]/g,
            template: `]`,
            abortOnFail: false,
        });
        // lint module file
        actions.push({
            type: 'eslint',
            path: 'src/{{camelCase module}}/{{camelCase module}}.module.ts',
        });
        return actions;
    };
    return { description, actions, prompts };
};
exports.default = controllerGenerator;
//# sourceMappingURL=controller.generator.js.map