module.exports = {
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@storybook/.*\\.js|.*\\.stories\\.tsx$))",
  ],
};
