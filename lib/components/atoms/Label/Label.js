// @flow
import React from 'react';
import type { Node } from 'react';

import { getLabelFromChildren } from '../../../core/utils/elementLocator';

type Props = {
  className?: string,
  elementLocator?: string,
  htmlFor: string,
  children: any,
};

const Label = ({ className, htmlFor, children, elementLocator, ...others }: Props): Node => (
  /* eslint-disable jsx-a11y/label-has-for */
  // FIXME: Remove the eslint comment above
  <label
    {...others}
    className={className}
    htmlFor={htmlFor}
    data-locator={elementLocator || `label-${htmlFor}-${getLabelFromChildren(children)}`}
  >
    {children}
  </label>
);

Label.defaultProps = {
  className: '',
  elementLocator: '',
};

export default Label;
