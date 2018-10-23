import { action } from '@storybook/addon-actions';

const userFormProps = {
  initialValues: {
    email: '',
    username: '',
    typeOfUser: '',
  },
  debug: true,
  action: '/',
  validationSchema: {
    username: {
      max: [15, 'Max limit reached'],
      required: 'User name Required',
    },
    email: {
      max: [30, 'Max reached'],
      email: 'Invalid email format',
      required: 'Required',
    },
  },
  handleSubmit: action('On Submit Fired'),
};

const userFormSelectProps = {
  options: ['Admin', 'Read Only'],
  name: 'typeOfUser',
  label: 'Type of user',
};

const userFormNameInputProps = {
  name: 'username',
  type: 'text',
  label: 'User Name',
};

const userFormEmailProps = {
  type: 'email',
  name: 'email',
  label: 'Email',
};

export { userFormProps, userFormSelectProps, userFormNameInputProps, userFormEmailProps };
