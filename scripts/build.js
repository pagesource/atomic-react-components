const { green, cyan, red } = require('chalk');
const webpack = require('webpack');

const path = require('path');
const fse = require('fs-extra');
const execa = require('execa');
const getConfig = require('../config/dist.webpack.config');

const targets = process.argv.slice(2);

const srcRoot = path.join(__dirname, '../lib');

const libRoot = path.join(__dirname, '../dist');
const distRoot = path.join(libRoot, 'dist');
const esRoot = path.join(libRoot, 'es');

const clean = () => fse.existsSync(libRoot) && fse.removeSync(libRoot);

const step = (name, root, fn) => async () => {
  console.log(cyan('Building: ') + green(name));
  await fn();
  console.log(cyan('Built: ') + green(name));
};

const shell = (cmd) => execa(cmd, { stdio: ['pipe', 'pipe', 'inherit'], shell: true });

const has = (t) => !targets.length || targets.includes(t);

/**
 * Run babel over the src directory and output
 * compiled common js files to ./lib.
 */
const buildLib = step('commonjs modules', libRoot, async () => {
  await shell(`npx babel ${srcRoot} --out-dir ${libRoot} --env-name "lib"`);
  await shell('echo "// @flow\n\nexport * from \'../lib\'" > dist/index.js.flow');
});

/**
 * Run babel over the src directory and output
 * compiled es modules (but otherwise es5) to /es
 */
const buildEsm = step('es modules', esRoot, async () => {
  await shell(`npx babel ${srcRoot} --out-dir ${esRoot} --env-name "esm"`);
  await shell('echo "// @flow\n\nexport * from \'../../lib\'" > dist/es/index.js.flow');
});

/**
 * Bundles a minified and unminified version of react-bootstrap including
 * all it's immediate dependencies (excluding React, ReactDOM, etc)
 */
const buildDist = step(
  'browser distributable',
  distRoot,
  () =>
    new Promise((resolve, reject) => {
      webpack([getConfig(distRoot, false), getConfig(distRoot, true)], async (err, stats) => {
        if (err || stats.hasErrors()) {
          reject(err || stats.toJson().errors);
          return;
        }

        resolve();
      });
    })
);

console.log(green(`Building targets: ${targets.length ? targets.join(', ') : 'all'}\n`));

clean();

Promise.all([has('lib') && buildLib(), has('es') && buildEsm(), has('dist') && buildDist()]).catch(
  (err) => {
    if (err) console.error(red(err.stack || err.toString()));
    process.exit(1);
  }
);
