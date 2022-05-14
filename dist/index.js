"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const module_generator_1 = (0, tslib_1.__importDefault)(require("./module.generator"));
const service_generator_1 = (0, tslib_1.__importDefault)(require("./service.generator"));
const helpers_1 = require("./helpers");
const controller_generator_1 = (0, tslib_1.__importDefault)(require("controller.generator"));
const generator = (plop) => {
    plop.load('plop-action-eslint');
    plop.setHelper('plural', (text) => (0, helpers_1.pluralize)(text, false));
    plop.setHelper('singular', (text) => (0, helpers_1.pluralize)(text, true));
    plop.setHelper('properPlural', (text) => (0, helpers_1.toTitleCase)(text));
    plop.setDefaultInclude({ generators: true });
    plop.setGenerator("module", (0, module_generator_1.default)());
    plop.setGenerator("service", (0, service_generator_1.default)());
    plop.setGenerator("controller", (0, controller_generator_1.default)());
};
exports.default = generator;
//# sourceMappingURL=index.js.map