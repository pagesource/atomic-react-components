import { action } from '@storybook/addon-actions';

const textInput = {
  name: 'username',
  id: 'username',
  type: 'text',
  label: 'User Name',
  onBlur: action('On Blur fired'),
};

const textInputElementLocator = {
  name: 'username',
  id: 'username',
  type: 'text',
  label: 'User Name',
  elementLocator: 'input-text-field-user-name',
};

const textInputDisabled = {
  name: 'username',
  id: 'username2',
  type: 'text',
  label: 'User Name',
  disabled: 'disabled',
};

const fileInput = {
  name: 'uploader',
  id: 'uploader',
  type: 'file',
  label: 'Select Files',
  onBlur: action('On Blur fired'),
};

export default textInput;
export { textInput, textInputElementLocator, textInputDisabled, fileInput };
