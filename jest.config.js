const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@storybook/.*\\.js|.*\\.stories\\.tsx$))",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  preset: "ts-jest",
};

module.exports = createJestConfig(customJestConfig);
