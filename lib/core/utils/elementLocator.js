// @flow
import { Children } from 'react';

export const getLabelFromChildren = (children: any) => {
  let label = '';

  Children.toArray(children).some((child, childIndex) => {
    let islabelFormed = false;
    // for Array of children
    if (typeof child === 'string') {
      child.split(' ').some((chunk, chunkIndex) => {
        label += `${childIndex === 0 && chunkIndex === 0 ? '' : '-'}${chunk}`;
        if (chunkIndex === 1) islabelFormed = true;
        return islabelFormed; // for restricting key only for two word
      });
    }
    return islabelFormed || childIndex === 1;
  });
  return label.toLowerCase();
};

export default getLabelFromChildren;
