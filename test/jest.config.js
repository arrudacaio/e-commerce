const { resolve } = require('path')
const root = resolve(__dirname)
const rootConfig = require(`${root}/jest.config.js`)

module.exports = {
  ...rootConfig, ...{
    rootDir: root,
    displayName: 'end2end-tests',
    // Setup file that will run before testing
    // Its amazing to setup database etc.
    setupFilesAfterEnv: ['<rootDir>/test/**/jest-setup.ts'],
    testMatch: ['<rootDir>/test/**/*.test.ts']

  }
}