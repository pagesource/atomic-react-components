// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  className: string,
  htmlFor: string,
  name: string,
  children: any,
};

const Label = ({
  className,
  htmlFor,
  title,
  name,
  children,
  ...others
}: Props): Node => (
  /* eslint-disable jsx-a11y/label-has-for */
  // FIXME: Remove the eslint comment above
  <label
    className={className}
    name={name}
    htmlFor={htmlFor}
    {...others}
  >
    {children}
  </label>
);

export default Label;
