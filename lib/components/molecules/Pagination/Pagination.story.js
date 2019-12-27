import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Pagination.mock';

// Import Styled Component to showcase variations
import Pagination, { PaginationVanilla } from '.';

const items = [
  { name: 'john', surname: 'tocho' },
  { name: 'harry', surname: 'glady' },
  { name: 'schnidel', surname: 'hulk' },
  { name: 'nigel', surname: 'mape' },
  { name: 'joshua', surname: 'groll' },
  { name: 'will', surname: 'grock' },
  { name: 'garton', surname: 'larson' },
  { name: 'freewilly', surname: 'mint' },
  { name: 'benjamin', surname: 'peck' },
  { name: 'glock', surname: 'flitch' },
];
const renderList = i =>
  i.map((e, ind) => (
    <li key={ind}>
      {e.name} : {e.surname}
    </li>
  ));
const renderTable = i =>
  i.map((e, ind) => (
    <tr key={ind}>
      <td>{e.name}</td>
      <td>{e.surname}</td>
    </tr>
  ));

storiesOf('Atoms', module).addWithChapters('Pagination', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            /*(
            <PaginationVanilla
              {...defaultConfig}
              className={`hide-default-sample ${defaultConfig.className}`}
            />*/
            <div className="app-container">
              <div>
                <h2>Using Tables</h2>
                <table>
                  <tr>
                    <th>Name:</th>
                    <th>Surname:</th>
                  </tr>
                  <tbody>
                    <Pagination size={3} render={renderTable} items={items} />
                  </tbody>
                </table>
              </div>
            </div>
          ),
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
    {
      title: 'Primary Pagination Variations',
      sections: [
        {
          title: 'Variation Name',
          sectionFn: () => (
            <div>
              <h2>Using just functions and hooks</h2>
              <ul>
                <Pagination size={3} render={renderList} items={items} />
              </ul>
            </div>
          ),
        },
      ],
    },
  ],
});
/*
import React from 'react';
import './App.css';
import Calculator from '../calculator';
import Pagination from '../Pagination'
import Pagination2 from '../Pagination/Pagination2';
const items = [
    {name:'john',surname:'tocho'},
    {name:'harry',surname:'glady'},
    {name:'schnidel',surname:'hulk'},
    {name:'nigel',surname:'mape'},
    {name:'joshua',surname:'groll'},
    {name:'will',surname:'grock'},
    {name:'garton',surname:'larson'},
    {name:'freewilly',surname:'mint'},
    {name:'benjamin',surname:'peck'},
    {name:'glock',surname:'flitch'},
];
const renderList = (i)=>i.map((e,ind)=><div key={ind}>{e.name} : {e.surname}</div>);
const renderTable = (i)=>i.map((e,ind)=><tr key={ind}><td>{e.name}</td><td>{e.surname}</td></tr>);
    const App=()=><div className="app-container">
    <div>
        <h2>Using just functions and hooks</h2>
        <table>
            <tr>
                <th>Name:</th>
                <th>Surname:</th>
            </tr>
            <tbody>
                <Pagination size={3} render={renderTable} items={items}/>
            </tbody>
        </table>
        
        <h2>Using stateful components</h2>
        
    </div>
</div>;
export default App;
*/
