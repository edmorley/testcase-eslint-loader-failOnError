module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: false,
          //emitWarning: true,
          baseConfig: {
            extends: 'eslint:recommended',
          }
        },
      },
    ],
  },
};
