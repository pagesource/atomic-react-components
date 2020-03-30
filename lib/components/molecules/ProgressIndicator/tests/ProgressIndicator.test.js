import React from 'react';
import { shallow, mount } from 'enzyme';
import { ProgressIndicatorVanilla } from '../index';
import defaultConfig from '../ProgressIndicator.mock';

describe('<ProgressIndicator />', () => {
  let ProgressIndicatorComponent = '';
  beforeEach(() => {
    ProgressIndicatorComponent = shallow(<ProgressIndicatorVanilla>Test</ProgressIndicatorVanilla>);
  });

  test('should render correctly', () => {
    expect(ProgressIndicatorComponent).toMatchSnapshot();
  });
});

describe('<ProgressIndicator/> Component', () => {
  const ProgressIndicatorComponent = mount(
    <ProgressIndicatorVanilla {...defaultConfig}>
      <ProgressIndicatorVanilla.Step>Label1</ProgressIndicatorVanilla.Step>
      <ProgressIndicatorVanilla.Step>Label2</ProgressIndicatorVanilla.Step>
      <ProgressIndicatorVanilla.Step>Label3</ProgressIndicatorVanilla.Step>
    </ProgressIndicatorVanilla>
  );

  describe('should render', () => {
    test('<ProgressIndicator/> Component correctly', () => {
      expect(ProgressIndicatorComponent).toBeTruthy();
    });
    test('all necessary elements correctly', () => {
      expect(ProgressIndicatorComponent.find('progress').length).not.toEqual(0);
      expect(ProgressIndicatorComponent.find('progress').length).toEqual(1);
    });
  });

  describe.skip('if Variation is equal to `Bar`, <ProgressIndicator/> Component should', () => {
    test('render <li/> children', () => {
      expect(ProgressIndicatorComponent.find('li').length).toEqual(3);
      expect(ProgressIndicatorComponent.find('li').length).not.toEqual(0);
    });
    test('render Progress Label Value', () => {
      expect(
        ProgressIndicatorComponent.find('.progress-indicator-container').exists('p.progress-label')
      ).toBe(true);
      expect(
        ProgressIndicatorComponent.find('.progress-indicator-container').exists('p.progress-label')
      ).not.toBe(false);
    });
    test('calculate inactive children or Steps', () => {
      expect(ProgressIndicatorComponent.find('li.inactive').length).not.toEqual(0);
      expect(ProgressIndicatorComponent.find('li.inactive').length).toEqual(1);
    });
    test('calculate completed children or Steps', () => {
      expect(ProgressIndicatorComponent.find('li.completed').length).toEqual(1);
    });
    test('calculate active children or Steps', () => {
      expect(ProgressIndicatorComponent.find('li.active').length).toEqual(1);
    });
  });

  describe('if Variation is equal to `Step`, <ProgressIndicator/> Component should', () => {
    beforeEach(() => {
      ProgressIndicatorComponent.setProps({ variation: 'step' });
    });
    test('render <li/> children', () => {
      expect(ProgressIndicatorComponent.find('li').length).not.toEqual(0);
      expect(ProgressIndicatorComponent.find('li').length).toEqual(3);
    });
    test('not render Progress Label Value', () => {
      expect(
        ProgressIndicatorComponent.find('.progress-indicator-container').exists('p.progress-label')
      ).toBe(false);
      expect(
        ProgressIndicatorComponent.find('.progress-indicator-container').exists('p.progress-label')
      ).not.toBe(true);
    });
  });
});
