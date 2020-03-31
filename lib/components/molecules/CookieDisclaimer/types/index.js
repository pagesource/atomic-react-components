// @flow

import type { Node } from 'react';

export type cookieDisclaimerProps = {
  children: Node,
  className?: string,
  acceptBtnText: string,
  rejectBtnText: string,
  cookieDetails?: Object,
  onClick: Function,
};
