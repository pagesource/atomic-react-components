import { shallowWithTheme } from '../../../../../__mock__/themeMock';

import defaultConfig from '../Typeahead.mock';
import ListItem from '../ListItem';
import { TypeaheadVanilla } from '../index';

describe('<Typeahead />', () => {
  let TypeaheadComponent = '';
  const onChange = jest.fn();

  beforeEach(() => {
    TypeaheadComponent = shallowWithTheme(
      <TypeaheadVanilla
        {...defaultConfig}
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

  test('should fire on change', () => {
    //const expectedSuggestions = ['Alligator', 'Alligation'];
    TypeaheadComponent.find('Input').simulate('change', {
      currentTarget: { value: 'alli' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    //expect(TypeaheadComponent.props().suggestions).toEqual(expectedSuggestions);
  });

  test('should render li', () => {
    TypeaheadComponent.find('Input').simulate('change', {
      currentTarget: { value: 'alli' },
    });
    expect(TypeaheadComponent.find('li').length).toEqual(13);
  });
});
