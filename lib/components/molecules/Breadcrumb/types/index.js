// @flow
import type { Element, ElementConfig } from 'react';
import Anchor from '../../../atoms/Anchor';

export type Props = {
  linkList: Array<ElementConfig<typeof Anchor>>,
  className: string,
};

export type Nav = Element<'nav'>;
