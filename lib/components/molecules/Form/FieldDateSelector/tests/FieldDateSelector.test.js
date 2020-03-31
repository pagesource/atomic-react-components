import React from 'react';
import { shallow } from 'enzyme';

import { FieldDateSelectorVanilla } from '../index';

import Select from '../../FieldSelect';

describe('<FieldDateSelector />', () => {
  let FieldDateSelectorComponent = '';
  beforeEach(() => {
    FieldDateSelectorComponent = shallow(<FieldDateSelectorVanilla />);
  });

  test('should render correctly', () => {
    expect(FieldDateSelectorComponent).toMatchSnapshot();
  });

  test('should render the 3 Select Components(date month and year)', () => {
    FieldDateSelectorComponent.setProps({
      format: 'ddmmyy',
    });
    expect(FieldDateSelectorComponent.find(Select)).toHaveLength(3);
  });

  test('should render the 3 Select Components(date month and year)', () => {
    FieldDateSelectorComponent.setProps({
      format: 'ddmmyyyy',
    });
    expect(FieldDateSelectorComponent.find(Select)).toHaveLength(3);
  });

  test('should render the 3 Select Components(month date and year)', () => {
    FieldDateSelectorComponent.setProps({
      format: 'mmddyy',
    });
    expect(FieldDateSelectorComponent.find(Select)).toHaveLength(3);
  });

  test('should render the 3 Select Components(month date and year)', () => {
    FieldDateSelectorComponent.setProps({
      format: 'mmddyyyy',
    });
    expect(FieldDateSelectorComponent.find(Select)).toHaveLength(3);
  });

  test('should render the 2 Select Components(month and year selectors)', () => {
    FieldDateSelectorComponent.setProps({
      format: 'mmyy',
    });
    expect(FieldDateSelectorComponent.find(Select)).toHaveLength(2);
  });

  test('should render the 2 Select Components(month and year selectors)', () => {
    FieldDateSelectorComponent.setProps({
      format: 'mmyyyy',
    });
    expect(FieldDateSelectorComponent.find(Select)).toHaveLength(2);
  });
});
