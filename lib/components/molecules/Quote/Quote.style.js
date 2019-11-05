import { css } from 'styled-components';

const styles = css`
  .quote {
    &__mark {
      font-size: 60px;
      float: left;
    }
    &__content {
      padding-top: 5px;
      ${props => (props.contentStyle ? props.contentStyle : '')};
    }

    &__author {
      float: right;
      ${props => (props.authorStyle ? props.authorStyle : '')};
    }
    ${props => (props.quoteStyle ? props.quoteStyle : '')};
  }
`;

export default styles;
