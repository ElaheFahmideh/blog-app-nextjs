/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames.map((f) => `"${path.relative(process.cwd(), f)}"`).join(' ')}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => `"${path.relative(process.cwd(), f)}"`).join(' ')}`;

module.exports = {
  '*.{ts,tsx,js,jsx}': [buildEslintCommand, buildPrettierCommand],
  '*.{json,md,css,scss,html}': [buildPrettierCommand],
};
