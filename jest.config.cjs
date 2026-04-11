module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  collectCoverageFrom: [
    "src/controller/**/*.js",
    "src/service/**/*.js",
    "src/middleware/**/*.js",
    "!src/**/*.test.js",
  ],
  clearMocks: true,
};
