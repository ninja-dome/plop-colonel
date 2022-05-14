"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_path_1 = (0, tslib_1.__importDefault)(require("node:path"));
const CURRENT_DIR = node_path_1.default.resolve(__dirname);
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
    ];
    return { description, prompts, actions };
};
exports.default = moduleGenerator;
//# sourceMappingURL=module.generator.js.map