// @flow
import type { Node } from 'react';

type Content =
  | { name: string }
  | { calories: number }
  | { fat: number }
  | { carbs: number }
  | { protein: number }
  | { id: string };

export type Props = {
  className?: string,
  data: Array<Content>,
  children: Node,
};
