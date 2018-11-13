const defaultTextareaForm = {
  initialValues: {
    comment: '',
  },
  action: '/',
  validationSchema: {
    comment: {
      max: [100, 'Max limit reached'],
      required: 'Required field',
    },
  },
  handleSubmit: () => {},
};

export default defaultTextareaForm;
