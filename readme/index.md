# Topics to refer

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

## Installation for Development 

Dependencies should be installed using the yarn
command line tools.

```sh
yarn install
yarn run flow:install
```

flow:install will search the [`libdef`](https://github.com/flow-typed/flow-typed/blob/master/README.md) repo and download all the libdefs that are relevant for our project and install them for us.
