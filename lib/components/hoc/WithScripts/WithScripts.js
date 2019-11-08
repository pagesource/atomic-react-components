// @flow
/**
 *HOC
 * WithScripts
 *
 */

import React from 'react';
import { getDisplayName } from '../../../core/utils/getDisplayName';

const withScripts = (WrappedComponent, injectScript) => {
  // ...and returns another component...
  class WithScripts extends React.Component {
    // eslint-disable-line
    constructor(props) {
      super(props);
      this.getScriptTag = this.getScriptTag.bind(this);
      this.scriptLoaded = this.scriptLoaded.bind(this);

      this.state = {
        injectedScript: {},
      };
    }

    componentDidMount() {
      if (injectScript && injectScript[0]) {
        for (let i = 0; i < injectScript.length; i += 1) {
          const scriptTag = this.getScriptTag(injectScript[i]);
          document.body.appendChild(scriptTag);
        }
      }
    }

    getScriptTag(scriptObj) {
      const scriptElem = document.createElement('script');
      scriptElem.type = 'text/javascript';
      scriptElem.id = scriptObj.scriptId;
      if (scriptObj.loadedCallback) {
        scriptElem.onload = () => {
          this.scriptLoaded(scriptObj.scriptId);
          return scriptObj.loadedCallback();
        };
      }
      if (scriptObj.isAsync) {
        scriptElem.async = scriptObj.isAsync;
      }
      scriptElem.src = scriptObj.src;
      return scriptElem;
    }

    scriptLoaded(scriptId) {
      const { injectedScript } = this.state;
      this.setState({
        injectedScript: { ...injectedScript, [scriptId]: true },
      });
    }

    render() {
      const { injectedScript } = this.state;
      const injectedProp = { injectedScript };
      return <WrappedComponent {...this.props} injectedProp={injectedProp} />;
    }
  }
  WithScripts.displayName = `WithScripts(${getDisplayName(WrappedComponent)})`;
  return WithScripts;
};

export default withScripts;
