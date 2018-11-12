import React from 'react';
import { shallow, render } from 'enzyme';
import { FieldSelectVanilla } from '../FieldSelect';

describe('FieldInput Component', () => {
  let FieldInput = '';

  test('should render correctly', () => {
    FieldInput = shallow(<FieldSelectVanilla />);
    expect(FieldInput).toMatchSnapshot();
  });

  test('should render label correctly', () => {
    const props = {
      label: 'Select Fav Color',
      options: ['red', 'black', 'blue'],
    };
    FieldInput = render(<FieldSelectVanilla {...props} />);
    expect(FieldInput.find('label').text()).toEqual('Select Fav Color');
  });

  test('should render select tag', () => {
    const props = {
      options: ['red', 'black', 'blue'],
    };
    FieldInput = render(<FieldSelectVanilla {...props} />);
    expect(FieldInput.find('select')).toHaveLength(1);
  });
});
