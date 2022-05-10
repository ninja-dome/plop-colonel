import { NodePlopAPI } from "node-plop";
import { GeneratorConfig } from "partials/config";
import moduleGenerator from './module.generator';
import serviceGenerator from './service.generator';
import { toTitleCase, pluralize } from './helpers';

const generator = (
	plop: NodePlopAPI,
	config: Partial<GeneratorConfig>
): void => {
	plop.load('plop-action-eslint');
	plop.setHelper('plural', (text: string) => pluralize(text, false));
	plop.setHelper('singular', (text: string) => pluralize(text, true));
	plop.setHelper('properPlural', (text: string) => toTitleCase(text));

	const module = moduleGenerator(config, plop);
	const service = serviceGenerator(config, plop);

	plop.setDefaultInclude({ generators: true });
	plop.setGenerator("module", module);
	plop.setGenerator("service", service);
};

export default generator;
