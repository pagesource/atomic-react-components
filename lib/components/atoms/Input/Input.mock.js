import { action } from '@storybook/addon-actions';

const textInput = {
  name: 'username',
  id: 'username',
  type: 'text',
  label: 'User Name',
  onBlur: action('On Blur fired'),
};

const textInputDisabled = {
  name: 'username',
  id: 'username2',
  type: 'text',
  label: 'User Name',
  disabled: 'disabled',
};

export default textInput;
export { textInput, textInputDisabled };
