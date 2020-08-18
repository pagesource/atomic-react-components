/**
 *
 * ProgressIndicator
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import styles from './ProgressIndicator.style';

/*
 * Step Component  -> returing <li/> childrens, to be used in storybook
 */
const Step = ({ children, currentItemStatus }) => {
  return (
    <li className={currentItemStatus}>
      <span>{children}</span>
    </li>
  );
};

/*
 * This function is returning the status of currentItem as per its index value
 */
const getStatus = (currentStep, index) => {
  let status = 'inactive';
  if (currentStep - 1 === index) {
    status = 'active';
  } else if (currentStep - 1 > index) {
    status = 'completed';
  } else {
    status = 'inactive';
  }
  return status;
};
/*
 * PrpgressIndicator Component  -> Container for Everything
 */
const ProgressIndicator = ({ children, className, currentStep, variation }) => {
  const count = React.Children.count(children);
  const countNum = count > 0 ? count : 0;
  /*
   * Calculating the ProgressBar Width dynamically
   */
  const progressIndWidth = (((currentStep - 1) * 100) / countNum).toFixed(2);

  /*
   * This function is rendering the children as per Step Indicator variation  passes by user as a prop
   */
  let currentItemtStatus;
  const renderChildren = () => {
    return React.Children.map(children, (step, index) => {
      currentItemtStatus = getStatus(currentStep, index);
      return React.cloneElement(step, { variation, currentItemtStatus, itemIndex: index });
    });
  };

  /*
   * calling renderChildren function outside the return statement in order to prevent it from calling everytime during runtime in React Component
   */
  const renderChild = renderChildren();
  return (
    <>
      <div className={classnames('progress-indicator-container', className)}>
        {variation === 'bar' && (
          <p className={classnames('progress-label')}>{`${parseInt(progressIndWidth, 10)}%`}</p>
        )}
        <div role="progressbar" className={classnames('progress-wrapper')}>
          <progress
            className={classnames(`bar`, currentItemtStatus)}
            max="100"
            value={progressIndWidth}
          />
          <ol className={classnames('linear-bar')}>{renderChild}</ol>
        </div>
      </div>
    </>
  );
};

ProgressIndicator.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  currentStep: PropTypes.number,
  variation: PropTypes.string,
};

Step.propTypes = {
  children: PropTypes.node,
  currentItemStatus: PropTypes.string,
};

/*
 * Default Mandatory Props
 */
ProgressIndicator.defaultProps = {
  variation: 'bar',
  currentStep: '2',
};

Step.defaultProps = {
  children: '',
  currentItemStatus: 'inactive',
};

ProgressIndicator.Step = Step;

const StyledProgressIndicator = styled(ProgressIndicator)`
  ${styles};
`;

export default StyledProgressIndicator;

export { ProgressIndicator as ProgressIndicatorVanilla };
