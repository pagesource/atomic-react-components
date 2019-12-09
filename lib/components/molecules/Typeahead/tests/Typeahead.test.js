import { shallow, mount, render } from 'enzyme';

import defaultConfig from '../Typeahead.mock';
import ListItem from '../ListItem';
import { TypeaheadVanilla } from '../index';

describe('<Typeahead />', () => {
  let TypeaheadComponent = '';
  const onChange = jest.fn();

  beforeEach(() => {
    TypeaheadComponent = mount(
      <TypeaheadVanilla
        onChange={onChange}
        renderListItem={item => <ListItem key={item}>{item}</ListItem>}
      />
    );
  });

  test('should render correctly', () => {
    expect(TypeaheadComponent).toMatchSnapshot();
    expect(TypeaheadComponent.exists()).toBe(true);
    expect(TypeaheadComponent.exists({ type: 'search' })).toBe(true);
  });

  test('should search text echoed', () => {
    const ShallowTypeaheadComponent = shallow(
      <TypeaheadVanilla {...defaultConfig} onChange={onChange} />
    );
    ShallowTypeaheadComponent.find({ type: 'search' }).simulate('change', {
      currentTarget: { value: 'all' },
    });
    expect(ShallowTypeaheadComponent.find({ type: 'search' }).props().value).toEqual('all');
  });

  test('should fire on change', () => {
    expect(TypeaheadComponent.props().suggestions).toEqual([]);
    TypeaheadComponent.find('input').simulate('change', {
      currentTarget: { value: 'alli' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should have an 1 ul', () => {
    expect(TypeaheadComponent.find('ul').length).toEqual(1);
  });
});
