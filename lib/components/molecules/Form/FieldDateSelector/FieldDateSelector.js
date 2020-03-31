// @flow
/**
 *
 * FieldDateSelector
 *
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import classNames from 'classnames';
import styles from './FieldDateSelector.style';
import type { Props } from './types';
import Select from '../FieldSelect';

const FieldDateSelector = ({
  id,
  className,
  format,
  startDate,
  endDate,
  locale,
  dateLabel,
  monthLabel,
  yearLabel,
}: Props): Node => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [months, setMonths] = useState([]);

  const monthsList = () => {
    const date = new Date();
    const monthsOptions = [];
    for (let i = 0; i < 12; i += 1) {
      date.setMonth(i);
      monthsOptions.push(date.toLocaleString(locale, { month: 'long' }));
    }
    return monthsOptions;
  };

  useEffect(() => {
    setMonths(monthsList());
  }, []);

  useEffect(() => {
    setSelectedDay(startDate.getDate());
    setSelectedMonth(startDate.getMonth());
    setSelectedYear(startDate.getFullYear());
  }, [startDate, endDate]);

  const range = (start, end, step) => {
    const arr = [];
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
    return arr;
  };

  const getDay = (date, type) => {
    const day = type === 'start' ? 1 : new Date(selectedYear, selectedMonth + 1, 0).getDate();
    if (Number(selectedMonth) === date.getMonth() && Number(selectedYear) === date.getFullYear()) {
      return date.getDate();
    }
    return day;
  };

  const getMonth = (date, type) => {
    const month = type === 'start' ? 0 : months.length - 1;
    if (Number(selectedYear) === date.getFullYear()) {
      return date.getMonth();
    }
    return month;
  };

  const getDaysInMonth = () => {
    const startDay = getDay(startDate, 'start');
    const endDay = getDay(endDate, 'end');
    return range(startDay, endDay, 1);
  };

  const getMonthOptions = () => {
    let monthOptions = [...months];
    const startMonth = getMonth(startDate, 'start');
    const endMonth = getMonth(endDate, 'end');
    monthOptions = monthOptions.slice(startMonth, endMonth + 1);
    return monthOptions;
  };

  const getYearOptions = () => {
    return range(startDate.getFullYear(), endDate.getFullYear(), 1);
  };

  const DaySelector = (
    <>
      <Select
        onChange={(e) => {
          return setSelectedDay(e.target.value);
        }}
        id={`${id}-day`}
        name="day"
        label={dateLabel}
        className={`${classNames('date', className)} date-selector-field`}
        selectedOption={selectedDay}
        options={getDaysInMonth()}
      />
    </>
  );

  const MonthSelector = (
    <>
      <Select
        onChange={(e) => {
          return setSelectedMonth(months.indexOf(e.target.value));
        }}
        id={`${id}-month`}
        name="month"
        label={monthLabel}
        className={`${classNames('Month', className)} date-selector-field`}
        selectedOption={months[selectedMonth]}
        options={getMonthOptions()}
      />
    </>
  );

  const YearSelector = (
    <>
      <Select
        onChange={(e) => {
          return setSelectedYear(e.target.value);
        }}
        id={`${id}-year`}
        name="year"
        label={yearLabel}
        className={`${classNames('year', className)} date-selector-field`}
        selectedOption={selectedYear}
        options={getYearOptions()}
      />
    </>
  );

  const renderSelector = (value) => {
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

FieldDateSelector.defaultProps = {
  id: 'date-selector',
  className: 'date-selector',
  format: 'ddmmyy',
  startDate: new Date(),
  endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 50)),
  locale: 'default',
};

export default styled(FieldDateSelector)`
  ${styles};
`;

export { FieldDateSelector as FieldDateSelectorVanilla };
