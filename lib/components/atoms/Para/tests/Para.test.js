import React from 'react';
import { shallow, render } from 'enzyme';
import 'jest-styled-components';
import Para from '..';

const props = {
  children: 'Sample',
  className: '',
  elementLocator: 'my-paragraph',
};

describe('Para Component', () => {
  let paragraph;

  test('should render correctly and match snapshot', () => {
    paragraph = shallow(<Para {...props}>This is Para text</Para>);
    expect(paragraph).toMatchSnapshot();
  });
  test('should check the data attribute of para', () => {
    const para = render(<Para {...props} />);

    expect(para.attr('data-locator')).toEqual(`para-${props.elementLocator}`);
  });
});
