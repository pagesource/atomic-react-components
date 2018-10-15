// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
// Import Vanilla Component to display markup and props
import Modal from './Modal';


storiesOf('Molecules', module).addWithChapters('Modal', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <React.Fragment>
              <button onClick={() => this.setState({
                isModalOpen: true,
              })}
              >
                Open Modal
              </button>
              <Modal isOpen={false}>
                <h2>Hello World</h2>
              </Modal>
            </React.Fragment>
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
  ],
});
