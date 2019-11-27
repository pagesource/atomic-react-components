import React from 'react';
import { render } from 'enzyme';
import { ButtonVanilla } from '../Button';
import { shallowWithTheme } from '../../../../../__mock__/themeMock';

describe('Button Component', () => {
  let button = '';
  beforeEach(() => {
    button = shallowWithTheme(<ButtonVanilla>Submit</ButtonVanilla>);
  });

  test('should render correctly', () => {
    expect(button).toMatchSnapshot();
  });

  test('should render disabled', () => {
    button = shallowWithTheme(<ButtonVanilla disabled>Submit</ButtonVanilla>);
    expect(button.find({ disabled: true })).toHaveLength(1);
  });

  test('should render title element', () => {
    button = shallowWithTheme(<ButtonVanilla title="tooltip">Submit</ButtonVanilla>);
    expect(button.find({ title: 'tooltip' })).toHaveLength(1);
  });

  test('should render aria attribute element', () => {
    const ariaLabel = 'Custom Aria Label';
    button = shallowWithTheme(<ButtonVanilla ariaLabel={ariaLabel}>Button</ButtonVanilla>);
    expect(button.find({ 'aria-label': 'Custom Aria Label' })).toHaveLength(1);
  });

  test('should check the data attribute of button', () => {
    const sampleProps = { elementLocator: 'my-custom-button-locator', type: 'primary' };
    const buttonVanilla = render(<ButtonVanilla {...sampleProps} />);

    expect(buttonVanilla.attr('data-locator')).toEqual(sampleProps.elementLocator);
  });
});
