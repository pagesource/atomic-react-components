import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../../../__mock__/themeMock';
import defaultConfig from '../Typeahead.mock';
import { TypeaheadVanilla } from '../index';

describe('<Typeahead />', () => {
  let TypeaheadComponent = '';
  let MountedTypeaheadComponent = '';
  const onChange = jest.fn();
  const getSelectedResultValue = jest.fn();

  beforeEach(() => {
    MountedTypeaheadComponent = mountWithTheme(
      <TypeaheadVanilla
        onChange={onChange}
        {...defaultConfig}
        getSelectedResultValue={getSelectedResultValue}
        renderCustomResultsView={item => <p>{item}</p>}
      />
    );

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

  test('should show list', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'all' },
      });
    expect(MountedTypeaheadComponent.find('ListItem').length).toBe(4);
  });

  test('should return single list item', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'Alligator' },
      });
    expect(MountedTypeaheadComponent.find('ListItem').length).toBe(1);
  });

  test('should select particular list item by click', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'all' },
      });
    MountedTypeaheadComponent.find('Button')
      .at(1)
      .simulate('click');

    expect(
      MountedTypeaheadComponent.find('Button')
        .at(1)
        .text()
    ).toEqual('Alligator');
  });
});
