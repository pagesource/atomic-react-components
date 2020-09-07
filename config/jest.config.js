module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest.setup.js'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/out/', '<rootDir>/packages/(?:.+?)/lib/'],
  testResultsProcessor: 'jest-sonar-reporter',
  // collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage',
  collectCoverageFrom: [
    '**packages/**/*.js',
    '!**packages/**/*.mock.js',
    '!**packages/**/*.story.js',
    '!**packages/**/*.styles.js',
    '!**lib/styles/**/*.js',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: [
    // exceptions.
    '/node_modules/',
    '<rootDir>/packages/(?:.+?)/lib/',
  ],
  coverageReporters: ['lcov', 'json', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  verbose: true,
  testMatch: ['<rootDir>/packages/**/*.test.js'],
  moduleNameMapper: {
    '\\.(css|svg)$': 'identity-obj-proxy',
  },
};
