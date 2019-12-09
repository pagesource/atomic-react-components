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
  ],
  coverageReporters: ['lcov', 'json', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  verbose: true,
  testMatch: ['<rootDir>/lib/**/*.test.js'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
};
