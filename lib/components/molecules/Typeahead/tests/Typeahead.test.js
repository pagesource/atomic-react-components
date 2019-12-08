import { shallow, mount } from 'enzyme';
import defaultConfig from '../Typeahead.mock';

import { TypeaheadVanilla } from '../index';

describe('<Typeahead />', () => {
  let TypeaheadComponent = '';
  beforeEach(() => {
    TypeaheadComponent = shallow(<TypeaheadVanilla {...defaultConfig} onChange={() => {}} />);
  });

  test('should render correctly', () => {
    expect(TypeaheadComponent).toMatchSnapshot();
    expect(TypeaheadComponent.exists()).toBe(true);
    expect(TypeaheadComponent.find({ type: 'search' }).exists()).toBe(true);
    expect(TypeaheadComponent.exists({ type: 'search' })).toBe(true);
  });

  test('should search text echoed', () => {
    TypeaheadComponent.find({ type: 'search' }).simulate('change', {
      currentTarget: { value: 'all' },
    });
    expect(TypeaheadComponent.find({ type: 'search' }).props().value).toEqual('all');
  });
});
