import { css } from 'styled-components';

export default css`
  margin: 0 0 ${props => props.theme.spacing.UNIT_1} 0;
  li {
    margin-bottom: ${props => props.theme.spacing.UNIT_1};
  }
  ${props =>
    props.nested
      ? `
        li > ul, ol {
          margin-left: ${props.theme.spacing.UNIT_2};
        }
      `
      : ''};

  ${props =>
    props.inline
      ? `
        li {
          display: inline-block;
        }
      `
      : ''};

  ${props =>
    props.noDefaultView
      ? `
        list-style: none;
        padding: 0;
      `
      : ''};

  ${props =>
    props.noMargin
      ? `
        margin:0;
        li{
          margin: 0;
        }
      `
      : ''};

  ${props =>
    props.borderSeparator
      ? `
        padding: 0;
        li{
          padding: 0 ${props.theme.spacing.UNIT_1};
          margin: 0;
          ${props.theme.border.LIST_INLINE};
        }
        li:last-child{
          border-right: 0 none;
          padding-right: 0;
        }
        li:first-child{
          padding-left: 0;
        }
      `
      : ''};

  ${props => (props.inheritedStyles ? props.inheritedStyles : '')};
`;
