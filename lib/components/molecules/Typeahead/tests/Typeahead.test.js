import { shallow } from 'enzyme';
import defaultConfig from '../Typeahead.mock';

import { TypeaheadVanilla } from '../index';

describe('<Typeahead />', () => {
  let TypeaheadComponent = '';
  beforeEach(() => {
    TypeaheadComponent = shallow(<TypeaheadVanilla {...defaultConfig} />);
  });

  test('should render correctly', () => {
    expect(TypeaheadComponent).toMatchSnapshot();
  });
});
