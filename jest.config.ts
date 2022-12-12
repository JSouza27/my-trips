import type { JestConfigWithTsJest } from 'ts-jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './'
})

const esModules = ['@react-leaflet', 'react-leaflet'].join('|')

const config: JestConfigWithTsJest = {
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/*.tsx',
    '!src/**/global.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(react-leaflet/lib|@react-leaflet/core/lib)/)',
    `/node_modules/(?!${esModules})`
  ]
}

export default createJestConfig(config)
