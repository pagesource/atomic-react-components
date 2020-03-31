import React from 'react';
import { mount } from 'enzyme';

import Skeleton from '../index';

describe('<Skeleton />', () => {
  let SkeletonComponent = '';
  beforeEach(() => {
    SkeletonComponent = mount(
      <Skeleton>
        <Skeleton.bar />
        <Skeleton.circle />
      </Skeleton>
    );
  });

  test('should render the <Skeleton> /', () => {
    expect(SkeletonComponent.exists()).toBe(true);
  });

  test('should render <div/>', () => {
    expect(SkeletonComponent.find('div')).toBeTruthy();
  });

  test('should render a skeleton line', () => {
    expect(SkeletonComponent.find('.bar')).toBeTruthy();
  });

  test('should render a skeleton circle', () => {
    expect(SkeletonComponent.find('.circle')).toBeTruthy();
  });

  test('should render correctly', () => {
    expect(SkeletonComponent).toMatchSnapshot();
  });
});
