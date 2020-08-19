import React from 'react';
import PropTypes from 'prop-types';

import { getLabelFromChildren } from '../../../core/utils/elementLocator';

const Label = ({ className, htmlFor, children, elementLocator, ...others }) => (
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

Label.propTypes = {
  className: PropTypes.string,
  elementLocator: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

Label.defaultProps = {
  className: '',
  elementLocator: '',
};

export default Label;
