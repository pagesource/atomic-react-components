import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultConfig, ignoreDuplicateScriptID } from './WithScripts.mock';

// Import Styled Component to showcase variations
import withScripts from './WithScripts';

const comp1 = () => (
  <div>
    <code>
      src: https://maps.googleapis.com/maps/api/js?ignoreDups=true, async: true, scriptId: maps2
      <br />
      src: https://pay.google.com/gp/p/js/pay.js?ignoreDups=true, scriptId: pay2,
      <br />
    </code>
    Hoc will consume the wrapper Component A and injected respective script details
  </div>
);

const comp2 = () => (
  <div>
    <code>
      src: https://maps.googleapis.com/maps/api/js?ignoreDups=true, async: true, scriptId: maps2
      <br />
      src: https://pay.google.com/gp/p/js/pay.js?ignoreDups=true, scriptId: pay2,
      <br />
      src: https://pay.google.com/gp/p/js/pay.js?ignoreDups=true, scriptId: pay2,
      <br />
    </code>
    Hoc will consume the wrapper Component B and injected respective script details while ignoring
    duplicate scriptIDs Check network tab and filter maps
  </div>
);

const ComponentA = withScripts(comp1, defaultConfig);
const ComponentB = withScripts(comp2, ignoreDuplicateScriptID);

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('HOC/withScript', module)
  .addParameters({ jest: ['ScriptInjection', 'ScriptInjectionVanilla'] })
  .add('WithScripts A', () => <ComponentA />)
  .add('WithScripts No Duplicate Scripts', () => <ComponentB />);
