import React from 'react';
import { shallow, render } from 'enzyme';
import { HeadingVanilla } from '..';

const props = {
  children: 'Sample',
  className: '',
};

describe('Heading Component', () => {
  let heading;

  test('should render correctly and match snapshot', () => {
    heading = shallow(<HeadingVanilla {...props} />);
    expect(heading).toMatchSnapshot();
  });
  test('should check the custom locator of heading', () => {
    const sampleProps = { elementLocator: 'my-custom-heading-locator' };
    heading = render(<HeadingVanilla {...sampleProps} />);

    expect(heading.attr('data-locator')).toEqual(sampleProps.elementLocator);
  });
  test('should check the default locator of heading', () => {
    const sampleProps = { HeadingType: 'h1' };
    const customLocator = 'heading-h1-my-heading';
    heading = render(<HeadingVanilla {...sampleProps}>my heading</HeadingVanilla>);

    expect(heading.attr('data-locator')).toEqual(customLocator);
  });
});
