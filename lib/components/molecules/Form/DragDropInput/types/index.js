// @flow

export type DragDropInputProps = {
  id: string,
  className?: string,
  type?: string,
  name: string,
  label: Node,
  labelProps?: Object,
  fieldProps?: Object,
  value?: string | number,
  placeholder?: string,
  localeText?: {
    btnTextPrimary: string,
    btnTextSecondary: string,
    dragHelperText?: string,
  },
  onChange?: Function,
  onBlur?: Function,
};
