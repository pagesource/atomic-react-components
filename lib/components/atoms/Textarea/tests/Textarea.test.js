import React from 'react';
import { shallow, render } from 'enzyme';

import { TextareaVanilla } from '../index';

describe('<Textarea />', () => {
  let TextareaComponent = '';
  const sampleProps = {
    id: 'textarea-1',
    name: 'my-text-area',
    elementLocator: 'my-custom-textarea-selector',
  };
  beforeEach(() => {
    TextareaComponent = shallow(<TextareaVanilla {...sampleProps} />);
  });

  test('should render correctly', () => {
    expect(TextareaComponent).toMatchSnapshot();
  });

  test('should check the data attribute of textarea', () => {
    const inputVanilla = render(<TextareaVanilla {...sampleProps} />);

    expect(inputVanilla.attr('data-locator')).toEqual(sampleProps.elementLocator);
  });
});
