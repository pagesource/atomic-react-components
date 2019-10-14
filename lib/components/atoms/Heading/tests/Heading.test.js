import React from 'react';
import { shallow, render } from 'enzyme';
import 'jest-styled-components';
import Heading from '..';

const props = {
  children: 'Sample',
  className: '',
};

describe('Heading Component', () => {
  let heading;

  test('should render correctly and match snapshot', () => {
    heading = shallow(<Heading {...props} />);
    expect(heading).toMatchSnapshot();
  });
  test('should check the data attribute of heading', () => {
    const sampleProps = { elementLocator: 'my-custom-heading-locator' };
    heading = render(<Heading {...sampleProps} />);

    expect(heading.attr('data-locator')).toEqual(sampleProps.elementLocator);
  });
});
