import React from 'react';
import { shallow, render } from 'enzyme';
import 'jest-styled-components';
import Anchor, { AnchorVanilla } from '../Anchor';

describe('Anchor Component', () => {
  let anchor;

  test('should render correctly and match snapshot', () => {
    anchor = shallow(<Anchor to="/sample">Sample</Anchor>);
    expect(anchor).toMatchSnapshot();
  });

  test('Should handle on typeahead focuson Events', () => {
    const props = { noLink: true, to: '/sample', handleLinkClick: jest.fn() };
    const event = { preventDefault: jest.fn() };
    anchor = shallow(<AnchorVanilla {...props}>Sample</AnchorVanilla>);
    anchor.find('a').simulate('click', event);
    expect(props.handleLinkClick).toHaveBeenCalled();
  });

  test('should check the data attribute of anchor', () => {
    const sampleProps = { elementLocator: 'my-custom-anchor-locator' };
    const anchorVanilla = render(<AnchorVanilla {...sampleProps} />);

    expect(anchorVanilla.attr('data-locator')).toEqual(sampleProps.elementLocator);
  });
});
