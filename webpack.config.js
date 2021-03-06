module.exports = {
  entry: {
    app:'./scripts/main.js',
    vendor:['backbone','jquery','underscore','react']
  },
  output: {
    filename: './public/[name].js'
  },
  devServer:{
    inline:true,
    port:3333
  },
  module:{
    loaders: [{
      test : /\.js$/,
      exclude: /node_modules/,
      loaders:["react-hot","babel-loader"]
    }
    ]
  }
};
