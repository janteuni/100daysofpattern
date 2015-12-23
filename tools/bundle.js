import webpack from 'webpack';
import task from './lib/task';
import webpackConfig from './webpack.config.prod.js';

export default task(function bundle() {
  return new Promise((resolve, reject) => {
    const bundler = webpack(webpackConfig);
    const run = (err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    };
    bundler.run(run);
  });
});
