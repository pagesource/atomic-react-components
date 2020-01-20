import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../lib/components/', true, /\.stories\.(js|mdx)$/), module);
