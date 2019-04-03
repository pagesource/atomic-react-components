# Atomic React Pattern Lib

A react pattern library with collocation of generic components and equipped with ideal react development ecosystem. 

## Why a Component Library?

> **_A component library helps you achieve consistent branding as it becomes the single source of truth for every component not only in the application but for all projects in the organization._**

> **_Instead of duplicating the component code across features in your project, implement the component from a central source, like a component library._**

## Installation and Uses

This package intends to be an ideal development ecosystem for react component libraries, with some generic OOTB components to offer, it enables any team to customize them for their needs and publish their own private or public component library. Detailed guidelines to work with this ecosystem are available [here](readme/index.md). 

For direct as-is uses, use below: 

```sh
yarn add @sapient-xt/atomic-react-pattern-lib

**or** 

npm install @sapient-xt/atomic-react-pattern-lib
```

Its collection of reusable react components built to serve all type of react based projects to achieve better user experience consistency and reusability.

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
- Uses Rollup based build process to export 3 type of bundles (esm, cjs, umd) with tree shaking enabled settings.   

## Dependencies

1. formik
2. yup
3. flexboxgrid
4. react-modal
