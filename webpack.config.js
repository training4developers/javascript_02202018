module.exports = {
  entry: { 'app': './public/js/app.js' },
  output: { publicPath: '/js', filename: 'bundle.js' },
  module: { rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ {
          loader: 'babel-loader',
          options: {
            presets: [ ['@babel/preset-env', { modules: false }] ],
            plugins: [
              require('babel-plugin-transform-class-properties'),
              require('babel-plugin-transform-do-expressions'),
              require('babel-plugin-transform-object-rest-spread'),
            ]
          }
        } ]
      },
    ]
  },
  devServer: { contentBase: "public", port: 3000 },
  devtool: 'source-map',
}