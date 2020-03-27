// @flow
/**
 *
 * Tag
 *
 */
import React from 'react';
import type { Node, ComponentType } from 'react';
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

Tag.defaultProps = {
  children: 'Tag Component',
  inheritedStyles: '',
  removeBtnLabel: 'Remove Tag',
};

const StyledTag: ComponentType<TagProps> = styled(Tag)`
  ${styles};
`;

export default StyledTag;

export { Tag as TagVanilla };
