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
import type { Props } from './types';

const Tag = ({ className, children, variation, onRemove }: Props): Node => {
  const [showTag, setShowTag] = React.useState(true);

  const removeTag = e => {
    setShowTag(false);
    if (onRemove) {
      onRemove(e);
    }
  };

  return (
    <>
      {showTag && (
        <span className={classnames(className)}>
          <span className="text-content">{children}</span>
          {variation === 'removable' && (
            <Button icon className="remove-tag" onClick={removeTag} ariaLabel="Remove Tag">
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
};

export default styled(Tag)`
  ${styles};
`;

export { Tag as TagVanilla };
