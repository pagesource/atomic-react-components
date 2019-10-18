import { createGlobalStyle } from 'styled-components';
import globalStyles from './globalStyles';

const globalStyleObj = createGlobalStyle`
  ${globalStyles}
`;

export default globalStyleObj;
