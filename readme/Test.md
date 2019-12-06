## Running the tests

We are using Jest with Enzyme for running our tests.

Jest is an open JavaScript testing library from Facebook. Its slogan is "Delightful JavaScript Testing". While Jest can be used to test any JavaScript library, it shines when it comes to React.

- Automatically finds tests
- Automatically mocks dependencies
- Runs your tests with a fake DOM implementation
- Runs tests in parallel processes

We can use the below yarn command to execute unit test cases in jest

```sh
yarn run test
```

## Unit Testing Styled Components with ThemeProvider

When components are running in storybook or application a ThemeProvider enables theme variables to be available for each component's style via Context API. In Jest testing environment how does each component and their child Components gets access to theme. To solve this problem, we have created wrapper functions for enzyme's `mount, shallow, render` methods.

1. mount -> mountWithTheme
2. shallow -> shallowWithTheme
3. render -> renderWithTheme

For example, lib/components/molecules/Form/tests/Form.test.js and lib/components/molecules/Tabs/tests/Tabs.test.js makes use of mountWithTheme, shallowWithTheme and renderWithTheme instead of default folders.
