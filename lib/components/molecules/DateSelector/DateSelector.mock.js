const dateSelectorDefaultProps = {
  className: 'example',
  defaultValue: new Date(),
  format: 'ddmmyy',
};

const mmddyyFormatProps = {
  className: 'example',
  format: 'mmddyy',
  startDate: new Date(),
};

const monthYearOnlyProps = {
  className: 'example',
  format: 'mmyy',
};

const startDateProps = {
  className: 'example',
  format: 'ddmmyy',
  startDate: new Date(955865024000),
};

const endDateProps = {
  className: 'example',
  format: 'ddmmyy',
  endDate: new Date(2555865024000),
};

const startAndEndDateProps = {
  className: 'example',
  format: 'ddmmyy',
  startDate: new Date(955865024000),
  endDate: new Date(2555865024000),
};

export {
  dateSelectorDefaultProps,
  mmddyyFormatProps,
  monthYearOnlyProps,
  startDateProps,
  endDateProps,
  startAndEndDateProps,
};
