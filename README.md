# Atomic React Pattern Lib

A react pattern library with collocation of generic components and equipped with ideal react development ecosystem.

## Why a Component Library?

> **_A component library helps you achieve consistent branding as it becomes the single source of truth for every component not only in the application but for all projects in the organization._**

> **_Instead of duplicating the component code across features in your project, implement the component from a central source, like a component library._**

## Installation and Uses

This package can be used in 2 ways as NPM dependency or as Fork/Clone; if you wish to setup your own component library. Its collection of reusable react components built to serve all type of react based projects to achieve consistent user experience and reusability.

### As NPM Dependency

If you wish to consume components exported by this library as is and don't see much scope for customization, following is how this package can be used:

```sh
yarn add @xt-pagesource/atomic-react-pattern-lib

**or**

npm install @xt-pagesource/atomic-react-pattern-lib
```

To reuse one of the component in your react components just import the components you need. Each component has its un-styled export too as Vanilla version.

```javascript
//1. With Default Styles
import { Button } from '@xt-pagesource/atomic-react-pattern-lib';

//2. Without Default Styles
import { ButtonVanilla } from '@xt-pagesource/atomic-react-pattern-lib';
```

<details>
  <summary>List of Component</summary>
  
  ## Exported Components
  1. Button, ButtonVanilla
  2. Anchor, AnchorVanilla
  3. Para, ParaVanilla
  4. Heading, HeadingVanilla
  5. FieldError, FieldErrorVanilla
  6. Image, ImageVanilla
  7. Input, InputVanilla
  8. Select, SelectVanilla
  9. Label 
  10. Form
  11. Textarea, TextareaVanilla
  12. InputChoice, InputChoiceVanilla
  13. Modal, ModalVanilla
  14. Popover, PopoverVanilla
  15. Tabs, TabsVanilla
  16. Theme
  17. List, ListVanilla
  18. Blockquote, BlockquoteVanilla
  19. QuoteMedia, QuoteMediaVanilla
  20. Video, VideoVanilla
</details>

### As Fork/Clone for Custom Development

This package intends to be an ideal development ecosystem for react component libraries, with some generic OOTB components to offer, it enables any team to customize them for their needs and publish their own private or public component library. Detailed guidelines to work with this ecosystem are available [here](readme/index.md).

Fork the repository and do a **git clone**. Navigate to root directory of checked out code.

Dependencies should be installed using the **yarn** (Preferred Option).

```sh
yarn install
yarn run flow:install
```

flow:install will search the [`libdef`](https://github.com/flow-typed/flow-typed/blob/master/README.md) repo and download all the libdefs that are relevant for our project and install them for us.

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
