import { action } from '@storybook/addon-actions';

const fileInput = {
  name: 'uploader',
  id: 'uploader',
  type: 'file',
  label: 'Select Files',
  onBlur: action('On Blur fired'),
};

export default fileInput;
