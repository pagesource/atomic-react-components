module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest.setup.js'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/.dist/'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage',
  collectCoverageFrom: [
    '**lib/components/**/*.js',
    '!**lib/styles/**/*.js',
  ],
  // Removing the following ignore patterns to assess why parts of it
  // cannot be covered - to be revisited
  // coveragePathIgnorePatterns: ['<rootDir>/.*\\.style\\.js$'],
  coverageReporters: ['lcov', 'json'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  /**
   * This can be used to specifically test certain cases individually
   */
  // testMatch: [
  //   '**/__tests__/**/*.js?(x)',
  // ],
};
