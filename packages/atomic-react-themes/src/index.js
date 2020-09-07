import { createGlobalStyle } from 'styled-components';
import globalStyles from './globalStyles';
import theme from './themes/base';

const globalStyleObj = createGlobalStyle`
  ${globalStyles}
`;

export { theme };
export default globalStyleObj;
