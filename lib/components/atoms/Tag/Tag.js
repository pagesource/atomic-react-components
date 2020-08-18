/**
 *
 * Tag
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

import Button from '../Button';
import styles from './Tag.style';

const Tag = ({ tagName, className, children, variation, onRemove, removeBtnLabel }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const removeTag = (e) => {
    setIsVisible(false);
    if (onRemove) {
      onRemove(e, tagName);
    }
  };

  return (
    <>
      {isVisible && (
        <span id={tagName} className={classnames(className)} role="listitem">
          {children}
          {variation === 'removable' && (
            <Button
              variation="icon-only"
              onClick={removeTag}
              aria-label={removeBtnLabel}
              aria-controls={tagName}
            >
              &#10005;
            </Button>
          )}
        </span>
      )}
    </>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  tagName: PropTypes.string,
  className: PropTypes.string,
  variation: PropTypes.oneOf(['default', 'removable']),
  onRemove: PropTypes.func,
  removeBtnLabel: PropTypes.string,
};

Tag.defaultProps = {
  tagName: '',
  className: '',
  variation: 'default',
  removeBtnLabel: 'Remove Tag',
  onRemove: () => {},
};

const StyledTag = styled(Tag)`
  ${styles};
`;

export default StyledTag;

export { Tag as TagVanilla };
