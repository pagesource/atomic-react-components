export const defaultConfig = [
  {
    src: 'https://maps.googleapis.com/maps/api/js',
    async: true,
    scriptId: 'maps1',
  },
  {
    src: 'https://pay.google.com/gp/p/js/pay.js',
    scriptId: 'pay1',
  },
];

export const ignoreDuplicateScriptID = [
  {
    src: 'https://maps.googleapis.com/maps/api/js?ignoreDups=true',
    async: true,
    scriptId: 'maps2',
  },
  {
    src: 'https://pay.google.com/gp/p/js/pay.js?ignoreDups=true',
    scriptId: 'pay2',
  },
  {
    src: 'https://pay.google.com/gp/p/js/pay.js?ignoreDups=true',
    scriptId: 'pay2',
  },
];
