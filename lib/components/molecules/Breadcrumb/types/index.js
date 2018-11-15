// @flow
import type { ElementProps, Element } from 'react';
import Anchor from '../../../atoms/Anchor';

export type Props = {
  linkList: Array<ElementProps<typeof Anchor>>,
  className: string,
};

export type Nav = Element<'nav'>;
