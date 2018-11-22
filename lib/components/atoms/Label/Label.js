// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  className?: string,
  htmlFor: string,
  children: any,
};

const Label = ({ className, htmlFor, children, ...others }: Props): Node => (
  /* eslint-disable jsx-a11y/label-has-for */
  // FIXME: Remove the eslint comment above
  <label className={className} htmlFor={htmlFor} {...others}>
    {children}
  </label>
);

Label.defaultProps = {
  className: '',
};

export default Label;
