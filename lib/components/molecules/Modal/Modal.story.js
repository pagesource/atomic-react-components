// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
// Import Vanilla Component to display markup and props
import Modal from './Modal';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module)
  .addParameters({ jest: ['Modal'] })
  .addWithChapters('Modal', {
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <>
                <Modal isOpen>
                  <h2>Hello World</h2>
                </Modal>
              </>
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
