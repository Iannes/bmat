module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(json|txt|csv)$/i,
        loader: 'raw-loader',
      },
    ],
  },
};
