module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest.setup.js'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/out/'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage',
  collectCoverageFrom: [
    '**lib/components/**/*.js',
    '**lib/core/**/*.js',
    '!**lib/components/**/*.mock.js',
    '!**lib/components/**/*.story.js',
    '!**lib/components/**/*.styles.js',
    '!**lib/styles/**/*.js',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: [
    // exceptions.
    '/node_modules/',
    'components/molecules/Form/FieldRadioGroup/FieldRadioGroup.js',
    'components/molecules/ArticleThumbnail/ArticleThumbnail.js',
    'components/molecules/Form/FieldCheckbox/FieldCheckbox.js',
    'components/molecules/Breadcrumb/Breadcrumb.js',
    'components/molecules/Form/FieldInput/FieldInput.js',
  ],
  coverageReporters: ['lcov', 'json', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  verbose: true,
  testMatch: ['<rootDir>/lib/**/*.test.js'],
};
