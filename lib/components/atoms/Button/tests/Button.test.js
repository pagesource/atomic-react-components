import React from 'react';
import { shallow, render } from 'enzyme';
import { ButtonVanilla } from '../Button';

describe('Button Component', () => {
  let button = '';
  beforeEach(() => {
    button = shallow(<ButtonVanilla>Submit</ButtonVanilla>);
  });

  test('should render correctly', () => {
    expect(button).toMatchSnapshot();
  });

  test('should render disabled', () => {
    button = shallow(<ButtonVanilla disabled>Submit</ButtonVanilla>);
    expect(button.find({ disabled: true })).toHaveLength(1);
  });

  test('should render title element', () => {
    button = shallow(<ButtonVanilla title="tooltip">Submit</ButtonVanilla>);
    expect(button.find({ title: 'tooltip' })).toHaveLength(1);
  });

  test('should render aria attribute element', () => {
    const ariaLabel = 'Custom Aria Label';
    button = shallow(<ButtonVanilla ariaLabel={ariaLabel}>Button</ButtonVanilla>);
    expect(button.find({ 'aria-label': 'Custom Aria Label' })).toHaveLength(1);
  });

  test('should check the data attribute of button', () => {
    const sampleProps = { elementLocator: 'my-custom-button-locator', type: 'primary' };
    const buttonVanilla = render(<ButtonVanilla {...sampleProps} />);

    expect(buttonVanilla.attr('data-locator')).toEqual(sampleProps.elementLocator);
  });
});
