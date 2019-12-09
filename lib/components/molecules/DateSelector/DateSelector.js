// @flow
/**
 *
 * DateSelector
 *
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import classNames from 'classnames';
import styles from './DateSelector.style';
import type { Props } from './types';
import Select from '../../atoms/Select';

const monthOptions = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DateSelector = (props: Props): Node => {
  const { className, format, startDate, endDate } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newStartDate, setNewStartDate] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() - 100))
  );
  const [newEndDate, setNewEndDate] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() + 50))
  );

  const setDate = dateType => {
    if (dateType === 'start') {
      if (startDate) {
        setNewStartDate(new Date(startDate));
      } else {
        const d = new Date();
        setNewStartDate(new Date(d.setFullYear(d.getFullYear() - 100)));
      }
    } else if (dateType === 'end') {
      if (endDate) {
        setNewEndDate(new Date(endDate));
      } else {
        const d = new Date();
        setNewEndDate(new Date(d.setFullYear(d.getFullYear() + 50)));
      }
    }
  };

  useEffect(() => {
    // ... Use hooks
    setDate('start');
    setDate('end');
  }, []);

  useEffect(() => {
    setSelectedDate(newStartDate);
  }, [newStartDate, newEndDate]);

  const getDaysInMonth = () => {
    const noOfDays = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0).getDate();
    const days = [];
    let startDay = 1;
    let endDay = noOfDays;
    if (
      selectedDate.getMonth() === newStartDate.getMonth() &&
      selectedDate.getFullYear() === newStartDate.getFullYear()
    ) {
      startDay = newStartDate.getDate();
    }
    if (
      selectedDate.getMonth() === newEndDate.getMonth() &&
      selectedDate.getFullYear() === newEndDate.getFullYear()
    ) {
      endDay = newEndDate.getDate();
    }
    for (let i = startDay; i <= endDay; i += 1) {
      days.push(i);
    }
    return days;
  };

  const getMonthOptions = () => {
    let months = [...monthOptions];
    if (selectedDate.getFullYear() === newStartDate.getFullYear()) {
      const startMonth = newStartDate.getMonth();
      months = months.slice(startMonth, months.length);
    }
    if (selectedDate.getFullYear() === newEndDate.getFullYear()) {
      const endMonth = newEndDate.getMonth();
      months = months.slice(0, endMonth + 1);
    }
    return months;
  };

  const getYearOptions = () => {
    const years = [];
    for (let i = newStartDate.getFullYear(); i <= newEndDate.getFullYear(); i += 1) {
      years.push(i);
    }
    return years;
  };

  const DaySelector = (
    <label htmlFor="date">
      <Select
        onChange={e => {
          return setSelectedDate(
            new Date(selectedDate.getFullYear(), selectedDate.getMonth(), e.target.value)
          );
        }}
        id="date"
        name="day"
        className={classNames('date', className)}
        disabled={false}
        elementLocator="date-picker-date"
        selectedOption={selectedDate.getDate()}
        options={getDaysInMonth()}
      />
    </label>
  );

  const MonthSelector = (
    <label htmlFor="month">
      <Select
        onChange={e => {
          return setSelectedDate(
            new Date(
              selectedDate.getFullYear(),
              monthOptions.indexOf(e.target.value),
              selectedDate.getDate()
            )
          );
        }}
        id="month"
        name="month"
        className={classNames('month', className)}
        disabled={false}
        elementLocator="date-picker-month"
        selectedOption={monthOptions[selectedDate.getMonth()]}
        options={getMonthOptions()}
      />
    </label>
  );

  const YearSelector = (
    <label htmlFor="year">
      <Select
        onChange={e => {
          return setSelectedDate(
            new Date(e.target.value, selectedDate.getMonth(), selectedDate.getDate())
          );
        }}
        id="year"
        name="year"
        className={classNames('year', className)}
        disabled={false}
        elementLocator="date-picker-year"
        selectedOption={selectedDate.getFullYear()}
        options={getYearOptions()}
      />
    </label>
  );

  return (
    <div className={className}>
      {(format.toLowerCase() === 'ddmmyy' || format.toLowerCase() === 'ddmmyyyy') && [
        DaySelector,
        MonthSelector,
        YearSelector,
      ]}
      {(format.toLowerCase() === 'mmddyy' || format.toLowerCase() === 'mmddyyyy') && [
        MonthSelector,
        DaySelector,
        YearSelector,
      ]}
      {(format.toLowerCase() === 'mmyy' || format.toLowerCase() === 'mmyyyy') && [
        MonthSelector,
        YearSelector,
      ]}
    </div>
  );
};

DateSelector.defaultProps = {
  className: 'date-selector',
  format: 'ddmmyy',
};

export default styled(DateSelector)`
  ${styles};
`;

export { DateSelector as DateSelectorVanilla };
