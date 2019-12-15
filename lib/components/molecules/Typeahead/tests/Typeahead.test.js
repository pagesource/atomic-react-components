import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../../../__mock__/themeMock';
import defaultConfig from '../Typeahead.mock';
import { TypeaheadVanilla } from '../index';

describe('<Typeahead />', () => {
  let TypeaheadComponent = '';
  const onChange = jest.fn();

  beforeEach(() => {
    TypeaheadComponent = shallow(
      <TypeaheadVanilla
        {...defaultConfig}
        onChange={onChange}
        renderCustomResultsView={item => <p>{item}</p>}
      />
    );
  });

  test('should render correctly', () => {
    expect(TypeaheadComponent).toMatchSnapshot();
  });

  test('should render .typeahead-component correctly', () => {
    expect(TypeaheadComponent.find('#typeahead-component').length).toEqual(1);
  });

  test('should render label correctly', () => {
    expect(TypeaheadComponent.find('Label').length).toEqual(1);
  });

  test('should render input correctly', () => {
    expect(TypeaheadComponent.find('Input').length).toEqual(1);
  });

  test('should render search type input correctly', () => {
    expect(TypeaheadComponent.exists({ type: 'search' })).toBe(true);
  });

  test('should not render List by default', () => {
    expect(TypeaheadComponent.find('List').length).toEqual(0);
  });

  test('should render onchange event', () => {
    const MountedTypeaheadComponent = mountWithTheme(
      <TypeaheadVanilla
        onChange={onChange}
        {...defaultConfig}
        renderCustomResultsView={item => <p>{item}</p>}
      />
    );
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'all' },
      });
    expect(MountedTypeaheadComponent.props().value).toEqual('all');
  });

  test('should render input only 1s', () => {
    expect(TypeaheadComponent.find('Input').length).toBe(1);
  });

  test('should render label only 1s', () => {
    expect(TypeaheadComponent.find('Label').length).toBe(1);
  });

  test('should not render list item', () => {
    expect(TypeaheadComponent.find('ListItem').length).toBe(0);
  });

  /* test('should update state', () => {
    const setState = jest.fn();
    const getSelectedResultValue = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(init => [init, setState]);
    const MountedTypeaheadComponent = mountWithTheme(
      <TypeaheadVanilla
        onChange={onChange}
        {...defaultConfig}
        getSelectedResultValue={getSelectedResultValue}
        renderCustomResultsView={item => <p>{item}</p>}
      />
    );
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('keydown', { keyCode: 13 });
    expect(setState).toHaveBeenCalledWith(1);
  }); */
});
