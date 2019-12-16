// @flow
import type { Node } from 'react';

type Format = 'ddmmyy' | 'ddmmyyyy' | 'mmddyy' | 'mmddyyyy' | 'mmyy' | 'mmyyyy';

export type Props = {
  children: Node,
  className?: string,
  format?: Format,
  startDate?: number,
  endDate?: number,
  months?: any,
  id?: string,
  locale?: string,
};
