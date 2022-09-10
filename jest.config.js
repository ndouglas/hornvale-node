const path = require('path');

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'test')],
  moduleNameMapper: {
    '^@/jest/(.*)$': '<rootDir>/src/jest/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-node',
  collectCoverageFrom: [
    'local_modules/**/*.js',
    'src/**/*.js',
    '!**/**.test.js',
  ],
  coverageThreshold: {
    global: {
      statements: 29,
      branches: 28,
      functions: 26,
      lines: 29,
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

module.exports = customJestConfig;
