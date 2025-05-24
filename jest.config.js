const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/src/testing/setupTests.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-fixed-jsdom",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/cypress/", "<rootDir>/code-stages/"],
};

module.exports = createJestConfig(customJestConfig);
