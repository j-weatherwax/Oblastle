module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testTimeout: 30000,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  // moduleNameMapper: {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
  //     "<rootDir>/__mocks__/fileMock.js",
  //   "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
  // },
  setupFilesAfterEnv: ["./jest.setup.js"],
};
