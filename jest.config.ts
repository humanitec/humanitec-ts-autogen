import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 30000,
  extensionsToTreatAsEsm: [".ts"],
  // See https://github.com/kulshekhar/ts-jest/issues/1057
  transform: {
    "\\.[jt]s?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
};

export default config;
