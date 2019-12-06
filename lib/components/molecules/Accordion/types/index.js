// @flow
import type { Node } from 'react';

type accordionContent = {
  accordionHead: Node | string,
  accordionContent: Node,
  accordionClassName?: string,
};

export type Props = {
  children: Node,
};
