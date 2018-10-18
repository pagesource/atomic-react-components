## How do I create a component? Scaffolding?

You can use our in-built genrators to scaffold your components be it atoms, molecules, organisms or templates. Just running will command will start the generator, post which prompts will be asked for the name and other details. For page level components it will also ask if a page entry need to be added. An example of how the generator functions is shown below:

```shell
$ yarn run generate
atomic-react-pattern-lib@0.1.0 generate
$ plop --plopfile generators/index.js
? [PLOP] Please choose a generator. container - Add a container component (organisms, templates)
? Select the base component type: React.Component
? What should it be called? Demo
? Do you want headers? Yes
? Do you want an actions/constants/selectors/reducer tuple for this container? Yes
? Do you want sagas for asynchronous flows? (e.g. fetching data) Yes
? Where do you want to keep this component? templates
? Do you want anentry in pages folder? Yes
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/Demo.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/types/index.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/index.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/tests/index.test.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/Demo.style.js
[SUCCESS] add /Users/username/Project/app/pages/demo.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/Demo.actions.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/tests/actions.test.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/Demo.constants.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/Demo.selectors.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/tests/selectors.test.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/Demo.reducer.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/tests/reducer.test.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/Demo.saga.js
[SUCCESS] add /Users/username/Project/app/components/templates/Demo/tests/saga.test.js
✨  Done in 21.58s.
```
