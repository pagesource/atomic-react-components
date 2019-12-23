// @flow
/**
 *
 * Tag
 *
 */
import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

import Button from '../Button';
import styles from './Tag.style';
import type { TagProps } from './types';

const Tag = ({
  tagName,
  className,
  children,
  variation,
  onRemove,
  removeBtnLabel,
}: TagProps): Node => {
  const [isVisible, setIsVisible] = React.useState(true);

  const removeTag = e => {
    setIsVisible(false);
    if (onRemove) {
      onRemove(e, tagName);
    }
  };

  return (
    <>
      {isVisible && (
        <span id={tagName} className={classnames(className)}>
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

Tag.defaultProps = {
  children: 'Tag Component',
  variation: 'default',
  inheritedStyles: '',
  removeBtnLabel: 'Remove Tag',
};

export default styled(Tag)`
  ${styles};
`;

export { Tag as TagVanilla };
