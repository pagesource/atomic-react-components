import { mount } from 'enzyme';

import withScripts from '../index';

import { defaultConfig, ignoreDuplicateScriptID } from '../WithScripts.mock';

const comp1 = () => (
  <div>Hoc will consume the wrapper Component A and injected respective script details</div>
);

const ComponentA = withScripts(comp1, defaultConfig);

const comp2 = () => (
  <div>
    Hoc will consume the wrapper Component A and injected respective script details without
    Duplicate ids
  </div>
);

const ComponentB = withScripts(comp2, ignoreDuplicateScriptID);

describe('<WithScripts />', () => {
  beforeEach(() => {
    // Avoid `attachTo: document.body` Warning
    const div = document.createElement('div');
    div.setAttribute('id', 'container');
    document.body.appendChild(div);
  });

  afterEach(() => {
    const div = document.getElementById('container');
    if (div) {
      document.body.removeChild(div);
    }
    const scriptsCollection = document.getElementsByTagName('script');
    while (scriptsCollection.length > 0) {
      scriptsCollection[0].parentNode.removeChild(scriptsCollection[0]);
    }
  });

  test('should render correctly', () => {
    const WithScriptsComponent = mount(<ComponentA />, {
      attachTo: document.getElementById('container'),
    });
    expect(document.getElementsByTagName('script').length).toEqual(2);
    expect(WithScriptsComponent).toMatchSnapshot();
    WithScriptsComponent.detach();
  });
  test('should not render duplicate ids', () => {
    const WithScriptsComponent = mount(<ComponentB />, {
      attachTo: document.getElementById('container'),
    });
    expect(document.getElementsByTagName('script').length).toEqual(2);
    expect(WithScriptsComponent).toMatchSnapshot();
    WithScriptsComponent.detach();
  });
});
