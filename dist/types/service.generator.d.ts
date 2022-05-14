declare const serviceGenerator: () => {
    description: string;
    prompts: {
        type: string;
        name: string;
        message: string;
    }[];
    actions: ({
        type: string;
        path: string;
        templateFile: string;
        pattern?: undefined;
        template?: undefined;
        separator?: undefined;
        abortOnFail?: undefined;
    } | {
        type: string;
        path: string;
        pattern: RegExp;
        template: string;
        templateFile?: undefined;
        separator?: undefined;
        abortOnFail?: undefined;
    } | {
        type: string;
        separator: string;
        path: string;
        pattern: RegExp;
        template: string;
        templateFile?: undefined;
        abortOnFail?: undefined;
    } | {
        type: string;
        path: string;
        pattern: RegExp;
        template: string;
        abortOnFail: boolean;
        templateFile?: undefined;
        separator?: undefined;
    } | {
        type: string;
        path: string;
        templateFile?: undefined;
        pattern?: undefined;
        template?: undefined;
        separator?: undefined;
        abortOnFail?: undefined;
    })[];
};
export default serviceGenerator;
