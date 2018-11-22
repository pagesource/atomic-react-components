import { action } from '@storybook/addon-actions';

const modalProps = {
  name: 'username',
  id: 'username',
  type: 'text',
  label: 'User Name',
  onBlur: action('On Blur fired'),
};

export default modalProps;
