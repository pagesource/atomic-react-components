import { action } from '@storybook/addon-actions';

const userFormProps = {
  initialValues: {
    email: '',
    username: '',
    typeOfUser: 'Admin',
    comment: '',
    ageGroup: '',
    termsAndConditions: false,
  },
  debug: false,
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
    ageGroup: {
      required: 'Please select an Age group',
    },
    termsAndConditions: {
      type: 'bool',
      test: [
        'termsAndConditions',
        'please accept terms and conditions!!!',
        (value) => value === true,
      ],
    },
  },
  onSubmit: action('On Submit Fired'),
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
  validationInstructions: 'Enter valid username',
};

const fileMultipleInputProps = {
  name: 'fileuploadMulti',
  localeText: {
    btnTextPrimary: 'Choose Files',
    btnTextSecondary: 'Upload...',
    dragHelperText: 'Drop Files Here...',
  },
  multiple: true,
};
const fileSingleInputProps = {
  name: 'fileupload',
  localeText: {
    btnTextPrimary: 'Choose File',
    btnTextSecondary: 'Upload...',
    dragHelperText: 'Drop File Here...',
  },
};
const fileDDInputProps = {
  name: 'fileuploadDD',
  localeText: {
    btnTextPrimary: 'Choose File',
    btnTextSecondary: 'Upload...',
    dragHelperText: 'Drop File Here...',
  },
};

const userFormEmailProps = {
  type: 'email',
  name: 'email',
  label: 'Email',
  validationInstructions: 'Enter valid email',
};

const userFormCommentProps = {
  name: 'comment',
  label: 'Comment',
  placeholder: 'Enter your comment here...',
};

const userFormAgeGroupProps = {
  name: 'ageGroup',
  radioGroupArray: [
    {
      value: '30-',
      label: '< 30',
    },
    {
      value: '30-60',
      label: '30-60',
    },
    {
      value: '60+',
      label: '> 60',
    },
  ],
};

const userFormTnCProps = {
  name: 'termsAndConditions',
  label: 'I accept terms & conditions',
};

const userFormToggleProps = {
  name: 'test_1',
  id: 'checkbox_test_1',
  value: 'off',
  label: 'Toggle',
  indicatorOn: 'On',
  indicatorOff: 'Off',
  disabled: false,
  intialToggleState: false,
  displayIndicators: true,
};

export {
  userFormProps,
  fileMultipleInputProps,
  fileSingleInputProps,
  userFormSelectProps,
  userFormNameInputProps,
  userFormEmailProps,
  userFormCommentProps,
  userFormAgeGroupProps,
  userFormTnCProps,
  userFormToggleProps,
  fileDDInputProps,
};
