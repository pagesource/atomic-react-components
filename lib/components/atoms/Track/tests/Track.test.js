import React from 'react';
import { shallow } from 'enzyme';

import { TrackVanilla } from '../index';

describe('<Track />', () => {
  let TrackComponent = '';
  beforeEach(() => {
    TrackComponent = shallow(<TrackVanilla>Test</TrackVanilla>);
  });

  test('should render correctly', () => {
    expect(TrackComponent).toMatchSnapshot();
  });
});
