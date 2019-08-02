module.exports = {
  devServer: {
    port: 9009,
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule('jsx').include.add('/src/packages').end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => options);
  },
  pages: {
    index: {
      entry: 'src/examples/main.js',
    },
  },
  css: {
    extract: true,
    loaderOptions: {
      // jsx: {
      //   test: /\.jsx$/,
      //   loader: 'url',
      // },
    },
  },
};
