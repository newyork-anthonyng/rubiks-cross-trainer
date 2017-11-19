module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./dist/index.js"
  },
  module: {
    loaders: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
