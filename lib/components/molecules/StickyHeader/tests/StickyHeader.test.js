import React from 'react';
import { shallow } from 'enzyme';
import { StickyHeaderVanilla } from '../StickyHeader';

describe('Test render <StickyHeader /> Component', () => {
  let Component;

  beforeEach(() => {
    Component = shallow(<StickyHeaderVanilla />);
  });

  it('should render Header element', () => {
    expect(Component.find('header').length).toEqual(1);
  });

  it('should test children prop', () => {
    Component = shallow(
      <StickyHeaderVanilla>
        <h1>Header</h1>
      </StickyHeaderVanilla>
    );

    expect(Component.props().children).toEqual(<h1>Header</h1>);
  });
});
