# plop generators for Colonel NestJS

_An opinionated [`plop`][plop] generator for [`nestjs`][nestjs] with Colonel opinions._

## Installation

This package is hosted on [`npm`][npm].

```bash
npm install --save-dev @nicolasey/plop-colonel
```

## Usage

You need to install Colonel NestJS based project. Those generators are specific.

Afterwards, be sure you have [`plop`][plop] installed. Then, add the following lines to your `plopfile.js`.

```javascript
const colonel =
  require("@nicolasey/plop-colonel").default;

colonel(plop, defaultConfig);
```

so your `plopfile.js` could look e.g. like this

```javascript
const atomicGenerator =
  require("@a9g/plop-generator-react-atomic-component").default;

const config = plop => {
  colonel(plop);
};

module.exports = config;
```

## Generators

Now you'll have access to the `atomic-component` generator as shown below.

### Create a new module

```bash
plop module
```

### Create a new service within a module

```bash
plop service
```

### Create a new service within a controller

```bash
plop controller
```

## Questions

Report bugs or provide feedback by filing [issues][issues]

## License

MIT see [license.md](license.md)

[npm]: https://www.npmjs.com/package/@a9g/plop-generator-react-atomic-component
[issues]: https://github.com/ahoendgen/plop-generator-react-atomic-component/issues
[plop]: https://plopjs.com
[react]: https://reactjs.org
[typescript]: https://typescriptlang.org
[colonel]: https://github.com/nicolasey/colonel/
