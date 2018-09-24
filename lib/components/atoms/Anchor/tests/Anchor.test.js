import React from 'react';
import Router from 'next/router';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Anchor from '../index';
import { AnchorVanilla } from '../Anchor';

describe('Anchor Component', () => {
  let anchor;

  test('should render correctly and match snapshot', () => {
    anchor = shallow(<Anchor to="/sample">Sample</Anchor>);
    expect(anchor).toMatchSnapshot();
  });

  test('should render with styles correctly and match snapshot', () => {
    anchor = renderer.create(<Anchor to="/sample">Sample</Anchor>).toJSON();
    expect(anchor).toMatchSnapshot();
  });

  test('Should handle on typeahead focuson Events', () => {
    const mockedRouter = { push: () => {} };
    Router.router = mockedRouter;
    const props = { noLink: true, to: '/sample', handleLinkClick: jest.fn() };
    const event = { preventDefault: jest.fn() };
    anchor = shallow(<AnchorVanilla {...props}>Sample</AnchorVanilla>);
    anchor.find('a').simulate('click', event);
    expect(props.handleLinkClick).toHaveBeenCalled();
  });
});
