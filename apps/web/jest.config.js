export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "js", "html"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
};
