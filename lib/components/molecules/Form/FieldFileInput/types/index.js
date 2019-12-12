// @flow

export type FieldFileInputProps = {
  id: string,
  className?: string,
  type?: string,
  name: string,
  label: Node,
  labelProps?: Object,
  fieldProps?: Object,
  localeText?: {
    btnTextPrimary?: string,
    btnTextSecondary?: string,
    dragHelperText: string,
  },
  value?: string | number,
  placeholder?: string,
  onChange?: Function,
  onBlur?: Function,
};
