const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },
    extensions: [ '.tsx', '.ts', '.js' ],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },

  plugins: [
    new htmlPlugin()
  ],

  mode: 'development',

  devtool: 'source-map'
}
