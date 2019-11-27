import { css } from 'styled-components';

export default css`
  margin: 0 0 10px 0;
  li {
    margin-bottom: 10px;
  }
  ${props =>
    props.nested
      ? `
        li > ul, ol {
          margin-left: 20px;
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
          padding: 0 10px;
          margin: 0;
          border-right: 1px solid ${props.theme.color.CTA_SECONDARY};
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
