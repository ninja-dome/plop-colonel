import { NodePlopAPI } from "node-plop";
import moduleGenerator from './module.generator';
import serviceGenerator from './service.generator';
import { toTitleCase, pluralize } from './helpers';
import controllerGenerator from "controller.generator";

const generator = (
	plop: NodePlopAPI,
): void => {
	plop.load('plop-action-eslint');
	plop.setHelper('plural', (text: string) => pluralize(text, false));
	plop.setHelper('singular', (text: string) => pluralize(text, true));
	plop.setHelper('properPlural', (text: string) => toTitleCase(text));

	plop.setDefaultInclude({ generators: true });
	plop.setGenerator("module", moduleGenerator());
	plop.setGenerator("service", serviceGenerator());
	plop.setGenerator("controller", controllerGenerator());
};

export default generator;
