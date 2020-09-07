import { action } from '@storybook/addon-actions';

const selectDefault = {
  name: 'select',
  options: ['Opt 1', 'Opt 2'],
  onSelect: action('selected'),
};

const selectDisabled = {
  name: 'select',
  options: ['Opt 1', 'Opt 2'],
  disabled: true,
};

const selectElementLocator = {
  name: 'select',
  options: ['Opt 1', 'Opt 2'],
  elementLocator: 'my-custom-select',
};

export default selectDefault;
export { selectDefault, selectDisabled, selectElementLocator };
