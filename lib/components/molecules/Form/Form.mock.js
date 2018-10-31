import { action } from '@storybook/addon-actions';

const userFormProps = {
  initialValues: {
    email: '',
    username: '',
    typeOfUser: '',
    comment: '',
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
    comment: {
      max: [100, 'Comment should not be more than 100 characters'],
      required: 'Please enter a comment',
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

const userFormCommentProps = {
  name: 'comment',
  label: 'Comment',
  placeholder: 'Enter your comment here...',
};

export {
  userFormProps,
  userFormSelectProps,
  userFormNameInputProps,
  userFormEmailProps,
  userFormCommentProps,
};
