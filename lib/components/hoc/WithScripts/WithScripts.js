// @flow
/**
 *HOC
 * WithScripts
 *
 */

import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import { getDisplayName } from '../../../core/utils/getDisplayName';

const withScripts = (WrappedComponent: any, injectScript: any): Function => {
  // ...and returns another component...
  const WithScripts = (): Node => {
    const [injectedScript, setInjectedScript] = useState({});

    const scriptLoaded = (scriptId) => {
      setInjectedScript({ ...injectedScript, [scriptId]: true });
    };

    const getScriptTag = (scriptObj) => {
      const scriptElem = document.createElement('script');
      scriptElem.type = 'text/javascript';
      scriptElem.id = scriptObj.scriptId;
      scriptElem.onload = () => {
        scriptLoaded(scriptObj.scriptId);
        return scriptObj.loadedCallback && scriptObj.loadedCallback();
      };

      if (scriptObj.isAsync) {
        scriptElem.async = scriptObj.isAsync;
      }
      scriptElem.src = scriptObj.src;
      return scriptElem;
    };

    const injectScriptTag = () => {
      if (injectScript && injectScript[0]) {
        for (let i = 0; i < injectScript.length; i += 1) {
          if (
            injectScript[i] &&
            !injectedScript[injectScript[i].scriptId] &&
            !document.getElementById(injectScript[i].scriptId)
          ) {
            const scriptTag = getScriptTag(injectScript[i]);
            // $flow-disable-line eslint-disable-line
            document.body.appendChild(scriptTag);
          }
        }
      }
    };

    useEffect(injectScriptTag);
    return <WrappedComponent injectedProp={injectedScript} />;
  };

  WithScripts.displayName = `WithScripts(${getDisplayName(WrappedComponent)})`;

  return WithScripts;
};

export default withScripts;
