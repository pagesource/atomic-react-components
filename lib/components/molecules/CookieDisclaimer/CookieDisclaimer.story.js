import React from 'react';
import { storiesOf } from '@storybook/react';

import { CookieDisclaimerVanilla } from './CookieDisclaimer';
import { stickyCookieDisclaimer } from './CookieDisclaimer.mock';
import Heading from '../../atoms/Heading';
import Para from '../../atoms/Para';
import Anchor from '../../atoms/Anchor';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules/Cookie Disclaimer', module)
  .addParameters({ jest: ['Cookie Disclaimer'] })
  .add('Sticky Bottom', () => (
    <CookieDisclaimerVanilla {...stickyCookieDisclaimer}>
      <Heading>Privacy and Cookie Policy</Heading>
      <Para>
        We use the cookies to give you the best experience on our website. By continuing, you're
        agreeing to our use of cookies. we recently updated our policy.
        <Anchor>Learn More</Anchor>
      </Para>
    </CookieDisclaimerVanilla>
  ));
