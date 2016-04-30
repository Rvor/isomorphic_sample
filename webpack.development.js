import webpack from 'webpack';
import WebpackDevServer from  'webpack-dev-server';
import * as config from './webpack.config';

const PORT = 8080;
const HOST = 'localhost';
const HOST_URI = `http://${HOST}:${PORT}`;

const devConfig = Object.assign({}, config.client, {
  name: 'dev-server',
  entry: [
    'webpack/hot/only-dev-server',
    `webpack-dev-server/client?${HOST_URI}`,
    config.client.entry
  ],
  output: Object.assign({}, config.client.output, {
    publishPath: `${HOST_URI}/`
  }),
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: config.CLIENT_DIR,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

const devServer = new WebpackDevServer(webpack(devConfig), {
  hot: true
});

devServer.listen(PORT, HOST, function(err){
  if (err) throw err;
  console.log(`Webpack server listening at ${HOST_URI}`);
});
