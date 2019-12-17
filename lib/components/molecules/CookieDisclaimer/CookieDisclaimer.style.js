import { css } from 'styled-components';

const disclaimerStyles = css`
  display: flex;
  flex-flow: column;
  border: 1px solid grey;
  padding: ${props => props.theme.spacing.UNIT_4};
  align-items: flex-end;
  .displayRow {
    display: flex;
    flex-flow: row;
    padding: ${props => props.theme.spacing.UNIT_2} 0;
  }
  .displayColumn {
    display: flex;
    flex-flow: row;
    padding: ${props => props.theme.spacing.UNIT_2} 0;
  }
`;

export default disclaimerStyles;
