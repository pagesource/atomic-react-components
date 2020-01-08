// @flow
/**
 *
 * Chart
 *
 */
import React, { useEffect, cloneElement, Children } from 'react';
import styled from 'styled-components';

import styles from './Chart.style';
import type { Props } from './types';

const Chart = ({ className, style, children, config }: Props): Node => {
  const { type, data } = config;
  const childrenWithProps =
    children && Children.map(children, child => cloneElement(child, { type, data }));

  let chartist = '';
  let chart = '';

  const updateChart = () => {
    /* eslint-disable global-require */
    const Chartist = require('chartist');
    /* eslint-enable global-require */

    const options = config.options || {};
    const responsiveOptions = config.responsiveOptions || [];
    let event;

    if (chartist) {
      chartist.update(data, options, responsiveOptions);
    } else {
      chartist = new Chartist[type](chart, data, options, responsiveOptions).on('draw', function(
        dataForChart
      ) {
        if (type === 'Bar') {
          dataForChart.element.attr({
            style: 'stroke-width: 0px',
          });
          if (dataForChart.seriesIndex === 0) {
            dataForChart.element.attr({
              style: 'stroke-width: 10px',
            });
            dataForChart.element.animate(
              {
                y2: {
                  begin: 0,
                  dur: 500,
                  from: dataForChart.y1,
                  to: dataForChart.y2,
                },
              },
              false
            );
          }

          if (dataForChart.seriesIndex === 1) {
            dataForChart.element.animate(
              {
                y2: {
                  begin: 500,
                  dur: 500,
                  from: dataForChart.y1,
                  to: dataForChart.y2,
                },
              },
              false
            );
            setTimeout(
              () =>
                dataForChart.element.attr({
                  style: 'stroke-width: 10px',
                }),
              500
            );
          }
          if (dataForChart.seriesIndex === 2) {
            dataForChart.element.animate(
              {
                y2: {
                  begin: 1000,
                  dur: 500,
                  from: dataForChart.y1,
                  to: dataForChart.y2,
                },
              },
              false
            );
            setTimeout(
              () =>
                dataForChart.element.attr({
                  style: 'stroke-width: 10px',
                }),
              1000
            );
          }
        }
      });

      if (config.listener) {
        for (event in config.listener) {
          if (config.listener.hasOwnProperty(event)) {
            chartist.on(event, config.listener[event]);
          }
        }
      }
    }

    return chartist;
  };

  useEffect(() => {
    updateChart();
  }, [config]);

  return (
    <div className={`ct-chart ${className || ''}`} ref={ref => (chart = ref)} style={style}>
      {childrenWithProps}
    </div>
  );
};

Chart.defaultProps = {};

export default styled(Chart)`
  ${styles};
`;

export { Chart as ChartVanilla };
