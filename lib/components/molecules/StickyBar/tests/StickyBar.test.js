import React from 'react';
import { shallowWithTheme } from '../../../../../__mock__/themeMock';

import { StickyBarVanilla } from '../index';
import List from '../../List';

describe('<StickyBar />', () => {
  let StickyBarComponent = '';
  beforeEach(() => {
    StickyBarComponent = shallowWithTheme(
      <StickyBarVanilla>
        <li>This is list item</li>
        <li>This is list item</li>
      </StickyBarVanilla>
    );
  });

  it('should render the List Component', () => {
    expect(StickyBarComponent.find(List)).toHaveLength(1);
  });

  it('should render correctly', () => {
    expect(StickyBarComponent).toMatchSnapshot();
  });
});
