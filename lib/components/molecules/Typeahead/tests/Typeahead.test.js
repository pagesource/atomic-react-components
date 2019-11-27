import { shallow } from 'enzyme';

import Typeahead from '../index';

describe('<Typeahead />', () => {
  let TypeaheadComponent = '';
  beforeEach(() => {
    TypeaheadComponent = shallow(<Typeahead>Test</Typeahead>);
  });

  test('should render correctly', () => {
    expect(TypeaheadComponent).toMatchSnapshot();
  });
});
