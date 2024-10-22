var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./app.js",
  devtool: "source-map",
  output: {
    path: path.resolve("./public"),
    filename: "app.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css", ".json"],
    alias: {
      jquery: path.join(__dirname, "./jquery-stub.js"),
    },
  },
  plugins: [
    //
  ],

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$|.jsx?$/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["./node_modules"],
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|webp)(\?[a-z0-9=.]+)?$/,
        type: "asset/inline",
      },
    ],
  },
  devServer: {
    port: 8080,
    host: "localhost",
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    watchFiles: {
      paths: ["src/**/*", "public/**/*"], // Replaces 'watchOptions' for more granular control
      options: {
        usePolling: true,
        interval: 1000,
        aggregateTimeout: 300,
      },
    },
    static: {
      directory: path.join(__dirname, "public"), // Replaces 'contentBase' in Webpack 5
    },
    open: true,
    proxy: [
      {
        context: ["/api/*"], // Specifies the paths to proxy
        target: "http://127.0.0.1:5005",
        changeOrigin: true,
        secure: false,
      },
    ],
  },
};
