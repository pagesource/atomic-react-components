import React from 'react';
import { shallow } from 'enzyme';

import { DateSelectorVanilla } from '../index';
import Select from '../../../atoms/Select';

describe('<DateSelector />', () => {
  let DateSelectorComponent = '';
  beforeEach(() => {
    DateSelectorComponent = shallow(<DateSelectorVanilla />);
  });

  test('should render correctly', () => {
    expect(DateSelectorComponent).toMatchSnapshot();
  });

  test('should render the 3 Select Components(date month and year)', () => {
    DateSelectorComponent.setProps({
      format: 'ddmmyy',
    });
    expect(DateSelectorComponent.find(Select)).toHaveLength(3);
  });

  test('should render the 3 Select Components(date month and year)', () => {
    DateSelectorComponent.setProps({
      format: 'ddmmyyyy',
    });
    expect(DateSelectorComponent.find(Select)).toHaveLength(3);
  });

  test('should render the 3 Select Components(month date and year)', () => {
    DateSelectorComponent.setProps({
      format: 'mmddyy',
    });
    expect(DateSelectorComponent.find(Select)).toHaveLength(3);
  });

  test('should render the 3 Select Components(month date and year)', () => {
    DateSelectorComponent.setProps({
      format: 'mmddyyyy',
    });
    expect(DateSelectorComponent.find(Select)).toHaveLength(3);
  });

  test('should render the 2 Select Components(month and year selectors)', () => {
    DateSelectorComponent.setProps({
      format: 'mmyy',
    });
    expect(DateSelectorComponent.find(Select)).toHaveLength(2);
  });

  test('should render the 2 Select Components(month and year selectors)', () => {
    DateSelectorComponent.setProps({
      format: 'mmyyyy',
    });
    expect(DateSelectorComponent.find(Select)).toHaveLength(2);
  });
});
