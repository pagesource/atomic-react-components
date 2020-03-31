import React from 'react';
import { shallow } from 'enzyme';
import { ToastVanilla } from '../index';
import defaultToast from '../Toast.mock';
import Icon from '../../../atoms/Icon';

describe('<Toast />', () => {
  let ToastComponent = '';
  beforeEach(() => {
    ToastComponent = shallow(<ToastVanilla>Test</ToastVanilla>);
  });

  test('<Toast />should render correctly', () => {
    expect(ToastComponent).toMatchSnapshot();
  });
});

describe('<Toast /> Component', () => {
  const ToastComponentInvisible = shallow(
    <ToastVanilla {...defaultToast} isVisible={false}>
      Test
    </ToastVanilla>
  );
  const ToastComponentVisible = shallow(
    <ToastVanilla {...defaultToast} autoDismissTimeout={0}>
      <Icon id="close" />
      Wow so easy!
    </ToastVanilla>
  );
  const ToastComponentDismissObj = shallow(
    <ToastVanilla {...defaultToast} autoDismissTimeout={3000}>
      Test
    </ToastVanilla>
  );
  test('is rendering root div,if isVisible prop is true ', () => {
    expect(ToastComponentVisible.find('div.toast').length).toEqual(1);
  });

  test('not rendering root div,if isVisible prop is false', () => {
    expect(ToastComponentInvisible.find('div.toast').length).toEqual(0);
  });

  test.skip('is rendering all necessary elements rendered if isVisible prop is true', () => {
    expect(ToastComponentVisible.exists('Button')).toBe(true);
    expect(ToastComponentVisible.exists('Icon')).toBe(true);
    expect(ToastComponentVisible.exists('div.toast-text')).toBe(true);
    expect(ToastComponentVisible.find('Button').length).toEqual(1);
    expect(ToastComponentVisible.find('div.toast-text').length).toEqual(1);
  });

  test('is rendering ProgressBar if autoDismissTimeout is set as 0', () => {
    expect(ToastComponentVisible.exists('span')).toBe(false);
    expect(ToastComponentVisible.find('span.toast-loader').length).toEqual(0);
  });

  test('is rendering ProgressBar if autoDismissTimeout is set as 3000', () => {
    expect(ToastComponentDismissObj.exists('span')).toBe(true);
    expect(ToastComponentDismissObj.find('span.toast-loader').length).toEqual(1);
  });

  test('is rendering children ', () => {
    expect(ToastComponentVisible.find('div.toast-text').children().length).toEqual(2);
  });
});

describe('<Toast /> Component is checking effects on', () => {
  const setState = jest.fn();
  jest.spyOn(React, 'useState').mockImplementation((init) => [init, setState]);
  const ToastComponentVisible = shallow(<ToastVanilla {...defaultToast}>Test</ToastVanilla>);
  test('onClick event, should dismiss the toast when clicking  on click of X button click', () => {
    ToastComponentVisible.find('.toast-close').simulate('click');
    expect(setState).toHaveBeenCalledWith(false);
  });
});

describe('<Toast /> component useeffect hook for autodismiss', () => {
  const setState = jest.fn();
  jest.spyOn(React, 'useState').mockImplementation((init) => [init, setState]);
  jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

  shallow(<ToastVanilla {...defaultToast}>Test</ToastVanilla>);

  test('autodismiss after timeout', (done) => {
    if (defaultToast.autoDismissTimeout > 0) {
      setTimeout(() => {
        expect(setState).toHaveBeenCalledWith(false);
        done();
      }, defaultToast.autoDismissTimeout);
    } else {
      expect(setState).toHaveBeenCalledTimes(0);
      done();
    }
  });
});
