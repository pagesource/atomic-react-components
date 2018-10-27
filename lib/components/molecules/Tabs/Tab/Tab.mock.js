import { action } from '@storybook/addon-actions';

const defaultActiveTab = {
  id: 't1',
  index: 0,
  isSelected: true,
  onClick: action('clicked'),
  onKeyDown: action('keyPress'),
};

const defaultNonActiveTab = {
  id: 't2',
  index: 1,
  isSelected: false,
  onClick: action('clicked'),
  onKeyDown: action('keyPress'),
};

export { defaultActiveTab, defaultNonActiveTab };
