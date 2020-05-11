
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "./index.js",
    indexedDB: "./indexDB.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackPwaManifest({
        name: "Budget Time",
        short_name: "Budget Time",
        description: "An PWA for tracking your budget.",
        background_color: "#34495e",
        start_url: "/",
        display: "standalone",
        icons: [
            {
                src: path.resolve("./public/icons/icon_192x192.png"),
                sizes: [192, 512],
            }]
    })
  ]
};

module.exports = config;