import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'node',
  bail: 0,
  verbose: true,
  roots: ['<rootDir>/jest'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
export default config;
