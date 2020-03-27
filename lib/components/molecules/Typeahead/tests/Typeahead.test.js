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
        renderCustomResultsView={(item) => <p>{item}</p>}
      />
    );

    TypeaheadComponent = shallow(
      <TypeaheadVanilla
        {...defaultConfig}
        onChange={onChange}
        renderCustomResultsView={(item) => <p>{item}</p>}
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

  test.skip('should render input correctly', () => {
    expect(TypeaheadComponent.find('Input').length).toEqual(1);
  });

  test('should render search type input correctly', () => {
    expect(TypeaheadComponent.exists({ type: 'search' })).toBe(true);
  });

  test('should not render List by default', () => {
    expect(TypeaheadComponent.find('List').length).toEqual(0);
  });

  test.skip('should render onchange event', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'all' },
      });
    expect(MountedTypeaheadComponent.props().value).toEqual('all');
  });

  test.skip('should render input only 1s', () => {
    expect(TypeaheadComponent.find('Input').length).toBe(1);
  });

  test('should render label only 1s', () => {
    expect(TypeaheadComponent.find('Label').length).toBe(1);
  });

  test('should not render list item', () => {
    expect(TypeaheadComponent.find('ListItem').length).toBe(0);
  });

  test.skip('should show list', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'all' },
      });
    expect(MountedTypeaheadComponent.find('ListItem').length).toBe(4);
  });

  test.skip('should return single list item', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'Alligator' },
      });
    expect(MountedTypeaheadComponent.find('ListItem').length).toBe(1);
  });

  test.skip('should select particular list item by click', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'all' },
      });
    MountedTypeaheadComponent.find('Button').at(1).simulate('click');

    expect(MountedTypeaheadComponent.find('Button').at(1).text()).toEqual('Alligator');
  });

  test('should render span with id `initInstr`', () => {
    expect(TypeaheadComponent.find('#initInstr').length).toBe(1);
  });

  test('should render the input with `aria-autocomplete`', () => {
    expect(TypeaheadComponent.exists({ 'aria-autocomplete': 'list' })).toBe(true);
  });

  test('should render the input with `aria-activedescendant`', () => {
    expect(TypeaheadComponent.exists({ 'aria-activedescendant': '' })).toBe(true);
  });

  test('should render the input with `aria-describedby`', () => {
    expect(TypeaheadComponent.exists({ 'aria-describedby': 'initInstr' })).toBe(true);
  });

  test.skip('should render the list items with `role="option"`', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'all' },
      });
    expect(MountedTypeaheadComponent.find('[role="option"]').length).toBe(4);
  });

  test.skip('should render the list items with `aria-selected`', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'all' },
      });
    expect(MountedTypeaheadComponent.find('[aria-selected=false]').length).toBe(4);
  });

  test.skip('should render the list items with `id="selectedOption"`', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'all' },
      });
    MountedTypeaheadComponent.find('Input').first().simulate('keydown', { keyCode: 40 });
    expect(MountedTypeaheadComponent.find('[id="selectedOption"]').length).toBe(1);
  });

  test.skip('should render the list items with `id="selectedOption"`', () => {
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('change', {
        target: { value: 'all' },
      });
    MountedTypeaheadComponent.find('Input')
      .first()
      .simulate('keydown', { keyCode: 40 })
      .simulate('keydown', { keyCode: 40 });
    expect(MountedTypeaheadComponent.find('[id="selectedOption"]').text()).toBe('Alligation');
  });
});
