import { mount } from 'enzyme';

import withScripts from '../index';

import { defaultConfig } from '../WithScripts.mock';

const comp1 = () => (
  <div>Hoc will consume the wrapper Component A and injected respective script details</div>
);

const ComponentA = withScripts(comp1, defaultConfig);

describe('<WithScripts />', () => {
  test('should render correctly', () => {
    const WithScriptsComponent = mount(<ComponentA />);
    expect(WithScriptsComponent).toMatchSnapshot();
  });
});
