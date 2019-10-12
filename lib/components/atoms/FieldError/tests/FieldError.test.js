import React from 'react';
import { shallow, render } from 'enzyme';
import { FieldErrorVanilla } from '../FieldError';

describe('FieldError Component', () => {
  let fieldErrorComponent = '';
  beforeEach(() => {
    fieldErrorComponent = shallow(<FieldErrorVanilla>Some Error Occurred</FieldErrorVanilla>);
  });

  test('should render correctly', () => {
    expect(fieldErrorComponent).toMatchSnapshot();
  });

  test('should check the element locator of field error', () => {
    const sampleProps = { elementLocator: 'my-custom-field-error-locator' };
    const fieldError = render(<FieldErrorVanilla {...sampleProps} />);

    expect(fieldError.attr('data-locator')).toEqual(sampleProps.elementLocator);
  });

  test('should check the default slnid of field error', () => {
    const props = { dataSlnmId: 'slnid' };
    const customLocator = 'slnid-error';
    const fieldError = render(<FieldErrorVanilla {...props} />);

    expect(fieldError.attr('data-slnm-id')).toEqual(customLocator);
  });
});
