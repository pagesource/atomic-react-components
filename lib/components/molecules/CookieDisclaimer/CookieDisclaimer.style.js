import { css } from 'styled-components';

const disclaimerStyles = css`
  display: flex;
  flex-flow: column;
  border: 1px solid grey;
  padding: ${props => props.theme.spacing.UNIT_4};
  animation: disclaimer-slide-up 0.5s ease-in-out;
  position: absolute;
  top: 10px;
  @keyframes disclaimer-slide-up {
    from {
      opacity: 0;
      transform: translateY(0%);
    }
    to {
      opacity: 1;
      transform: translateY(10px);
    }
  }
  align-items: flex-end;
  .displayRow {
    display: flex;
    flex-flow: row;
    padding: ${props => props.theme.spacing.UNIT_2} 0;
  }
  .displayColumn {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding: ${props => props.theme.spacing.UNIT_2} 0;
  }
`;

export default disclaimerStyles;
