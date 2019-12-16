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
import Label from '../../atoms/Label';

const DateSelector = ({ id, className, format, startDate, endDate, locale }: Props): Node => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [months, setMonths] = useState([]);

  const getMonths = () => {
    const date = new Date();
    const monthsOptions = [];
    for (let i = 0; i < 12; i += 1) {
      date.setMonth(i);
      monthsOptions.push(date.toLocaleString(locale, { month: 'long' }));
    }
    return monthsOptions;
  };

  useEffect(() => {
    setMonths(getMonths());
  }, []);

  useEffect(() => {
    setSelectedDate(startDate);
  }, [startDate, endDate]);

  const getDaysInMonth = () => {
    const days = [];
    let startDay = 1;
    let endDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0).getDate();
    if (
      selectedDate.getMonth() === startDate.getMonth() &&
      selectedDate.getFullYear() === startDate.getFullYear()
    ) {
      startDay = startDate.getDate();
    }
    if (
      selectedDate.getMonth() === endDate.getMonth() &&
      selectedDate.getFullYear() === endDate.getFullYear()
    ) {
      endDay = endDate.getDate();
    }
    for (let i = startDay; i <= endDay; i += 1) {
      days.push(i);
    }
    return days;
  };

  const getMonthOptions = () => {
    let monthOptions = [...months];
    if (selectedDate.getFullYear() === startDate.getFullYear()) {
      const startMonth = startDate.getMonth();
      monthOptions = monthOptions.slice(startMonth, months.length);
    }
    if (selectedDate.getFullYear() === endDate.getFullYear()) {
      const endMonth = endDate.getMonth();
      monthOptions = monthOptions.slice(0, endMonth + 1);
    }
    return monthOptions;
  };

  const getYearOptions = () => {
    const years = [];
    for (let i = startDate.getFullYear(); i <= endDate.getFullYear(); i += 1) {
      years.push(i);
    }
    return years;
  };

  const DaySelector = (
    <>
      <Label htmlFor={`${id}-day`} />
      <Select
        onChange={e => {
          return setSelectedDate(
            new Date(selectedDate.getFullYear(), selectedDate.getMonth(), e.target.value)
          );
        }}
        id={`${id}-day`}
        name="day"
        className={classNames('date', className)}
        selectedOption={selectedDate.getDate()}
        options={getDaysInMonth()}
      />
    </>
  );

  const MonthSelector = (
    <>
      <Label htmlFor={`${id}-month`} />
      <Select
        onChange={e => {
          return setSelectedDate(
            new Date(
              selectedDate.getFullYear(),
              months.indexOf(e.target.value),
              selectedDate.getDate()
            )
          );
        }}
        id={`${id}-month`}
        name="month"
        className={classNames('month', className)}
        selectedOption={months[selectedDate.getMonth()]}
        options={getMonthOptions()}
      />
    </>
  );

  const YearSelector = (
    <>
      <Label htmlFor={`${id}-year`} />
      <Select
        onChange={e => {
          return setSelectedDate(
            new Date(e.target.value, selectedDate.getMonth(), selectedDate.getDate())
          );
        }}
        id={`${id}-year`}
        name="year"
        className={classNames('year', className)}
        selectedOption={selectedDate.getFullYear()}
        options={getYearOptions()}
      />
    </>
  );

  const renderSelector = value => {
    switch (value.toLowerCase()) {
      case 'mmddyy':
      case 'mmddyyyy':
        return [MonthSelector, DaySelector, YearSelector];
      case 'mmyy':
      case 'mmyyyy':
        return [MonthSelector, YearSelector];
      case 'ddmmyy':
      case 'ddmmyyyy':
      default:
        return [DaySelector, MonthSelector, YearSelector];
    }
  };

  return <div className={className}>{renderSelector(format)}</div>;
};

DateSelector.defaultProps = {
  id: 'date-selector',
  className: 'date-selector',
  format: 'ddmmyy',
  startDate: new Date(),
  endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 50)),
  locale: 'default',
};

export default styled(DateSelector)`
  ${styles};
`;

export { DateSelector as DateSelectorVanilla };
