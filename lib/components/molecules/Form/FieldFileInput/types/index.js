// @flow

export type FieldFileInputProps = {
  id: string,
  className?: string,
  register: Function,
  setValue: Function,
  name: string,
  label: Node,
  labelProps?: Object,
  fieldProps?: Object,
  localeText: {
    btnTextPrimary: string,
    btnTextSecondary: string,
    dragHelperText: string,
  },
  onChange?: Function,
  onBlur?: Function,
};
