const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CLIENT_DIR = path.resolve(__dirname, 'src/client');
const SERVER_DIR = path.resolve(__dirname, 'src/server/generated');
const DIST_DIR = path.resolve(__dirname, 'dist');

export const babelLoader = {
  test: /\.js$/,
  include: CLIENT_DIR,
  loader: 'babel-loader',
};

export const cssLoader = {
  test:/\.less$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
};

const aliases = {
  components: path.resolve(CLIENT_DIR,  'components'),
  reducers: path.resolve(CLIENT_DIR, 'reducers'),
  actions: path.resolve(CLIENT_DIR, 'actions')
};

export const client = {
  name: 'client',
  target: 'web',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [babelLoader, cssLoader]
  },
  resolve: {
    alias: aliases
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ]
};

export consts server = {
  name: 'server',
  target: 'node',
  context: CLIENT_DIR,
  entry: {
    app: 'components/app/index.js'
  },
  output: {
    path: SERVER_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  externals: /^[a-z\-0-9]+$/,
  module: {
    loaders: [babelLoader, cssLoader]
  },
  resolve: {
    alias: aliases
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};
