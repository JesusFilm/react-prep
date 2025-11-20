import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  transformIgnorePatterns: ['node_modules/(?!uuid)'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testRegex: '.*\\.test\\.tsx?$',
}

export default createJestConfig(customJestConfig)
