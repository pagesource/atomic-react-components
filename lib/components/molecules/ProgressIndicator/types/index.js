// @flow
import type { Node } from 'react';

export type ProgressIndicatorProps = {
  children: Node,
  className: String,
  currentStep: Number,
  variation?: String,
};

export type StepProps = {
  children: Node,
  currentItemStatus: String,
};
