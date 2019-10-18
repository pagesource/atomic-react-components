import React from 'react';
import { shallow } from 'enzyme';

import { ModalVanilla } from '../Modal';

describe('Modal Component', () => {
  let modal = '';
  beforeEach(() => {
    modal = shallow(
      <ModalVanilla>
        <h2> Hello World </h2>
      </ModalVanilla>
    );
  });

  test('should render Modal correctly', () => {
    expect(modal).toMatchSnapshot();
  });
});
