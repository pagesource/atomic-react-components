# AtomicPatternLib

This repository contains reusable react components built to serve all type of react based projects to achieve better user experience consistency and reusability.

## Why a Component Library?

> **_A component library helps you achieve consistent branding as it becomes the single source of truth for every component not only in the application but for all projects in the organization._**

> **_Instead of duplicating the component code across features in your project, implement the component from a central source, like a component library._**

## Ecosystem of this component library 🎉

- **Development Environment:** Storybook integrated for developing and showcasing components.
- **Flow typed:** All components are FlowTyped and Flow Type checked.
- **Static Code Quality checks and formatting:** Javascript and CSS linting using Eslint, Stylelint and Prettier.
- **Component scaffolding:** Consistently generate components using Plop.
- **Documentation:** Generates code documentation with ESDocs.
- **Git Hooks:** Pre-commit, Pre-push and pre-publish using Husky.
- **Unit testing framework:** with Jest and Enzyme.
- Babel 7 to transpiling javascript and releasing them as ESModules.
- **Theme and Styling:** with Styled Components.

## Dependencies

1. GDS

## Installation

Dependencies should be installed using the yarn
command line tools.

```sh
yarn install
yarn flow:install
```

flow:install will search the [`libdef`](https://github.com/flow-typed/flow-typed/blob/master/README.md) repo and download all the libdefs that are relevant for our project and install them for us.

## Topics to refer

- [Development Tools](readme/DevelopmentTools.md)
- [Static Code Linters and Code Formatter](readme/StaticCodeLinters.md)
- [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
- [Folder Structure](readme/FolderStructure.md)
- [Component Scaffolding](readme/Component.md)
- [Flow Type](readme/FlowType.md)
- [Husky](readme/Husky.md)
- [ES Docs](readme/ESDocs.md)
- [Storybook](readme/Storybook.md)
- [Running The Tests](readme/Test.md)
