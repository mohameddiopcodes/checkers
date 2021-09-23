module.exports = {
    entry: './js/main.js',
    mode: 'development',
    watch: true,
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
    },
  };