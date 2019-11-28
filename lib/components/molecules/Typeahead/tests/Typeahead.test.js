import { shallow } from 'enzyme';

import { TypeaheadVanilla } from '../index';

describe('<Typeahead />', () => {
  let TypeaheadComponent = '';
  beforeEach(() => {
    TypeaheadComponent = shallow(<TypeaheadVanilla />);
  });

  test('should render correctly', () => {
    expect(TypeaheadComponent).toMatchSnapshot();
  });
});
