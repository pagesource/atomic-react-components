module.exports = {
  rootDir: '../',
  setupFiles: ['<rootDir>/config/jest.setup.js'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/out/'],
  testResultsProcessor: 'jest-sonar-reporter',
  // collectCoverage: true,
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
      branches: 45,
      functions: 45,
      lines: 65,
      statements: 60,
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  verbose: true,
  testMatch: ['<rootDir>/lib/**/*.test.js'],
  moduleNameMapper: {
    '\\.(css|svg)$': 'identity-obj-proxy',
  },
};
