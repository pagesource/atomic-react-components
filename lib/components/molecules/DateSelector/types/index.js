// @flow

type Format = 'ddmmyy' | 'ddmmyyyy' | 'mmddyy' | 'mmddyyyy' | 'mmyy' | 'mmyyyy';

export type Props = {
  className?: string,
  format?: Format,
  startDate?: number,
  endDate?: number,
  months?: any,
  id?: string,
  locale?: string,
};
