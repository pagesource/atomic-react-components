import { css } from 'styled-components';

const styles = css`
  display: flex;
  flex-flow: row wrap;
  .quote {
    &__mark {
      flex: 1 5%;
      ${props => (props.markStyle ? props.markStyle : '')};
    }
    &__content {
      ${props => (props.contentStyle ? props.contentStyle : '')};
      flex: 1 95%;
    }

    &__author {
      ${props => (props.authorStyle ? props.authorStyle : '')};
      flex: 1 100%;
      flex-direction: row-reverse;
    }
    ${props => (props.quoteStyle ? props.quoteStyle : '')};
  }
`;

export default styles;
