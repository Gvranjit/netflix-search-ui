module.exports = {
  script: "serve",
  name: "netflix-search-ui",
  env: {
    PM2_SERVE_PATH: "./dist/",
    PM2_SERVE_PORT: 2002,
  },
};
