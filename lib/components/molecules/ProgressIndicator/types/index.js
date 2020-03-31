// @flow
import type { Node } from 'react';

export type ProgressIndicatorProps = {
  children: Node,
  className: string,
  currentStep: number,
  variation?: string,
};

export type StepProps = {
  children: Node,
  currentItemStatus: string,
};
